import { DBApp } from '../main';
export default function deleteApp(app: DBApp, navigate: (path: string) => void, reloadApps: () => void): Promise<void>;
