import "./Version.css";
import "./Developer.css";
import "./App.css";
import { useSession, beautifyPostgrestError, type Tables } from "../main";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { getSupabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { EditVersionCard } from "../components/EditVersionCard";
import { AppTitle } from "../components/AppTitle";
import { GlassCard } from "../main";
import { usePrompt } from "../utils/PromptContext";

export const Version = () => {
  const { id, versionId } = useParams<{ id: string; versionId: string }>();
  const { apps, reloadApps } = useSession();

  const app = apps.find((app) => app.id === Number(id));
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState<Tables<"versions"> | null>(null);
  const { showPrompt } = usePrompt();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVersion = async () => {
      if (!app) return;
      const { data, error } = await getSupabase()
        .from("versions")
        .select("*")
        .eq("app_id", app.id)
        .eq("id", Number(versionId))
        .single();

      setLoading(false);

      if (error) {
        console.error(error);
        toast.error(beautifyPostgrestError(error, "version"));
      } else {
        setVersion(data);
      }
    };

    void fetchVersion();
  }, [app]);

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  if (!version && !loading) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>Version Not Found</h1>
      </div>
    );
  }

  if (loading || !version) {
    return (
      <div className="developer-container app-page-container">
        <AppTitle app={app} showBackToApp />
      </div>
    );
  }

  return (
    <div className="developer-container app-page-container">
      <AppTitle
        app={app}
        titleOverride={`Version ${version.version} (${version.build_version})`}
        subtitleOverride={app.name}
        showBackToApp
        backToAppPage="versions"
      />
      <section className="developer-page">
        <EditVersionCard
          version={version}
          save={async (newVersion) => {
            const res = await getSupabase()
              .from("versions")
              .update(newVersion)
              .eq("id", Number(version?.id))
              .single();

            if (res.error) {
              console.error(res.error);
              toast.error(beautifyPostgrestError(res.error, "version"));
            } else {
              toast.success("Version updated successfully");
              reloadApps();
            }
          }}
        />
        <GlassCard className="app-subcard management-card delete-version-card">
          <div>
            <h2 style={{ marginBottom: "0.5rem" }}>Manage Version</h2>
          </div>
          <p style={{ margin: 0 }}>
            Current Status:{" "}
            <strong
              style={{
                textTransform: "capitalize",
                color: statusColor(version.status),
              }}
            >
              {version.status}
            </strong>
          </p>
          {version.status === "draft" && (
            <>
              <p className="app-subtext">
                This version will not be visible to users of your app until it
                is approved.
              </p>
              <button
                className="primary"
                disabled={
                  !version.version ||
                  !version.build_version ||
                  !version.download_url ||
                  !version.checksum
                }
                onClick={async () => {
                  showPrompt({
                    title: "Submit Version for Review",
                    content: `Are you sure you want to submit version ${version.version} (${version.build_version}) of ${app.name} for review? Once submitted, you will not be able to make further changes.`,
                    options: [
                      {
                        text: "Submit",
                        className: "primary",
                        action: async () => {
                          toast.warning("not implemented yet");
                        },
                      },
                      { text: "Cancel", action: () => {}, className: "" },
                    ],
                  });
                }}
              >
                Submit for Review
              </button>
            </>
          )}

          <button
            className="danger"
            onClick={async () => {
              showPrompt({
                title: "Delete Version",
                content: `Are you sure you want to delete version ${version.version} (${version.build_version}) from ${app.name}? This action cannot be undone.`,
                options: [
                  {
                    text: "Delete",
                    className: "danger",
                    action: async () => {
                      const res = await getSupabase()
                        .from("versions")
                        .delete()
                        .eq("id", version.id);

                      if (res.error) {
                        console.error(res.error);
                        toast.error(
                          beautifyPostgrestError(res.error, "version")
                        );
                      } else {
                        toast.success("Version deleted successfully");
                        navigate("/developers/app/" + app.id);
                        reloadApps();
                      }
                    },
                  },
                  { text: "Cancel", action: () => {}, className: "" },
                ],
              });
            }}
          >
            Delete Version
          </button>
        </GlassCard>
      </section>
    </div>
  );
};

function statusColor(status: string) {
  switch (status) {
    case "draft":
      return "inherit";
    case "pending":
      return "orange";
    case "accepted":
      return "var(--success)";
    case "rejected":
      return "var(--danger)";
    default:
      return "inherit";
  }
}
