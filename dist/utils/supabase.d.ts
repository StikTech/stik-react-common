import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../database.types';
export declare function initSupabase(url: string, key: string): void;
export declare function getSupabase(): SupabaseClient<Database, "public", "public", {
    Tables: {
        apps: {
            Row: {
                bundle_identifier: string;
                category: Database["public"]["Enums"]["Category"];
                created_at: string;
                description: string | null;
                entitlements: string[];
                icon_path: string | null;
                id: number;
                ipad_screenshots: import('../database.types').Json;
                iphone_screenshots: import('../database.types').Json;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                subtitle: string | null;
            };
            Insert: {
                bundle_identifier: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at: string;
                description?: string | null;
                entitlements: string[];
                icon_path?: string | null;
                id?: number;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                subtitle?: string | null;
            };
            Update: {
                bundle_identifier?: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at?: string;
                description?: string | null;
                entitlements?: string[];
                icon_path?: string | null;
                id?: number;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                name?: string;
                owner?: string;
                privacy?: import('../database.types').Json;
                subtitle?: string | null;
            };
            Relationships: [];
        };
        versions: {
            Row: {
                app_id: number;
                build_version: string | null;
                changelog: string | null;
                checksum: string | null;
                created_at: string;
                download_url: string;
                id: number;
                version: string;
            };
            Insert: {
                app_id: number;
                build_version?: string | null;
                changelog?: string | null;
                checksum?: string | null;
                created_at: string;
                download_url: string;
                id?: number;
                version: string;
            };
            Update: {
                app_id?: number;
                build_version?: string | null;
                changelog?: string | null;
                checksum?: string | null;
                created_at?: string;
                download_url?: string;
                id?: number;
                version?: string;
            };
            Relationships: [{
                foreignKeyName: "versions_app_id_fkey";
                columns: ["app_id"];
                isOneToOne: false;
                referencedRelation: "apps";
                referencedColumns: ["id"];
            }];
        };
    };
    Views: { [_ in never]: never; };
    Functions: {
        json_matches_schema: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonb_matches_schema: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonschema_is_valid: {
            Args: {
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonschema_validation_errors: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: string[];
        };
    };
    Enums: {
        Category: "developer" | "entertainment" | "games" | "lifestyle" | "social" | "photo-video" | "utilities" | "other";
    };
    CompositeTypes: { [_ in never]: never; };
}, {
    PostgrestVersion: "13.0.5";
}>;
