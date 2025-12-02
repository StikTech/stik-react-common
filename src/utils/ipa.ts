import { type Tables, type DBApp, beautifyPostgrestError } from "../main";
import JSZip from "jszip";
import { parse } from "@plist/parse";
import type { Dictionary } from "@plist/common";
import { getSupabase } from "./supabase";
import type { PostgrestSingleResponse, Session } from "@supabase/supabase-js";
import { decgbi } from "decgbi";
import { sha256 } from "js-sha256";

export async function importIPA(
  file: File
): Promise<
  | [
      Omit<DBApp, "id" | "owner">,
      Omit<Tables<"versions">, "id" | "app_id">,
      IconCandidate | null
    ]
  | null
> {
  const [info, zip] = await infoPlistFromIpa(file);

  const payloadFolder = zip.folder("Payload/")!;

  const name = info["CFBundleDisplayName"] || info["CFBundleName"] || null;
  const bundleIdentifier = info["CFBundleIdentifier"] || null;

  if (typeof name !== "string" || typeof bundleIdentifier !== "string") {
    throw "Invalid Info.plist: Missing required fields.";
  }

  let privacy = [] as [string, string][];
  const usageKeys = Object.keys(info).filter(
    (key) => key.startsWith("NS") && key.endsWith("UsageDescription")
  );
  for (const key of usageKeys) {
    const value = info[key];
    if (typeof value === "string") {
      privacy.push([key, value]);
    }
  }

  const app: Omit<DBApp, "id" | "owner"> = {
    name,
    bundle_identifier: bundleIdentifier,
    category: "other",
    created_at: new Date().toISOString(),
    description: null,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: null,
    entitlements: [],
    privacy,
  };

  const checksum = sha256(await file.arrayBuffer());
  const version = versionFromInfoPlist(info, checksum);

  const iconsDict = info["CFBundleIcons"] as Record<string, any> | undefined;
  const primaryIconDict = iconsDict
    ? (iconsDict["CFBundlePrimaryIcon"] as Record<string, any> | undefined)
    : undefined;

  let iconBaseNames: string[] = [];

  if (primaryIconDict) {
    const iconName = primaryIconDict["CFBundleIconName"];
    if (typeof iconName === "string") {
      iconBaseNames.push(iconName);
    }

    const iconFiles = primaryIconDict["CFBundleIconFiles"];
    if (Array.isArray(iconFiles)) {
      for (const f of iconFiles) {
        if (typeof f === "string") {
          iconBaseNames.push(f);
        }
      }
    }
  }

  iconBaseNames = Array.from(new Set(iconBaseNames));

  if (iconBaseNames.length === 0) {
    const legacy = info["CFBundleIconFiles"];
    if (Array.isArray(legacy)) {
      for (const f of legacy) {
        if (typeof f === "string") {
          iconBaseNames.push(f);
        }
      }
    }
  }

  if (iconBaseNames.length === 0) {
    console.warn("Warning: no icon names found in Info.plist");
  } else {
    const candidates: IconCandidate[] = [];
    const appFolderName = Object.keys(payloadFolder.files).find((p) =>
      /^Payload\/.+\.app\/$/.test(p)
    );
    if (!appFolderName) {
      throw new Error("Invalid IPA file: Missing .app folder in Payload.");
    }
    const appFolder = zip.folder(appFolderName)!;
    await Promise.all(
      Object.entries(appFolder.files).map(async ([relativePath, zipObj]) => {
        if (!zipObj || zipObj.dir) {
          return;
        }

        const filename = relativePath.split("/").pop() ?? "";
        const lower = filename.toLowerCase();

        for (const base of iconBaseNames) {
          const possibleScales = ["@3x", "@2x", ""];
          for (const scaleSuffix of possibleScales) {
            const candidateName = `${base}${scaleSuffix}`;
            if (lower === `${candidateName.toLowerCase()}.png`) {
              const scale =
                scaleSuffix === "@3x" ? 3 : scaleSuffix === "@2x" ? 2 : 1;
              const uint8 = await zipObj.async("uint8array");
              const pngUint8 = await decgbi(uint8);

              candidates.push({
                path: relativePath,
                scale,
                data: pngUint8,
              });
            }
          }
        }
      })
    );

    if (candidates.length > 0) {
      candidates.sort((a, b) => b.scale - a.scale);
      const best = candidates[0];
      return [app, version, best];
    }
  }

  return [app, version, null];
}

