import "./Developer.css";
import "./App.css";
import { useSession, beautifyPostgrestError, GlassCard } from "../main";
import { useParams } from "react-router";
import { EditAppCard } from "../components/EditAppCard";
import { toast } from "sonner";
import { getSupabase } from "../utils/supabase";
import { useMemo, useRef } from "react";

export const AppInfo = () => {
  const { id } = useParams<{ id: string }>();
  const { apps, reloadApps, uploadIcon } = useSession();
  const app = apps.find((app) => app.id === Number(id));
  const iconInputRef = useRef<HTMLInputElement>(null);

  const iconUrl = useMemo(
    () =>
      app?.icon_path
        ? getSupabase().storage.from("app-images").getPublicUrl(app.icon_path)
            .data.publicUrl
        : "/default-icon.png",
    [app?.icon_path]
  );

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <section className="developer-page">
      <EditAppCard
        style={{ flexGrow: 2 }}
        app={app}
        save={async (newApp) => {
          const res = await getSupabase()
            .from("apps")
            .update(newApp)
            .eq("id", Number(app.id))
            .single();

          if (res.error) {
            console.error(res.error);
            toast.error(beautifyPostgrestError(res.error, "app"));
          } else {
            toast.success("App updated successfully");
            reloadApps();
          }
        }}
      />
      <GlassCard className="app-subcard icon-card">
        <div>
          <h2 style={{ margin: 0 }}>App Icon</h2>
          <p className="app-subtext">
            Icons will be masked to an iOS style shape.
          </p>
        </div>
        <img src={iconUrl} className={"app-icon"} />
        <div style={{ width: "100%" }}>
          <button
            onClick={() => {
              iconInputRef.current?.click();
            }}
          >
            Upload New Icon
          </button>

          <p
            className="app-subtext"
            style={{
              marginTop: "0.5rem",
            }}
          >
            Max upload size: 3MB
          </p>
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={iconInputRef}
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file || !app) return;

            toast.promise(uploadIcon(file, app), {
              loading: "Uploading icon...",
              success: "Icon uploaded successfully!",
              error: (e) => {
                return e instanceof Error ? e.message : String(e);
              },
            });
          }}
        />
      </GlassCard>
    </section>
  );
};
