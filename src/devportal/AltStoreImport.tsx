import "../components/AppTitle.css";
import "./AltStoreImport.css";
import { GlassCard, useSession } from "../main";

import {
  createAppFromAltstore,
  type AltStoreApp,
  type AltStoreSource,
} from "../utils/altstore";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export const AltStoreImport = ({
  source,
  cancel,
}: {
  source: AltStoreSource;
  cancel: () => void;
}) => {
  const [selectedApps, setSelectedApps] = useState<AltStoreApp[]>([]);
  const { createApp, session, reloadApps } = useSession();
  const navigate = useNavigate();

  return (
    <div className="prompt-modal">
      <GlassCard className="altstore-prompt">
        <h2>
          Select apps to import from {source.name ?? "this altstore source"}
        </h2>
        <div className="altstore-app-list">
          {source.apps.map((app) => (
            <div
              key={app.bundleIdentifier}
              className={
                "altstore-app-wrapper" +
                (selectedApps.includes(app)
                  ? " altstore-app-wrapper-selected"
                  : "")
              }
              onClick={() => {
                setSelectedApps((old) => {
                  if (old.includes(app)) {
                    return old.filter((a) => a !== app);
                  } else {
                    return [...old, app];
                  }
                });
              }}
            >
              <AltStoreAppTitle app={app} />
            </div>
          ))}
        </div>
        <button
          disabled={selectedApps.length === 0}
          className="import-altstore-button primary"
          onClick={async () => {
            let promise = async () => {
              for (const app of selectedApps) {
                await createAppFromAltstore(
                  app,
                  createApp,
                  session,
                  reloadApps
                );
              }
              navigate("/developers");
            };
            toast.promise(promise(), {
              loading: "Importing apps...",
              success: `Successfully imported ${selectedApps.length} app${
                selectedApps.length !== 1 ? "s" : ""
              }!`,
              error: (e) => {
                console.error(e);
                return "Failed to import apps: " + String(e);
              },
            });
          }}
        >
          Import {selectedApps.length} App{selectedApps.length !== 1 ? "s" : ""}
        </button>
        <button className="import-altstore-button" onClick={cancel}>
          Cancel
        </button>
      </GlassCard>
    </div>
  );
};

export const AltStoreAppTitle = ({ app }: { app: AltStoreApp }) => {
  return (
    <div className="app-title-container app-title-container-inline">
      <img
        src={app.iconURL}
        className="app-icon"
        onError={(e) => {
          e.currentTarget.src = "/default-icon.png";
        }}
      />
      <div>
        <h1 className="app-title">{app.name}</h1>
        <p className="app-subtitle">{app.subtitle || app.bundleIdentifier}</p>
      </div>
    </div>
  );
};
