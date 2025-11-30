import "./DeveloperContext.css";
import {
  createContext,
  type ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import supabase from "../supabase";
import type {
  AuthError,
  PostgrestSingleResponse,
  Session,
} from "@supabase/supabase-js";
import { beautifyAuthError, beautifyPostgrestError } from "../error";
import { toast } from "sonner";
import React from "react";
import { GlassCard } from "stik-react-common";
import githubLogo from "../assets/github-mark-white.svg";
import type { DBApp, Screenshot } from "../types";

type DeveloperContextType = {
  session: Session;
  apps: DBApp[];
  createApp: (
    app: Omit<DBApp, "id">
  ) => Promise<PostgrestSingleResponse<DBApp> | undefined>;
  reloadApps: () => void;
  uploadIcon: (file: File, app: DBApp) => Promise<void>;
  uploadScreenshot: (
    files: File[],
    app: DBApp,
    isIpad: boolean
  ) => Promise<void>;
};

const DeveloperContext = createContext<DeveloperContextType | undefined>(
  undefined
);

export const DeveloperProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [apps, setApps] = useState<DBApp[]>([]);
  const loadedAppsRef = React.useRef(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadApps = useCallback(async () => {
    if (!session) {
      setApps([]);
      return;
    }
    loadedAppsRef.current = true;
    const appsPromise = supabase
      .from("apps")
      .select("*")
      .eq("owner", session.user.id);

    appsPromise.then(({ data, error }) => {
      if (error) {
        console.error("Error fetching apps:", error);
        toast.error("Error fetching apps: " + error.message);
      } else {
        setApps((data as DBApp[]) || []);
      }
    });
  }, [session]);

  useEffect(() => {
    if (!session) return;
    if (session.user.user_metadata?.display_name === undefined) {
      if (session.user.app_metadata.provider === "github") {
        supabase.auth.updateUser({
          data: {
            display_name:
              session.user.user_metadata.preferred_username || "GitHub User",
          },
        });
      } else {
        supabase.auth.updateUser({
          data: {
            display_name: session.user.email?.split("@")[0] || "User",
          },
        });
      }
    }

    if (!loadedAppsRef.current) {
      loadApps();
    }
  }, [session, loadApps]);

  const createApp = useCallback(
    async (app: Omit<DBApp, "id">) => {
      if (!session) {
        toast.error("You must be logged in to create an app.");
        return;
      }
      const res = await supabase.from("apps").insert([app]).select().single();
      if (res.error) {
        console.error(res.error);
        toast.error(beautifyPostgrestError(res.error, "app"));
      } else {
        loadApps();
      }
      return res as PostgrestSingleResponse<DBApp>;
    },
    [session, loadApps]
  );

  const uploadIcon = useCallback(
    async (file: File, app: DBApp) => {
      if (!session) {
        throw "You must be logged in to upload an icon.";
      }
      const extension = file.name.includes(".")
        ? "." + file.name.split(".").pop()
        : "";

      const { data, error } = await supabase.storage
        .from("app-images")
        .upload(
          `${session.user.id}/${app.id}/icon-${Date.now()}${extension}`,
          file
        );

      if (error) {
        console.error("Error uploading icon:", error);
        throw "Error uploading icon: " + error.message;
      }

      if (
        app.icon_path !== null &&
        app.icon_path !== undefined &&
        app.icon_path !== ""
      ) {
        const { error: deleteError } = await supabase.storage
          .from("app-images")
          .remove([app.icon_path || ""]);
        if (deleteError) {
          console.error("Error deleting old icon:", deleteError);
          throw "Error deleting old icon: " + deleteError.message;
        }
      }

      const path = data?.path;

      const res = await supabase
        .from("apps")
        .update({
          icon_path: path,
        })
        .eq("id", app.id)
        .single();

      if (res.error) {
        console.error("Error updating app with icon URL:", res.error);
        throw "Error updating app with icon URL: " + res.error.message;
      } else {
        await loadApps();
      }
    },
    [loadApps, session]
  );

  const uploadScreenshot = useCallback(
    async (files: File[], app: DBApp, isIpad: boolean) => {
      if (!session) {
        throw "You must be logged in to upload a screenshot.";
      }

      const screenshots: Screenshot[] = [];

      for (const file of files) {
        const { width, height, err } = await new Promise<{
          width: number;
          height: number;
          err?: string;
        }>((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({ width: img.width, height: img.height });
          };
          img.onerror = () => {
            resolve({ width: 0, height: 0, err: "Failed to load image" });
          };
          img.src = URL.createObjectURL(new Blob([file], { type: file.type }));
        });

        if (err) {
          console.error("Error loading image for dimensions:", err);
          throw "Error fetching dimensions of image: " + err;
        } else if (width <= 0 || height <= 0) {
          console.error("Invalid image dimensions:", width, height);
          throw "Invalid image dimensions.";
        }

        let aspectRatio = width / height;
        if (isIpad) {
          if (aspectRatio < 4 / 3 - 0.1 || aspectRatio > 4 / 3 + 0.1) {
            throw "iPad screenshots must have approximately 4:3 aspect ratio.";
          }
        } else {
          let sixteenNine =
            aspectRatio < 9 / 16 - 0.1 || aspectRatio > 9 / 16 + 0.1;
          let nineNineteenFive =
            aspectRatio < 9 / 19.5 - 0.1 || aspectRatio > 9 / 19.5 + 0.1;
          let fourThree =
            aspectRatio < 4 / 3 - 0.1 || aspectRatio > 4 / 3 + 0.1;
          if (sixteenNine && nineNineteenFive && fourThree) {
            throw "iPhone screenshots must have approximately a 9:16, 9/19.5, or 3:4 aspect ratio.";
          }
        }

        const extension = file.name.includes(".")
          ? "." + file.name.split(".").pop()
          : "";

        const { data, error } = await supabase.storage
          .from("app-images")
          .upload(
            `${session.user.id}/${app.id}/screenshot-${
              isIpad ? "ipad" : "iphone"
            }-${Date.now()}${extension}`,
            file
          );

        if (error) {
          console.error("Error uploading screenshot:", error);
          throw "Error uploading screenshot: " + error.message;
        }

        const path = data?.path;

        screenshots.push({ path: path || "", width, height });
      }

      const columnToUpdate = isIpad ? "ipad_screenshots" : "iphone_screenshots";

      const updatedScreenshots = [
        ...(app[columnToUpdate] as Screenshot[]),
        ...screenshots,
      ];

      const res = await supabase
        .from("apps")
        .update({
          [columnToUpdate]: updatedScreenshots,
        })
        .eq("id", app.id)
        .single();

      if (res.error) {
        console.error("Error updating app with screenshot URL:", res.error);
        throw "Error updating app with screenshot URL: " + res.error.message;
      } else {
        await loadApps();
      }
    },
    [loadApps, session]
  );

  if (loading) {
    return null;
  }

  if (!session) {
    return <Login />;
  }

  return (
    <DeveloperContext.Provider
      value={{
        session,
        apps,
        createApp,
        reloadApps: loadApps,
        uploadIcon,
        uploadScreenshot,
      }}
    >
      {children}
    </DeveloperContext.Provider>
  );
};