async function infoPlistFromIpa(file: File): Promise<[Dictionary, JSZip]> {
  const zip = await JSZip.loadAsync(file);
  if (!zip.files["Payload/"] || !zip.files["Payload/"].dir) {
    throw "Invalid IPA file: Missing Payload directory.";
  }
  const payloadFolder = zip.folder("Payload/")!;
  const infoPlist = payloadFolder.file(/\.app\/Info\.plist$/)[0];
  if (!infoPlist) {
    throw "Invalid IPA file: Missing Info.plist.";
  }
  let rawPlist = await infoPlist.async("arraybuffer");
  let parsed = parse(rawPlist);

  if (typeof parsed !== "object" || parsed === null) {
    throw "Failed to parse Info.plist.";
  }

  return [parsed as Dictionary, zip];
}

function versionFromInfoPlist(
  info: Dictionary,
  checksum: string | null = null
): Omit<Tables<"versions">, "id" | "app_id"> {
  const versionString = info["CFBundleShortVersionString"] || "1.0.0";
  const buildVersion = info["CFBundleVersion"] || "1";

  if (typeof versionString !== "string" || typeof buildVersion !== "string") {
    throw "Invalid Info.plist: Missing required version fields.";
  }

  return {
    version: versionString,
    build_version: buildVersion,
    download_url: "",
    changelog: null,
    created_at: new Date().toISOString(),
    checksum,
  };
}

export async function createVersionFromIPA(
  file: File,
  app: DBApp
): Promise<PostgrestSingleResponse<Tables<"versions">> | null> {
  const [info] = await infoPlistFromIpa(file);
  const checksum = sha256(await file.arrayBuffer());
  const version = versionFromInfoPlist(info, checksum);
  const res = await getSupabase()
    .from("versions")
    .insert([
      {
        ...version,
        app_id: app.id,
        created_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (res.error) {
    throw beautifyPostgrestError(res.error, "version");
  }

  return res;
}

export async function createAppFromIPA(
  file: File,
  createApp: (
    app: Omit<DBApp, "id">
  ) => Promise<PostgrestSingleResponse<DBApp> | undefined>,
  session: Session | null,
  navigate: (url: string) => void,
  reloadApps: () => void
) {
  const result = await importIPA(file);
  if (!result) {
    throw "Failed to import IPA.";
  }
  let [app, version, icon] = result;

  let serverResponse = await createApp({
    ...app,
    owner: session?.user.id || "",
    created_at: new Date().toISOString(),
  });
  if (!serverResponse) {
    throw "Failed to create app from IPA.";
  }

  if (serverResponse.error) {
    throw beautifyPostgrestError(serverResponse.error, "app");
  }
  const appId = serverResponse.data.id;

  if (icon) {
    if (!session) {
      throw "You must be logged in to upload an icon.";
    }

    const { data: uploadData, error: uploadError } = await getSupabase()
      .storage.from("app-images")
      .upload(`${session.user.id}/${appId}/icon-${Date.now()}.png`, icon.data, {
        contentType: "image/png",
      });

    if (uploadError || !uploadData) {
      console.error(uploadError);
      throw "Failed to upload app icon.";
    }

    const { error: updateError } = await getSupabase()
      .from("apps")
      .update({
        icon_path: uploadData.path,
      })
      .eq("id", appId);

    reloadApps();
    if (updateError) {
      console.error(updateError);
      throw "Failed to update app with icon path.";
    }
  }

  const newVersion: Omit<Tables<"versions">, "id"> = {
    ...version,
    app_id: appId,
    created_at: new Date().toISOString(),
  };

  const res = await getSupabase()
    .from("versions")
    .insert([newVersion])
    .select()
    .single();

  if (res.error) {
    console.error(res.error);
    throw beautifyPostgrestError(res.error, "version");
  } else {
    navigate("/developers/app/" + appId);
  }
}

type IconCandidate = {
  path: string;
  scale: number;
  data: Uint8Array;
};
