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
    options: {
        label: string;
        value: string;
    }[];
    defaultValue?: string;
    type: "dropdown";
};
export type Field<T extends {}> = FieldBase<T> & (TextField | DropdownField);
export declare const FieldInput: <T extends {}>({ field, updateValue, value, }: {
    field: Field<T>;
    value: string | number | null;
    updateValue: (value: string) => void;
}) => import("react/jsx-runtime").JSX.Element | null;
export {};
