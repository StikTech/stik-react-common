import { DBApp } from '../main';
export declare const EditAppCard: ({ app, save, label, style, }: {
    app: Omit<DBApp, "id" | "owner">;
    save: (app: Omit<DBApp, "id" | "owner">) => void;
    label?: string;
    style?: React.CSSProperties;
}) => import("react/jsx-runtime").JSX.Element;
