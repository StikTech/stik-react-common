import "./EditCard.css";
import { useEffect, useState } from "react";
import { GlassCard, type DBApp } from "../main";
import { toast } from "sonner";
import { FieldInput, type Field } from "./FieldInput";

const fields: Field<Omit<DBApp, "id" | "owner">>[] = [
  {
    label: "App Name",
    id: "name",
    placeholder: "MyApp",
    required: true,
    type: "text",
  },
  {
    label: "Bundle ID",
    id: "bundle_identifier",
    placeholder: "com.example.myapp",
    required: true,
    type: "text",
    // https://stackoverflow.com/questions/22548997/regex-to-validate-apple-bundle-identifier
    validate: (value) => /^[a-z0-9]+(\.[a-z0-9]+)+$/gi.test(value),
  },
  {
    label: "Subtitle",
    id: "subtitle",
    placeholder: "An awesome app.",
    type: "text",
  },
  {
    label: "Description",
    id: "description",
    placeholder: "The best app ever, available on StikStore.",
    type: "textarea",
  },
  {
    label: "Category",
    id: "category",
    options: [
      { label: "Developer", value: "developer" },
      { label: "Entertainment", value: "entertainment" },
      { label: "Games", value: "games" },
      { label: "Lifestyle", value: "lifestyle" },
      { label: "Social", value: "social" },
      { label: "Photo & Video", value: "photo-video" },
      { label: "Utilities", value: "utilities" },
      { label: "Other", value: "other" },
    ],
    defaultValue: "other",
    type: "dropdown",
  },
];

export const EditAppCard = ({
  app,
  save,
  label,
  style,
}: {
  app: Omit<DBApp, "id" | "owner">;
  save: (app: Omit<DBApp, "id" | "owner">) => void;
  label?: string;
  style?: React.CSSProperties;
}) => {
  const [appData, setAppData] = useState<Omit<DBApp, "id" | "owner">>(app);

  useEffect(() => {
    setAppData(app);
  }, [app]);

  return (
    <GlassCard style={style}>
      <form className="edit-app-card">
        <div className="edit-app-title">
          <h2>{label || "App Metadata"}</h2>
          <p style={{ color: "var(--label-secondary)" }}>
            Fields marked with <span className="edit-required">*</span> are
            required.
          </p>
        </div>
        {fields.map((field) => {
          return (
            <FieldInput
              key={field.id}
              field={field}
              updateValue={(value) => {
                setAppData({ ...appData, [field.id]: value });
              }}
              value={appData[field.id] as string | number | null}
            />
          );
        })}
        <button
          style={{
            marginTop: "1rem",
          }}
          className="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!appData.name || !appData.bundle_identifier) {
              return toast.error("Please fill in all required fields");
            }
            for (const field of fields) {
              if (field.validate) {
                const value = appData[field.id];
                if (typeof value === "string" && !field.validate(value)) {
                  return toast.error(`Invalid value for ${field.label}`);
                }
              }
            }
            save(appData);
          }}
          disabled={
            !appData.name || !appData.bundle_identifier || appData === app
          }
        >
          Save App
        </button>
      </form>
    </GlassCard>
  );
};
