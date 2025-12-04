import "./EditCard.css";
import { useEffect, useState } from "react";
import { GlassCard, type Tables } from "../main";
import { toast } from "sonner";
import { FieldInput, type Field } from "./FieldInput";

const fields: Field<Omit<Tables<"versions">, "id" | "app_id">>[] = [
  {
    label: "Version",
    description: "The version number matching CFBundleShortVersionString.",
    id: "version",
    placeholder: "1.0.0",
    required: true,
    type: "text",
  },
  {
    label: "Build Version",
    description: "The build version, matching CFBundleVersion.",
    id: "build_version",
    placeholder: "1",
    required: true,
    type: "text",
  },
  {
    label: "Download URL",
    description: "The direct download link to the .ipa file.",
    id: "download_url",
    placeholder: "https://example.com/app.ipa",
    type: "text",
    required: true,
  },
  {
    label: "Checksum",
    description: "The SHA-256 checksum of the .ipa file.",
    id: "checksum",
    placeholder:
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    type: "text",
    required: true,
    validate: (value) => /^[a-f0-9]{64}$/.test(value),
  },
  {
    label: "Changelog",
    id: "changelog",
    placeholder: "The best update ever, available on StikStore.",
    type: "textarea",
  },
];

export const EditVersionCard = ({
  version,
  save,
  titleOverride,
}: {
  version: Omit<Tables<"versions">, "id" | "app_id">;
  save: (version: Omit<Tables<"versions">, "id" | "app_id">) => void;
  titleOverride?: string;
}) => {
  const [versionData, setVersionData] =
    useState<Omit<Tables<"versions">, "id" | "app_id">>(version);

  useEffect(() => {
    setVersionData(version);
  }, [version]);

  return (
    <GlassCard>
      <form className="edit-app-card">
        <div className="edit-app-title">
          <h2>{titleOverride ?? "Version Metadata"}</h2>
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
                setVersionData({ ...versionData, [field.id]: value });
              }}
              value={versionData[field.id] as string | number | null}
            />
          );
        })}
        <button
          className="primary"
          style={{
            marginTop: "1rem",
          }}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (
              !versionData.version ||
              !versionData.build_version ||
              !versionData.download_url ||
              !versionData.checksum
            ) {
              return toast.error("Please fill in all required fields");
            }
            for (const field of fields) {
              if (field.validate) {
                const value = versionData[field.id];
                if (typeof value === "string" && !field.validate(value)) {
                  return toast.error(`Invalid value for ${field.label}`);
                }
              }
            }
            save(versionData);
          }}
          disabled={
            !versionData.version ||
            !versionData.build_version ||
            !versionData.download_url ||
            !versionData.checksum ||
            versionData === version
          }
        >
          Save Version
        </button>
      </form>
    </GlassCard>
  );
};
