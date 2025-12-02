import type { PostgrestSingleResponse, Session } from "@supabase/supabase-js";
import type { Tables } from "../main";
import type { DBApp } from "../main";
import { beautifyPostgrestError } from "../main";
import { getSupabase } from "./supabase";

export type AltStoreScreenshot =
  | string
  | {
      imageURL: string;
      width?: number;
      height?: number;
    };

export type AltStoreAppVersion = {
  version: string;
  buildVersion?: string;
  marketingVersion?: string;
  date: string;
  downloadURL: string;
  localizedDescription?: string;
  size?: number;
  minOSVersion?: string;
  maxOSVersion?: string;
};

export type AltStoreAppPermissions = {
  entitlements?: string[];
  privacy?: Record<string, string>;
};

export type AltStoreApp = {
  name: string;
  bundleIdentifier: string;
  developerName: string;
  subtitle?: string;
  localizedDescription: string;
  iconURL: string;
  tintColor?: string;
  screenshots?:
    | AltStoreScreenshot[]
    | Record<"iphone" | "ipad", AltStoreScreenshot[]>;
  versions: AltStoreAppVersion[];
  appPermissions?: AltStoreAppPermissions;
  category?:
    | "developer"
    | "entertainment"
    | "games"
    | "lifestyle"
    | "other"
    | "photo-video"
    | "social"
    | "utilities";
};

export type AltStoreNewsItem = {
  title: string;
  identifier: string;
  caption?: string;
  date: string;
  tintColor?: string;
  imageURL?: string;
  notify?: boolean;
  url?: string;
  appID?: string;
};

export type AltStoreSource = {
  name: string;
  subtitle?: string;
  description?: string;
  iconURL?: string;
  headerURL?: string;
  website?: string;
  tintColor?: string;
  featuredApps?: string[];
  apps: AltStoreApp[];
  news?: AltStoreNewsItem[];
};

export function importAltstoreApp(
  altapp: AltStoreApp
): [Omit<DBApp, "id" | "owner">, Omit<Tables<"versions">, "id" | "app_id">[]] {
  let privacy = [] as [string, string][];
  if (altapp.appPermissions?.privacy) {
    for (const [key, value] of Object.entries(altapp.appPermissions.privacy)) {
      privacy.push([key, value]);
    }
  }

  const app = {
    name: altapp.name,
    bundle_identifier: altapp.bundleIdentifier,
    category: altapp.category || "other",
    created_at: new Date().toISOString(),
    description: altapp.localizedDescription,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: altapp.subtitle || null,
    entitlements: altapp.appPermissions?.entitlements || [],
    privacy,
  };

  let versions: Omit<Tables<"versions">, "id" | "app_id">[] = [];
  for (const version of altapp.versions) {
    versions.push({
      version: version.version,
      build_version: version.buildVersion || version.version,
      download_url: version.downloadURL,
      changelog: version.localizedDescription || "",
      created_at: version.date,
      checksum: null,
    });
  }

  return [app, versions];
}

export async function createAppFromAltstore(
  altapp: AltStoreApp,
  createApp: (
    app: Omit<DBApp, "id">
  ) => Promise<PostgrestSingleResponse<DBApp> | undefined>,
  session: Session | null,
  reloadApps: () => void
) {
  if (!session) {
    throw "You must be logged in to create an app.";
  }
  const [app, versions] = importAltstoreApp(altapp);

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

  for (const version of versions) {
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
    }
  }
  reloadApps();
}
