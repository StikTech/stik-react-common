import "./AccountSettings.css";
import { GlassCard, useSession } from "../main";
import { getSupabase } from "../utils/supabase";
import { useNavigate } from "react-router";

export const AccountSettings = () => {
  const { session } = useSession();
  const navigate = useNavigate();

  return (
    <section className="settings-page">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <h4 className="text-link" onClick={() => navigate("/developers")}>
          Back to Dashboard
        </h4>
      </div>
      <GlassCard>
        <h3>Profile</h3>
        <p>Display Name: {session.user.user_metadata.display_name}</p>
        <p>Email: {session.user.email}</p>
        <button
          style={{ marginTop: "1.5rem", width: "100%" }}
          onClick={async () => {
            await getSupabase().auth.signOut();
            window.location.href = "/developers";
          }}
        >
          Log Out
        </button>
      </GlassCard>
    </section>
  );
};
