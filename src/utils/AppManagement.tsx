import "./Developer.css";
import "./App.css";
import { useSession, GlassCard } from "../main";
import { useNavigate, useParams } from "react-router";
import { usePrompt } from "./PromptContext";
import deleteApp from "./deleteApp";

export const AppManagement = () => {
  const { id } = useParams<{ id: string }>();
  const { apps, reloadApps } = useSession();
  const navigate = useNavigate();
  const app = apps.find((app) => app.id === Number(id));

  const { showPrompt } = usePrompt();

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <section className="developer-page">
      <GlassCard className="app-subcard management-card">
        <h2 style={{ marginTop: 0 }}>Danger Zone</h2>
        <button
          className="danger"
          onClick={async () => {
            showPrompt({
              title: "Delete App",
              content: `Are you sure you want to delete the app "${app.name}"? This action cannot be undone.`,
              options: [
                {
                  text: "Delete",
                  className: "danger",
                  action: async () => {
                    deleteApp(app, navigate, reloadApps);
                  },
                },
                { text: "Cancel", action: () => {}, className: "" },
              ],
            });
          }}
        >
          Delete App
        </button>
      </GlassCard>
    </section>
  );
};
