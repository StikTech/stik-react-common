import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export let supabase: ReturnType<typeof createClient<Database>>;

export function initSupabase(url: string, key: string) {
  supabase = createClient<Database>(url, key);
}
