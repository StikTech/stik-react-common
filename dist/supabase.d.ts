import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';
export declare let supabase: ReturnType<typeof createClient<Database>>;
export declare function initSupabase(url: string, key: string): void;
