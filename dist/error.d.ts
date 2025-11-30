import { AuthError, PostgrestError } from '@supabase/supabase-js';
export declare function beautifyAuthError(error: AuthError): string;
export declare function beautifyPostgrestError(error: PostgrestError, noun: string): string;
