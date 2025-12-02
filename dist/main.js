import { jsx as Z, jsxs as Y, Fragment as ds } from "react/jsx-runtime";
import Mo, { createContext as Vo, useState as Se, useEffect as ct, useCallback as Gt, useMemo as Mn, useRef as tr, useContext as ps } from "react";
import { createClient as _s } from "@supabase/supabase-js";
import { toast as oe } from "sonner";
import { useNavigate as Ye, useParams as ht, useLocation as gs, Outlet as ms } from "react-router";
import './assets/main.css';const bs = {
  "glass-card": "_glass-card_9ryz3_1"
}, ke = ({ children: e, className: r, style: t }) => {
  const n = [bs["glass-card"], r].filter(Boolean).join(" ");
  return /* @__PURE__ */ Z("div", { className: n, style: t, children: e });
};
let zn = null;
function D0(e, r) {
  zn = _s(e, r);
}
function ae() {
  if (!zn)
    throw new Error(
      "Supabase has not been initialized. Call initSupabase() first."
    );
  return zn;
}
function vs(e) {
  switch (e.message.toLowerCase()) {
    case "missing email or phone":
      return "No email provided";
    case "invalid login credentials":
      return "Invalid email or password";
    case "signup requires a valid password":
      return "No password provided";
    case "password should be at least 6 characters.":
      return "Password should be at least 6 characters";
    case "unable to validate email address: invalid format":
      return "Invalid email address";
    case "anonymous sign-ins are disabled":
      return "No email provided";
  }
  return e.message;
}
function Ce(e, r) {
  if (e.message.toLowerCase().includes("duplicate key value violates unique constraint")) {
    let t = e.message.split('"')[1].split("_");
    return t.shift(), t.pop(), t.join(" ") === "app id build version" && (t = ["build version"]), `A${r.toLowerCase().startsWith("a") || r.toLowerCase().startsWith("e") || r.toLowerCase().startsWith("i") || r.toLowerCase().startsWith("o") || r.toLowerCase().startsWith("u") ? "n" : ""} ${r} with the same ${t.join(
      " "
    )} already exists.`;
  }
  return e.message.toLowerCase().includes("cannot coerce the result to a single json object") ? `The specified ${r} does not exist.` : e.message;
}
const ws = "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e", Wo = Vo(
  void 0
), j0 = ({ children: e }) => {
  const [r, t] = Se(!0), [n, i] = Se(null), [o, s] = Se([]), a = Mo.useRef(!1);
  ct(() => {
    ae().auth.getSession().then(({ data: { session: f } }) => {
      i(f), t(!1);
    });
    const {
      data: { subscription: _ }
    } = ae().auth.onAuthStateChange((f, b) => {
      i(b), t(!1);
    });
    return () => _.unsubscribe();
  }, []);
  const c = Gt(async () => {
    if (!n) {
      s([]);
      return;
    }
    a.current = !0, ae().from("apps").select("*").eq("owner", n.user.id).then(({ data: f, error: b }) => {
      b ? (console.error("Error fetching apps:", b), oe.error("Error fetching apps: " + b.message)) : s(f || []);
    });
  }, [n]);
  ct(() => {
    n && (n.user.user_metadata?.display_name === void 0 && (n.user.app_metadata.provider === "github" ? ae().auth.updateUser({
      data: {
        display_name: n.user.user_metadata.preferred_username || "GitHub User"
      }
    }) : ae().auth.updateUser({
      data: {
        display_name: n.user.email?.split("@")[0] || "User"
      }
    })), a.current || c());
  }, [n, c]);
  const l = Gt(
    async (_) => {
      if (!n) {
        oe.error("You must be logged in to create an app.");
        return;
      }
      const f = await ae().from("apps").insert([_]).select().single();
      return f.error ? (console.error(f.error), oe.error(Ce(f.error, "app"))) : c(), f;
    },
    [n, c]
  ), u = Gt(
    async (_, f) => {
      if (!n)
        throw "You must be logged in to upload an icon.";
      const b = _.name.includes(".") ? "." + _.name.split(".").pop() : "", { data: m, error: k } = await ae().storage.from("app-images").upload(
        `${n.user.id}/${f.id}/icon-${Date.now()}${b}`,
        _
      );
      if (k)
        throw console.error("Error uploading icon:", k), "Error uploading icon: " + k.message;
      if (f.icon_path !== null && f.icon_path !== void 0 && f.icon_path !== "") {
        const { error: x } = await ae().storage.from("app-images").remove([f.icon_path || ""]);
        if (x)
          throw console.error("Error deleting old icon:", x), "Error deleting old icon: " + x.message;
      }
      const h = m?.path, v = await ae().from("apps").update({
        icon_path: h
      }).eq("id", f.id).single();
      if (v.error)
        throw console.error("Error updating app with icon URL:", v.error), "Error updating app with icon URL: " + v.error.message;
      await c();
    },
    [c, n]
  ), d = Gt(
    async (_, f, b) => {
      if (!n)
        throw "You must be logged in to upload a screenshot.";
      const m = [];
      for (const x of _) {
        const { width: z, height: w, err: y } = await new Promise((S) => {
          const N = new Image();
          N.onload = () => {
            S({ width: N.width, height: N.height });
          }, N.onerror = () => {
            S({ width: 0, height: 0, err: "Failed to load image" });
          }, N.src = URL.createObjectURL(new Blob([x], { type: x.type }));
        });
        if (y)
          throw console.error("Error loading image for dimensions:", y), "Error fetching dimensions of image: " + y;
        if (z <= 0 || w <= 0)
          throw console.error("Invalid image dimensions:", z, w), "Invalid image dimensions.";
        let A = z / w;
        if (b) {
          if (A < 4 / 3 - 0.1 || A > 4 / 3 + 0.1)
            throw "iPad screenshots must have approximately 4:3 aspect ratio.";
        } else {
          let S = A < 0.4625 || A > 0.6625, N = A < 9 / 19.5 - 0.1 || A > 9 / 19.5 + 0.1, p = A < 4 / 3 - 0.1 || A > 4 / 3 + 0.1;
          if (S && N && p)
            throw "iPhone screenshots must have approximately a 9:16, 9/19.5, or 3:4 aspect ratio.";
        }
        const C = x.name.includes(".") ? "." + x.name.split(".").pop() : "", { data: E, error: I } = await ae().storage.from("app-images").upload(
          `${n.user.id}/${f.id}/screenshot-${b ? "ipad" : "iphone"}-${Date.now()}${C}`,
          x
        );
        if (I)
          throw console.error("Error uploading screenshot:", I), "Error uploading screenshot: " + I.message;
        const F = E?.path;
        m.push({ path: F || "", width: z, height: w });
      }
      const k = b ? "ipad_screenshots" : "iphone_screenshots", h = [
        ...f[k],
        ...m
      ], v = await ae().from("apps").update({
        [k]: h
      }).eq("id", f.id).single();
      if (v.error)
        throw console.error("Error updating app with screenshot URL:", v.error), "Error updating app with screenshot URL: " + v.error.message;
      await c();
    },
    [c, n]
  );
  return r ? null : n ? /* @__PURE__ */ Z(
    Wo.Provider,
    {
      value: {
        session: n,
        apps: o,
        createApp: l,
        reloadApps: c,
        uploadIcon: u,
        uploadScreenshot: d
      },
      children: e
    }
  ) : /* @__PURE__ */ Z(ys, {});
}, Oe = () => {
  const e = Mo.useContext(Wo);
  if (e === void 0)
    throw new Error("useDeveloper must be used within a DeveloperProvider");
  return e;
}, ys = () => {
  const [e, r] = Se(!0), [t, n] = Se(""), [i, o] = Se(""), [s, a] = Se(""), c = Gt(async () => {
    let l;
    if (e) {
      if (!s || s.trim().length === 0) {
        oe.error("Please provide a display name.");
        return;
      }
      l = async () => {
        let u = await ae().auth.signUp({
          email: t,
          password: i,
          options: {
            emailRedirectTo: `${window.location.origin}/developers`,
            data: {
              display_name: s
            }
          }
        });
        if (u.error)
          throw u.error;
        if (u.data?.user?.email_confirmed_at !== void 0)
          throw {
            message: "An account has already been created with this email."
          };
      };
    } else
      l = async () => {
        let u = await ae().auth.signInWithPassword({
          email: t,
          password: i
        });
        if (u.error)
          throw u.error;
      };
    oe.promise(l, {
      loading: e ? "Signing up..." : "Logging in...",
      success: e ? "Please check your email to complete account creation!" : "Logged in successfully!",
      error: (u) => (console.error(u), vs(u))
    });
  }, [e, t, i, s]);
  return /* @__PURE__ */ Z("div", { className: "page-centered-container", children: /* @__PURE__ */ Z("div", { className: "page-centered-inner", children: /* @__PURE__ */ Z(ke, { className: "dev-login-card", children: /* @__PURE__ */ Y("div", { className: "login", children: [
    /* @__PURE__ */ Y("div", { className: "login-header", children: [
      /* @__PURE__ */ Y("h1", { className: "dev-login-title", children: [
        e ? "Sign up for" : "Login to",
        " StikStore"
      ] }),
      /* @__PURE__ */ Z("p", { className: "dev-login-subtitle", children: "One account to download, purchase, or publish apps." })
    ] }),
    /* @__PURE__ */ Y(
      "button",
      {
        className: "github-button",
        onClick: () => {
          ae().auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: `${window.location.origin}/developers`
            }
          });
        },
        children: [
          /* @__PURE__ */ Z("img", { src: ws, alt: "GitHub Logo", className: "github-logo" }),
          "Sign In with GitHub"
        ]
      }
    ),
    /* @__PURE__ */ Y(
      "form",
      {
        className: "login",
        onSubmit: (l) => {
          l.preventDefault(), c();
        },
        children: [
          e && /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "name", children: "Display Name" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "name",
                type: "text",
                placeholder: "John Doe",
                value: s,
                onChange: (l) => a(l.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "email",
                type: "text",
                placeholder: "email@example.com",
                value: t,
                onChange: (l) => n(l.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "password",
                type: "password",
                placeholder: "••••••••",
                value: i,
                onChange: (l) => o(l.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Z("button", { type: "submit", children: e ? "Sign Up" : "Log In" })
        ]
      }
    ),
    /* @__PURE__ */ Y("p", { className: "signup-switcher", children: [
      e ? "Already have an account?" : "Don't have an account?",
      " ",
      /* @__PURE__ */ Z(
        "a",
        {
          href: "#",
          onClick: (l) => {
            l.preventDefault(), r(!e);
          },
          children: e ? "Log In" : "Sign Up"
        }
      )
    ] })
  ] }) }) }) });
}, M0 = () => {
  const { session: e } = Oe(), r = Ye();
  return /* @__PURE__ */ Y("section", { className: "settings-page", children: [
    /* @__PURE__ */ Y("div", { className: "settings-header", children: [
      /* @__PURE__ */ Z("h1", { children: "Account Settings" }),
      /* @__PURE__ */ Z("h4", { className: "text-link", onClick: () => r("/developers"), children: "Back to Dashboard" })
    ] }),
    /* @__PURE__ */ Y(ke, { children: [
      /* @__PURE__ */ Z("h3", { children: "Profile" }),
      /* @__PURE__ */ Y("p", { children: [
        "Display Name: ",
        e.user.user_metadata.display_name
      ] }),
      /* @__PURE__ */ Y("p", { children: [
        "Email: ",
        e.user.email
      ] }),
      /* @__PURE__ */ Z(
        "button",
        {
          style: { marginTop: "1.5rem", width: "100%" },
          onClick: async () => {
            await ae().auth.signOut(), window.location.href = "/developers";
          },
          children: "Log Out"
        }
      )
    ] })
  ] });
}, rr = ({
  app: e,
  showBackToApp: r,
  backToAppPage: t,
  titleOverride: n,
  subtitleOverride: i,
  inline: o
}) => {
  const s = Ye(), a = Mn(
    () => e.icon_path ? ae().storage.from("app-images").getPublicUrl(e.icon_path).data.publicUrl : "/default-icon.png",
    [e.icon_path]
  );
  return /* @__PURE__ */ Y(
    "div",
    {
      className: `app-title-container${o ? " app-title-container-inline" : ""}`,
      children: [
        /* @__PURE__ */ Z(
          "img",
          {
            src: a,
            className: "app-icon",
            onError: (c) => {
              c.currentTarget.src = "/default-icon.png";
            }
          }
        ),
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ Z("h1", { className: "app-title", children: n ?? e.name }),
          (!n || i) && /* @__PURE__ */ Z("p", { className: "app-subtitle", children: i ?? (e.subtitle || e.bundle_identifier) }),
          !o && /* @__PURE__ */ Y("div", { className: "version-back-buttons", children: [
            r && /* @__PURE__ */ Y(ds, { children: [
              /* @__PURE__ */ Y(
                "h4",
                {
                  className: "text-link",
                  onClick: () => s(
                    "/developers/app/" + e?.id + "/" + (t || "info")
                  ),
                  children: [
                    "Back to ",
                    e?.name
                  ]
                }
              ),
              /* @__PURE__ */ Z("span", { children: "•" })
            ] }),
            /* @__PURE__ */ Z("h4", { className: "text-link", onClick: () => s("/developers"), children: "Back to Dashboard" })
          ] })
        ] })
      ]
    }
  );
}, V0 = () => {
  const { session: e, apps: r } = Oe(), t = Ye();
  return /* @__PURE__ */ Y("div", { className: "developer-container", children: [
    /* @__PURE__ */ Z("h1", { children: "StikStore Developer Portal" }),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(ke, { children: [
        /* @__PURE__ */ Y("h3", { children: [
          "Welcome to the Dashboard, ",
          e.user.user_metadata.display_name,
          "!"
        ] }),
        /* @__PURE__ */ Y("div", { className: "developer-buttons", children: [
          /* @__PURE__ */ Z(
            "button",
            {
              onClick: () => {
                t("/developers/account-settings");
              },
              children: "Account Settings"
            }
          ),
          /* @__PURE__ */ Z("button", { onClick: () => ae().auth.signOut(), children: "Log Out" })
        ] })
      ] }),
      /* @__PURE__ */ Y(ke, { children: [
        /* @__PURE__ */ Z("h3", { children: "Uploaded Apps" }),
        /* @__PURE__ */ Z("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: r.map((n) => /* @__PURE__ */ Z(
          "li",
          {
            className: "button developer-app-list-item",
            onClick: () => {
              t(`/developers/app/${n.id}`);
            },
            children: /* @__PURE__ */ Z(rr, { app: n, inline: !0 })
          },
          n.id
        )) }),
        /* @__PURE__ */ Z(
          "button",
          {
            onClick: () => {
              t("/developers/new-app");
            },
            className: "primary",
            style: {
              width: "100%"
            },
            children: "Create/Import App"
          }
        )
      ] })
    ] })
  ] });
}, Ho = ({
  field: e,
  updateValue: r,
  value: t
}) => {
  let n;
  if (e.type === "text")
    n = /* @__PURE__ */ Z(
      "input",
      {
        id: String(e.id),
        type: "text",
        value: t ? String(t) : "",
        placeholder: e.placeholder,
        required: e.required,
        onChange: (i) => {
          r(i.target.value);
        }
      }
    );
  else if (e.type === "textarea")
    n = /* @__PURE__ */ Z(
      "textarea",
      {
        id: String(e.id),
        placeholder: e.placeholder,
        value: t ? String(t) : "",
        required: e.required,
        onChange: (i) => r(i.target.value),
        style: { minWidth: "100%", minHeight: "80px" }
      }
    );
  else if (e.type === "dropdown")
    n = /* @__PURE__ */ Z(
      "select",
      {
        id: String(e.id),
        required: e.required,
        onChange: (i) => r(i.target.value),
        value: t ? String(t) : e.defaultValue,
        children: e.options.map((i) => /* @__PURE__ */ Z("option", { value: i.value, children: i.label }, i.value))
      }
    );
  else
    return null;
  return /* @__PURE__ */ Y("div", { children: [
    /* @__PURE__ */ Y("div", { children: [
      /* @__PURE__ */ Y("label", { htmlFor: String(e.id), style: { margin: "0" }, children: [
        e.label,
        e.required ? /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }) : ""
      ] }),
      e.description && /* @__PURE__ */ Z("p", { style: { color: "var(--text-muted)", margin: "0" }, children: e.description })
    ] }),
    n
  ] });
}, si = [
  {
    label: "App Name",
    id: "name",
    placeholder: "MyApp",
    required: !0,
    type: "text"
  },
  {
    label: "Bundle ID",
    id: "bundle_identifier",
    placeholder: "com.example.myapp",
    required: !0,
    type: "text",
    // https://stackoverflow.com/questions/22548997/regex-to-validate-apple-bundle-identifier
    validate: (e) => /^[a-z0-9]+(\.[a-z0-9]+)+$/gi.test(e)
  },
  {
    label: "Subtitle",
    id: "subtitle",
    placeholder: "An awesome app.",
    type: "text"
  },
  {
    label: "Description",
    id: "description",
    placeholder: "The best app ever, available on StikStore.",
    type: "textarea"
  },
  {
    label: "Category",
    id: "category",
    options: [
      { label: "Developer", value: "developer" },
      { label: "Entertainment", value: "entertainment" },
      { label: "Games", value: "games" },
      { label: "Lifestyle", value: "lifestyle" },
      { label: "Social", value: "social" },
      { label: "Photo & Video", value: "photo-video" },
      { label: "Utilities", value: "utilities" },
      { label: "Other", value: "other" }
    ],
    defaultValue: "other",
    type: "dropdown"
  }
], Go = ({
  app: e,
  save: r,
  label: t,
  style: n
}) => {
  const [i, o] = Se(e);
  return ct(() => {
    o(e);
  }, [e]), /* @__PURE__ */ Z(ke, { style: n, children: /* @__PURE__ */ Y("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ Y("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ Z("h2", { children: t || "App Metadata" }),
      /* @__PURE__ */ Y("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    si.map((s) => /* @__PURE__ */ Z(
      Ho,
      {
        field: s,
        updateValue: (a) => {
          o({ ...i, [s.id]: a });
        },
        value: i[s.id]
      },
      s.id
    )),
    /* @__PURE__ */ Z(
      "button",
      {
        style: {
          marginTop: "1rem"
        },
        className: "primary",
        type: "submit",
        onClick: (s) => {
          if (s.preventDefault(), !i.name || !i.bundle_identifier)
            return oe.error("Please fill in all required fields");
          for (const a of si)
            if (a.validate) {
              const c = i[a.id];
              if (typeof c == "string" && !a.validate(c))
                return oe.error(`Invalid value for ${a.label}`);
            }
          r(i);
        },
        disabled: !i.name || !i.bundle_identifier || i === e,
        children: "Save App"
      }
    )
  ] }) });
};
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ks(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
function vr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Yr = { exports: {} };
var li;
function Es() {
  return li || (li = 1, (function(e, r) {
    (function(t) {
      e.exports = t();
    })(function() {
      return (function t(n, i, o) {
        function s(l, u) {
          if (!i[l]) {
            if (!n[l]) {
              var d = typeof vr == "function" && vr;
              if (!u && d) return d(l, !0);
              if (a) return a(l, !0);
              var _ = new Error("Cannot find module '" + l + "'");
              throw _.code = "MODULE_NOT_FOUND", _;
            }
            var f = i[l] = { exports: {} };
            n[l][0].call(f.exports, function(b) {
              var m = n[l][1][b];
              return s(m || b);
            }, f, f.exports, t, n, i, o);
          }
          return i[l].exports;
        }
        for (var a = typeof vr == "function" && vr, c = 0; c < o.length; c++) s(o[c]);
        return s;
      })({ 1: [function(t, n, i) {
        var o = t("./utils"), s = t("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(c) {
          for (var l, u, d, _, f, b, m, k = [], h = 0, v = c.length, x = v, z = o.getTypeOf(c) !== "string"; h < c.length; ) x = v - h, d = z ? (l = c[h++], u = h < v ? c[h++] : 0, h < v ? c[h++] : 0) : (l = c.charCodeAt(h++), u = h < v ? c.charCodeAt(h++) : 0, h < v ? c.charCodeAt(h++) : 0), _ = l >> 2, f = (3 & l) << 4 | u >> 4, b = 1 < x ? (15 & u) << 2 | d >> 6 : 64, m = 2 < x ? 63 & d : 64, k.push(a.charAt(_) + a.charAt(f) + a.charAt(b) + a.charAt(m));
          return k.join("");
        }, i.decode = function(c) {
          var l, u, d, _, f, b, m = 0, k = 0, h = "data:";
          if (c.substr(0, h.length) === h) throw new Error("Invalid base64 input, it looks like a data url.");
          var v, x = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (c.charAt(c.length - 1) === a.charAt(64) && x--, c.charAt(c.length - 2) === a.charAt(64) && x--, x % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (v = s.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); m < c.length; ) l = a.indexOf(c.charAt(m++)) << 2 | (_ = a.indexOf(c.charAt(m++))) >> 4, u = (15 & _) << 4 | (f = a.indexOf(c.charAt(m++))) >> 2, d = (3 & f) << 6 | (b = a.indexOf(c.charAt(m++))), v[k++] = l, f !== 64 && (v[k++] = u), b !== 64 && (v[k++] = d);
          return v;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(t, n, i) {
        var o = t("./external"), s = t("./stream/DataWorker"), a = t("./stream/Crc32Probe"), c = t("./stream/DataLengthProbe");
        function l(u, d, _, f, b) {
          this.compressedSize = u, this.uncompressedSize = d, this.crc32 = _, this.compression = f, this.compressedContent = b;
        }
        l.prototype = { getContentWorker: function() {
          var u = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), d = this;
          return u.on("end", function() {
            if (this.streamInfo.data_length !== d.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), u;
        }, getCompressedWorker: function() {
          return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, l.createWorkerFrom = function(u, d, _) {
          return u.pipe(new a()).pipe(new c("uncompressedSize")).pipe(d.compressWorker(_)).pipe(new c("compressedSize")).withStreamInfo("compression", d);
        }, n.exports = l;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, n, i) {
        var o = t("./stream/GenericWorker");
        i.STORE = { magic: "\0\0", compressWorker: function() {
          return new o("STORE compression");
        }, uncompressWorker: function() {
          return new o("STORE decompression");
        } }, i.DEFLATE = t("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, n, i) {
        var o = t("./utils"), s = (function() {
          for (var a, c = [], l = 0; l < 256; l++) {
            a = l;
            for (var u = 0; u < 8; u++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            c[l] = a;
          }
          return c;
        })();
        n.exports = function(a, c) {
          return a !== void 0 && a.length ? o.getTypeOf(a) !== "string" ? (function(l, u, d, _) {
            var f = s, b = _ + d;
            l ^= -1;
            for (var m = _; m < b; m++) l = l >>> 8 ^ f[255 & (l ^ u[m])];
            return -1 ^ l;
          })(0 | c, a, a.length, 0) : (function(l, u, d, _) {
            var f = s, b = _ + d;
            l ^= -1;
            for (var m = _; m < b; m++) l = l >>> 8 ^ f[255 & (l ^ u.charCodeAt(m))];
            return -1 ^ l;
          })(0 | c, a, a.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(t, n, i) {
        i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
      }, {}], 6: [function(t, n, i) {
        var o = null;
        o = typeof Promise < "u" ? Promise : t("lie"), n.exports = { Promise: o };
      }, { lie: 37 }], 7: [function(t, n, i) {
        var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = t("pako"), a = t("./utils"), c = t("./stream/GenericWorker"), l = o ? "uint8array" : "array";
        function u(d, _) {
          c.call(this, "FlateWorker/" + d), this._pako = null, this._pakoAction = d, this._pakoOptions = _, this.meta = {};
        }
        i.magic = "\b\0", a.inherits(u, c), u.prototype.processChunk = function(d) {
          this.meta = d.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(l, d.data), !1);
        }, u.prototype.flush = function() {
          c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, u.prototype.cleanUp = function() {
          c.prototype.cleanUp.call(this), this._pako = null;
        }, u.prototype._createPako = function() {
          this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var d = this;
          this._pako.onData = function(_) {
            d.push({ data: _, meta: d.meta });
          };
        }, i.compressWorker = function(d) {
          return new u("Deflate", d);
        }, i.uncompressWorker = function() {
          return new u("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, n, i) {
        function o(f, b) {
          var m, k = "";
          for (m = 0; m < b; m++) k += String.fromCharCode(255 & f), f >>>= 8;
          return k;
        }
        function s(f, b, m, k, h, v) {
          var x, z, w = f.file, y = f.compression, A = v !== l.utf8encode, C = a.transformTo("string", v(w.name)), E = a.transformTo("string", l.utf8encode(w.name)), I = w.comment, F = a.transformTo("string", v(I)), S = a.transformTo("string", l.utf8encode(I)), N = E.length !== w.name.length, p = S.length !== I.length, P = "", J = "", V = "", ie = w.dir, L = w.date, ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          b && !m || (ee.crc32 = f.crc32, ee.compressedSize = f.compressedSize, ee.uncompressedSize = f.uncompressedSize);
          var B = 0;
          b && (B |= 8), A || !N && !p || (B |= 2048);
          var U = 0, re = 0;
          ie && (U |= 16), h === "UNIX" ? (re = 798, U |= (function(X, we) {
            var ze = X;
            return X || (ze = we ? 16893 : 33204), (65535 & ze) << 16;
          })(w.unixPermissions, ie)) : (re = 20, U |= (function(X) {
            return 63 & (X || 0);
          })(w.dosPermissions)), x = L.getUTCHours(), x <<= 6, x |= L.getUTCMinutes(), x <<= 5, x |= L.getUTCSeconds() / 2, z = L.getUTCFullYear() - 1980, z <<= 4, z |= L.getUTCMonth() + 1, z <<= 5, z |= L.getUTCDate(), N && (J = o(1, 1) + o(u(C), 4) + E, P += "up" + o(J.length, 2) + J), p && (V = o(1, 1) + o(u(F), 4) + S, P += "uc" + o(V.length, 2) + V);
          var K = "";
          return K += `
\0`, K += o(B, 2), K += y.magic, K += o(x, 2), K += o(z, 2), K += o(ee.crc32, 4), K += o(ee.compressedSize, 4), K += o(ee.uncompressedSize, 4), K += o(C.length, 2), K += o(P.length, 2), { fileRecord: d.LOCAL_FILE_HEADER + K + C + P, dirRecord: d.CENTRAL_FILE_HEADER + o(re, 2) + K + o(F.length, 2) + "\0\0\0\0" + o(U, 4) + o(k, 4) + C + P + F };
        }
        var a = t("../utils"), c = t("../stream/GenericWorker"), l = t("../utf8"), u = t("../crc32"), d = t("../signature");
        function _(f, b, m, k) {
          c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = m, this.encodeFileName = k, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        a.inherits(_, c), _.prototype.push = function(f) {
          var b = f.meta.percent || 0, m = this.entriesCount, k = this._sources.length;
          this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, c.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: m ? (b + 100 * (m - k - 1)) / m : 100 } }));
        }, _.prototype.openedSource = function(f) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
          var b = this.streamFiles && !f.file.dir;
          if (b) {
            var m = s(f, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: m.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, _.prototype.closedSource = function(f) {
          this.accumulate = !1;
          var b = this.streamFiles && !f.file.dir, m = s(f, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(m.dirRecord), b) this.push({ data: (function(k) {
            return d.DATA_DESCRIPTOR + o(k.crc32, 4) + o(k.compressedSize, 4) + o(k.uncompressedSize, 4);
          })(f), meta: { percent: 100 } });
          else for (this.push({ data: m.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, _.prototype.flush = function() {
          for (var f = this.bytesWritten, b = 0; b < this.dirRecords.length; b++) this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
          var m = this.bytesWritten - f, k = (function(h, v, x, z, w) {
            var y = a.transformTo("string", w(z));
            return d.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(h, 2) + o(h, 2) + o(v, 4) + o(x, 4) + o(y.length, 2) + y;
          })(this.dirRecords.length, m, f, this.zipComment, this.encodeFileName);
          this.push({ data: k, meta: { percent: 100 } });
        }, _.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, _.prototype.registerPrevious = function(f) {
          this._sources.push(f);
          var b = this;
          return f.on("data", function(m) {
            b.processChunk(m);
          }), f.on("end", function() {
            b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
          }), f.on("error", function(m) {
            b.error(m);
          }), this;
        }, _.prototype.resume = function() {
          return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, _.prototype.error = function(f) {
          var b = this._sources;
          if (!c.prototype.error.call(this, f)) return !1;
          for (var m = 0; m < b.length; m++) try {
            b[m].error(f);
          } catch {
          }
          return !0;
        }, _.prototype.lock = function() {
          c.prototype.lock.call(this);
          for (var f = this._sources, b = 0; b < f.length; b++) f[b].lock();
        }, n.exports = _;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, n, i) {
        var o = t("../compressions"), s = t("./ZipFileWorker");
        i.generateWorker = function(a, c, l) {
          var u = new s(c.streamFiles, l, c.platform, c.encodeFileName), d = 0;
          try {
            a.forEach(function(_, f) {
              d++;
              var b = (function(v, x) {
                var z = v || x, w = o[z];
                if (!w) throw new Error(z + " is not a valid compression method !");
                return w;
              })(f.options.compression, c.compression), m = f.options.compressionOptions || c.compressionOptions || {}, k = f.dir, h = f.date;
              f._compressWorker(b, m).withStreamInfo("file", { name: _, dir: k, date: h, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(u);
            }), u.entriesCount = d;
          } catch (_) {
            u.error(_);
          }
          return u;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, n, i) {
        function o() {
          if (!(this instanceof o)) return new o();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var s = new o();
            for (var a in this) typeof this[a] != "function" && (s[a] = this[a]);
            return s;
          };
        }
        (o.prototype = t("./object")).loadAsync = t("./load"), o.support = t("./support"), o.defaults = t("./defaults"), o.version = "3.10.1", o.loadAsync = function(s, a) {
          return new o().loadAsync(s, a);
        }, o.external = t("./external"), n.exports = o;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, n, i) {
        var o = t("./utils"), s = t("./external"), a = t("./utf8"), c = t("./zipEntries"), l = t("./stream/Crc32Probe"), u = t("./nodejsUtils");
        function d(_) {
          return new s.Promise(function(f, b) {
            var m = _.decompressed.getContentWorker().pipe(new l());
            m.on("error", function(k) {
              b(k);
            }).on("end", function() {
              m.streamInfo.crc32 !== _.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : f();
            }).resume();
          });
        }
        n.exports = function(_, f) {
          var b = this;
          return f = o.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: a.utf8decode }), u.isNode && u.isStream(_) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(m) {
            var k = new c(f);
            return k.load(m), k;
          }).then(function(m) {
            var k = [s.Promise.resolve(m)], h = m.files;
            if (f.checkCRC32) for (var v = 0; v < h.length; v++) k.push(d(h[v]));
            return s.Promise.all(k);
          }).then(function(m) {
            for (var k = m.shift(), h = k.files, v = 0; v < h.length; v++) {
              var x = h[v], z = x.fileNameStr, w = o.resolve(x.fileNameStr);
              b.file(w, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: f.createFolders }), x.dir || (b.file(w).unsafeOriginalName = z);
            }
            return k.zipComment.length && (b.comment = k.zipComment), b;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, n, i) {
        var o = t("../utils"), s = t("../stream/GenericWorker");
        function a(c, l) {
          s.call(this, "Nodejs stream input adapter for " + c), this._upstreamEnded = !1, this._bindStream(l);
        }
        o.inherits(a, s), a.prototype._bindStream = function(c) {
          var l = this;
          (this._stream = c).pause(), c.on("data", function(u) {
            l.push({ data: u, meta: { percent: 0 } });
          }).on("error", function(u) {
            l.isPaused ? this.generatedError = u : l.error(u);
          }).on("end", function() {
            l.isPaused ? l._upstreamEnded = !0 : l.end();
          });
        }, a.prototype.pause = function() {
          return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, a.prototype.resume = function() {
          return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, n.exports = a;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, n, i) {
        var o = t("readable-stream").Readable;
        function s(a, c, l) {
          o.call(this, c), this._helper = a;
          var u = this;
          a.on("data", function(d, _) {
            u.push(d) || u._helper.pause(), l && l(_);
          }).on("error", function(d) {
            u.emit("error", d);
          }).on("end", function() {
            u.push(null);
          });
        }
        t("../utils").inherits(s, o), s.prototype._read = function() {
          this._helper.resume();
        }, n.exports = s;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, n, i) {
        n.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(o, s) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(o, s);
          if (typeof o == "number") throw new Error('The "data" argument must not be a number');
          return new Buffer(o, s);
        }, allocBuffer: function(o) {
          if (Buffer.alloc) return Buffer.alloc(o);
          var s = new Buffer(o);
          return s.fill(0), s;
        }, isBuffer: function(o) {
          return Buffer.isBuffer(o);
        }, isStream: function(o) {
          return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function";
        } };
      }, {}], 15: [function(t, n, i) {
        function o(w, y, A) {
          var C, E = a.getTypeOf(y), I = a.extend(A || {}, u);
          I.date = I.date || /* @__PURE__ */ new Date(), I.compression !== null && (I.compression = I.compression.toUpperCase()), typeof I.unixPermissions == "string" && (I.unixPermissions = parseInt(I.unixPermissions, 8)), I.unixPermissions && 16384 & I.unixPermissions && (I.dir = !0), I.dosPermissions && 16 & I.dosPermissions && (I.dir = !0), I.dir && (w = h(w)), I.createFolders && (C = k(w)) && v.call(this, C, !0);
          var F = E === "string" && I.binary === !1 && I.base64 === !1;
          A && A.binary !== void 0 || (I.binary = !F), (y instanceof d && y.uncompressedSize === 0 || I.dir || !y || y.length === 0) && (I.base64 = !1, I.binary = !0, y = "", I.compression = "STORE", E = "string");
          var S = null;
          S = y instanceof d || y instanceof c ? y : b.isNode && b.isStream(y) ? new m(w, y) : a.prepareContent(w, y, I.binary, I.optimizedBinaryString, I.base64);
          var N = new _(w, S, I);
          this.files[w] = N;
        }
        var s = t("./utf8"), a = t("./utils"), c = t("./stream/GenericWorker"), l = t("./stream/StreamHelper"), u = t("./defaults"), d = t("./compressedObject"), _ = t("./zipObject"), f = t("./generate"), b = t("./nodejsUtils"), m = t("./nodejs/NodejsStreamInputAdapter"), k = function(w) {
          w.slice(-1) === "/" && (w = w.substring(0, w.length - 1));
          var y = w.lastIndexOf("/");
          return 0 < y ? w.substring(0, y) : "";
        }, h = function(w) {
          return w.slice(-1) !== "/" && (w += "/"), w;
        }, v = function(w, y) {
          return y = y !== void 0 ? y : u.createFolders, w = h(w), this.files[w] || o.call(this, w, null, { dir: !0, createFolders: y }), this.files[w];
        };
        function x(w) {
          return Object.prototype.toString.call(w) === "[object RegExp]";
        }
        var z = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(w) {
          var y, A, C;
          for (y in this.files) C = this.files[y], (A = y.slice(this.root.length, y.length)) && y.slice(0, this.root.length) === this.root && w(A, C);
        }, filter: function(w) {
          var y = [];
          return this.forEach(function(A, C) {
            w(A, C) && y.push(C);
          }), y;
        }, file: function(w, y, A) {
          if (arguments.length !== 1) return w = this.root + w, o.call(this, w, y, A), this;
          if (x(w)) {
            var C = w;
            return this.filter(function(I, F) {
              return !F.dir && C.test(I);
            });
          }
          var E = this.files[this.root + w];
          return E && !E.dir ? E : null;
        }, folder: function(w) {
          if (!w) return this;
          if (x(w)) return this.filter(function(E, I) {
            return I.dir && w.test(E);
          });
          var y = this.root + w, A = v.call(this, y), C = this.clone();
          return C.root = A.name, C;
        }, remove: function(w) {
          w = this.root + w;
          var y = this.files[w];
          if (y || (w.slice(-1) !== "/" && (w += "/"), y = this.files[w]), y && !y.dir) delete this.files[w];
          else for (var A = this.filter(function(E, I) {
            return I.name.slice(0, w.length) === w;
          }), C = 0; C < A.length; C++) delete this.files[A[C].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(w) {
          var y, A = {};
          try {
            if ((A = a.extend(w || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = A.type.toLowerCase(), A.compression = A.compression.toUpperCase(), A.type === "binarystring" && (A.type = "string"), !A.type) throw new Error("No output type specified.");
            a.checkSupport(A.type), A.platform !== "darwin" && A.platform !== "freebsd" && A.platform !== "linux" && A.platform !== "sunos" || (A.platform = "UNIX"), A.platform === "win32" && (A.platform = "DOS");
            var C = A.comment || this.comment || "";
            y = f.generateWorker(this, A, C);
          } catch (E) {
            (y = new c("error")).error(E);
          }
          return new l(y, A.type || "string", A.mimeType);
        }, generateAsync: function(w, y) {
          return this.generateInternalStream(w).accumulate(y);
        }, generateNodeStream: function(w, y) {
          return (w = w || {}).type || (w.type = "nodebuffer"), this.generateInternalStream(w).toNodejsStream(y);
        } };
        n.exports = z;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, n, i) {
        n.exports = t("stream");
      }, { stream: void 0 }], 17: [function(t, n, i) {
        var o = t("./DataReader");
        function s(a) {
          o.call(this, a);
          for (var c = 0; c < this.data.length; c++) a[c] = 255 & a[c];
        }
        t("../utils").inherits(s, o), s.prototype.byteAt = function(a) {
          return this.data[this.zero + a];
        }, s.prototype.lastIndexOfSignature = function(a) {
          for (var c = a.charCodeAt(0), l = a.charCodeAt(1), u = a.charCodeAt(2), d = a.charCodeAt(3), _ = this.length - 4; 0 <= _; --_) if (this.data[_] === c && this.data[_ + 1] === l && this.data[_ + 2] === u && this.data[_ + 3] === d) return _ - this.zero;
          return -1;
        }, s.prototype.readAndCheckSignature = function(a) {
          var c = a.charCodeAt(0), l = a.charCodeAt(1), u = a.charCodeAt(2), d = a.charCodeAt(3), _ = this.readData(4);
          return c === _[0] && l === _[1] && u === _[2] && d === _[3];
        }, s.prototype.readData = function(a) {
          if (this.checkOffset(a), a === 0) return [];
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, n.exports = s;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, n, i) {
        var o = t("../utils");
        function s(a) {
          this.data = a, this.length = a.length, this.index = 0, this.zero = 0;
        }
        s.prototype = { checkOffset: function(a) {
          this.checkIndex(this.index + a);
        }, checkIndex: function(a) {
          if (this.length < this.zero + a || a < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?");
        }, setIndex: function(a) {
          this.checkIndex(a), this.index = a;
        }, skip: function(a) {
          this.setIndex(this.index + a);
        }, byteAt: function() {
        }, readInt: function(a) {
          var c, l = 0;
          for (this.checkOffset(a), c = this.index + a - 1; c >= this.index; c--) l = (l << 8) + this.byteAt(c);
          return this.index += a, l;
        }, readString: function(a) {
          return o.transformTo("string", this.readData(a));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var a = this.readInt(4);
          return new Date(Date.UTC(1980 + (a >> 25 & 127), (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1));
        } }, n.exports = s;
      }, { "../utils": 32 }], 19: [function(t, n, i) {
        var o = t("./Uint8ArrayReader");
        function s(a) {
          o.call(this, a);
        }
        t("../utils").inherits(s, o), s.prototype.readData = function(a) {
          this.checkOffset(a);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, n.exports = s;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, n, i) {
        var o = t("./DataReader");
        function s(a) {
          o.call(this, a);
        }
        t("../utils").inherits(s, o), s.prototype.byteAt = function(a) {
          return this.data.charCodeAt(this.zero + a);
        }, s.prototype.lastIndexOfSignature = function(a) {
          return this.data.lastIndexOf(a) - this.zero;
        }, s.prototype.readAndCheckSignature = function(a) {
          return a === this.readData(4);
        }, s.prototype.readData = function(a) {
          this.checkOffset(a);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, n.exports = s;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, n, i) {
        var o = t("./ArrayReader");
        function s(a) {
          o.call(this, a);
        }
        t("../utils").inherits(s, o), s.prototype.readData = function(a) {
          if (this.checkOffset(a), a === 0) return new Uint8Array(0);
          var c = this.data.subarray(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, n.exports = s;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, n, i) {
        var o = t("../utils"), s = t("../support"), a = t("./ArrayReader"), c = t("./StringReader"), l = t("./NodeBufferReader"), u = t("./Uint8ArrayReader");
        n.exports = function(d) {
          var _ = o.getTypeOf(d);
          return o.checkSupport(_), _ !== "string" || s.uint8array ? _ === "nodebuffer" ? new l(d) : s.uint8array ? new u(o.transformTo("uint8array", d)) : new a(o.transformTo("array", d)) : new c(d);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, n, i) {
        i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(t, n, i) {
        var o = t("./GenericWorker"), s = t("../utils");
        function a(c) {
          o.call(this, "ConvertWorker to " + c), this.destType = c;
        }
        s.inherits(a, o), a.prototype.processChunk = function(c) {
          this.push({ data: s.transformTo(this.destType, c.data), meta: c.meta });
        }, n.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, n, i) {
        var o = t("./GenericWorker"), s = t("../crc32");
        function a() {
          o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        t("../utils").inherits(a, o), a.prototype.processChunk = function(c) {
          this.streamInfo.crc32 = s(c.data, this.streamInfo.crc32 || 0), this.push(c);
        }, n.exports = a;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, n, i) {
        var o = t("../utils"), s = t("./GenericWorker");
        function a(c) {
          s.call(this, "DataLengthProbe for " + c), this.propName = c, this.withStreamInfo(c, 0);
        }
        o.inherits(a, s), a.prototype.processChunk = function(c) {
          if (c) {
            var l = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = l + c.data.length;
          }
          s.prototype.processChunk.call(this, c);
        }, n.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, n, i) {
        var o = t("../utils"), s = t("./GenericWorker");
        function a(c) {
          s.call(this, "DataWorker");
          var l = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, c.then(function(u) {
            l.dataIsReady = !0, l.data = u, l.max = u && u.length || 0, l.type = o.getTypeOf(u), l.isPaused || l._tickAndRepeat();
          }, function(u) {
            l.error(u);
          });
        }
        o.inherits(a, s), a.prototype.cleanUp = function() {
          s.prototype.cleanUp.call(this), this.data = null;
        }, a.prototype.resume = function() {
          return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0);
        }, a.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, a.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return !1;
          var c = null, l = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              c = this.data.substring(this.index, l);
              break;
            case "uint8array":
              c = this.data.subarray(this.index, l);
              break;
            case "array":
            case "nodebuffer":
              c = this.data.slice(this.index, l);
          }
          return this.index = l, this.push({ data: c, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, n.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, n, i) {
        function o(s) {
          this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        o.prototype = { push: function(s) {
          this.emit("data", s);
        }, end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (s) {
            this.emit("error", s);
          }
          return !0;
        }, error: function(s) {
          return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
        }, on: function(s, a) {
          return this._listeners[s].push(a), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(s, a) {
          if (this._listeners[s]) for (var c = 0; c < this._listeners[s].length; c++) this._listeners[s][c].call(this, a);
        }, pipe: function(s) {
          return s.registerPrevious(this);
        }, registerPrevious: function(s) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
          var a = this;
          return s.on("data", function(c) {
            a.processChunk(c);
          }), s.on("end", function() {
            a.end();
          }), s.on("error", function(c) {
            a.error(c);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var s = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
        }, flush: function() {
        }, processChunk: function(s) {
          this.push(s);
        }, withStreamInfo: function(s, a) {
          return this.extraStreamInfo[s] = a, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var s = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + s : s;
        } }, n.exports = o;
      }, {}], 29: [function(t, n, i) {
        var o = t("../utils"), s = t("./ConvertWorker"), a = t("./GenericWorker"), c = t("../base64"), l = t("../support"), u = t("../external"), d = null;
        if (l.nodestream) try {
          d = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function _(b, m) {
          return new u.Promise(function(k, h) {
            var v = [], x = b._internalType, z = b._outputType, w = b._mimeType;
            b.on("data", function(y, A) {
              v.push(y), m && m(A);
            }).on("error", function(y) {
              v = [], h(y);
            }).on("end", function() {
              try {
                var y = (function(A, C, E) {
                  switch (A) {
                    case "blob":
                      return o.newBlob(o.transformTo("arraybuffer", C), E);
                    case "base64":
                      return c.encode(C);
                    default:
                      return o.transformTo(A, C);
                  }
                })(z, (function(A, C) {
                  var E, I = 0, F = null, S = 0;
                  for (E = 0; E < C.length; E++) S += C[E].length;
                  switch (A) {
                    case "string":
                      return C.join("");
                    case "array":
                      return Array.prototype.concat.apply([], C);
                    case "uint8array":
                      for (F = new Uint8Array(S), E = 0; E < C.length; E++) F.set(C[E], I), I += C[E].length;
                      return F;
                    case "nodebuffer":
                      return Buffer.concat(C);
                    default:
                      throw new Error("concat : unsupported type '" + A + "'");
                  }
                })(x, v), w);
                k(y);
              } catch (A) {
                h(A);
              }
              v = [];
            }).resume();
          });
        }
        function f(b, m, k) {
          var h = m;
          switch (m) {
            case "blob":
            case "arraybuffer":
              h = "uint8array";
              break;
            case "base64":
              h = "string";
          }
          try {
            this._internalType = h, this._outputType = m, this._mimeType = k, o.checkSupport(h), this._worker = b.pipe(new s(h)), b.lock();
          } catch (v) {
            this._worker = new a("error"), this._worker.error(v);
          }
        }
        f.prototype = { accumulate: function(b) {
          return _(this, b);
        }, on: function(b, m) {
          var k = this;
          return b === "data" ? this._worker.on(b, function(h) {
            m.call(k, h.data, h.meta);
          }) : this._worker.on(b, function() {
            o.delay(m, arguments, k);
          }), this;
        }, resume: function() {
          return o.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(b) {
          if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new d(this, { objectMode: this._outputType !== "nodebuffer" }, b);
        } }, n.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, n, i) {
        if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") i.blob = !1;
        else {
          var o = new ArrayBuffer(0);
          try {
            i.blob = new Blob([o], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              s.append(o), i.blob = s.getBlob("application/zip").size === 0;
            } catch {
              i.blob = !1;
            }
          }
        }
        try {
          i.nodestream = !!t("readable-stream").Readable;
        } catch {
          i.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(t, n, i) {
        for (var o = t("./utils"), s = t("./support"), a = t("./nodejsUtils"), c = t("./stream/GenericWorker"), l = new Array(256), u = 0; u < 256; u++) l[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
        l[254] = l[254] = 1;
        function d() {
          c.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function _() {
          c.call(this, "utf-8 encode");
        }
        i.utf8encode = function(f) {
          return s.nodebuffer ? a.newBufferFrom(f, "utf-8") : (function(b) {
            var m, k, h, v, x, z = b.length, w = 0;
            for (v = 0; v < z; v++) (64512 & (k = b.charCodeAt(v))) == 55296 && v + 1 < z && (64512 & (h = b.charCodeAt(v + 1))) == 56320 && (k = 65536 + (k - 55296 << 10) + (h - 56320), v++), w += k < 128 ? 1 : k < 2048 ? 2 : k < 65536 ? 3 : 4;
            for (m = s.uint8array ? new Uint8Array(w) : new Array(w), v = x = 0; x < w; v++) (64512 & (k = b.charCodeAt(v))) == 55296 && v + 1 < z && (64512 & (h = b.charCodeAt(v + 1))) == 56320 && (k = 65536 + (k - 55296 << 10) + (h - 56320), v++), k < 128 ? m[x++] = k : (k < 2048 ? m[x++] = 192 | k >>> 6 : (k < 65536 ? m[x++] = 224 | k >>> 12 : (m[x++] = 240 | k >>> 18, m[x++] = 128 | k >>> 12 & 63), m[x++] = 128 | k >>> 6 & 63), m[x++] = 128 | 63 & k);
            return m;
          })(f);
        }, i.utf8decode = function(f) {
          return s.nodebuffer ? o.transformTo("nodebuffer", f).toString("utf-8") : (function(b) {
            var m, k, h, v, x = b.length, z = new Array(2 * x);
            for (m = k = 0; m < x; ) if ((h = b[m++]) < 128) z[k++] = h;
            else if (4 < (v = l[h])) z[k++] = 65533, m += v - 1;
            else {
              for (h &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && m < x; ) h = h << 6 | 63 & b[m++], v--;
              1 < v ? z[k++] = 65533 : h < 65536 ? z[k++] = h : (h -= 65536, z[k++] = 55296 | h >> 10 & 1023, z[k++] = 56320 | 1023 & h);
            }
            return z.length !== k && (z.subarray ? z = z.subarray(0, k) : z.length = k), o.applyFromCharCode(z);
          })(f = o.transformTo(s.uint8array ? "uint8array" : "array", f));
        }, o.inherits(d, c), d.prototype.processChunk = function(f) {
          var b = o.transformTo(s.uint8array ? "uint8array" : "array", f.data);
          if (this.leftOver && this.leftOver.length) {
            if (s.uint8array) {
              var m = b;
              (b = new Uint8Array(m.length + this.leftOver.length)).set(this.leftOver, 0), b.set(m, this.leftOver.length);
            } else b = this.leftOver.concat(b);
            this.leftOver = null;
          }
          var k = (function(v, x) {
            var z;
            for ((x = x || v.length) > v.length && (x = v.length), z = x - 1; 0 <= z && (192 & v[z]) == 128; ) z--;
            return z < 0 || z === 0 ? x : z + l[v[z]] > x ? z : x;
          })(b), h = b;
          k !== b.length && (s.uint8array ? (h = b.subarray(0, k), this.leftOver = b.subarray(k, b.length)) : (h = b.slice(0, k), this.leftOver = b.slice(k, b.length))), this.push({ data: i.utf8decode(h), meta: f.meta });
        }, d.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, i.Utf8DecodeWorker = d, o.inherits(_, c), _.prototype.processChunk = function(f) {
          this.push({ data: i.utf8encode(f.data), meta: f.meta });
        }, i.Utf8EncodeWorker = _;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, n, i) {
        var o = t("./support"), s = t("./base64"), a = t("./nodejsUtils"), c = t("./external");
        function l(m) {
          return m;
        }
        function u(m, k) {
          for (var h = 0; h < m.length; ++h) k[h] = 255 & m.charCodeAt(h);
          return k;
        }
        t("setimmediate"), i.newBlob = function(m, k) {
          i.checkSupport("blob");
          try {
            return new Blob([m], { type: k });
          } catch {
            try {
              var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return h.append(m), h.getBlob(k);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var d = { stringifyByChunk: function(m, k, h) {
          var v = [], x = 0, z = m.length;
          if (z <= h) return String.fromCharCode.apply(null, m);
          for (; x < z; ) k === "array" || k === "nodebuffer" ? v.push(String.fromCharCode.apply(null, m.slice(x, Math.min(x + h, z)))) : v.push(String.fromCharCode.apply(null, m.subarray(x, Math.min(x + h, z)))), x += h;
          return v.join("");
        }, stringifyByChar: function(m) {
          for (var k = "", h = 0; h < m.length; h++) k += String.fromCharCode(m[h]);
          return k;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        })() } };
        function _(m) {
          var k = 65536, h = i.getTypeOf(m), v = !0;
          if (h === "uint8array" ? v = d.applyCanBeUsed.uint8array : h === "nodebuffer" && (v = d.applyCanBeUsed.nodebuffer), v) for (; 1 < k; ) try {
            return d.stringifyByChunk(m, h, k);
          } catch {
            k = Math.floor(k / 2);
          }
          return d.stringifyByChar(m);
        }
        function f(m, k) {
          for (var h = 0; h < m.length; h++) k[h] = m[h];
          return k;
        }
        i.applyFromCharCode = _;
        var b = {};
        b.string = { string: l, array: function(m) {
          return u(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return b.string.uint8array(m).buffer;
        }, uint8array: function(m) {
          return u(m, new Uint8Array(m.length));
        }, nodebuffer: function(m) {
          return u(m, a.allocBuffer(m.length));
        } }, b.array = { string: _, array: l, arraybuffer: function(m) {
          return new Uint8Array(m).buffer;
        }, uint8array: function(m) {
          return new Uint8Array(m);
        }, nodebuffer: function(m) {
          return a.newBufferFrom(m);
        } }, b.arraybuffer = { string: function(m) {
          return _(new Uint8Array(m));
        }, array: function(m) {
          return f(new Uint8Array(m), new Array(m.byteLength));
        }, arraybuffer: l, uint8array: function(m) {
          return new Uint8Array(m);
        }, nodebuffer: function(m) {
          return a.newBufferFrom(new Uint8Array(m));
        } }, b.uint8array = { string: _, array: function(m) {
          return f(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return m.buffer;
        }, uint8array: l, nodebuffer: function(m) {
          return a.newBufferFrom(m);
        } }, b.nodebuffer = { string: _, array: function(m) {
          return f(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return b.nodebuffer.uint8array(m).buffer;
        }, uint8array: function(m) {
          return f(m, new Uint8Array(m.length));
        }, nodebuffer: l }, i.transformTo = function(m, k) {
          if (k = k || "", !m) return k;
          i.checkSupport(m);
          var h = i.getTypeOf(k);
          return b[h][m](k);
        }, i.resolve = function(m) {
          for (var k = m.split("/"), h = [], v = 0; v < k.length; v++) {
            var x = k[v];
            x === "." || x === "" && v !== 0 && v !== k.length - 1 || (x === ".." ? h.pop() : h.push(x));
          }
          return h.join("/");
        }, i.getTypeOf = function(m) {
          return typeof m == "string" ? "string" : Object.prototype.toString.call(m) === "[object Array]" ? "array" : o.nodebuffer && a.isBuffer(m) ? "nodebuffer" : o.uint8array && m instanceof Uint8Array ? "uint8array" : o.arraybuffer && m instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, i.checkSupport = function(m) {
          if (!o[m.toLowerCase()]) throw new Error(m + " is not supported by this platform");
        }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(m) {
          var k, h, v = "";
          for (h = 0; h < (m || "").length; h++) v += "\\x" + ((k = m.charCodeAt(h)) < 16 ? "0" : "") + k.toString(16).toUpperCase();
          return v;
        }, i.delay = function(m, k, h) {
          setImmediate(function() {
            m.apply(h || null, k || []);
          });
        }, i.inherits = function(m, k) {
          function h() {
          }
          h.prototype = k.prototype, m.prototype = new h();
        }, i.extend = function() {
          var m, k, h = {};
          for (m = 0; m < arguments.length; m++) for (k in arguments[m]) Object.prototype.hasOwnProperty.call(arguments[m], k) && h[k] === void 0 && (h[k] = arguments[m][k]);
          return h;
        }, i.prepareContent = function(m, k, h, v, x) {
          return c.Promise.resolve(k).then(function(z) {
            return o.blob && (z instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(z)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(w, y) {
              var A = new FileReader();
              A.onload = function(C) {
                w(C.target.result);
              }, A.onerror = function(C) {
                y(C.target.error);
              }, A.readAsArrayBuffer(z);
            }) : z;
          }).then(function(z) {
            var w = i.getTypeOf(z);
            return w ? (w === "arraybuffer" ? z = i.transformTo("uint8array", z) : w === "string" && (x ? z = s.decode(z) : h && v !== !0 && (z = (function(y) {
              return u(y, o.uint8array ? new Uint8Array(y.length) : new Array(y.length));
            })(z))), z) : c.Promise.reject(new Error("Can't read the data of '" + m + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, n, i) {
        var o = t("./reader/readerFor"), s = t("./utils"), a = t("./signature"), c = t("./zipEntry"), l = t("./support");
        function u(d) {
          this.files = [], this.loadOptions = d;
        }
        u.prototype = { checkSignature: function(d) {
          if (!this.reader.readAndCheckSignature(d)) {
            this.reader.index -= 4;
            var _ = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(_) + ", expected " + s.pretty(d) + ")");
          }
        }, isSignature: function(d, _) {
          var f = this.reader.index;
          this.reader.setIndex(d);
          var b = this.reader.readString(4) === _;
          return this.reader.setIndex(f), b;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var d = this.reader.readData(this.zipCommentLength), _ = l.uint8array ? "uint8array" : "array", f = s.transformTo(_, d);
          this.zipComment = this.loadOptions.decodeFileName(f);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var d, _, f, b = this.zip64EndOfCentralSize - 44; 0 < b; ) d = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[d] = { id: d, length: _, value: f };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var d, _;
          for (d = 0; d < this.files.length; d++) _ = this.files[d], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
        }, readCentralDir: function() {
          var d;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER); ) (d = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(d);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var d = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
          if (d < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(d);
          var _ = d;
          if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (d = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(d), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var f = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
          var b = _ - f;
          if (0 < b) this.isSignature(_, a.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
          else if (b < 0) throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
        }, prepareReader: function(d) {
          this.reader = o(d);
        }, load: function(d) {
          this.prepareReader(d), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, n.exports = u;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, n, i) {
        var o = t("./reader/readerFor"), s = t("./utils"), a = t("./compressedObject"), c = t("./crc32"), l = t("./utf8"), u = t("./compressions"), d = t("./support");
        function _(f, b) {
          this.options = f, this.loadOptions = b;
        }
        _.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(f) {
          var b, m;
          if (f.skip(22), this.fileNameLength = f.readInt(2), m = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(m), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((b = (function(k) {
            for (var h in u) if (Object.prototype.hasOwnProperty.call(u, h) && u[h].magic === k) return u[h];
            return null;
          })(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, b, f.readData(this.compressedSize));
        }, readCentralPart: function(f) {
          this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
          var b = f.readInt(2);
          if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          f.skip(b), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var f = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var f = o(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
          }
        }, readExtraFields: function(f) {
          var b, m, k, h = f.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); f.index + 4 < h; ) b = f.readInt(2), m = f.readInt(2), k = f.readData(m), this.extraFields[b] = { id: b, length: m, value: k };
          f.setIndex(h);
        }, handleUTF8: function() {
          var f = d.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
          else {
            var b = this.findExtraFieldUnicodePath();
            if (b !== null) this.fileNameStr = b;
            else {
              var m = s.transformTo(f, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(m);
            }
            var k = this.findExtraFieldUnicodeComment();
            if (k !== null) this.fileCommentStr = k;
            else {
              var h = s.transformTo(f, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(h);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var f = this.extraFields[28789];
          if (f) {
            var b = o(f.value);
            return b.readInt(1) !== 1 || c(this.fileName) !== b.readInt(4) ? null : l.utf8decode(b.readData(f.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var f = this.extraFields[25461];
          if (f) {
            var b = o(f.value);
            return b.readInt(1) !== 1 || c(this.fileComment) !== b.readInt(4) ? null : l.utf8decode(b.readData(f.length - 5));
          }
          return null;
        } }, n.exports = _;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, n, i) {
        function o(b, m, k) {
          this.name = b, this.dir = k.dir, this.date = k.date, this.comment = k.comment, this.unixPermissions = k.unixPermissions, this.dosPermissions = k.dosPermissions, this._data = m, this._dataBinary = k.binary, this.options = { compression: k.compression, compressionOptions: k.compressionOptions };
        }
        var s = t("./stream/StreamHelper"), a = t("./stream/DataWorker"), c = t("./utf8"), l = t("./compressedObject"), u = t("./stream/GenericWorker");
        o.prototype = { internalStream: function(b) {
          var m = null, k = "string";
          try {
            if (!b) throw new Error("No output type specified.");
            var h = (k = b.toLowerCase()) === "string" || k === "text";
            k !== "binarystring" && k !== "text" || (k = "string"), m = this._decompressWorker();
            var v = !this._dataBinary;
            v && !h && (m = m.pipe(new c.Utf8EncodeWorker())), !v && h && (m = m.pipe(new c.Utf8DecodeWorker()));
          } catch (x) {
            (m = new u("error")).error(x);
          }
          return new s(m, k, "");
        }, async: function(b, m) {
          return this.internalStream(b).accumulate(m);
        }, nodeStream: function(b, m) {
          return this.internalStream(b || "nodebuffer").toNodejsStream(m);
        }, _compressWorker: function(b, m) {
          if (this._data instanceof l && this._data.compression.magic === b.magic) return this._data.getCompressedWorker();
          var k = this._decompressWorker();
          return this._dataBinary || (k = k.pipe(new c.Utf8EncodeWorker())), l.createWorkerFrom(k, b, m);
        }, _decompressWorker: function() {
          return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof u ? this._data : new a(this._data);
        } };
        for (var d = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < d.length; f++) o.prototype[d[f]] = _;
        n.exports = o;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, n, i) {
        (function(o) {
          var s, a, c = o.MutationObserver || o.WebKitMutationObserver;
          if (c) {
            var l = 0, u = new c(b), d = o.document.createTextNode("");
            u.observe(d, { characterData: !0 }), s = function() {
              d.data = l = ++l % 2;
            };
          } else if (o.setImmediate || o.MessageChannel === void 0) s = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
            var m = o.document.createElement("script");
            m.onreadystatechange = function() {
              b(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
            }, o.document.documentElement.appendChild(m);
          } : function() {
            setTimeout(b, 0);
          };
          else {
            var _ = new o.MessageChannel();
            _.port1.onmessage = b, s = function() {
              _.port2.postMessage(0);
            };
          }
          var f = [];
          function b() {
            var m, k;
            a = !0;
            for (var h = f.length; h; ) {
              for (k = f, f = [], m = -1; ++m < h; ) k[m]();
              h = f.length;
            }
            a = !1;
          }
          n.exports = function(m) {
            f.push(m) !== 1 || a || s();
          };
        }).call(this, typeof qt < "u" ? qt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(t, n, i) {
        var o = t("immediate");
        function s() {
        }
        var a = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
        function d(h) {
          if (typeof h != "function") throw new TypeError("resolver must be a function");
          this.state = u, this.queue = [], this.outcome = void 0, h !== s && m(this, h);
        }
        function _(h, v, x) {
          this.promise = h, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof x == "function" && (this.onRejected = x, this.callRejected = this.otherCallRejected);
        }
        function f(h, v, x) {
          o(function() {
            var z;
            try {
              z = v(x);
            } catch (w) {
              return a.reject(h, w);
            }
            z === h ? a.reject(h, new TypeError("Cannot resolve promise with itself")) : a.resolve(h, z);
          });
        }
        function b(h) {
          var v = h && h.then;
          if (h && (typeof h == "object" || typeof h == "function") && typeof v == "function") return function() {
            v.apply(h, arguments);
          };
        }
        function m(h, v) {
          var x = !1;
          function z(A) {
            x || (x = !0, a.reject(h, A));
          }
          function w(A) {
            x || (x = !0, a.resolve(h, A));
          }
          var y = k(function() {
            v(w, z);
          });
          y.status === "error" && z(y.value);
        }
        function k(h, v) {
          var x = {};
          try {
            x.value = h(v), x.status = "success";
          } catch (z) {
            x.status = "error", x.value = z;
          }
          return x;
        }
        (n.exports = d).prototype.finally = function(h) {
          if (typeof h != "function") return this;
          var v = this.constructor;
          return this.then(function(x) {
            return v.resolve(h()).then(function() {
              return x;
            });
          }, function(x) {
            return v.resolve(h()).then(function() {
              throw x;
            });
          });
        }, d.prototype.catch = function(h) {
          return this.then(null, h);
        }, d.prototype.then = function(h, v) {
          if (typeof h != "function" && this.state === l || typeof v != "function" && this.state === c) return this;
          var x = new this.constructor(s);
          return this.state !== u ? f(x, this.state === l ? h : v, this.outcome) : this.queue.push(new _(x, h, v)), x;
        }, _.prototype.callFulfilled = function(h) {
          a.resolve(this.promise, h);
        }, _.prototype.otherCallFulfilled = function(h) {
          f(this.promise, this.onFulfilled, h);
        }, _.prototype.callRejected = function(h) {
          a.reject(this.promise, h);
        }, _.prototype.otherCallRejected = function(h) {
          f(this.promise, this.onRejected, h);
        }, a.resolve = function(h, v) {
          var x = k(b, v);
          if (x.status === "error") return a.reject(h, x.value);
          var z = x.value;
          if (z) m(h, z);
          else {
            h.state = l, h.outcome = v;
            for (var w = -1, y = h.queue.length; ++w < y; ) h.queue[w].callFulfilled(v);
          }
          return h;
        }, a.reject = function(h, v) {
          h.state = c, h.outcome = v;
          for (var x = -1, z = h.queue.length; ++x < z; ) h.queue[x].callRejected(v);
          return h;
        }, d.resolve = function(h) {
          return h instanceof this ? h : a.resolve(new this(s), h);
        }, d.reject = function(h) {
          var v = new this(s);
          return a.reject(v, h);
        }, d.all = function(h) {
          var v = this;
          if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = h.length, z = !1;
          if (!x) return this.resolve([]);
          for (var w = new Array(x), y = 0, A = -1, C = new this(s); ++A < x; ) E(h[A], A);
          return C;
          function E(I, F) {
            v.resolve(I).then(function(S) {
              w[F] = S, ++y !== x || z || (z = !0, a.resolve(C, w));
            }, function(S) {
              z || (z = !0, a.reject(C, S));
            });
          }
        }, d.race = function(h) {
          var v = this;
          if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = h.length, z = !1;
          if (!x) return this.resolve([]);
          for (var w = -1, y = new this(s); ++w < x; ) A = h[w], v.resolve(A).then(function(C) {
            z || (z = !0, a.resolve(y, C));
          }, function(C) {
            z || (z = !0, a.reject(y, C));
          });
          var A;
          return y;
        };
      }, { immediate: 36 }], 38: [function(t, n, i) {
        var o = {};
        (0, t("./lib/utils/common").assign)(o, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), n.exports = o;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, n, i) {
        var o = t("./zlib/deflate"), s = t("./utils/common"), a = t("./utils/strings"), c = t("./zlib/messages"), l = t("./zlib/zstream"), u = Object.prototype.toString, d = 0, _ = -1, f = 0, b = 8;
        function m(h) {
          if (!(this instanceof m)) return new m(h);
          this.options = s.assign({ level: _, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, h || {});
          var v = this.options;
          v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
          var x = o.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
          if (x !== d) throw new Error(c[x]);
          if (v.header && o.deflateSetHeader(this.strm, v.header), v.dictionary) {
            var z;
            if (z = typeof v.dictionary == "string" ? a.string2buf(v.dictionary) : u.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (x = o.deflateSetDictionary(this.strm, z)) !== d) throw new Error(c[x]);
            this._dict_set = !0;
          }
        }
        function k(h, v) {
          var x = new m(v);
          if (x.push(h, !0), x.err) throw x.msg || c[x.err];
          return x.result;
        }
        m.prototype.push = function(h, v) {
          var x, z, w = this.strm, y = this.options.chunkSize;
          if (this.ended) return !1;
          z = v === ~~v ? v : v === !0 ? 4 : 0, typeof h == "string" ? w.input = a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? w.input = new Uint8Array(h) : w.input = h, w.next_in = 0, w.avail_in = w.input.length;
          do {
            if (w.avail_out === 0 && (w.output = new s.Buf8(y), w.next_out = 0, w.avail_out = y), (x = o.deflate(w, z)) !== 1 && x !== d) return this.onEnd(x), !(this.ended = !0);
            w.avail_out !== 0 && (w.avail_in !== 0 || z !== 4 && z !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(w.output, w.next_out))) : this.onData(s.shrinkBuf(w.output, w.next_out)));
          } while ((0 < w.avail_in || w.avail_out === 0) && x !== 1);
          return z === 4 ? (x = o.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === d) : z !== 2 || (this.onEnd(d), !(w.avail_out = 0));
        }, m.prototype.onData = function(h) {
          this.chunks.push(h);
        }, m.prototype.onEnd = function(h) {
          h === d && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
        }, i.Deflate = m, i.deflate = k, i.deflateRaw = function(h, v) {
          return (v = v || {}).raw = !0, k(h, v);
        }, i.gzip = function(h, v) {
          return (v = v || {}).gzip = !0, k(h, v);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, n, i) {
        var o = t("./zlib/inflate"), s = t("./utils/common"), a = t("./utils/strings"), c = t("./zlib/constants"), l = t("./zlib/messages"), u = t("./zlib/zstream"), d = t("./zlib/gzheader"), _ = Object.prototype.toString;
        function f(m) {
          if (!(this instanceof f)) return new f(m);
          this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, m || {});
          var k = this.options;
          k.raw && 0 <= k.windowBits && k.windowBits < 16 && (k.windowBits = -k.windowBits, k.windowBits === 0 && (k.windowBits = -15)), !(0 <= k.windowBits && k.windowBits < 16) || m && m.windowBits || (k.windowBits += 32), 15 < k.windowBits && k.windowBits < 48 && (15 & k.windowBits) == 0 && (k.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
          var h = o.inflateInit2(this.strm, k.windowBits);
          if (h !== c.Z_OK) throw new Error(l[h]);
          this.header = new d(), o.inflateGetHeader(this.strm, this.header);
        }
        function b(m, k) {
          var h = new f(k);
          if (h.push(m, !0), h.err) throw h.msg || l[h.err];
          return h.result;
        }
        f.prototype.push = function(m, k) {
          var h, v, x, z, w, y, A = this.strm, C = this.options.chunkSize, E = this.options.dictionary, I = !1;
          if (this.ended) return !1;
          v = k === ~~k ? k : k === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof m == "string" ? A.input = a.binstring2buf(m) : _.call(m) === "[object ArrayBuffer]" ? A.input = new Uint8Array(m) : A.input = m, A.next_in = 0, A.avail_in = A.input.length;
          do {
            if (A.avail_out === 0 && (A.output = new s.Buf8(C), A.next_out = 0, A.avail_out = C), (h = o.inflate(A, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && E && (y = typeof E == "string" ? a.string2buf(E) : _.call(E) === "[object ArrayBuffer]" ? new Uint8Array(E) : E, h = o.inflateSetDictionary(this.strm, y)), h === c.Z_BUF_ERROR && I === !0 && (h = c.Z_OK, I = !1), h !== c.Z_STREAM_END && h !== c.Z_OK) return this.onEnd(h), !(this.ended = !0);
            A.next_out && (A.avail_out !== 0 && h !== c.Z_STREAM_END && (A.avail_in !== 0 || v !== c.Z_FINISH && v !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = a.utf8border(A.output, A.next_out), z = A.next_out - x, w = a.buf2string(A.output, x), A.next_out = z, A.avail_out = C - z, z && s.arraySet(A.output, A.output, x, z, 0), this.onData(w)) : this.onData(s.shrinkBuf(A.output, A.next_out)))), A.avail_in === 0 && A.avail_out === 0 && (I = !0);
          } while ((0 < A.avail_in || A.avail_out === 0) && h !== c.Z_STREAM_END);
          return h === c.Z_STREAM_END && (v = c.Z_FINISH), v === c.Z_FINISH ? (h = o.inflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === c.Z_OK) : v !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(A.avail_out = 0));
        }, f.prototype.onData = function(m) {
          this.chunks.push(m);
        }, f.prototype.onEnd = function(m) {
          m === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = m, this.msg = this.strm.msg;
        }, i.Inflate = f, i.inflate = b, i.inflateRaw = function(m, k) {
          return (k = k || {}).raw = !0, b(m, k);
        }, i.ungzip = b;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, n, i) {
        var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        i.assign = function(c) {
          for (var l = Array.prototype.slice.call(arguments, 1); l.length; ) {
            var u = l.shift();
            if (u) {
              if (typeof u != "object") throw new TypeError(u + "must be non-object");
              for (var d in u) u.hasOwnProperty(d) && (c[d] = u[d]);
            }
          }
          return c;
        }, i.shrinkBuf = function(c, l) {
          return c.length === l ? c : c.subarray ? c.subarray(0, l) : (c.length = l, c);
        };
        var s = { arraySet: function(c, l, u, d, _) {
          if (l.subarray && c.subarray) c.set(l.subarray(u, u + d), _);
          else for (var f = 0; f < d; f++) c[_ + f] = l[u + f];
        }, flattenChunks: function(c) {
          var l, u, d, _, f, b;
          for (l = d = 0, u = c.length; l < u; l++) d += c[l].length;
          for (b = new Uint8Array(d), l = _ = 0, u = c.length; l < u; l++) f = c[l], b.set(f, _), _ += f.length;
          return b;
        } }, a = { arraySet: function(c, l, u, d, _) {
          for (var f = 0; f < d; f++) c[_ + f] = l[u + f];
        }, flattenChunks: function(c) {
          return [].concat.apply([], c);
        } };
        i.setTyped = function(c) {
          c ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, s)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, a));
        }, i.setTyped(o);
      }, {}], 42: [function(t, n, i) {
        var o = t("./common"), s = !0, a = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          s = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          a = !1;
        }
        for (var c = new o.Buf8(256), l = 0; l < 256; l++) c[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
        function u(d, _) {
          if (_ < 65537 && (d.subarray && a || !d.subarray && s)) return String.fromCharCode.apply(null, o.shrinkBuf(d, _));
          for (var f = "", b = 0; b < _; b++) f += String.fromCharCode(d[b]);
          return f;
        }
        c[254] = c[254] = 1, i.string2buf = function(d) {
          var _, f, b, m, k, h = d.length, v = 0;
          for (m = 0; m < h; m++) (64512 & (f = d.charCodeAt(m))) == 55296 && m + 1 < h && (64512 & (b = d.charCodeAt(m + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (b - 56320), m++), v += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (_ = new o.Buf8(v), m = k = 0; k < v; m++) (64512 & (f = d.charCodeAt(m))) == 55296 && m + 1 < h && (64512 & (b = d.charCodeAt(m + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (b - 56320), m++), f < 128 ? _[k++] = f : (f < 2048 ? _[k++] = 192 | f >>> 6 : (f < 65536 ? _[k++] = 224 | f >>> 12 : (_[k++] = 240 | f >>> 18, _[k++] = 128 | f >>> 12 & 63), _[k++] = 128 | f >>> 6 & 63), _[k++] = 128 | 63 & f);
          return _;
        }, i.buf2binstring = function(d) {
          return u(d, d.length);
        }, i.binstring2buf = function(d) {
          for (var _ = new o.Buf8(d.length), f = 0, b = _.length; f < b; f++) _[f] = d.charCodeAt(f);
          return _;
        }, i.buf2string = function(d, _) {
          var f, b, m, k, h = _ || d.length, v = new Array(2 * h);
          for (f = b = 0; f < h; ) if ((m = d[f++]) < 128) v[b++] = m;
          else if (4 < (k = c[m])) v[b++] = 65533, f += k - 1;
          else {
            for (m &= k === 2 ? 31 : k === 3 ? 15 : 7; 1 < k && f < h; ) m = m << 6 | 63 & d[f++], k--;
            1 < k ? v[b++] = 65533 : m < 65536 ? v[b++] = m : (m -= 65536, v[b++] = 55296 | m >> 10 & 1023, v[b++] = 56320 | 1023 & m);
          }
          return u(v, b);
        }, i.utf8border = function(d, _) {
          var f;
          for ((_ = _ || d.length) > d.length && (_ = d.length), f = _ - 1; 0 <= f && (192 & d[f]) == 128; ) f--;
          return f < 0 || f === 0 ? _ : f + c[d[f]] > _ ? f : _;
        };
      }, { "./common": 41 }], 43: [function(t, n, i) {
        n.exports = function(o, s, a, c) {
          for (var l = 65535 & o | 0, u = o >>> 16 & 65535 | 0, d = 0; a !== 0; ) {
            for (a -= d = 2e3 < a ? 2e3 : a; u = u + (l = l + s[c++] | 0) | 0, --d; ) ;
            l %= 65521, u %= 65521;
          }
          return l | u << 16 | 0;
        };
      }, {}], 44: [function(t, n, i) {
        n.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(t, n, i) {
        var o = (function() {
          for (var s, a = [], c = 0; c < 256; c++) {
            s = c;
            for (var l = 0; l < 8; l++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
            a[c] = s;
          }
          return a;
        })();
        n.exports = function(s, a, c, l) {
          var u = o, d = l + c;
          s ^= -1;
          for (var _ = l; _ < d; _++) s = s >>> 8 ^ u[255 & (s ^ a[_])];
          return -1 ^ s;
        };
      }, {}], 46: [function(t, n, i) {
        var o, s = t("../utils/common"), a = t("./trees"), c = t("./adler32"), l = t("./crc32"), u = t("./messages"), d = 0, _ = 4, f = 0, b = -2, m = -1, k = 4, h = 2, v = 8, x = 9, z = 286, w = 30, y = 19, A = 2 * z + 1, C = 15, E = 3, I = 258, F = I + E + 1, S = 42, N = 113, p = 1, P = 2, J = 3, V = 4;
        function ie(g, M) {
          return g.msg = u[M], M;
        }
        function L(g) {
          return (g << 1) - (4 < g ? 9 : 0);
        }
        function ee(g) {
          for (var M = g.length; 0 <= --M; ) g[M] = 0;
        }
        function B(g) {
          var M = g.state, D = M.pending;
          D > g.avail_out && (D = g.avail_out), D !== 0 && (s.arraySet(g.output, M.pending_buf, M.pending_out, D, g.next_out), g.next_out += D, M.pending_out += D, g.total_out += D, g.avail_out -= D, M.pending -= D, M.pending === 0 && (M.pending_out = 0));
        }
        function U(g, M) {
          a._tr_flush_block(g, 0 <= g.block_start ? g.block_start : -1, g.strstart - g.block_start, M), g.block_start = g.strstart, B(g.strm);
        }
        function re(g, M) {
          g.pending_buf[g.pending++] = M;
        }
        function K(g, M) {
          g.pending_buf[g.pending++] = M >>> 8 & 255, g.pending_buf[g.pending++] = 255 & M;
        }
        function X(g, M) {
          var D, O, T = g.max_chain_length, R = g.strstart, W = g.prev_length, H = g.nice_match, $ = g.strstart > g.w_size - F ? g.strstart - (g.w_size - F) : 0, G = g.window, Q = g.w_mask, q = g.prev, ne = g.strstart + I, de = G[R + W - 1], ue = G[R + W];
          g.prev_length >= g.good_match && (T >>= 2), H > g.lookahead && (H = g.lookahead);
          do
            if (G[(D = M) + W] === ue && G[D + W - 1] === de && G[D] === G[R] && G[++D] === G[R + 1]) {
              R += 2, D++;
              do
                ;
              while (G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && R < ne);
              if (O = I - (ne - R), R = ne - I, W < O) {
                if (g.match_start = M, H <= (W = O)) break;
                de = G[R + W - 1], ue = G[R + W];
              }
            }
          while ((M = q[M & Q]) > $ && --T != 0);
          return W <= g.lookahead ? W : g.lookahead;
        }
        function we(g) {
          var M, D, O, T, R, W, H, $, G, Q, q = g.w_size;
          do {
            if (T = g.window_size - g.lookahead - g.strstart, g.strstart >= q + (q - F)) {
              for (s.arraySet(g.window, g.window, q, q, 0), g.match_start -= q, g.strstart -= q, g.block_start -= q, M = D = g.hash_size; O = g.head[--M], g.head[M] = q <= O ? O - q : 0, --D; ) ;
              for (M = D = q; O = g.prev[--M], g.prev[M] = q <= O ? O - q : 0, --D; ) ;
              T += q;
            }
            if (g.strm.avail_in === 0) break;
            if (W = g.strm, H = g.window, $ = g.strstart + g.lookahead, G = T, Q = void 0, Q = W.avail_in, G < Q && (Q = G), D = Q === 0 ? 0 : (W.avail_in -= Q, s.arraySet(H, W.input, W.next_in, Q, $), W.state.wrap === 1 ? W.adler = c(W.adler, H, Q, $) : W.state.wrap === 2 && (W.adler = l(W.adler, H, Q, $)), W.next_in += Q, W.total_in += Q, Q), g.lookahead += D, g.lookahead + g.insert >= E) for (R = g.strstart - g.insert, g.ins_h = g.window[R], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[R + 1]) & g.hash_mask; g.insert && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[R + E - 1]) & g.hash_mask, g.prev[R & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = R, R++, g.insert--, !(g.lookahead + g.insert < E)); ) ;
          } while (g.lookahead < F && g.strm.avail_in !== 0);
        }
        function ze(g, M) {
          for (var D, O; ; ) {
            if (g.lookahead < F) {
              if (we(g), g.lookahead < F && M === d) return p;
              if (g.lookahead === 0) break;
            }
            if (D = 0, g.lookahead >= E && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + E - 1]) & g.hash_mask, D = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), D !== 0 && g.strstart - D <= g.w_size - F && (g.match_length = X(g, D)), g.match_length >= E) if (O = a._tr_tally(g, g.strstart - g.match_start, g.match_length - E), g.lookahead -= g.match_length, g.match_length <= g.max_lazy_match && g.lookahead >= E) {
              for (g.match_length--; g.strstart++, g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + E - 1]) & g.hash_mask, D = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart, --g.match_length != 0; ) ;
              g.strstart++;
            } else g.strstart += g.match_length, g.match_length = 0, g.ins_h = g.window[g.strstart], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + 1]) & g.hash_mask;
            else O = a._tr_tally(g, 0, g.window[g.strstart]), g.lookahead--, g.strstart++;
            if (O && (U(g, !1), g.strm.avail_out === 0)) return p;
          }
          return g.insert = g.strstart < E - 1 ? g.strstart : E - 1, M === _ ? (U(g, !0), g.strm.avail_out === 0 ? J : V) : g.last_lit && (U(g, !1), g.strm.avail_out === 0) ? p : P;
        }
        function ce(g, M) {
          for (var D, O, T; ; ) {
            if (g.lookahead < F) {
              if (we(g), g.lookahead < F && M === d) return p;
              if (g.lookahead === 0) break;
            }
            if (D = 0, g.lookahead >= E && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + E - 1]) & g.hash_mask, D = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), g.prev_length = g.match_length, g.prev_match = g.match_start, g.match_length = E - 1, D !== 0 && g.prev_length < g.max_lazy_match && g.strstart - D <= g.w_size - F && (g.match_length = X(g, D), g.match_length <= 5 && (g.strategy === 1 || g.match_length === E && 4096 < g.strstart - g.match_start) && (g.match_length = E - 1)), g.prev_length >= E && g.match_length <= g.prev_length) {
              for (T = g.strstart + g.lookahead - E, O = a._tr_tally(g, g.strstart - 1 - g.prev_match, g.prev_length - E), g.lookahead -= g.prev_length - 1, g.prev_length -= 2; ++g.strstart <= T && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + E - 1]) & g.hash_mask, D = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), --g.prev_length != 0; ) ;
              if (g.match_available = 0, g.match_length = E - 1, g.strstart++, O && (U(g, !1), g.strm.avail_out === 0)) return p;
            } else if (g.match_available) {
              if ((O = a._tr_tally(g, 0, g.window[g.strstart - 1])) && U(g, !1), g.strstart++, g.lookahead--, g.strm.avail_out === 0) return p;
            } else g.match_available = 1, g.strstart++, g.lookahead--;
          }
          return g.match_available && (O = a._tr_tally(g, 0, g.window[g.strstart - 1]), g.match_available = 0), g.insert = g.strstart < E - 1 ? g.strstart : E - 1, M === _ ? (U(g, !0), g.strm.avail_out === 0 ? J : V) : g.last_lit && (U(g, !1), g.strm.avail_out === 0) ? p : P;
        }
        function he(g, M, D, O, T) {
          this.good_length = g, this.max_lazy = M, this.nice_length = D, this.max_chain = O, this.func = T;
        }
        function Ee() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * A), this.dyn_dtree = new s.Buf16(2 * (2 * w + 1)), this.bl_tree = new s.Buf16(2 * (2 * y + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(C + 1), this.heap = new s.Buf16(2 * z + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * z + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function ye(g) {
          var M;
          return g && g.state ? (g.total_in = g.total_out = 0, g.data_type = h, (M = g.state).pending = 0, M.pending_out = 0, M.wrap < 0 && (M.wrap = -M.wrap), M.status = M.wrap ? S : N, g.adler = M.wrap === 2 ? 0 : 1, M.last_flush = d, a._tr_init(M), f) : ie(g, b);
        }
        function je(g) {
          var M = ye(g);
          return M === f && (function(D) {
            D.window_size = 2 * D.w_size, ee(D.head), D.max_lazy_match = o[D.level].max_lazy, D.good_match = o[D.level].good_length, D.nice_match = o[D.level].nice_length, D.max_chain_length = o[D.level].max_chain, D.strstart = 0, D.block_start = 0, D.lookahead = 0, D.insert = 0, D.match_length = D.prev_length = E - 1, D.match_available = 0, D.ins_h = 0;
          })(g.state), M;
        }
        function De(g, M, D, O, T, R) {
          if (!g) return b;
          var W = 1;
          if (M === m && (M = 6), O < 0 ? (W = 0, O = -O) : 15 < O && (W = 2, O -= 16), T < 1 || x < T || D !== v || O < 8 || 15 < O || M < 0 || 9 < M || R < 0 || k < R) return ie(g, b);
          O === 8 && (O = 9);
          var H = new Ee();
          return (g.state = H).strm = g, H.wrap = W, H.gzhead = null, H.w_bits = O, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = T + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + E - 1) / E), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << T + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = M, H.strategy = R, H.method = D, je(g);
        }
        o = [new he(0, 0, 0, 0, function(g, M) {
          var D = 65535;
          for (D > g.pending_buf_size - 5 && (D = g.pending_buf_size - 5); ; ) {
            if (g.lookahead <= 1) {
              if (we(g), g.lookahead === 0 && M === d) return p;
              if (g.lookahead === 0) break;
            }
            g.strstart += g.lookahead, g.lookahead = 0;
            var O = g.block_start + D;
            if ((g.strstart === 0 || g.strstart >= O) && (g.lookahead = g.strstart - O, g.strstart = O, U(g, !1), g.strm.avail_out === 0) || g.strstart - g.block_start >= g.w_size - F && (U(g, !1), g.strm.avail_out === 0)) return p;
          }
          return g.insert = 0, M === _ ? (U(g, !0), g.strm.avail_out === 0 ? J : V) : (g.strstart > g.block_start && (U(g, !1), g.strm.avail_out), p);
        }), new he(4, 4, 8, 4, ze), new he(4, 5, 16, 8, ze), new he(4, 6, 32, 32, ze), new he(4, 4, 16, 16, ce), new he(8, 16, 32, 32, ce), new he(8, 16, 128, 128, ce), new he(8, 32, 128, 256, ce), new he(32, 128, 258, 1024, ce), new he(32, 258, 258, 4096, ce)], i.deflateInit = function(g, M) {
          return De(g, M, v, 15, 8, 0);
        }, i.deflateInit2 = De, i.deflateReset = je, i.deflateResetKeep = ye, i.deflateSetHeader = function(g, M) {
          return g && g.state ? g.state.wrap !== 2 ? b : (g.state.gzhead = M, f) : b;
        }, i.deflate = function(g, M) {
          var D, O, T, R;
          if (!g || !g.state || 5 < M || M < 0) return g ? ie(g, b) : b;
          if (O = g.state, !g.output || !g.input && g.avail_in !== 0 || O.status === 666 && M !== _) return ie(g, g.avail_out === 0 ? -5 : b);
          if (O.strm = g, D = O.last_flush, O.last_flush = M, O.status === S) if (O.wrap === 2) g.adler = 0, re(O, 31), re(O, 139), re(O, 8), O.gzhead ? (re(O, (O.gzhead.text ? 1 : 0) + (O.gzhead.hcrc ? 2 : 0) + (O.gzhead.extra ? 4 : 0) + (O.gzhead.name ? 8 : 0) + (O.gzhead.comment ? 16 : 0)), re(O, 255 & O.gzhead.time), re(O, O.gzhead.time >> 8 & 255), re(O, O.gzhead.time >> 16 & 255), re(O, O.gzhead.time >> 24 & 255), re(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), re(O, 255 & O.gzhead.os), O.gzhead.extra && O.gzhead.extra.length && (re(O, 255 & O.gzhead.extra.length), re(O, O.gzhead.extra.length >> 8 & 255)), O.gzhead.hcrc && (g.adler = l(g.adler, O.pending_buf, O.pending, 0)), O.gzindex = 0, O.status = 69) : (re(O, 0), re(O, 0), re(O, 0), re(O, 0), re(O, 0), re(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), re(O, 3), O.status = N);
          else {
            var W = v + (O.w_bits - 8 << 4) << 8;
            W |= (2 <= O.strategy || O.level < 2 ? 0 : O.level < 6 ? 1 : O.level === 6 ? 2 : 3) << 6, O.strstart !== 0 && (W |= 32), W += 31 - W % 31, O.status = N, K(O, W), O.strstart !== 0 && (K(O, g.adler >>> 16), K(O, 65535 & g.adler)), g.adler = 1;
          }
          if (O.status === 69) if (O.gzhead.extra) {
            for (T = O.pending; O.gzindex < (65535 & O.gzhead.extra.length) && (O.pending !== O.pending_buf_size || (O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), B(g), T = O.pending, O.pending !== O.pending_buf_size)); ) re(O, 255 & O.gzhead.extra[O.gzindex]), O.gzindex++;
            O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), O.gzindex === O.gzhead.extra.length && (O.gzindex = 0, O.status = 73);
          } else O.status = 73;
          if (O.status === 73) if (O.gzhead.name) {
            T = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), B(g), T = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.name.length ? 255 & O.gzhead.name.charCodeAt(O.gzindex++) : 0, re(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), R === 0 && (O.gzindex = 0, O.status = 91);
          } else O.status = 91;
          if (O.status === 91) if (O.gzhead.comment) {
            T = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), B(g), T = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.comment.length ? 255 & O.gzhead.comment.charCodeAt(O.gzindex++) : 0, re(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > T && (g.adler = l(g.adler, O.pending_buf, O.pending - T, T)), R === 0 && (O.status = 103);
          } else O.status = 103;
          if (O.status === 103 && (O.gzhead.hcrc ? (O.pending + 2 > O.pending_buf_size && B(g), O.pending + 2 <= O.pending_buf_size && (re(O, 255 & g.adler), re(O, g.adler >> 8 & 255), g.adler = 0, O.status = N)) : O.status = N), O.pending !== 0) {
            if (B(g), g.avail_out === 0) return O.last_flush = -1, f;
          } else if (g.avail_in === 0 && L(M) <= L(D) && M !== _) return ie(g, -5);
          if (O.status === 666 && g.avail_in !== 0) return ie(g, -5);
          if (g.avail_in !== 0 || O.lookahead !== 0 || M !== d && O.status !== 666) {
            var H = O.strategy === 2 ? (function($, G) {
              for (var Q; ; ) {
                if ($.lookahead === 0 && (we($), $.lookahead === 0)) {
                  if (G === d) return p;
                  break;
                }
                if ($.match_length = 0, Q = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++, Q && (U($, !1), $.strm.avail_out === 0)) return p;
              }
              return $.insert = 0, G === _ ? (U($, !0), $.strm.avail_out === 0 ? J : V) : $.last_lit && (U($, !1), $.strm.avail_out === 0) ? p : P;
            })(O, M) : O.strategy === 3 ? (function($, G) {
              for (var Q, q, ne, de, ue = $.window; ; ) {
                if ($.lookahead <= I) {
                  if (we($), $.lookahead <= I && G === d) return p;
                  if ($.lookahead === 0) break;
                }
                if ($.match_length = 0, $.lookahead >= E && 0 < $.strstart && (q = ue[ne = $.strstart - 1]) === ue[++ne] && q === ue[++ne] && q === ue[++ne]) {
                  de = $.strstart + I;
                  do
                    ;
                  while (q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && q === ue[++ne] && ne < de);
                  $.match_length = I - (de - ne), $.match_length > $.lookahead && ($.match_length = $.lookahead);
                }
                if ($.match_length >= E ? (Q = a._tr_tally($, 1, $.match_length - E), $.lookahead -= $.match_length, $.strstart += $.match_length, $.match_length = 0) : (Q = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++), Q && (U($, !1), $.strm.avail_out === 0)) return p;
              }
              return $.insert = 0, G === _ ? (U($, !0), $.strm.avail_out === 0 ? J : V) : $.last_lit && (U($, !1), $.strm.avail_out === 0) ? p : P;
            })(O, M) : o[O.level].func(O, M);
            if (H !== J && H !== V || (O.status = 666), H === p || H === J) return g.avail_out === 0 && (O.last_flush = -1), f;
            if (H === P && (M === 1 ? a._tr_align(O) : M !== 5 && (a._tr_stored_block(O, 0, 0, !1), M === 3 && (ee(O.head), O.lookahead === 0 && (O.strstart = 0, O.block_start = 0, O.insert = 0))), B(g), g.avail_out === 0)) return O.last_flush = -1, f;
          }
          return M !== _ ? f : O.wrap <= 0 ? 1 : (O.wrap === 2 ? (re(O, 255 & g.adler), re(O, g.adler >> 8 & 255), re(O, g.adler >> 16 & 255), re(O, g.adler >> 24 & 255), re(O, 255 & g.total_in), re(O, g.total_in >> 8 & 255), re(O, g.total_in >> 16 & 255), re(O, g.total_in >> 24 & 255)) : (K(O, g.adler >>> 16), K(O, 65535 & g.adler)), B(g), 0 < O.wrap && (O.wrap = -O.wrap), O.pending !== 0 ? f : 1);
        }, i.deflateEnd = function(g) {
          var M;
          return g && g.state ? (M = g.state.status) !== S && M !== 69 && M !== 73 && M !== 91 && M !== 103 && M !== N && M !== 666 ? ie(g, b) : (g.state = null, M === N ? ie(g, -3) : f) : b;
        }, i.deflateSetDictionary = function(g, M) {
          var D, O, T, R, W, H, $, G, Q = M.length;
          if (!g || !g.state || (R = (D = g.state).wrap) === 2 || R === 1 && D.status !== S || D.lookahead) return b;
          for (R === 1 && (g.adler = c(g.adler, M, Q, 0)), D.wrap = 0, Q >= D.w_size && (R === 0 && (ee(D.head), D.strstart = 0, D.block_start = 0, D.insert = 0), G = new s.Buf8(D.w_size), s.arraySet(G, M, Q - D.w_size, D.w_size, 0), M = G, Q = D.w_size), W = g.avail_in, H = g.next_in, $ = g.input, g.avail_in = Q, g.next_in = 0, g.input = M, we(D); D.lookahead >= E; ) {
            for (O = D.strstart, T = D.lookahead - (E - 1); D.ins_h = (D.ins_h << D.hash_shift ^ D.window[O + E - 1]) & D.hash_mask, D.prev[O & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = O, O++, --T; ) ;
            D.strstart = O, D.lookahead = E - 1, we(D);
          }
          return D.strstart += D.lookahead, D.block_start = D.strstart, D.insert = D.lookahead, D.lookahead = 0, D.match_length = D.prev_length = E - 1, D.match_available = 0, g.next_in = H, g.input = $, g.avail_in = W, D.wrap = R, f;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(t, n, i) {
        n.exports = function(o, s) {
          var a, c, l, u, d, _, f, b, m, k, h, v, x, z, w, y, A, C, E, I, F, S, N, p, P;
          a = o.state, c = o.next_in, p = o.input, l = c + (o.avail_in - 5), u = o.next_out, P = o.output, d = u - (s - o.avail_out), _ = u + (o.avail_out - 257), f = a.dmax, b = a.wsize, m = a.whave, k = a.wnext, h = a.window, v = a.hold, x = a.bits, z = a.lencode, w = a.distcode, y = (1 << a.lenbits) - 1, A = (1 << a.distbits) - 1;
          e: do {
            x < 15 && (v += p[c++] << x, x += 8, v += p[c++] << x, x += 8), C = z[v & y];
            t: for (; ; ) {
              if (v >>>= E = C >>> 24, x -= E, (E = C >>> 16 & 255) === 0) P[u++] = 65535 & C;
              else {
                if (!(16 & E)) {
                  if ((64 & E) == 0) {
                    C = z[(65535 & C) + (v & (1 << E) - 1)];
                    continue t;
                  }
                  if (32 & E) {
                    a.mode = 12;
                    break e;
                  }
                  o.msg = "invalid literal/length code", a.mode = 30;
                  break e;
                }
                I = 65535 & C, (E &= 15) && (x < E && (v += p[c++] << x, x += 8), I += v & (1 << E) - 1, v >>>= E, x -= E), x < 15 && (v += p[c++] << x, x += 8, v += p[c++] << x, x += 8), C = w[v & A];
                r: for (; ; ) {
                  if (v >>>= E = C >>> 24, x -= E, !(16 & (E = C >>> 16 & 255))) {
                    if ((64 & E) == 0) {
                      C = w[(65535 & C) + (v & (1 << E) - 1)];
                      continue r;
                    }
                    o.msg = "invalid distance code", a.mode = 30;
                    break e;
                  }
                  if (F = 65535 & C, x < (E &= 15) && (v += p[c++] << x, (x += 8) < E && (v += p[c++] << x, x += 8)), f < (F += v & (1 << E) - 1)) {
                    o.msg = "invalid distance too far back", a.mode = 30;
                    break e;
                  }
                  if (v >>>= E, x -= E, (E = u - d) < F) {
                    if (m < (E = F - E) && a.sane) {
                      o.msg = "invalid distance too far back", a.mode = 30;
                      break e;
                    }
                    if (N = h, (S = 0) === k) {
                      if (S += b - E, E < I) {
                        for (I -= E; P[u++] = h[S++], --E; ) ;
                        S = u - F, N = P;
                      }
                    } else if (k < E) {
                      if (S += b + k - E, (E -= k) < I) {
                        for (I -= E; P[u++] = h[S++], --E; ) ;
                        if (S = 0, k < I) {
                          for (I -= E = k; P[u++] = h[S++], --E; ) ;
                          S = u - F, N = P;
                        }
                      }
                    } else if (S += k - E, E < I) {
                      for (I -= E; P[u++] = h[S++], --E; ) ;
                      S = u - F, N = P;
                    }
                    for (; 2 < I; ) P[u++] = N[S++], P[u++] = N[S++], P[u++] = N[S++], I -= 3;
                    I && (P[u++] = N[S++], 1 < I && (P[u++] = N[S++]));
                  } else {
                    for (S = u - F; P[u++] = P[S++], P[u++] = P[S++], P[u++] = P[S++], 2 < (I -= 3); ) ;
                    I && (P[u++] = P[S++], 1 < I && (P[u++] = P[S++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (c < l && u < _);
          c -= I = x >> 3, v &= (1 << (x -= I << 3)) - 1, o.next_in = c, o.next_out = u, o.avail_in = c < l ? l - c + 5 : 5 - (c - l), o.avail_out = u < _ ? _ - u + 257 : 257 - (u - _), a.hold = v, a.bits = x;
        };
      }, {}], 49: [function(t, n, i) {
        var o = t("../utils/common"), s = t("./adler32"), a = t("./crc32"), c = t("./inffast"), l = t("./inftrees"), u = 1, d = 2, _ = 0, f = -2, b = 1, m = 852, k = 592;
        function h(S) {
          return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
        }
        function v() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function x(S) {
          var N;
          return S && S.state ? (N = S.state, S.total_in = S.total_out = N.total = 0, S.msg = "", N.wrap && (S.adler = 1 & N.wrap), N.mode = b, N.last = 0, N.havedict = 0, N.dmax = 32768, N.head = null, N.hold = 0, N.bits = 0, N.lencode = N.lendyn = new o.Buf32(m), N.distcode = N.distdyn = new o.Buf32(k), N.sane = 1, N.back = -1, _) : f;
        }
        function z(S) {
          var N;
          return S && S.state ? ((N = S.state).wsize = 0, N.whave = 0, N.wnext = 0, x(S)) : f;
        }
        function w(S, N) {
          var p, P;
          return S && S.state ? (P = S.state, N < 0 ? (p = 0, N = -N) : (p = 1 + (N >> 4), N < 48 && (N &= 15)), N && (N < 8 || 15 < N) ? f : (P.window !== null && P.wbits !== N && (P.window = null), P.wrap = p, P.wbits = N, z(S))) : f;
        }
        function y(S, N) {
          var p, P;
          return S ? (P = new v(), (S.state = P).window = null, (p = w(S, N)) !== _ && (S.state = null), p) : f;
        }
        var A, C, E = !0;
        function I(S) {
          if (E) {
            var N;
            for (A = new o.Buf32(512), C = new o.Buf32(32), N = 0; N < 144; ) S.lens[N++] = 8;
            for (; N < 256; ) S.lens[N++] = 9;
            for (; N < 280; ) S.lens[N++] = 7;
            for (; N < 288; ) S.lens[N++] = 8;
            for (l(u, S.lens, 0, 288, A, 0, S.work, { bits: 9 }), N = 0; N < 32; ) S.lens[N++] = 5;
            l(d, S.lens, 0, 32, C, 0, S.work, { bits: 5 }), E = !1;
          }
          S.lencode = A, S.lenbits = 9, S.distcode = C, S.distbits = 5;
        }
        function F(S, N, p, P) {
          var J, V = S.state;
          return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new o.Buf8(V.wsize)), P >= V.wsize ? (o.arraySet(V.window, N, p - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (P < (J = V.wsize - V.wnext) && (J = P), o.arraySet(V.window, N, p - P, J, V.wnext), (P -= J) ? (o.arraySet(V.window, N, p - P, P, 0), V.wnext = P, V.whave = V.wsize) : (V.wnext += J, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += J))), 0;
        }
        i.inflateReset = z, i.inflateReset2 = w, i.inflateResetKeep = x, i.inflateInit = function(S) {
          return y(S, 15);
        }, i.inflateInit2 = y, i.inflate = function(S, N) {
          var p, P, J, V, ie, L, ee, B, U, re, K, X, we, ze, ce, he, Ee, ye, je, De, g, M, D, O, T = 0, R = new o.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return f;
          (p = S.state).mode === 12 && (p.mode = 13), ie = S.next_out, J = S.output, ee = S.avail_out, V = S.next_in, P = S.input, L = S.avail_in, B = p.hold, U = p.bits, re = L, K = ee, M = _;
          e: for (; ; ) switch (p.mode) {
            case b:
              if (p.wrap === 0) {
                p.mode = 13;
                break;
              }
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if (2 & p.wrap && B === 35615) {
                R[p.check = 0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0), U = B = 0, p.mode = 2;
                break;
              }
              if (p.flags = 0, p.head && (p.head.done = !1), !(1 & p.wrap) || (((255 & B) << 8) + (B >> 8)) % 31) {
                S.msg = "incorrect header check", p.mode = 30;
                break;
              }
              if ((15 & B) != 8) {
                S.msg = "unknown compression method", p.mode = 30;
                break;
              }
              if (U -= 4, g = 8 + (15 & (B >>>= 4)), p.wbits === 0) p.wbits = g;
              else if (g > p.wbits) {
                S.msg = "invalid window size", p.mode = 30;
                break;
              }
              p.dmax = 1 << g, S.adler = p.check = 1, p.mode = 512 & B ? 10 : 12, U = B = 0;
              break;
            case 2:
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if (p.flags = B, (255 & p.flags) != 8) {
                S.msg = "unknown compression method", p.mode = 30;
                break;
              }
              if (57344 & p.flags) {
                S.msg = "unknown header flags set", p.mode = 30;
                break;
              }
              p.head && (p.head.text = B >> 8 & 1), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0)), U = B = 0, p.mode = 3;
            case 3:
              for (; U < 32; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              p.head && (p.head.time = B), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, R[2] = B >>> 16 & 255, R[3] = B >>> 24 & 255, p.check = a(p.check, R, 4, 0)), U = B = 0, p.mode = 4;
            case 4:
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              p.head && (p.head.xflags = 255 & B, p.head.os = B >> 8), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0)), U = B = 0, p.mode = 5;
            case 5:
              if (1024 & p.flags) {
                for (; U < 16; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                p.length = B, p.head && (p.head.extra_len = B), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0)), U = B = 0;
              } else p.head && (p.head.extra = null);
              p.mode = 6;
            case 6:
              if (1024 & p.flags && (L < (X = p.length) && (X = L), X && (p.head && (g = p.head.extra_len - p.length, p.head.extra || (p.head.extra = new Array(p.head.extra_len)), o.arraySet(p.head.extra, P, V, X, g)), 512 & p.flags && (p.check = a(p.check, P, X, V)), L -= X, V += X, p.length -= X), p.length)) break e;
              p.length = 0, p.mode = 7;
            case 7:
              if (2048 & p.flags) {
                if (L === 0) break e;
                for (X = 0; g = P[V + X++], p.head && g && p.length < 65536 && (p.head.name += String.fromCharCode(g)), g && X < L; ) ;
                if (512 & p.flags && (p.check = a(p.check, P, X, V)), L -= X, V += X, g) break e;
              } else p.head && (p.head.name = null);
              p.length = 0, p.mode = 8;
            case 8:
              if (4096 & p.flags) {
                if (L === 0) break e;
                for (X = 0; g = P[V + X++], p.head && g && p.length < 65536 && (p.head.comment += String.fromCharCode(g)), g && X < L; ) ;
                if (512 & p.flags && (p.check = a(p.check, P, X, V)), L -= X, V += X, g) break e;
              } else p.head && (p.head.comment = null);
              p.mode = 9;
            case 9:
              if (512 & p.flags) {
                for (; U < 16; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                if (B !== (65535 & p.check)) {
                  S.msg = "header crc mismatch", p.mode = 30;
                  break;
                }
                U = B = 0;
              }
              p.head && (p.head.hcrc = p.flags >> 9 & 1, p.head.done = !0), S.adler = p.check = 0, p.mode = 12;
              break;
            case 10:
              for (; U < 32; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              S.adler = p.check = h(B), U = B = 0, p.mode = 11;
            case 11:
              if (p.havedict === 0) return S.next_out = ie, S.avail_out = ee, S.next_in = V, S.avail_in = L, p.hold = B, p.bits = U, 2;
              S.adler = p.check = 1, p.mode = 12;
            case 12:
              if (N === 5 || N === 6) break e;
            case 13:
              if (p.last) {
                B >>>= 7 & U, U -= 7 & U, p.mode = 27;
                break;
              }
              for (; U < 3; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              switch (p.last = 1 & B, U -= 1, 3 & (B >>>= 1)) {
                case 0:
                  p.mode = 14;
                  break;
                case 1:
                  if (I(p), p.mode = 20, N !== 6) break;
                  B >>>= 2, U -= 2;
                  break e;
                case 2:
                  p.mode = 17;
                  break;
                case 3:
                  S.msg = "invalid block type", p.mode = 30;
              }
              B >>>= 2, U -= 2;
              break;
            case 14:
              for (B >>>= 7 & U, U -= 7 & U; U < 32; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if ((65535 & B) != (B >>> 16 ^ 65535)) {
                S.msg = "invalid stored block lengths", p.mode = 30;
                break;
              }
              if (p.length = 65535 & B, U = B = 0, p.mode = 15, N === 6) break e;
            case 15:
              p.mode = 16;
            case 16:
              if (X = p.length) {
                if (L < X && (X = L), ee < X && (X = ee), X === 0) break e;
                o.arraySet(J, P, V, X, ie), L -= X, V += X, ee -= X, ie += X, p.length -= X;
                break;
              }
              p.mode = 12;
              break;
            case 17:
              for (; U < 14; ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if (p.nlen = 257 + (31 & B), B >>>= 5, U -= 5, p.ndist = 1 + (31 & B), B >>>= 5, U -= 5, p.ncode = 4 + (15 & B), B >>>= 4, U -= 4, 286 < p.nlen || 30 < p.ndist) {
                S.msg = "too many length or distance symbols", p.mode = 30;
                break;
              }
              p.have = 0, p.mode = 18;
            case 18:
              for (; p.have < p.ncode; ) {
                for (; U < 3; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                p.lens[W[p.have++]] = 7 & B, B >>>= 3, U -= 3;
              }
              for (; p.have < 19; ) p.lens[W[p.have++]] = 0;
              if (p.lencode = p.lendyn, p.lenbits = 7, D = { bits: p.lenbits }, M = l(0, p.lens, 0, 19, p.lencode, 0, p.work, D), p.lenbits = D.bits, M) {
                S.msg = "invalid code lengths set", p.mode = 30;
                break;
              }
              p.have = 0, p.mode = 19;
            case 19:
              for (; p.have < p.nlen + p.ndist; ) {
                for (; he = (T = p.lencode[B & (1 << p.lenbits) - 1]) >>> 16 & 255, Ee = 65535 & T, !((ce = T >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                if (Ee < 16) B >>>= ce, U -= ce, p.lens[p.have++] = Ee;
                else {
                  if (Ee === 16) {
                    for (O = ce + 2; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[V++] << U, U += 8;
                    }
                    if (B >>>= ce, U -= ce, p.have === 0) {
                      S.msg = "invalid bit length repeat", p.mode = 30;
                      break;
                    }
                    g = p.lens[p.have - 1], X = 3 + (3 & B), B >>>= 2, U -= 2;
                  } else if (Ee === 17) {
                    for (O = ce + 3; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[V++] << U, U += 8;
                    }
                    U -= ce, g = 0, X = 3 + (7 & (B >>>= ce)), B >>>= 3, U -= 3;
                  } else {
                    for (O = ce + 7; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[V++] << U, U += 8;
                    }
                    U -= ce, g = 0, X = 11 + (127 & (B >>>= ce)), B >>>= 7, U -= 7;
                  }
                  if (p.have + X > p.nlen + p.ndist) {
                    S.msg = "invalid bit length repeat", p.mode = 30;
                    break;
                  }
                  for (; X--; ) p.lens[p.have++] = g;
                }
              }
              if (p.mode === 30) break;
              if (p.lens[256] === 0) {
                S.msg = "invalid code -- missing end-of-block", p.mode = 30;
                break;
              }
              if (p.lenbits = 9, D = { bits: p.lenbits }, M = l(u, p.lens, 0, p.nlen, p.lencode, 0, p.work, D), p.lenbits = D.bits, M) {
                S.msg = "invalid literal/lengths set", p.mode = 30;
                break;
              }
              if (p.distbits = 6, p.distcode = p.distdyn, D = { bits: p.distbits }, M = l(d, p.lens, p.nlen, p.ndist, p.distcode, 0, p.work, D), p.distbits = D.bits, M) {
                S.msg = "invalid distances set", p.mode = 30;
                break;
              }
              if (p.mode = 20, N === 6) break e;
            case 20:
              p.mode = 21;
            case 21:
              if (6 <= L && 258 <= ee) {
                S.next_out = ie, S.avail_out = ee, S.next_in = V, S.avail_in = L, p.hold = B, p.bits = U, c(S, K), ie = S.next_out, J = S.output, ee = S.avail_out, V = S.next_in, P = S.input, L = S.avail_in, B = p.hold, U = p.bits, p.mode === 12 && (p.back = -1);
                break;
              }
              for (p.back = 0; he = (T = p.lencode[B & (1 << p.lenbits) - 1]) >>> 16 & 255, Ee = 65535 & T, !((ce = T >>> 24) <= U); ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if (he && (240 & he) == 0) {
                for (ye = ce, je = he, De = Ee; he = (T = p.lencode[De + ((B & (1 << ye + je) - 1) >> ye)]) >>> 16 & 255, Ee = 65535 & T, !(ye + (ce = T >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                B >>>= ye, U -= ye, p.back += ye;
              }
              if (B >>>= ce, U -= ce, p.back += ce, p.length = Ee, he === 0) {
                p.mode = 26;
                break;
              }
              if (32 & he) {
                p.back = -1, p.mode = 12;
                break;
              }
              if (64 & he) {
                S.msg = "invalid literal/length code", p.mode = 30;
                break;
              }
              p.extra = 15 & he, p.mode = 22;
            case 22:
              if (p.extra) {
                for (O = p.extra; U < O; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                p.length += B & (1 << p.extra) - 1, B >>>= p.extra, U -= p.extra, p.back += p.extra;
              }
              p.was = p.length, p.mode = 23;
            case 23:
              for (; he = (T = p.distcode[B & (1 << p.distbits) - 1]) >>> 16 & 255, Ee = 65535 & T, !((ce = T >>> 24) <= U); ) {
                if (L === 0) break e;
                L--, B += P[V++] << U, U += 8;
              }
              if ((240 & he) == 0) {
                for (ye = ce, je = he, De = Ee; he = (T = p.distcode[De + ((B & (1 << ye + je) - 1) >> ye)]) >>> 16 & 255, Ee = 65535 & T, !(ye + (ce = T >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                B >>>= ye, U -= ye, p.back += ye;
              }
              if (B >>>= ce, U -= ce, p.back += ce, 64 & he) {
                S.msg = "invalid distance code", p.mode = 30;
                break;
              }
              p.offset = Ee, p.extra = 15 & he, p.mode = 24;
            case 24:
              if (p.extra) {
                for (O = p.extra; U < O; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                p.offset += B & (1 << p.extra) - 1, B >>>= p.extra, U -= p.extra, p.back += p.extra;
              }
              if (p.offset > p.dmax) {
                S.msg = "invalid distance too far back", p.mode = 30;
                break;
              }
              p.mode = 25;
            case 25:
              if (ee === 0) break e;
              if (X = K - ee, p.offset > X) {
                if ((X = p.offset - X) > p.whave && p.sane) {
                  S.msg = "invalid distance too far back", p.mode = 30;
                  break;
                }
                we = X > p.wnext ? (X -= p.wnext, p.wsize - X) : p.wnext - X, X > p.length && (X = p.length), ze = p.window;
              } else ze = J, we = ie - p.offset, X = p.length;
              for (ee < X && (X = ee), ee -= X, p.length -= X; J[ie++] = ze[we++], --X; ) ;
              p.length === 0 && (p.mode = 21);
              break;
            case 26:
              if (ee === 0) break e;
              J[ie++] = p.length, ee--, p.mode = 21;
              break;
            case 27:
              if (p.wrap) {
                for (; U < 32; ) {
                  if (L === 0) break e;
                  L--, B |= P[V++] << U, U += 8;
                }
                if (K -= ee, S.total_out += K, p.total += K, K && (S.adler = p.check = p.flags ? a(p.check, J, K, ie - K) : s(p.check, J, K, ie - K)), K = ee, (p.flags ? B : h(B)) !== p.check) {
                  S.msg = "incorrect data check", p.mode = 30;
                  break;
                }
                U = B = 0;
              }
              p.mode = 28;
            case 28:
              if (p.wrap && p.flags) {
                for (; U < 32; ) {
                  if (L === 0) break e;
                  L--, B += P[V++] << U, U += 8;
                }
                if (B !== (4294967295 & p.total)) {
                  S.msg = "incorrect length check", p.mode = 30;
                  break;
                }
                U = B = 0;
              }
              p.mode = 29;
            case 29:
              M = 1;
              break e;
            case 30:
              M = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return f;
          }
          return S.next_out = ie, S.avail_out = ee, S.next_in = V, S.avail_in = L, p.hold = B, p.bits = U, (p.wsize || K !== S.avail_out && p.mode < 30 && (p.mode < 27 || N !== 4)) && F(S, S.output, S.next_out, K - S.avail_out) ? (p.mode = 31, -4) : (re -= S.avail_in, K -= S.avail_out, S.total_in += re, S.total_out += K, p.total += K, p.wrap && K && (S.adler = p.check = p.flags ? a(p.check, J, K, S.next_out - K) : s(p.check, J, K, S.next_out - K)), S.data_type = p.bits + (p.last ? 64 : 0) + (p.mode === 12 ? 128 : 0) + (p.mode === 20 || p.mode === 15 ? 256 : 0), (re == 0 && K === 0 || N === 4) && M === _ && (M = -5), M);
        }, i.inflateEnd = function(S) {
          if (!S || !S.state) return f;
          var N = S.state;
          return N.window && (N.window = null), S.state = null, _;
        }, i.inflateGetHeader = function(S, N) {
          var p;
          return S && S.state ? (2 & (p = S.state).wrap) == 0 ? f : ((p.head = N).done = !1, _) : f;
        }, i.inflateSetDictionary = function(S, N) {
          var p, P = N.length;
          return S && S.state ? (p = S.state).wrap !== 0 && p.mode !== 11 ? f : p.mode === 11 && s(1, N, P, 0) !== p.check ? -3 : F(S, N, P, P) ? (p.mode = 31, -4) : (p.havedict = 1, _) : f;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, n, i) {
        var o = t("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(u, d, _, f, b, m, k, h) {
          var v, x, z, w, y, A, C, E, I, F = h.bits, S = 0, N = 0, p = 0, P = 0, J = 0, V = 0, ie = 0, L = 0, ee = 0, B = 0, U = null, re = 0, K = new o.Buf16(16), X = new o.Buf16(16), we = null, ze = 0;
          for (S = 0; S <= 15; S++) K[S] = 0;
          for (N = 0; N < f; N++) K[d[_ + N]]++;
          for (J = F, P = 15; 1 <= P && K[P] === 0; P--) ;
          if (P < J && (J = P), P === 0) return b[m++] = 20971520, b[m++] = 20971520, h.bits = 1, 0;
          for (p = 1; p < P && K[p] === 0; p++) ;
          for (J < p && (J = p), S = L = 1; S <= 15; S++) if (L <<= 1, (L -= K[S]) < 0) return -1;
          if (0 < L && (u === 0 || P !== 1)) return -1;
          for (X[1] = 0, S = 1; S < 15; S++) X[S + 1] = X[S] + K[S];
          for (N = 0; N < f; N++) d[_ + N] !== 0 && (k[X[d[_ + N]]++] = N);
          if (A = u === 0 ? (U = we = k, 19) : u === 1 ? (U = s, re -= 257, we = a, ze -= 257, 256) : (U = c, we = l, -1), S = p, y = m, ie = N = B = 0, z = -1, w = (ee = 1 << (V = J)) - 1, u === 1 && 852 < ee || u === 2 && 592 < ee) return 1;
          for (; ; ) {
            for (C = S - ie, I = k[N] < A ? (E = 0, k[N]) : k[N] > A ? (E = we[ze + k[N]], U[re + k[N]]) : (E = 96, 0), v = 1 << S - ie, p = x = 1 << V; b[y + (B >> ie) + (x -= v)] = C << 24 | E << 16 | I | 0, x !== 0; ) ;
            for (v = 1 << S - 1; B & v; ) v >>= 1;
            if (v !== 0 ? (B &= v - 1, B += v) : B = 0, N++, --K[S] == 0) {
              if (S === P) break;
              S = d[_ + k[N]];
            }
            if (J < S && (B & w) !== z) {
              for (ie === 0 && (ie = J), y += p, L = 1 << (V = S - ie); V + ie < P && !((L -= K[V + ie]) <= 0); ) V++, L <<= 1;
              if (ee += 1 << V, u === 1 && 852 < ee || u === 2 && 592 < ee) return 1;
              b[z = B & w] = J << 24 | V << 16 | y - m | 0;
            }
          }
          return B !== 0 && (b[y + B] = S - ie << 24 | 64 << 16 | 0), h.bits = J, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(t, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(t, n, i) {
        var o = t("../utils/common"), s = 0, a = 1;
        function c(T) {
          for (var R = T.length; 0 <= --R; ) T[R] = 0;
        }
        var l = 0, u = 29, d = 256, _ = d + 1 + u, f = 30, b = 19, m = 2 * _ + 1, k = 15, h = 16, v = 7, x = 256, z = 16, w = 17, y = 18, A = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], F = new Array(2 * (_ + 2));
        c(F);
        var S = new Array(2 * f);
        c(S);
        var N = new Array(512);
        c(N);
        var p = new Array(256);
        c(p);
        var P = new Array(u);
        c(P);
        var J, V, ie, L = new Array(f);
        function ee(T, R, W, H, $) {
          this.static_tree = T, this.extra_bits = R, this.extra_base = W, this.elems = H, this.max_length = $, this.has_stree = T && T.length;
        }
        function B(T, R) {
          this.dyn_tree = T, this.max_code = 0, this.stat_desc = R;
        }
        function U(T) {
          return T < 256 ? N[T] : N[256 + (T >>> 7)];
        }
        function re(T, R) {
          T.pending_buf[T.pending++] = 255 & R, T.pending_buf[T.pending++] = R >>> 8 & 255;
        }
        function K(T, R, W) {
          T.bi_valid > h - W ? (T.bi_buf |= R << T.bi_valid & 65535, re(T, T.bi_buf), T.bi_buf = R >> h - T.bi_valid, T.bi_valid += W - h) : (T.bi_buf |= R << T.bi_valid & 65535, T.bi_valid += W);
        }
        function X(T, R, W) {
          K(T, W[2 * R], W[2 * R + 1]);
        }
        function we(T, R) {
          for (var W = 0; W |= 1 & T, T >>>= 1, W <<= 1, 0 < --R; ) ;
          return W >>> 1;
        }
        function ze(T, R, W) {
          var H, $, G = new Array(k + 1), Q = 0;
          for (H = 1; H <= k; H++) G[H] = Q = Q + W[H - 1] << 1;
          for ($ = 0; $ <= R; $++) {
            var q = T[2 * $ + 1];
            q !== 0 && (T[2 * $] = we(G[q]++, q));
          }
        }
        function ce(T) {
          var R;
          for (R = 0; R < _; R++) T.dyn_ltree[2 * R] = 0;
          for (R = 0; R < f; R++) T.dyn_dtree[2 * R] = 0;
          for (R = 0; R < b; R++) T.bl_tree[2 * R] = 0;
          T.dyn_ltree[2 * x] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0;
        }
        function he(T) {
          8 < T.bi_valid ? re(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0;
        }
        function Ee(T, R, W, H) {
          var $ = 2 * R, G = 2 * W;
          return T[$] < T[G] || T[$] === T[G] && H[R] <= H[W];
        }
        function ye(T, R, W) {
          for (var H = T.heap[W], $ = W << 1; $ <= T.heap_len && ($ < T.heap_len && Ee(R, T.heap[$ + 1], T.heap[$], T.depth) && $++, !Ee(R, H, T.heap[$], T.depth)); ) T.heap[W] = T.heap[$], W = $, $ <<= 1;
          T.heap[W] = H;
        }
        function je(T, R, W) {
          var H, $, G, Q, q = 0;
          if (T.last_lit !== 0) for (; H = T.pending_buf[T.d_buf + 2 * q] << 8 | T.pending_buf[T.d_buf + 2 * q + 1], $ = T.pending_buf[T.l_buf + q], q++, H === 0 ? X(T, $, R) : (X(T, (G = p[$]) + d + 1, R), (Q = A[G]) !== 0 && K(T, $ -= P[G], Q), X(T, G = U(--H), W), (Q = C[G]) !== 0 && K(T, H -= L[G], Q)), q < T.last_lit; ) ;
          X(T, x, R);
        }
        function De(T, R) {
          var W, H, $, G = R.dyn_tree, Q = R.stat_desc.static_tree, q = R.stat_desc.has_stree, ne = R.stat_desc.elems, de = -1;
          for (T.heap_len = 0, T.heap_max = m, W = 0; W < ne; W++) G[2 * W] !== 0 ? (T.heap[++T.heap_len] = de = W, T.depth[W] = 0) : G[2 * W + 1] = 0;
          for (; T.heap_len < 2; ) G[2 * ($ = T.heap[++T.heap_len] = de < 2 ? ++de : 0)] = 1, T.depth[$] = 0, T.opt_len--, q && (T.static_len -= Q[2 * $ + 1]);
          for (R.max_code = de, W = T.heap_len >> 1; 1 <= W; W--) ye(T, G, W);
          for ($ = ne; W = T.heap[1], T.heap[1] = T.heap[T.heap_len--], ye(T, G, 1), H = T.heap[1], T.heap[--T.heap_max] = W, T.heap[--T.heap_max] = H, G[2 * $] = G[2 * W] + G[2 * H], T.depth[$] = (T.depth[W] >= T.depth[H] ? T.depth[W] : T.depth[H]) + 1, G[2 * W + 1] = G[2 * H + 1] = $, T.heap[1] = $++, ye(T, G, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], (function(ue, Ze) {
            var jt, Me, Mt, xe, mr, Xr, Ke = Ze.dyn_tree, oi = Ze.max_code, us = Ze.stat_desc.static_tree, fs = Ze.stat_desc.has_stree, hs = Ze.stat_desc.extra_bits, ai = Ze.stat_desc.extra_base, Vt = Ze.stat_desc.max_length, br = 0;
            for (xe = 0; xe <= k; xe++) ue.bl_count[xe] = 0;
            for (Ke[2 * ue.heap[ue.heap_max] + 1] = 0, jt = ue.heap_max + 1; jt < m; jt++) Vt < (xe = Ke[2 * Ke[2 * (Me = ue.heap[jt]) + 1] + 1] + 1) && (xe = Vt, br++), Ke[2 * Me + 1] = xe, oi < Me || (ue.bl_count[xe]++, mr = 0, ai <= Me && (mr = hs[Me - ai]), Xr = Ke[2 * Me], ue.opt_len += Xr * (xe + mr), fs && (ue.static_len += Xr * (us[2 * Me + 1] + mr)));
            if (br !== 0) {
              do {
                for (xe = Vt - 1; ue.bl_count[xe] === 0; ) xe--;
                ue.bl_count[xe]--, ue.bl_count[xe + 1] += 2, ue.bl_count[Vt]--, br -= 2;
              } while (0 < br);
              for (xe = Vt; xe !== 0; xe--) for (Me = ue.bl_count[xe]; Me !== 0; ) oi < (Mt = ue.heap[--jt]) || (Ke[2 * Mt + 1] !== xe && (ue.opt_len += (xe - Ke[2 * Mt + 1]) * Ke[2 * Mt], Ke[2 * Mt + 1] = xe), Me--);
            }
          })(T, R), ze(G, de, T.bl_count);
        }
        function g(T, R, W) {
          var H, $, G = -1, Q = R[1], q = 0, ne = 7, de = 4;
          for (Q === 0 && (ne = 138, de = 3), R[2 * (W + 1) + 1] = 65535, H = 0; H <= W; H++) $ = Q, Q = R[2 * (H + 1) + 1], ++q < ne && $ === Q || (q < de ? T.bl_tree[2 * $] += q : $ !== 0 ? ($ !== G && T.bl_tree[2 * $]++, T.bl_tree[2 * z]++) : q <= 10 ? T.bl_tree[2 * w]++ : T.bl_tree[2 * y]++, G = $, de = (q = 0) === Q ? (ne = 138, 3) : $ === Q ? (ne = 6, 3) : (ne = 7, 4));
        }
        function M(T, R, W) {
          var H, $, G = -1, Q = R[1], q = 0, ne = 7, de = 4;
          for (Q === 0 && (ne = 138, de = 3), H = 0; H <= W; H++) if ($ = Q, Q = R[2 * (H + 1) + 1], !(++q < ne && $ === Q)) {
            if (q < de) for (; X(T, $, T.bl_tree), --q != 0; ) ;
            else $ !== 0 ? ($ !== G && (X(T, $, T.bl_tree), q--), X(T, z, T.bl_tree), K(T, q - 3, 2)) : q <= 10 ? (X(T, w, T.bl_tree), K(T, q - 3, 3)) : (X(T, y, T.bl_tree), K(T, q - 11, 7));
            G = $, de = (q = 0) === Q ? (ne = 138, 3) : $ === Q ? (ne = 6, 3) : (ne = 7, 4);
          }
        }
        c(L);
        var D = !1;
        function O(T, R, W, H) {
          K(T, (l << 1) + (H ? 1 : 0), 3), (function($, G, Q, q) {
            he($), re($, Q), re($, ~Q), o.arraySet($.pending_buf, $.window, G, Q, $.pending), $.pending += Q;
          })(T, R, W);
        }
        i._tr_init = function(T) {
          D || ((function() {
            var R, W, H, $, G, Q = new Array(k + 1);
            for ($ = H = 0; $ < u - 1; $++) for (P[$] = H, R = 0; R < 1 << A[$]; R++) p[H++] = $;
            for (p[H - 1] = $, $ = G = 0; $ < 16; $++) for (L[$] = G, R = 0; R < 1 << C[$]; R++) N[G++] = $;
            for (G >>= 7; $ < f; $++) for (L[$] = G << 7, R = 0; R < 1 << C[$] - 7; R++) N[256 + G++] = $;
            for (W = 0; W <= k; W++) Q[W] = 0;
            for (R = 0; R <= 143; ) F[2 * R + 1] = 8, R++, Q[8]++;
            for (; R <= 255; ) F[2 * R + 1] = 9, R++, Q[9]++;
            for (; R <= 279; ) F[2 * R + 1] = 7, R++, Q[7]++;
            for (; R <= 287; ) F[2 * R + 1] = 8, R++, Q[8]++;
            for (ze(F, _ + 1, Q), R = 0; R < f; R++) S[2 * R + 1] = 5, S[2 * R] = we(R, 5);
            J = new ee(F, A, d + 1, _, k), V = new ee(S, C, 0, f, k), ie = new ee(new Array(0), E, 0, b, v);
          })(), D = !0), T.l_desc = new B(T.dyn_ltree, J), T.d_desc = new B(T.dyn_dtree, V), T.bl_desc = new B(T.bl_tree, ie), T.bi_buf = 0, T.bi_valid = 0, ce(T);
        }, i._tr_stored_block = O, i._tr_flush_block = function(T, R, W, H) {
          var $, G, Q = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = (function(q) {
            var ne, de = 4093624447;
            for (ne = 0; ne <= 31; ne++, de >>>= 1) if (1 & de && q.dyn_ltree[2 * ne] !== 0) return s;
            if (q.dyn_ltree[18] !== 0 || q.dyn_ltree[20] !== 0 || q.dyn_ltree[26] !== 0) return a;
            for (ne = 32; ne < d; ne++) if (q.dyn_ltree[2 * ne] !== 0) return a;
            return s;
          })(T)), De(T, T.l_desc), De(T, T.d_desc), Q = (function(q) {
            var ne;
            for (g(q, q.dyn_ltree, q.l_desc.max_code), g(q, q.dyn_dtree, q.d_desc.max_code), De(q, q.bl_desc), ne = b - 1; 3 <= ne && q.bl_tree[2 * I[ne] + 1] === 0; ne--) ;
            return q.opt_len += 3 * (ne + 1) + 5 + 5 + 4, ne;
          })(T), $ = T.opt_len + 3 + 7 >>> 3, (G = T.static_len + 3 + 7 >>> 3) <= $ && ($ = G)) : $ = G = W + 5, W + 4 <= $ && R !== -1 ? O(T, R, W, H) : T.strategy === 4 || G === $ ? (K(T, 2 + (H ? 1 : 0), 3), je(T, F, S)) : (K(T, 4 + (H ? 1 : 0), 3), (function(q, ne, de, ue) {
            var Ze;
            for (K(q, ne - 257, 5), K(q, de - 1, 5), K(q, ue - 4, 4), Ze = 0; Ze < ue; Ze++) K(q, q.bl_tree[2 * I[Ze] + 1], 3);
            M(q, q.dyn_ltree, ne - 1), M(q, q.dyn_dtree, de - 1);
          })(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, Q + 1), je(T, T.dyn_ltree, T.dyn_dtree)), ce(T), H && he(T);
        }, i._tr_tally = function(T, R, W) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = R >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & R, T.pending_buf[T.l_buf + T.last_lit] = 255 & W, T.last_lit++, R === 0 ? T.dyn_ltree[2 * W]++ : (T.matches++, R--, T.dyn_ltree[2 * (p[W] + d + 1)]++, T.dyn_dtree[2 * U(R)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          K(T, 2, 3), X(T, x, F), (function(R) {
            R.bi_valid === 16 ? (re(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
          })(T);
        };
      }, { "../utils/common": 41 }], 53: [function(t, n, i) {
        n.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(t, n, i) {
        (function(o) {
          (function(s, a) {
            if (!s.setImmediate) {
              var c, l, u, d, _ = 1, f = {}, b = !1, m = s.document, k = Object.getPrototypeOf && Object.getPrototypeOf(s);
              k = k && k.setTimeout ? k : s, c = {}.toString.call(s.process) === "[object process]" ? function(z) {
                process.nextTick(function() {
                  v(z);
                });
              } : (function() {
                if (s.postMessage && !s.importScripts) {
                  var z = !0, w = s.onmessage;
                  return s.onmessage = function() {
                    z = !1;
                  }, s.postMessage("", "*"), s.onmessage = w, z;
                }
              })() ? (d = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", x, !1) : s.attachEvent("onmessage", x), function(z) {
                s.postMessage(d + z, "*");
              }) : s.MessageChannel ? ((u = new MessageChannel()).port1.onmessage = function(z) {
                v(z.data);
              }, function(z) {
                u.port2.postMessage(z);
              }) : m && "onreadystatechange" in m.createElement("script") ? (l = m.documentElement, function(z) {
                var w = m.createElement("script");
                w.onreadystatechange = function() {
                  v(z), w.onreadystatechange = null, l.removeChild(w), w = null;
                }, l.appendChild(w);
              }) : function(z) {
                setTimeout(v, 0, z);
              }, k.setImmediate = function(z) {
                typeof z != "function" && (z = new Function("" + z));
                for (var w = new Array(arguments.length - 1), y = 0; y < w.length; y++) w[y] = arguments[y + 1];
                var A = { callback: z, args: w };
                return f[_] = A, c(_), _++;
              }, k.clearImmediate = h;
            }
            function h(z) {
              delete f[z];
            }
            function v(z) {
              if (b) setTimeout(v, 0, z);
              else {
                var w = f[z];
                if (w) {
                  b = !0;
                  try {
                    (function(y) {
                      var A = y.callback, C = y.args;
                      switch (C.length) {
                        case 0:
                          A();
                          break;
                        case 1:
                          A(C[0]);
                          break;
                        case 2:
                          A(C[0], C[1]);
                          break;
                        case 3:
                          A(C[0], C[1], C[2]);
                          break;
                        default:
                          A.apply(a, C);
                      }
                    })(w);
                  } finally {
                    h(z), b = !1;
                  }
                }
              }
            }
            function x(z) {
              z.source === s && typeof z.data == "string" && z.data.indexOf(d) === 0 && v(+z.data.slice(d.length));
            }
          })(typeof self > "u" ? o === void 0 ? this : o : self);
        }).call(this, typeof qt < "u" ? qt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(Yr)), Yr.exports;
}
var As = Es();
const Ss = /* @__PURE__ */ xs(As), Ns = 9783072e5, It = "bplist00", zs = "// !$*UTF8*$!";
var rt;
(function(e) {
  e[e.BINARY = 0] = "BINARY", e[e.XML = 1] = "XML", e[e.OPENSTEP = 2] = "OPENSTEP";
})(rt || (rt = {}));
const $e = 100 * 1e3 * 1e3, Is = 32768, ci = new TextDecoder("utf-8"), Ts = new TextDecoder("utf-16");
function ui(e, r = 0) {
  return new DataView(e).getFloat64(r, !1);
}
function Cs(e, r = 0) {
  return new DataView(e).getFloat32(r, !1);
}
function pt(e, r = 0) {
  return new DataView(e).getUint8(r);
}
function Os(e, r = 0) {
  return new DataView(e).getUint16(r, !1);
}
function Fs(e, r = 0) {
  return new DataView(e).getUint32(r, !1);
}
function Tt(e, r = 0) {
  return new DataView(e).getBigUint64(r, !1);
}
function Je(e) {
  switch (e.byteLength) {
    case 1:
      return pt(e);
    case 2:
      return Os(e);
    case 4:
      return Fs(e);
    case 8:
      return Tt(e);
    case 16:
      return Tt(e, 8);
  }
  throw new Error(`Invalid unsigned int length: ${e.byteLength}`);
}
function qo(e, r = 0) {
  return new DataView(e).getInt8(r);
}
function Rs(e, r = 0) {
  return new DataView(e).getInt16(r, !1);
}
function Ps(e, r = 0) {
  return new DataView(e).getInt32(r, !1);
}
function Zs(e, r = 0) {
  return new DataView(e).getBigInt64(r, !1);
}
function $s(e) {
  switch (e.byteLength) {
    case 1:
      return qo(e);
    case 2:
      return Rs(e);
    case 4:
      return Ps(e);
    case 8:
      return Zs(e);
    case 16:
      return Tt(e, 8);
  }
  throw new Error(`Invalid int length: ${e.byteLength}`);
}
function Us(e) {
  const r = new Uint8Array(e);
  for (let t = 0; t < r.length; t += 2) {
    const n = r[t];
    r[t] = r[t + 1], r[t + 1] = n;
  }
  return r.buffer;
}
const Bs = (e) => {
  const r = e.slice(0, It.length);
  if (ci.decode(r) !== It)
    throw new Error(`Invalid binary plist. Expected '${It}' at offset 0.`);
  const t = e.slice(e.byteLength - 32, e.byteLength), n = pt(t, 6), i = pt(t, 7), o = Number(Tt(t, 8)), s = Number(Tt(t, 16)), a = Number(Tt(t, 24));
  if (o > Is)
    throw new Error("maxObjectCount exceeded");
  const c = [];
  for (let u = 0; u < o; u++) {
    const d = e.slice(a + u * n, a + (u + 1) * n);
    c[u] = Number(Je(d));
  }
  function l(u) {
    const d = c[u], _ = pt(e, d), f = (_ & 240) >> 4, b = _ & 15;
    switch (f) {
      case 0:
        return m();
      case 1:
        return k();
      case 8:
        return h();
      case 2:
        return v();
      case 3:
        return x();
      case 4:
        return z();
      case 5:
        return w();
      case 6:
        return w(!0);
      case 10:
        return y();
      case 13:
        return A();
      default:
        throw new Error("Unhandled type 0x" + f.toString(16));
    }
    function m() {
      switch (b) {
        case 0:
          return null;
        case 8:
          return !1;
        case 9:
          return !0;
        case 15:
          return null;
        default:
          throw new Error("Unhandled simple type 0x" + f.toString(16));
      }
    }
    function k() {
      const C = Math.pow(2, b);
      if (C < $e) {
        const E = e.slice(d + 1, d + 1 + C);
        return $s(E);
      }
      throw new Error("Too little heap space available! Wanted to read " + C + " bytes, but only " + $e + " are available.");
    }
    function h() {
      const C = b + 1;
      if (C < $e)
        return {
          CF$UID: Je(e.slice(d + 1, d + 1 + C))
        };
      throw new Error("Too little heap space available! Wanted to read " + C + " bytes, but only " + $e + " are available.");
    }
    function v() {
      const C = Math.pow(2, b);
      if (C < $e) {
        const E = e.slice(d + 1, d + 1 + C);
        if (C === 4)
          return Cs(E);
        if (C === 8)
          return ui(E);
        throw new Error(`Invalid real length: ${C}`);
      } else
        throw new Error("Too little heap space available! Wanted to read " + C + " bytes, but only " + $e + " are available.");
    }
    function x() {
      b != 3 && console.error("Unknown date type :" + b + ". Parsing anyway...");
      const C = e.slice(d + 1, d + 9);
      return new Date(Ns + 1e3 * ui(C));
    }
    function z() {
      let C = 1, E = b;
      if (b == 15) {
        const I = qo(e, d + 1), F = (I & 240) / 16;
        F != 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + F);
        const S = I & 15, N = Math.pow(2, S);
        C = 2 + N, E = Number(Je(e.slice(d + 2, d + 2 + N)));
      }
      if (E < $e)
        return e.slice(d + C, d + C + Number(E));
      throw new Error("Too little heap space available! Wanted to read " + E + " bytes, but only " + $e + " are available.");
    }
    function w(C = !1) {
      let E = b, I = 1;
      if (b == 15) {
        const F = pt(e, d + 1), S = (F & 240) / 16;
        S != 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + S);
        const N = F & 15, p = Math.pow(2, N);
        I = 2 + p, E = Number(Je(e.slice(d + 2, d + 2 + p)));
      }
      if (E *= C ? 2 : 1, E < $e) {
        let F = e.slice(d + I, d + I + E);
        return C ? (F = Us(F), Ts.decode(F)) : ci.decode(F);
      }
      throw new Error("Too little heap space available! Wanted to read " + E + " bytes, but only " + $e + " are available.");
    }
    function y() {
      let C = b, E = 1;
      if (b == 15) {
        const F = pt(e, d + 1), S = (F & 240) / 16;
        S != 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + S);
        const N = F & 15, p = Math.pow(2, N);
        E = 2 + p, C = Number(Je(e.slice(d + 2, d + 2 + p)));
      }
      if (C * i > $e)
        throw new Error("Too little heap space available!");
      const I = [];
      for (let F = 0; F < C; F++) {
        const S = Number(Je(e.slice(d + E + F * i, d + E + (F + 1) * i)));
        I[F] = l(S);
      }
      return I;
    }
    function A() {
      let C = b, E = 1;
      if (b == 15) {
        const F = pt(e, d + 1), S = (F & 240) / 16;
        S != 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + S);
        const N = F & 15, p = Math.pow(2, N);
        E = 2 + p, C = Number(Je(e.slice(d + 2, d + 2 + p)));
      }
      if (C * 2 * i > $e)
        throw new Error("Too little heap space available!");
      const I = {};
      for (let F = 0; F < C; F++) {
        const S = Number(Je(e.slice(d + E + F * i, d + E + (F + 1) * i))), N = Number(Je(e.slice(d + E + C * i + F * i, d + E + C * i + (F + 1) * i))), p = l(S);
        if (typeof p != "string")
          throw new Error("Invalid key type.");
        if (p === "__proto__")
          throw new Error("Attempted prototype pollution");
        const P = l(N);
        I[p] = P;
      }
      return I;
    }
  }
  return l(s);
};
var Kr = {}, Jr = {}, fi;
function Vn() {
  return fi || (fi = 1, (function(e) {
    const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", t = r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", n = "[" + r + "][" + t + "]*", i = new RegExp("^" + n + "$"), o = function(a, c) {
      const l = [];
      let u = c.exec(a);
      for (; u; ) {
        const d = [];
        d.startIndex = c.lastIndex - u[0].length;
        const _ = u.length;
        for (let f = 0; f < _; f++)
          d.push(u[f]);
        l.push(d), u = c.exec(a);
      }
      return l;
    }, s = function(a) {
      const c = i.exec(a);
      return !(c === null || typeof c > "u");
    };
    e.isExist = function(a) {
      return typeof a < "u";
    }, e.isEmptyObject = function(a) {
      return Object.keys(a).length === 0;
    }, e.merge = function(a, c, l) {
      if (c) {
        const u = Object.keys(c), d = u.length;
        for (let _ = 0; _ < d; _++)
          l === "strict" ? a[u[_]] = [c[u[_]]] : a[u[_]] = c[u[_]];
      }
    }, e.getValue = function(a) {
      return e.isExist(a) ? a : "";
    }, e.isName = s, e.getAllMatches = o, e.nameRegexp = n;
  })(Jr)), Jr;
}
var hi;
function Xo() {
  if (hi) return Kr;
  hi = 1;
  const e = Vn(), r = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  Kr.validate = function(h, v) {
    v = Object.assign({}, r, v);
    const x = [];
    let z = !1, w = !1;
    h[0] === "\uFEFF" && (h = h.substr(1));
    for (let y = 0; y < h.length; y++)
      if (h[y] === "<" && h[y + 1] === "?") {
        if (y += 2, y = n(h, y), y.err) return y;
      } else if (h[y] === "<") {
        let A = y;
        if (y++, h[y] === "!") {
          y = i(h, y);
          continue;
        } else {
          let C = !1;
          h[y] === "/" && (C = !0, y++);
          let E = "";
          for (; y < h.length && h[y] !== ">" && h[y] !== " " && h[y] !== "	" && h[y] !== `
` && h[y] !== "\r"; y++)
            E += h[y];
          if (E = E.trim(), E[E.length - 1] === "/" && (E = E.substring(0, E.length - 1), y--), !b(E)) {
            let S;
            return E.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + E + "' is an invalid name.", _("InvalidTag", S, m(h, y));
          }
          const I = a(h, y);
          if (I === !1)
            return _("InvalidAttr", "Attributes for '" + E + "' have open quote.", m(h, y));
          let F = I.value;
          if (y = I.index, F[F.length - 1] === "/") {
            const S = y - F.length;
            F = F.substring(0, F.length - 1);
            const N = l(F, v);
            if (N === !0)
              z = !0;
            else
              return _(N.err.code, N.err.msg, m(h, S + N.err.line));
          } else if (C)
            if (I.tagClosed) {
              if (F.trim().length > 0)
                return _("InvalidTag", "Closing tag '" + E + "' can't have attributes or invalid starting.", m(h, A));
              if (x.length === 0)
                return _("InvalidTag", "Closing tag '" + E + "' has not been opened.", m(h, A));
              {
                const S = x.pop();
                if (E !== S.tagName) {
                  let N = m(h, S.tagStartPos);
                  return _(
                    "InvalidTag",
                    "Expected closing tag '" + S.tagName + "' (opened in line " + N.line + ", col " + N.col + ") instead of closing tag '" + E + "'.",
                    m(h, A)
                  );
                }
                x.length == 0 && (w = !0);
              }
            } else return _("InvalidTag", "Closing tag '" + E + "' doesn't have proper closing.", m(h, y));
          else {
            const S = l(F, v);
            if (S !== !0)
              return _(S.err.code, S.err.msg, m(h, y - F.length + S.err.line));
            if (w === !0)
              return _("InvalidXml", "Multiple possible root nodes found.", m(h, y));
            v.unpairedTags.indexOf(E) !== -1 || x.push({ tagName: E, tagStartPos: A }), z = !0;
          }
          for (y++; y < h.length; y++)
            if (h[y] === "<")
              if (h[y + 1] === "!") {
                y++, y = i(h, y);
                continue;
              } else if (h[y + 1] === "?") {
                if (y = n(h, ++y), y.err) return y;
              } else
                break;
            else if (h[y] === "&") {
              const S = d(h, y);
              if (S == -1)
                return _("InvalidChar", "char '&' is not expected.", m(h, y));
              y = S;
            } else if (w === !0 && !t(h[y]))
              return _("InvalidXml", "Extra text at the end", m(h, y));
          h[y] === "<" && y--;
        }
      } else {
        if (t(h[y]))
          continue;
        return _("InvalidChar", "char '" + h[y] + "' is not expected.", m(h, y));
      }
    if (z) {
      if (x.length == 1)
        return _("InvalidTag", "Unclosed tag '" + x[0].tagName + "'.", m(h, x[0].tagStartPos));
      if (x.length > 0)
        return _("InvalidXml", "Invalid '" + JSON.stringify(x.map((y) => y.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return _("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function t(h) {
    return h === " " || h === "	" || h === `
` || h === "\r";
  }
  function n(h, v) {
    const x = v;
    for (; v < h.length; v++)
      if (h[v] == "?" || h[v] == " ") {
        const z = h.substr(x, v - x);
        if (v > 5 && z === "xml")
          return _("InvalidXml", "XML declaration allowed only at the start of the document.", m(h, v));
        if (h[v] == "?" && h[v + 1] == ">") {
          v++;
          break;
        } else
          continue;
      }
    return v;
  }
  function i(h, v) {
    if (h.length > v + 5 && h[v + 1] === "-" && h[v + 2] === "-") {
      for (v += 3; v < h.length; v++)
        if (h[v] === "-" && h[v + 1] === "-" && h[v + 2] === ">") {
          v += 2;
          break;
        }
    } else if (h.length > v + 8 && h[v + 1] === "D" && h[v + 2] === "O" && h[v + 3] === "C" && h[v + 4] === "T" && h[v + 5] === "Y" && h[v + 6] === "P" && h[v + 7] === "E") {
      let x = 1;
      for (v += 8; v < h.length; v++)
        if (h[v] === "<")
          x++;
        else if (h[v] === ">" && (x--, x === 0))
          break;
    } else if (h.length > v + 9 && h[v + 1] === "[" && h[v + 2] === "C" && h[v + 3] === "D" && h[v + 4] === "A" && h[v + 5] === "T" && h[v + 6] === "A" && h[v + 7] === "[") {
      for (v += 8; v < h.length; v++)
        if (h[v] === "]" && h[v + 1] === "]" && h[v + 2] === ">") {
          v += 2;
          break;
        }
    }
    return v;
  }
  const o = '"', s = "'";
  function a(h, v) {
    let x = "", z = "", w = !1;
    for (; v < h.length; v++) {
      if (h[v] === o || h[v] === s)
        z === "" ? z = h[v] : z !== h[v] || (z = "");
      else if (h[v] === ">" && z === "") {
        w = !0;
        break;
      }
      x += h[v];
    }
    return z !== "" ? !1 : {
      value: x,
      index: v,
      tagClosed: w
    };
  }
  const c = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function l(h, v) {
    const x = e.getAllMatches(h, c), z = {};
    for (let w = 0; w < x.length; w++) {
      if (x[w][1].length === 0)
        return _("InvalidAttr", "Attribute '" + x[w][2] + "' has no space in starting.", k(x[w]));
      if (x[w][3] !== void 0 && x[w][4] === void 0)
        return _("InvalidAttr", "Attribute '" + x[w][2] + "' is without value.", k(x[w]));
      if (x[w][3] === void 0 && !v.allowBooleanAttributes)
        return _("InvalidAttr", "boolean attribute '" + x[w][2] + "' is not allowed.", k(x[w]));
      const y = x[w][2];
      if (!f(y))
        return _("InvalidAttr", "Attribute '" + y + "' is an invalid name.", k(x[w]));
      if (!z.hasOwnProperty(y))
        z[y] = 1;
      else
        return _("InvalidAttr", "Attribute '" + y + "' is repeated.", k(x[w]));
    }
    return !0;
  }
  function u(h, v) {
    let x = /\d/;
    for (h[v] === "x" && (v++, x = /[\da-fA-F]/); v < h.length; v++) {
      if (h[v] === ";")
        return v;
      if (!h[v].match(x))
        break;
    }
    return -1;
  }
  function d(h, v) {
    if (v++, h[v] === ";")
      return -1;
    if (h[v] === "#")
      return v++, u(h, v);
    let x = 0;
    for (; v < h.length; v++, x++)
      if (!(h[v].match(/\w/) && x < 20)) {
        if (h[v] === ";")
          break;
        return -1;
      }
    return v;
  }
  function _(h, v, x) {
    return {
      err: {
        code: h,
        msg: v,
        line: x.line || x,
        col: x.col
      }
    };
  }
  function f(h) {
    return e.isName(h);
  }
  function b(h) {
    return e.isName(h);
  }
  function m(h, v) {
    const x = h.substring(0, v).split(/\r?\n/);
    return {
      line: x.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: x[x.length - 1].length + 1
    };
  }
  function k(h) {
    return h.startIndex + h[1].length;
  }
  return Kr;
}
var wr = {}, di;
function Ls() {
  if (di) return wr;
  di = 1;
  const e = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(t, n) {
      return n;
    },
    attributeValueProcessor: function(t, n) {
      return n;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(t, n, i) {
      return t;
    }
    // skipEmptyListItem: false
  }, r = function(t) {
    return Object.assign({}, e, t);
  };
  return wr.buildOptions = r, wr.defaultOptions = e, wr;
}
var Qr, pi;
function Ds() {
  if (pi) return Qr;
  pi = 1;
  class e {
    constructor(t) {
      this.tagname = t, this.child = [], this[":@"] = {};
    }
    add(t, n) {
      t === "__proto__" && (t = "#__proto__"), this.child.push({ [t]: n });
    }
    addChild(t) {
      t.tagname === "__proto__" && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({ [t.tagname]: t.child, ":@": t[":@"] }) : this.child.push({ [t.tagname]: t.child });
    }
  }
  return Qr = e, Qr;
}
var en, _i;
function js() {
  if (_i) return en;
  _i = 1;
  const e = Vn();
  function r(l, u) {
    const d = {};
    if (l[u + 3] === "O" && l[u + 4] === "C" && l[u + 5] === "T" && l[u + 6] === "Y" && l[u + 7] === "P" && l[u + 8] === "E") {
      u = u + 9;
      let _ = 1, f = !1, b = !1, m = "";
      for (; u < l.length; u++)
        if (l[u] === "<" && !b) {
          if (f && i(l, u)) {
            u += 7;
            let k, h;
            [k, h, u] = t(l, u + 1), h.indexOf("&") === -1 && (d[c(k)] = {
              regx: RegExp(`&${k};`, "g"),
              val: h
            });
          } else if (f && o(l, u)) u += 8;
          else if (f && s(l, u)) u += 8;
          else if (f && a(l, u)) u += 9;
          else if (n) b = !0;
          else throw new Error("Invalid DOCTYPE");
          _++, m = "";
        } else if (l[u] === ">") {
          if (b ? l[u - 1] === "-" && l[u - 2] === "-" && (b = !1, _--) : _--, _ === 0)
            break;
        } else l[u] === "[" ? f = !0 : m += l[u];
      if (_ !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: d, i: u };
  }
  function t(l, u) {
    let d = "";
    for (; u < l.length && l[u] !== "'" && l[u] !== '"'; u++)
      d += l[u];
    if (d = d.trim(), d.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const _ = l[u++];
    let f = "";
    for (; u < l.length && l[u] !== _; u++)
      f += l[u];
    return [d, f, u];
  }
  function n(l, u) {
    return l[u + 1] === "!" && l[u + 2] === "-" && l[u + 3] === "-";
  }
  function i(l, u) {
    return l[u + 1] === "!" && l[u + 2] === "E" && l[u + 3] === "N" && l[u + 4] === "T" && l[u + 5] === "I" && l[u + 6] === "T" && l[u + 7] === "Y";
  }
  function o(l, u) {
    return l[u + 1] === "!" && l[u + 2] === "E" && l[u + 3] === "L" && l[u + 4] === "E" && l[u + 5] === "M" && l[u + 6] === "E" && l[u + 7] === "N" && l[u + 8] === "T";
  }
  function s(l, u) {
    return l[u + 1] === "!" && l[u + 2] === "A" && l[u + 3] === "T" && l[u + 4] === "T" && l[u + 5] === "L" && l[u + 6] === "I" && l[u + 7] === "S" && l[u + 8] === "T";
  }
  function a(l, u) {
    return l[u + 1] === "!" && l[u + 2] === "N" && l[u + 3] === "O" && l[u + 4] === "T" && l[u + 5] === "A" && l[u + 6] === "T" && l[u + 7] === "I" && l[u + 8] === "O" && l[u + 9] === "N";
  }
  function c(l) {
    if (e.isName(l))
      return l;
    throw new Error(`Invalid entity name ${l}`);
  }
  return en = r, en;
}
var tn, gi;
function Ms() {
  if (gi) return tn;
  gi = 1;
  const e = /^[-+]?0x[a-fA-F0-9]+$/, r = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, t = {
    hex: !0,
    // oct: false,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function n(s, a = {}) {
    if (a = Object.assign({}, t, a), !s || typeof s != "string") return s;
    let c = s.trim();
    if (a.skipLike !== void 0 && a.skipLike.test(c)) return s;
    if (s === "0") return 0;
    if (a.hex && e.test(c))
      return o(c, 16);
    if (c.search(/[eE]/) !== -1) {
      const l = c.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
      if (l) {
        if (a.leadingZeros)
          c = (l[1] || "") + l[3];
        else if (!(l[2] === "0" && l[3][0] === ".")) return s;
        return a.eNotation ? Number(c) : s;
      } else
        return s;
    } else {
      const l = r.exec(c);
      if (l) {
        const u = l[1], d = l[2];
        let _ = i(l[3]);
        if (!a.leadingZeros && d.length > 0 && u && c[2] !== ".") return s;
        if (!a.leadingZeros && d.length > 0 && !u && c[1] !== ".") return s;
        if (a.leadingZeros && d === s) return 0;
        {
          const f = Number(c), b = "" + f;
          return b.search(/[eE]/) !== -1 ? a.eNotation ? f : s : c.indexOf(".") !== -1 ? b === "0" && _ === "" || b === _ || u && b === "-" + _ ? f : s : d ? _ === b || u + _ === b ? f : s : c === b || c === u + b ? f : s;
        }
      } else
        return s;
    }
  }
  function i(s) {
    return s && s.indexOf(".") !== -1 && (s = s.replace(/0+$/, ""), s === "." ? s = "0" : s[0] === "." ? s = "0" + s : s[s.length - 1] === "." && (s = s.substr(0, s.length - 1))), s;
  }
  function o(s, a) {
    if (parseInt) return parseInt(s, a);
    if (Number.parseInt) return Number.parseInt(s, a);
    if (window && window.parseInt) return window.parseInt(s, a);
    throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
  }
  return tn = n, tn;
}
var rn, mi;
function Yo() {
  if (mi) return rn;
  mi = 1;
  function e(r) {
    return typeof r == "function" ? r : Array.isArray(r) ? (t) => {
      for (const n of r)
        if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t))
          return !0;
    } : () => !1;
  }
  return rn = e, rn;
}
var nn, bi;
function Vs() {
  if (bi) return nn;
  bi = 1;
  const e = Vn(), r = Ds(), t = js(), n = Ms(), i = Yo();
  class o {
    constructor(y) {
      this.options = y, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (A, C) => String.fromCharCode(Number.parseInt(C, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (A, C) => String.fromCharCode(Number.parseInt(C, 16)) }
      }, this.addExternalEntities = s, this.parseXml = d, this.parseTextData = a, this.resolveNameSpace = c, this.buildAttributesMap = u, this.isItStopNode = m, this.replaceEntitiesValue = f, this.readStopNodeData = x, this.saveTextToParentTag = b, this.addChild = _, this.ignoreAttributesFn = i(this.options.ignoreAttributes);
    }
  }
  function s(w) {
    const y = Object.keys(w);
    for (let A = 0; A < y.length; A++) {
      const C = y[A];
      this.lastEntities[C] = {
        regex: new RegExp("&" + C + ";", "g"),
        val: w[C]
      };
    }
  }
  function a(w, y, A, C, E, I, F) {
    if (w !== void 0 && (this.options.trimValues && !C && (w = w.trim()), w.length > 0)) {
      F || (w = this.replaceEntitiesValue(w));
      const S = this.options.tagValueProcessor(y, w, A, E, I);
      return S == null ? w : typeof S != typeof w || S !== w ? S : this.options.trimValues ? z(w, this.options.parseTagValue, this.options.numberParseOptions) : w.trim() === w ? z(w, this.options.parseTagValue, this.options.numberParseOptions) : w;
    }
  }
  function c(w) {
    if (this.options.removeNSPrefix) {
      const y = w.split(":"), A = w.charAt(0) === "/" ? "/" : "";
      if (y[0] === "xmlns")
        return "";
      y.length === 2 && (w = A + y[1]);
    }
    return w;
  }
  const l = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function u(w, y, A) {
    if (this.options.ignoreAttributes !== !0 && typeof w == "string") {
      const C = e.getAllMatches(w, l), E = C.length, I = {};
      for (let F = 0; F < E; F++) {
        const S = this.resolveNameSpace(C[F][1]);
        if (this.ignoreAttributesFn(S, y))
          continue;
        let N = C[F][4], p = this.options.attributeNamePrefix + S;
        if (S.length)
          if (this.options.transformAttributeName && (p = this.options.transformAttributeName(p)), p === "__proto__" && (p = "#__proto__"), N !== void 0) {
            this.options.trimValues && (N = N.trim()), N = this.replaceEntitiesValue(N);
            const P = this.options.attributeValueProcessor(S, N, y);
            P == null ? I[p] = N : typeof P != typeof N || P !== N ? I[p] = P : I[p] = z(
              N,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (I[p] = !0);
      }
      if (!Object.keys(I).length)
        return;
      if (this.options.attributesGroupName) {
        const F = {};
        return F[this.options.attributesGroupName] = I, F;
      }
      return I;
    }
  }
  const d = function(w) {
    w = w.replace(/\r\n?/g, `
`);
    const y = new r("!xml");
    let A = y, C = "", E = "";
    for (let I = 0; I < w.length; I++)
      if (w[I] === "<")
        if (w[I + 1] === "/") {
          const S = h(w, ">", I, "Closing Tag is not closed.");
          let N = w.substring(I + 2, S).trim();
          if (this.options.removeNSPrefix) {
            const J = N.indexOf(":");
            J !== -1 && (N = N.substr(J + 1));
          }
          this.options.transformTagName && (N = this.options.transformTagName(N)), A && (C = this.saveTextToParentTag(C, A, E));
          const p = E.substring(E.lastIndexOf(".") + 1);
          if (N && this.options.unpairedTags.indexOf(N) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${N}>`);
          let P = 0;
          p && this.options.unpairedTags.indexOf(p) !== -1 ? (P = E.lastIndexOf(".", E.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : P = E.lastIndexOf("."), E = E.substring(0, P), A = this.tagsNodeStack.pop(), C = "", I = S;
        } else if (w[I + 1] === "?") {
          let S = v(w, I, !1, "?>");
          if (!S) throw new Error("Pi Tag is not closed.");
          if (C = this.saveTextToParentTag(C, A, E), !(this.options.ignoreDeclaration && S.tagName === "?xml" || this.options.ignorePiTags)) {
            const N = new r(S.tagName);
            N.add(this.options.textNodeName, ""), S.tagName !== S.tagExp && S.attrExpPresent && (N[":@"] = this.buildAttributesMap(S.tagExp, E, S.tagName)), this.addChild(A, N, E);
          }
          I = S.closeIndex + 1;
        } else if (w.substr(I + 1, 3) === "!--") {
          const S = h(w, "-->", I + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const N = w.substring(I + 4, S - 2);
            C = this.saveTextToParentTag(C, A, E), A.add(this.options.commentPropName, [{ [this.options.textNodeName]: N }]);
          }
          I = S;
        } else if (w.substr(I + 1, 2) === "!D") {
          const S = t(w, I);
          this.docTypeEntities = S.entities, I = S.i;
        } else if (w.substr(I + 1, 2) === "![") {
          const S = h(w, "]]>", I, "CDATA is not closed.") - 2, N = w.substring(I + 9, S);
          C = this.saveTextToParentTag(C, A, E);
          let p = this.parseTextData(N, A.tagname, E, !0, !1, !0, !0);
          p == null && (p = ""), this.options.cdataPropName ? A.add(this.options.cdataPropName, [{ [this.options.textNodeName]: N }]) : A.add(this.options.textNodeName, p), I = S + 2;
        } else {
          let S = v(w, I, this.options.removeNSPrefix), N = S.tagName;
          const p = S.rawTagName;
          let P = S.tagExp, J = S.attrExpPresent, V = S.closeIndex;
          this.options.transformTagName && (N = this.options.transformTagName(N)), A && C && A.tagname !== "!xml" && (C = this.saveTextToParentTag(C, A, E, !1));
          const ie = A;
          if (ie && this.options.unpairedTags.indexOf(ie.tagname) !== -1 && (A = this.tagsNodeStack.pop(), E = E.substring(0, E.lastIndexOf("."))), N !== y.tagname && (E += E ? "." + N : N), this.isItStopNode(this.options.stopNodes, E, N)) {
            let L = "";
            if (P.length > 0 && P.lastIndexOf("/") === P.length - 1)
              N[N.length - 1] === "/" ? (N = N.substr(0, N.length - 1), E = E.substr(0, E.length - 1), P = N) : P = P.substr(0, P.length - 1), I = S.closeIndex;
            else if (this.options.unpairedTags.indexOf(N) !== -1)
              I = S.closeIndex;
            else {
              const B = this.readStopNodeData(w, p, V + 1);
              if (!B) throw new Error(`Unexpected end of ${p}`);
              I = B.i, L = B.tagContent;
            }
            const ee = new r(N);
            N !== P && J && (ee[":@"] = this.buildAttributesMap(P, E, N)), L && (L = this.parseTextData(L, N, E, !0, J, !0, !0)), E = E.substr(0, E.lastIndexOf(".")), ee.add(this.options.textNodeName, L), this.addChild(A, ee, E);
          } else {
            if (P.length > 0 && P.lastIndexOf("/") === P.length - 1) {
              N[N.length - 1] === "/" ? (N = N.substr(0, N.length - 1), E = E.substr(0, E.length - 1), P = N) : P = P.substr(0, P.length - 1), this.options.transformTagName && (N = this.options.transformTagName(N));
              const L = new r(N);
              N !== P && J && (L[":@"] = this.buildAttributesMap(P, E, N)), this.addChild(A, L, E), E = E.substr(0, E.lastIndexOf("."));
            } else {
              const L = new r(N);
              this.tagsNodeStack.push(A), N !== P && J && (L[":@"] = this.buildAttributesMap(P, E, N)), this.addChild(A, L, E), A = L;
            }
            C = "", I = V;
          }
        }
      else
        C += w[I];
    return y.child;
  };
  function _(w, y, A) {
    const C = this.options.updateTag(y.tagname, A, y[":@"]);
    C === !1 || (typeof C == "string" && (y.tagname = C), w.addChild(y));
  }
  const f = function(w) {
    if (this.options.processEntities) {
      for (let y in this.docTypeEntities) {
        const A = this.docTypeEntities[y];
        w = w.replace(A.regx, A.val);
      }
      for (let y in this.lastEntities) {
        const A = this.lastEntities[y];
        w = w.replace(A.regex, A.val);
      }
      if (this.options.htmlEntities)
        for (let y in this.htmlEntities) {
          const A = this.htmlEntities[y];
          w = w.replace(A.regex, A.val);
        }
      w = w.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return w;
  };
  function b(w, y, A, C) {
    return w && (C === void 0 && (C = y.child.length === 0), w = this.parseTextData(
      w,
      y.tagname,
      A,
      !1,
      y[":@"] ? Object.keys(y[":@"]).length !== 0 : !1,
      C
    ), w !== void 0 && w !== "" && y.add(this.options.textNodeName, w), w = ""), w;
  }
  function m(w, y, A) {
    const C = "*." + A;
    for (const E in w) {
      const I = w[E];
      if (C === I || y === I) return !0;
    }
    return !1;
  }
  function k(w, y, A = ">") {
    let C, E = "";
    for (let I = y; I < w.length; I++) {
      let F = w[I];
      if (C)
        F === C && (C = "");
      else if (F === '"' || F === "'")
        C = F;
      else if (F === A[0])
        if (A[1]) {
          if (w[I + 1] === A[1])
            return {
              data: E,
              index: I
            };
        } else
          return {
            data: E,
            index: I
          };
      else F === "	" && (F = " ");
      E += F;
    }
  }
  function h(w, y, A, C) {
    const E = w.indexOf(y, A);
    if (E === -1)
      throw new Error(C);
    return E + y.length - 1;
  }
  function v(w, y, A, C = ">") {
    const E = k(w, y + 1, C);
    if (!E) return;
    let I = E.data;
    const F = E.index, S = I.search(/\s/);
    let N = I, p = !0;
    S !== -1 && (N = I.substring(0, S), I = I.substring(S + 1).trimStart());
    const P = N;
    if (A) {
      const J = N.indexOf(":");
      J !== -1 && (N = N.substr(J + 1), p = N !== E.data.substr(J + 1));
    }
    return {
      tagName: N,
      tagExp: I,
      closeIndex: F,
      attrExpPresent: p,
      rawTagName: P
    };
  }
  function x(w, y, A) {
    const C = A;
    let E = 1;
    for (; A < w.length; A++)
      if (w[A] === "<")
        if (w[A + 1] === "/") {
          const I = h(w, ">", A, `${y} is not closed`);
          if (w.substring(A + 2, I).trim() === y && (E--, E === 0))
            return {
              tagContent: w.substring(C, A),
              i: I
            };
          A = I;
        } else if (w[A + 1] === "?")
          A = h(w, "?>", A + 1, "StopNode is not closed.");
        else if (w.substr(A + 1, 3) === "!--")
          A = h(w, "-->", A + 3, "StopNode is not closed.");
        else if (w.substr(A + 1, 2) === "![")
          A = h(w, "]]>", A, "StopNode is not closed.") - 2;
        else {
          const I = v(w, A, ">");
          I && ((I && I.tagName) === y && I.tagExp[I.tagExp.length - 1] !== "/" && E++, A = I.closeIndex);
        }
  }
  function z(w, y, A) {
    if (y && typeof w == "string") {
      const C = w.trim();
      return C === "true" ? !0 : C === "false" ? !1 : n(w, A);
    } else
      return e.isExist(w) ? w : "";
  }
  return nn = o, nn;
}
var on = {}, vi;
function Ws() {
  if (vi) return on;
  vi = 1;
  function e(o, s) {
    return r(o, s);
  }
  function r(o, s, a) {
    let c;
    const l = {};
    for (let u = 0; u < o.length; u++) {
      const d = o[u], _ = t(d);
      let f = "";
      if (a === void 0 ? f = _ : f = a + "." + _, _ === s.textNodeName)
        c === void 0 ? c = d[_] : c += "" + d[_];
      else {
        if (_ === void 0)
          continue;
        if (d[_]) {
          let b = r(d[_], s, f);
          const m = i(b, s);
          d[":@"] ? n(b, d[":@"], f, s) : Object.keys(b).length === 1 && b[s.textNodeName] !== void 0 && !s.alwaysCreateTextNode ? b = b[s.textNodeName] : Object.keys(b).length === 0 && (s.alwaysCreateTextNode ? b[s.textNodeName] = "" : b = ""), l[_] !== void 0 && l.hasOwnProperty(_) ? (Array.isArray(l[_]) || (l[_] = [l[_]]), l[_].push(b)) : s.isArray(_, f, m) ? l[_] = [b] : l[_] = b;
        }
      }
    }
    return typeof c == "string" ? c.length > 0 && (l[s.textNodeName] = c) : c !== void 0 && (l[s.textNodeName] = c), l;
  }
  function t(o) {
    const s = Object.keys(o);
    for (let a = 0; a < s.length; a++) {
      const c = s[a];
      if (c !== ":@") return c;
    }
  }
  function n(o, s, a, c) {
    if (s) {
      const l = Object.keys(s), u = l.length;
      for (let d = 0; d < u; d++) {
        const _ = l[d];
        c.isArray(_, a + "." + _, !0, !0) ? o[_] = [s[_]] : o[_] = s[_];
      }
    }
  }
  function i(o, s) {
    const { textNodeName: a } = s, c = Object.keys(o).length;
    return !!(c === 0 || c === 1 && (o[a] || typeof o[a] == "boolean" || o[a] === 0));
  }
  return on.prettify = e, on;
}
var an, wi;
function Hs() {
  if (wi) return an;
  wi = 1;
  const { buildOptions: e } = Ls(), r = Vs(), { prettify: t } = Ws(), n = Xo();
  class i {
    constructor(s) {
      this.externalEntities = {}, this.options = e(s);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(s, a) {
      if (typeof s != "string") if (s.toString)
        s = s.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (a) {
        a === !0 && (a = {});
        const u = n.validate(s, a);
        if (u !== !0)
          throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
      }
      const c = new r(this.options);
      c.addExternalEntities(this.externalEntities);
      const l = c.parseXml(s);
      return this.options.preserveOrder || l === void 0 ? l : t(l, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(s, a) {
      if (a.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (s.indexOf("&") !== -1 || s.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (a === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[s] = a;
    }
  }
  return an = i, an;
}
var sn, yi;
function Gs() {
  if (yi) return sn;
  yi = 1;
  const e = `
`;
  function r(a, c) {
    let l = "";
    return c.format && c.indentBy.length > 0 && (l = e), t(a, c, "", l);
  }
  function t(a, c, l, u) {
    let d = "", _ = !1;
    for (let f = 0; f < a.length; f++) {
      const b = a[f], m = n(b);
      if (m === void 0) continue;
      let k = "";
      if (l.length === 0 ? k = m : k = `${l}.${m}`, m === c.textNodeName) {
        let w = b[m];
        o(k, c) || (w = c.tagValueProcessor(m, w), w = s(w, c)), _ && (d += u), d += w, _ = !1;
        continue;
      } else if (m === c.cdataPropName) {
        _ && (d += u), d += `<![CDATA[${b[m][0][c.textNodeName]}]]>`, _ = !1;
        continue;
      } else if (m === c.commentPropName) {
        d += u + `<!--${b[m][0][c.textNodeName]}-->`, _ = !0;
        continue;
      } else if (m[0] === "?") {
        const w = i(b[":@"], c), y = m === "?xml" ? "" : u;
        let A = b[m][0][c.textNodeName];
        A = A.length !== 0 ? " " + A : "", d += y + `<${m}${A}${w}?>`, _ = !0;
        continue;
      }
      let h = u;
      h !== "" && (h += c.indentBy);
      const v = i(b[":@"], c), x = u + `<${m}${v}`, z = t(b[m], c, k, h);
      c.unpairedTags.indexOf(m) !== -1 ? c.suppressUnpairedNode ? d += x + ">" : d += x + "/>" : (!z || z.length === 0) && c.suppressEmptyNode ? d += x + "/>" : z && z.endsWith(">") ? d += x + `>${z}${u}</${m}>` : (d += x + ">", z && u !== "" && (z.includes("/>") || z.includes("</")) ? d += u + c.indentBy + z + u : d += z, d += `</${m}>`), _ = !0;
    }
    return d;
  }
  function n(a) {
    const c = Object.keys(a);
    for (let l = 0; l < c.length; l++) {
      const u = c[l];
      if (a.hasOwnProperty(u) && u !== ":@")
        return u;
    }
  }
  function i(a, c) {
    let l = "";
    if (a && !c.ignoreAttributes)
      for (let u in a) {
        if (!a.hasOwnProperty(u)) continue;
        let d = c.attributeValueProcessor(u, a[u]);
        d = s(d, c), d === !0 && c.suppressBooleanAttributes ? l += ` ${u.substr(c.attributeNamePrefix.length)}` : l += ` ${u.substr(c.attributeNamePrefix.length)}="${d}"`;
      }
    return l;
  }
  function o(a, c) {
    a = a.substr(0, a.length - c.textNodeName.length - 1);
    let l = a.substr(a.lastIndexOf(".") + 1);
    for (let u in c.stopNodes)
      if (c.stopNodes[u] === a || c.stopNodes[u] === "*." + l) return !0;
    return !1;
  }
  function s(a, c) {
    if (a && a.length > 0 && c.processEntities)
      for (let l = 0; l < c.entities.length; l++) {
        const u = c.entities[l];
        a = a.replace(u.regex, u.val);
      }
    return a;
  }
  return sn = r, sn;
}
var ln, xi;
function qs() {
  if (xi) return ln;
  xi = 1;
  const e = Gs(), r = Yo(), t = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(a, c) {
      return c;
    },
    attributeValueProcessor: function(a, c) {
      return c;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function n(a) {
    this.options = Object.assign({}, t, a), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = r(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = s), this.processTextOrObjNode = i, this.options.format ? (this.indentate = o, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  n.prototype.build = function(a) {
    return this.options.preserveOrder ? e(a, this.options) : (Array.isArray(a) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (a = {
      [this.options.arrayNodeName]: a
    }), this.j2x(a, 0, []).val);
  }, n.prototype.j2x = function(a, c, l) {
    let u = "", d = "";
    const _ = l.join(".");
    for (let f in a)
      if (Object.prototype.hasOwnProperty.call(a, f))
        if (typeof a[f] > "u")
          this.isAttribute(f) && (d += "");
        else if (a[f] === null)
          this.isAttribute(f) || f === this.options.cdataPropName ? d += "" : f[0] === "?" ? d += this.indentate(c) + "<" + f + "?" + this.tagEndChar : d += this.indentate(c) + "<" + f + "/" + this.tagEndChar;
        else if (a[f] instanceof Date)
          d += this.buildTextValNode(a[f], f, "", c);
        else if (typeof a[f] != "object") {
          const b = this.isAttribute(f);
          if (b && !this.ignoreAttributesFn(b, _))
            u += this.buildAttrPairStr(b, "" + a[f]);
          else if (!b)
            if (f === this.options.textNodeName) {
              let m = this.options.tagValueProcessor(f, "" + a[f]);
              d += this.replaceEntitiesValue(m);
            } else
              d += this.buildTextValNode(a[f], f, "", c);
        } else if (Array.isArray(a[f])) {
          const b = a[f].length;
          let m = "", k = "";
          for (let h = 0; h < b; h++) {
            const v = a[f][h];
            if (!(typeof v > "u")) if (v === null)
              f[0] === "?" ? d += this.indentate(c) + "<" + f + "?" + this.tagEndChar : d += this.indentate(c) + "<" + f + "/" + this.tagEndChar;
            else if (typeof v == "object")
              if (this.options.oneListGroup) {
                const x = this.j2x(v, c + 1, l.concat(f));
                m += x.val, this.options.attributesGroupName && v.hasOwnProperty(this.options.attributesGroupName) && (k += x.attrStr);
              } else
                m += this.processTextOrObjNode(v, f, c, l);
            else if (this.options.oneListGroup) {
              let x = this.options.tagValueProcessor(f, v);
              x = this.replaceEntitiesValue(x), m += x;
            } else
              m += this.buildTextValNode(v, f, "", c);
          }
          this.options.oneListGroup && (m = this.buildObjectNode(m, f, k, c)), d += m;
        } else if (this.options.attributesGroupName && f === this.options.attributesGroupName) {
          const b = Object.keys(a[f]), m = b.length;
          for (let k = 0; k < m; k++)
            u += this.buildAttrPairStr(b[k], "" + a[f][b[k]]);
        } else
          d += this.processTextOrObjNode(a[f], f, c, l);
    return { attrStr: u, val: d };
  }, n.prototype.buildAttrPairStr = function(a, c) {
    return c = this.options.attributeValueProcessor(a, "" + c), c = this.replaceEntitiesValue(c), this.options.suppressBooleanAttributes && c === "true" ? " " + a : " " + a + '="' + c + '"';
  };
  function i(a, c, l, u) {
    const d = this.j2x(a, l + 1, u.concat(c));
    return a[this.options.textNodeName] !== void 0 && Object.keys(a).length === 1 ? this.buildTextValNode(a[this.options.textNodeName], c, d.attrStr, l) : this.buildObjectNode(d.val, c, d.attrStr, l);
  }
  n.prototype.buildObjectNode = function(a, c, l, u) {
    if (a === "")
      return c[0] === "?" ? this.indentate(u) + "<" + c + l + "?" + this.tagEndChar : this.indentate(u) + "<" + c + l + this.closeTag(c) + this.tagEndChar;
    {
      let d = "</" + c + this.tagEndChar, _ = "";
      return c[0] === "?" && (_ = "?", d = ""), (l || l === "") && a.indexOf("<") === -1 ? this.indentate(u) + "<" + c + l + _ + ">" + a + d : this.options.commentPropName !== !1 && c === this.options.commentPropName && _.length === 0 ? this.indentate(u) + `<!--${a}-->` + this.newLine : this.indentate(u) + "<" + c + l + _ + this.tagEndChar + a + this.indentate(u) + d;
    }
  }, n.prototype.closeTag = function(a) {
    let c = "";
    return this.options.unpairedTags.indexOf(a) !== -1 ? this.options.suppressUnpairedNode || (c = "/") : this.options.suppressEmptyNode ? c = "/" : c = `></${a}`, c;
  }, n.prototype.buildTextValNode = function(a, c, l, u) {
    if (this.options.cdataPropName !== !1 && c === this.options.cdataPropName)
      return this.indentate(u) + `<![CDATA[${a}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && c === this.options.commentPropName)
      return this.indentate(u) + `<!--${a}-->` + this.newLine;
    if (c[0] === "?")
      return this.indentate(u) + "<" + c + l + "?" + this.tagEndChar;
    {
      let d = this.options.tagValueProcessor(c, a);
      return d = this.replaceEntitiesValue(d), d === "" ? this.indentate(u) + "<" + c + l + this.closeTag(c) + this.tagEndChar : this.indentate(u) + "<" + c + l + ">" + d + "</" + c + this.tagEndChar;
    }
  }, n.prototype.replaceEntitiesValue = function(a) {
    if (a && a.length > 0 && this.options.processEntities)
      for (let c = 0; c < this.options.entities.length; c++) {
        const l = this.options.entities[c];
        a = a.replace(l.regex, l.val);
      }
    return a;
  };
  function o(a) {
    return this.options.indentBy.repeat(a);
  }
  function s(a) {
    return a.startsWith(this.options.attributeNamePrefix) && a !== this.options.textNodeName ? a.substr(this.attrPrefixLen) : !1;
  }
  return ln = n, ln;
}
var cn, ki;
function Xs() {
  if (ki) return cn;
  ki = 1;
  const e = Xo(), r = Hs(), t = qs();
  return cn = {
    XMLParser: r,
    XMLValidator: e,
    XMLBuilder: t
  }, cn;
}
var Ys = Xs(), Wt = {}, Ei;
function Ks() {
  if (Ei) return Wt;
  Ei = 1, Wt.byteLength = a, Wt.toByteArray = l, Wt.fromByteArray = _;
  for (var e = [], r = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = n.length; i < o; ++i)
    e[i] = n[i], r[n.charCodeAt(i)] = i;
  r[45] = 62, r[95] = 63;
  function s(f) {
    var b = f.length;
    if (b % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var m = f.indexOf("=");
    m === -1 && (m = b);
    var k = m === b ? 0 : 4 - m % 4;
    return [m, k];
  }
  function a(f) {
    var b = s(f), m = b[0], k = b[1];
    return (m + k) * 3 / 4 - k;
  }
  function c(f, b, m) {
    return (b + m) * 3 / 4 - m;
  }
  function l(f) {
    var b, m = s(f), k = m[0], h = m[1], v = new t(c(f, k, h)), x = 0, z = h > 0 ? k - 4 : k, w;
    for (w = 0; w < z; w += 4)
      b = r[f.charCodeAt(w)] << 18 | r[f.charCodeAt(w + 1)] << 12 | r[f.charCodeAt(w + 2)] << 6 | r[f.charCodeAt(w + 3)], v[x++] = b >> 16 & 255, v[x++] = b >> 8 & 255, v[x++] = b & 255;
    return h === 2 && (b = r[f.charCodeAt(w)] << 2 | r[f.charCodeAt(w + 1)] >> 4, v[x++] = b & 255), h === 1 && (b = r[f.charCodeAt(w)] << 10 | r[f.charCodeAt(w + 1)] << 4 | r[f.charCodeAt(w + 2)] >> 2, v[x++] = b >> 8 & 255, v[x++] = b & 255), v;
  }
  function u(f) {
    return e[f >> 18 & 63] + e[f >> 12 & 63] + e[f >> 6 & 63] + e[f & 63];
  }
  function d(f, b, m) {
    for (var k, h = [], v = b; v < m; v += 3)
      k = (f[v] << 16 & 16711680) + (f[v + 1] << 8 & 65280) + (f[v + 2] & 255), h.push(u(k));
    return h.join("");
  }
  function _(f) {
    for (var b, m = f.length, k = m % 3, h = [], v = 16383, x = 0, z = m - k; x < z; x += v)
      h.push(d(f, x, x + v > z ? z : x + v));
    return k === 1 ? (b = f[m - 1], h.push(
      e[b >> 2] + e[b << 4 & 63] + "=="
    )) : k === 2 && (b = (f[m - 2] << 8) + f[m - 1], h.push(
      e[b >> 10] + e[b >> 4 & 63] + e[b << 2 & 63] + "="
    )), h.join("");
  }
  return Wt;
}
var Js = Ks();
const Qs = new Ys.XMLParser({
  preserveOrder: !0,
  ignoreDeclaration: !0,
  ignorePiTags: !0,
  parseTagValue: !1,
  cdataPropName: "#cdata"
}), yr = (e) => typeof e > "u" || e === null || e === "", In = (e) => {
  const r = Object.keys(e);
  if (r.length !== 1)
    throw new Error("An object must only contain a tag name and no properties.");
  const t = r[0], n = e[t]?.[0]?.["#text"];
  switch (t) {
    case "dict":
      const i = e[t]?.length;
      if (i === 0)
        return {};
      if (i > 1 && i % 2 === 1)
        throw new Error("Invalid dictionary.");
      const o = {};
      for (let a = 0; a < i; a += 2) {
        const c = e[t][a], l = e[t][a + 1];
        if (!c.hasOwnProperty("key"))
          throw new Error("Expected <key>");
        if (!l)
          throw new Error("Value missing for key inside <dict>");
        const u = c?.key?.[0]?.["#text"] || "";
        if (u === "__proto__")
          throw new Error("Attempted prototype pollution.");
        o[u] = In(l);
      }
      return o;
    case "array":
      return e[t]?.map(In);
    case "string":
      const s = e[t];
      return s.length === 0 ? "" : s.reduce((a, c) => (c.hasOwnProperty("#cdata") && (a += c["#cdata"].reduce((l, u) => l + u["#text"], "")), c.hasOwnProperty("#text") && (a += c["#text"]), a), "");
    case "integer":
      if (yr(n))
        throw new Error("Encountered empty <integer>");
      return n > Number.MAX_SAFE_INTEGER ? BigInt(n) : parseInt(n);
    case "real":
      if (yr(n))
        throw new Error("Encountered empty <real>");
      return parseFloat(n);
    case "data":
      return yr(n) ? new Uint8Array([]).buffer : Js.toByteArray(n.replace(/[\s\r\n\t]*/g, "")).buffer;
    case "date":
      if (yr(n))
        throw new Error("Encountered empty <date>");
      return new Date(n);
    case "true":
      return !0;
    case "false":
      return !1;
  }
  throw new Error("Invalid type.");
}, Ai = (e) => {
  const r = Qs.parse(e);
  if (!Array.isArray(r))
    throw new Error("Invalid XML.");
  const t = r.filter((i) => i.hasOwnProperty("plist"));
  if (t.length !== 1)
    throw new Error("The document must contain exactly one plist tag.");
  const n = t[0].plist;
  if (!Array.isArray(n))
    throw new Error("plist tag must contain objects.");
  if (n.length !== 1)
    throw new Error("plist tag must contain exactly one object.");
  return In(n[0]);
}, Si = /[A-Za-z0-9_$+\/:.-]/, el = /[A-Fa-f0-9]/, Ko = [" ", "	", `
`, "\r"], tl = (e) => JSON.parse(`"${e}"`), Ve = (e, r, t = !1) => {
  if ([, e] = _t(e), !e.startsWith(r)) {
    if (t)
      return [null, e];
    throw new Error(`Expected '${r}'`);
  }
  return e = e.substring(r.length), [, e] = _t(e), [r, e];
}, _t = (e) => {
  let r;
  for (; e.length > 0; ) {
    if (r)
      if (e.startsWith(r))
        e = e.substring(r.length), r = void 0;
      else {
        e = e.substring(1);
        continue;
      }
    const t = e.substring(0, 1);
    if (e = e.substring(1), !Ko.includes(t))
      switch (t) {
        case "/":
          switch (e.charAt(0)) {
            case "*":
              r = "*/";
              break;
            case "/":
              r = `
`;
              break;
            default:
              throw new Error("Unexpected '/'");
          }
          break;
        default:
          return [null, t + e];
      }
  }
  return [null, e];
}, Fr = (e) => {
  if ([, e] = _t(e), e.length === 0)
    return [null, ""];
  let r = null;
  const t = e.substring(0, 1);
  switch (e = e.substring(1), t) {
    case "{":
      if (r = {}, [, e] = _t(e), e.charAt(0) === "}") {
        [, e] = Ve(e, "}");
        break;
      }
      for (; e.charAt(0) !== "}"; ) {
        let i, o;
        if ([i, e] = Fr(e), typeof i != "string")
          throw new Error("Expected string key");
        if (i === "__proto__")
          throw new Error("Attempted prototype pollution");
        if ([, e] = Ve(e, "="), [o, e] = Fr(e), r[i] = o, [, e] = Ve(e, ";"), e.length === 0)
          throw new Error("No matching '}' found");
      }
      [, e] = Ve(e, "}");
      break;
    case "(":
      if (r = [], [, e] = _t(e), e.charAt(0) === ")") {
        [, e] = Ve(e, ")");
        break;
      }
      for (; e.charAt(0) !== ")"; ) {
        let i, o;
        if ([i, e] = Fr(e), r.push(i), [o, e] = Ve(e, ",", !0), !o)
          break;
        if (e.length === 0)
          throw new Error("No matching ')' found");
      }
      [, e] = Ve(e, ")");
      break;
    case "<":
      let n = "";
      if ([, e] = _t(e), e.charAt(0) === ">") {
        [, e] = Ve(e, ">");
        break;
      }
      for (; e.charAt(0) !== ">"; ) {
        const i = e.charAt(0);
        if (e = e.substring(1), el.test(i))
          n += i;
        else {
          if (Ko.includes(i))
            continue;
          throw new Error(`Unexpected '${i}'`);
        }
        if (e.length === 0)
          throw new Error("No matching '>' found");
      }
      if (n.length > 0) {
        if (n.length % 2 === 1)
          throw new Error("Data must contain hex digits grouped in pairs");
        const i = n.match(/../g);
        i !== null && (r = new Uint8Array(i.map((o) => parseInt(o, 16))).buffer);
      }
      [, e] = Ve(e, ">");
      break;
    case '"':
    case "'":
      for (r = ""; e.charAt(0) !== t; )
        if (r += e.charAt(0), e.charAt(0) === "\\" ? (r += e.charAt(1), e = e.substring(2)) : e = e.substring(1), e.length === 0)
          throw new Error(`No matching ${t} found`);
      r = tl(r), [, e] = Ve(e, t);
      break;
    default:
      if (!Si.test(t))
        throw new Error(`Unexpected '${t}'`);
      for (r = t; Si.test(e.charAt(0)) && (r += e.charAt(0), e = e.substring(1), e.length !== 0); )
        ;
  }
  return [, e] = _t(e), [r, e];
}, Ni = (e) => {
  const [r, t] = Fr(e);
  if (t.length > 0)
    throw new Error("Unexpected content at the end of file");
  if (typeof r > "u")
    throw new Error("Parsing failed");
  return r;
}, rl = /^[\u0000-\u007f]*$/, Pr = new TextDecoder("utf-8"), Jo = (e) => {
  if (typeof e == "string") {
    if (e.startsWith(It))
      return rt.BINARY;
    const r = e.substring(0, 16).replace(/[\s\t\n\r]+/g, "");
    if (r.startsWith("<?xml") || r.startsWith("<plist"))
      return rt.XML;
    if (e.trimStart().startsWith(zs) || rl.test(r))
      return rt.OPENSTEP;
    throw new Error("Unknown format");
  } else {
    const r = e.slice(0, It.length);
    return Pr.decode(r) === It ? rt.BINARY : Jo(Pr.decode(e.slice(0, 16)));
  }
}, nl = (e) => {
  switch (Jo(e)) {
    case rt.BINARY:
      if (typeof e == "string")
        throw new Error("Binary plists must be passed as ArrayBuffer");
      return Bs(e);
    case rt.XML:
      return e instanceof ArrayBuffer ? Ai(Pr.decode(e)) : Ai(e);
    case rt.OPENSTEP:
      return e instanceof ArrayBuffer ? Ni(Pr.decode(e)) : Ni(e);
  }
  throw new Error("Unsupported format");
};
const il = 4, zi = 0, Ii = 1, ol = 2;
function $t(e) {
  let r = e.length;
  for (; --r >= 0; )
    e[r] = 0;
}
const al = 0, Qo = 1, sl = 2, ll = 3, cl = 258, Wn = 29, hr = 256, nr = hr + 1 + Wn, Ct = 30, Hn = 19, ea = 2 * nr + 1, gt = 15, un = 16, ul = 7, Gn = 256, ta = 16, ra = 17, na = 18, Tn = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Rr = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), fl = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), ia = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), hl = 512, et = new Array((nr + 2) * 2);
$t(et);
const Kt = new Array(Ct * 2);
$t(Kt);
const ir = new Array(hl);
$t(ir);
const or = new Array(cl - ll + 1);
$t(or);
const qn = new Array(Wn);
$t(qn);
const Zr = new Array(Ct);
$t(Zr);
function fn(e, r, t, n, i) {
  this.static_tree = e, this.extra_bits = r, this.extra_base = t, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
}
let oa, aa, sa;
function hn(e, r) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = r;
}
const la = (e) => e < 256 ? ir[e] : ir[256 + (e >>> 7)], ar = (e, r) => {
  e.pending_buf[e.pending++] = r & 255, e.pending_buf[e.pending++] = r >>> 8 & 255;
}, Te = (e, r, t) => {
  e.bi_valid > un - t ? (e.bi_buf |= r << e.bi_valid & 65535, ar(e, e.bi_buf), e.bi_buf = r >> un - e.bi_valid, e.bi_valid += t - un) : (e.bi_buf |= r << e.bi_valid & 65535, e.bi_valid += t);
}, Ge = (e, r, t) => {
  Te(
    e,
    t[r * 2],
    t[r * 2 + 1]
    /*.Len*/
  );
}, ca = (e, r) => {
  let t = 0;
  do
    t |= e & 1, e >>>= 1, t <<= 1;
  while (--r > 0);
  return t >>> 1;
}, dl = (e) => {
  e.bi_valid === 16 ? (ar(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, pl = (e, r) => {
  const t = r.dyn_tree, n = r.max_code, i = r.stat_desc.static_tree, o = r.stat_desc.has_stree, s = r.stat_desc.extra_bits, a = r.stat_desc.extra_base, c = r.stat_desc.max_length;
  let l, u, d, _, f, b, m = 0;
  for (_ = 0; _ <= gt; _++)
    e.bl_count[_] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, l = e.heap_max + 1; l < ea; l++)
    u = e.heap[l], _ = t[t[u * 2 + 1] * 2 + 1] + 1, _ > c && (_ = c, m++), t[u * 2 + 1] = _, !(u > n) && (e.bl_count[_]++, f = 0, u >= a && (f = s[u - a]), b = t[u * 2], e.opt_len += b * (_ + f), o && (e.static_len += b * (i[u * 2 + 1] + f)));
  if (m !== 0) {
    do {
      for (_ = c - 1; e.bl_count[_] === 0; )
        _--;
      e.bl_count[_]--, e.bl_count[_ + 1] += 2, e.bl_count[c]--, m -= 2;
    } while (m > 0);
    for (_ = c; _ !== 0; _--)
      for (u = e.bl_count[_]; u !== 0; )
        d = e.heap[--l], !(d > n) && (t[d * 2 + 1] !== _ && (e.opt_len += (_ - t[d * 2 + 1]) * t[d * 2], t[d * 2 + 1] = _), u--);
  }
}, ua = (e, r, t) => {
  const n = new Array(gt + 1);
  let i = 0, o, s;
  for (o = 1; o <= gt; o++)
    i = i + t[o - 1] << 1, n[o] = i;
  for (s = 0; s <= r; s++) {
    let a = e[s * 2 + 1];
    a !== 0 && (e[s * 2] = ca(n[a]++, a));
  }
}, _l = () => {
  let e, r, t, n, i;
  const o = new Array(gt + 1);
  for (t = 0, n = 0; n < Wn - 1; n++)
    for (qn[n] = t, e = 0; e < 1 << Tn[n]; e++)
      or[t++] = n;
  for (or[t - 1] = n, i = 0, n = 0; n < 16; n++)
    for (Zr[n] = i, e = 0; e < 1 << Rr[n]; e++)
      ir[i++] = n;
  for (i >>= 7; n < Ct; n++)
    for (Zr[n] = i << 7, e = 0; e < 1 << Rr[n] - 7; e++)
      ir[256 + i++] = n;
  for (r = 0; r <= gt; r++)
    o[r] = 0;
  for (e = 0; e <= 143; )
    et[e * 2 + 1] = 8, e++, o[8]++;
  for (; e <= 255; )
    et[e * 2 + 1] = 9, e++, o[9]++;
  for (; e <= 279; )
    et[e * 2 + 1] = 7, e++, o[7]++;
  for (; e <= 287; )
    et[e * 2 + 1] = 8, e++, o[8]++;
  for (ua(et, nr + 1, o), e = 0; e < Ct; e++)
    Kt[e * 2 + 1] = 5, Kt[e * 2] = ca(e, 5);
  oa = new fn(et, Tn, hr + 1, nr, gt), aa = new fn(Kt, Rr, 0, Ct, gt), sa = new fn(new Array(0), fl, 0, Hn, ul);
}, fa = (e) => {
  let r;
  for (r = 0; r < nr; r++)
    e.dyn_ltree[r * 2] = 0;
  for (r = 0; r < Ct; r++)
    e.dyn_dtree[r * 2] = 0;
  for (r = 0; r < Hn; r++)
    e.bl_tree[r * 2] = 0;
  e.dyn_ltree[Gn * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, ha = (e) => {
  e.bi_valid > 8 ? ar(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Ti = (e, r, t, n) => {
  const i = r * 2, o = t * 2;
  return e[i] < e[o] || e[i] === e[o] && n[r] <= n[t];
}, dn = (e, r, t) => {
  const n = e.heap[t];
  let i = t << 1;
  for (; i <= e.heap_len && (i < e.heap_len && Ti(r, e.heap[i + 1], e.heap[i], e.depth) && i++, !Ti(r, n, e.heap[i], e.depth)); )
    e.heap[t] = e.heap[i], t = i, i <<= 1;
  e.heap[t] = n;
}, Ci = (e, r, t) => {
  let n, i, o = 0, s, a;
  if (e.sym_next !== 0)
    do
      n = e.pending_buf[e.sym_buf + o++] & 255, n += (e.pending_buf[e.sym_buf + o++] & 255) << 8, i = e.pending_buf[e.sym_buf + o++], n === 0 ? Ge(e, i, r) : (s = or[i], Ge(e, s + hr + 1, r), a = Tn[s], a !== 0 && (i -= qn[s], Te(e, i, a)), n--, s = la(n), Ge(e, s, t), a = Rr[s], a !== 0 && (n -= Zr[s], Te(e, n, a)));
    while (o < e.sym_next);
  Ge(e, Gn, r);
}, Cn = (e, r) => {
  const t = r.dyn_tree, n = r.stat_desc.static_tree, i = r.stat_desc.has_stree, o = r.stat_desc.elems;
  let s, a, c = -1, l;
  for (e.heap_len = 0, e.heap_max = ea, s = 0; s < o; s++)
    t[s * 2] !== 0 ? (e.heap[++e.heap_len] = c = s, e.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    l = e.heap[++e.heap_len] = c < 2 ? ++c : 0, t[l * 2] = 1, e.depth[l] = 0, e.opt_len--, i && (e.static_len -= n[l * 2 + 1]);
  for (r.max_code = c, s = e.heap_len >> 1; s >= 1; s--)
    dn(e, t, s);
  l = o;
  do
    s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], dn(
      e,
      t,
      1
      /*SMALLEST*/
    ), a = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = s, e.heap[--e.heap_max] = a, t[l * 2] = t[s * 2] + t[a * 2], e.depth[l] = (e.depth[s] >= e.depth[a] ? e.depth[s] : e.depth[a]) + 1, t[s * 2 + 1] = t[a * 2 + 1] = l, e.heap[
      1
      /*SMALLEST*/
    ] = l++, dn(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], pl(e, r), ua(t, c, e.bl_count);
}, Oi = (e, r, t) => {
  let n, i = -1, o, s = r[1], a = 0, c = 7, l = 4;
  for (s === 0 && (c = 138, l = 3), r[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++)
    o = s, s = r[(n + 1) * 2 + 1], !(++a < c && o === s) && (a < l ? e.bl_tree[o * 2] += a : o !== 0 ? (o !== i && e.bl_tree[o * 2]++, e.bl_tree[ta * 2]++) : a <= 10 ? e.bl_tree[ra * 2]++ : e.bl_tree[na * 2]++, a = 0, i = o, s === 0 ? (c = 138, l = 3) : o === s ? (c = 6, l = 3) : (c = 7, l = 4));
}, Fi = (e, r, t) => {
  let n, i = -1, o, s = r[1], a = 0, c = 7, l = 4;
  for (s === 0 && (c = 138, l = 3), n = 0; n <= t; n++)
    if (o = s, s = r[(n + 1) * 2 + 1], !(++a < c && o === s)) {
      if (a < l)
        do
          Ge(e, o, e.bl_tree);
        while (--a !== 0);
      else o !== 0 ? (o !== i && (Ge(e, o, e.bl_tree), a--), Ge(e, ta, e.bl_tree), Te(e, a - 3, 2)) : a <= 10 ? (Ge(e, ra, e.bl_tree), Te(e, a - 3, 3)) : (Ge(e, na, e.bl_tree), Te(e, a - 11, 7));
      a = 0, i = o, s === 0 ? (c = 138, l = 3) : o === s ? (c = 6, l = 3) : (c = 7, l = 4);
    }
}, gl = (e) => {
  let r;
  for (Oi(e, e.dyn_ltree, e.l_desc.max_code), Oi(e, e.dyn_dtree, e.d_desc.max_code), Cn(e, e.bl_desc), r = Hn - 1; r >= 3 && e.bl_tree[ia[r] * 2 + 1] === 0; r--)
    ;
  return e.opt_len += 3 * (r + 1) + 5 + 5 + 4, r;
}, ml = (e, r, t, n) => {
  let i;
  for (Te(e, r - 257, 5), Te(e, t - 1, 5), Te(e, n - 4, 4), i = 0; i < n; i++)
    Te(e, e.bl_tree[ia[i] * 2 + 1], 3);
  Fi(e, e.dyn_ltree, r - 1), Fi(e, e.dyn_dtree, t - 1);
}, bl = (e) => {
  let r = 4093624447, t;
  for (t = 0; t <= 31; t++, r >>>= 1)
    if (r & 1 && e.dyn_ltree[t * 2] !== 0)
      return zi;
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0)
    return Ii;
  for (t = 32; t < hr; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return Ii;
  return zi;
};
let Ri = !1;
const vl = (e) => {
  Ri || (_l(), Ri = !0), e.l_desc = new hn(e.dyn_ltree, oa), e.d_desc = new hn(e.dyn_dtree, aa), e.bl_desc = new hn(e.bl_tree, sa), e.bi_buf = 0, e.bi_valid = 0, fa(e);
}, da = (e, r, t, n) => {
  Te(e, (al << 1) + (n ? 1 : 0), 3), ha(e), ar(e, t), ar(e, ~t), t && e.pending_buf.set(e.window.subarray(r, r + t), e.pending), e.pending += t;
}, wl = (e) => {
  Te(e, Qo << 1, 3), Ge(e, Gn, et), dl(e);
}, yl = (e, r, t, n) => {
  let i, o, s = 0;
  e.level > 0 ? (e.strm.data_type === ol && (e.strm.data_type = bl(e)), Cn(e, e.l_desc), Cn(e, e.d_desc), s = gl(e), i = e.opt_len + 3 + 7 >>> 3, o = e.static_len + 3 + 7 >>> 3, o <= i && (i = o)) : i = o = t + 5, t + 4 <= i && r !== -1 ? da(e, r, t, n) : e.strategy === il || o === i ? (Te(e, (Qo << 1) + (n ? 1 : 0), 3), Ci(e, et, Kt)) : (Te(e, (sl << 1) + (n ? 1 : 0), 3), ml(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), Ci(e, e.dyn_ltree, e.dyn_dtree)), fa(e), n && ha(e);
}, xl = (e, r, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = r, e.pending_buf[e.sym_buf + e.sym_next++] = r >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, r === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, r--, e.dyn_ltree[(or[t] + hr + 1) * 2]++, e.dyn_dtree[la(r) * 2]++), e.sym_next === e.sym_end);
var kl = vl, El = da, Al = yl, Sl = xl, Nl = wl, zl = {
  _tr_init: kl,
  _tr_stored_block: El,
  _tr_flush_block: Al,
  _tr_tally: Sl,
  _tr_align: Nl
};
const Il = (e, r, t, n) => {
  let i = e & 65535 | 0, o = e >>> 16 & 65535 | 0, s = 0;
  for (; t !== 0; ) {
    s = t > 2e3 ? 2e3 : t, t -= s;
    do
      i = i + r[n++] | 0, o = o + i | 0;
    while (--s);
    i %= 65521, o %= 65521;
  }
  return i | o << 16 | 0;
};
var sr = Il;
const Tl = () => {
  let e, r = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var n = 0; n < 8; n++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    r[t] = e;
  }
  return r;
}, Cl = new Uint32Array(Tl()), Ol = (e, r, t, n) => {
  const i = Cl, o = n + t;
  e ^= -1;
  for (let s = n; s < o; s++)
    e = e >>> 8 ^ i[(e ^ r[s]) & 255];
  return e ^ -1;
};
var Ae = Ol, vt = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, dr = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: Fl, _tr_stored_block: On, _tr_flush_block: Rl, _tr_tally: ot, _tr_align: Pl } = zl, {
  Z_NO_FLUSH: at,
  Z_PARTIAL_FLUSH: Zl,
  Z_FULL_FLUSH: $l,
  Z_FINISH: Ue,
  Z_BLOCK: Pi,
  Z_OK: Ne,
  Z_STREAM_END: Zi,
  Z_STREAM_ERROR: qe,
  Z_DATA_ERROR: Ul,
  Z_BUF_ERROR: pn,
  Z_DEFAULT_COMPRESSION: Bl,
  Z_FILTERED: Ll,
  Z_HUFFMAN_ONLY: xr,
  Z_RLE: Dl,
  Z_FIXED: jl,
  Z_DEFAULT_STRATEGY: Ml,
  Z_UNKNOWN: Vl,
  Z_DEFLATED: Mr
} = dr, Wl = 9, Hl = 15, Gl = 8, ql = 29, Xl = 256, Fn = Xl + 1 + ql, Yl = 30, Kl = 19, Jl = 2 * Fn + 1, Ql = 15, le = 3, it = 258, Xe = it + le + 1, ec = 32, Ft = 42, Xn = 57, Rn = 69, Pn = 73, Zn = 91, $n = 103, mt = 113, Xt = 666, Ie = 1, Ut = 2, wt = 3, Bt = 4, tc = 3, bt = (e, r) => (e.msg = vt[r], r), $i = (e) => e * 2 - (e > 4 ? 9 : 0), nt = (e) => {
  let r = e.length;
  for (; --r >= 0; )
    e[r] = 0;
}, rc = (e) => {
  let r, t, n, i = e.w_size;
  r = e.hash_size, n = r;
  do
    t = e.head[--n], e.head[n] = t >= i ? t - i : 0;
  while (--r);
  r = i, n = r;
  do
    t = e.prev[--n], e.prev[n] = t >= i ? t - i : 0;
  while (--r);
};
let nc = (e, r, t) => (r << e.hash_shift ^ t) & e.hash_mask, st = nc;
const Re = (e) => {
  const r = e.state;
  let t = r.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(r.pending_buf.subarray(r.pending_out, r.pending_out + t), e.next_out), e.next_out += t, r.pending_out += t, e.total_out += t, e.avail_out -= t, r.pending -= t, r.pending === 0 && (r.pending_out = 0));
}, Pe = (e, r) => {
  Rl(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r), e.block_start = e.strstart, Re(e.strm);
}, fe = (e, r) => {
  e.pending_buf[e.pending++] = r;
}, Ht = (e, r) => {
  e.pending_buf[e.pending++] = r >>> 8 & 255, e.pending_buf[e.pending++] = r & 255;
}, Un = (e, r, t, n) => {
  let i = e.avail_in;
  return i > n && (i = n), i === 0 ? 0 : (e.avail_in -= i, r.set(e.input.subarray(e.next_in, e.next_in + i), t), e.state.wrap === 1 ? e.adler = sr(e.adler, r, i, t) : e.state.wrap === 2 && (e.adler = Ae(e.adler, r, i, t)), e.next_in += i, e.total_in += i, i);
}, pa = (e, r) => {
  let t = e.max_chain_length, n = e.strstart, i, o, s = e.prev_length, a = e.nice_match;
  const c = e.strstart > e.w_size - Xe ? e.strstart - (e.w_size - Xe) : 0, l = e.window, u = e.w_mask, d = e.prev, _ = e.strstart + it;
  let f = l[n + s - 1], b = l[n + s];
  e.prev_length >= e.good_match && (t >>= 2), a > e.lookahead && (a = e.lookahead);
  do
    if (i = r, !(l[i + s] !== b || l[i + s - 1] !== f || l[i] !== l[n] || l[++i] !== l[n + 1])) {
      n += 2, i++;
      do
        ;
      while (l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && n < _);
      if (o = it - (_ - n), n = _ - it, o > s) {
        if (e.match_start = r, s = o, o >= a)
          break;
        f = l[n + s - 1], b = l[n + s];
      }
    }
  while ((r = d[r & u]) > c && --t !== 0);
  return s <= e.lookahead ? s : e.lookahead;
}, Rt = (e) => {
  const r = e.w_size;
  let t, n, i;
  do {
    if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= r + (r - Xe) && (e.window.set(e.window.subarray(r, r + r - n), 0), e.match_start -= r, e.strstart -= r, e.block_start -= r, e.insert > e.strstart && (e.insert = e.strstart), rc(e), n += r), e.strm.avail_in === 0)
      break;
    if (t = Un(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= le)
      for (i = e.strstart - e.insert, e.ins_h = e.window[i], e.ins_h = st(e, e.ins_h, e.window[i + 1]); e.insert && (e.ins_h = st(e, e.ins_h, e.window[i + le - 1]), e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++, e.insert--, !(e.lookahead + e.insert < le)); )
        ;
  } while (e.lookahead < Xe && e.strm.avail_in !== 0);
}, _a = (e, r) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, n, i, o, s = 0, a = e.strm.avail_in;
  do {
    if (n = 65535, o = e.bi_valid + 42 >> 3, e.strm.avail_out < o || (o = e.strm.avail_out - o, i = e.strstart - e.block_start, n > i + e.strm.avail_in && (n = i + e.strm.avail_in), n > o && (n = o), n < t && (n === 0 && r !== Ue || r === at || n !== i + e.strm.avail_in)))
      break;
    s = r === Ue && n === i + e.strm.avail_in ? 1 : 0, On(e, 0, 0, s), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, Re(e.strm), i && (i > n && (i = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, n -= i), n && (Un(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n);
  } while (s === 0);
  return a -= e.strm.avail_in, a && (a >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= a && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in), e.strstart), e.strstart += a, e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), s ? Bt : r !== at && r !== Ue && e.strm.avail_in === 0 && e.strstart === e.block_start ? Ut : (o = e.window_size - e.strstart, e.strm.avail_in > o && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, o += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), o > e.strm.avail_in && (o = e.strm.avail_in), o && (Un(e.strm, e.window, e.strstart, o), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.high_water < e.strstart && (e.high_water = e.strstart), o = e.bi_valid + 42 >> 3, o = e.pending_buf_size - o > 65535 ? 65535 : e.pending_buf_size - o, t = o > e.w_size ? e.w_size : o, i = e.strstart - e.block_start, (i >= t || (i || r === Ue) && r !== at && e.strm.avail_in === 0 && i <= o) && (n = i > o ? o : i, s = r === Ue && e.strm.avail_in === 0 && n === i ? 1 : 0, On(e, e.block_start, n, s), e.block_start += n, Re(e.strm)), s ? wt : Ie);
}, _n = (e, r) => {
  let t, n;
  for (; ; ) {
    if (e.lookahead < Xe) {
      if (Rt(e), e.lookahead < Xe && r === at)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= le && (e.ins_h = st(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), t !== 0 && e.strstart - t <= e.w_size - Xe && (e.match_length = pa(e, t)), e.match_length >= le)
      if (n = ot(e, e.strstart - e.match_start, e.match_length - le), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= le) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = st(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = st(e, e.ins_h, e.window[e.strstart + 1]);
    else
      n = ot(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (n && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = e.strstart < le - 1 ? e.strstart : le - 1, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? wt : Bt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Ut;
}, At = (e, r) => {
  let t, n, i;
  for (; ; ) {
    if (e.lookahead < Xe) {
      if (Rt(e), e.lookahead < Xe && r === at)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= le && (e.ins_h = st(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = le - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Xe && (e.match_length = pa(e, t), e.match_length <= 5 && (e.strategy === Ll || e.match_length === le && e.strstart - e.match_start > 4096) && (e.match_length = le - 1)), e.prev_length >= le && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - le, n = ot(e, e.strstart - 1 - e.prev_match, e.prev_length - le), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= i && (e.ins_h = st(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = le - 1, e.strstart++, n && (Pe(e, !1), e.strm.avail_out === 0))
        return Ie;
    } else if (e.match_available) {
      if (n = ot(e, 0, e.window[e.strstart - 1]), n && Pe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Ie;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (n = ot(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < le - 1 ? e.strstart : le - 1, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? wt : Bt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Ut;
}, ic = (e, r) => {
  let t, n, i, o;
  const s = e.window;
  for (; ; ) {
    if (e.lookahead <= it) {
      if (Rt(e), e.lookahead <= it && r === at)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= le && e.strstart > 0 && (i = e.strstart - 1, n = s[i], n === s[++i] && n === s[++i] && n === s[++i])) {
      o = e.strstart + it;
      do
        ;
      while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < o);
      e.match_length = it - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= le ? (t = ot(e, 1, e.match_length - le), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = ot(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = 0, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? wt : Bt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Ut;
}, oc = (e, r) => {
  let t;
  for (; ; ) {
    if (e.lookahead === 0 && (Rt(e), e.lookahead === 0)) {
      if (r === at)
        return Ie;
      break;
    }
    if (e.match_length = 0, t = ot(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = 0, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? wt : Bt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Ut;
};
function We(e, r, t, n, i) {
  this.good_length = e, this.max_lazy = r, this.nice_length = t, this.max_chain = n, this.func = i;
}
const Yt = [
  /*      good lazy nice chain */
  new We(0, 0, 0, 0, _a),
  /* 0 store only */
  new We(4, 4, 8, 4, _n),
  /* 1 max speed, no lazy matches */
  new We(4, 5, 16, 8, _n),
  /* 2 */
  new We(4, 6, 32, 32, _n),
  /* 3 */
  new We(4, 4, 16, 16, At),
  /* 4 lazy matches */
  new We(8, 16, 32, 32, At),
  /* 5 */
  new We(8, 16, 128, 128, At),
  /* 6 */
  new We(8, 32, 128, 256, At),
  /* 7 */
  new We(32, 128, 258, 1024, At),
  /* 8 */
  new We(32, 258, 258, 4096, At)
  /* 9 max compression */
], ac = (e) => {
  e.window_size = 2 * e.w_size, nt(e.head), e.max_lazy_match = Yt[e.level].max_lazy, e.good_match = Yt[e.level].good_length, e.nice_match = Yt[e.level].nice_length, e.max_chain_length = Yt[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = le - 1, e.match_available = 0, e.ins_h = 0;
};
function sc() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Mr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Jl * 2), this.dyn_dtree = new Uint16Array((2 * Yl + 1) * 2), this.bl_tree = new Uint16Array((2 * Kl + 1) * 2), nt(this.dyn_ltree), nt(this.dyn_dtree), nt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Ql + 1), this.heap = new Uint16Array(2 * Fn + 1), nt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Fn + 1), nt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const pr = (e) => {
  if (!e)
    return 1;
  const r = e.state;
  return !r || r.strm !== e || r.status !== Ft && //#ifdef GZIP
  r.status !== Xn && //#endif
  r.status !== Rn && r.status !== Pn && r.status !== Zn && r.status !== $n && r.status !== mt && r.status !== Xt ? 1 : 0;
}, ga = (e) => {
  if (pr(e))
    return bt(e, qe);
  e.total_in = e.total_out = 0, e.data_type = Vl;
  const r = e.state;
  return r.pending = 0, r.pending_out = 0, r.wrap < 0 && (r.wrap = -r.wrap), r.status = //#ifdef GZIP
  r.wrap === 2 ? Xn : (
    //#endif
    r.wrap ? Ft : mt
  ), e.adler = r.wrap === 2 ? 0 : 1, r.last_flush = -2, Fl(r), Ne;
}, ma = (e) => {
  const r = ga(e);
  return r === Ne && ac(e.state), r;
}, lc = (e, r) => pr(e) || e.state.wrap !== 2 ? qe : (e.state.gzhead = r, Ne), ba = (e, r, t, n, i, o) => {
  if (!e)
    return qe;
  let s = 1;
  if (r === Bl && (r = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), i < 1 || i > Wl || t !== Mr || n < 8 || n > 15 || r < 0 || r > 9 || o < 0 || o > jl || n === 8 && s !== 1)
    return bt(e, qe);
  n === 8 && (n = 9);
  const a = new sc();
  return e.state = a, a.strm = e, a.status = Ft, a.wrap = s, a.gzhead = null, a.w_bits = n, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = i + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + le - 1) / le), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << i + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = r, a.strategy = o, a.method = t, ma(e);
}, cc = (e, r) => ba(e, r, Mr, Hl, Gl, Ml), uc = (e, r) => {
  if (pr(e) || r > Pi || r < 0)
    return e ? bt(e, qe) : qe;
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === Xt && r !== Ue)
    return bt(e, e.avail_out === 0 ? pn : qe);
  const n = t.last_flush;
  if (t.last_flush = r, t.pending !== 0) {
    if (Re(e), e.avail_out === 0)
      return t.last_flush = -1, Ne;
  } else if (e.avail_in === 0 && $i(r) <= $i(n) && r !== Ue)
    return bt(e, pn);
  if (t.status === Xt && e.avail_in !== 0)
    return bt(e, pn);
  if (t.status === Ft && t.wrap === 0 && (t.status = mt), t.status === Ft) {
    let i = Mr + (t.w_bits - 8 << 4) << 8, o = -1;
    if (t.strategy >= xr || t.level < 2 ? o = 0 : t.level < 6 ? o = 1 : t.level === 6 ? o = 2 : o = 3, i |= o << 6, t.strstart !== 0 && (i |= ec), i += 31 - i % 31, Ht(t, i), t.strstart !== 0 && (Ht(t, e.adler >>> 16), Ht(t, e.adler & 65535)), e.adler = 1, t.status = mt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (t.status === Xn) {
    if (e.adler = 0, fe(t, 31), fe(t, 139), fe(t, 8), t.gzhead)
      fe(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), fe(t, t.gzhead.time & 255), fe(t, t.gzhead.time >> 8 & 255), fe(t, t.gzhead.time >> 16 & 255), fe(t, t.gzhead.time >> 24 & 255), fe(t, t.level === 9 ? 2 : t.strategy >= xr || t.level < 2 ? 4 : 0), fe(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (fe(t, t.gzhead.extra.length & 255), fe(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = Ae(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = Rn;
    else if (fe(t, 0), fe(t, 0), fe(t, 0), fe(t, 0), fe(t, 0), fe(t, t.level === 9 ? 2 : t.strategy >= xr || t.level < 2 ? 4 : 0), fe(t, tc), t.status = mt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (t.status === Rn) {
    if (t.gzhead.extra) {
      let i = t.pending, o = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + o > t.pending_buf_size; ) {
        let a = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex += a, Re(e), t.pending !== 0)
          return t.last_flush = -1, Ne;
        i = 0, o -= a;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending += o, t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = Pn;
  }
  if (t.status === Pn) {
    if (t.gzhead.name) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i)), Re(e), t.pending !== 0)
            return t.last_flush = -1, Ne;
          i = 0;
        }
        t.gzindex < t.gzhead.name.length ? o = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : o = 0, fe(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = Zn;
  }
  if (t.status === Zn) {
    if (t.gzhead.comment) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i)), Re(e), t.pending !== 0)
            return t.last_flush = -1, Ne;
          i = 0;
        }
        t.gzindex < t.gzhead.comment.length ? o = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : o = 0, fe(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (e.adler = Ae(e.adler, t.pending_buf, t.pending - i, i));
    }
    t.status = $n;
  }
  if (t.status === $n) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Re(e), t.pending !== 0))
        return t.last_flush = -1, Ne;
      fe(t, e.adler & 255), fe(t, e.adler >> 8 & 255), e.adler = 0;
    }
    if (t.status = mt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || r !== at && t.status !== Xt) {
    let i = t.level === 0 ? _a(t, r) : t.strategy === xr ? oc(t, r) : t.strategy === Dl ? ic(t, r) : Yt[t.level].func(t, r);
    if ((i === wt || i === Bt) && (t.status = Xt), i === Ie || i === wt)
      return e.avail_out === 0 && (t.last_flush = -1), Ne;
    if (i === Ut && (r === Zl ? Pl(t) : r !== Pi && (On(t, 0, 0, !1), r === $l && (nt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Re(e), e.avail_out === 0))
      return t.last_flush = -1, Ne;
  }
  return r !== Ue ? Ne : t.wrap <= 0 ? Zi : (t.wrap === 2 ? (fe(t, e.adler & 255), fe(t, e.adler >> 8 & 255), fe(t, e.adler >> 16 & 255), fe(t, e.adler >> 24 & 255), fe(t, e.total_in & 255), fe(t, e.total_in >> 8 & 255), fe(t, e.total_in >> 16 & 255), fe(t, e.total_in >> 24 & 255)) : (Ht(t, e.adler >>> 16), Ht(t, e.adler & 65535)), Re(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? Ne : Zi);
}, fc = (e) => {
  if (pr(e))
    return qe;
  const r = e.state.status;
  return e.state = null, r === mt ? bt(e, Ul) : Ne;
}, hc = (e, r) => {
  let t = r.length;
  if (pr(e))
    return qe;
  const n = e.state, i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Ft || n.lookahead)
    return qe;
  if (i === 1 && (e.adler = sr(e.adler, r, t, 0)), n.wrap = 0, t >= n.w_size) {
    i === 0 && (nt(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let c = new Uint8Array(n.w_size);
    c.set(r.subarray(t - n.w_size, t), 0), r = c, t = n.w_size;
  }
  const o = e.avail_in, s = e.next_in, a = e.input;
  for (e.avail_in = t, e.next_in = 0, e.input = r, Rt(n); n.lookahead >= le; ) {
    let c = n.strstart, l = n.lookahead - (le - 1);
    do
      n.ins_h = st(n, n.ins_h, n.window[c + le - 1]), n.prev[c & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = c, c++;
    while (--l);
    n.strstart = c, n.lookahead = le - 1, Rt(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = le - 1, n.match_available = 0, e.next_in = s, e.input = a, e.avail_in = o, n.wrap = i, Ne;
};
var dc = cc, pc = ba, _c = ma, gc = ga, mc = lc, bc = uc, vc = fc, wc = hc, yc = "pako deflate (from Nodeca project)", Jt = {
  deflateInit: dc,
  deflateInit2: pc,
  deflateReset: _c,
  deflateResetKeep: gc,
  deflateSetHeader: mc,
  deflate: bc,
  deflateEnd: vc,
  deflateSetDictionary: wc,
  deflateInfo: yc
};
const xc = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
var kc = function(e) {
  const r = Array.prototype.slice.call(arguments, 1);
  for (; r.length; ) {
    const t = r.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const n in t)
        xc(t, n) && (e[n] = t[n]);
    }
  }
  return e;
}, Ec = (e) => {
  let r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r += e[n].length;
  const t = new Uint8Array(r);
  for (let n = 0, i = 0, o = e.length; n < o; n++) {
    let s = e[n];
    t.set(s, i), i += s.length;
  }
  return t;
}, Vr = {
  assign: kc,
  flattenChunks: Ec
};
let va = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  va = !1;
}
const lr = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  lr[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
lr[254] = lr[254] = 1;
var Ac = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let r, t, n, i, o, s = e.length, a = 0;
  for (i = 0; i < s; i++)
    t = e.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (r = new Uint8Array(a), o = 0, i = 0; o < a; i++)
    t = e.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), t < 128 ? r[o++] = t : t < 2048 ? (r[o++] = 192 | t >>> 6, r[o++] = 128 | t & 63) : t < 65536 ? (r[o++] = 224 | t >>> 12, r[o++] = 128 | t >>> 6 & 63, r[o++] = 128 | t & 63) : (r[o++] = 240 | t >>> 18, r[o++] = 128 | t >>> 12 & 63, r[o++] = 128 | t >>> 6 & 63, r[o++] = 128 | t & 63);
  return r;
};
const Sc = (e, r) => {
  if (r < 65534 && e.subarray && va)
    return String.fromCharCode.apply(null, e.length === r ? e : e.subarray(0, r));
  let t = "";
  for (let n = 0; n < r; n++)
    t += String.fromCharCode(e[n]);
  return t;
};
var Nc = (e, r) => {
  const t = r || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, r));
  let n, i;
  const o = new Array(t * 2);
  for (i = 0, n = 0; n < t; ) {
    let s = e[n++];
    if (s < 128) {
      o[i++] = s;
      continue;
    }
    let a = lr[s];
    if (a > 4) {
      o[i++] = 65533, n += a - 1;
      continue;
    }
    for (s &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < t; )
      s = s << 6 | e[n++] & 63, a--;
    if (a > 1) {
      o[i++] = 65533;
      continue;
    }
    s < 65536 ? o[i++] = s : (s -= 65536, o[i++] = 55296 | s >> 10 & 1023, o[i++] = 56320 | s & 1023);
  }
  return Sc(o, i);
}, zc = (e, r) => {
  r = r || e.length, r > e.length && (r = e.length);
  let t = r - 1;
  for (; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? r : t + lr[e[t]] > r ? t : r;
}, cr = {
  string2buf: Ac,
  buf2string: Nc,
  utf8border: zc
};
function Ic() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var wa = Ic;
const ya = Object.prototype.toString, {
  Z_NO_FLUSH: Tc,
  Z_SYNC_FLUSH: Cc,
  Z_FULL_FLUSH: Oc,
  Z_FINISH: Fc,
  Z_OK: $r,
  Z_STREAM_END: Rc,
  Z_DEFAULT_COMPRESSION: Pc,
  Z_DEFAULT_STRATEGY: Zc,
  Z_DEFLATED: $c
} = dr;
function _r(e) {
  this.options = Vr.assign({
    level: Pc,
    method: $c,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Zc
  }, e || {});
  let r = this.options;
  r.raw && r.windowBits > 0 ? r.windowBits = -r.windowBits : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new wa(), this.strm.avail_out = 0;
  let t = Jt.deflateInit2(
    this.strm,
    r.level,
    r.method,
    r.windowBits,
    r.memLevel,
    r.strategy
  );
  if (t !== $r)
    throw new Error(vt[t]);
  if (r.header && Jt.deflateSetHeader(this.strm, r.header), r.dictionary) {
    let n;
    if (typeof r.dictionary == "string" ? n = cr.string2buf(r.dictionary) : ya.call(r.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(r.dictionary) : n = r.dictionary, t = Jt.deflateSetDictionary(this.strm, n), t !== $r)
      throw new Error(vt[t]);
    this._dict_set = !0;
  }
}
_r.prototype.push = function(e, r) {
  const t = this.strm, n = this.options.chunkSize;
  let i, o;
  if (this.ended)
    return !1;
  for (r === ~~r ? o = r : o = r === !0 ? Fc : Tc, typeof e == "string" ? t.input = cr.string2buf(e) : ya.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (o === Cc || o === Oc) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (i = Jt.deflate(t, o), i === Rc)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), i = Jt.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === $r;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (o > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) break;
  }
  return !0;
};
_r.prototype.onData = function(e) {
  this.chunks.push(e);
};
_r.prototype.onEnd = function(e) {
  e === $r && (this.result = Vr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Yn(e, r) {
  const t = new _r(r);
  if (t.push(e, !0), t.err)
    throw t.msg || vt[t.err];
  return t.result;
}
function Uc(e, r) {
  return r = r || {}, r.raw = !0, Yn(e, r);
}
function Bc(e, r) {
  return r = r || {}, r.gzip = !0, Yn(e, r);
}
var Lc = _r, Dc = Yn, jc = Uc, Mc = Bc, Vc = {
  Deflate: Lc,
  deflate: Dc,
  deflateRaw: jc,
  gzip: Mc
};
const kr = 16209, Wc = 16191;
var Hc = function(r, t) {
  let n, i, o, s, a, c, l, u, d, _, f, b, m, k, h, v, x, z, w, y, A, C, E, I;
  const F = r.state;
  n = r.next_in, E = r.input, i = n + (r.avail_in - 5), o = r.next_out, I = r.output, s = o - (t - r.avail_out), a = o + (r.avail_out - 257), c = F.dmax, l = F.wsize, u = F.whave, d = F.wnext, _ = F.window, f = F.hold, b = F.bits, m = F.lencode, k = F.distcode, h = (1 << F.lenbits) - 1, v = (1 << F.distbits) - 1;
  e:
    do {
      b < 15 && (f += E[n++] << b, b += 8, f += E[n++] << b, b += 8), x = m[f & h];
      t:
        for (; ; ) {
          if (z = x >>> 24, f >>>= z, b -= z, z = x >>> 16 & 255, z === 0)
            I[o++] = x & 65535;
          else if (z & 16) {
            w = x & 65535, z &= 15, z && (b < z && (f += E[n++] << b, b += 8), w += f & (1 << z) - 1, f >>>= z, b -= z), b < 15 && (f += E[n++] << b, b += 8, f += E[n++] << b, b += 8), x = k[f & v];
            r:
              for (; ; ) {
                if (z = x >>> 24, f >>>= z, b -= z, z = x >>> 16 & 255, z & 16) {
                  if (y = x & 65535, z &= 15, b < z && (f += E[n++] << b, b += 8, b < z && (f += E[n++] << b, b += 8)), y += f & (1 << z) - 1, y > c) {
                    r.msg = "invalid distance too far back", F.mode = kr;
                    break e;
                  }
                  if (f >>>= z, b -= z, z = o - s, y > z) {
                    if (z = y - z, z > u && F.sane) {
                      r.msg = "invalid distance too far back", F.mode = kr;
                      break e;
                    }
                    if (A = 0, C = _, d === 0) {
                      if (A += l - z, z < w) {
                        w -= z;
                        do
                          I[o++] = _[A++];
                        while (--z);
                        A = o - y, C = I;
                      }
                    } else if (d < z) {
                      if (A += l + d - z, z -= d, z < w) {
                        w -= z;
                        do
                          I[o++] = _[A++];
                        while (--z);
                        if (A = 0, d < w) {
                          z = d, w -= z;
                          do
                            I[o++] = _[A++];
                          while (--z);
                          A = o - y, C = I;
                        }
                      }
                    } else if (A += d - z, z < w) {
                      w -= z;
                      do
                        I[o++] = _[A++];
                      while (--z);
                      A = o - y, C = I;
                    }
                    for (; w > 2; )
                      I[o++] = C[A++], I[o++] = C[A++], I[o++] = C[A++], w -= 3;
                    w && (I[o++] = C[A++], w > 1 && (I[o++] = C[A++]));
                  } else {
                    A = o - y;
                    do
                      I[o++] = I[A++], I[o++] = I[A++], I[o++] = I[A++], w -= 3;
                    while (w > 2);
                    w && (I[o++] = I[A++], w > 1 && (I[o++] = I[A++]));
                  }
                } else if ((z & 64) === 0) {
                  x = k[(x & 65535) + (f & (1 << z) - 1)];
                  continue r;
                } else {
                  r.msg = "invalid distance code", F.mode = kr;
                  break e;
                }
                break;
              }
          } else if ((z & 64) === 0) {
            x = m[(x & 65535) + (f & (1 << z) - 1)];
            continue t;
          } else if (z & 32) {
            F.mode = Wc;
            break e;
          } else {
            r.msg = "invalid literal/length code", F.mode = kr;
            break e;
          }
          break;
        }
    } while (n < i && o < a);
  w = b >> 3, n -= w, b -= w << 3, f &= (1 << b) - 1, r.next_in = n, r.next_out = o, r.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), r.avail_out = o < a ? 257 + (a - o) : 257 - (o - a), F.hold = f, F.bits = b;
};
const St = 15, Ui = 852, Bi = 592, Li = 0, gn = 1, Di = 2, Gc = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), qc = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Xc = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Yc = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Kc = (e, r, t, n, i, o, s, a) => {
  const c = a.bits;
  let l = 0, u = 0, d = 0, _ = 0, f = 0, b = 0, m = 0, k = 0, h = 0, v = 0, x, z, w, y, A, C = null, E;
  const I = new Uint16Array(St + 1), F = new Uint16Array(St + 1);
  let S = null, N, p, P;
  for (l = 0; l <= St; l++)
    I[l] = 0;
  for (u = 0; u < n; u++)
    I[r[t + u]]++;
  for (f = c, _ = St; _ >= 1 && I[_] === 0; _--)
    ;
  if (f > _ && (f = _), _ === 0)
    return i[o++] = 1 << 24 | 64 << 16 | 0, i[o++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (d = 1; d < _ && I[d] === 0; d++)
    ;
  for (f < d && (f = d), k = 1, l = 1; l <= St; l++)
    if (k <<= 1, k -= I[l], k < 0)
      return -1;
  if (k > 0 && (e === Li || _ !== 1))
    return -1;
  for (F[1] = 0, l = 1; l < St; l++)
    F[l + 1] = F[l] + I[l];
  for (u = 0; u < n; u++)
    r[t + u] !== 0 && (s[F[r[t + u]]++] = u);
  if (e === Li ? (C = S = s, E = 20) : e === gn ? (C = Gc, S = qc, E = 257) : (C = Xc, S = Yc, E = 0), v = 0, u = 0, l = d, A = o, b = f, m = 0, w = -1, h = 1 << f, y = h - 1, e === gn && h > Ui || e === Di && h > Bi)
    return 1;
  for (; ; ) {
    N = l - m, s[u] + 1 < E ? (p = 0, P = s[u]) : s[u] >= E ? (p = S[s[u] - E], P = C[s[u] - E]) : (p = 96, P = 0), x = 1 << l - m, z = 1 << b, d = z;
    do
      z -= x, i[A + (v >> m) + z] = N << 24 | p << 16 | P | 0;
    while (z !== 0);
    for (x = 1 << l - 1; v & x; )
      x >>= 1;
    if (x !== 0 ? (v &= x - 1, v += x) : v = 0, u++, --I[l] === 0) {
      if (l === _)
        break;
      l = r[t + s[u]];
    }
    if (l > f && (v & y) !== w) {
      for (m === 0 && (m = f), A += d, b = l - m, k = 1 << b; b + m < _ && (k -= I[b + m], !(k <= 0)); )
        b++, k <<= 1;
      if (h += 1 << b, e === gn && h > Ui || e === Di && h > Bi)
        return 1;
      w = v & y, i[w] = f << 24 | b << 16 | A - o | 0;
    }
  }
  return v !== 0 && (i[A + v] = l - m << 24 | 64 << 16 | 0), a.bits = f, 0;
};
var Qt = Kc;
const Jc = 0, xa = 1, ka = 2, {
  Z_FINISH: ji,
  Z_BLOCK: Qc,
  Z_TREES: Er,
  Z_OK: yt,
  Z_STREAM_END: eu,
  Z_NEED_DICT: tu,
  Z_STREAM_ERROR: Be,
  Z_DATA_ERROR: Ea,
  Z_MEM_ERROR: Aa,
  Z_BUF_ERROR: ru,
  Z_DEFLATED: Mi
} = dr, Wr = 16180, Vi = 16181, Wi = 16182, Hi = 16183, Gi = 16184, qi = 16185, Xi = 16186, Yi = 16187, Ki = 16188, Ji = 16189, Ur = 16190, Qe = 16191, mn = 16192, Qi = 16193, bn = 16194, eo = 16195, to = 16196, ro = 16197, no = 16198, Ar = 16199, Sr = 16200, io = 16201, oo = 16202, ao = 16203, so = 16204, lo = 16205, vn = 16206, co = 16207, uo = 16208, _e = 16209, Sa = 16210, Na = 16211, nu = 852, iu = 592, ou = 15, au = ou, fo = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function su() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const xt = (e) => {
  if (!e)
    return 1;
  const r = e.state;
  return !r || r.strm !== e || r.mode < Wr || r.mode > Na ? 1 : 0;
}, za = (e) => {
  if (xt(e))
    return Be;
  const r = e.state;
  return e.total_in = e.total_out = r.total = 0, e.msg = "", r.wrap && (e.adler = r.wrap & 1), r.mode = Wr, r.last = 0, r.havedict = 0, r.flags = -1, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new Int32Array(nu), r.distcode = r.distdyn = new Int32Array(iu), r.sane = 1, r.back = -1, yt;
}, Ia = (e) => {
  if (xt(e))
    return Be;
  const r = e.state;
  return r.wsize = 0, r.whave = 0, r.wnext = 0, za(e);
}, Ta = (e, r) => {
  let t;
  if (xt(e))
    return Be;
  const n = e.state;
  return r < 0 ? (t = 0, r = -r) : (t = (r >> 4) + 5, r < 48 && (r &= 15)), r && (r < 8 || r > 15) ? Be : (n.window !== null && n.wbits !== r && (n.window = null), n.wrap = t, n.wbits = r, Ia(e));
}, Ca = (e, r) => {
  if (!e)
    return Be;
  const t = new su();
  e.state = t, t.strm = e, t.window = null, t.mode = Wr;
  const n = Ta(e, r);
  return n !== yt && (e.state = null), n;
}, lu = (e) => Ca(e, au);
let ho = !0, wn, yn;
const cu = (e) => {
  if (ho) {
    wn = new Int32Array(512), yn = new Int32Array(32);
    let r = 0;
    for (; r < 144; )
      e.lens[r++] = 8;
    for (; r < 256; )
      e.lens[r++] = 9;
    for (; r < 280; )
      e.lens[r++] = 7;
    for (; r < 288; )
      e.lens[r++] = 8;
    for (Qt(xa, e.lens, 0, 288, wn, 0, e.work, { bits: 9 }), r = 0; r < 32; )
      e.lens[r++] = 5;
    Qt(ka, e.lens, 0, 32, yn, 0, e.work, { bits: 5 }), ho = !1;
  }
  e.lencode = wn, e.lenbits = 9, e.distcode = yn, e.distbits = 5;
}, Oa = (e, r, t, n) => {
  let i;
  const o = e.state;
  return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), n >= o.wsize ? (o.window.set(r.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > n && (i = n), o.window.set(r.subarray(t - n, t - n + i), o.wnext), n -= i, n ? (o.window.set(r.subarray(t - n, t), 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
}, uu = (e, r) => {
  let t, n, i, o, s, a, c, l, u, d, _, f, b, m, k = 0, h, v, x, z, w, y, A, C;
  const E = new Uint8Array(4);
  let I, F;
  const S = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (xt(e) || !e.output || !e.input && e.avail_in !== 0)
    return Be;
  t = e.state, t.mode === Qe && (t.mode = mn), s = e.next_out, i = e.output, c = e.avail_out, o = e.next_in, n = e.input, a = e.avail_in, l = t.hold, u = t.bits, d = a, _ = c, C = yt;
  e:
    for (; ; )
      switch (t.mode) {
        case Wr:
          if (t.wrap === 0) {
            t.mode = mn;
            break;
          }
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.wrap & 2 && l === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Ae(t.check, E, 2, 0), l = 0, u = 0, t.mode = Vi;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((l & 255) << 8) + (l >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = _e;
            break;
          }
          if ((l & 15) !== Mi) {
            e.msg = "unknown compression method", t.mode = _e;
            break;
          }
          if (l >>>= 4, u -= 4, A = (l & 15) + 8, t.wbits === 0 && (t.wbits = A), A > 15 || A > t.wbits) {
            e.msg = "invalid window size", t.mode = _e;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = l & 512 ? Ji : Qe, l = 0, u = 0;
          break;
        case Vi:
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.flags = l, (t.flags & 255) !== Mi) {
            e.msg = "unknown compression method", t.mode = _e;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = _e;
            break;
          }
          t.head && (t.head.text = l >> 8 & 1), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Ae(t.check, E, 2, 0)), l = 0, u = 0, t.mode = Wi;
        /* falls through */
        case Wi:
          for (; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          t.head && (t.head.time = l), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, E[2] = l >>> 16 & 255, E[3] = l >>> 24 & 255, t.check = Ae(t.check, E, 4, 0)), l = 0, u = 0, t.mode = Hi;
        /* falls through */
        case Hi:
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          t.head && (t.head.xflags = l & 255, t.head.os = l >> 8), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Ae(t.check, E, 2, 0)), l = 0, u = 0, t.mode = Gi;
        /* falls through */
        case Gi:
          if (t.flags & 1024) {
            for (; u < 16; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.length = l, t.head && (t.head.extra_len = l), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Ae(t.check, E, 2, 0)), l = 0, u = 0;
          } else t.head && (t.head.extra = null);
          t.mode = qi;
        /* falls through */
        case qi:
          if (t.flags & 1024 && (f = t.length, f > a && (f = a), f && (t.head && (A = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            n.subarray(
              o,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            A
          )), t.flags & 512 && t.wrap & 4 && (t.check = Ae(t.check, n, f, o)), a -= f, o += f, t.length -= f), t.length))
            break e;
          t.length = 0, t.mode = Xi;
        /* falls through */
        case Xi:
          if (t.flags & 2048) {
            if (a === 0)
              break e;
            f = 0;
            do
              A = n[o + f++], t.head && A && t.length < 65536 && (t.head.name += String.fromCharCode(A));
            while (A && f < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Ae(t.check, n, f, o)), a -= f, o += f, A)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = Yi;
        /* falls through */
        case Yi:
          if (t.flags & 4096) {
            if (a === 0)
              break e;
            f = 0;
            do
              A = n[o + f++], t.head && A && t.length < 65536 && (t.head.comment += String.fromCharCode(A));
            while (A && f < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Ae(t.check, n, f, o)), a -= f, o += f, A)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Ki;
        /* falls through */
        case Ki:
          if (t.flags & 512) {
            for (; u < 16; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            if (t.wrap & 4 && l !== (t.check & 65535)) {
              e.msg = "header crc mismatch", t.mode = _e;
              break;
            }
            l = 0, u = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = Qe;
          break;
        case Ji:
          for (; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          e.adler = t.check = fo(l), l = 0, u = 0, t.mode = Ur;
        /* falls through */
        case Ur:
          if (t.havedict === 0)
            return e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, tu;
          e.adler = t.check = 1, t.mode = Qe;
        /* falls through */
        case Qe:
          if (r === Qc || r === Er)
            break e;
        /* falls through */
        case mn:
          if (t.last) {
            l >>>= u & 7, u -= u & 7, t.mode = vn;
            break;
          }
          for (; u < 3; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          switch (t.last = l & 1, l >>>= 1, u -= 1, l & 3) {
            case 0:
              t.mode = Qi;
              break;
            case 1:
              if (cu(t), t.mode = Ar, r === Er) {
                l >>>= 2, u -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = to;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = _e;
          }
          l >>>= 2, u -= 2;
          break;
        case Qi:
          for (l >>>= u & 7, u -= u & 7; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if ((l & 65535) !== (l >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = _e;
            break;
          }
          if (t.length = l & 65535, l = 0, u = 0, t.mode = bn, r === Er)
            break e;
        /* falls through */
        case bn:
          t.mode = eo;
        /* falls through */
        case eo:
          if (f = t.length, f) {
            if (f > a && (f = a), f > c && (f = c), f === 0)
              break e;
            i.set(n.subarray(o, o + f), s), a -= f, o += f, c -= f, s += f, t.length -= f;
            break;
          }
          t.mode = Qe;
          break;
        case to:
          for (; u < 14; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.nlen = (l & 31) + 257, l >>>= 5, u -= 5, t.ndist = (l & 31) + 1, l >>>= 5, u -= 5, t.ncode = (l & 15) + 4, l >>>= 4, u -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = _e;
            break;
          }
          t.have = 0, t.mode = ro;
        /* falls through */
        case ro:
          for (; t.have < t.ncode; ) {
            for (; u < 3; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.lens[S[t.have++]] = l & 7, l >>>= 3, u -= 3;
          }
          for (; t.have < 19; )
            t.lens[S[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, I = { bits: t.lenbits }, C = Qt(Jc, t.lens, 0, 19, t.lencode, 0, t.work, I), t.lenbits = I.bits, C) {
            e.msg = "invalid code lengths set", t.mode = _e;
            break;
          }
          t.have = 0, t.mode = no;
        /* falls through */
        case no:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; k = t.lencode[l & (1 << t.lenbits) - 1], h = k >>> 24, v = k >>> 16 & 255, x = k & 65535, !(h <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            if (x < 16)
              l >>>= h, u -= h, t.lens[t.have++] = x;
            else {
              if (x === 16) {
                for (F = h + 2; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                if (l >>>= h, u -= h, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = _e;
                  break;
                }
                A = t.lens[t.have - 1], f = 3 + (l & 3), l >>>= 2, u -= 2;
              } else if (x === 17) {
                for (F = h + 3; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                l >>>= h, u -= h, A = 0, f = 3 + (l & 7), l >>>= 3, u -= 3;
              } else {
                for (F = h + 7; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                l >>>= h, u -= h, A = 0, f = 11 + (l & 127), l >>>= 7, u -= 7;
              }
              if (t.have + f > t.nlen + t.ndist) {
                e.msg = "invalid bit length repeat", t.mode = _e;
                break;
              }
              for (; f--; )
                t.lens[t.have++] = A;
            }
          }
          if (t.mode === _e)
            break;
          if (t.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", t.mode = _e;
            break;
          }
          if (t.lenbits = 9, I = { bits: t.lenbits }, C = Qt(xa, t.lens, 0, t.nlen, t.lencode, 0, t.work, I), t.lenbits = I.bits, C) {
            e.msg = "invalid literal/lengths set", t.mode = _e;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, I = { bits: t.distbits }, C = Qt(ka, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, I), t.distbits = I.bits, C) {
            e.msg = "invalid distances set", t.mode = _e;
            break;
          }
          if (t.mode = Ar, r === Er)
            break e;
        /* falls through */
        case Ar:
          t.mode = Sr;
        /* falls through */
        case Sr:
          if (a >= 6 && c >= 258) {
            e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, Hc(e, _), s = e.next_out, i = e.output, c = e.avail_out, o = e.next_in, n = e.input, a = e.avail_in, l = t.hold, u = t.bits, t.mode === Qe && (t.back = -1);
            break;
          }
          for (t.back = 0; k = t.lencode[l & (1 << t.lenbits) - 1], h = k >>> 24, v = k >>> 16 & 255, x = k & 65535, !(h <= u); ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (v && (v & 240) === 0) {
            for (z = h, w = v, y = x; k = t.lencode[y + ((l & (1 << z + w) - 1) >> z)], h = k >>> 24, v = k >>> 16 & 255, x = k & 65535, !(z + h <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            l >>>= z, u -= z, t.back += z;
          }
          if (l >>>= h, u -= h, t.back += h, t.length = x, v === 0) {
            t.mode = lo;
            break;
          }
          if (v & 32) {
            t.back = -1, t.mode = Qe;
            break;
          }
          if (v & 64) {
            e.msg = "invalid literal/length code", t.mode = _e;
            break;
          }
          t.extra = v & 15, t.mode = io;
        /* falls through */
        case io:
          if (t.extra) {
            for (F = t.extra; u < F; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.length += l & (1 << t.extra) - 1, l >>>= t.extra, u -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = oo;
        /* falls through */
        case oo:
          for (; k = t.distcode[l & (1 << t.distbits) - 1], h = k >>> 24, v = k >>> 16 & 255, x = k & 65535, !(h <= u); ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if ((v & 240) === 0) {
            for (z = h, w = v, y = x; k = t.distcode[y + ((l & (1 << z + w) - 1) >> z)], h = k >>> 24, v = k >>> 16 & 255, x = k & 65535, !(z + h <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            l >>>= z, u -= z, t.back += z;
          }
          if (l >>>= h, u -= h, t.back += h, v & 64) {
            e.msg = "invalid distance code", t.mode = _e;
            break;
          }
          t.offset = x, t.extra = v & 15, t.mode = ao;
        /* falls through */
        case ao:
          if (t.extra) {
            for (F = t.extra; u < F; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.offset += l & (1 << t.extra) - 1, l >>>= t.extra, u -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            e.msg = "invalid distance too far back", t.mode = _e;
            break;
          }
          t.mode = so;
        /* falls through */
        case so:
          if (c === 0)
            break e;
          if (f = _ - c, t.offset > f) {
            if (f = t.offset - f, f > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = _e;
              break;
            }
            f > t.wnext ? (f -= t.wnext, b = t.wsize - f) : b = t.wnext - f, f > t.length && (f = t.length), m = t.window;
          } else
            m = i, b = s - t.offset, f = t.length;
          f > c && (f = c), c -= f, t.length -= f;
          do
            i[s++] = m[b++];
          while (--f);
          t.length === 0 && (t.mode = Sr);
          break;
        case lo:
          if (c === 0)
            break e;
          i[s++] = t.length, c--, t.mode = Sr;
          break;
        case vn:
          if (t.wrap) {
            for (; u < 32; ) {
              if (a === 0)
                break e;
              a--, l |= n[o++] << u, u += 8;
            }
            if (_ -= c, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? Ae(t.check, i, _, s - _) : sr(t.check, i, _, s - _)), _ = c, t.wrap & 4 && (t.flags ? l : fo(l)) !== t.check) {
              e.msg = "incorrect data check", t.mode = _e;
              break;
            }
            l = 0, u = 0;
          }
          t.mode = co;
        /* falls through */
        case co:
          if (t.wrap && t.flags) {
            for (; u < 32; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            if (t.wrap & 4 && l !== (t.total & 4294967295)) {
              e.msg = "incorrect length check", t.mode = _e;
              break;
            }
            l = 0, u = 0;
          }
          t.mode = uo;
        /* falls through */
        case uo:
          C = eu;
          break e;
        case _e:
          C = Ea;
          break e;
        case Sa:
          return Aa;
        case Na:
        /* falls through */
        default:
          return Be;
      }
  return e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, (t.wsize || _ !== e.avail_out && t.mode < _e && (t.mode < vn || r !== ji)) && Oa(e, e.output, e.next_out, _ - e.avail_out), d -= e.avail_in, _ -= e.avail_out, e.total_in += d, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? Ae(t.check, i, _, e.next_out - _) : sr(t.check, i, _, e.next_out - _)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Qe ? 128 : 0) + (t.mode === Ar || t.mode === bn ? 256 : 0), (d === 0 && _ === 0 || r === ji) && C === yt && (C = ru), C;
}, fu = (e) => {
  if (xt(e))
    return Be;
  let r = e.state;
  return r.window && (r.window = null), e.state = null, yt;
}, hu = (e, r) => {
  if (xt(e))
    return Be;
  const t = e.state;
  return (t.wrap & 2) === 0 ? Be : (t.head = r, r.done = !1, yt);
}, du = (e, r) => {
  const t = r.length;
  let n, i, o;
  return xt(e) || (n = e.state, n.wrap !== 0 && n.mode !== Ur) ? Be : n.mode === Ur && (i = 1, i = sr(i, r, t, 0), i !== n.check) ? Ea : (o = Oa(e, r, t, t), o ? (n.mode = Sa, Aa) : (n.havedict = 1, yt));
};
var pu = Ia, _u = Ta, gu = za, mu = lu, bu = Ca, vu = uu, wu = fu, yu = hu, xu = du, ku = "pako inflate (from Nodeca project)", tt = {
  inflateReset: pu,
  inflateReset2: _u,
  inflateResetKeep: gu,
  inflateInit: mu,
  inflateInit2: bu,
  inflate: vu,
  inflateEnd: wu,
  inflateGetHeader: yu,
  inflateSetDictionary: xu,
  inflateInfo: ku
};
function Eu() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Au = Eu;
const Fa = Object.prototype.toString, {
  Z_NO_FLUSH: Su,
  Z_FINISH: Nu,
  Z_OK: ur,
  Z_STREAM_END: xn,
  Z_NEED_DICT: kn,
  Z_STREAM_ERROR: zu,
  Z_DATA_ERROR: po,
  Z_MEM_ERROR: Iu
} = dr;
function gr(e) {
  this.options = Vr.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const r = this.options;
  r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, r.windowBits === 0 && (r.windowBits = -15)), r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits) && (r.windowBits += 32), r.windowBits > 15 && r.windowBits < 48 && (r.windowBits & 15) === 0 && (r.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new wa(), this.strm.avail_out = 0;
  let t = tt.inflateInit2(
    this.strm,
    r.windowBits
  );
  if (t !== ur)
    throw new Error(vt[t]);
  if (this.header = new Au(), tt.inflateGetHeader(this.strm, this.header), r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = cr.string2buf(r.dictionary) : Fa.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (t = tt.inflateSetDictionary(this.strm, r.dictionary), t !== ur)))
    throw new Error(vt[t]);
}
gr.prototype.push = function(e, r) {
  const t = this.strm, n = this.options.chunkSize, i = this.options.dictionary;
  let o, s, a;
  if (this.ended) return !1;
  for (r === ~~r ? s = r : s = r === !0 ? Nu : Su, Fa.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), o = tt.inflate(t, s), o === kn && i && (o = tt.inflateSetDictionary(t, i), o === ur ? o = tt.inflate(t, s) : o === po && (o = kn)); t.avail_in > 0 && o === xn && t.state.wrap > 0 && e[t.next_in] !== 0; )
      tt.inflateReset(t), o = tt.inflate(t, s);
    switch (o) {
      case zu:
      case po:
      case kn:
      case Iu:
        return this.onEnd(o), this.ended = !0, !1;
    }
    if (a = t.avail_out, t.next_out && (t.avail_out === 0 || o === xn))
      if (this.options.to === "string") {
        let c = cr.utf8border(t.output, t.next_out), l = t.next_out - c, u = cr.buf2string(t.output, c);
        t.next_out = l, t.avail_out = n - l, l && t.output.set(t.output.subarray(c, c + l), 0), this.onData(u);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(o === ur && a === 0)) {
      if (o === xn)
        return o = tt.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
gr.prototype.onData = function(e) {
  this.chunks.push(e);
};
gr.prototype.onEnd = function(e) {
  e === ur && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Vr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Kn(e, r) {
  const t = new gr(r);
  if (t.push(e), t.err) throw t.msg || vt[t.err];
  return t.result;
}
function Tu(e, r) {
  return r = r || {}, r.raw = !0, Kn(e, r);
}
var Cu = gr, Ou = Kn, Fu = Tu, Ru = Kn, Pu = {
  Inflate: Cu,
  inflate: Ou,
  inflateRaw: Fu,
  ungzip: Ru
};
const { Deflate: Zu, deflate: $u, deflateRaw: Uu, gzip: Bu } = Vc, { Inflate: Lu, inflate: Du, inflateRaw: ju, ungzip: Mu } = Pu;
var Vu = Zu, Wu = $u, Hu = Uu, Gu = Bu, qu = Lu, Xu = Du, Yu = ju, Ku = Mu, Ju = dr, _o = {
  Deflate: Vu,
  deflate: Wu,
  deflateRaw: Hu,
  gzip: Gu,
  Inflate: qu,
  inflate: Xu,
  inflateRaw: Yu,
  ungzip: Ku,
  constants: Ju
};
function Br(e) {
  let r = Br.table || (Br.table = (() => {
    let n = new Uint32Array(256);
    for (let i = 0; i < 256; ++i) {
      let o = i;
      for (let s = 0; s < 8; ++s) o = o & 1 ? 3988292384 ^ o >>> 1 : o >>> 1;
      n[i] = o;
    }
    return n;
  })()), t = -1;
  for (let n = 0; n < e.length; ++n) t = r[(t ^ e[n]) & 255] ^ t >>> 8;
  return (t ^ -1) >>> 0;
}
Br.table = void 0;
var Nr = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), En = (e, r) => e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], zr = (e, r, t) => {
  r[t] = e >>> 24, r[t + 1] = e >>> 16, r[t + 2] = e >>> 8, r[t + 3] = e;
};
function Qu(e, r, t, n) {
  let i = r * n, o = new Uint8Array(t * i), s = 0, a = 0;
  for (let c = 0; c < t; ++c) {
    let l = e[s++];
    switch (l) {
      case 0:
        o.set(e.subarray(s, s + i), a);
        break;
      case 1:
        for (let u = 0; u < i; ++u) {
          let d = u >= n ? o[a + u - n] : 0;
          o[a + u] = e[s + u] + d & 255;
        }
        break;
      case 2:
        for (let u = 0; u < i; ++u) {
          let d = c ? o[a + u - i] : 0;
          o[a + u] = e[s + u] + d & 255;
        }
        break;
      case 3:
        for (let u = 0; u < i; ++u) {
          let d = u >= n ? o[a + u - n] : 0, _ = c ? o[a + u - i] : 0;
          o[a + u] = e[s + u] + (d + _ >> 1) & 255;
        }
        break;
      case 4: {
        let u = (d, _, f) => {
          let b = d + _ - f, m = Math.abs(b - d), k = Math.abs(b - _), h = Math.abs(b - f);
          return m <= k && m <= h ? d : k <= h ? _ : f;
        };
        for (let d = 0; d < i; ++d) {
          let _ = d >= n ? o[a + d - n] : 0, f = c ? o[a + d - i] : 0, b = d >= n && c ? o[a + d - i - n] : 0;
          o[a + d] = e[s + d] + u(_, f, b) & 255;
        }
        break;
      }
      default:
        throw new Error(`Unknown PNG filter ${l}`);
    }
    s += i, a += i;
  }
  return o;
}
function ef(e) {
  if (!Nr.every((v, x) => v === e[x])) throw new Error("Not a PNG");
  let r = 8, t = 0, n = 0, i = [], o = !1;
  for (; r < e.length; ) {
    let v = En(e, r), x = String.fromCharCode(...e.subarray(r + 4, r + 8)), z = e.subarray(r + 8, r + 8 + v);
    x === "CgBI" ? o = !0 : x === "IHDR" ? (t = En(z, 0), n = En(z, 4)) : x === "IDAT" && i.push(z), r += 12 + v;
  }
  if (!o) return e;
  let s = _o.inflateRaw(Uint8Array.from(i.flatMap((v) => Array.from(v)))), a = 4, c = Qu(s, t, n, a);
  for (let v = 0; v < c.length; v += 4) {
    let x = c[v], z = c[v + 2];
    c[v] = z, c[v + 2] = x;
  }
  let l = t * a, u = new Uint8Array((l + 1) * n);
  for (let v = 0; v < n; ++v) u[v * (l + 1)] = 0, u.set(c.subarray(v * l, v * l + l), v * (l + 1) + 1);
  let d = _o.deflate(u), _ = [], f = (v, x) => {
    let z = new Uint8Array(4);
    zr(x.length, z, 0);
    let w = new TextEncoder().encode(v), y = new Uint8Array(4);
    zr(Br(new Uint8Array([...w, ...x])), y, 0), _.push(z, w, x, y);
  }, b = new Uint8Array(13);
  zr(t, b, 0), zr(n, b, 4), b.set([8, 6, 0, 0, 0], 8), f("IHDR", b), f("IDAT", d), f("IEND", new Uint8Array());
  let m = Nr.length + _.reduce((v, x) => v + x.length, 0), k = new Uint8Array(m), h = 0;
  k.set(Nr, h), h += Nr.length;
  for (let v of _) k.set(v, h), h += v.length;
  return k;
}
var An = { exports: {} };
const tf = {}, rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tf
}, Symbol.toStringTag, { value: "Module" })), go = /* @__PURE__ */ ks(rf);
var mo;
function nf() {
  return mo || (mo = 1, (function(e) {
    (function() {
      var r = "input is invalid type", t = typeof window == "object", n = t ? window : {};
      n.JS_SHA256_NO_WINDOW && (t = !1);
      var i = !t && typeof self == "object", o = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
      o ? n = qt : i && (n = self);
      var s = !n.JS_SHA256_NO_COMMON_JS && !0 && e.exports, a = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), l = [-2147483648, 8388608, 32768, 128], u = [24, 16, 8, 0], d = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ], _ = ["hex", "array", "digest", "arrayBuffer"], f = [];
      (n.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(y) {
        return Object.prototype.toString.call(y) === "[object Array]";
      }), a && (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(y) {
        return typeof y == "object" && y.buffer && y.buffer.constructor === ArrayBuffer;
      });
      var b = function(y, A) {
        return function(C) {
          return new x(A, !0).update(C)[y]();
        };
      }, m = function(y) {
        var A = b("hex", y);
        o && (A = k(A, y)), A.create = function() {
          return new x(y);
        }, A.update = function(I) {
          return A.create().update(I);
        };
        for (var C = 0; C < _.length; ++C) {
          var E = _[C];
          A[E] = b(E, y);
        }
        return A;
      }, k = function(y, A) {
        var C = go, E = go.Buffer, I = A ? "sha224" : "sha256", F;
        E.from && !n.JS_SHA256_NO_BUFFER_FROM ? F = E.from : F = function(N) {
          return new E(N);
        };
        var S = function(N) {
          if (typeof N == "string")
            return C.createHash(I).update(N, "utf8").digest("hex");
          if (N == null)
            throw new Error(r);
          return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), Array.isArray(N) || ArrayBuffer.isView(N) || N.constructor === E ? C.createHash(I).update(F(N)).digest("hex") : y(N);
        };
        return S;
      }, h = function(y, A) {
        return function(C, E) {
          return new z(C, A, !0).update(E)[y]();
        };
      }, v = function(y) {
        var A = h("hex", y);
        A.create = function(I) {
          return new z(I, y);
        }, A.update = function(I, F) {
          return A.create(I).update(F);
        };
        for (var C = 0; C < _.length; ++C) {
          var E = _[C];
          A[E] = h(E, y);
        }
        return A;
      };
      function x(y, A) {
        A ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], y ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = y;
      }
      x.prototype.update = function(y) {
        if (!this.finalized) {
          var A, C = typeof y;
          if (C !== "string") {
            if (C === "object") {
              if (y === null)
                throw new Error(r);
              if (a && y.constructor === ArrayBuffer)
                y = new Uint8Array(y);
              else if (!Array.isArray(y) && (!a || !ArrayBuffer.isView(y)))
                throw new Error(r);
            } else
              throw new Error(r);
            A = !0;
          }
          for (var E, I = 0, F, S = y.length, N = this.blocks; I < S; ) {
            if (this.hashed && (this.hashed = !1, N[0] = this.block, this.block = N[16] = N[1] = N[2] = N[3] = N[4] = N[5] = N[6] = N[7] = N[8] = N[9] = N[10] = N[11] = N[12] = N[13] = N[14] = N[15] = 0), A)
              for (F = this.start; I < S && F < 64; ++I)
                N[F >>> 2] |= y[I] << u[F++ & 3];
            else
              for (F = this.start; I < S && F < 64; ++I)
                E = y.charCodeAt(I), E < 128 ? N[F >>> 2] |= E << u[F++ & 3] : E < 2048 ? (N[F >>> 2] |= (192 | E >>> 6) << u[F++ & 3], N[F >>> 2] |= (128 | E & 63) << u[F++ & 3]) : E < 55296 || E >= 57344 ? (N[F >>> 2] |= (224 | E >>> 12) << u[F++ & 3], N[F >>> 2] |= (128 | E >>> 6 & 63) << u[F++ & 3], N[F >>> 2] |= (128 | E & 63) << u[F++ & 3]) : (E = 65536 + ((E & 1023) << 10 | y.charCodeAt(++I) & 1023), N[F >>> 2] |= (240 | E >>> 18) << u[F++ & 3], N[F >>> 2] |= (128 | E >>> 12 & 63) << u[F++ & 3], N[F >>> 2] |= (128 | E >>> 6 & 63) << u[F++ & 3], N[F >>> 2] |= (128 | E & 63) << u[F++ & 3]);
            this.lastByteIndex = F, this.bytes += F - this.start, F >= 64 ? (this.block = N[16], this.start = F - 64, this.hash(), this.hashed = !0) : this.start = F;
          }
          return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        }
      }, x.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var y = this.blocks, A = this.lastByteIndex;
          y[16] = this.block, y[A >>> 2] |= l[A & 3], this.block = y[16], A >= 56 && (this.hashed || this.hash(), y[0] = this.block, y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0), y[14] = this.hBytes << 3 | this.bytes >>> 29, y[15] = this.bytes << 3, this.hash();
        }
      }, x.prototype.hash = function() {
        var y = this.h0, A = this.h1, C = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, N = this.h7, p = this.blocks, P, J, V, ie, L, ee, B, U, re, K, X;
        for (P = 16; P < 64; ++P)
          L = p[P - 15], J = (L >>> 7 | L << 25) ^ (L >>> 18 | L << 14) ^ L >>> 3, L = p[P - 2], V = (L >>> 17 | L << 15) ^ (L >>> 19 | L << 13) ^ L >>> 10, p[P] = p[P - 16] + J + p[P - 7] + V << 0;
        for (X = A & C, P = 0; P < 64; P += 4)
          this.first ? (this.is224 ? (U = 300032, L = p[0] - 1413257819, N = L - 150054599 << 0, E = L + 24177077 << 0) : (U = 704751109, L = p[0] - 210244248, N = L - 1521486534 << 0, E = L + 143694565 << 0), this.first = !1) : (J = (y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10), V = (I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7), U = y & A, ie = U ^ y & C ^ X, B = I & F ^ ~I & S, L = N + V + B + d[P] + p[P], ee = J + ie, N = E + L << 0, E = L + ee << 0), J = (E >>> 2 | E << 30) ^ (E >>> 13 | E << 19) ^ (E >>> 22 | E << 10), V = (N >>> 6 | N << 26) ^ (N >>> 11 | N << 21) ^ (N >>> 25 | N << 7), re = E & y, ie = re ^ E & A ^ U, B = N & I ^ ~N & F, L = S + V + B + d[P + 1] + p[P + 1], ee = J + ie, S = C + L << 0, C = L + ee << 0, J = (C >>> 2 | C << 30) ^ (C >>> 13 | C << 19) ^ (C >>> 22 | C << 10), V = (S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7), K = C & E, ie = K ^ C & y ^ re, B = S & N ^ ~S & I, L = F + V + B + d[P + 2] + p[P + 2], ee = J + ie, F = A + L << 0, A = L + ee << 0, J = (A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10), V = (F >>> 6 | F << 26) ^ (F >>> 11 | F << 21) ^ (F >>> 25 | F << 7), X = A & C, ie = X ^ A & E ^ K, B = F & S ^ ~F & N, L = I + V + B + d[P + 3] + p[P + 3], ee = J + ie, I = y + L << 0, y = L + ee << 0, this.chromeBugWorkAround = !0;
        this.h0 = this.h0 + y << 0, this.h1 = this.h1 + A << 0, this.h2 = this.h2 + C << 0, this.h3 = this.h3 + E << 0, this.h4 = this.h4 + I << 0, this.h5 = this.h5 + F << 0, this.h6 = this.h6 + S << 0, this.h7 = this.h7 + N << 0;
      }, x.prototype.hex = function() {
        this.finalize();
        var y = this.h0, A = this.h1, C = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, N = this.h7, p = c[y >>> 28 & 15] + c[y >>> 24 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[A >>> 28 & 15] + c[A >>> 24 & 15] + c[A >>> 20 & 15] + c[A >>> 16 & 15] + c[A >>> 12 & 15] + c[A >>> 8 & 15] + c[A >>> 4 & 15] + c[A & 15] + c[C >>> 28 & 15] + c[C >>> 24 & 15] + c[C >>> 20 & 15] + c[C >>> 16 & 15] + c[C >>> 12 & 15] + c[C >>> 8 & 15] + c[C >>> 4 & 15] + c[C & 15] + c[E >>> 28 & 15] + c[E >>> 24 & 15] + c[E >>> 20 & 15] + c[E >>> 16 & 15] + c[E >>> 12 & 15] + c[E >>> 8 & 15] + c[E >>> 4 & 15] + c[E & 15] + c[I >>> 28 & 15] + c[I >>> 24 & 15] + c[I >>> 20 & 15] + c[I >>> 16 & 15] + c[I >>> 12 & 15] + c[I >>> 8 & 15] + c[I >>> 4 & 15] + c[I & 15] + c[F >>> 28 & 15] + c[F >>> 24 & 15] + c[F >>> 20 & 15] + c[F >>> 16 & 15] + c[F >>> 12 & 15] + c[F >>> 8 & 15] + c[F >>> 4 & 15] + c[F & 15] + c[S >>> 28 & 15] + c[S >>> 24 & 15] + c[S >>> 20 & 15] + c[S >>> 16 & 15] + c[S >>> 12 & 15] + c[S >>> 8 & 15] + c[S >>> 4 & 15] + c[S & 15];
        return this.is224 || (p += c[N >>> 28 & 15] + c[N >>> 24 & 15] + c[N >>> 20 & 15] + c[N >>> 16 & 15] + c[N >>> 12 & 15] + c[N >>> 8 & 15] + c[N >>> 4 & 15] + c[N & 15]), p;
      }, x.prototype.toString = x.prototype.hex, x.prototype.digest = function() {
        this.finalize();
        var y = this.h0, A = this.h1, C = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, N = this.h7, p = [
          y >>> 24 & 255,
          y >>> 16 & 255,
          y >>> 8 & 255,
          y & 255,
          A >>> 24 & 255,
          A >>> 16 & 255,
          A >>> 8 & 255,
          A & 255,
          C >>> 24 & 255,
          C >>> 16 & 255,
          C >>> 8 & 255,
          C & 255,
          E >>> 24 & 255,
          E >>> 16 & 255,
          E >>> 8 & 255,
          E & 255,
          I >>> 24 & 255,
          I >>> 16 & 255,
          I >>> 8 & 255,
          I & 255,
          F >>> 24 & 255,
          F >>> 16 & 255,
          F >>> 8 & 255,
          F & 255,
          S >>> 24 & 255,
          S >>> 16 & 255,
          S >>> 8 & 255,
          S & 255
        ];
        return this.is224 || p.push(N >>> 24 & 255, N >>> 16 & 255, N >>> 8 & 255, N & 255), p;
      }, x.prototype.array = x.prototype.digest, x.prototype.arrayBuffer = function() {
        this.finalize();
        var y = new ArrayBuffer(this.is224 ? 28 : 32), A = new DataView(y);
        return A.setUint32(0, this.h0), A.setUint32(4, this.h1), A.setUint32(8, this.h2), A.setUint32(12, this.h3), A.setUint32(16, this.h4), A.setUint32(20, this.h5), A.setUint32(24, this.h6), this.is224 || A.setUint32(28, this.h7), y;
      };
      function z(y, A, C) {
        var E, I = typeof y;
        if (I === "string") {
          var F = [], S = y.length, N = 0, p;
          for (E = 0; E < S; ++E)
            p = y.charCodeAt(E), p < 128 ? F[N++] = p : p < 2048 ? (F[N++] = 192 | p >>> 6, F[N++] = 128 | p & 63) : p < 55296 || p >= 57344 ? (F[N++] = 224 | p >>> 12, F[N++] = 128 | p >>> 6 & 63, F[N++] = 128 | p & 63) : (p = 65536 + ((p & 1023) << 10 | y.charCodeAt(++E) & 1023), F[N++] = 240 | p >>> 18, F[N++] = 128 | p >>> 12 & 63, F[N++] = 128 | p >>> 6 & 63, F[N++] = 128 | p & 63);
          y = F;
        } else if (I === "object") {
          if (y === null)
            throw new Error(r);
          if (a && y.constructor === ArrayBuffer)
            y = new Uint8Array(y);
          else if (!Array.isArray(y) && (!a || !ArrayBuffer.isView(y)))
            throw new Error(r);
        } else
          throw new Error(r);
        y.length > 64 && (y = new x(A, !0).update(y).array());
        var P = [], J = [];
        for (E = 0; E < 64; ++E) {
          var V = y[E] || 0;
          P[E] = 92 ^ V, J[E] = 54 ^ V;
        }
        x.call(this, A, C), this.update(J), this.oKeyPad = P, this.inner = !0, this.sharedMemory = C;
      }
      z.prototype = new x(), z.prototype.finalize = function() {
        if (x.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var y = this.array();
          x.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(y), x.prototype.finalize.call(this);
        }
      };
      var w = m();
      w.sha256 = w, w.sha224 = m(!0), w.sha256.hmac = v(), w.sha224.hmac = v(!0), s ? e.exports = w : (n.sha256 = w.sha256, n.sha224 = w.sha224);
    })();
  })(An)), An.exports;
}
var Ra = nf();
async function of(e) {
  const [r, t] = await Pa(e), n = t.folder("Payload/"), i = r.CFBundleDisplayName || r.CFBundleName || null, o = r.CFBundleIdentifier || null;
  if (typeof i != "string" || typeof o != "string")
    throw "Invalid Info.plist: Missing required fields.";
  let s = [];
  const a = Object.keys(r).filter(
    (b) => b.startsWith("NS") && b.endsWith("UsageDescription")
  );
  for (const b of a) {
    const m = r[b];
    typeof m == "string" && s.push([b, m]);
  }
  const c = {
    name: i,
    bundle_identifier: o,
    category: "other",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    description: null,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: null,
    entitlements: [],
    privacy: s
  }, l = Ra.sha256(await e.arrayBuffer()), u = Za(r, l), d = r.CFBundleIcons, _ = d ? d.CFBundlePrimaryIcon : void 0;
  let f = [];
  if (_) {
    const b = _.CFBundleIconName;
    typeof b == "string" && f.push(b);
    const m = _.CFBundleIconFiles;
    if (Array.isArray(m))
      for (const k of m)
        typeof k == "string" && f.push(k);
  }
  if (f = Array.from(new Set(f)), f.length === 0) {
    const b = r.CFBundleIconFiles;
    if (Array.isArray(b))
      for (const m of b)
        typeof m == "string" && f.push(m);
  }
  if (f.length === 0)
    console.warn("Warning: no icon names found in Info.plist");
  else {
    const b = [], m = Object.keys(n.files).find(
      (h) => /^Payload\/.+\.app\/$/.test(h)
    );
    if (!m)
      throw new Error("Invalid IPA file: Missing .app folder in Payload.");
    const k = t.folder(m);
    if (await Promise.all(
      Object.entries(k.files).map(async ([h, v]) => {
        if (!v || v.dir)
          return;
        const z = (h.split("/").pop() ?? "").toLowerCase();
        for (const w of f) {
          const y = ["@3x", "@2x", ""];
          for (const A of y) {
            const C = `${w}${A}`;
            if (z === `${C.toLowerCase()}.png`) {
              const E = A === "@3x" ? 3 : A === "@2x" ? 2 : 1, I = await v.async("uint8array"), F = await ef(I);
              b.push({
                path: h,
                scale: E,
                data: F
              });
            }
          }
        }
      })
    ), b.length > 0) {
      b.sort((v, x) => x.scale - v.scale);
      const h = b[0];
      return [c, u, h];
    }
  }
  return [c, u, null];
}
async function Pa(e) {
  const r = await Ss.loadAsync(e);
  if (!r.files["Payload/"] || !r.files["Payload/"].dir)
    throw "Invalid IPA file: Missing Payload directory.";
  const n = r.folder("Payload/").file(/\.app\/Info\.plist$/)[0];
  if (!n)
    throw "Invalid IPA file: Missing Info.plist.";
  let i = await n.async("arraybuffer"), o = nl(i);
  if (typeof o != "object" || o === null)
    throw "Failed to parse Info.plist.";
  return [o, r];
}
function Za(e, r = null) {
  const t = e.CFBundleShortVersionString || "1.0.0", n = e.CFBundleVersion || "1";
  if (typeof t != "string" || typeof n != "string")
    throw "Invalid Info.plist: Missing required version fields.";
  return {
    version: t,
    build_version: n,
    download_url: "",
    changelog: null,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    checksum: r
  };
}
async function af(e, r) {
  const [t] = await Pa(e), n = Ra.sha256(await e.arrayBuffer()), i = Za(t, n), o = await ae().from("versions").insert([
    {
      ...i,
      app_id: r.id,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  ]).select().single();
  if (o.error)
    throw Ce(o.error, "version");
  return o;
}
async function sf(e, r, t, n, i) {
  const o = await of(e);
  if (!o)
    throw "Failed to import IPA.";
  let [s, a, c] = o, l = await r({
    ...s,
    owner: t?.user.id || "",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (!l)
    throw "Failed to create app from IPA.";
  if (l.error)
    throw Ce(l.error, "app");
  const u = l.data.id;
  if (c) {
    if (!t)
      throw "You must be logged in to upload an icon.";
    const { data: f, error: b } = await ae().storage.from("app-images").upload(`${t.user.id}/${u}/icon-${Date.now()}.png`, c.data, {
      contentType: "image/png"
    });
    if (b || !f)
      throw console.error(b), "Failed to upload app icon.";
    const { error: m } = await ae().from("apps").update({
      icon_path: f.path
    }).eq("id", u);
    if (i(), m)
      throw console.error(m), "Failed to update app with icon path.";
  }
  const d = {
    ...a,
    app_id: u,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  }, _ = await ae().from("versions").insert([d]).select().single();
  if (_.error)
    throw console.error(_.error), Ce(_.error, "version");
  n("/developers/app/" + u);
}
function lf(e) {
  let r = [];
  if (e.appPermissions?.privacy)
    for (const [i, o] of Object.entries(e.appPermissions.privacy))
      r.push([i, o]);
  const t = {
    name: e.name,
    bundle_identifier: e.bundleIdentifier,
    category: e.category || "other",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    description: e.localizedDescription,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: e.subtitle || null,
    entitlements: e.appPermissions?.entitlements || [],
    privacy: r
  };
  let n = [];
  for (const i of e.versions)
    n.push({
      version: i.version,
      build_version: i.buildVersion || i.version,
      download_url: i.downloadURL,
      changelog: i.localizedDescription || "",
      created_at: i.date,
      checksum: null
    });
  return [t, n];
}
async function cf(e, r, t, n) {
  if (!t)
    throw "You must be logged in to create an app.";
  const [i, o] = lf(e);
  let s = await r({
    ...i,
    owner: t?.user.id || "",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (!s)
    throw "Failed to create app from IPA.";
  if (s.error)
    throw Ce(s.error, "app");
  const a = s.data.id;
  for (const c of o) {
    const l = {
      ...c,
      app_id: a,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }, u = await ae().from("versions").insert([l]).select().single();
    if (u.error)
      throw console.error(u.error), Ce(u.error, "version");
  }
  n();
}
const uf = ({
  source: e,
  cancel: r
}) => {
  const [t, n] = Se([]), { createApp: i, session: o, reloadApps: s } = Oe(), a = Ye();
  return /* @__PURE__ */ Z("div", { className: "prompt-modal", children: /* @__PURE__ */ Y(ke, { className: "altstore-prompt", children: [
    /* @__PURE__ */ Y("h2", { children: [
      "Select apps to import from ",
      e.name ?? "this altstore source"
    ] }),
    /* @__PURE__ */ Z("div", { className: "altstore-app-list", children: e.apps.map((c) => /* @__PURE__ */ Z(
      "div",
      {
        className: "altstore-app-wrapper" + (t.includes(c) ? " altstore-app-wrapper-selected" : ""),
        onClick: () => {
          n((l) => l.includes(c) ? l.filter((u) => u !== c) : [...l, c]);
        },
        children: /* @__PURE__ */ Z(ff, { app: c })
      },
      c.bundleIdentifier
    )) }),
    /* @__PURE__ */ Y(
      "button",
      {
        disabled: t.length === 0,
        className: "import-altstore-button primary",
        onClick: async () => {
          let c = async () => {
            for (const l of t)
              await cf(
                l,
                i,
                o,
                s
              );
            a("/developers");
          };
          oe.promise(c(), {
            loading: "Importing apps...",
            success: `Successfully imported ${t.length} app${t.length !== 1 ? "s" : ""}!`,
            error: (l) => (console.error(l), "Failed to import apps: " + String(l))
          });
        },
        children: [
          "Import ",
          t.length,
          " App",
          t.length !== 1 ? "s" : ""
        ]
      }
    ),
    /* @__PURE__ */ Z("button", { className: "import-altstore-button", onClick: r, children: "Cancel" })
  ] }) });
}, ff = ({ app: e }) => /* @__PURE__ */ Y("div", { className: "app-title-container app-title-container-inline", children: [
  /* @__PURE__ */ Z(
    "img",
    {
      src: e.iconURL,
      className: "app-icon",
      onError: (r) => {
        r.currentTarget.src = "/default-icon.png";
      }
    }
  ),
  /* @__PURE__ */ Y("div", { children: [
    /* @__PURE__ */ Z("h1", { className: "app-title", children: e.name }),
    /* @__PURE__ */ Z("p", { className: "app-subtitle", children: e.subtitle || e.bundleIdentifier })
  ] })
] });
function j(e, r, t) {
  function n(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), r(a, c);
    const l = s.prototype, u = Object.keys(l);
    for (let d = 0; d < u.length; d++) {
      const _ = u[d];
      _ in a || (a[_] = l[_].bind(a));
    }
  }
  const i = t?.Parent ?? Object;
  class o extends i {
  }
  Object.defineProperty(o, "name", { value: e });
  function s(a) {
    var c;
    const l = t?.Parent ? new o() : this;
    n(l, a), (c = l._zod).deferred ?? (c.deferred = []);
    for (const u of l._zod.deferred)
      u();
    return l;
  }
  return Object.defineProperty(s, "init", { value: n }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (a) => t?.Parent && a instanceof t.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class Ot extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class $a extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Ua = {};
function ut(e) {
  return Ua;
}
function hf(e) {
  const r = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, i]) => r.indexOf(+n) === -1).map(([n, i]) => i);
}
function Bn(e, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Jn(e) {
  return {
    get value() {
      {
        const r = e();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Qn(e) {
  return e == null;
}
function ei(e) {
  const r = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(r, t);
}
function df(e, r) {
  const t = (e.toString().split(".")[1] || "").length, n = r.toString();
  let i = (n.split(".")[1] || "").length;
  if (i === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c?.[1] && (i = Number.parseInt(c[1]));
  }
  const o = t > i ? t : i, s = Number.parseInt(e.toFixed(o).replace(".", "")), a = Number.parseInt(r.toFixed(o).replace(".", ""));
  return s % a / 10 ** o;
}
const bo = Symbol("evaluating");
function pe(e, r, t) {
  let n;
  Object.defineProperty(e, r, {
    get() {
      if (n !== bo)
        return n === void 0 && (n = bo, n = t()), n;
    },
    set(i) {
      Object.defineProperty(e, r, {
        value: i
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function kt(e, r, t) {
  Object.defineProperty(e, r, {
    value: t,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Et(...e) {
  const r = {};
  for (const t of e) {
    const n = Object.getOwnPropertyDescriptors(t);
    Object.assign(r, n);
  }
  return Object.defineProperties({}, r);
}
function vo(e) {
  return JSON.stringify(e);
}
function pf(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ba = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Lr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const _f = Jn(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Pt(e) {
  if (Lr(e) === !1)
    return !1;
  const r = e.constructor;
  if (r === void 0 || typeof r != "function")
    return !0;
  const t = r.prototype;
  return !(Lr(t) === !1 || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}
function La(e) {
  return Pt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const gf = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Zt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function dt(e, r, t) {
  const n = new e._zod.constr(r ?? e._zod.def);
  return (!r || t?.parent) && (n._zod.parent = e), n;
}
function te(e) {
  const r = e;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function mf(e) {
  return Object.keys(e).filter((r) => e[r]._zod.optin === "optional" && e[r]._zod.optout === "optional");
}
const bf = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function vf(e, r) {
  const t = e._zod.def, n = Et(e._zod.def, {
    get shape() {
      const i = {};
      for (const o in r) {
        if (!(o in t.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        r[o] && (i[o] = t.shape[o]);
      }
      return kt(this, "shape", i), i;
    },
    checks: []
  });
  return dt(e, n);
}
function wf(e, r) {
  const t = e._zod.def, n = Et(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const o in r) {
        if (!(o in t.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        r[o] && delete i[o];
      }
      return kt(this, "shape", i), i;
    },
    checks: []
  });
  return dt(e, n);
}
function yf(e, r) {
  if (!Pt(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const t = e._zod.def.checks;
  if (t && t.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const i = Et(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...r };
      return kt(this, "shape", o), o;
    },
    checks: []
  });
  return dt(e, i);
}
function xf(e, r) {
  if (!Pt(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const t = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...r };
      return kt(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return dt(e, t);
}
function kf(e, r) {
  const t = Et(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...r._zod.def.shape };
      return kt(this, "shape", n), n;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return dt(e, t);
}
function Ef(e, r, t) {
  const n = Et(r._zod.def, {
    get shape() {
      const i = r._zod.def.shape, o = { ...i };
      if (t)
        for (const s in t) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (o[s] = e ? new e({
            type: "optional",
            innerType: i[s]
          }) : i[s]);
        }
      else
        for (const s in i)
          o[s] = e ? new e({
            type: "optional",
            innerType: i[s]
          }) : i[s];
      return kt(this, "shape", o), o;
    },
    checks: []
  });
  return dt(r, n);
}
function Af(e, r, t) {
  const n = Et(r._zod.def, {
    get shape() {
      const i = r._zod.def.shape, o = { ...i };
      if (t)
        for (const s in t) {
          if (!(s in o))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (o[s] = new e({
            type: "nonoptional",
            innerType: i[s]
          }));
        }
      else
        for (const s in i)
          o[s] = new e({
            type: "nonoptional",
            innerType: i[s]
          });
      return kt(this, "shape", o), o;
    },
    checks: []
  });
  return dt(r, n);
}
function Nt(e, r = 0) {
  if (e.aborted === !0)
    return !0;
  for (let t = r; t < e.issues.length; t++)
    if (e.issues[t]?.continue !== !0)
      return !0;
  return !1;
}
function zt(e, r) {
  return r.map((t) => {
    var n;
    return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
  });
}
function Ir(e) {
  return typeof e == "string" ? e : e?.message;
}
function ft(e, r, t) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = Ir(e.inst?._zod.def?.error?.(e)) ?? Ir(r?.error?.(e)) ?? Ir(t.customError?.(e)) ?? Ir(t.localeError?.(e)) ?? "Invalid input";
    n.message = i;
  }
  return delete n.inst, delete n.continue, r?.reportInput || delete n.input, n;
}
function ti(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function fr(...e) {
  const [r, t, n] = e;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: t,
    inst: n
  } : { ...r };
}
const Da = (e, r) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: r,
    enumerable: !1
  }), e.message = JSON.stringify(r, Bn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, ja = j("$ZodError", Da), Ma = j("$ZodError", Da, { Parent: Error });
function Sf(e, r = (t) => t.message) {
  const t = {}, n = [];
  for (const i of e.issues)
    i.path.length > 0 ? (t[i.path[0]] = t[i.path[0]] || [], t[i.path[0]].push(r(i))) : n.push(r(i));
  return { formErrors: n, fieldErrors: t };
}
function Nf(e, r = (t) => t.message) {
  const t = { _errors: [] }, n = (i) => {
    for (const o of i.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((s) => n({ issues: s }));
      else if (o.code === "invalid_key")
        n({ issues: o.issues });
      else if (o.code === "invalid_element")
        n({ issues: o.issues });
      else if (o.path.length === 0)
        t._errors.push(r(o));
      else {
        let s = t, a = 0;
        for (; a < o.path.length; ) {
          const c = o.path[a];
          a === o.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(r(o))) : s[c] = s[c] || { _errors: [] }, s = s[c], a++;
        }
      }
  };
  return n(e), t;
}
const ri = (e) => (r, t, n, i) => {
  const o = n ? Object.assign(n, { async: !1 }) : { async: !1 }, s = r._zod.run({ value: t, issues: [] }, o);
  if (s instanceof Promise)
    throw new Ot();
  if (s.issues.length) {
    const a = new (i?.Err ?? e)(s.issues.map((c) => ft(c, o, ut())));
    throw Ba(a, i?.callee), a;
  }
  return s.value;
}, ni = (e) => async (r, t, n, i) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = r._zod.run({ value: t, issues: [] }, o);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (i?.Err ?? e)(s.issues.map((c) => ft(c, o, ut())));
    throw Ba(a, i?.callee), a;
  }
  return s.value;
}, Hr = (e) => (r, t, n) => {
  const i = n ? { ...n, async: !1 } : { async: !1 }, o = r._zod.run({ value: t, issues: [] }, i);
  if (o instanceof Promise)
    throw new Ot();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? ja)(o.issues.map((s) => ft(s, i, ut())))
  } : { success: !0, data: o.value };
}, zf = /* @__PURE__ */ Hr(Ma), Gr = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let o = r._zod.run({ value: t, issues: [] }, i);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((s) => ft(s, i, ut())))
  } : { success: !0, data: o.value };
}, If = /* @__PURE__ */ Gr(Ma), Tf = (e) => (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ri(e)(r, t, i);
}, Cf = (e) => (r, t, n) => ri(e)(r, t, n), Of = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ni(e)(r, t, i);
}, Ff = (e) => async (r, t, n) => ni(e)(r, t, n), Rf = (e) => (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Hr(e)(r, t, i);
}, Pf = (e) => (r, t, n) => Hr(e)(r, t, n), Zf = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Gr(e)(r, t, i);
}, $f = (e) => async (r, t, n) => Gr(e)(r, t, n), Uf = /^[cC][^\s-]{8,}$/, Bf = /^[0-9a-z]+$/, Lf = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Df = /^[0-9a-vA-V]{20}$/, jf = /^[A-Za-z0-9]{27}$/, Mf = /^[a-zA-Z0-9_-]{21}$/, Vf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Wf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, wo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Hf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Gf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function qf() {
  return new RegExp(Gf, "u");
}
const Xf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Kf = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Jf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Qf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Va = /^[A-Za-z0-9_-]*$/, eh = /^\+(?:[0-9]){6,14}[0-9]$/, Wa = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", th = /* @__PURE__ */ new RegExp(`^${Wa}$`);
function Ha(e) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${r}` : e.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${e.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function rh(e) {
  return new RegExp(`^${Ha(e)}$`);
}
function nh(e) {
  const r = Ha({ precision: e.precision }), t = ["Z"];
  e.local && t.push(""), e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${r}(?:${t.join("|")})`;
  return new RegExp(`^${Wa}T(?:${n})$`);
}
const ih = (e) => {
  const r = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, oh = /^-?\d+$/, ah = /^-?\d+(?:\.\d+)?/, sh = /^(?:true|false)$/i, lh = /^[^A-Z]*$/, ch = /^[^a-z]*$/, Fe = /* @__PURE__ */ j("$ZodCheck", (e, r) => {
  var t;
  e._zod ?? (e._zod = {}), e._zod.def = r, (t = e._zod).onattach ?? (t.onattach = []);
}), Ga = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, qa = /* @__PURE__ */ j("$ZodCheckLessThan", (e, r) => {
  Fe.init(e, r);
  const t = Ga[typeof r.value];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag, o = (r.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < o && (r.inclusive ? i.maximum = r.value : i.exclusiveMaximum = r.value);
  }), e._zod.check = (n) => {
    (r.inclusive ? n.value <= r.value : n.value < r.value) || n.issues.push({
      origin: t,
      code: "too_big",
      maximum: r.value,
      input: n.value,
      inclusive: r.inclusive,
      inst: e,
      continue: !r.abort
    });
  };
}), Xa = /* @__PURE__ */ j("$ZodCheckGreaterThan", (e, r) => {
  Fe.init(e, r);
  const t = Ga[typeof r.value];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag, o = (r.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > o && (r.inclusive ? i.minimum = r.value : i.exclusiveMinimum = r.value);
  }), e._zod.check = (n) => {
    (r.inclusive ? n.value >= r.value : n.value > r.value) || n.issues.push({
      origin: t,
      code: "too_small",
      minimum: r.value,
      input: n.value,
      inclusive: r.inclusive,
      inst: e,
      continue: !r.abort
    });
  };
}), uh = /* @__PURE__ */ j("$ZodCheckMultipleOf", (e, r) => {
  Fe.init(e, r), e._zod.onattach.push((t) => {
    var n;
    (n = t._zod.bag).multipleOf ?? (n.multipleOf = r.value);
  }), e._zod.check = (t) => {
    if (typeof t.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof t.value == "bigint" ? t.value % r.value === BigInt(0) : df(t.value, r.value) === 0) || t.issues.push({
      origin: typeof t.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), fh = /* @__PURE__ */ j("$ZodCheckNumberFormat", (e, r) => {
  Fe.init(e, r), r.format = r.format || "float64";
  const t = r.format?.includes("int"), n = t ? "int" : "number", [i, o] = bf[r.format];
  e._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = r.format, a.minimum = i, a.maximum = o, t && (a.pattern = oh);
  }), e._zod.check = (s) => {
    const a = s.value;
    if (t) {
      if (!Number.isInteger(a)) {
        s.issues.push({
          expected: n,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? s.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !r.abort
        }) : s.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !r.abort
        });
        return;
      }
    }
    a < i && s.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: e,
      continue: !r.abort
    }), a > o && s.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: o,
      inst: e
    });
  };
}), hh = /* @__PURE__ */ j("$ZodCheckMaxLength", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !Qn(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (n._zod.bag.maximum = r.maximum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length <= r.maximum)
      return;
    const s = ti(i);
    n.issues.push({
      origin: s,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !r.abort
    });
  };
}), dh = /* @__PURE__ */ j("$ZodCheckMinLength", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !Qn(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (n._zod.bag.minimum = r.minimum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length >= r.minimum)
      return;
    const s = ti(i);
    n.issues.push({
      origin: s,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !r.abort
    });
  };
}), ph = /* @__PURE__ */ j("$ZodCheckLengthEquals", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !Qn(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.minimum = r.length, i.maximum = r.length, i.length = r.length;
  }), e._zod.check = (n) => {
    const i = n.value, o = i.length;
    if (o === r.length)
      return;
    const s = ti(i), a = o > r.length;
    n.issues.push({
      origin: s,
      ...a ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !r.abort
    });
  };
}), qr = /* @__PURE__ */ j("$ZodCheckStringFormat", (e, r) => {
  var t, n;
  Fe.init(e, r), e._zod.onattach.push((i) => {
    const o = i._zod.bag;
    o.format = r.format, r.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r.pattern));
  }), r.pattern ? (t = e._zod).check ?? (t.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: i.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: e,
      continue: !r.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), _h = /* @__PURE__ */ j("$ZodCheckRegex", (e, r) => {
  qr.init(e, r), e._zod.check = (t) => {
    r.pattern.lastIndex = 0, !r.pattern.test(t.value) && t.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: t.value,
      pattern: r.pattern.toString(),
      inst: e,
      continue: !r.abort
    });
  };
}), gh = /* @__PURE__ */ j("$ZodCheckLowerCase", (e, r) => {
  r.pattern ?? (r.pattern = lh), qr.init(e, r);
}), mh = /* @__PURE__ */ j("$ZodCheckUpperCase", (e, r) => {
  r.pattern ?? (r.pattern = ch), qr.init(e, r);
}), bh = /* @__PURE__ */ j("$ZodCheckIncludes", (e, r) => {
  Fe.init(e, r);
  const t = Zt(r.includes), n = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${t}` : t);
  r.pattern = n, e._zod.onattach.push((i) => {
    const o = i._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (i) => {
    i.value.includes(r.includes, r.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: i.value,
      inst: e,
      continue: !r.abort
    });
  };
}), vh = /* @__PURE__ */ j("$ZodCheckStartsWith", (e, r) => {
  Fe.init(e, r);
  const t = new RegExp(`^${Zt(r.prefix)}.*`);
  r.pattern ?? (r.pattern = t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t);
  }), e._zod.check = (n) => {
    n.value.startsWith(r.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: n.value,
      inst: e,
      continue: !r.abort
    });
  };
}), wh = /* @__PURE__ */ j("$ZodCheckEndsWith", (e, r) => {
  Fe.init(e, r);
  const t = new RegExp(`.*${Zt(r.suffix)}$`);
  r.pattern ?? (r.pattern = t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t);
  }), e._zod.check = (n) => {
    n.value.endsWith(r.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: n.value,
      inst: e,
      continue: !r.abort
    });
  };
}), yh = /* @__PURE__ */ j("$ZodCheckOverwrite", (e, r) => {
  Fe.init(e, r), e._zod.check = (t) => {
    t.value = r.tx(t.value);
  };
});
class xh {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const n = r.split(`
`).filter((s) => s), i = Math.min(...n.map((s) => s.length - s.trimStart().length)), o = n.map((s) => s.slice(i)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of o)
      this.content.push(s);
  }
  compile() {
    const r = Function, t = this?.args, i = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new r(...t, i.join(`
`));
  }
}
const kh = {
  major: 4,
  minor: 1,
  patch: 13
}, me = /* @__PURE__ */ j("$ZodType", (e, r) => {
  var t;
  e ?? (e = {}), e._zod.def = r, e._zod.bag = e._zod.bag || {}, e._zod.version = kh;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const i of n)
    for (const o of i._zod.onattach)
      o(e);
  if (n.length === 0)
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const i = (s, a, c) => {
      let l = Nt(s), u;
      for (const d of a) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(s))
            continue;
        } else if (l)
          continue;
        const _ = s.issues.length, f = d._zod.check(s);
        if (f instanceof Promise && c?.async === !1)
          throw new Ot();
        if (u || f instanceof Promise)
          u = (u ?? Promise.resolve()).then(async () => {
            await f, s.issues.length !== _ && (l || (l = Nt(s, _)));
          });
        else {
          if (s.issues.length === _)
            continue;
          l || (l = Nt(s, _));
        }
      }
      return u ? u.then(() => s) : s;
    }, o = (s, a, c) => {
      if (Nt(s))
        return s.aborted = !0, s;
      const l = i(a, n, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new Ot();
        return l.then((u) => e._zod.parse(u, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (s, a) => {
      if (a.skipChecks)
        return e._zod.parse(s, a);
      if (a.direction === "backward") {
        const l = e._zod.parse({ value: s.value, issues: [] }, { ...a, skipChecks: !0 });
        return l instanceof Promise ? l.then((u) => o(u, s, a)) : o(l, s, a);
      }
      const c = e._zod.parse(s, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new Ot();
        return c.then((l) => i(l, n, a));
      }
      return i(c, n, a);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      try {
        const o = zf(e, i);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return If(e, i).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ii = /* @__PURE__ */ j("$ZodString", (e, r) => {
  me.init(e, r), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? ih(e._zod.bag), e._zod.parse = (t, n) => {
    if (r.coerce)
      try {
        t.value = String(t.value);
      } catch {
      }
    return typeof t.value == "string" || t.issues.push({
      expected: "string",
      code: "invalid_type",
      input: t.value,
      inst: e
    }), t;
  };
}), ge = /* @__PURE__ */ j("$ZodStringFormat", (e, r) => {
  qr.init(e, r), ii.init(e, r);
}), Eh = /* @__PURE__ */ j("$ZodGUID", (e, r) => {
  r.pattern ?? (r.pattern = Wf), ge.init(e, r);
}), Ah = /* @__PURE__ */ j("$ZodUUID", (e, r) => {
  if (r.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = wo(n));
  } else
    r.pattern ?? (r.pattern = wo());
  ge.init(e, r);
}), Sh = /* @__PURE__ */ j("$ZodEmail", (e, r) => {
  r.pattern ?? (r.pattern = Hf), ge.init(e, r);
}), Nh = /* @__PURE__ */ j("$ZodURL", (e, r) => {
  ge.init(e, r), e._zod.check = (t) => {
    try {
      const n = t.value.trim(), i = new URL(n);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(i.hostname) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: r.hostname.source,
        input: t.value,
        inst: e,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: t.value,
        inst: e,
        continue: !r.abort
      })), r.normalize ? t.value = i.href : t.value = n;
      return;
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "url",
        input: t.value,
        inst: e,
        continue: !r.abort
      });
    }
  };
}), zh = /* @__PURE__ */ j("$ZodEmoji", (e, r) => {
  r.pattern ?? (r.pattern = qf()), ge.init(e, r);
}), Ih = /* @__PURE__ */ j("$ZodNanoID", (e, r) => {
  r.pattern ?? (r.pattern = Mf), ge.init(e, r);
}), Th = /* @__PURE__ */ j("$ZodCUID", (e, r) => {
  r.pattern ?? (r.pattern = Uf), ge.init(e, r);
}), Ch = /* @__PURE__ */ j("$ZodCUID2", (e, r) => {
  r.pattern ?? (r.pattern = Bf), ge.init(e, r);
}), Oh = /* @__PURE__ */ j("$ZodULID", (e, r) => {
  r.pattern ?? (r.pattern = Lf), ge.init(e, r);
}), Fh = /* @__PURE__ */ j("$ZodXID", (e, r) => {
  r.pattern ?? (r.pattern = Df), ge.init(e, r);
}), Rh = /* @__PURE__ */ j("$ZodKSUID", (e, r) => {
  r.pattern ?? (r.pattern = jf), ge.init(e, r);
}), Ph = /* @__PURE__ */ j("$ZodISODateTime", (e, r) => {
  r.pattern ?? (r.pattern = nh(r)), ge.init(e, r);
}), Zh = /* @__PURE__ */ j("$ZodISODate", (e, r) => {
  r.pattern ?? (r.pattern = th), ge.init(e, r);
}), $h = /* @__PURE__ */ j("$ZodISOTime", (e, r) => {
  r.pattern ?? (r.pattern = rh(r)), ge.init(e, r);
}), Uh = /* @__PURE__ */ j("$ZodISODuration", (e, r) => {
  r.pattern ?? (r.pattern = Vf), ge.init(e, r);
}), Bh = /* @__PURE__ */ j("$ZodIPv4", (e, r) => {
  r.pattern ?? (r.pattern = Xf), ge.init(e, r), e._zod.bag.format = "ipv4";
}), Lh = /* @__PURE__ */ j("$ZodIPv6", (e, r) => {
  r.pattern ?? (r.pattern = Yf), ge.init(e, r), e._zod.bag.format = "ipv6", e._zod.check = (t) => {
    try {
      new URL(`http://[${t.value}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: t.value,
        inst: e,
        continue: !r.abort
      });
    }
  };
}), Dh = /* @__PURE__ */ j("$ZodCIDRv4", (e, r) => {
  r.pattern ?? (r.pattern = Kf), ge.init(e, r);
}), jh = /* @__PURE__ */ j("$ZodCIDRv6", (e, r) => {
  r.pattern ?? (r.pattern = Jf), ge.init(e, r), e._zod.check = (t) => {
    const n = t.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [i, o] = n;
      if (!o)
        throw new Error();
      const s = Number(o);
      if (`${s}` !== o)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${i}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: t.value,
        inst: e,
        continue: !r.abort
      });
    }
  };
});
function Ya(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Mh = /* @__PURE__ */ j("$ZodBase64", (e, r) => {
  r.pattern ?? (r.pattern = Qf), ge.init(e, r), e._zod.bag.contentEncoding = "base64", e._zod.check = (t) => {
    Ya(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
});
function Vh(e) {
  if (!Va.test(e))
    return !1;
  const r = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), t = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Ya(t);
}
const Wh = /* @__PURE__ */ j("$ZodBase64URL", (e, r) => {
  r.pattern ?? (r.pattern = Va), ge.init(e, r), e._zod.bag.contentEncoding = "base64url", e._zod.check = (t) => {
    Vh(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), Hh = /* @__PURE__ */ j("$ZodE164", (e, r) => {
  r.pattern ?? (r.pattern = eh), ge.init(e, r);
});
function Gh(e, r = null) {
  try {
    const t = e.split(".");
    if (t.length !== 3)
      return !1;
    const [n] = t;
    if (!n)
      return !1;
    const i = JSON.parse(atob(n));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || r && (!("alg" in i) || i.alg !== r));
  } catch {
    return !1;
  }
}
const qh = /* @__PURE__ */ j("$ZodJWT", (e, r) => {
  ge.init(e, r), e._zod.check = (t) => {
    Gh(t.value, r.alg) || t.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), Ka = /* @__PURE__ */ j("$ZodNumber", (e, r) => {
  me.init(e, r), e._zod.pattern = e._zod.bag.pattern ?? ah, e._zod.parse = (t, n) => {
    if (r.coerce)
      try {
        t.value = Number(t.value);
      } catch {
      }
    const i = t.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i))
      return t;
    const o = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
    return t.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: e,
      ...o ? { received: o } : {}
    }), t;
  };
}), Xh = /* @__PURE__ */ j("$ZodNumberFormat", (e, r) => {
  fh.init(e, r), Ka.init(e, r);
}), Yh = /* @__PURE__ */ j("$ZodBoolean", (e, r) => {
  me.init(e, r), e._zod.pattern = sh, e._zod.parse = (t, n) => {
    if (r.coerce)
      try {
        t.value = !!t.value;
      } catch {
      }
    const i = t.value;
    return typeof i == "boolean" || t.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: e
    }), t;
  };
}), Kh = /* @__PURE__ */ j("$ZodUnknown", (e, r) => {
  me.init(e, r), e._zod.parse = (t) => t;
}), Jh = /* @__PURE__ */ j("$ZodNever", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => (t.issues.push({
    expected: "never",
    code: "invalid_type",
    input: t.value,
    inst: e
  }), t);
});
function yo(e, r, t) {
  e.issues.length && r.issues.push(...zt(t, e.issues)), r.value[t] = e.value;
}
const Qh = /* @__PURE__ */ j("$ZodArray", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    const i = t.value;
    if (!Array.isArray(i))
      return t.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: e
      }), t;
    t.value = Array(i.length);
    const o = [];
    for (let s = 0; s < i.length; s++) {
      const a = i[s], c = r.element._zod.run({
        value: a,
        issues: []
      }, n);
      c instanceof Promise ? o.push(c.then((l) => yo(l, t, s))) : yo(c, t, s);
    }
    return o.length ? Promise.all(o).then(() => t) : t;
  };
});
function Dr(e, r, t, n) {
  e.issues.length && r.issues.push(...zt(t, e.issues)), e.value === void 0 ? t in n && (r.value[t] = void 0) : r.value[t] = e.value;
}
function Ja(e) {
  const r = Object.keys(e.shape);
  for (const n of r)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const t = mf(e.shape);
  return {
    ...e,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(t)
  };
}
function Qa(e, r, t, n, i, o) {
  const s = [], a = i.keySet, c = i.catchall._zod, l = c.def.type;
  for (const u in r) {
    if (a.has(u))
      continue;
    if (l === "never") {
      s.push(u);
      continue;
    }
    const d = c.run({ value: r[u], issues: [] }, n);
    d instanceof Promise ? e.push(d.then((_) => Dr(_, t, u, r))) : Dr(d, t, u, r);
  }
  return s.length && t.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: r,
    inst: o
  }), e.length ? Promise.all(e).then(() => t) : t;
}
const ed = /* @__PURE__ */ j("$ZodObject", (e, r) => {
  if (me.init(e, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const a = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const c = { ...a };
        return Object.defineProperty(r, "shape", {
          value: c
        }), c;
      }
    });
  }
  const n = Jn(() => Ja(r));
  pe(e._zod, "propValues", () => {
    const a = r.shape, c = {};
    for (const l in a) {
      const u = a[l]._zod;
      if (u.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const d of u.values)
          c[l].add(d);
      }
    }
    return c;
  });
  const i = Lr, o = r.catchall;
  let s;
  e._zod.parse = (a, c) => {
    s ?? (s = n.value);
    const l = a.value;
    if (!i(l))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), a;
    a.value = {};
    const u = [], d = s.shape;
    for (const _ of s.keys) {
      const b = d[_]._zod.run({ value: l[_], issues: [] }, c);
      b instanceof Promise ? u.push(b.then((m) => Dr(m, a, _, l))) : Dr(b, a, _, l);
    }
    return o ? Qa(u, l, a, c, n.value, e) : u.length ? Promise.all(u).then(() => a) : a;
  };
}), td = /* @__PURE__ */ j("$ZodObjectJIT", (e, r) => {
  ed.init(e, r);
  const t = e._zod.parse, n = Jn(() => Ja(r)), i = (_) => {
    const f = new xh(["shape", "payload", "ctx"]), b = n.value, m = (x) => {
      const z = vo(x);
      return `shape[${z}]._zod.run({ value: input[${z}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    const k = /* @__PURE__ */ Object.create(null);
    let h = 0;
    for (const x of b.keys)
      k[x] = `key_${h++}`;
    f.write("const newResult = {};");
    for (const x of b.keys) {
      const z = k[x], w = vo(x);
      f.write(`const ${z} = ${m(x)};`), f.write(`
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${w}, ...iss.path] : [${w}]
          })));
        }
        
        
        if (${z}.value === undefined) {
          if (${w} in input) {
            newResult[${w}] = undefined;
          }
        } else {
          newResult[${w}] = ${z}.value;
        }
        
      `);
    }
    f.write("payload.value = newResult;"), f.write("return payload;");
    const v = f.compile();
    return (x, z) => v(_, x, z);
  };
  let o;
  const s = Lr, a = !Ua.jitless, l = a && _f.value, u = r.catchall;
  let d;
  e._zod.parse = (_, f) => {
    d ?? (d = n.value);
    const b = _.value;
    return s(b) ? a && l && f?.async === !1 && f.jitless !== !0 ? (o || (o = i(r.shape)), _ = o(_, f), u ? Qa([], b, _, f, d, e) : _) : t(_, f) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: b,
      inst: e
    }), _);
  };
});
function xo(e, r, t, n) {
  for (const o of e)
    if (o.issues.length === 0)
      return r.value = o.value, r;
  const i = e.filter((o) => !Nt(o));
  return i.length === 1 ? (r.value = i[0].value, i[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: t,
    errors: e.map((o) => o.issues.map((s) => ft(s, n, ut())))
  }), r);
}
const rd = /* @__PURE__ */ j("$ZodUnion", (e, r) => {
  me.init(e, r), pe(e._zod, "optin", () => r.options.some((i) => i._zod.optin === "optional") ? "optional" : void 0), pe(e._zod, "optout", () => r.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), pe(e._zod, "values", () => {
    if (r.options.every((i) => i._zod.values))
      return new Set(r.options.flatMap((i) => Array.from(i._zod.values)));
  }), pe(e._zod, "pattern", () => {
    if (r.options.every((i) => i._zod.pattern)) {
      const i = r.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${i.map((o) => ei(o.source)).join("|")})$`);
    }
  });
  const t = r.options.length === 1, n = r.options[0]._zod.run;
  e._zod.parse = (i, o) => {
    if (t)
      return n(i, o);
    let s = !1;
    const a = [];
    for (const c of r.options) {
      const l = c._zod.run({
        value: i.value,
        issues: []
      }, o);
      if (l instanceof Promise)
        a.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        a.push(l);
      }
    }
    return s ? Promise.all(a).then((c) => xo(c, i, e, o)) : xo(a, i, e, o);
  };
}), nd = /* @__PURE__ */ j("$ZodIntersection", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    const i = t.value, o = r.left._zod.run({ value: i, issues: [] }, n), s = r.right._zod.run({ value: i, issues: [] }, n);
    return o instanceof Promise || s instanceof Promise ? Promise.all([o, s]).then(([c, l]) => ko(t, c, l)) : ko(t, o, s);
  };
});
function Ln(e, r) {
  if (e === r)
    return { valid: !0, data: e };
  if (e instanceof Date && r instanceof Date && +e == +r)
    return { valid: !0, data: e };
  if (Pt(e) && Pt(r)) {
    const t = Object.keys(r), n = Object.keys(e).filter((o) => t.indexOf(o) !== -1), i = { ...e, ...r };
    for (const o of n) {
      const s = Ln(e[o], r[o]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...s.mergeErrorPath]
        };
      i[o] = s.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(r)) {
    if (e.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n], o = r[n], s = Ln(i, o);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...s.mergeErrorPath]
        };
      t.push(s.data);
    }
    return { valid: !0, data: t };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function ko(e, r, t) {
  if (r.issues.length && e.issues.push(...r.issues), t.issues.length && e.issues.push(...t.issues), Nt(e))
    return e;
  const n = Ln(r.value, t.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const id = /* @__PURE__ */ j("$ZodRecord", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    const i = t.value;
    if (!Pt(i))
      return t.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: e
      }), t;
    const o = [], s = r.keyType._zod.values;
    if (s) {
      t.value = {};
      const a = /* @__PURE__ */ new Set();
      for (const l of s)
        if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
          a.add(typeof l == "number" ? l.toString() : l);
          const u = r.valueType._zod.run({ value: i[l], issues: [] }, n);
          u instanceof Promise ? o.push(u.then((d) => {
            d.issues.length && t.issues.push(...zt(l, d.issues)), t.value[l] = d.value;
          })) : (u.issues.length && t.issues.push(...zt(l, u.issues)), t.value[l] = u.value);
        }
      let c;
      for (const l in i)
        a.has(l) || (c = c ?? [], c.push(l));
      c && c.length > 0 && t.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: e,
        keys: c
      });
    } else {
      t.value = {};
      for (const a of Reflect.ownKeys(i)) {
        if (a === "__proto__")
          continue;
        const c = r.keyType._zod.run({ value: a, issues: [] }, n);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (c.issues.length) {
          t.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((u) => ft(u, n, ut())),
            input: a,
            path: [a],
            inst: e
          }), t.value[c.value] = c.value;
          continue;
        }
        const l = r.valueType._zod.run({ value: i[a], issues: [] }, n);
        l instanceof Promise ? o.push(l.then((u) => {
          u.issues.length && t.issues.push(...zt(a, u.issues)), t.value[c.value] = u.value;
        })) : (l.issues.length && t.issues.push(...zt(a, l.issues)), t.value[c.value] = l.value);
      }
    }
    return o.length ? Promise.all(o).then(() => t) : t;
  };
}), od = /* @__PURE__ */ j("$ZodEnum", (e, r) => {
  me.init(e, r);
  const t = hf(r.entries), n = new Set(t);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.filter((i) => gf.has(typeof i)).map((i) => typeof i == "string" ? Zt(i) : i.toString()).join("|")})$`), e._zod.parse = (i, o) => {
    const s = i.value;
    return n.has(s) || i.issues.push({
      code: "invalid_value",
      values: t,
      input: s,
      inst: e
    }), i;
  };
}), ad = /* @__PURE__ */ j("$ZodLiteral", (e, r) => {
  if (me.init(e, r), r.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const t = new Set(r.values);
  e._zod.values = t, e._zod.pattern = new RegExp(`^(${r.values.map((n) => typeof n == "string" ? Zt(n) : n ? Zt(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, i) => {
    const o = n.value;
    return t.has(o) || n.issues.push({
      code: "invalid_value",
      values: r.values,
      input: o,
      inst: e
    }), n;
  };
}), sd = /* @__PURE__ */ j("$ZodTransform", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      throw new $a(e.constructor.name);
    const i = r.transform(t.value, t);
    if (n.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((s) => (t.value = s, t));
    if (i instanceof Promise)
      throw new Ot();
    return t.value = i, t;
  };
});
function Eo(e, r) {
  return e.issues.length && r === void 0 ? { issues: [], value: void 0 } : e;
}
const ld = /* @__PURE__ */ j("$ZodOptional", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", e._zod.optout = "optional", pe(e._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), pe(e._zod, "pattern", () => {
    const t = r.innerType._zod.pattern;
    return t ? new RegExp(`^(${ei(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, n) => {
    if (r.innerType._zod.optin === "optional") {
      const i = r.innerType._zod.run(t, n);
      return i instanceof Promise ? i.then((o) => Eo(o, t.value)) : Eo(i, t.value);
    }
    return t.value === void 0 ? t : r.innerType._zod.run(t, n);
  };
}), cd = /* @__PURE__ */ j("$ZodNullable", (e, r) => {
  me.init(e, r), pe(e._zod, "optin", () => r.innerType._zod.optin), pe(e._zod, "optout", () => r.innerType._zod.optout), pe(e._zod, "pattern", () => {
    const t = r.innerType._zod.pattern;
    return t ? new RegExp(`^(${ei(t.source)}|null)$`) : void 0;
  }), pe(e._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), e._zod.parse = (t, n) => t.value === null ? t : r.innerType._zod.run(t, n);
}), ud = /* @__PURE__ */ j("$ZodDefault", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", pe(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      return r.innerType._zod.run(t, n);
    if (t.value === void 0)
      return t.value = r.defaultValue, t;
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => Ao(o, r)) : Ao(i, r);
  };
});
function Ao(e, r) {
  return e.value === void 0 && (e.value = r.defaultValue), e;
}
const fd = /* @__PURE__ */ j("$ZodPrefault", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", pe(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => (n.direction === "backward" || t.value === void 0 && (t.value = r.defaultValue), r.innerType._zod.run(t, n));
}), hd = /* @__PURE__ */ j("$ZodNonOptional", (e, r) => {
  me.init(e, r), pe(e._zod, "values", () => {
    const t = r.innerType._zod.values;
    return t ? new Set([...t].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (t, n) => {
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => So(o, e)) : So(i, e);
  };
});
function So(e, r) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: r
  }), e;
}
const dd = /* @__PURE__ */ j("$ZodCatch", (e, r) => {
  me.init(e, r), pe(e._zod, "optin", () => r.innerType._zod.optin), pe(e._zod, "optout", () => r.innerType._zod.optout), pe(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      return r.innerType._zod.run(t, n);
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => (t.value = o.value, o.issues.length && (t.value = r.catchValue({
      ...t,
      error: {
        issues: o.issues.map((s) => ft(s, n, ut()))
      },
      input: t.value
    }), t.issues = []), t)) : (t.value = i.value, i.issues.length && (t.value = r.catchValue({
      ...t,
      error: {
        issues: i.issues.map((o) => ft(o, n, ut()))
      },
      input: t.value
    }), t.issues = []), t);
  };
}), pd = /* @__PURE__ */ j("$ZodPipe", (e, r) => {
  me.init(e, r), pe(e._zod, "values", () => r.in._zod.values), pe(e._zod, "optin", () => r.in._zod.optin), pe(e._zod, "optout", () => r.out._zod.optout), pe(e._zod, "propValues", () => r.in._zod.propValues), e._zod.parse = (t, n) => {
    if (n.direction === "backward") {
      const o = r.out._zod.run(t, n);
      return o instanceof Promise ? o.then((s) => Tr(s, r.in, n)) : Tr(o, r.in, n);
    }
    const i = r.in._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => Tr(o, r.out, n)) : Tr(i, r.out, n);
  };
});
function Tr(e, r, t) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: e.value, issues: e.issues }, t);
}
const _d = /* @__PURE__ */ j("$ZodReadonly", (e, r) => {
  me.init(e, r), pe(e._zod, "propValues", () => r.innerType._zod.propValues), pe(e._zod, "values", () => r.innerType._zod.values), pe(e._zod, "optin", () => r.innerType?._zod?.optin), pe(e._zod, "optout", () => r.innerType?._zod?.optout), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      return r.innerType._zod.run(t, n);
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then(No) : No(i);
  };
});
function No(e) {
  return e.value = Object.freeze(e.value), e;
}
const gd = /* @__PURE__ */ j("$ZodCustom", (e, r) => {
  Fe.init(e, r), me.init(e, r), e._zod.parse = (t, n) => t, e._zod.check = (t) => {
    const n = t.value, i = r.fn(n);
    if (i instanceof Promise)
      return i.then((o) => zo(o, t, n, e));
    zo(i, t, n, e);
  };
});
function zo(e, r, t, n) {
  if (!e) {
    const i = {
      code: "custom",
      input: t,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (i.params = n._zod.def.params), r.issues.push(fr(i));
  }
}
var Io;
class md {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...t) {
    const n = t[0];
    if (this._map.set(r, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const t = this._map.get(r);
    return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(r), this;
  }
  get(r) {
    const t = r._zod.parent;
    if (t) {
      const n = { ...this.get(t) ?? {} };
      delete n.id;
      const i = { ...n, ...this._map.get(r) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function bd() {
  return new md();
}
(Io = globalThis).__zod_globalRegistry ?? (Io.__zod_globalRegistry = bd());
const Cr = globalThis.__zod_globalRegistry;
function vd(e, r) {
  return new e({
    type: "string",
    ...te(r)
  });
}
function wd(e, r) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function To(e, r) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function yd(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function xd(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...te(r)
  });
}
function kd(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...te(r)
  });
}
function Ed(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...te(r)
  });
}
function Ad(e, r) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Sd(e, r) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Nd(e, r) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function zd(e, r) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Id(e, r) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Td(e, r) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Cd(e, r) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Od(e, r) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Fd(e, r) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Rd(e, r) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Pd(e, r) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Zd(e, r) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function $d(e, r) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Ud(e, r) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Bd(e, r) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Ld(e, r) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Dd(e, r) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...te(r)
  });
}
function jd(e, r) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...te(r)
  });
}
function Md(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...te(r)
  });
}
function Vd(e, r) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...te(r)
  });
}
function Wd(e, r) {
  return new e({
    type: "number",
    checks: [],
    ...te(r)
  });
}
function Hd(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...te(r)
  });
}
function Gd(e, r) {
  return new e({
    type: "boolean",
    ...te(r)
  });
}
function qd(e) {
  return new e({
    type: "unknown"
  });
}
function Xd(e, r) {
  return new e({
    type: "never",
    ...te(r)
  });
}
function Co(e, r) {
  return new qa({
    check: "less_than",
    ...te(r),
    value: e,
    inclusive: !1
  });
}
function Sn(e, r) {
  return new qa({
    check: "less_than",
    ...te(r),
    value: e,
    inclusive: !0
  });
}
function Oo(e, r) {
  return new Xa({
    check: "greater_than",
    ...te(r),
    value: e,
    inclusive: !1
  });
}
function Nn(e, r) {
  return new Xa({
    check: "greater_than",
    ...te(r),
    value: e,
    inclusive: !0
  });
}
function Fo(e, r) {
  return new uh({
    check: "multiple_of",
    ...te(r),
    value: e
  });
}
function es(e, r) {
  return new hh({
    check: "max_length",
    ...te(r),
    maximum: e
  });
}
function jr(e, r) {
  return new dh({
    check: "min_length",
    ...te(r),
    minimum: e
  });
}
function ts(e, r) {
  return new ph({
    check: "length_equals",
    ...te(r),
    length: e
  });
}
function Yd(e, r) {
  return new _h({
    check: "string_format",
    format: "regex",
    ...te(r),
    pattern: e
  });
}
function Kd(e) {
  return new gh({
    check: "string_format",
    format: "lowercase",
    ...te(e)
  });
}
function Jd(e) {
  return new mh({
    check: "string_format",
    format: "uppercase",
    ...te(e)
  });
}
function Qd(e, r) {
  return new bh({
    check: "string_format",
    format: "includes",
    ...te(r),
    includes: e
  });
}
function ep(e, r) {
  return new vh({
    check: "string_format",
    format: "starts_with",
    ...te(r),
    prefix: e
  });
}
function tp(e, r) {
  return new wh({
    check: "string_format",
    format: "ends_with",
    ...te(r),
    suffix: e
  });
}
function Lt(e) {
  return new yh({
    check: "overwrite",
    tx: e
  });
}
function rp(e) {
  return Lt((r) => r.normalize(e));
}
function np() {
  return Lt((e) => e.trim());
}
function ip() {
  return Lt((e) => e.toLowerCase());
}
function op() {
  return Lt((e) => e.toUpperCase());
}
function ap() {
  return Lt((e) => pf(e));
}
function sp(e, r, t) {
  return new e({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...te(t)
  });
}
function lp(e, r, t) {
  return new e({
    type: "custom",
    check: "custom",
    fn: r,
    ...te(t)
  });
}
function cp(e) {
  const r = up((t) => (t.addIssue = (n) => {
    if (typeof n == "string")
      t.issues.push(fr(n, t.value, r._zod.def));
    else {
      const i = n;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), t.issues.push(fr(i));
    }
  }, e(t.value, t)));
  return r;
}
function up(e, r) {
  const t = new Fe({
    check: "custom",
    ...te(r)
  });
  return t._zod.check = e, t;
}
const fp = /* @__PURE__ */ j("ZodISODateTime", (e, r) => {
  Ph.init(e, r), be.init(e, r);
});
function hp(e) {
  return Dd(fp, e);
}
const dp = /* @__PURE__ */ j("ZodISODate", (e, r) => {
  Zh.init(e, r), be.init(e, r);
});
function pp(e) {
  return jd(dp, e);
}
const _p = /* @__PURE__ */ j("ZodISOTime", (e, r) => {
  $h.init(e, r), be.init(e, r);
});
function gp(e) {
  return Md(_p, e);
}
const mp = /* @__PURE__ */ j("ZodISODuration", (e, r) => {
  Uh.init(e, r), be.init(e, r);
});
function bp(e) {
  return Vd(mp, e);
}
const vp = (e, r) => {
  ja.init(e, r), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (t) => Nf(e, t)
      // enumerable: false,
    },
    flatten: {
      value: (t) => Sf(e, t)
      // enumerable: false,
    },
    addIssue: {
      value: (t) => {
        e.issues.push(t), e.message = JSON.stringify(e.issues, Bn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (t) => {
        e.issues.push(...t), e.message = JSON.stringify(e.issues, Bn, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Le = j("ZodError", vp, {
  Parent: Error
}), wp = /* @__PURE__ */ ri(Le), yp = /* @__PURE__ */ ni(Le), xp = /* @__PURE__ */ Hr(Le), kp = /* @__PURE__ */ Gr(Le), Ep = /* @__PURE__ */ Tf(Le), Ap = /* @__PURE__ */ Cf(Le), Sp = /* @__PURE__ */ Of(Le), Np = /* @__PURE__ */ Ff(Le), zp = /* @__PURE__ */ Rf(Le), Ip = /* @__PURE__ */ Pf(Le), Tp = /* @__PURE__ */ Zf(Le), Cp = /* @__PURE__ */ $f(Le), ve = /* @__PURE__ */ j("ZodType", (e, r) => (me.init(e, r), e.def = r, e.type = r.type, Object.defineProperty(e, "_def", { value: r }), e.check = (...t) => e.clone(Et(r, {
  checks: [
    ...r.checks ?? [],
    ...t.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (t, n) => dt(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => wp(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => xp(e, t, n), e.parseAsync = async (t, n) => yp(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => kp(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Ep(e, t, n), e.decode = (t, n) => Ap(e, t, n), e.encodeAsync = async (t, n) => Sp(e, t, n), e.decodeAsync = async (t, n) => Np(e, t, n), e.safeEncode = (t, n) => zp(e, t, n), e.safeDecode = (t, n) => Ip(e, t, n), e.safeEncodeAsync = async (t, n) => Tp(e, t, n), e.safeDecodeAsync = async (t, n) => Cp(e, t, n), e.refine = (t, n) => e.check(E0(t, n)), e.superRefine = (t) => e.check(A0(t)), e.overwrite = (t) => e.check(Lt(t)), e.optional = () => $o(e), e.nullable = () => Uo(e), e.nullish = () => $o(Uo(e)), e.nonoptional = (t) => m0(e, t), e.array = () => lt(e), e.or = (t) => er([e, t]), e.and = (t) => a0(e, t), e.transform = (t) => Bo(e, f0(t)), e.default = (t) => p0(e, t), e.prefault = (t) => g0(e, t), e.catch = (t) => v0(e, t), e.pipe = (t) => Bo(e, t), e.readonly = () => x0(e), e.describe = (t) => {
  const n = e.clone();
  return Cr.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return Cr.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...t) => {
  if (t.length === 0)
    return Cr.get(e);
  const n = e.clone();
  return Cr.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), rs = /* @__PURE__ */ j("_ZodString", (e, r) => {
  ii.init(e, r), ve.init(e, r);
  const t = e._zod.bag;
  e.format = t.format ?? null, e.minLength = t.minimum ?? null, e.maxLength = t.maximum ?? null, e.regex = (...n) => e.check(Yd(...n)), e.includes = (...n) => e.check(Qd(...n)), e.startsWith = (...n) => e.check(ep(...n)), e.endsWith = (...n) => e.check(tp(...n)), e.min = (...n) => e.check(jr(...n)), e.max = (...n) => e.check(es(...n)), e.length = (...n) => e.check(ts(...n)), e.nonempty = (...n) => e.check(jr(1, ...n)), e.lowercase = (n) => e.check(Kd(n)), e.uppercase = (n) => e.check(Jd(n)), e.trim = () => e.check(np()), e.normalize = (...n) => e.check(rp(...n)), e.toLowerCase = () => e.check(ip()), e.toUpperCase = () => e.check(op()), e.slugify = () => e.check(ap());
}), Op = /* @__PURE__ */ j("ZodString", (e, r) => {
  ii.init(e, r), rs.init(e, r), e.email = (t) => e.check(wd(Fp, t)), e.url = (t) => e.check(Ad(Rp, t)), e.jwt = (t) => e.check(Ld(Xp, t)), e.emoji = (t) => e.check(Sd(Pp, t)), e.guid = (t) => e.check(To(Ro, t)), e.uuid = (t) => e.check(yd(Or, t)), e.uuidv4 = (t) => e.check(xd(Or, t)), e.uuidv6 = (t) => e.check(kd(Or, t)), e.uuidv7 = (t) => e.check(Ed(Or, t)), e.nanoid = (t) => e.check(Nd(Zp, t)), e.guid = (t) => e.check(To(Ro, t)), e.cuid = (t) => e.check(zd($p, t)), e.cuid2 = (t) => e.check(Id(Up, t)), e.ulid = (t) => e.check(Td(Bp, t)), e.base64 = (t) => e.check($d(Hp, t)), e.base64url = (t) => e.check(Ud(Gp, t)), e.xid = (t) => e.check(Cd(Lp, t)), e.ksuid = (t) => e.check(Od(Dp, t)), e.ipv4 = (t) => e.check(Fd(jp, t)), e.ipv6 = (t) => e.check(Rd(Mp, t)), e.cidrv4 = (t) => e.check(Pd(Vp, t)), e.cidrv6 = (t) => e.check(Zd(Wp, t)), e.e164 = (t) => e.check(Bd(qp, t)), e.datetime = (t) => e.check(hp(t)), e.date = (t) => e.check(pp(t)), e.time = (t) => e.check(gp(t)), e.duration = (t) => e.check(bp(t));
});
function se(e) {
  return vd(Op, e);
}
const be = /* @__PURE__ */ j("ZodStringFormat", (e, r) => {
  ge.init(e, r), rs.init(e, r);
}), Fp = /* @__PURE__ */ j("ZodEmail", (e, r) => {
  Sh.init(e, r), be.init(e, r);
}), Ro = /* @__PURE__ */ j("ZodGUID", (e, r) => {
  Eh.init(e, r), be.init(e, r);
}), Or = /* @__PURE__ */ j("ZodUUID", (e, r) => {
  Ah.init(e, r), be.init(e, r);
}), Rp = /* @__PURE__ */ j("ZodURL", (e, r) => {
  Nh.init(e, r), be.init(e, r);
}), Pp = /* @__PURE__ */ j("ZodEmoji", (e, r) => {
  zh.init(e, r), be.init(e, r);
}), Zp = /* @__PURE__ */ j("ZodNanoID", (e, r) => {
  Ih.init(e, r), be.init(e, r);
}), $p = /* @__PURE__ */ j("ZodCUID", (e, r) => {
  Th.init(e, r), be.init(e, r);
}), Up = /* @__PURE__ */ j("ZodCUID2", (e, r) => {
  Ch.init(e, r), be.init(e, r);
}), Bp = /* @__PURE__ */ j("ZodULID", (e, r) => {
  Oh.init(e, r), be.init(e, r);
}), Lp = /* @__PURE__ */ j("ZodXID", (e, r) => {
  Fh.init(e, r), be.init(e, r);
}), Dp = /* @__PURE__ */ j("ZodKSUID", (e, r) => {
  Rh.init(e, r), be.init(e, r);
}), jp = /* @__PURE__ */ j("ZodIPv4", (e, r) => {
  Bh.init(e, r), be.init(e, r);
}), Mp = /* @__PURE__ */ j("ZodIPv6", (e, r) => {
  Lh.init(e, r), be.init(e, r);
}), Vp = /* @__PURE__ */ j("ZodCIDRv4", (e, r) => {
  Dh.init(e, r), be.init(e, r);
}), Wp = /* @__PURE__ */ j("ZodCIDRv6", (e, r) => {
  jh.init(e, r), be.init(e, r);
}), Hp = /* @__PURE__ */ j("ZodBase64", (e, r) => {
  Mh.init(e, r), be.init(e, r);
}), Gp = /* @__PURE__ */ j("ZodBase64URL", (e, r) => {
  Wh.init(e, r), be.init(e, r);
}), qp = /* @__PURE__ */ j("ZodE164", (e, r) => {
  Hh.init(e, r), be.init(e, r);
}), Xp = /* @__PURE__ */ j("ZodJWT", (e, r) => {
  qh.init(e, r), be.init(e, r);
}), ns = /* @__PURE__ */ j("ZodNumber", (e, r) => {
  Ka.init(e, r), ve.init(e, r), e.gt = (n, i) => e.check(Oo(n, i)), e.gte = (n, i) => e.check(Nn(n, i)), e.min = (n, i) => e.check(Nn(n, i)), e.lt = (n, i) => e.check(Co(n, i)), e.lte = (n, i) => e.check(Sn(n, i)), e.max = (n, i) => e.check(Sn(n, i)), e.int = (n) => e.check(Po(n)), e.safe = (n) => e.check(Po(n)), e.positive = (n) => e.check(Oo(0, n)), e.nonnegative = (n) => e.check(Nn(0, n)), e.negative = (n) => e.check(Co(0, n)), e.nonpositive = (n) => e.check(Sn(0, n)), e.multipleOf = (n, i) => e.check(Fo(n, i)), e.step = (n, i) => e.check(Fo(n, i)), e.finite = () => e;
  const t = e._zod.bag;
  e.minValue = Math.max(t.minimum ?? Number.NEGATIVE_INFINITY, t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(t.maximum ?? Number.POSITIVE_INFINITY, t.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5), e.isFinite = !0, e.format = t.format ?? null;
});
function Dn(e) {
  return Wd(ns, e);
}
const Yp = /* @__PURE__ */ j("ZodNumberFormat", (e, r) => {
  Xh.init(e, r), ns.init(e, r);
});
function Po(e) {
  return Hd(Yp, e);
}
const Kp = /* @__PURE__ */ j("ZodBoolean", (e, r) => {
  Yh.init(e, r), ve.init(e, r);
});
function Jp(e) {
  return Gd(Kp, e);
}
const Qp = /* @__PURE__ */ j("ZodUnknown", (e, r) => {
  Kh.init(e, r), ve.init(e, r);
});
function Zo() {
  return qd(Qp);
}
const e0 = /* @__PURE__ */ j("ZodNever", (e, r) => {
  Jh.init(e, r), ve.init(e, r);
});
function t0(e) {
  return Xd(e0, e);
}
const r0 = /* @__PURE__ */ j("ZodArray", (e, r) => {
  Qh.init(e, r), ve.init(e, r), e.element = r.element, e.min = (t, n) => e.check(jr(t, n)), e.nonempty = (t) => e.check(jr(1, t)), e.max = (t, n) => e.check(es(t, n)), e.length = (t, n) => e.check(ts(t, n)), e.unwrap = () => e.element;
});
function lt(e, r) {
  return sp(r0, e, r);
}
const n0 = /* @__PURE__ */ j("ZodObject", (e, r) => {
  td.init(e, r), ve.init(e, r), pe(e, "shape", () => r.shape), e.keyof = () => l0(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Zo() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Zo() }), e.strict = () => e.clone({ ...e._zod.def, catchall: t0() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (t) => yf(e, t), e.safeExtend = (t) => xf(e, t), e.merge = (t) => kf(e, t), e.pick = (t) => vf(e, t), e.omit = (t) => wf(e, t), e.partial = (...t) => Ef(os, e, t[0]), e.required = (...t) => Af(as, e, t[0]);
});
function Dt(e, r) {
  const t = {
    type: "object",
    shape: e ?? {},
    ...te(r)
  };
  return new n0(t);
}
const i0 = /* @__PURE__ */ j("ZodUnion", (e, r) => {
  rd.init(e, r), ve.init(e, r), e.options = r.options;
});
function er(e, r) {
  return new i0({
    type: "union",
    options: e,
    ...te(r)
  });
}
const o0 = /* @__PURE__ */ j("ZodIntersection", (e, r) => {
  nd.init(e, r), ve.init(e, r);
});
function a0(e, r) {
  return new o0({
    type: "intersection",
    left: e,
    right: r
  });
}
const s0 = /* @__PURE__ */ j("ZodRecord", (e, r) => {
  id.init(e, r), ve.init(e, r), e.keyType = r.keyType, e.valueType = r.valueType;
});
function is(e, r, t) {
  return new s0({
    type: "record",
    keyType: e,
    valueType: r,
    ...te(t)
  });
}
const jn = /* @__PURE__ */ j("ZodEnum", (e, r) => {
  od.init(e, r), ve.init(e, r), e.enum = r.entries, e.options = Object.values(r.entries);
  const t = new Set(Object.keys(r.entries));
  e.extract = (n, i) => {
    const o = {};
    for (const s of n)
      if (t.has(s))
        o[s] = r.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new jn({
      ...r,
      checks: [],
      ...te(i),
      entries: o
    });
  }, e.exclude = (n, i) => {
    const o = { ...r.entries };
    for (const s of n)
      if (t.has(s))
        delete o[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new jn({
      ...r,
      checks: [],
      ...te(i),
      entries: o
    });
  };
});
function l0(e, r) {
  const t = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new jn({
    type: "enum",
    entries: t,
    ...te(r)
  });
}
const c0 = /* @__PURE__ */ j("ZodLiteral", (e, r) => {
  ad.init(e, r), ve.init(e, r), e.values = new Set(r.values), Object.defineProperty(e, "value", {
    get() {
      if (r.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return r.values[0];
    }
  });
});
function He(e, r) {
  return new c0({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...te(r)
  });
}
const u0 = /* @__PURE__ */ j("ZodTransform", (e, r) => {
  sd.init(e, r), ve.init(e, r), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      throw new $a(e.constructor.name);
    t.addIssue = (o) => {
      if (typeof o == "string")
        t.issues.push(fr(o, t.value, r));
      else {
        const s = o;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = t.value), s.inst ?? (s.inst = e), t.issues.push(fr(s));
      }
    };
    const i = r.transform(t.value, t);
    return i instanceof Promise ? i.then((o) => (t.value = o, t)) : (t.value = i, t);
  };
});
function f0(e) {
  return new u0({
    type: "transform",
    transform: e
  });
}
const os = /* @__PURE__ */ j("ZodOptional", (e, r) => {
  ld.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function $o(e) {
  return new os({
    type: "optional",
    innerType: e
  });
}
const h0 = /* @__PURE__ */ j("ZodNullable", (e, r) => {
  cd.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function Uo(e) {
  return new h0({
    type: "nullable",
    innerType: e
  });
}
const d0 = /* @__PURE__ */ j("ZodDefault", (e, r) => {
  ud.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function p0(e, r) {
  return new d0({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : La(r);
    }
  });
}
const _0 = /* @__PURE__ */ j("ZodPrefault", (e, r) => {
  fd.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function g0(e, r) {
  return new _0({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : La(r);
    }
  });
}
const as = /* @__PURE__ */ j("ZodNonOptional", (e, r) => {
  hd.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function m0(e, r) {
  return new as({
    type: "nonoptional",
    innerType: e,
    ...te(r)
  });
}
const b0 = /* @__PURE__ */ j("ZodCatch", (e, r) => {
  dd.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function v0(e, r) {
  return new b0({
    type: "catch",
    innerType: e,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const w0 = /* @__PURE__ */ j("ZodPipe", (e, r) => {
  pd.init(e, r), ve.init(e, r), e.in = r.in, e.out = r.out;
});
function Bo(e, r) {
  return new w0({
    type: "pipe",
    in: e,
    out: r
    // ...util.normalizeParams(params),
  });
}
const y0 = /* @__PURE__ */ j("ZodReadonly", (e, r) => {
  _d.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function x0(e) {
  return new y0({
    type: "readonly",
    innerType: e
  });
}
const k0 = /* @__PURE__ */ j("ZodCustom", (e, r) => {
  gd.init(e, r), ve.init(e, r);
});
function E0(e, r = {}) {
  return lp(k0, e, r);
}
function A0(e) {
  return cp(e);
}
const Lo = er([se(), Dt({
  imageURL: se(),
  width: Dn().optional(),
  height: Dn().optional()
})]), S0 = Dt({
  version: se(),
  buildVersion: se().optional(),
  marketingVersion: se().optional(),
  date: se(),
  downloadURL: se(),
  localizedDescription: se().optional(),
  size: Dn().optional(),
  minOSVersion: se().optional(),
  maxOSVersion: se().optional()
}), N0 = Dt({
  entitlements: lt(se()).optional(),
  privacy: is(se(), se()).optional()
}), z0 = Dt({
  name: se(),
  bundleIdentifier: se(),
  developerName: se(),
  subtitle: se().optional(),
  localizedDescription: se(),
  iconURL: se(),
  tintColor: se().optional(),
  screenshots: er([lt(Lo), is(er([He("iphone"), He("ipad")]), lt(Lo))]).optional(),
  versions: lt(S0),
  appPermissions: N0.optional(),
  category: er([He("developer"), He("entertainment"), He("games"), He("lifestyle"), He("other"), He("photo-video"), He("social"), He("utilities")]).optional()
}), I0 = Dt({
  title: se(),
  identifier: se(),
  caption: se().optional(),
  date: se(),
  tintColor: se().optional(),
  imageURL: se().optional(),
  notify: Jp().optional(),
  url: se().optional(),
  appID: se().optional()
}), T0 = Dt({
  name: se(),
  subtitle: se().optional(),
  description: se().optional(),
  iconURL: se().optional(),
  headerURL: se().optional(),
  website: se().optional(),
  tintColor: se().optional(),
  featuredApps: lt(se()).optional(),
  apps: lt(z0),
  news: lt(I0).optional()
}), C0 = {
  name: "",
  bundle_identifier: "",
  category: "other",
  description: null,
  subtitle: null,
  ipad_screenshots: [],
  iphone_screenshots: [],
  created_at: (/* @__PURE__ */ new Date()).toISOString(),
  icon_path: null,
  entitlements: [],
  privacy: []
}, W0 = () => {
  const { session: e, createApp: r, reloadApps: t } = Oe(), n = Ye(), i = tr(null), o = tr(null), [s, a] = Se(null);
  return /* @__PURE__ */ Y("div", { className: "developer-container", children: [
    /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "Create New App" }),
    /* @__PURE__ */ Z(
      "h4",
      {
        style: { marginBottom: "1.5rem" },
        className: "text-link",
        onClick: () => n("/developers"),
        children: "Back to Dashboard"
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(ke, { className: "import-ipa", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ Z("h2", { children: "Import App" }),
          /* @__PURE__ */ Z("p", { style: { color: "var(--label-secondary)" }, children: "Import your app from an existing .ipa file or AltStore source" })
        ] }),
        /* @__PURE__ */ Z(
          "button",
          {
            onClick: () => {
              i.current?.click();
            },
            children: "Import from an IPA file"
          }
        ),
        /* @__PURE__ */ Z(
          "button",
          {
            onClick: () => {
              o.current?.click();
            },
            children: "Import from AltStore Source"
          }
        ),
        /* @__PURE__ */ Z(
          "input",
          {
            type: "file",
            accept: ".ipa",
            style: { display: "none" },
            ref: i,
            onChange: async (c) => {
              const l = c.target.files?.[0];
              if (!l) return;
              let u = sf(
                l,
                r,
                e,
                n,
                t
              );
              oe.promise(u, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (d) => "Failed to import IPA: " + String(d)
              });
            }
          }
        ),
        /* @__PURE__ */ Z(
          "input",
          {
            type: "file",
            accept: ".json",
            style: { display: "none" },
            ref: o,
            onChange: async (c) => {
              const l = c.target.files?.[0];
              if (!l) return;
              let u = async () => {
                let d = await l.text(), _ = JSON.parse(d), f = T0.parse(_);
                a(f);
              };
              oe.promise(u(), {
                loading: "Loading AltStore Source...",
                success: "AltStore Source loaded successfully!",
                error: (d) => (console.error(d), "Failed to load AltStore Source: " + String(d))
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ Z(
        Go,
        {
          label: "Or, manually create",
          app: C0,
          save: async (c) => {
            if (!e || !e.user)
              return oe.error("You must be logged in to create an app.");
            const l = {
              ...c,
              owner: e.user.id,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            };
            l.name = l.name.trim(), l.bundle_identifier = l.bundle_identifier.trim(), l.subtitle = l.subtitle?.trim() || null, l.description = l.description?.trim() || null;
            const u = await r(l);
            oe.success("App created successfully!"), u?.error || n("/developers");
          }
        }
      ),
      s && /* @__PURE__ */ Z(
        uf,
        {
          source: s,
          cancel: () => {
            a(null);
          }
        }
      )
    ] })
  ] });
}, Do = [
  {
    label: "Version",
    description: "The version number matching CFBundleShortVersionString.",
    id: "version",
    placeholder: "1.0.0",
    required: !0,
    type: "text"
  },
  {
    label: "Build Version",
    description: "The build version, matching CFBundleVersion.",
    id: "build_version",
    placeholder: "1",
    required: !0,
    type: "text"
  },
  {
    label: "Download URL",
    description: "The direct download link to the .ipa file.",
    id: "download_url",
    placeholder: "https://example.com/app.ipa",
    type: "text",
    required: !0
  },
  {
    label: "Checksum",
    description: "The SHA-256 checksum of the .ipa file.",
    id: "checksum",
    placeholder: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    type: "text",
    required: !0,
    validate: (e) => /^[a-f0-9]{64}$/.test(e)
  },
  {
    label: "Changelog",
    id: "changelog",
    placeholder: "The best update ever, available on StikStore.",
    type: "textarea"
  }
], ss = ({
  version: e,
  save: r,
  titleOverride: t
}) => {
  const [n, i] = Se(e);
  return ct(() => {
    i(e);
  }, [e]), /* @__PURE__ */ Z(ke, { children: /* @__PURE__ */ Y("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ Y("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ Z("h2", { children: t ?? "Version Metadata" }),
      /* @__PURE__ */ Y("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    Do.map((o) => /* @__PURE__ */ Z(
      Ho,
      {
        field: o,
        updateValue: (s) => {
          i({ ...n, [o.id]: s });
        },
        value: n[o.id]
      },
      o.id
    )),
    /* @__PURE__ */ Z(
      "button",
      {
        className: "primary",
        style: {
          marginTop: "1rem"
        },
        type: "submit",
        onClick: (o) => {
          if (o.preventDefault(), !n.version || !n.build_version || !n.download_url)
            return oe.error("Please fill in all required fields");
          for (const s of Do)
            if (s.validate) {
              const a = n[s.id];
              if (typeof a == "string" && !s.validate(a))
                return oe.error(`Invalid value for ${s.label}`);
            }
          r(n);
        },
        disabled: !n.version || !n.build_version || !n.download_url || n === e,
        children: "Save Version"
      }
    )
  ] }) });
}, O0 = {
  build_version: "",
  changelog: null,
  created_at: (/* @__PURE__ */ new Date()).toISOString(),
  download_url: "",
  version: "",
  checksum: null
}, H0 = () => {
  const { id: e } = ht(), { apps: r, session: t } = Oe(), n = Ye(), i = tr(null), o = r.find((s) => s.id === Number(e));
  return o ? /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(
      rr,
      {
        app: o,
        showBackToApp: !0,
        backToAppPage: "versions",
        titleOverride: `New Version for ${o.name}`
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(ke, { className: "import-ipa", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ Z("h2", { children: "Import Version" }),
          /* @__PURE__ */ Z("p", { style: { color: "var(--label-secondary)" }, children: "Import version data directly from an IPA file" })
        ] }),
        /* @__PURE__ */ Z(
          "button",
          {
            onClick: () => {
              i.current?.click();
            },
            children: "Import from an IPA file"
          }
        ),
        /* @__PURE__ */ Z(
          "input",
          {
            type: "file",
            accept: ".ipa",
            style: { display: "none" },
            ref: i,
            onChange: async (s) => {
              const a = s.target.files?.[0];
              if (!a) return;
              let c = af(a, o);
              oe.promise(c, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (l) => "Failed to import IPA: " + String(l)
              }), c.then((l) => {
                l && l.data && n(`/developers/app/${o.id}/version/${l.data.id}`);
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ Z(
        ss,
        {
          titleOverride: "Or, manually create",
          version: O0,
          save: async (s) => {
            if (!t || !t.user || !o)
              return oe.error("You must be logged in to create an app.");
            const a = {
              ...s,
              app_id: o.id,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            };
            if (!t) {
              oe.error("You must be logged in to create an app.");
              return;
            }
            const c = await ae().from("versions").insert([a]);
            c.error ? (console.error(c.error), oe.error(Ce(c.error, "version"))) : c.data && (oe.success("Version created successfully!"), n("/developers/app/" + o.id));
          }
        }
      )
    ] })
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, ls = Vo(void 0), G0 = ({
  children: e
}) => {
  const [r, t] = Se(
    null
  ), n = (o) => {
    t(o);
  }, i = () => {
    t(null);
  };
  return /* @__PURE__ */ Y(ls.Provider, { value: { showPrompt: n, hidePrompt: i }, children: [
    e,
    r && /* @__PURE__ */ Z("div", { className: "prompt-modal", children: /* @__PURE__ */ Y(ke, { children: [
      /* @__PURE__ */ Z("h1", { children: r.title }),
      /* @__PURE__ */ Z("p", { children: r.content }),
      /* @__PURE__ */ Z("div", { className: "prompt-buttons", children: r.options.map((o, s) => /* @__PURE__ */ Z(
        "button",
        {
          className: o.className,
          onClick: () => {
            o.action(), i();
          },
          children: o.text
        },
        s
      )) })
    ] }) })
  ] });
}, cs = () => {
  const e = ps(ls);
  if (!e)
    throw new Error("usePrompt must be used within a PromptProvider");
  return e;
}, q0 = () => {
  const { id: e, versionId: r } = ht(), { apps: t, reloadApps: n } = Oe(), i = t.find((d) => d.id === Number(e)), [o, s] = Se(!0), [a, c] = Se(null), { showPrompt: l } = cs(), u = Ye();
  return ct(() => {
    (async () => {
      if (!i) return;
      const { data: _, error: f } = await ae().from("versions").select("*").eq("app_id", i.id).eq("id", Number(r)).single();
      s(!1), f ? (console.error(f), oe.error(Ce(f, "version"))) : c(_);
    })();
  }, [i]), i ? !a && !o ? /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "Version Not Found" }) }) : o || !a ? /* @__PURE__ */ Z("div", { className: "developer-container app-page-container", children: /* @__PURE__ */ Z(rr, { app: i, showBackToApp: !0 }) }) : /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(
      rr,
      {
        app: i,
        titleOverride: `Version ${a.version} (${a.build_version})`,
        subtitleOverride: i.name,
        showBackToApp: !0,
        backToAppPage: "versions"
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Z(
        ss,
        {
          version: a,
          save: async (d) => {
            const _ = await ae().from("versions").update(d).eq("id", Number(a?.id)).single();
            _.error ? (console.error(_.error), oe.error(Ce(_.error, "version"))) : (oe.success("Version updated successfully"), n());
          }
        }
      ),
      /* @__PURE__ */ Y(ke, { className: "app-subcard management-card delete-version-card", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ Z("h2", { children: "Delete Version" }),
          /* @__PURE__ */ Z("p", { className: "app-subtext", children: "This action cannot be undone." })
        ] }),
        /* @__PURE__ */ Z(
          "button",
          {
            className: "danger",
            onClick: async () => {
              l({
                title: "Delete Version",
                content: `Are you sure you want to delete version ${a.version} (${a.build_version}) from ${i.name}? This action cannot be undone.`,
                options: [
                  {
                    text: "Delete",
                    className: "danger",
                    action: async () => {
                      const d = await ae().from("versions").delete().eq("id", a.id);
                      d.error ? (console.error(d.error), oe.error(
                        Ce(d.error, "version")
                      )) : (oe.success("Version deleted successfully"), u("/developers/app/" + i.id), n());
                    }
                  },
                  { text: "Cancel", action: () => {
                  }, className: "" }
                ]
              });
            },
            children: "Delete Version"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, F0 = [
  "info",
  "permissions",
  "versions",
  "screenshots",
  "management"
], X0 = () => {
  const e = Ye(), r = gs(), { id: t } = ht(), { apps: n } = Oe(), i = n.find((s) => s.id === Number(t)), o = r.pathname.split("/")[4] || "info";
  return i ? /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(rr, { app: i }),
    /* @__PURE__ */ Z(ke, { className: "tab-buttons", children: F0.map((s) => /* @__PURE__ */ Z(
      "h3",
      {
        className: "text-link" + (o === s ? " text-link-active" : ""),
        onClick: () => e(`/developers/app/${i.id}/${s}`),
        children: s.charAt(0).toUpperCase() + s.slice(1)
      },
      s
    )) }),
    /* @__PURE__ */ Z(ms, {})
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, Y0 = () => {
  const { id: e } = ht(), { apps: r, reloadApps: t, uploadIcon: n } = Oe(), i = r.find((a) => a.id === Number(e)), o = tr(null), s = Mn(
    () => i?.icon_path ? ae().storage.from("app-images").getPublicUrl(i.icon_path).data.publicUrl : "/default-icon.png",
    [i?.icon_path]
  );
  return i ? /* @__PURE__ */ Y("section", { className: "developer-page", children: [
    /* @__PURE__ */ Z(
      Go,
      {
        style: { flexGrow: 2 },
        app: i,
        save: async (a) => {
          const c = await ae().from("apps").update(a).eq("id", Number(i.id)).single();
          c.error ? (console.error(c.error), oe.error(Ce(c.error, "app"))) : (oe.success("App updated successfully"), t());
        }
      }
    ),
    /* @__PURE__ */ Y(ke, { className: "app-subcard icon-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ Z("h2", { style: { margin: 0 }, children: "App Icon" }),
        /* @__PURE__ */ Z("p", { className: "app-subtext", children: "Icons will be masked to an iOS style shape." })
      ] }),
      /* @__PURE__ */ Z("img", { src: s, className: "app-icon" }),
      /* @__PURE__ */ Y("div", { style: { width: "100%" }, children: [
        /* @__PURE__ */ Z(
          "button",
          {
            onClick: () => {
              o.current?.click();
            },
            children: "Upload New Icon"
          }
        ),
        /* @__PURE__ */ Z(
          "p",
          {
            className: "app-subtext",
            style: {
              marginTop: "0.5rem"
            },
            children: "Max upload size: 3MB"
          }
        )
      ] }),
      /* @__PURE__ */ Z(
        "input",
        {
          type: "file",
          style: { display: "none" },
          ref: o,
          accept: "image/*",
          onChange: async (a) => {
            const c = a.target.files?.[0];
            !c || !i || oe.promise(n(c, i), {
              loading: "Uploading icon...",
              success: "Icon uploaded successfully!",
              error: (l) => l instanceof Error ? l.message : String(l)
            });
          }
        }
      )
    ] })
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, K0 = () => {
  const { id: e } = ht(), { apps: r, reloadApps: t } = Oe(), n = r.find((c) => c.id === Number(e)), [i, o] = Se(() => n ? n.entitlements || [] : []), [s, a] = Se(() => n ? n.privacy || [] : []);
  return ct(() => {
    n && o(n.entitlements || []);
  }, [n?.entitlements]), ct(() => {
    n && a(n.privacy || []);
  }, [n?.privacy]), n ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ Y("div", { className: "entitlements-container", children: [
    /* @__PURE__ */ Y(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ Z("h2", { children: "Save Changes" }),
        /* @__PURE__ */ Z("p", { className: "app-subtext", children: "Save changes to entitlements and privacy info" })
      ] }),
      /* @__PURE__ */ Z(
        "button",
        {
          className: "primary",
          disabled: s === n.privacy && i === n.entitlements || s.some((c) => c[0] === "" || c[1] === "") || i.some((c) => c === ""),
          onClick: async () => {
            const c = await ae().from("apps").update({ privacy: s, entitlements: i }).eq("id", n.id).single();
            c.error ? (console.error(c.error), oe.error(Ce(c.error, "app"))) : (oe.success("Privacy Info updated successfully"), t());
          },
          children: "Save"
        }
      )
    ] }),
    /* @__PURE__ */ Y(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ Z("h2", { children: "Entitlements" }),
        /* @__PURE__ */ Y("p", { className: "app-subtext", children: [
          "List all entitelements except",
          " ",
          /* @__PURE__ */ Z("span", { className: "entitlement-text", children: "com.app.developer.team-identifier" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ Z("span", { className: "entitlement-text", children: "application-identifier" })
        ] })
      ] }),
      /* @__PURE__ */ Y("ul", { children: [
        i.length === 0 && /* @__PURE__ */ Z("p", { children: "No entitlements added yet." }),
        i.map((c, l) => /* @__PURE__ */ Y("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ Z(
            "input",
            {
              type: "text",
              value: c,
              onChange: (u) => {
                const d = u.target.value;
                o((_) => {
                  const f = [..._];
                  return f[l] = d, f;
                });
              },
              placeholder: "com.apple.security.application-groups"
            }
          ),
          /* @__PURE__ */ Z(
            "button",
            {
              className: "danger entitlement-delete-button",
              onClick: () => {
                o((u) => u.filter((d, _) => _ !== l));
              },
              children: "Delete"
            }
          )
        ] }, l))
      ] }),
      /* @__PURE__ */ Z(
        "button",
        {
          onClick: () => {
            o((c) => [...c, ""]);
          },
          children: "Add entitlement"
        }
      )
    ] }),
    /* @__PURE__ */ Y(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ Z("h2", { children: "Privacy Info" }),
        /* @__PURE__ */ Z("p", { className: "app-subtext", children: "List all usage descriptions from your Info.plist" })
      ] }),
      /* @__PURE__ */ Y("ul", { children: [
        s.length === 0 && /* @__PURE__ */ Z("p", { children: "No privacy entries added yet." }),
        s.map((c, l) => /* @__PURE__ */ Y("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ Z(
            "input",
            {
              type: "text",
              value: c[0],
              onChange: (u) => {
                const d = u.target.value;
                a((_) => {
                  const f = [..._];
                  return f[l][0] = d, f;
                });
              },
              placeholder: "NSCameraUsageDescription"
            }
          ),
          /* @__PURE__ */ Z(
            "input",
            {
              type: "text",
              value: c[1],
              onChange: (u) => {
                const d = u.target.value;
                a((_) => {
                  const f = [..._];
                  return f[l][1] = d, f;
                });
              },
              placeholder: "This app requires camera access to scan QR codes."
            }
          ),
          /* @__PURE__ */ Z(
            "button",
            {
              className: "danger entitlement-delete-button",
              onClick: () => {
                a((u) => u.filter((d, _) => _ !== l));
              },
              children: "Delete"
            }
          )
        ] }, l))
      ] }),
      /* @__PURE__ */ Z(
        "button",
        {
          onClick: () => {
            a((c) => [...c, ["", ""]]);
          },
          children: "Add privacy entry"
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, J0 = () => {
  const { id: e } = ht(), { apps: r } = Oe(), t = Ye(), n = r.find((c) => c.id === Number(e)), [i, o] = Se(!0), [s, a] = Se([]);
  return ct(() => {
    (async () => {
      if (!n) return;
      const { data: l, error: u } = await ae().from("versions").select("*").eq("app_id", n.id).order("created_at", { ascending: !1 });
      u ? (console.error(u), oe.error(Ce(u, "version"))) : a(l), o(!1);
    })();
  }, [n]), n ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ Y(ke, { className: "app-subcard versions-card", children: [
    /* @__PURE__ */ Z("h2", { children: "Versions" }),
    s.length === 0 && !i && /* @__PURE__ */ Z("p", { className: "app-subtext", children: "It seems you don't have any versions yet. Let's change that!" }),
    /* @__PURE__ */ Z("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: s.map((c) => /* @__PURE__ */ Y(
      "li",
      {
        className: "button developer-app-list-item",
        onClick: () => {
          t(`/developers/app/${n.id}/version/${c.id}`);
        },
        children: [
          c.version,
          " (",
          c.build_version,
          ")"
        ]
      },
      c.id
    )) }),
    /* @__PURE__ */ Z(
      "button",
      {
        onClick: () => {
          t(`/developers/app/${n.id}/new-version`);
        },
        className: "primary",
        children: "New Version"
      }
    )
  ] }) }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, jo = ({
  isIpad: e,
  app: r
}) => {
  const { uploadScreenshot: t } = Oe(), n = tr(null);
  return /* @__PURE__ */ Y("div", { className: "screenshots-inner", children: [
    /* @__PURE__ */ Z("div", { className: "screenshots-grid", children: (e ? r.ipad_screenshots : r.iphone_screenshots).map(
      (i, o) => /* @__PURE__ */ Z(
        R0,
        {
          screenshot: i,
          app: r,
          isIpad: e
        },
        o
      )
    ) }),
    /* @__PURE__ */ Y("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ Z(
        "button",
        {
          onClick: () => {
            n.current?.click();
          },
          children: "Upload New Screenshot"
        }
      ),
      /* @__PURE__ */ Y(
        "p",
        {
          style: {
            color: "var(--label-secondary)",
            margin: 0,
            marginTop: "0.5rem"
          },
          children: [
            "Max upload size: 3MB. Supported aspect ratios:",
            " ",
            e ? "4:3" : "9:19.5, 9:16, 3:4",
            "."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ Z(
      "input",
      {
        ref: n,
        type: "file",
        style: { display: "none" },
        multiple: !0,
        accept: "image/*",
        onChange: (i) => {
          const o = i.target.files;
          if (!o) return;
          let s = async () => {
            await t(Array.from(o), r, e);
          };
          oe.promise(s, {
            loading: `Uploading screenshot${o.length > 1 ? "s" : ""}...`,
            success: `Screenshot${o.length > 1 ? "s" : ""} uploaded successfully!`,
            error: (a) => `Failed to upload screenshot${o.length > 1 ? "s" : ""}: ${String(a)}`
          });
        }
      }
    )
  ] });
}, R0 = ({
  screenshot: e,
  app: r,
  isIpad: t
}) => {
  const n = Mn(
    () => e ? ae().storage.from("app-images").getPublicUrl(e.path).data.publicUrl : "/default-icon.png",
    [e]
  ), { reloadApps: i } = Oe();
  let o = e.width, s = e.height, a = o / s, c = Math.min(400, 400 * a), l = c / a;
  return /* @__PURE__ */ Y("div", { className: "screenshot-image-container", children: [
    /* @__PURE__ */ Z(
      "div",
      {
        onClick: async () => {
          let { error: u } = await ae().storage.from("app-images").remove([e.path]);
          if (u) {
            console.error("Error deleting screenshot from storage:", u), oe.error(
              "Error deleting screenshot from storage: " + u.message
            );
            return;
          }
          const d = t ? "ipad_screenshots" : "iphone_screenshots", _ = r[d].filter((b) => b.path !== e.path), f = await ae().from("apps").update({
            [d]: _
          }).eq("id", r.id).single();
          if (f.error) {
            console.error("Error updating app with screenshot URL:", f.error), oe.error("Error deleting screenshot: " + f.error.message);
            return;
          } else
            i(), oe.success("Screenshot deleted successfully.");
        },
        children: "Delete"
      }
    ),
    /* @__PURE__ */ Z(
      "img",
      {
        src: n,
        alt: "Screenshot",
        className: "screenshot-image",
        width: c,
        height: l
      }
    )
  ] });
}, Q0 = () => {
  const { id: e } = ht(), { apps: r } = Oe(), t = r.find((n) => n.id === Number(e));
  return t ? /* @__PURE__ */ Y("section", { className: "developer-page", children: [
    /* @__PURE__ */ Y(ke, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ Z("h2", { children: "iPhone Screenshots" }),
      /* @__PURE__ */ Z("div", { className: "screenshots-container", children: /* @__PURE__ */ Z(jo, { isIpad: !1, app: t }) })
    ] }),
    /* @__PURE__ */ Y(ke, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ Z("h2", { children: "iPad Screenshots" }),
      /* @__PURE__ */ Z("div", { className: "screenshots-container", children: /* @__PURE__ */ Z(jo, { isIpad: !0, app: t }) })
    ] })
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
};
async function P0(e, r, t) {
  const n = await ae().auth.getUser();
  if (n.error || !n.data.user) {
    oe.error("You must be logged in to delete an app.");
    return;
  }
  const i = await ae().from("apps").delete().eq("id", e.id);
  if (i.error) {
    console.error(i.error), oe.error(Ce(i.error, "app"));
    return;
  }
  const { data: o, error: s } = await ae().storage.from("app-images").list(`${n.data.user.id}/${e.id}`);
  if (s) {
    console.error(s), oe.error(
      "Successfully deleted app, but failed to list images to delete: " + s.message
    ), r("/developers"), t();
    return;
  }
  const a = o.map(
    (l) => `${n.data.user.id}/${e.id}/${l.name}`
  );
  if (a.length === 0) {
    oe.success("App deleted successfully."), r("/developers"), t();
    return;
  }
  const { error: c } = await ae().storage.from("app-images").remove(a);
  if (c) {
    console.error(c), oe.error(
      "Successfully deleted app, but failed to delete images: " + c.message
    ), r("/developers"), t();
    return;
  }
  oe.success("App deleted successfully."), r("/developers"), t();
}
const e_ = () => {
  const { id: e } = ht(), { apps: r, reloadApps: t } = Oe(), n = Ye(), i = r.find((s) => s.id === Number(e)), { showPrompt: o } = cs();
  return i ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ Y(ke, { className: "app-subcard management-card", children: [
    /* @__PURE__ */ Z("h2", { style: { marginTop: 0 }, children: "Danger Zone" }),
    /* @__PURE__ */ Z(
      "button",
      {
        className: "danger",
        onClick: async () => {
          o({
            title: "Delete App",
            content: `Are you sure you want to delete the app "${i.name}"? This action cannot be undone.`,
            options: [
              {
                text: "Delete",
                className: "danger",
                action: async () => {
                  P0(i, n, t);
                }
              },
              { text: "Cancel", action: () => {
              }, className: "" }
            ]
          });
        },
        children: "Delete App"
      }
    )
  ] }) }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
};
export {
  M0 as AccountSettings,
  Y0 as AppInfo,
  X0 as AppLayout,
  e_ as AppManagement,
  K0 as AppPermissions,
  Q0 as AppScreenshots,
  J0 as AppVersions,
  V0 as Developer,
  j0 as DeveloperProvider,
  ke as GlassCard,
  W0 as NewApp,
  H0 as NewVersion,
  G0 as PromptProvider,
  q0 as Version,
  vs as beautifyAuthError,
  Ce as beautifyPostgrestError,
  ae as getSupabase,
  D0 as initSupabase,
  cs as usePrompt,
  Oe as useSession
};
//# sourceMappingURL=main.js.map
