import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";

let _supabase: SupabaseClient<Database> | null = null;

export function initSupabase(url: string, key: string) {
  _supabase = createClient<Database>(url, key);
}

export function getSupabase() {
  if (!_supabase) {
    throw new Error(
      "Supabase has not been initialized. Call initSupabase() first."
    );
  }
  return _supabase;
}
