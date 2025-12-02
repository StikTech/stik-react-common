import "./Developer.css";
import "./App.css";
import {
  useSession,
  beautifyPostgrestError,
  GlassCard,
  type Tables,
} from "../main";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { getSupabase } from "../utils/supabase";
import { useEffect, useState } from "react";

export const AppVersions = () => {
  const { id } = useParams<{ id: string }>();
  const { apps } = useSession();
  const navigate = useNavigate();
  const app = apps.find((app) => app.id === Number(id));
  const [loading, setLoading] = useState(true);
  const [versions, setVersions] = useState<Tables<"versions">[]>([]);

  useEffect(() => {
    const fetchVersions = async () => {
      if (!app) return;
      const { data, error } = await getSupabase()
        .from("versions")
        .select("*")
        .eq("app_id", app.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        toast.error(beautifyPostgrestError(error, "version"));
      } else {
        setVersions(data);
      }
      setLoading(false);
    };

    void fetchVersions();
  }, [app]);

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <section className="developer-page">
      <GlassCard className="app-subcard versions-card">
        <h2>Versions</h2>
        {versions.length === 0 && !loading && (
          <p className="app-subtext">
            It seems you don't have any versions yet. Let's change that!
          </p>
        )}
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {versions.map((version) => (
            <li
              className="button developer-app-list-item"
              key={version.id}
              onClick={() => {
                navigate(`/developers/app/${app.id}/version/${version.id}`);
              }}
            >
              {version.version} ({version.build_version})
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate(`/developers/app/${app.id}/new-version`);
          }}
          className="primary"
        >
          New Version
        </button>
      </GlassCard>
    </section>
  );
};
