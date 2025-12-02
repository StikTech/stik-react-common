import { z } from 'zod';
export declare const altStoreScreenshotSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    imageURL: z.ZodString;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export declare const altStoreAppVersionSchema: z.ZodObject<{
    version: z.ZodString;
    buildVersion: z.ZodOptional<z.ZodString>;
    marketingVersion: z.ZodOptional<z.ZodString>;
    date: z.ZodString;
    downloadURL: z.ZodString;
    localizedDescription: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    minOSVersion: z.ZodOptional<z.ZodString>;
    maxOSVersion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const altStoreAppPermissionsSchema: z.ZodObject<{
    entitlements: z.ZodOptional<z.ZodArray<z.ZodString>>;
    privacy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export declare const altStoreAppSchema: z.ZodObject<{
    name: z.ZodString;
    bundleIdentifier: z.ZodString;
    developerName: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    localizedDescription: z.ZodString;
    iconURL: z.ZodString;
    tintColor: z.ZodOptional<z.ZodString>;
    screenshots: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        imageURL: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>>, z.ZodRecord<z.ZodUnion<readonly [z.ZodLiteral<"iphone">, z.ZodLiteral<"ipad">]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        imageURL: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>>>]>>;
    versions: z.ZodArray<z.ZodObject<{
        version: z.ZodString;
        buildVersion: z.ZodOptional<z.ZodString>;
        marketingVersion: z.ZodOptional<z.ZodString>;
        date: z.ZodString;
        downloadURL: z.ZodString;
        localizedDescription: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        minOSVersion: z.ZodOptional<z.ZodString>;
        maxOSVersion: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    appPermissions: z.ZodOptional<z.ZodObject<{
        entitlements: z.ZodOptional<z.ZodArray<z.ZodString>>;
        privacy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"developer">, z.ZodLiteral<"entertainment">, z.ZodLiteral<"games">, z.ZodLiteral<"lifestyle">, z.ZodLiteral<"other">, z.ZodLiteral<"photo-video">, z.ZodLiteral<"social">, z.ZodLiteral<"utilities">]>>;
}, z.core.$strip>;
export declare const altStoreNewsItemSchema: z.ZodObject<{
    title: z.ZodString;
    identifier: z.ZodString;
    caption: z.ZodOptional<z.ZodString>;
    date: z.ZodString;
    tintColor: z.ZodOptional<z.ZodString>;
    imageURL: z.ZodOptional<z.ZodString>;
    notify: z.ZodOptional<z.ZodBoolean>;
    url: z.ZodOptional<z.ZodString>;
    appID: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const altStoreSourceSchema: z.ZodObject<{
    name: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    iconURL: z.ZodOptional<z.ZodString>;
    headerURL: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    tintColor: z.ZodOptional<z.ZodString>;
    featuredApps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    apps: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        bundleIdentifier: z.ZodString;
        developerName: z.ZodString;
        subtitle: z.ZodOptional<z.ZodString>;
        localizedDescription: z.ZodString;
        iconURL: z.ZodString;
        tintColor: z.ZodOptional<z.ZodString>;
        screenshots: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            imageURL: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>]>>, z.ZodRecord<z.ZodUnion<readonly [z.ZodLiteral<"iphone">, z.ZodLiteral<"ipad">]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            imageURL: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>]>>>]>>;
        versions: z.ZodArray<z.ZodObject<{
            version: z.ZodString;
            buildVersion: z.ZodOptional<z.ZodString>;
            marketingVersion: z.ZodOptional<z.ZodString>;
            date: z.ZodString;
            downloadURL: z.ZodString;
            localizedDescription: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            minOSVersion: z.ZodOptional<z.ZodString>;
            maxOSVersion: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        appPermissions: z.ZodOptional<z.ZodObject<{
            entitlements: z.ZodOptional<z.ZodArray<z.ZodString>>;
            privacy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>;
        category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"developer">, z.ZodLiteral<"entertainment">, z.ZodLiteral<"games">, z.ZodLiteral<"lifestyle">, z.ZodLiteral<"other">, z.ZodLiteral<"photo-video">, z.ZodLiteral<"social">, z.ZodLiteral<"utilities">]>>;
    }, z.core.$strip>>;
    news: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        identifier: z.ZodString;
        caption: z.ZodOptional<z.ZodString>;
        date: z.ZodString;
        tintColor: z.ZodOptional<z.ZodString>;
        imageURL: z.ZodOptional<z.ZodString>;
        notify: z.ZodOptional<z.ZodBoolean>;
        url: z.ZodOptional<z.ZodString>;
        appID: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
