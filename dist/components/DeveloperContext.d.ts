import { ReactNode } from 'react';
import { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import { DBApp } from '../types';
type DeveloperContextType = {
    session: Session;
    apps: DBApp[];
    createApp: (app: Omit<DBApp, "id">) => Promise<PostgrestSingleResponse<DBApp> | undefined>;
    reloadApps: () => void;
    uploadIcon: (file: File, app: DBApp) => Promise<void>;
    uploadScreenshot: (files: File[], app: DBApp, isIpad: boolean) => Promise<void>;
};
export declare const DeveloperProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare const useSession: () => DeveloperContextType;
export {};
