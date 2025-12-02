import "./Developer.css";
import "./App.css";
import { useSession, GlassCard } from "../main";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { AppTitle } from "../components/AppTitle";

const tabs = [
  "info",
  "permissions",
  "versions",
  "screenshots",
  "management",
] as const;

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { apps } = useSession();
  const app = apps.find((app) => app.id === Number(id));
  const tab = location.pathname.split("/")[4] || "info";

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <div className="developer-container app-page-container">
      <AppTitle app={app} />
      <GlassCard className="tab-buttons">
        {tabs.map((t) => (
          <h3
            key={t}
            className={"text-link" + (tab === t ? " text-link-active" : "")}
            onClick={() => navigate(`/developers/app/${app.id}/${t}`)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </h3>
        ))}
      </GlassCard>
      <Outlet />
    </div>
  );
};
