import "./Developer.css";
import { GlassCard, useSession } from "../main";
import { getSupabase } from "../utils/supabase";
//import { useNavigate } from "react-router";
import { AppTitle } from "../components/AppTitle";

export const Developer = () => {
  const { session, apps } = useSession();
  // const navigate = useNavigate();

  return (
    <div className="developer-container">
      <h1>StikStore Developer Portal</h1>
      <section className="developer-page">
        <GlassCard>
          <h3>
            Welcome to the Dashboard, {session.user.user_metadata.display_name}!
          </h3>

          <div className="developer-buttons">
            <button
              onClick={() => {
                //navigate("/developers/account-settings");
              }}
            >
              Account Settings
            </button>
            <button onClick={() => getSupabase().auth.signOut()}>
              Log Out
            </button>
          </div>
        </GlassCard>
        <GlassCard>
          <h3>Uploaded Apps</h3>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {apps.map((app) => (
              <li
                className="button developer-app-list-item"
                key={app.id}
                onClick={() => {
                  //navigate(`/developers/app/${app.id}`);
                }}
              >
                <AppTitle app={app} inline />
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              //navigate("/developers/new-app");
            }}
            className="primary"
            style={{
              width: "100%",
            }}
          >
            Create/Import App
          </button>
        </GlassCard>
      </section>
    </div>
  );
};
