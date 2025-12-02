import "./AppTitle.css";
import { useNavigate } from "react-router";
import type { DBApp } from "../main";
import { getSupabase } from "../utils/supabase";
import { useMemo } from "react";

export const AppTitle = ({
  app,
  showBackToApp,
  backToAppPage,
  titleOverride,
  subtitleOverride,
  inline,
}: {
  app: DBApp;
  showBackToApp?: boolean;
  backToAppPage?: string;
  titleOverride?: string;
  subtitleOverride?: string;
  inline?: boolean;
}) => {
  const navigate = useNavigate();
  const iconUrl = useMemo(
    () =>
      app.icon_path
        ? getSupabase().storage.from("app-images").getPublicUrl(app.icon_path)
            .data.publicUrl
        : "/default-icon.png",
    [app.icon_path]
  );

  return (
    <div
      className={`app-title-container${
        inline ? " app-title-container-inline" : ""
      }`}
    >
      <img
        src={iconUrl}
        className="app-icon"
        onError={(e) => {
          e.currentTarget.src = "/default-icon.png";
        }}
      />
      <div>
        <h1 className="app-title">{titleOverride ?? app.name}</h1>
        {(!titleOverride || subtitleOverride) && (
          <p className="app-subtitle">
            {subtitleOverride ?? (app.subtitle || app.bundle_identifier)}
          </p>
        )}

        {!inline && (
          <div className="version-back-buttons">
            {showBackToApp && (
              <>
                <h4
                  className="text-link"
                  onClick={() =>
                    navigate(
                      "/developers/app/" +
                        app?.id +
                        "/" +
                        (backToAppPage || "info")
                    )
                  }
                >
                  Back to {app?.name}
                </h4>

                <span>•</span>
              </>
            )}
            <h4 className="text-link" onClick={() => navigate("/developers")}>
              Back to Dashboard
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
