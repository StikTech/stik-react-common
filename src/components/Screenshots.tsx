import { useMemo, useRef } from "react";
import { useSession, type DBApp, type Screenshot } from "../main";
import "./Screenshots.css";
import { toast } from "sonner";
import { supabase } from "../../../StikStore-Web/src/utils/supabase";

export const Screenshots = ({
  isIpad,
  app,
}: {
  isIpad: boolean;
  app: DBApp;
}) => {
  const { uploadScreenshot } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="screenshots-inner">
      <div className="screenshots-grid">
        {(isIpad ? app.ipad_screenshots : app.iphone_screenshots).map(
          (screenshot, index) => (
            <ScreenshotElem
              key={index}
              screenshot={screenshot}
              app={app}
              isIpad={isIpad}
            />
          )
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          Upload New Screenshot
        </button>
        <p
          style={{
            color: "var(--label-secondary)",
            margin: 0,
            marginTop: "0.5rem",
          }}
        >
          Max upload size: 3MB. Supported aspect ratios:{" "}
          {isIpad ? "4:3" : "9:19.5, 9:16, 3:4"}.
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        multiple
        accept="image/*"
        onChange={(e) => {
          const files = e.target.files;
          if (!files) return;
          let promise = async () => {
            await uploadScreenshot(Array.from(files), app, isIpad);
          };

          toast.promise(promise, {
            loading: `Uploading screenshot${files.length > 1 ? "s" : ""}...`,
            success: `Screenshot${
              files.length > 1 ? "s" : ""
            } uploaded successfully!`,
            error: (e) =>
              `Failed to upload screenshot${
                files.length > 1 ? "s" : ""
              }: ${String(e)}`,
          });
        }}
      />
    </div>
  );
};

const ScreenshotElem = ({
  screenshot,
  app,
  isIpad,
}: {
  screenshot: Screenshot;
  app: DBApp;
  isIpad: boolean;
}) => {
  const url = useMemo(
    () =>
      screenshot
        ? supabase.storage.from("app-images").getPublicUrl(screenshot.path).data
            .publicUrl
        : "/default-icon.png",
    [screenshot]
  );
  const { reloadApps } = useSession();

  let width = screenshot.width;
  let height = screenshot.height;
  let aspectRatio = width / height;
  let calculatedWidth = Math.min(400, 400 * aspectRatio);
  let calculatedHeight = calculatedWidth / aspectRatio;

  return (
    <div className="screenshot-image-container">
      <div
        onClick={async () => {
          let { error } = await supabase.storage
            .from("app-images")
            .remove([screenshot.path]);
          if (error) {
            console.error("Error deleting screenshot from storage:", error);
            toast.error(
              "Error deleting screenshot from storage: " + error.message
            );
            return;
          }

          const columnToUpdate = isIpad
            ? "ipad_screenshots"
            : "iphone_screenshots";
          const updatedScreenshots = app[
            columnToUpdate as "ipad_screenshots" | "iphone_screenshots"
          ].filter((s) => s.path !== screenshot.path);

          const res = await supabase
            .from("apps")
            .update({
              [columnToUpdate]: updatedScreenshots,
            })
            .eq("id", app.id)
            .single();

          if (res.error) {
            console.error("Error updating app with screenshot URL:", res.error);
            toast.error("Error deleting screenshot: " + res.error.message);
            return;
          } else {
            reloadApps();
            toast.success("Screenshot deleted successfully.");
          }
        }}
      >
        Delete
      </div>
      <img
        src={url}
        alt={`Screenshot`}
        className="screenshot-image"
        width={calculatedWidth}
        height={calculatedHeight}
      />
    </div>
  );
};
