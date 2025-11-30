import type { Tables } from "./database.types";

export type Screenshot = {
  path: string;
  width: number;
  height: number;
};

export type PrivacyItem = [string, string];

export type DBApp = Omit<
  Tables<"apps">,
  "iphone_screenshots" | "ipad_screenshots"
> & {
  iphone_screenshots: Screenshot[];
  ipad_screenshots: Screenshot[];
  privacy: PrivacyItem[];
};
