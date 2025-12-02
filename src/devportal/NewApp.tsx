import "./NewApp.css";
import "./Developer.css";
import { useNavigate } from "react-router";
import { EditAppCard } from "../components/EditAppCard";
import { toast } from "sonner";
import { GlassCard, useSession, type DBApp } from "../main";
import { useRef, useState } from "react";
import { createAppFromIPA } from "../utils/ipa";
import type { AltStoreSource } from "../utils/altstore";
import { AltStoreImport } from "./AltStoreImport";
import { altStoreSourceSchema } from "../utils/altstore-zod";

const defaultApp: Omit<DBApp, "id" | "owner"> = {
  name: "",
  bundle_identifier: "",
  category: "other",
  description: null,
  subtitle: null,
  ipad_screenshots: [],
  iphone_screenshots: [],
  created_at: new Date().toISOString(),
  icon_path: null,
  entitlements: [],
  privacy: [],
};

export const NewApp = () => {
  const { session, createApp, reloadApps } = useSession();
  const navigate = useNavigate();
  const importRef = useRef<HTMLInputElement>(null);
  const importSourceRef = useRef<HTMLInputElement>(null);
  const [altstoreJson, setAltstoreJson] = useState<AltStoreSource | null>(null);

  return (
    <div className="developer-container">
      <h1 style={{ marginBottom: 0 }}>Create New App</h1>
      <h4
        style={{ marginBottom: "1.5rem" }}
        className="text-link"
        onClick={() => navigate("/developers")}
      >
        Back to Dashboard
      </h4>
      <section className="developer-page">
        <GlassCard className="import-ipa">
          <div>
            <h2>Import App</h2>
            <p style={{ color: "var(--label-secondary)" }}>
              Import your app from an existing .ipa file or AltStore source
            </p>
          </div>
          <button
            onClick={() => {
              importRef.current?.click();
            }}
          >
            Import from an IPA file
          </button>
          {/* Can't do because of CORS. Keeping around in case we decide to accept the cost of routing it through our server */}
          {/* <div className="import-inputs">
            <input
              value={ipaURL}
              onChange={(e) => {
                setIpaURL(e.target.value);
              }}
              placeholder="Enter IPA URL"
            ></input>
            <button
              onClick={() => {
                let promise = async () => {
                  let res = await fetch(ipaURL);
                  let blob = await res.blob();
                  await createAppFromIPA(
                    new File([blob], "imported.ipa", {
                      type: "application/octet-stream",
                    }),
                    createApp,
                    session,
                    navigate
                  );
                };
                toast.promise(promise(), {
                  loading: "Importing IPA...",
                  success: "IPA imported successfully!",
                  error: "Failed to import IPA.",
                });
              }}
            >
              Import from IPA URL
            </button>
          </div> */}
          <button
            onClick={() => {
              importSourceRef.current?.click();
            }}
          >
            Import from AltStore Source
          </button>
          {/* Same as ipa from url, can't do b/c of cors */}
          {/* <div className="import-inputs">
            <input
              placeholder="Enter AltStore Source URL"
              value={sourceURL}
              onChange={(e) => {
                setSourceURL(e.target.value);
              }}
            />
            <button>Import from Source URL</button>
          </div> */}
          <input
            type="file"
            accept=".ipa"
            style={{ display: "none" }}
            ref={importRef}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              let promise = createAppFromIPA(
                file,
                createApp,
                session,
                navigate,
                reloadApps
              );
              toast.promise(promise, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (e) => "Failed to import IPA: " + String(e),
              });
            }}
          />
          <input
            type="file"
            accept=".json"
            style={{ display: "none" }}
            ref={importSourceRef}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              let promise = async () => {
                let text = await file.text();
                let sourceRaw: any = JSON.parse(text);
                let source = altStoreSourceSchema.parse(sourceRaw);

                setAltstoreJson(source);
              };
              toast.promise(promise(), {
                loading: "Loading AltStore Source...",
                success: "AltStore Source loaded successfully!",
                error: (e) => {
                  console.error(e);
                  return "Failed to load AltStore Source: " + String(e);
                },
              });
            }}
          />
        </GlassCard>
        <EditAppCard
          label="Or, manually create"
          app={defaultApp}
          save={async (app) => {
            if (!session || !session.user) {
              return toast.error("You must be logged in to create an app.");
            }
            const newApp: Omit<DBApp, "id"> = {
              ...app,
              owner: session.user.id,
              created_at: new Date().toISOString(),
            };

            newApp.name = newApp.name.trim();
            newApp.bundle_identifier = newApp.bundle_identifier.trim();
            newApp.subtitle = newApp.subtitle?.trim() || null;
            newApp.description = newApp.description?.trim() || null;

            const res = await createApp(newApp);
            toast.success("App created successfully!");

            if (!res?.error) {
              navigate("/developers");
            }
          }}
        />
        {altstoreJson && (
          <AltStoreImport
            source={altstoreJson}
            cancel={() => {
              setAltstoreJson(null);
            }}
          />
        )}
      </section>
    </div>
  );
};
