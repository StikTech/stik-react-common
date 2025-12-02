import { Tables } from '../main';
export declare const EditVersionCard: ({ version, save, titleOverride, }: {
    version: Omit<Tables<"versions">, "id" | "app_id">;
    save: (version: Omit<Tables<"versions">, "id" | "app_id">) => void;
    titleOverride?: string;
}) => import("react/jsx-runtime").JSX.Element;
