import "./EditCard.css";

type FieldBase<T extends {}> = {
  label: string;
  id: keyof T;
  description?: string;
  required?: boolean;
  validate?: (value: string) => boolean;
};

type TextField = {
  placeholder: string;
  type: "text" | "textarea";
};

type DropdownField = {
  options: { label: string; value: string }[];
  defaultValue?: string;
  type: "dropdown";
};

export type Field<T extends {}> = FieldBase<T> & (TextField | DropdownField);

export const FieldInput = <T extends {}>({
  field,
  updateValue,
  value,
}: {
  field: Field<T>;
  value: string | number | null;
  updateValue: (value: string) => void;
}) => {
  let elem: React.ReactNode;
  if (field.type === "text") {
    elem = (
      <input
        id={String(field.id)}
        type="text"
        value={value ? String(value) : ""}
        placeholder={field.placeholder}
        required={field.required}
        onChange={(e) => {
          updateValue(e.target.value);
        }}
      />
    );
  } else if (field.type === "textarea") {
    elem = (
      <textarea
        id={String(field.id)}
        placeholder={field.placeholder}
        value={value ? String(value) : ""}
        required={field.required}
        onChange={(e) => updateValue(e.target.value)}
        style={{ minWidth: "100%", minHeight: "80px" }}
      />
    );
  } else if (field.type === "dropdown") {
    elem = (
      <select
        id={String(field.id)}
        required={field.required}
        onChange={(e) => updateValue(e.target.value)}
        value={value ? String(value) : field.defaultValue}
      >
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else {
    return null;
  }

  return (
    <div>
      <div>
        <label htmlFor={String(field.id)} style={{ margin: "0" }}>
          {field.label}
          {field.required ? <span className="edit-required">*</span> : ""}
        </label>
        {field.description && (
          <p style={{ color: "var(--text-muted)", margin: "0" }}>
            {field.description}
          </p>
        )}
      </div>
      {elem}
    </div>
  );
};
