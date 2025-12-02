import "./Developer.css";
import "./App.css";
import {
  useSession,
  beautifyPostgrestError,
  GlassCard,
  type PrivacyItem,
} from "../main";
import { useParams } from "react-router";
import { toast } from "sonner";
import { getSupabase } from "../utils/supabase";
import { useEffect, useState } from "react";

export const AppPermissions = () => {
  const { id } = useParams<{ id: string }>();
  const { apps, reloadApps } = useSession();
  const app = apps.find((app) => app.id === Number(id));

  const [entitlements, setEntitlements] = useState<string[]>(() => {
    if (!app) return [];
    return app.entitlements || [];
  });
  const [privacy, setPrivacy] = useState<PrivacyItem[]>(() => {
    if (!app) return [];
    return app.privacy || [];
  });

  useEffect(() => {
    if (app) {
      setEntitlements(app.entitlements || []);
    }
  }, [app?.entitlements]);

  useEffect(() => {
    if (app) {
      setPrivacy(app.privacy || []);
    }
  }, [app?.privacy]);

  if (!app) {
    return (
      <div className="developer-container">
        <h1 style={{ marginBottom: 0 }}>App Not Found</h1>
      </div>
    );
  }

  return (
    <section className="developer-page">
      <div className="entitlements-container">
        <GlassCard className="app-subcard entitlements-card">
          <div>
            <h2>Save Changes</h2>
            <p className="app-subtext">
              Save changes to entitlements and privacy info
            </p>
          </div>
          <button
            className="primary"
            disabled={
              (privacy === app.privacy && entitlements === app.entitlements) ||
              privacy.some((e) => e[0] === "" || e[1] === "") ||
              entitlements.some((e) => e === "")
            }
            onClick={async () => {
              const res = await getSupabase()
                .from("apps")
                .update({ privacy, entitlements })
                .eq("id", app.id)
                .single();

              if (res.error) {
                console.error(res.error);
                toast.error(beautifyPostgrestError(res.error, "app"));
              } else {
                toast.success("Privacy Info updated successfully");
                reloadApps();
              }
            }}
          >
            Save
          </button>
        </GlassCard>
        <GlassCard className="app-subcard entitlements-card">
          <div>
            <h2>Entitlements</h2>
            <p className="app-subtext">
              List all entitelements except{" "}
              <span className="entitlement-text">
                com.app.developer.team-identifier
              </span>{" "}
              and{" "}
              <span className="entitlement-text">application-identifier</span>
            </p>
          </div>
          <ul>
            {entitlements.length === 0 && <p>No entitlements added yet.</p>}
            {entitlements.map((entitlement, index) => (
              <li key={index} className="entitlement-item">
                <input
                  type="text"
                  value={entitlement}
                  onChange={(e) => {
                    const newEntitlement = e.target.value;
                    setEntitlements((old) => {
                      const newEntitlements = [...old];
                      newEntitlements[index] = newEntitlement;
                      return newEntitlements;
                    });
                  }}
                  placeholder="com.apple.security.application-groups"
                />
                <button
                  className="danger entitlement-delete-button"
                  onClick={() => {
                    setEntitlements((old) => old.filter((_, i) => i !== index));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setEntitlements((old) => [...old, ""]);
            }}
          >
            Add entitlement
          </button>
        </GlassCard>
        <GlassCard className="app-subcard entitlements-card">
          <div>
            <h2>Privacy Info</h2>
            <p className="app-subtext">
              List all usage descriptions from your Info.plist
            </p>
          </div>
          <ul>
            {privacy.length === 0 && <p>No privacy entries added yet.</p>}
            {privacy.map((privacyItem, index) => (
              <li key={index} className="entitlement-item">
                <input
                  type="text"
                  value={privacyItem[0]}
                  onChange={(e) => {
                    const newKey = e.target.value;
                    setPrivacy((old) => {
                      const newPrivacy = [...old];
                      newPrivacy[index][0] = newKey;
                      return newPrivacy;
                    });
                  }}
                  placeholder="NSCameraUsageDescription"
                />
                <input
                  type="text"
                  value={privacyItem[1]}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setPrivacy((old) => {
                      const newPrivacy = [...old];
                      newPrivacy[index][1] = newValue;
                      return newPrivacy;
                    });
                  }}
                  placeholder="This app requires camera access to scan QR codes."
                />
                <button
                  className="danger entitlement-delete-button"
                  onClick={() => {
                    setPrivacy((old) => old.filter((_, i) => i !== index));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setPrivacy((old) => [...old, ["", ""]]);
            }}
          >
            Add privacy entry
          </button>
        </GlassCard>
      </div>
    </section>
  );
};
