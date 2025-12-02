import { Tables, DBApp } from '../main';
import { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
export declare function importIPA(file: File): Promise<[
    Omit<DBApp, "id" | "owner">,
    Omit<Tables<"versions">, "id" | "app_id">,
    IconCandidate | null
] | null>;
export declare function createVersionFromIPA(file: File, app: DBApp): Promise<PostgrestSingleResponse<Tables<"versions">> | null>;
export declare function createAppFromIPA(file: File, createApp: (app: Omit<DBApp, "id">) => Promise<PostgrestSingleResponse<DBApp> | undefined>, session: Session | null, navigate: (url: string) => void, reloadApps: () => void): Promise<void>;
type IconCandidate = {
    path: string;
    scale: number;
    data: Uint8Array;
};
export {};
