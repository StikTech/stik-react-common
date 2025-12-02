import "./Developer.css";
import "./App.css";
import { useSession, GlassCard } from "../main";
import { useParams } from "react-router";
import { Screenshots } from "../components/Screenshots";

export const AppScreenshots = () => {
  const { id } = useParams<{ id: string }>();
  const { apps } = useSession();
  const app = apps.find((app) => app.id === Number(id));

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <section className="developer-page">
      <GlassCard className="app-subcard screenshots-card">
        <h2>iPhone Screenshots</h2>
        <div className="screenshots-container">
          <Screenshots isIpad={false} app={app} />
        </div>
      </GlassCard>
      <GlassCard className="app-subcard screenshots-card">
        <h2>iPad Screenshots</h2>
        <div className="screenshots-container">
          <Screenshots isIpad={true} app={app} />
        </div>
      </GlassCard>
    </section>
  );
};
