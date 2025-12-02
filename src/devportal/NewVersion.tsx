import "./Developer.css";
import "./NewVersion.css";
import "./NewApp.css";
import {
  useSession,
  type Tables,
  GlassCard,
  beautifyPostgrestError,
} from "../main";
import { useNavigate, useParams } from "react-router";
import { EditVersionCard } from "../components/EditVersionCard";
import { toast } from "sonner";
import { getSupabase } from "../utils/supabase";
import { AppTitle } from "../components/AppTitle";
import { useRef } from "react";
import { createVersionFromIPA } from "../utils/ipa";

const defaultVersion: Omit<Tables<"versions">, "id" | "app_id"> = {
  build_version: "",
  changelog: null,
  created_at: new Date().toISOString(),
  download_url: "",
  version: "",
  checksum: null,
};

export const NewVersion = () => {
  const { id } = useParams<{ id: string }>();
  const { apps, session } = useSession();
  const navigate = useNavigate();
  const importRef = useRef<HTMLInputElement>(null);

  const app = apps.find((app) => app.id === Number(id));

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <div className="developer-container app-page-container">
      <AppTitle
        app={app}
        showBackToApp
        backToAppPage="versions"
        titleOverride={`New Version for ${app.name}`}
      />
      <section className="developer-page">
        <GlassCard className="import-ipa">
          <div>
            <h2>Import Version</h2>
            <p style={{ color: "var(--label-secondary)" }}>
              Import version data directly from an IPA file
            </p>
          </div>
          <button
            onClick={() => {
              importRef.current?.click();
            }}
          >
            Import from an IPA file
          </button>
          <input
            type="file"
            accept=".ipa"
            style={{ display: "none" }}
            ref={importRef}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              let promise = createVersionFromIPA(file, app);
              toast.promise(promise, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (e) => "Failed to import IPA: " + String(e),
              });
              promise.then((v) => {
                if (v && v.data) {
                  navigate(`/developers/app/${app.id}/version/${v.data.id}`);
                }
              });
            }}
          />
        </GlassCard>
        <EditVersionCard
          titleOverride="Or, manually create"
          version={defaultVersion}
          save={async (version) => {
            if (!session || !session.user || !app) {
              return toast.error("You must be logged in to create an app.");
            }
            const newVersion: Omit<Tables<"versions">, "id"> = {
              ...version,
              app_id: app.id,
              created_at: new Date().toISOString(),
            };

            if (!session) {
              toast.error("You must be logged in to create an app.");
              return;
            }
            const res = await getSupabase()
              .from("versions")
              .insert([newVersion]);
            if (res.error) {
              console.error(res.error);
              toast.error(beautifyPostgrestError(res.error, "version"));
            } else if (res.data) {
              toast.success("Version created successfully!");
              navigate("/developers/app/" + app.id);
            }
          }}
        />
      </section>
    </div>
  );
};
