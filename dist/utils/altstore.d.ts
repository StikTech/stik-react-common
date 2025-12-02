import { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import { Tables, DBApp } from '../main';
export type AltStoreScreenshot = string | {
    imageURL: string;
    width?: number;
    height?: number;
};
export type AltStoreAppVersion = {
    version: string;
    buildVersion?: string;
    marketingVersion?: string;
    date: string;
    downloadURL: string;
    localizedDescription?: string;
    size?: number;
    minOSVersion?: string;
    maxOSVersion?: string;
};
export type AltStoreAppPermissions = {
    entitlements?: string[];
    privacy?: Record<string, string>;
};
export type AltStoreApp = {
    name: string;
    bundleIdentifier: string;
    developerName: string;
    subtitle?: string;
    localizedDescription: string;
    iconURL: string;
    tintColor?: string;
    screenshots?: AltStoreScreenshot[] | Record<"iphone" | "ipad", AltStoreScreenshot[]>;
    versions: AltStoreAppVersion[];
    appPermissions?: AltStoreAppPermissions;
    category?: "developer" | "entertainment" | "games" | "lifestyle" | "other" | "photo-video" | "social" | "utilities";
};
export type AltStoreNewsItem = {
    title: string;
    identifier: string;
    caption?: string;
    date: string;
    tintColor?: string;
    imageURL?: string;
    notify?: boolean;
    url?: string;
    appID?: string;
};
export type AltStoreSource = {
    name: string;
    subtitle?: string;
    description?: string;
    iconURL?: string;
    headerURL?: string;
    website?: string;
    tintColor?: string;
    featuredApps?: string[];
    apps: AltStoreApp[];
    news?: AltStoreNewsItem[];
};
export declare function importAltstoreApp(altapp: AltStoreApp): [Omit<DBApp, "id" | "owner">, Omit<Tables<"versions">, "id" | "app_id">[]];
export declare function createAppFromAltstore(altapp: AltStoreApp, createApp: (app: Omit<DBApp, "id">) => Promise<PostgrestSingleResponse<DBApp> | undefined>, session: Session | null, reloadApps: () => void): Promise<void>;