export const useSession = (): DeveloperContextType => {
  const context = React.useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error("useDeveloper must be used within a DeveloperProvider");
  }
  return context;
};

const Login = () => {
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = useCallback(async () => {
    let authPromise;
    if (signUp) {
      if (!name || name.trim().length === 0) {
        toast.error("Please provide a display name.");
        return;
      }
      authPromise = async () => {
        let res = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/developers`,
            data: {
              display_name: name,
            },
          },
        });
        if (res.error) {
          throw res.error;
        }

        if (res.data?.user?.email_confirmed_at !== undefined) {
          throw {
            message: "An account has already been created with this email.",
          };
        }
      };
    } else {
      authPromise = async () => {
        let res = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (res.error) {
          throw res.error;
        }
      };
    }

    toast.promise(authPromise, {
      loading: signUp ? "Signing up..." : "Logging in...",
      success: signUp
        ? "Please check your email to complete account creation!"
        : "Logged in successfully!",
      error: (e: AuthError) => {
        console.error(e);
        return beautifyAuthError(e);
      },
    });
  }, [signUp, email, password, name]);

  return (
    <div className="page-centered-container">
      <div className="page-centered-inner">
        <GlassCard className="dev-login-card">
          <div className="login">
            <div className="login-header">
              <h1 className="dev-login-title">
                {signUp ? "Sign up for" : "Login to"} StikStore
              </h1>
              <p className="dev-login-subtitle">
                One account to download, purchase, or publish apps.
              </p>
            </div>
            <button
              className="github-button"
              onClick={() => {
                supabase.auth.signInWithOAuth({
                  provider: "github",
                  options: {
                    redirectTo: `${window.location.origin}/developers`,
                  },
                });
              }}
            >
              <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
              Sign In with GitHub
            </button>
            <form
              className="login"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              {signUp && (
                <div>
                  <label htmlFor="name">Display Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">{signUp ? "Sign Up" : "Log In"}</button>
            </form>
            <p className="signup-switcher">
              {signUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSignUp(!signUp);
                }}
              >
                {signUp ? "Log In" : "Sign Up"}
              </a>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
