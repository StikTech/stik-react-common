import { jsx as Z, jsxs as q, Fragment as ps } from "react/jsx-runtime";
import Vo, { createContext as Wo, useState as Ee, useCallback as zt, useEffect as nt, useMemo as Vn, useRef as Pt, useContext as _s } from "react";
import { createClient as gs } from "@supabase/supabase-js";
import { toast as oe } from "sonner";
import { useNavigate as Ye, useParams as dt, useLocation as ms, Outlet as bs } from "react-router";
import './assets/main.css';const vs = {
  "glass-card": "_glass-card_9ryz3_1"
}, ke = ({ children: e, className: r, style: t }) => {
  const n = [vs["glass-card"], r].filter(Boolean).join(" ");
  return /* @__PURE__ */ Z("div", { className: n, style: t, children: e });
};
let In = null;
function H0(e, r, t = !1) {
  In = gs(e, r, {
    auth: {
      flowType: t ? "pkce" : "implicit"
    }
  });
}
function ae() {
  if (!In)
    throw new Error(
      "Supabase has not been initialized. Call initSupabase() first."
    );
  return In;
}
function ws(e) {
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
const ys = "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e", Ho = Wo(
  void 0
), G0 = ({
  children: e,
  customOauthHandler: r
}) => {
  const [t, n] = Ee(!0), [i, o] = Ee(null), [s, a] = Ee([]), [c, l] = Ee(!1), u = Vo.useRef(!1), h = zt(async (x) => {
    const { data: d, error: g } = await ae().from("profiles").select("roles").eq("user_id", x.user.id).single();
    g ? (console.error("Error checking reviewer status:", g), l(!1)) : l(d?.roles?.includes("reviewer") || !1);
  }, []);
  nt(() => {
    const {
      data: { subscription: x }
    } = ae().auth.onAuthStateChange((d, g) => {
      o(g), n(!1), g && h(g);
    });
    return () => x.unsubscribe();
  }, []);
  const _ = zt(async () => {
    if (!i) {
      a([]);
      return;
    }
    u.current = !0, ae().from("apps").select("*").eq("owner", i.user.id).then(({ data: d, error: g }) => {
      g ? (console.error("Error fetching apps:", g), oe.error("Error fetching apps: " + g.message)) : a(d || []);
    });
  }, [i]);
  nt(() => {
    i && (i.user.user_metadata?.display_name === void 0 && (i.user.app_metadata.provider === "github" ? ae().auth.updateUser({
      data: {
        display_name: i.user.user_metadata.preferred_username || "GitHub User"
      }
    }) : ae().auth.updateUser({
      data: {
        display_name: i.user.email?.split("@")[0] || "User"
      }
    })), u.current || _());
  }, [i, _]);
  const f = zt(
    async (x) => {
      if (!i) {
        oe.error("You must be logged in to create an app.");
        return;
      }
      const d = await ae().from("apps").insert([x]).select().single();
      return d.error ? (console.error(d.error), oe.error(Ce(d.error, "app"))) : _(), d;
    },
    [i, _]
  ), v = zt(
    async (x, d) => {
      if (!i)
        throw "You must be logged in to upload an icon.";
      const g = x.name.includes(".") ? "." + x.name.split(".").pop() : "", { data: k, error: N } = await ae().storage.from("app-images").upload(
        `${i.user.id}/${d.id}/icon-${Date.now()}${g}`,
        x
      );
      if (N)
        throw console.error("Error uploading icon:", N), "Error uploading icon: " + N.message;
      if (d.icon_path !== null && d.icon_path !== void 0 && d.icon_path !== "") {
        const { error: A } = await ae().storage.from("app-images").remove([d.icon_path || ""]);
        if (A)
          throw console.error("Error deleting old icon:", A), "Error deleting old icon: " + A.message;
      }
      const y = k?.path, w = await ae().from("apps").update({
        icon_path: y
      }).eq("id", d.id).single();
      if (w.error)
        throw console.error("Error updating app with icon URL:", w.error), "Error updating app with icon URL: " + w.error.message;
      await _();
    },
    [_, i]
  ), b = zt(
    async (x, d, g) => {
      if (!i)
        throw "You must be logged in to upload a screenshot.";
      const k = [];
      for (const A of x) {
        const { width: T, height: E, err: I } = await new Promise((K) => {
          const j = new Image();
          j.onload = () => {
            K({ width: j.width, height: j.height });
          }, j.onerror = () => {
            K({ width: 0, height: 0, err: "Failed to load image" });
          }, j.src = URL.createObjectURL(new Blob([A], { type: A.type }));
        });
        if (I)
          throw console.error("Error loading image for dimensions:", I), "Error fetching dimensions of image: " + I;
        if (T <= 0 || E <= 0)
          throw console.error("Invalid image dimensions:", T, E), "Invalid image dimensions.";
        let F = T / E;
        if (g) {
          if (F < 4 / 3 - 0.1 || F > 4 / 3 + 0.1)
            throw "iPad screenshots must have approximately 4:3 aspect ratio.";
        } else {
          let K = F < 0.4625 || F > 0.6625, j = F < 9 / 19.5 - 0.1 || F > 9 / 19.5 + 0.1, ne = F < 4 / 3 - 0.1 || F > 4 / 3 + 0.1;
          if (K && j && ne)
            throw "iPhone screenshots must have approximately a 9:16, 9/19.5, or 3:4 aspect ratio.";
        }
        const S = A.name.includes(".") ? "." + A.name.split(".").pop() : "", { data: z, error: p } = await ae().storage.from("app-images").upload(
          `${i.user.id}/${d.id}/screenshot-${g ? "ipad" : "iphone"}-${Date.now()}${S}`,
          A
        );
        if (p)
          throw console.error("Error uploading screenshot:", p), "Error uploading screenshot: " + p.message;
        const P = z?.path;
        k.push({ path: P || "", width: T, height: E });
      }
      const N = g ? "ipad_screenshots" : "iphone_screenshots", y = [
        ...d[N],
        ...k
      ], w = await ae().from("apps").update({
        [N]: y
      }).eq("id", d.id).single();
      if (w.error)
        throw console.error("Error updating app with screenshot URL:", w.error), "Error updating app with screenshot URL: " + w.error.message;
      await _();
    },
    [_, i]
  );
  return t ? null : i ? /* @__PURE__ */ Z(
    Ho.Provider,
    {
      value: {
        session: i,
        apps: s,
        createApp: f,
        reloadApps: _,
        uploadIcon: v,
        uploadScreenshot: b,
        isReviewer: c
      },
      children: e
    }
  ) : /* @__PURE__ */ Z(xs, { customOauthHandler: r });
}, Oe = () => {
  const e = Vo.useContext(Ho);
  if (e === void 0)
    throw new Error("useDeveloper must be used within a DeveloperProvider");
  return e;
}, xs = ({
  customOauthHandler: e
}) => {
  const [r, t] = Ee(!0), [n, i] = Ee(""), [o, s] = Ee(""), [a, c] = Ee(""), l = zt(async () => {
    let u;
    if (r) {
      if (!a || a.trim().length === 0) {
        oe.error("Please provide a display name.");
        return;
      }
      u = async () => {
        let h = await ae().auth.signUp({
          email: n,
          password: o,
          options: {
            emailRedirectTo: `${window.location.origin}/developers`,
            data: {
              display_name: a
            }
          }
        });
        if (h.error)
          throw h.error;
        if (h.data?.user?.email_confirmed_at !== void 0)
          throw {
            message: "An account has already been created with this email."
          };
      };
    } else
      u = async () => {
        let h = await ae().auth.signInWithPassword({
          email: n,
          password: o
        });
        if (h.error)
          throw h.error;
      };
    oe.promise(u, {
      loading: r ? "Signing up..." : "Logging in...",
      success: r ? "Please check your email to complete account creation!" : "Logged in successfully!",
      error: (h) => (console.error(h), ws(h))
    });
  }, [r, n, o, a]);
  return /* @__PURE__ */ Z("div", { className: "page-centered-container", children: /* @__PURE__ */ Z("div", { className: "page-centered-inner", children: /* @__PURE__ */ Z(ke, { className: "dev-login-card", children: /* @__PURE__ */ q("div", { className: "login", children: [
    /* @__PURE__ */ q("div", { className: "login-header", children: [
      /* @__PURE__ */ q("h1", { className: "dev-login-title", children: [
        r ? "Sign up for" : "Login to",
        " StikStore"
      ] }),
      /* @__PURE__ */ Z("p", { className: "dev-login-subtitle", children: "One account to download, purchase, or publish apps." })
    ] }),
    /* @__PURE__ */ q(
      "button",
      {
        className: "github-button",
        onClick: () => {
          e ? e("github") : ae().auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: `${window.location.origin}/developers`
            }
          });
        },
        children: [
          /* @__PURE__ */ Z("img", { src: ys, alt: "GitHub Logo", className: "github-logo" }),
          "Sign In with GitHub"
        ]
      }
    ),
    /* @__PURE__ */ q(
      "form",
      {
        className: "login",
        onSubmit: (u) => {
          u.preventDefault(), l();
        },
        children: [
          r && /* @__PURE__ */ q("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "name", children: "Display Name" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "name",
                type: "text",
                placeholder: "John Doe",
                value: a,
                onChange: (u) => c(u.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ q("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "email",
                type: "text",
                placeholder: "email@example.com",
                value: n,
                onChange: (u) => i(u.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ q("div", { children: [
            /* @__PURE__ */ Z("label", { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ Z(
              "input",
              {
                id: "password",
                type: "password",
                placeholder: "••••••••",
                value: o,
                onChange: (u) => s(u.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Z("button", { type: "submit", children: r ? "Sign Up" : "Log In" })
        ]
      }
    ),
    /* @__PURE__ */ q("p", { className: "signup-switcher", children: [
      r ? "Already have an account?" : "Don't have an account?",
      " ",
      /* @__PURE__ */ Z(
        "a",
        {
          href: "#",
          onClick: (u) => {
            u.preventDefault(), t(!r);
          },
          children: r ? "Log In" : "Sign Up"
        }
      )
    ] })
  ] }) }) }) });
}, q0 = () => {
  const { session: e } = Oe(), r = Ye();
  return /* @__PURE__ */ q("section", { className: "settings-page", children: [
    /* @__PURE__ */ q("div", { className: "settings-header", children: [
      /* @__PURE__ */ Z("h1", { children: "Account Settings" }),
      /* @__PURE__ */ Z("h4", { className: "text-link", onClick: () => r("/developers"), children: "Back to Dashboard" })
    ] }),
    /* @__PURE__ */ q(ke, { children: [
      /* @__PURE__ */ Z("h3", { children: "Profile" }),
      /* @__PURE__ */ q("p", { children: [
        "Display Name: ",
        e.user.user_metadata.display_name
      ] }),
      /* @__PURE__ */ q("p", { children: [
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
}, nr = ({
  app: e,
  showBackToApp: r,
  backToAppPage: t,
  titleOverride: n,
  subtitleOverride: i,
  inline: o
}) => {
  const s = Ye(), a = Vn(
    () => e.icon_path ? ae().storage.from("app-images").getPublicUrl(e.icon_path).data.publicUrl : "/default-icon.png",
    [e.icon_path]
  );
  return /* @__PURE__ */ q(
    "div",
    {
      className: `app-title-container${o ? " app-title-container-inline" : ""}`,
      children: [
        /* @__PURE__ */ Z(
          "img",
          {
            src: a,
            className: "app-icon-img",
            onError: (c) => {
              c.currentTarget.src = "/default-icon.png";
            }
          }
        ),
        /* @__PURE__ */ q("div", { children: [
          /* @__PURE__ */ Z("h1", { className: "app-title", children: n ?? e.name }),
          (!n || i) && /* @__PURE__ */ Z("p", { className: "app-subtitle", children: i ?? (e.subtitle || e.bundle_identifier) }),
          !o && /* @__PURE__ */ q("div", { className: "version-back-buttons", children: [
            r && /* @__PURE__ */ q(ps, { children: [
              /* @__PURE__ */ q(
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
}, X0 = () => {
  const { session: e, apps: r } = Oe(), t = Ye();
  return /* @__PURE__ */ q("div", { className: "developer-container", children: [
    /* @__PURE__ */ Z("h1", { children: "StikStore Developer Portal" }),
    /* @__PURE__ */ q("section", { className: "developer-page", children: [
      /* @__PURE__ */ q(ke, { children: [
        /* @__PURE__ */ q("h3", { children: [
          "Welcome to the Dashboard, ",
          e.user.user_metadata.display_name,
          "!"
        ] }),
        /* @__PURE__ */ q("div", { className: "developer-buttons", children: [
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
      /* @__PURE__ */ q(ke, { children: [
        /* @__PURE__ */ Z("h3", { children: "Uploaded Apps" }),
        /* @__PURE__ */ Z("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: r.map((n) => /* @__PURE__ */ Z(
          "li",
          {
            className: "button developer-app-list-item",
            onClick: () => {
              t(`/developers/app/${n.id}`);
            },
            children: /* @__PURE__ */ Z(nr, { app: n, inline: !0 })
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
}, ks = "_open_1a1bh_20", Es = "_selected_1a1bh_73", _t = {
  "custom-dropdown": "_custom-dropdown_1a1bh_1",
  "dropdown-toggle": "_dropdown-toggle_1a1bh_6",
  open: ks,
  "dropdown-caret": "_dropdown-caret_1a1bh_25",
  "dropdown-menu": "_dropdown-menu_1a1bh_38",
  "dropdown-option": "_dropdown-option_1a1bh_53",
  selected: Es
}, As = ({
  children: e,
  className: r,
  style: t,
  ariaLabelledby: n,
  open: i,
  setOpen: o,
  id: s,
  selectedLabel: a
}) => {
  nt(() => {
    if (!i) return;
    const u = (_) => {
      c.current && !c.current.contains(_.target) && o(!1);
    }, h = (_) => {
      _.key === "Escape" && o(!1);
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", h), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", h);
    };
  }, [i, o]);
  const c = Pt(null), l = [
    _t["custom-dropdown"],
    r,
    i ? _t.open : null
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ q("div", { className: l, ref: c, style: t, id: s, children: [
    /* @__PURE__ */ q(
      "button",
      {
        type: "button",
        className: _t["dropdown-toggle"],
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        "aria-labelledby": n,
        onClick: () => o((u) => !u),
        onKeyDown: (u) => {
          (u.key === "ArrowDown" || u.key === "Enter") && (u.preventDefault(), o(!0));
        },
        children: [
          /* @__PURE__ */ Z("span", { children: a }),
          /* @__PURE__ */ Z("span", { className: _t["dropdown-caret"], "aria-hidden": "true" })
        ]
      }
    ),
    i && /* @__PURE__ */ Z(
      "div",
      {
        className: _t["dropdown-menu"],
        role: "listbox",
        "aria-labelledby": n,
        children: e
      }
    )
  ] });
}, Ss = ({
  value: e,
  label: r,
  onClick: t,
  isSelected: n
}) => /* @__PURE__ */ q(
  "button",
  {
    type: "button",
    role: "option",
    className: `${_t["dropdown-option"]}${n ? ` ${_t.selected}` : ""}`,
    "aria-selected": n,
    onClick: () => {
      t();
    },
    children: [
      /* @__PURE__ */ Z("span", { children: r }),
      n && /* @__PURE__ */ Z("span", { className: "checkmark", "aria-hidden": "true", children: "✓" })
    ]
  },
  e
), Go = ({
  field: e,
  updateValue: r,
  value: t
}) => {
  const [n, i] = Ee(!1);
  let o;
  if (e.type === "text")
    o = /* @__PURE__ */ Z(
      "input",
      {
        id: String(e.id),
        type: "text",
        value: t ? String(t) : "",
        placeholder: e.placeholder,
        required: e.required,
        onChange: (s) => {
          r(s.target.value);
        }
      }
    );
  else if (e.type === "textarea")
    o = /* @__PURE__ */ Z(
      "textarea",
      {
        id: String(e.id),
        placeholder: e.placeholder,
        value: t ? String(t) : "",
        required: e.required,
        onChange: (s) => r(s.target.value),
        style: { minWidth: "100%", minHeight: "80px" }
      }
    );
  else if (e.type === "dropdown")
    o = /* @__PURE__ */ Z(
      As,
      {
        id: String(e.id),
        selectedLabel: (t ? e.options.find((s) => s.value === t)?.label : e.defaultValue) || "Select an option",
        open: n,
        setOpen: i,
        children: e.options.map((s) => /* @__PURE__ */ Z(
          Ss,
          {
            value: s.value,
            isSelected: t === s.value,
            label: s.label,
            onClick: () => {
              r(s.value);
            }
          },
          s.value
        ))
      }
    );
  else
    return null;
  return /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ q("div", { children: [
      /* @__PURE__ */ q("label", { htmlFor: String(e.id), style: { margin: "0" }, children: [
        e.label,
        e.required ? /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }) : ""
      ] }),
      e.description && /* @__PURE__ */ Z("p", { style: { color: "var(--text-muted)", margin: "0" }, children: e.description })
    ] }),
    o
  ] });
}, li = [
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
], qo = ({
  app: e,
  save: r,
  label: t,
  style: n
}) => {
  const [i, o] = Ee(e);
  return nt(() => {
    o(e);
  }, [e]), /* @__PURE__ */ Z(ke, { style: n, children: /* @__PURE__ */ q("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ q("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ Z("h2", { children: t || "App Metadata" }),
      /* @__PURE__ */ q("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    li.map((s) => /* @__PURE__ */ Z(
      Go,
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
          for (const a of li)
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
var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function zs(e) {
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
function wr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Kr = { exports: {} };
var ci;
function Is() {
  return ci || (ci = 1, (function(e, r) {
    (function(t) {
      e.exports = t();
    })(function() {
      return (function t(n, i, o) {
        function s(l, u) {
          if (!i[l]) {
            if (!n[l]) {
              var h = typeof wr == "function" && wr;
              if (!u && h) return h(l, !0);
              if (a) return a(l, !0);
              var _ = new Error("Cannot find module '" + l + "'");
              throw _.code = "MODULE_NOT_FOUND", _;
            }
            var f = i[l] = { exports: {} };
            n[l][0].call(f.exports, function(v) {
              var b = n[l][1][v];
              return s(b || v);
            }, f, f.exports, t, n, i, o);
          }
          return i[l].exports;
        }
        for (var a = typeof wr == "function" && wr, c = 0; c < o.length; c++) s(o[c]);
        return s;
      })({ 1: [function(t, n, i) {
        var o = t("./utils"), s = t("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(c) {
          for (var l, u, h, _, f, v, b, x = [], d = 0, g = c.length, k = g, N = o.getTypeOf(c) !== "string"; d < c.length; ) k = g - d, h = N ? (l = c[d++], u = d < g ? c[d++] : 0, d < g ? c[d++] : 0) : (l = c.charCodeAt(d++), u = d < g ? c.charCodeAt(d++) : 0, d < g ? c.charCodeAt(d++) : 0), _ = l >> 2, f = (3 & l) << 4 | u >> 4, v = 1 < k ? (15 & u) << 2 | h >> 6 : 64, b = 2 < k ? 63 & h : 64, x.push(a.charAt(_) + a.charAt(f) + a.charAt(v) + a.charAt(b));
          return x.join("");
        }, i.decode = function(c) {
          var l, u, h, _, f, v, b = 0, x = 0, d = "data:";
          if (c.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
          var g, k = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (c.charAt(c.length - 1) === a.charAt(64) && k--, c.charAt(c.length - 2) === a.charAt(64) && k--, k % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (g = s.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); b < c.length; ) l = a.indexOf(c.charAt(b++)) << 2 | (_ = a.indexOf(c.charAt(b++))) >> 4, u = (15 & _) << 4 | (f = a.indexOf(c.charAt(b++))) >> 2, h = (3 & f) << 6 | (v = a.indexOf(c.charAt(b++))), g[x++] = l, f !== 64 && (g[x++] = u), v !== 64 && (g[x++] = h);
          return g;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(t, n, i) {
        var o = t("./external"), s = t("./stream/DataWorker"), a = t("./stream/Crc32Probe"), c = t("./stream/DataLengthProbe");
        function l(u, h, _, f, v) {
          this.compressedSize = u, this.uncompressedSize = h, this.crc32 = _, this.compression = f, this.compressedContent = v;
        }
        l.prototype = { getContentWorker: function() {
          var u = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), h = this;
          return u.on("end", function() {
            if (this.streamInfo.data_length !== h.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), u;
        }, getCompressedWorker: function() {
          return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, l.createWorkerFrom = function(u, h, _) {
          return u.pipe(new a()).pipe(new c("uncompressedSize")).pipe(h.compressWorker(_)).pipe(new c("compressedSize")).withStreamInfo("compression", h);
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
          return a !== void 0 && a.length ? o.getTypeOf(a) !== "string" ? (function(l, u, h, _) {
            var f = s, v = _ + h;
            l ^= -1;
            for (var b = _; b < v; b++) l = l >>> 8 ^ f[255 & (l ^ u[b])];
            return -1 ^ l;
          })(0 | c, a, a.length, 0) : (function(l, u, h, _) {
            var f = s, v = _ + h;
            l ^= -1;
            for (var b = _; b < v; b++) l = l >>> 8 ^ f[255 & (l ^ u.charCodeAt(b))];
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
        function u(h, _) {
          c.call(this, "FlateWorker/" + h), this._pako = null, this._pakoAction = h, this._pakoOptions = _, this.meta = {};
        }
        i.magic = "\b\0", a.inherits(u, c), u.prototype.processChunk = function(h) {
          this.meta = h.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(l, h.data), !1);
        }, u.prototype.flush = function() {
          c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, u.prototype.cleanUp = function() {
          c.prototype.cleanUp.call(this), this._pako = null;
        }, u.prototype._createPako = function() {
          this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var h = this;
          this._pako.onData = function(_) {
            h.push({ data: _, meta: h.meta });
          };
        }, i.compressWorker = function(h) {
          return new u("Deflate", h);
        }, i.uncompressWorker = function() {
          return new u("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, n, i) {
        function o(f, v) {
          var b, x = "";
          for (b = 0; b < v; b++) x += String.fromCharCode(255 & f), f >>>= 8;
          return x;
        }
        function s(f, v, b, x, d, g) {
          var k, N, y = f.file, w = f.compression, A = g !== l.utf8encode, T = a.transformTo("string", g(y.name)), E = a.transformTo("string", l.utf8encode(y.name)), I = y.comment, F = a.transformTo("string", g(I)), S = a.transformTo("string", l.utf8encode(I)), z = E.length !== y.name.length, p = S.length !== I.length, P = "", K = "", j = "", ne = y.dir, L = y.date, ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          v && !b || (ee.crc32 = f.crc32, ee.compressedSize = f.compressedSize, ee.uncompressedSize = f.uncompressedSize);
          var B = 0;
          v && (B |= 8), A || !z && !p || (B |= 2048);
          var U = 0, re = 0;
          ne && (U |= 16), d === "UNIX" ? (re = 798, U |= (function(Y, we) {
            var ze = Y;
            return Y || (ze = we ? 16893 : 33204), (65535 & ze) << 16;
          })(y.unixPermissions, ne)) : (re = 20, U |= (function(Y) {
            return 63 & (Y || 0);
          })(y.dosPermissions)), k = L.getUTCHours(), k <<= 6, k |= L.getUTCMinutes(), k <<= 5, k |= L.getUTCSeconds() / 2, N = L.getUTCFullYear() - 1980, N <<= 4, N |= L.getUTCMonth() + 1, N <<= 5, N |= L.getUTCDate(), z && (K = o(1, 1) + o(u(T), 4) + E, P += "up" + o(K.length, 2) + K), p && (j = o(1, 1) + o(u(F), 4) + S, P += "uc" + o(j.length, 2) + j);
          var J = "";
          return J += `
\0`, J += o(B, 2), J += w.magic, J += o(k, 2), J += o(N, 2), J += o(ee.crc32, 4), J += o(ee.compressedSize, 4), J += o(ee.uncompressedSize, 4), J += o(T.length, 2), J += o(P.length, 2), { fileRecord: h.LOCAL_FILE_HEADER + J + T + P, dirRecord: h.CENTRAL_FILE_HEADER + o(re, 2) + J + o(F.length, 2) + "\0\0\0\0" + o(U, 4) + o(x, 4) + T + P + F };
        }
        var a = t("../utils"), c = t("../stream/GenericWorker"), l = t("../utf8"), u = t("../crc32"), h = t("../signature");
        function _(f, v, b, x) {
          c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = v, this.zipPlatform = b, this.encodeFileName = x, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        a.inherits(_, c), _.prototype.push = function(f) {
          var v = f.meta.percent || 0, b = this.entriesCount, x = this._sources.length;
          this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, c.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: b ? (v + 100 * (b - x - 1)) / b : 100 } }));
        }, _.prototype.openedSource = function(f) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
          var v = this.streamFiles && !f.file.dir;
          if (v) {
            var b = s(f, v, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: b.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, _.prototype.closedSource = function(f) {
          this.accumulate = !1;
          var v = this.streamFiles && !f.file.dir, b = s(f, v, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(b.dirRecord), v) this.push({ data: (function(x) {
            return h.DATA_DESCRIPTOR + o(x.crc32, 4) + o(x.compressedSize, 4) + o(x.uncompressedSize, 4);
          })(f), meta: { percent: 100 } });
          else for (this.push({ data: b.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, _.prototype.flush = function() {
          for (var f = this.bytesWritten, v = 0; v < this.dirRecords.length; v++) this.push({ data: this.dirRecords[v], meta: { percent: 100 } });
          var b = this.bytesWritten - f, x = (function(d, g, k, N, y) {
            var w = a.transformTo("string", y(N));
            return h.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(d, 2) + o(d, 2) + o(g, 4) + o(k, 4) + o(w.length, 2) + w;
          })(this.dirRecords.length, b, f, this.zipComment, this.encodeFileName);
          this.push({ data: x, meta: { percent: 100 } });
        }, _.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, _.prototype.registerPrevious = function(f) {
          this._sources.push(f);
          var v = this;
          return f.on("data", function(b) {
            v.processChunk(b);
          }), f.on("end", function() {
            v.closedSource(v.previous.streamInfo), v._sources.length ? v.prepareNextSource() : v.end();
          }), f.on("error", function(b) {
            v.error(b);
          }), this;
        }, _.prototype.resume = function() {
          return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, _.prototype.error = function(f) {
          var v = this._sources;
          if (!c.prototype.error.call(this, f)) return !1;
          for (var b = 0; b < v.length; b++) try {
            v[b].error(f);
          } catch {
          }
          return !0;
        }, _.prototype.lock = function() {
          c.prototype.lock.call(this);
          for (var f = this._sources, v = 0; v < f.length; v++) f[v].lock();
        }, n.exports = _;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, n, i) {
        var o = t("../compressions"), s = t("./ZipFileWorker");
        i.generateWorker = function(a, c, l) {
          var u = new s(c.streamFiles, l, c.platform, c.encodeFileName), h = 0;
          try {
            a.forEach(function(_, f) {
              h++;
              var v = (function(g, k) {
                var N = g || k, y = o[N];
                if (!y) throw new Error(N + " is not a valid compression method !");
                return y;
              })(f.options.compression, c.compression), b = f.options.compressionOptions || c.compressionOptions || {}, x = f.dir, d = f.date;
              f._compressWorker(v, b).withStreamInfo("file", { name: _, dir: x, date: d, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(u);
            }), u.entriesCount = h;
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
        function h(_) {
          return new s.Promise(function(f, v) {
            var b = _.decompressed.getContentWorker().pipe(new l());
            b.on("error", function(x) {
              v(x);
            }).on("end", function() {
              b.streamInfo.crc32 !== _.decompressed.crc32 ? v(new Error("Corrupted zip : CRC32 mismatch")) : f();
            }).resume();
          });
        }
        n.exports = function(_, f) {
          var v = this;
          return f = o.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: a.utf8decode }), u.isNode && u.isStream(_) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(b) {
            var x = new c(f);
            return x.load(b), x;
          }).then(function(b) {
            var x = [s.Promise.resolve(b)], d = b.files;
            if (f.checkCRC32) for (var g = 0; g < d.length; g++) x.push(h(d[g]));
            return s.Promise.all(x);
          }).then(function(b) {
            for (var x = b.shift(), d = x.files, g = 0; g < d.length; g++) {
              var k = d[g], N = k.fileNameStr, y = o.resolve(k.fileNameStr);
              v.file(y, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: f.createFolders }), k.dir || (v.file(y).unsafeOriginalName = N);
            }
            return x.zipComment.length && (v.comment = x.zipComment), v;
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
          a.on("data", function(h, _) {
            u.push(h) || u._helper.pause(), l && l(_);
          }).on("error", function(h) {
            u.emit("error", h);
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
        function o(y, w, A) {
          var T, E = a.getTypeOf(w), I = a.extend(A || {}, u);
          I.date = I.date || /* @__PURE__ */ new Date(), I.compression !== null && (I.compression = I.compression.toUpperCase()), typeof I.unixPermissions == "string" && (I.unixPermissions = parseInt(I.unixPermissions, 8)), I.unixPermissions && 16384 & I.unixPermissions && (I.dir = !0), I.dosPermissions && 16 & I.dosPermissions && (I.dir = !0), I.dir && (y = d(y)), I.createFolders && (T = x(y)) && g.call(this, T, !0);
          var F = E === "string" && I.binary === !1 && I.base64 === !1;
          A && A.binary !== void 0 || (I.binary = !F), (w instanceof h && w.uncompressedSize === 0 || I.dir || !w || w.length === 0) && (I.base64 = !1, I.binary = !0, w = "", I.compression = "STORE", E = "string");
          var S = null;
          S = w instanceof h || w instanceof c ? w : v.isNode && v.isStream(w) ? new b(y, w) : a.prepareContent(y, w, I.binary, I.optimizedBinaryString, I.base64);
          var z = new _(y, S, I);
          this.files[y] = z;
        }
        var s = t("./utf8"), a = t("./utils"), c = t("./stream/GenericWorker"), l = t("./stream/StreamHelper"), u = t("./defaults"), h = t("./compressedObject"), _ = t("./zipObject"), f = t("./generate"), v = t("./nodejsUtils"), b = t("./nodejs/NodejsStreamInputAdapter"), x = function(y) {
          y.slice(-1) === "/" && (y = y.substring(0, y.length - 1));
          var w = y.lastIndexOf("/");
          return 0 < w ? y.substring(0, w) : "";
        }, d = function(y) {
          return y.slice(-1) !== "/" && (y += "/"), y;
        }, g = function(y, w) {
          return w = w !== void 0 ? w : u.createFolders, y = d(y), this.files[y] || o.call(this, y, null, { dir: !0, createFolders: w }), this.files[y];
        };
        function k(y) {
          return Object.prototype.toString.call(y) === "[object RegExp]";
        }
        var N = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(y) {
          var w, A, T;
          for (w in this.files) T = this.files[w], (A = w.slice(this.root.length, w.length)) && w.slice(0, this.root.length) === this.root && y(A, T);
        }, filter: function(y) {
          var w = [];
          return this.forEach(function(A, T) {
            y(A, T) && w.push(T);
          }), w;
        }, file: function(y, w, A) {
          if (arguments.length !== 1) return y = this.root + y, o.call(this, y, w, A), this;
          if (k(y)) {
            var T = y;
            return this.filter(function(I, F) {
              return !F.dir && T.test(I);
            });
          }
          var E = this.files[this.root + y];
          return E && !E.dir ? E : null;
        }, folder: function(y) {
          if (!y) return this;
          if (k(y)) return this.filter(function(E, I) {
            return I.dir && y.test(E);
          });
          var w = this.root + y, A = g.call(this, w), T = this.clone();
          return T.root = A.name, T;
        }, remove: function(y) {
          y = this.root + y;
          var w = this.files[y];
          if (w || (y.slice(-1) !== "/" && (y += "/"), w = this.files[y]), w && !w.dir) delete this.files[y];
          else for (var A = this.filter(function(E, I) {
            return I.name.slice(0, y.length) === y;
          }), T = 0; T < A.length; T++) delete this.files[A[T].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(y) {
          var w, A = {};
          try {
            if ((A = a.extend(y || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = A.type.toLowerCase(), A.compression = A.compression.toUpperCase(), A.type === "binarystring" && (A.type = "string"), !A.type) throw new Error("No output type specified.");
            a.checkSupport(A.type), A.platform !== "darwin" && A.platform !== "freebsd" && A.platform !== "linux" && A.platform !== "sunos" || (A.platform = "UNIX"), A.platform === "win32" && (A.platform = "DOS");
            var T = A.comment || this.comment || "";
            w = f.generateWorker(this, A, T);
          } catch (E) {
            (w = new c("error")).error(E);
          }
          return new l(w, A.type || "string", A.mimeType);
        }, generateAsync: function(y, w) {
          return this.generateInternalStream(y).accumulate(w);
        }, generateNodeStream: function(y, w) {
          return (y = y || {}).type || (y.type = "nodebuffer"), this.generateInternalStream(y).toNodejsStream(w);
        } };
        n.exports = N;
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
          for (var c = a.charCodeAt(0), l = a.charCodeAt(1), u = a.charCodeAt(2), h = a.charCodeAt(3), _ = this.length - 4; 0 <= _; --_) if (this.data[_] === c && this.data[_ + 1] === l && this.data[_ + 2] === u && this.data[_ + 3] === h) return _ - this.zero;
          return -1;
        }, s.prototype.readAndCheckSignature = function(a) {
          var c = a.charCodeAt(0), l = a.charCodeAt(1), u = a.charCodeAt(2), h = a.charCodeAt(3), _ = this.readData(4);
          return c === _[0] && l === _[1] && u === _[2] && h === _[3];
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
        n.exports = function(h) {
          var _ = o.getTypeOf(h);
          return o.checkSupport(_), _ !== "string" || s.uint8array ? _ === "nodebuffer" ? new l(h) : s.uint8array ? new u(o.transformTo("uint8array", h)) : new a(o.transformTo("array", h)) : new c(h);
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
        var o = t("../utils"), s = t("./ConvertWorker"), a = t("./GenericWorker"), c = t("../base64"), l = t("../support"), u = t("../external"), h = null;
        if (l.nodestream) try {
          h = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function _(v, b) {
          return new u.Promise(function(x, d) {
            var g = [], k = v._internalType, N = v._outputType, y = v._mimeType;
            v.on("data", function(w, A) {
              g.push(w), b && b(A);
            }).on("error", function(w) {
              g = [], d(w);
            }).on("end", function() {
              try {
                var w = (function(A, T, E) {
                  switch (A) {
                    case "blob":
                      return o.newBlob(o.transformTo("arraybuffer", T), E);
                    case "base64":
                      return c.encode(T);
                    default:
                      return o.transformTo(A, T);
                  }
                })(N, (function(A, T) {
                  var E, I = 0, F = null, S = 0;
                  for (E = 0; E < T.length; E++) S += T[E].length;
                  switch (A) {
                    case "string":
                      return T.join("");
                    case "array":
                      return Array.prototype.concat.apply([], T);
                    case "uint8array":
                      for (F = new Uint8Array(S), E = 0; E < T.length; E++) F.set(T[E], I), I += T[E].length;
                      return F;
                    case "nodebuffer":
                      return Buffer.concat(T);
                    default:
                      throw new Error("concat : unsupported type '" + A + "'");
                  }
                })(k, g), y);
                x(w);
              } catch (A) {
                d(A);
              }
              g = [];
            }).resume();
          });
        }
        function f(v, b, x) {
          var d = b;
          switch (b) {
            case "blob":
            case "arraybuffer":
              d = "uint8array";
              break;
            case "base64":
              d = "string";
          }
          try {
            this._internalType = d, this._outputType = b, this._mimeType = x, o.checkSupport(d), this._worker = v.pipe(new s(d)), v.lock();
          } catch (g) {
            this._worker = new a("error"), this._worker.error(g);
          }
        }
        f.prototype = { accumulate: function(v) {
          return _(this, v);
        }, on: function(v, b) {
          var x = this;
          return v === "data" ? this._worker.on(v, function(d) {
            b.call(x, d.data, d.meta);
          }) : this._worker.on(v, function() {
            o.delay(b, arguments, x);
          }), this;
        }, resume: function() {
          return o.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(v) {
          if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new h(this, { objectMode: this._outputType !== "nodebuffer" }, v);
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
        function h() {
          c.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function _() {
          c.call(this, "utf-8 encode");
        }
        i.utf8encode = function(f) {
          return s.nodebuffer ? a.newBufferFrom(f, "utf-8") : (function(v) {
            var b, x, d, g, k, N = v.length, y = 0;
            for (g = 0; g < N; g++) (64512 & (x = v.charCodeAt(g))) == 55296 && g + 1 < N && (64512 & (d = v.charCodeAt(g + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (d - 56320), g++), y += x < 128 ? 1 : x < 2048 ? 2 : x < 65536 ? 3 : 4;
            for (b = s.uint8array ? new Uint8Array(y) : new Array(y), g = k = 0; k < y; g++) (64512 & (x = v.charCodeAt(g))) == 55296 && g + 1 < N && (64512 & (d = v.charCodeAt(g + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (d - 56320), g++), x < 128 ? b[k++] = x : (x < 2048 ? b[k++] = 192 | x >>> 6 : (x < 65536 ? b[k++] = 224 | x >>> 12 : (b[k++] = 240 | x >>> 18, b[k++] = 128 | x >>> 12 & 63), b[k++] = 128 | x >>> 6 & 63), b[k++] = 128 | 63 & x);
            return b;
          })(f);
        }, i.utf8decode = function(f) {
          return s.nodebuffer ? o.transformTo("nodebuffer", f).toString("utf-8") : (function(v) {
            var b, x, d, g, k = v.length, N = new Array(2 * k);
            for (b = x = 0; b < k; ) if ((d = v[b++]) < 128) N[x++] = d;
            else if (4 < (g = l[d])) N[x++] = 65533, b += g - 1;
            else {
              for (d &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && b < k; ) d = d << 6 | 63 & v[b++], g--;
              1 < g ? N[x++] = 65533 : d < 65536 ? N[x++] = d : (d -= 65536, N[x++] = 55296 | d >> 10 & 1023, N[x++] = 56320 | 1023 & d);
            }
            return N.length !== x && (N.subarray ? N = N.subarray(0, x) : N.length = x), o.applyFromCharCode(N);
          })(f = o.transformTo(s.uint8array ? "uint8array" : "array", f));
        }, o.inherits(h, c), h.prototype.processChunk = function(f) {
          var v = o.transformTo(s.uint8array ? "uint8array" : "array", f.data);
          if (this.leftOver && this.leftOver.length) {
            if (s.uint8array) {
              var b = v;
              (v = new Uint8Array(b.length + this.leftOver.length)).set(this.leftOver, 0), v.set(b, this.leftOver.length);
            } else v = this.leftOver.concat(v);
            this.leftOver = null;
          }
          var x = (function(g, k) {
            var N;
            for ((k = k || g.length) > g.length && (k = g.length), N = k - 1; 0 <= N && (192 & g[N]) == 128; ) N--;
            return N < 0 || N === 0 ? k : N + l[g[N]] > k ? N : k;
          })(v), d = v;
          x !== v.length && (s.uint8array ? (d = v.subarray(0, x), this.leftOver = v.subarray(x, v.length)) : (d = v.slice(0, x), this.leftOver = v.slice(x, v.length))), this.push({ data: i.utf8decode(d), meta: f.meta });
        }, h.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, i.Utf8DecodeWorker = h, o.inherits(_, c), _.prototype.processChunk = function(f) {
          this.push({ data: i.utf8encode(f.data), meta: f.meta });
        }, i.Utf8EncodeWorker = _;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, n, i) {
        var o = t("./support"), s = t("./base64"), a = t("./nodejsUtils"), c = t("./external");
        function l(b) {
          return b;
        }
        function u(b, x) {
          for (var d = 0; d < b.length; ++d) x[d] = 255 & b.charCodeAt(d);
          return x;
        }
        t("setimmediate"), i.newBlob = function(b, x) {
          i.checkSupport("blob");
          try {
            return new Blob([b], { type: x });
          } catch {
            try {
              var d = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return d.append(b), d.getBlob(x);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var h = { stringifyByChunk: function(b, x, d) {
          var g = [], k = 0, N = b.length;
          if (N <= d) return String.fromCharCode.apply(null, b);
          for (; k < N; ) x === "array" || x === "nodebuffer" ? g.push(String.fromCharCode.apply(null, b.slice(k, Math.min(k + d, N)))) : g.push(String.fromCharCode.apply(null, b.subarray(k, Math.min(k + d, N)))), k += d;
          return g.join("");
        }, stringifyByChar: function(b) {
          for (var x = "", d = 0; d < b.length; d++) x += String.fromCharCode(b[d]);
          return x;
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
        function _(b) {
          var x = 65536, d = i.getTypeOf(b), g = !0;
          if (d === "uint8array" ? g = h.applyCanBeUsed.uint8array : d === "nodebuffer" && (g = h.applyCanBeUsed.nodebuffer), g) for (; 1 < x; ) try {
            return h.stringifyByChunk(b, d, x);
          } catch {
            x = Math.floor(x / 2);
          }
          return h.stringifyByChar(b);
        }
        function f(b, x) {
          for (var d = 0; d < b.length; d++) x[d] = b[d];
          return x;
        }
        i.applyFromCharCode = _;
        var v = {};
        v.string = { string: l, array: function(b) {
          return u(b, new Array(b.length));
        }, arraybuffer: function(b) {
          return v.string.uint8array(b).buffer;
        }, uint8array: function(b) {
          return u(b, new Uint8Array(b.length));
        }, nodebuffer: function(b) {
          return u(b, a.allocBuffer(b.length));
        } }, v.array = { string: _, array: l, arraybuffer: function(b) {
          return new Uint8Array(b).buffer;
        }, uint8array: function(b) {
          return new Uint8Array(b);
        }, nodebuffer: function(b) {
          return a.newBufferFrom(b);
        } }, v.arraybuffer = { string: function(b) {
          return _(new Uint8Array(b));
        }, array: function(b) {
          return f(new Uint8Array(b), new Array(b.byteLength));
        }, arraybuffer: l, uint8array: function(b) {
          return new Uint8Array(b);
        }, nodebuffer: function(b) {
          return a.newBufferFrom(new Uint8Array(b));
        } }, v.uint8array = { string: _, array: function(b) {
          return f(b, new Array(b.length));
        }, arraybuffer: function(b) {
          return b.buffer;
        }, uint8array: l, nodebuffer: function(b) {
          return a.newBufferFrom(b);
        } }, v.nodebuffer = { string: _, array: function(b) {
          return f(b, new Array(b.length));
        }, arraybuffer: function(b) {
          return v.nodebuffer.uint8array(b).buffer;
        }, uint8array: function(b) {
          return f(b, new Uint8Array(b.length));
        }, nodebuffer: l }, i.transformTo = function(b, x) {
          if (x = x || "", !b) return x;
          i.checkSupport(b);
          var d = i.getTypeOf(x);
          return v[d][b](x);
        }, i.resolve = function(b) {
          for (var x = b.split("/"), d = [], g = 0; g < x.length; g++) {
            var k = x[g];
            k === "." || k === "" && g !== 0 && g !== x.length - 1 || (k === ".." ? d.pop() : d.push(k));
          }
          return d.join("/");
        }, i.getTypeOf = function(b) {
          return typeof b == "string" ? "string" : Object.prototype.toString.call(b) === "[object Array]" ? "array" : o.nodebuffer && a.isBuffer(b) ? "nodebuffer" : o.uint8array && b instanceof Uint8Array ? "uint8array" : o.arraybuffer && b instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, i.checkSupport = function(b) {
          if (!o[b.toLowerCase()]) throw new Error(b + " is not supported by this platform");
        }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(b) {
          var x, d, g = "";
          for (d = 0; d < (b || "").length; d++) g += "\\x" + ((x = b.charCodeAt(d)) < 16 ? "0" : "") + x.toString(16).toUpperCase();
          return g;
        }, i.delay = function(b, x, d) {
          setImmediate(function() {
            b.apply(d || null, x || []);
          });
        }, i.inherits = function(b, x) {
          function d() {
          }
          d.prototype = x.prototype, b.prototype = new d();
        }, i.extend = function() {
          var b, x, d = {};
          for (b = 0; b < arguments.length; b++) for (x in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], x) && d[x] === void 0 && (d[x] = arguments[b][x]);
          return d;
        }, i.prepareContent = function(b, x, d, g, k) {
          return c.Promise.resolve(x).then(function(N) {
            return o.blob && (N instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(N)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(y, w) {
              var A = new FileReader();
              A.onload = function(T) {
                y(T.target.result);
              }, A.onerror = function(T) {
                w(T.target.error);
              }, A.readAsArrayBuffer(N);
            }) : N;
          }).then(function(N) {
            var y = i.getTypeOf(N);
            return y ? (y === "arraybuffer" ? N = i.transformTo("uint8array", N) : y === "string" && (k ? N = s.decode(N) : d && g !== !0 && (N = (function(w) {
              return u(w, o.uint8array ? new Uint8Array(w.length) : new Array(w.length));
            })(N))), N) : c.Promise.reject(new Error("Can't read the data of '" + b + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, n, i) {
        var o = t("./reader/readerFor"), s = t("./utils"), a = t("./signature"), c = t("./zipEntry"), l = t("./support");
        function u(h) {
          this.files = [], this.loadOptions = h;
        }
        u.prototype = { checkSignature: function(h) {
          if (!this.reader.readAndCheckSignature(h)) {
            this.reader.index -= 4;
            var _ = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(_) + ", expected " + s.pretty(h) + ")");
          }
        }, isSignature: function(h, _) {
          var f = this.reader.index;
          this.reader.setIndex(h);
          var v = this.reader.readString(4) === _;
          return this.reader.setIndex(f), v;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var h = this.reader.readData(this.zipCommentLength), _ = l.uint8array ? "uint8array" : "array", f = s.transformTo(_, h);
          this.zipComment = this.loadOptions.decodeFileName(f);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var h, _, f, v = this.zip64EndOfCentralSize - 44; 0 < v; ) h = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[h] = { id: h, length: _, value: f };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var h, _;
          for (h = 0; h < this.files.length; h++) _ = this.files[h], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
        }, readCentralDir: function() {
          var h;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER); ) (h = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(h);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var h = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
          if (h < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(h);
          var _ = h;
          if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (h = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(h), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var f = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
          var v = _ - f;
          if (0 < v) this.isSignature(_, a.CENTRAL_FILE_HEADER) || (this.reader.zero = v);
          else if (v < 0) throw new Error("Corrupted zip: missing " + Math.abs(v) + " bytes.");
        }, prepareReader: function(h) {
          this.reader = o(h);
        }, load: function(h) {
          this.prepareReader(h), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, n.exports = u;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, n, i) {
        var o = t("./reader/readerFor"), s = t("./utils"), a = t("./compressedObject"), c = t("./crc32"), l = t("./utf8"), u = t("./compressions"), h = t("./support");
        function _(f, v) {
          this.options = f, this.loadOptions = v;
        }
        _.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(f) {
          var v, b;
          if (f.skip(22), this.fileNameLength = f.readInt(2), b = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(b), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((v = (function(x) {
            for (var d in u) if (Object.prototype.hasOwnProperty.call(u, d) && u[d].magic === x) return u[d];
            return null;
          })(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, v, f.readData(this.compressedSize));
        }, readCentralPart: function(f) {
          this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
          var v = f.readInt(2);
          if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          f.skip(v), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
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
          var v, b, x, d = f.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); f.index + 4 < d; ) v = f.readInt(2), b = f.readInt(2), x = f.readData(b), this.extraFields[v] = { id: v, length: b, value: x };
          f.setIndex(d);
        }, handleUTF8: function() {
          var f = h.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
          else {
            var v = this.findExtraFieldUnicodePath();
            if (v !== null) this.fileNameStr = v;
            else {
              var b = s.transformTo(f, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(b);
            }
            var x = this.findExtraFieldUnicodeComment();
            if (x !== null) this.fileCommentStr = x;
            else {
              var d = s.transformTo(f, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(d);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var f = this.extraFields[28789];
          if (f) {
            var v = o(f.value);
            return v.readInt(1) !== 1 || c(this.fileName) !== v.readInt(4) ? null : l.utf8decode(v.readData(f.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var f = this.extraFields[25461];
          if (f) {
            var v = o(f.value);
            return v.readInt(1) !== 1 || c(this.fileComment) !== v.readInt(4) ? null : l.utf8decode(v.readData(f.length - 5));
          }
          return null;
        } }, n.exports = _;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, n, i) {
        function o(v, b, x) {
          this.name = v, this.dir = x.dir, this.date = x.date, this.comment = x.comment, this.unixPermissions = x.unixPermissions, this.dosPermissions = x.dosPermissions, this._data = b, this._dataBinary = x.binary, this.options = { compression: x.compression, compressionOptions: x.compressionOptions };
        }
        var s = t("./stream/StreamHelper"), a = t("./stream/DataWorker"), c = t("./utf8"), l = t("./compressedObject"), u = t("./stream/GenericWorker");
        o.prototype = { internalStream: function(v) {
          var b = null, x = "string";
          try {
            if (!v) throw new Error("No output type specified.");
            var d = (x = v.toLowerCase()) === "string" || x === "text";
            x !== "binarystring" && x !== "text" || (x = "string"), b = this._decompressWorker();
            var g = !this._dataBinary;
            g && !d && (b = b.pipe(new c.Utf8EncodeWorker())), !g && d && (b = b.pipe(new c.Utf8DecodeWorker()));
          } catch (k) {
            (b = new u("error")).error(k);
          }
          return new s(b, x, "");
        }, async: function(v, b) {
          return this.internalStream(v).accumulate(b);
        }, nodeStream: function(v, b) {
          return this.internalStream(v || "nodebuffer").toNodejsStream(b);
        }, _compressWorker: function(v, b) {
          if (this._data instanceof l && this._data.compression.magic === v.magic) return this._data.getCompressedWorker();
          var x = this._decompressWorker();
          return this._dataBinary || (x = x.pipe(new c.Utf8EncodeWorker())), l.createWorkerFrom(x, v, b);
        }, _decompressWorker: function() {
          return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof u ? this._data : new a(this._data);
        } };
        for (var h = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < h.length; f++) o.prototype[h[f]] = _;
        n.exports = o;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, n, i) {
        (function(o) {
          var s, a, c = o.MutationObserver || o.WebKitMutationObserver;
          if (c) {
            var l = 0, u = new c(v), h = o.document.createTextNode("");
            u.observe(h, { characterData: !0 }), s = function() {
              h.data = l = ++l % 2;
            };
          } else if (o.setImmediate || o.MessageChannel === void 0) s = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
            var b = o.document.createElement("script");
            b.onreadystatechange = function() {
              v(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
            }, o.document.documentElement.appendChild(b);
          } : function() {
            setTimeout(v, 0);
          };
          else {
            var _ = new o.MessageChannel();
            _.port1.onmessage = v, s = function() {
              _.port2.postMessage(0);
            };
          }
          var f = [];
          function v() {
            var b, x;
            a = !0;
            for (var d = f.length; d; ) {
              for (x = f, f = [], b = -1; ++b < d; ) x[b]();
              d = f.length;
            }
            a = !1;
          }
          n.exports = function(b) {
            f.push(b) !== 1 || a || s();
          };
        }).call(this, typeof Yt < "u" ? Yt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(t, n, i) {
        var o = t("immediate");
        function s() {
        }
        var a = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
        function h(d) {
          if (typeof d != "function") throw new TypeError("resolver must be a function");
          this.state = u, this.queue = [], this.outcome = void 0, d !== s && b(this, d);
        }
        function _(d, g, k) {
          this.promise = d, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
        }
        function f(d, g, k) {
          o(function() {
            var N;
            try {
              N = g(k);
            } catch (y) {
              return a.reject(d, y);
            }
            N === d ? a.reject(d, new TypeError("Cannot resolve promise with itself")) : a.resolve(d, N);
          });
        }
        function v(d) {
          var g = d && d.then;
          if (d && (typeof d == "object" || typeof d == "function") && typeof g == "function") return function() {
            g.apply(d, arguments);
          };
        }
        function b(d, g) {
          var k = !1;
          function N(A) {
            k || (k = !0, a.reject(d, A));
          }
          function y(A) {
            k || (k = !0, a.resolve(d, A));
          }
          var w = x(function() {
            g(y, N);
          });
          w.status === "error" && N(w.value);
        }
        function x(d, g) {
          var k = {};
          try {
            k.value = d(g), k.status = "success";
          } catch (N) {
            k.status = "error", k.value = N;
          }
          return k;
        }
        (n.exports = h).prototype.finally = function(d) {
          if (typeof d != "function") return this;
          var g = this.constructor;
          return this.then(function(k) {
            return g.resolve(d()).then(function() {
              return k;
            });
          }, function(k) {
            return g.resolve(d()).then(function() {
              throw k;
            });
          });
        }, h.prototype.catch = function(d) {
          return this.then(null, d);
        }, h.prototype.then = function(d, g) {
          if (typeof d != "function" && this.state === l || typeof g != "function" && this.state === c) return this;
          var k = new this.constructor(s);
          return this.state !== u ? f(k, this.state === l ? d : g, this.outcome) : this.queue.push(new _(k, d, g)), k;
        }, _.prototype.callFulfilled = function(d) {
          a.resolve(this.promise, d);
        }, _.prototype.otherCallFulfilled = function(d) {
          f(this.promise, this.onFulfilled, d);
        }, _.prototype.callRejected = function(d) {
          a.reject(this.promise, d);
        }, _.prototype.otherCallRejected = function(d) {
          f(this.promise, this.onRejected, d);
        }, a.resolve = function(d, g) {
          var k = x(v, g);
          if (k.status === "error") return a.reject(d, k.value);
          var N = k.value;
          if (N) b(d, N);
          else {
            d.state = l, d.outcome = g;
            for (var y = -1, w = d.queue.length; ++y < w; ) d.queue[y].callFulfilled(g);
          }
          return d;
        }, a.reject = function(d, g) {
          d.state = c, d.outcome = g;
          for (var k = -1, N = d.queue.length; ++k < N; ) d.queue[k].callRejected(g);
          return d;
        }, h.resolve = function(d) {
          return d instanceof this ? d : a.resolve(new this(s), d);
        }, h.reject = function(d) {
          var g = new this(s);
          return a.reject(g, d);
        }, h.all = function(d) {
          var g = this;
          if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var k = d.length, N = !1;
          if (!k) return this.resolve([]);
          for (var y = new Array(k), w = 0, A = -1, T = new this(s); ++A < k; ) E(d[A], A);
          return T;
          function E(I, F) {
            g.resolve(I).then(function(S) {
              y[F] = S, ++w !== k || N || (N = !0, a.resolve(T, y));
            }, function(S) {
              N || (N = !0, a.reject(T, S));
            });
          }
        }, h.race = function(d) {
          var g = this;
          if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var k = d.length, N = !1;
          if (!k) return this.resolve([]);
          for (var y = -1, w = new this(s); ++y < k; ) A = d[y], g.resolve(A).then(function(T) {
            N || (N = !0, a.resolve(w, T));
          }, function(T) {
            N || (N = !0, a.reject(w, T));
          });
          var A;
          return w;
        };
      }, { immediate: 36 }], 38: [function(t, n, i) {
        var o = {};
        (0, t("./lib/utils/common").assign)(o, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), n.exports = o;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, n, i) {
        var o = t("./zlib/deflate"), s = t("./utils/common"), a = t("./utils/strings"), c = t("./zlib/messages"), l = t("./zlib/zstream"), u = Object.prototype.toString, h = 0, _ = -1, f = 0, v = 8;
        function b(d) {
          if (!(this instanceof b)) return new b(d);
          this.options = s.assign({ level: _, method: v, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, d || {});
          var g = this.options;
          g.raw && 0 < g.windowBits ? g.windowBits = -g.windowBits : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
          var k = o.deflateInit2(this.strm, g.level, g.method, g.windowBits, g.memLevel, g.strategy);
          if (k !== h) throw new Error(c[k]);
          if (g.header && o.deflateSetHeader(this.strm, g.header), g.dictionary) {
            var N;
            if (N = typeof g.dictionary == "string" ? a.string2buf(g.dictionary) : u.call(g.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(g.dictionary) : g.dictionary, (k = o.deflateSetDictionary(this.strm, N)) !== h) throw new Error(c[k]);
            this._dict_set = !0;
          }
        }
        function x(d, g) {
          var k = new b(g);
          if (k.push(d, !0), k.err) throw k.msg || c[k.err];
          return k.result;
        }
        b.prototype.push = function(d, g) {
          var k, N, y = this.strm, w = this.options.chunkSize;
          if (this.ended) return !1;
          N = g === ~~g ? g : g === !0 ? 4 : 0, typeof d == "string" ? y.input = a.string2buf(d) : u.call(d) === "[object ArrayBuffer]" ? y.input = new Uint8Array(d) : y.input = d, y.next_in = 0, y.avail_in = y.input.length;
          do {
            if (y.avail_out === 0 && (y.output = new s.Buf8(w), y.next_out = 0, y.avail_out = w), (k = o.deflate(y, N)) !== 1 && k !== h) return this.onEnd(k), !(this.ended = !0);
            y.avail_out !== 0 && (y.avail_in !== 0 || N !== 4 && N !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(y.output, y.next_out))) : this.onData(s.shrinkBuf(y.output, y.next_out)));
          } while ((0 < y.avail_in || y.avail_out === 0) && k !== 1);
          return N === 4 ? (k = o.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === h) : N !== 2 || (this.onEnd(h), !(y.avail_out = 0));
        }, b.prototype.onData = function(d) {
          this.chunks.push(d);
        }, b.prototype.onEnd = function(d) {
          d === h && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
        }, i.Deflate = b, i.deflate = x, i.deflateRaw = function(d, g) {
          return (g = g || {}).raw = !0, x(d, g);
        }, i.gzip = function(d, g) {
          return (g = g || {}).gzip = !0, x(d, g);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, n, i) {
        var o = t("./zlib/inflate"), s = t("./utils/common"), a = t("./utils/strings"), c = t("./zlib/constants"), l = t("./zlib/messages"), u = t("./zlib/zstream"), h = t("./zlib/gzheader"), _ = Object.prototype.toString;
        function f(b) {
          if (!(this instanceof f)) return new f(b);
          this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, b || {});
          var x = this.options;
          x.raw && 0 <= x.windowBits && x.windowBits < 16 && (x.windowBits = -x.windowBits, x.windowBits === 0 && (x.windowBits = -15)), !(0 <= x.windowBits && x.windowBits < 16) || b && b.windowBits || (x.windowBits += 32), 15 < x.windowBits && x.windowBits < 48 && (15 & x.windowBits) == 0 && (x.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
          var d = o.inflateInit2(this.strm, x.windowBits);
          if (d !== c.Z_OK) throw new Error(l[d]);
          this.header = new h(), o.inflateGetHeader(this.strm, this.header);
        }
        function v(b, x) {
          var d = new f(x);
          if (d.push(b, !0), d.err) throw d.msg || l[d.err];
          return d.result;
        }
        f.prototype.push = function(b, x) {
          var d, g, k, N, y, w, A = this.strm, T = this.options.chunkSize, E = this.options.dictionary, I = !1;
          if (this.ended) return !1;
          g = x === ~~x ? x : x === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof b == "string" ? A.input = a.binstring2buf(b) : _.call(b) === "[object ArrayBuffer]" ? A.input = new Uint8Array(b) : A.input = b, A.next_in = 0, A.avail_in = A.input.length;
          do {
            if (A.avail_out === 0 && (A.output = new s.Buf8(T), A.next_out = 0, A.avail_out = T), (d = o.inflate(A, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && E && (w = typeof E == "string" ? a.string2buf(E) : _.call(E) === "[object ArrayBuffer]" ? new Uint8Array(E) : E, d = o.inflateSetDictionary(this.strm, w)), d === c.Z_BUF_ERROR && I === !0 && (d = c.Z_OK, I = !1), d !== c.Z_STREAM_END && d !== c.Z_OK) return this.onEnd(d), !(this.ended = !0);
            A.next_out && (A.avail_out !== 0 && d !== c.Z_STREAM_END && (A.avail_in !== 0 || g !== c.Z_FINISH && g !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = a.utf8border(A.output, A.next_out), N = A.next_out - k, y = a.buf2string(A.output, k), A.next_out = N, A.avail_out = T - N, N && s.arraySet(A.output, A.output, k, N, 0), this.onData(y)) : this.onData(s.shrinkBuf(A.output, A.next_out)))), A.avail_in === 0 && A.avail_out === 0 && (I = !0);
          } while ((0 < A.avail_in || A.avail_out === 0) && d !== c.Z_STREAM_END);
          return d === c.Z_STREAM_END && (g = c.Z_FINISH), g === c.Z_FINISH ? (d = o.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === c.Z_OK) : g !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(A.avail_out = 0));
        }, f.prototype.onData = function(b) {
          this.chunks.push(b);
        }, f.prototype.onEnd = function(b) {
          b === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = b, this.msg = this.strm.msg;
        }, i.Inflate = f, i.inflate = v, i.inflateRaw = function(b, x) {
          return (x = x || {}).raw = !0, v(b, x);
        }, i.ungzip = v;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, n, i) {
        var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        i.assign = function(c) {
          for (var l = Array.prototype.slice.call(arguments, 1); l.length; ) {
            var u = l.shift();
            if (u) {
              if (typeof u != "object") throw new TypeError(u + "must be non-object");
              for (var h in u) u.hasOwnProperty(h) && (c[h] = u[h]);
            }
          }
          return c;
        }, i.shrinkBuf = function(c, l) {
          return c.length === l ? c : c.subarray ? c.subarray(0, l) : (c.length = l, c);
        };
        var s = { arraySet: function(c, l, u, h, _) {
          if (l.subarray && c.subarray) c.set(l.subarray(u, u + h), _);
          else for (var f = 0; f < h; f++) c[_ + f] = l[u + f];
        }, flattenChunks: function(c) {
          var l, u, h, _, f, v;
          for (l = h = 0, u = c.length; l < u; l++) h += c[l].length;
          for (v = new Uint8Array(h), l = _ = 0, u = c.length; l < u; l++) f = c[l], v.set(f, _), _ += f.length;
          return v;
        } }, a = { arraySet: function(c, l, u, h, _) {
          for (var f = 0; f < h; f++) c[_ + f] = l[u + f];
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
        function u(h, _) {
          if (_ < 65537 && (h.subarray && a || !h.subarray && s)) return String.fromCharCode.apply(null, o.shrinkBuf(h, _));
          for (var f = "", v = 0; v < _; v++) f += String.fromCharCode(h[v]);
          return f;
        }
        c[254] = c[254] = 1, i.string2buf = function(h) {
          var _, f, v, b, x, d = h.length, g = 0;
          for (b = 0; b < d; b++) (64512 & (f = h.charCodeAt(b))) == 55296 && b + 1 < d && (64512 & (v = h.charCodeAt(b + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (v - 56320), b++), g += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (_ = new o.Buf8(g), b = x = 0; x < g; b++) (64512 & (f = h.charCodeAt(b))) == 55296 && b + 1 < d && (64512 & (v = h.charCodeAt(b + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (v - 56320), b++), f < 128 ? _[x++] = f : (f < 2048 ? _[x++] = 192 | f >>> 6 : (f < 65536 ? _[x++] = 224 | f >>> 12 : (_[x++] = 240 | f >>> 18, _[x++] = 128 | f >>> 12 & 63), _[x++] = 128 | f >>> 6 & 63), _[x++] = 128 | 63 & f);
          return _;
        }, i.buf2binstring = function(h) {
          return u(h, h.length);
        }, i.binstring2buf = function(h) {
          for (var _ = new o.Buf8(h.length), f = 0, v = _.length; f < v; f++) _[f] = h.charCodeAt(f);
          return _;
        }, i.buf2string = function(h, _) {
          var f, v, b, x, d = _ || h.length, g = new Array(2 * d);
          for (f = v = 0; f < d; ) if ((b = h[f++]) < 128) g[v++] = b;
          else if (4 < (x = c[b])) g[v++] = 65533, f += x - 1;
          else {
            for (b &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && f < d; ) b = b << 6 | 63 & h[f++], x--;
            1 < x ? g[v++] = 65533 : b < 65536 ? g[v++] = b : (b -= 65536, g[v++] = 55296 | b >> 10 & 1023, g[v++] = 56320 | 1023 & b);
          }
          return u(g, v);
        }, i.utf8border = function(h, _) {
          var f;
          for ((_ = _ || h.length) > h.length && (_ = h.length), f = _ - 1; 0 <= f && (192 & h[f]) == 128; ) f--;
          return f < 0 || f === 0 ? _ : f + c[h[f]] > _ ? f : _;
        };
      }, { "./common": 41 }], 43: [function(t, n, i) {
        n.exports = function(o, s, a, c) {
          for (var l = 65535 & o | 0, u = o >>> 16 & 65535 | 0, h = 0; a !== 0; ) {
            for (a -= h = 2e3 < a ? 2e3 : a; u = u + (l = l + s[c++] | 0) | 0, --h; ) ;
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
          var u = o, h = l + c;
          s ^= -1;
          for (var _ = l; _ < h; _++) s = s >>> 8 ^ u[255 & (s ^ a[_])];
          return -1 ^ s;
        };
      }, {}], 46: [function(t, n, i) {
        var o, s = t("../utils/common"), a = t("./trees"), c = t("./adler32"), l = t("./crc32"), u = t("./messages"), h = 0, _ = 4, f = 0, v = -2, b = -1, x = 4, d = 2, g = 8, k = 9, N = 286, y = 30, w = 19, A = 2 * N + 1, T = 15, E = 3, I = 258, F = I + E + 1, S = 42, z = 113, p = 1, P = 2, K = 3, j = 4;
        function ne(m, V) {
          return m.msg = u[V], V;
        }
        function L(m) {
          return (m << 1) - (4 < m ? 9 : 0);
        }
        function ee(m) {
          for (var V = m.length; 0 <= --V; ) m[V] = 0;
        }
        function B(m) {
          var V = m.state, D = V.pending;
          D > m.avail_out && (D = m.avail_out), D !== 0 && (s.arraySet(m.output, V.pending_buf, V.pending_out, D, m.next_out), m.next_out += D, V.pending_out += D, m.total_out += D, m.avail_out -= D, V.pending -= D, V.pending === 0 && (V.pending_out = 0));
        }
        function U(m, V) {
          a._tr_flush_block(m, 0 <= m.block_start ? m.block_start : -1, m.strstart - m.block_start, V), m.block_start = m.strstart, B(m.strm);
        }
        function re(m, V) {
          m.pending_buf[m.pending++] = V;
        }
        function J(m, V) {
          m.pending_buf[m.pending++] = V >>> 8 & 255, m.pending_buf[m.pending++] = 255 & V;
        }
        function Y(m, V) {
          var D, O, C = m.max_chain_length, R = m.strstart, W = m.prev_length, H = m.nice_match, $ = m.strstart > m.w_size - F ? m.strstart - (m.w_size - F) : 0, G = m.window, Q = m.w_mask, X = m.prev, ie = m.strstart + I, he = G[R + W - 1], ue = G[R + W];
          m.prev_length >= m.good_match && (C >>= 2), H > m.lookahead && (H = m.lookahead);
          do
            if (G[(D = V) + W] === ue && G[D + W - 1] === he && G[D] === G[R] && G[++D] === G[R + 1]) {
              R += 2, D++;
              do
                ;
              while (G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && G[++R] === G[++D] && R < ie);
              if (O = I - (ie - R), R = ie - I, W < O) {
                if (m.match_start = V, H <= (W = O)) break;
                he = G[R + W - 1], ue = G[R + W];
              }
            }
          while ((V = X[V & Q]) > $ && --C != 0);
          return W <= m.lookahead ? W : m.lookahead;
        }
        function we(m) {
          var V, D, O, C, R, W, H, $, G, Q, X = m.w_size;
          do {
            if (C = m.window_size - m.lookahead - m.strstart, m.strstart >= X + (X - F)) {
              for (s.arraySet(m.window, m.window, X, X, 0), m.match_start -= X, m.strstart -= X, m.block_start -= X, V = D = m.hash_size; O = m.head[--V], m.head[V] = X <= O ? O - X : 0, --D; ) ;
              for (V = D = X; O = m.prev[--V], m.prev[V] = X <= O ? O - X : 0, --D; ) ;
              C += X;
            }
            if (m.strm.avail_in === 0) break;
            if (W = m.strm, H = m.window, $ = m.strstart + m.lookahead, G = C, Q = void 0, Q = W.avail_in, G < Q && (Q = G), D = Q === 0 ? 0 : (W.avail_in -= Q, s.arraySet(H, W.input, W.next_in, Q, $), W.state.wrap === 1 ? W.adler = c(W.adler, H, Q, $) : W.state.wrap === 2 && (W.adler = l(W.adler, H, Q, $)), W.next_in += Q, W.total_in += Q, Q), m.lookahead += D, m.lookahead + m.insert >= E) for (R = m.strstart - m.insert, m.ins_h = m.window[R], m.ins_h = (m.ins_h << m.hash_shift ^ m.window[R + 1]) & m.hash_mask; m.insert && (m.ins_h = (m.ins_h << m.hash_shift ^ m.window[R + E - 1]) & m.hash_mask, m.prev[R & m.w_mask] = m.head[m.ins_h], m.head[m.ins_h] = R, R++, m.insert--, !(m.lookahead + m.insert < E)); ) ;
          } while (m.lookahead < F && m.strm.avail_in !== 0);
        }
        function ze(m, V) {
          for (var D, O; ; ) {
            if (m.lookahead < F) {
              if (we(m), m.lookahead < F && V === h) return p;
              if (m.lookahead === 0) break;
            }
            if (D = 0, m.lookahead >= E && (m.ins_h = (m.ins_h << m.hash_shift ^ m.window[m.strstart + E - 1]) & m.hash_mask, D = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h], m.head[m.ins_h] = m.strstart), D !== 0 && m.strstart - D <= m.w_size - F && (m.match_length = Y(m, D)), m.match_length >= E) if (O = a._tr_tally(m, m.strstart - m.match_start, m.match_length - E), m.lookahead -= m.match_length, m.match_length <= m.max_lazy_match && m.lookahead >= E) {
              for (m.match_length--; m.strstart++, m.ins_h = (m.ins_h << m.hash_shift ^ m.window[m.strstart + E - 1]) & m.hash_mask, D = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h], m.head[m.ins_h] = m.strstart, --m.match_length != 0; ) ;
              m.strstart++;
            } else m.strstart += m.match_length, m.match_length = 0, m.ins_h = m.window[m.strstart], m.ins_h = (m.ins_h << m.hash_shift ^ m.window[m.strstart + 1]) & m.hash_mask;
            else O = a._tr_tally(m, 0, m.window[m.strstart]), m.lookahead--, m.strstart++;
            if (O && (U(m, !1), m.strm.avail_out === 0)) return p;
          }
          return m.insert = m.strstart < E - 1 ? m.strstart : E - 1, V === _ ? (U(m, !0), m.strm.avail_out === 0 ? K : j) : m.last_lit && (U(m, !1), m.strm.avail_out === 0) ? p : P;
        }
        function ce(m, V) {
          for (var D, O, C; ; ) {
            if (m.lookahead < F) {
              if (we(m), m.lookahead < F && V === h) return p;
              if (m.lookahead === 0) break;
            }
            if (D = 0, m.lookahead >= E && (m.ins_h = (m.ins_h << m.hash_shift ^ m.window[m.strstart + E - 1]) & m.hash_mask, D = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h], m.head[m.ins_h] = m.strstart), m.prev_length = m.match_length, m.prev_match = m.match_start, m.match_length = E - 1, D !== 0 && m.prev_length < m.max_lazy_match && m.strstart - D <= m.w_size - F && (m.match_length = Y(m, D), m.match_length <= 5 && (m.strategy === 1 || m.match_length === E && 4096 < m.strstart - m.match_start) && (m.match_length = E - 1)), m.prev_length >= E && m.match_length <= m.prev_length) {
              for (C = m.strstart + m.lookahead - E, O = a._tr_tally(m, m.strstart - 1 - m.prev_match, m.prev_length - E), m.lookahead -= m.prev_length - 1, m.prev_length -= 2; ++m.strstart <= C && (m.ins_h = (m.ins_h << m.hash_shift ^ m.window[m.strstart + E - 1]) & m.hash_mask, D = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h], m.head[m.ins_h] = m.strstart), --m.prev_length != 0; ) ;
              if (m.match_available = 0, m.match_length = E - 1, m.strstart++, O && (U(m, !1), m.strm.avail_out === 0)) return p;
            } else if (m.match_available) {
              if ((O = a._tr_tally(m, 0, m.window[m.strstart - 1])) && U(m, !1), m.strstart++, m.lookahead--, m.strm.avail_out === 0) return p;
            } else m.match_available = 1, m.strstart++, m.lookahead--;
          }
          return m.match_available && (O = a._tr_tally(m, 0, m.window[m.strstart - 1]), m.match_available = 0), m.insert = m.strstart < E - 1 ? m.strstart : E - 1, V === _ ? (U(m, !0), m.strm.avail_out === 0 ? K : j) : m.last_lit && (U(m, !1), m.strm.avail_out === 0) ? p : P;
        }
        function de(m, V, D, O, C) {
          this.good_length = m, this.max_lazy = V, this.nice_length = D, this.max_chain = O, this.func = C;
        }
        function Ae() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * A), this.dyn_dtree = new s.Buf16(2 * (2 * y + 1)), this.bl_tree = new s.Buf16(2 * (2 * w + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(T + 1), this.heap = new s.Buf16(2 * N + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * N + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function ye(m) {
          var V;
          return m && m.state ? (m.total_in = m.total_out = 0, m.data_type = d, (V = m.state).pending = 0, V.pending_out = 0, V.wrap < 0 && (V.wrap = -V.wrap), V.status = V.wrap ? S : z, m.adler = V.wrap === 2 ? 0 : 1, V.last_flush = h, a._tr_init(V), f) : ne(m, v);
        }
        function je(m) {
          var V = ye(m);
          return V === f && (function(D) {
            D.window_size = 2 * D.w_size, ee(D.head), D.max_lazy_match = o[D.level].max_lazy, D.good_match = o[D.level].good_length, D.nice_match = o[D.level].nice_length, D.max_chain_length = o[D.level].max_chain, D.strstart = 0, D.block_start = 0, D.lookahead = 0, D.insert = 0, D.match_length = D.prev_length = E - 1, D.match_available = 0, D.ins_h = 0;
          })(m.state), V;
        }
        function De(m, V, D, O, C, R) {
          if (!m) return v;
          var W = 1;
          if (V === b && (V = 6), O < 0 ? (W = 0, O = -O) : 15 < O && (W = 2, O -= 16), C < 1 || k < C || D !== g || O < 8 || 15 < O || V < 0 || 9 < V || R < 0 || x < R) return ne(m, v);
          O === 8 && (O = 9);
          var H = new Ae();
          return (m.state = H).strm = m, H.wrap = W, H.gzhead = null, H.w_bits = O, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = C + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + E - 1) / E), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << C + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = V, H.strategy = R, H.method = D, je(m);
        }
        o = [new de(0, 0, 0, 0, function(m, V) {
          var D = 65535;
          for (D > m.pending_buf_size - 5 && (D = m.pending_buf_size - 5); ; ) {
            if (m.lookahead <= 1) {
              if (we(m), m.lookahead === 0 && V === h) return p;
              if (m.lookahead === 0) break;
            }
            m.strstart += m.lookahead, m.lookahead = 0;
            var O = m.block_start + D;
            if ((m.strstart === 0 || m.strstart >= O) && (m.lookahead = m.strstart - O, m.strstart = O, U(m, !1), m.strm.avail_out === 0) || m.strstart - m.block_start >= m.w_size - F && (U(m, !1), m.strm.avail_out === 0)) return p;
          }
          return m.insert = 0, V === _ ? (U(m, !0), m.strm.avail_out === 0 ? K : j) : (m.strstart > m.block_start && (U(m, !1), m.strm.avail_out), p);
        }), new de(4, 4, 8, 4, ze), new de(4, 5, 16, 8, ze), new de(4, 6, 32, 32, ze), new de(4, 4, 16, 16, ce), new de(8, 16, 32, 32, ce), new de(8, 16, 128, 128, ce), new de(8, 32, 128, 256, ce), new de(32, 128, 258, 1024, ce), new de(32, 258, 258, 4096, ce)], i.deflateInit = function(m, V) {
          return De(m, V, g, 15, 8, 0);
        }, i.deflateInit2 = De, i.deflateReset = je, i.deflateResetKeep = ye, i.deflateSetHeader = function(m, V) {
          return m && m.state ? m.state.wrap !== 2 ? v : (m.state.gzhead = V, f) : v;
        }, i.deflate = function(m, V) {
          var D, O, C, R;
          if (!m || !m.state || 5 < V || V < 0) return m ? ne(m, v) : v;
          if (O = m.state, !m.output || !m.input && m.avail_in !== 0 || O.status === 666 && V !== _) return ne(m, m.avail_out === 0 ? -5 : v);
          if (O.strm = m, D = O.last_flush, O.last_flush = V, O.status === S) if (O.wrap === 2) m.adler = 0, re(O, 31), re(O, 139), re(O, 8), O.gzhead ? (re(O, (O.gzhead.text ? 1 : 0) + (O.gzhead.hcrc ? 2 : 0) + (O.gzhead.extra ? 4 : 0) + (O.gzhead.name ? 8 : 0) + (O.gzhead.comment ? 16 : 0)), re(O, 255 & O.gzhead.time), re(O, O.gzhead.time >> 8 & 255), re(O, O.gzhead.time >> 16 & 255), re(O, O.gzhead.time >> 24 & 255), re(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), re(O, 255 & O.gzhead.os), O.gzhead.extra && O.gzhead.extra.length && (re(O, 255 & O.gzhead.extra.length), re(O, O.gzhead.extra.length >> 8 & 255)), O.gzhead.hcrc && (m.adler = l(m.adler, O.pending_buf, O.pending, 0)), O.gzindex = 0, O.status = 69) : (re(O, 0), re(O, 0), re(O, 0), re(O, 0), re(O, 0), re(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), re(O, 3), O.status = z);
          else {
            var W = g + (O.w_bits - 8 << 4) << 8;
            W |= (2 <= O.strategy || O.level < 2 ? 0 : O.level < 6 ? 1 : O.level === 6 ? 2 : 3) << 6, O.strstart !== 0 && (W |= 32), W += 31 - W % 31, O.status = z, J(O, W), O.strstart !== 0 && (J(O, m.adler >>> 16), J(O, 65535 & m.adler)), m.adler = 1;
          }
          if (O.status === 69) if (O.gzhead.extra) {
            for (C = O.pending; O.gzindex < (65535 & O.gzhead.extra.length) && (O.pending !== O.pending_buf_size || (O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), B(m), C = O.pending, O.pending !== O.pending_buf_size)); ) re(O, 255 & O.gzhead.extra[O.gzindex]), O.gzindex++;
            O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), O.gzindex === O.gzhead.extra.length && (O.gzindex = 0, O.status = 73);
          } else O.status = 73;
          if (O.status === 73) if (O.gzhead.name) {
            C = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), B(m), C = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.name.length ? 255 & O.gzhead.name.charCodeAt(O.gzindex++) : 0, re(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), R === 0 && (O.gzindex = 0, O.status = 91);
          } else O.status = 91;
          if (O.status === 91) if (O.gzhead.comment) {
            C = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), B(m), C = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.comment.length ? 255 & O.gzhead.comment.charCodeAt(O.gzindex++) : 0, re(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > C && (m.adler = l(m.adler, O.pending_buf, O.pending - C, C)), R === 0 && (O.status = 103);
          } else O.status = 103;
          if (O.status === 103 && (O.gzhead.hcrc ? (O.pending + 2 > O.pending_buf_size && B(m), O.pending + 2 <= O.pending_buf_size && (re(O, 255 & m.adler), re(O, m.adler >> 8 & 255), m.adler = 0, O.status = z)) : O.status = z), O.pending !== 0) {
            if (B(m), m.avail_out === 0) return O.last_flush = -1, f;
          } else if (m.avail_in === 0 && L(V) <= L(D) && V !== _) return ne(m, -5);
          if (O.status === 666 && m.avail_in !== 0) return ne(m, -5);
          if (m.avail_in !== 0 || O.lookahead !== 0 || V !== h && O.status !== 666) {
            var H = O.strategy === 2 ? (function($, G) {
              for (var Q; ; ) {
                if ($.lookahead === 0 && (we($), $.lookahead === 0)) {
                  if (G === h) return p;
                  break;
                }
                if ($.match_length = 0, Q = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++, Q && (U($, !1), $.strm.avail_out === 0)) return p;
              }
              return $.insert = 0, G === _ ? (U($, !0), $.strm.avail_out === 0 ? K : j) : $.last_lit && (U($, !1), $.strm.avail_out === 0) ? p : P;
            })(O, V) : O.strategy === 3 ? (function($, G) {
              for (var Q, X, ie, he, ue = $.window; ; ) {
                if ($.lookahead <= I) {
                  if (we($), $.lookahead <= I && G === h) return p;
                  if ($.lookahead === 0) break;
                }
                if ($.match_length = 0, $.lookahead >= E && 0 < $.strstart && (X = ue[ie = $.strstart - 1]) === ue[++ie] && X === ue[++ie] && X === ue[++ie]) {
                  he = $.strstart + I;
                  do
                    ;
                  while (X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && X === ue[++ie] && ie < he);
                  $.match_length = I - (he - ie), $.match_length > $.lookahead && ($.match_length = $.lookahead);
                }
                if ($.match_length >= E ? (Q = a._tr_tally($, 1, $.match_length - E), $.lookahead -= $.match_length, $.strstart += $.match_length, $.match_length = 0) : (Q = a._tr_tally($, 0, $.window[$.strstart]), $.lookahead--, $.strstart++), Q && (U($, !1), $.strm.avail_out === 0)) return p;
              }
              return $.insert = 0, G === _ ? (U($, !0), $.strm.avail_out === 0 ? K : j) : $.last_lit && (U($, !1), $.strm.avail_out === 0) ? p : P;
            })(O, V) : o[O.level].func(O, V);
            if (H !== K && H !== j || (O.status = 666), H === p || H === K) return m.avail_out === 0 && (O.last_flush = -1), f;
            if (H === P && (V === 1 ? a._tr_align(O) : V !== 5 && (a._tr_stored_block(O, 0, 0, !1), V === 3 && (ee(O.head), O.lookahead === 0 && (O.strstart = 0, O.block_start = 0, O.insert = 0))), B(m), m.avail_out === 0)) return O.last_flush = -1, f;
          }
          return V !== _ ? f : O.wrap <= 0 ? 1 : (O.wrap === 2 ? (re(O, 255 & m.adler), re(O, m.adler >> 8 & 255), re(O, m.adler >> 16 & 255), re(O, m.adler >> 24 & 255), re(O, 255 & m.total_in), re(O, m.total_in >> 8 & 255), re(O, m.total_in >> 16 & 255), re(O, m.total_in >> 24 & 255)) : (J(O, m.adler >>> 16), J(O, 65535 & m.adler)), B(m), 0 < O.wrap && (O.wrap = -O.wrap), O.pending !== 0 ? f : 1);
        }, i.deflateEnd = function(m) {
          var V;
          return m && m.state ? (V = m.state.status) !== S && V !== 69 && V !== 73 && V !== 91 && V !== 103 && V !== z && V !== 666 ? ne(m, v) : (m.state = null, V === z ? ne(m, -3) : f) : v;
        }, i.deflateSetDictionary = function(m, V) {
          var D, O, C, R, W, H, $, G, Q = V.length;
          if (!m || !m.state || (R = (D = m.state).wrap) === 2 || R === 1 && D.status !== S || D.lookahead) return v;
          for (R === 1 && (m.adler = c(m.adler, V, Q, 0)), D.wrap = 0, Q >= D.w_size && (R === 0 && (ee(D.head), D.strstart = 0, D.block_start = 0, D.insert = 0), G = new s.Buf8(D.w_size), s.arraySet(G, V, Q - D.w_size, D.w_size, 0), V = G, Q = D.w_size), W = m.avail_in, H = m.next_in, $ = m.input, m.avail_in = Q, m.next_in = 0, m.input = V, we(D); D.lookahead >= E; ) {
            for (O = D.strstart, C = D.lookahead - (E - 1); D.ins_h = (D.ins_h << D.hash_shift ^ D.window[O + E - 1]) & D.hash_mask, D.prev[O & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = O, O++, --C; ) ;
            D.strstart = O, D.lookahead = E - 1, we(D);
          }
          return D.strstart += D.lookahead, D.block_start = D.strstart, D.insert = D.lookahead, D.lookahead = 0, D.match_length = D.prev_length = E - 1, D.match_available = 0, m.next_in = H, m.input = $, m.avail_in = W, D.wrap = R, f;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(t, n, i) {
        n.exports = function(o, s) {
          var a, c, l, u, h, _, f, v, b, x, d, g, k, N, y, w, A, T, E, I, F, S, z, p, P;
          a = o.state, c = o.next_in, p = o.input, l = c + (o.avail_in - 5), u = o.next_out, P = o.output, h = u - (s - o.avail_out), _ = u + (o.avail_out - 257), f = a.dmax, v = a.wsize, b = a.whave, x = a.wnext, d = a.window, g = a.hold, k = a.bits, N = a.lencode, y = a.distcode, w = (1 << a.lenbits) - 1, A = (1 << a.distbits) - 1;
          e: do {
            k < 15 && (g += p[c++] << k, k += 8, g += p[c++] << k, k += 8), T = N[g & w];
            t: for (; ; ) {
              if (g >>>= E = T >>> 24, k -= E, (E = T >>> 16 & 255) === 0) P[u++] = 65535 & T;
              else {
                if (!(16 & E)) {
                  if ((64 & E) == 0) {
                    T = N[(65535 & T) + (g & (1 << E) - 1)];
                    continue t;
                  }
                  if (32 & E) {
                    a.mode = 12;
                    break e;
                  }
                  o.msg = "invalid literal/length code", a.mode = 30;
                  break e;
                }
                I = 65535 & T, (E &= 15) && (k < E && (g += p[c++] << k, k += 8), I += g & (1 << E) - 1, g >>>= E, k -= E), k < 15 && (g += p[c++] << k, k += 8, g += p[c++] << k, k += 8), T = y[g & A];
                r: for (; ; ) {
                  if (g >>>= E = T >>> 24, k -= E, !(16 & (E = T >>> 16 & 255))) {
                    if ((64 & E) == 0) {
                      T = y[(65535 & T) + (g & (1 << E) - 1)];
                      continue r;
                    }
                    o.msg = "invalid distance code", a.mode = 30;
                    break e;
                  }
                  if (F = 65535 & T, k < (E &= 15) && (g += p[c++] << k, (k += 8) < E && (g += p[c++] << k, k += 8)), f < (F += g & (1 << E) - 1)) {
                    o.msg = "invalid distance too far back", a.mode = 30;
                    break e;
                  }
                  if (g >>>= E, k -= E, (E = u - h) < F) {
                    if (b < (E = F - E) && a.sane) {
                      o.msg = "invalid distance too far back", a.mode = 30;
                      break e;
                    }
                    if (z = d, (S = 0) === x) {
                      if (S += v - E, E < I) {
                        for (I -= E; P[u++] = d[S++], --E; ) ;
                        S = u - F, z = P;
                      }
                    } else if (x < E) {
                      if (S += v + x - E, (E -= x) < I) {
                        for (I -= E; P[u++] = d[S++], --E; ) ;
                        if (S = 0, x < I) {
                          for (I -= E = x; P[u++] = d[S++], --E; ) ;
                          S = u - F, z = P;
                        }
                      }
                    } else if (S += x - E, E < I) {
                      for (I -= E; P[u++] = d[S++], --E; ) ;
                      S = u - F, z = P;
                    }
                    for (; 2 < I; ) P[u++] = z[S++], P[u++] = z[S++], P[u++] = z[S++], I -= 3;
                    I && (P[u++] = z[S++], 1 < I && (P[u++] = z[S++]));
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
          c -= I = k >> 3, g &= (1 << (k -= I << 3)) - 1, o.next_in = c, o.next_out = u, o.avail_in = c < l ? l - c + 5 : 5 - (c - l), o.avail_out = u < _ ? _ - u + 257 : 257 - (u - _), a.hold = g, a.bits = k;
        };
      }, {}], 49: [function(t, n, i) {
        var o = t("../utils/common"), s = t("./adler32"), a = t("./crc32"), c = t("./inffast"), l = t("./inftrees"), u = 1, h = 2, _ = 0, f = -2, v = 1, b = 852, x = 592;
        function d(S) {
          return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
        }
        function g() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function k(S) {
          var z;
          return S && S.state ? (z = S.state, S.total_in = S.total_out = z.total = 0, S.msg = "", z.wrap && (S.adler = 1 & z.wrap), z.mode = v, z.last = 0, z.havedict = 0, z.dmax = 32768, z.head = null, z.hold = 0, z.bits = 0, z.lencode = z.lendyn = new o.Buf32(b), z.distcode = z.distdyn = new o.Buf32(x), z.sane = 1, z.back = -1, _) : f;
        }
        function N(S) {
          var z;
          return S && S.state ? ((z = S.state).wsize = 0, z.whave = 0, z.wnext = 0, k(S)) : f;
        }
        function y(S, z) {
          var p, P;
          return S && S.state ? (P = S.state, z < 0 ? (p = 0, z = -z) : (p = 1 + (z >> 4), z < 48 && (z &= 15)), z && (z < 8 || 15 < z) ? f : (P.window !== null && P.wbits !== z && (P.window = null), P.wrap = p, P.wbits = z, N(S))) : f;
        }
        function w(S, z) {
          var p, P;
          return S ? (P = new g(), (S.state = P).window = null, (p = y(S, z)) !== _ && (S.state = null), p) : f;
        }
        var A, T, E = !0;
        function I(S) {
          if (E) {
            var z;
            for (A = new o.Buf32(512), T = new o.Buf32(32), z = 0; z < 144; ) S.lens[z++] = 8;
            for (; z < 256; ) S.lens[z++] = 9;
            for (; z < 280; ) S.lens[z++] = 7;
            for (; z < 288; ) S.lens[z++] = 8;
            for (l(u, S.lens, 0, 288, A, 0, S.work, { bits: 9 }), z = 0; z < 32; ) S.lens[z++] = 5;
            l(h, S.lens, 0, 32, T, 0, S.work, { bits: 5 }), E = !1;
          }
          S.lencode = A, S.lenbits = 9, S.distcode = T, S.distbits = 5;
        }
        function F(S, z, p, P) {
          var K, j = S.state;
          return j.window === null && (j.wsize = 1 << j.wbits, j.wnext = 0, j.whave = 0, j.window = new o.Buf8(j.wsize)), P >= j.wsize ? (o.arraySet(j.window, z, p - j.wsize, j.wsize, 0), j.wnext = 0, j.whave = j.wsize) : (P < (K = j.wsize - j.wnext) && (K = P), o.arraySet(j.window, z, p - P, K, j.wnext), (P -= K) ? (o.arraySet(j.window, z, p - P, P, 0), j.wnext = P, j.whave = j.wsize) : (j.wnext += K, j.wnext === j.wsize && (j.wnext = 0), j.whave < j.wsize && (j.whave += K))), 0;
        }
        i.inflateReset = N, i.inflateReset2 = y, i.inflateResetKeep = k, i.inflateInit = function(S) {
          return w(S, 15);
        }, i.inflateInit2 = w, i.inflate = function(S, z) {
          var p, P, K, j, ne, L, ee, B, U, re, J, Y, we, ze, ce, de, Ae, ye, je, De, m, V, D, O, C = 0, R = new o.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return f;
          (p = S.state).mode === 12 && (p.mode = 13), ne = S.next_out, K = S.output, ee = S.avail_out, j = S.next_in, P = S.input, L = S.avail_in, B = p.hold, U = p.bits, re = L, J = ee, V = _;
          e: for (; ; ) switch (p.mode) {
            case v:
              if (p.wrap === 0) {
                p.mode = 13;
                break;
              }
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
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
              if (U -= 4, m = 8 + (15 & (B >>>= 4)), p.wbits === 0) p.wbits = m;
              else if (m > p.wbits) {
                S.msg = "invalid window size", p.mode = 30;
                break;
              }
              p.dmax = 1 << m, S.adler = p.check = 1, p.mode = 512 & B ? 10 : 12, U = B = 0;
              break;
            case 2:
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
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
                L--, B += P[j++] << U, U += 8;
              }
              p.head && (p.head.time = B), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, R[2] = B >>> 16 & 255, R[3] = B >>> 24 & 255, p.check = a(p.check, R, 4, 0)), U = B = 0, p.mode = 4;
            case 4:
              for (; U < 16; ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
              }
              p.head && (p.head.xflags = 255 & B, p.head.os = B >> 8), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0)), U = B = 0, p.mode = 5;
            case 5:
              if (1024 & p.flags) {
                for (; U < 16; ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
                }
                p.length = B, p.head && (p.head.extra_len = B), 512 & p.flags && (R[0] = 255 & B, R[1] = B >>> 8 & 255, p.check = a(p.check, R, 2, 0)), U = B = 0;
              } else p.head && (p.head.extra = null);
              p.mode = 6;
            case 6:
              if (1024 & p.flags && (L < (Y = p.length) && (Y = L), Y && (p.head && (m = p.head.extra_len - p.length, p.head.extra || (p.head.extra = new Array(p.head.extra_len)), o.arraySet(p.head.extra, P, j, Y, m)), 512 & p.flags && (p.check = a(p.check, P, Y, j)), L -= Y, j += Y, p.length -= Y), p.length)) break e;
              p.length = 0, p.mode = 7;
            case 7:
              if (2048 & p.flags) {
                if (L === 0) break e;
                for (Y = 0; m = P[j + Y++], p.head && m && p.length < 65536 && (p.head.name += String.fromCharCode(m)), m && Y < L; ) ;
                if (512 & p.flags && (p.check = a(p.check, P, Y, j)), L -= Y, j += Y, m) break e;
              } else p.head && (p.head.name = null);
              p.length = 0, p.mode = 8;
            case 8:
              if (4096 & p.flags) {
                if (L === 0) break e;
                for (Y = 0; m = P[j + Y++], p.head && m && p.length < 65536 && (p.head.comment += String.fromCharCode(m)), m && Y < L; ) ;
                if (512 & p.flags && (p.check = a(p.check, P, Y, j)), L -= Y, j += Y, m) break e;
              } else p.head && (p.head.comment = null);
              p.mode = 9;
            case 9:
              if (512 & p.flags) {
                for (; U < 16; ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
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
                L--, B += P[j++] << U, U += 8;
              }
              S.adler = p.check = d(B), U = B = 0, p.mode = 11;
            case 11:
              if (p.havedict === 0) return S.next_out = ne, S.avail_out = ee, S.next_in = j, S.avail_in = L, p.hold = B, p.bits = U, 2;
              S.adler = p.check = 1, p.mode = 12;
            case 12:
              if (z === 5 || z === 6) break e;
            case 13:
              if (p.last) {
                B >>>= 7 & U, U -= 7 & U, p.mode = 27;
                break;
              }
              for (; U < 3; ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
              }
              switch (p.last = 1 & B, U -= 1, 3 & (B >>>= 1)) {
                case 0:
                  p.mode = 14;
                  break;
                case 1:
                  if (I(p), p.mode = 20, z !== 6) break;
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
                L--, B += P[j++] << U, U += 8;
              }
              if ((65535 & B) != (B >>> 16 ^ 65535)) {
                S.msg = "invalid stored block lengths", p.mode = 30;
                break;
              }
              if (p.length = 65535 & B, U = B = 0, p.mode = 15, z === 6) break e;
            case 15:
              p.mode = 16;
            case 16:
              if (Y = p.length) {
                if (L < Y && (Y = L), ee < Y && (Y = ee), Y === 0) break e;
                o.arraySet(K, P, j, Y, ne), L -= Y, j += Y, ee -= Y, ne += Y, p.length -= Y;
                break;
              }
              p.mode = 12;
              break;
            case 17:
              for (; U < 14; ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
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
                  L--, B += P[j++] << U, U += 8;
                }
                p.lens[W[p.have++]] = 7 & B, B >>>= 3, U -= 3;
              }
              for (; p.have < 19; ) p.lens[W[p.have++]] = 0;
              if (p.lencode = p.lendyn, p.lenbits = 7, D = { bits: p.lenbits }, V = l(0, p.lens, 0, 19, p.lencode, 0, p.work, D), p.lenbits = D.bits, V) {
                S.msg = "invalid code lengths set", p.mode = 30;
                break;
              }
              p.have = 0, p.mode = 19;
            case 19:
              for (; p.have < p.nlen + p.ndist; ) {
                for (; de = (C = p.lencode[B & (1 << p.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & C, !((ce = C >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
                }
                if (Ae < 16) B >>>= ce, U -= ce, p.lens[p.have++] = Ae;
                else {
                  if (Ae === 16) {
                    for (O = ce + 2; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[j++] << U, U += 8;
                    }
                    if (B >>>= ce, U -= ce, p.have === 0) {
                      S.msg = "invalid bit length repeat", p.mode = 30;
                      break;
                    }
                    m = p.lens[p.have - 1], Y = 3 + (3 & B), B >>>= 2, U -= 2;
                  } else if (Ae === 17) {
                    for (O = ce + 3; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[j++] << U, U += 8;
                    }
                    U -= ce, m = 0, Y = 3 + (7 & (B >>>= ce)), B >>>= 3, U -= 3;
                  } else {
                    for (O = ce + 7; U < O; ) {
                      if (L === 0) break e;
                      L--, B += P[j++] << U, U += 8;
                    }
                    U -= ce, m = 0, Y = 11 + (127 & (B >>>= ce)), B >>>= 7, U -= 7;
                  }
                  if (p.have + Y > p.nlen + p.ndist) {
                    S.msg = "invalid bit length repeat", p.mode = 30;
                    break;
                  }
                  for (; Y--; ) p.lens[p.have++] = m;
                }
              }
              if (p.mode === 30) break;
              if (p.lens[256] === 0) {
                S.msg = "invalid code -- missing end-of-block", p.mode = 30;
                break;
              }
              if (p.lenbits = 9, D = { bits: p.lenbits }, V = l(u, p.lens, 0, p.nlen, p.lencode, 0, p.work, D), p.lenbits = D.bits, V) {
                S.msg = "invalid literal/lengths set", p.mode = 30;
                break;
              }
              if (p.distbits = 6, p.distcode = p.distdyn, D = { bits: p.distbits }, V = l(h, p.lens, p.nlen, p.ndist, p.distcode, 0, p.work, D), p.distbits = D.bits, V) {
                S.msg = "invalid distances set", p.mode = 30;
                break;
              }
              if (p.mode = 20, z === 6) break e;
            case 20:
              p.mode = 21;
            case 21:
              if (6 <= L && 258 <= ee) {
                S.next_out = ne, S.avail_out = ee, S.next_in = j, S.avail_in = L, p.hold = B, p.bits = U, c(S, J), ne = S.next_out, K = S.output, ee = S.avail_out, j = S.next_in, P = S.input, L = S.avail_in, B = p.hold, U = p.bits, p.mode === 12 && (p.back = -1);
                break;
              }
              for (p.back = 0; de = (C = p.lencode[B & (1 << p.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & C, !((ce = C >>> 24) <= U); ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
              }
              if (de && (240 & de) == 0) {
                for (ye = ce, je = de, De = Ae; de = (C = p.lencode[De + ((B & (1 << ye + je) - 1) >> ye)]) >>> 16 & 255, Ae = 65535 & C, !(ye + (ce = C >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
                }
                B >>>= ye, U -= ye, p.back += ye;
              }
              if (B >>>= ce, U -= ce, p.back += ce, p.length = Ae, de === 0) {
                p.mode = 26;
                break;
              }
              if (32 & de) {
                p.back = -1, p.mode = 12;
                break;
              }
              if (64 & de) {
                S.msg = "invalid literal/length code", p.mode = 30;
                break;
              }
              p.extra = 15 & de, p.mode = 22;
            case 22:
              if (p.extra) {
                for (O = p.extra; U < O; ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
                }
                p.length += B & (1 << p.extra) - 1, B >>>= p.extra, U -= p.extra, p.back += p.extra;
              }
              p.was = p.length, p.mode = 23;
            case 23:
              for (; de = (C = p.distcode[B & (1 << p.distbits) - 1]) >>> 16 & 255, Ae = 65535 & C, !((ce = C >>> 24) <= U); ) {
                if (L === 0) break e;
                L--, B += P[j++] << U, U += 8;
              }
              if ((240 & de) == 0) {
                for (ye = ce, je = de, De = Ae; de = (C = p.distcode[De + ((B & (1 << ye + je) - 1) >> ye)]) >>> 16 & 255, Ae = 65535 & C, !(ye + (ce = C >>> 24) <= U); ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
                }
                B >>>= ye, U -= ye, p.back += ye;
              }
              if (B >>>= ce, U -= ce, p.back += ce, 64 & de) {
                S.msg = "invalid distance code", p.mode = 30;
                break;
              }
              p.offset = Ae, p.extra = 15 & de, p.mode = 24;
            case 24:
              if (p.extra) {
                for (O = p.extra; U < O; ) {
                  if (L === 0) break e;
                  L--, B += P[j++] << U, U += 8;
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
              if (Y = J - ee, p.offset > Y) {
                if ((Y = p.offset - Y) > p.whave && p.sane) {
                  S.msg = "invalid distance too far back", p.mode = 30;
                  break;
                }
                we = Y > p.wnext ? (Y -= p.wnext, p.wsize - Y) : p.wnext - Y, Y > p.length && (Y = p.length), ze = p.window;
              } else ze = K, we = ne - p.offset, Y = p.length;
              for (ee < Y && (Y = ee), ee -= Y, p.length -= Y; K[ne++] = ze[we++], --Y; ) ;
              p.length === 0 && (p.mode = 21);
              break;
            case 26:
              if (ee === 0) break e;
              K[ne++] = p.length, ee--, p.mode = 21;
              break;
            case 27:
              if (p.wrap) {
                for (; U < 32; ) {
                  if (L === 0) break e;
                  L--, B |= P[j++] << U, U += 8;
                }
                if (J -= ee, S.total_out += J, p.total += J, J && (S.adler = p.check = p.flags ? a(p.check, K, J, ne - J) : s(p.check, K, J, ne - J)), J = ee, (p.flags ? B : d(B)) !== p.check) {
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
                  L--, B += P[j++] << U, U += 8;
                }
                if (B !== (4294967295 & p.total)) {
                  S.msg = "incorrect length check", p.mode = 30;
                  break;
                }
                U = B = 0;
              }
              p.mode = 29;
            case 29:
              V = 1;
              break e;
            case 30:
              V = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return f;
          }
          return S.next_out = ne, S.avail_out = ee, S.next_in = j, S.avail_in = L, p.hold = B, p.bits = U, (p.wsize || J !== S.avail_out && p.mode < 30 && (p.mode < 27 || z !== 4)) && F(S, S.output, S.next_out, J - S.avail_out) ? (p.mode = 31, -4) : (re -= S.avail_in, J -= S.avail_out, S.total_in += re, S.total_out += J, p.total += J, p.wrap && J && (S.adler = p.check = p.flags ? a(p.check, K, J, S.next_out - J) : s(p.check, K, J, S.next_out - J)), S.data_type = p.bits + (p.last ? 64 : 0) + (p.mode === 12 ? 128 : 0) + (p.mode === 20 || p.mode === 15 ? 256 : 0), (re == 0 && J === 0 || z === 4) && V === _ && (V = -5), V);
        }, i.inflateEnd = function(S) {
          if (!S || !S.state) return f;
          var z = S.state;
          return z.window && (z.window = null), S.state = null, _;
        }, i.inflateGetHeader = function(S, z) {
          var p;
          return S && S.state ? (2 & (p = S.state).wrap) == 0 ? f : ((p.head = z).done = !1, _) : f;
        }, i.inflateSetDictionary = function(S, z) {
          var p, P = z.length;
          return S && S.state ? (p = S.state).wrap !== 0 && p.mode !== 11 ? f : p.mode === 11 && s(1, z, P, 0) !== p.check ? -3 : F(S, z, P, P) ? (p.mode = 31, -4) : (p.havedict = 1, _) : f;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, n, i) {
        var o = t("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(u, h, _, f, v, b, x, d) {
          var g, k, N, y, w, A, T, E, I, F = d.bits, S = 0, z = 0, p = 0, P = 0, K = 0, j = 0, ne = 0, L = 0, ee = 0, B = 0, U = null, re = 0, J = new o.Buf16(16), Y = new o.Buf16(16), we = null, ze = 0;
          for (S = 0; S <= 15; S++) J[S] = 0;
          for (z = 0; z < f; z++) J[h[_ + z]]++;
          for (K = F, P = 15; 1 <= P && J[P] === 0; P--) ;
          if (P < K && (K = P), P === 0) return v[b++] = 20971520, v[b++] = 20971520, d.bits = 1, 0;
          for (p = 1; p < P && J[p] === 0; p++) ;
          for (K < p && (K = p), S = L = 1; S <= 15; S++) if (L <<= 1, (L -= J[S]) < 0) return -1;
          if (0 < L && (u === 0 || P !== 1)) return -1;
          for (Y[1] = 0, S = 1; S < 15; S++) Y[S + 1] = Y[S] + J[S];
          for (z = 0; z < f; z++) h[_ + z] !== 0 && (x[Y[h[_ + z]]++] = z);
          if (A = u === 0 ? (U = we = x, 19) : u === 1 ? (U = s, re -= 257, we = a, ze -= 257, 256) : (U = c, we = l, -1), S = p, w = b, ne = z = B = 0, N = -1, y = (ee = 1 << (j = K)) - 1, u === 1 && 852 < ee || u === 2 && 592 < ee) return 1;
          for (; ; ) {
            for (T = S - ne, I = x[z] < A ? (E = 0, x[z]) : x[z] > A ? (E = we[ze + x[z]], U[re + x[z]]) : (E = 96, 0), g = 1 << S - ne, p = k = 1 << j; v[w + (B >> ne) + (k -= g)] = T << 24 | E << 16 | I | 0, k !== 0; ) ;
            for (g = 1 << S - 1; B & g; ) g >>= 1;
            if (g !== 0 ? (B &= g - 1, B += g) : B = 0, z++, --J[S] == 0) {
              if (S === P) break;
              S = h[_ + x[z]];
            }
            if (K < S && (B & y) !== N) {
              for (ne === 0 && (ne = K), w += p, L = 1 << (j = S - ne); j + ne < P && !((L -= J[j + ne]) <= 0); ) j++, L <<= 1;
              if (ee += 1 << j, u === 1 && 852 < ee || u === 2 && 592 < ee) return 1;
              v[N = B & y] = K << 24 | j << 16 | w - b | 0;
            }
          }
          return B !== 0 && (v[w + B] = S - ne << 24 | 64 << 16 | 0), d.bits = K, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(t, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(t, n, i) {
        var o = t("../utils/common"), s = 0, a = 1;
        function c(C) {
          for (var R = C.length; 0 <= --R; ) C[R] = 0;
        }
        var l = 0, u = 29, h = 256, _ = h + 1 + u, f = 30, v = 19, b = 2 * _ + 1, x = 15, d = 16, g = 7, k = 256, N = 16, y = 17, w = 18, A = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], T = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], F = new Array(2 * (_ + 2));
        c(F);
        var S = new Array(2 * f);
        c(S);
        var z = new Array(512);
        c(z);
        var p = new Array(256);
        c(p);
        var P = new Array(u);
        c(P);
        var K, j, ne, L = new Array(f);
        function ee(C, R, W, H, $) {
          this.static_tree = C, this.extra_bits = R, this.extra_base = W, this.elems = H, this.max_length = $, this.has_stree = C && C.length;
        }
        function B(C, R) {
          this.dyn_tree = C, this.max_code = 0, this.stat_desc = R;
        }
        function U(C) {
          return C < 256 ? z[C] : z[256 + (C >>> 7)];
        }
        function re(C, R) {
          C.pending_buf[C.pending++] = 255 & R, C.pending_buf[C.pending++] = R >>> 8 & 255;
        }
        function J(C, R, W) {
          C.bi_valid > d - W ? (C.bi_buf |= R << C.bi_valid & 65535, re(C, C.bi_buf), C.bi_buf = R >> d - C.bi_valid, C.bi_valid += W - d) : (C.bi_buf |= R << C.bi_valid & 65535, C.bi_valid += W);
        }
        function Y(C, R, W) {
          J(C, W[2 * R], W[2 * R + 1]);
        }
        function we(C, R) {
          for (var W = 0; W |= 1 & C, C >>>= 1, W <<= 1, 0 < --R; ) ;
          return W >>> 1;
        }
        function ze(C, R, W) {
          var H, $, G = new Array(x + 1), Q = 0;
          for (H = 1; H <= x; H++) G[H] = Q = Q + W[H - 1] << 1;
          for ($ = 0; $ <= R; $++) {
            var X = C[2 * $ + 1];
            X !== 0 && (C[2 * $] = we(G[X]++, X));
          }
        }
        function ce(C) {
          var R;
          for (R = 0; R < _; R++) C.dyn_ltree[2 * R] = 0;
          for (R = 0; R < f; R++) C.dyn_dtree[2 * R] = 0;
          for (R = 0; R < v; R++) C.bl_tree[2 * R] = 0;
          C.dyn_ltree[2 * k] = 1, C.opt_len = C.static_len = 0, C.last_lit = C.matches = 0;
        }
        function de(C) {
          8 < C.bi_valid ? re(C, C.bi_buf) : 0 < C.bi_valid && (C.pending_buf[C.pending++] = C.bi_buf), C.bi_buf = 0, C.bi_valid = 0;
        }
        function Ae(C, R, W, H) {
          var $ = 2 * R, G = 2 * W;
          return C[$] < C[G] || C[$] === C[G] && H[R] <= H[W];
        }
        function ye(C, R, W) {
          for (var H = C.heap[W], $ = W << 1; $ <= C.heap_len && ($ < C.heap_len && Ae(R, C.heap[$ + 1], C.heap[$], C.depth) && $++, !Ae(R, H, C.heap[$], C.depth)); ) C.heap[W] = C.heap[$], W = $, $ <<= 1;
          C.heap[W] = H;
        }
        function je(C, R, W) {
          var H, $, G, Q, X = 0;
          if (C.last_lit !== 0) for (; H = C.pending_buf[C.d_buf + 2 * X] << 8 | C.pending_buf[C.d_buf + 2 * X + 1], $ = C.pending_buf[C.l_buf + X], X++, H === 0 ? Y(C, $, R) : (Y(C, (G = p[$]) + h + 1, R), (Q = A[G]) !== 0 && J(C, $ -= P[G], Q), Y(C, G = U(--H), W), (Q = T[G]) !== 0 && J(C, H -= L[G], Q)), X < C.last_lit; ) ;
          Y(C, k, R);
        }
        function De(C, R) {
          var W, H, $, G = R.dyn_tree, Q = R.stat_desc.static_tree, X = R.stat_desc.has_stree, ie = R.stat_desc.elems, he = -1;
          for (C.heap_len = 0, C.heap_max = b, W = 0; W < ie; W++) G[2 * W] !== 0 ? (C.heap[++C.heap_len] = he = W, C.depth[W] = 0) : G[2 * W + 1] = 0;
          for (; C.heap_len < 2; ) G[2 * ($ = C.heap[++C.heap_len] = he < 2 ? ++he : 0)] = 1, C.depth[$] = 0, C.opt_len--, X && (C.static_len -= Q[2 * $ + 1]);
          for (R.max_code = he, W = C.heap_len >> 1; 1 <= W; W--) ye(C, G, W);
          for ($ = ie; W = C.heap[1], C.heap[1] = C.heap[C.heap_len--], ye(C, G, 1), H = C.heap[1], C.heap[--C.heap_max] = W, C.heap[--C.heap_max] = H, G[2 * $] = G[2 * W] + G[2 * H], C.depth[$] = (C.depth[W] >= C.depth[H] ? C.depth[W] : C.depth[H]) + 1, G[2 * W + 1] = G[2 * H + 1] = $, C.heap[1] = $++, ye(C, G, 1), 2 <= C.heap_len; ) ;
          C.heap[--C.heap_max] = C.heap[1], (function(ue, Ze) {
            var Wt, Me, Ht, xe, br, Yr, Ke = Ze.dyn_tree, ai = Ze.max_code, fs = Ze.stat_desc.static_tree, ds = Ze.stat_desc.has_stree, hs = Ze.stat_desc.extra_bits, si = Ze.stat_desc.extra_base, Gt = Ze.stat_desc.max_length, vr = 0;
            for (xe = 0; xe <= x; xe++) ue.bl_count[xe] = 0;
            for (Ke[2 * ue.heap[ue.heap_max] + 1] = 0, Wt = ue.heap_max + 1; Wt < b; Wt++) Gt < (xe = Ke[2 * Ke[2 * (Me = ue.heap[Wt]) + 1] + 1] + 1) && (xe = Gt, vr++), Ke[2 * Me + 1] = xe, ai < Me || (ue.bl_count[xe]++, br = 0, si <= Me && (br = hs[Me - si]), Yr = Ke[2 * Me], ue.opt_len += Yr * (xe + br), ds && (ue.static_len += Yr * (fs[2 * Me + 1] + br)));
            if (vr !== 0) {
              do {
                for (xe = Gt - 1; ue.bl_count[xe] === 0; ) xe--;
                ue.bl_count[xe]--, ue.bl_count[xe + 1] += 2, ue.bl_count[Gt]--, vr -= 2;
              } while (0 < vr);
              for (xe = Gt; xe !== 0; xe--) for (Me = ue.bl_count[xe]; Me !== 0; ) ai < (Ht = ue.heap[--Wt]) || (Ke[2 * Ht + 1] !== xe && (ue.opt_len += (xe - Ke[2 * Ht + 1]) * Ke[2 * Ht], Ke[2 * Ht + 1] = xe), Me--);
            }
          })(C, R), ze(G, he, C.bl_count);
        }
        function m(C, R, W) {
          var H, $, G = -1, Q = R[1], X = 0, ie = 7, he = 4;
          for (Q === 0 && (ie = 138, he = 3), R[2 * (W + 1) + 1] = 65535, H = 0; H <= W; H++) $ = Q, Q = R[2 * (H + 1) + 1], ++X < ie && $ === Q || (X < he ? C.bl_tree[2 * $] += X : $ !== 0 ? ($ !== G && C.bl_tree[2 * $]++, C.bl_tree[2 * N]++) : X <= 10 ? C.bl_tree[2 * y]++ : C.bl_tree[2 * w]++, G = $, he = (X = 0) === Q ? (ie = 138, 3) : $ === Q ? (ie = 6, 3) : (ie = 7, 4));
        }
        function V(C, R, W) {
          var H, $, G = -1, Q = R[1], X = 0, ie = 7, he = 4;
          for (Q === 0 && (ie = 138, he = 3), H = 0; H <= W; H++) if ($ = Q, Q = R[2 * (H + 1) + 1], !(++X < ie && $ === Q)) {
            if (X < he) for (; Y(C, $, C.bl_tree), --X != 0; ) ;
            else $ !== 0 ? ($ !== G && (Y(C, $, C.bl_tree), X--), Y(C, N, C.bl_tree), J(C, X - 3, 2)) : X <= 10 ? (Y(C, y, C.bl_tree), J(C, X - 3, 3)) : (Y(C, w, C.bl_tree), J(C, X - 11, 7));
            G = $, he = (X = 0) === Q ? (ie = 138, 3) : $ === Q ? (ie = 6, 3) : (ie = 7, 4);
          }
        }
        c(L);
        var D = !1;
        function O(C, R, W, H) {
          J(C, (l << 1) + (H ? 1 : 0), 3), (function($, G, Q, X) {
            de($), re($, Q), re($, ~Q), o.arraySet($.pending_buf, $.window, G, Q, $.pending), $.pending += Q;
          })(C, R, W);
        }
        i._tr_init = function(C) {
          D || ((function() {
            var R, W, H, $, G, Q = new Array(x + 1);
            for ($ = H = 0; $ < u - 1; $++) for (P[$] = H, R = 0; R < 1 << A[$]; R++) p[H++] = $;
            for (p[H - 1] = $, $ = G = 0; $ < 16; $++) for (L[$] = G, R = 0; R < 1 << T[$]; R++) z[G++] = $;
            for (G >>= 7; $ < f; $++) for (L[$] = G << 7, R = 0; R < 1 << T[$] - 7; R++) z[256 + G++] = $;
            for (W = 0; W <= x; W++) Q[W] = 0;
            for (R = 0; R <= 143; ) F[2 * R + 1] = 8, R++, Q[8]++;
            for (; R <= 255; ) F[2 * R + 1] = 9, R++, Q[9]++;
            for (; R <= 279; ) F[2 * R + 1] = 7, R++, Q[7]++;
            for (; R <= 287; ) F[2 * R + 1] = 8, R++, Q[8]++;
            for (ze(F, _ + 1, Q), R = 0; R < f; R++) S[2 * R + 1] = 5, S[2 * R] = we(R, 5);
            K = new ee(F, A, h + 1, _, x), j = new ee(S, T, 0, f, x), ne = new ee(new Array(0), E, 0, v, g);
          })(), D = !0), C.l_desc = new B(C.dyn_ltree, K), C.d_desc = new B(C.dyn_dtree, j), C.bl_desc = new B(C.bl_tree, ne), C.bi_buf = 0, C.bi_valid = 0, ce(C);
        }, i._tr_stored_block = O, i._tr_flush_block = function(C, R, W, H) {
          var $, G, Q = 0;
          0 < C.level ? (C.strm.data_type === 2 && (C.strm.data_type = (function(X) {
            var ie, he = 4093624447;
            for (ie = 0; ie <= 31; ie++, he >>>= 1) if (1 & he && X.dyn_ltree[2 * ie] !== 0) return s;
            if (X.dyn_ltree[18] !== 0 || X.dyn_ltree[20] !== 0 || X.dyn_ltree[26] !== 0) return a;
            for (ie = 32; ie < h; ie++) if (X.dyn_ltree[2 * ie] !== 0) return a;
            return s;
          })(C)), De(C, C.l_desc), De(C, C.d_desc), Q = (function(X) {
            var ie;
            for (m(X, X.dyn_ltree, X.l_desc.max_code), m(X, X.dyn_dtree, X.d_desc.max_code), De(X, X.bl_desc), ie = v - 1; 3 <= ie && X.bl_tree[2 * I[ie] + 1] === 0; ie--) ;
            return X.opt_len += 3 * (ie + 1) + 5 + 5 + 4, ie;
          })(C), $ = C.opt_len + 3 + 7 >>> 3, (G = C.static_len + 3 + 7 >>> 3) <= $ && ($ = G)) : $ = G = W + 5, W + 4 <= $ && R !== -1 ? O(C, R, W, H) : C.strategy === 4 || G === $ ? (J(C, 2 + (H ? 1 : 0), 3), je(C, F, S)) : (J(C, 4 + (H ? 1 : 0), 3), (function(X, ie, he, ue) {
            var Ze;
            for (J(X, ie - 257, 5), J(X, he - 1, 5), J(X, ue - 4, 4), Ze = 0; Ze < ue; Ze++) J(X, X.bl_tree[2 * I[Ze] + 1], 3);
            V(X, X.dyn_ltree, ie - 1), V(X, X.dyn_dtree, he - 1);
          })(C, C.l_desc.max_code + 1, C.d_desc.max_code + 1, Q + 1), je(C, C.dyn_ltree, C.dyn_dtree)), ce(C), H && de(C);
        }, i._tr_tally = function(C, R, W) {
          return C.pending_buf[C.d_buf + 2 * C.last_lit] = R >>> 8 & 255, C.pending_buf[C.d_buf + 2 * C.last_lit + 1] = 255 & R, C.pending_buf[C.l_buf + C.last_lit] = 255 & W, C.last_lit++, R === 0 ? C.dyn_ltree[2 * W]++ : (C.matches++, R--, C.dyn_ltree[2 * (p[W] + h + 1)]++, C.dyn_dtree[2 * U(R)]++), C.last_lit === C.lit_bufsize - 1;
        }, i._tr_align = function(C) {
          J(C, 2, 3), Y(C, k, F), (function(R) {
            R.bi_valid === 16 ? (re(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
          })(C);
        };
      }, { "../utils/common": 41 }], 53: [function(t, n, i) {
        n.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(t, n, i) {
        (function(o) {
          (function(s, a) {
            if (!s.setImmediate) {
              var c, l, u, h, _ = 1, f = {}, v = !1, b = s.document, x = Object.getPrototypeOf && Object.getPrototypeOf(s);
              x = x && x.setTimeout ? x : s, c = {}.toString.call(s.process) === "[object process]" ? function(N) {
                process.nextTick(function() {
                  g(N);
                });
              } : (function() {
                if (s.postMessage && !s.importScripts) {
                  var N = !0, y = s.onmessage;
                  return s.onmessage = function() {
                    N = !1;
                  }, s.postMessage("", "*"), s.onmessage = y, N;
                }
              })() ? (h = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", k, !1) : s.attachEvent("onmessage", k), function(N) {
                s.postMessage(h + N, "*");
              }) : s.MessageChannel ? ((u = new MessageChannel()).port1.onmessage = function(N) {
                g(N.data);
              }, function(N) {
                u.port2.postMessage(N);
              }) : b && "onreadystatechange" in b.createElement("script") ? (l = b.documentElement, function(N) {
                var y = b.createElement("script");
                y.onreadystatechange = function() {
                  g(N), y.onreadystatechange = null, l.removeChild(y), y = null;
                }, l.appendChild(y);
              }) : function(N) {
                setTimeout(g, 0, N);
              }, x.setImmediate = function(N) {
                typeof N != "function" && (N = new Function("" + N));
                for (var y = new Array(arguments.length - 1), w = 0; w < y.length; w++) y[w] = arguments[w + 1];
                var A = { callback: N, args: y };
                return f[_] = A, c(_), _++;
              }, x.clearImmediate = d;
            }
            function d(N) {
              delete f[N];
            }
            function g(N) {
              if (v) setTimeout(g, 0, N);
              else {
                var y = f[N];
                if (y) {
                  v = !0;
                  try {
                    (function(w) {
                      var A = w.callback, T = w.args;
                      switch (T.length) {
                        case 0:
                          A();
                          break;
                        case 1:
                          A(T[0]);
                          break;
                        case 2:
                          A(T[0], T[1]);
                          break;
                        case 3:
                          A(T[0], T[1], T[2]);
                          break;
                        default:
                          A.apply(a, T);
                      }
                    })(y);
                  } finally {
                    d(N), v = !1;
                  }
                }
              }
            }
            function k(N) {
              N.source === s && typeof N.data == "string" && N.data.indexOf(h) === 0 && g(+N.data.slice(h.length));
            }
          })(typeof self > "u" ? o === void 0 ? this : o : self);
        }).call(this, typeof Yt < "u" ? Yt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(Kr)), Kr.exports;
}
var Ts = Is();
const Cs = /* @__PURE__ */ Ns(Ts), Os = 9783072e5, Ct = "bplist00", Fs = "// !$*UTF8*$!";
var rt;
(function(e) {
  e[e.BINARY = 0] = "BINARY", e[e.XML = 1] = "XML", e[e.OPENSTEP = 2] = "OPENSTEP";
})(rt || (rt = {}));
const $e = 100 * 1e3 * 1e3, Rs = 32768, ui = new TextDecoder("utf-8"), Ps = new TextDecoder("utf-16");
function fi(e, r = 0) {
  return new DataView(e).getFloat64(r, !1);
}
function Zs(e, r = 0) {
  return new DataView(e).getFloat32(r, !1);
}
function pt(e, r = 0) {
  return new DataView(e).getUint8(r);
}
function $s(e, r = 0) {
  return new DataView(e).getUint16(r, !1);
}
function Us(e, r = 0) {
  return new DataView(e).getUint32(r, !1);
}
function Ot(e, r = 0) {
  return new DataView(e).getBigUint64(r, !1);
}
function Je(e) {
  switch (e.byteLength) {
    case 1:
      return pt(e);
    case 2:
      return $s(e);
    case 4:
      return Us(e);
    case 8:
      return Ot(e);
    case 16:
      return Ot(e, 8);
  }
  throw new Error(`Invalid unsigned int length: ${e.byteLength}`);
}
function Xo(e, r = 0) {
  return new DataView(e).getInt8(r);
}
function Bs(e, r = 0) {
  return new DataView(e).getInt16(r, !1);
}
function Ls(e, r = 0) {
  return new DataView(e).getInt32(r, !1);
}
function Ds(e, r = 0) {
  return new DataView(e).getBigInt64(r, !1);
}
function js(e) {
  switch (e.byteLength) {
    case 1:
      return Xo(e);
    case 2:
      return Bs(e);
    case 4:
      return Ls(e);
    case 8:
      return Ds(e);
    case 16:
      return Ot(e, 8);
  }
  throw new Error(`Invalid int length: ${e.byteLength}`);
}
function Ms(e) {
  const r = new Uint8Array(e);
  for (let t = 0; t < r.length; t += 2) {
    const n = r[t];
    r[t] = r[t + 1], r[t + 1] = n;
  }
  return r.buffer;
}
const Vs = (e) => {
  const r = e.slice(0, Ct.length);
  if (ui.decode(r) !== Ct)
    throw new Error(`Invalid binary plist. Expected '${Ct}' at offset 0.`);
  const t = e.slice(e.byteLength - 32, e.byteLength), n = pt(t, 6), i = pt(t, 7), o = Number(Ot(t, 8)), s = Number(Ot(t, 16)), a = Number(Ot(t, 24));
  if (o > Rs)
    throw new Error("maxObjectCount exceeded");
  const c = [];
  for (let u = 0; u < o; u++) {
    const h = e.slice(a + u * n, a + (u + 1) * n);
    c[u] = Number(Je(h));
  }
  function l(u) {
    const h = c[u], _ = pt(e, h), f = (_ & 240) >> 4, v = _ & 15;
    switch (f) {
      case 0:
        return b();
      case 1:
        return x();
      case 8:
        return d();
      case 2:
        return g();
      case 3:
        return k();
      case 4:
        return N();
      case 5:
        return y();
      case 6:
        return y(!0);
      case 10:
        return w();
      case 13:
        return A();
      default:
        throw new Error("Unhandled type 0x" + f.toString(16));
    }
    function b() {
      switch (v) {
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
    function x() {
      const T = Math.pow(2, v);
      if (T < $e) {
        const E = e.slice(h + 1, h + 1 + T);
        return js(E);
      }
      throw new Error("Too little heap space available! Wanted to read " + T + " bytes, but only " + $e + " are available.");
    }
    function d() {
      const T = v + 1;
      if (T < $e)
        return {
          CF$UID: Je(e.slice(h + 1, h + 1 + T))
        };
      throw new Error("Too little heap space available! Wanted to read " + T + " bytes, but only " + $e + " are available.");
    }
    function g() {
      const T = Math.pow(2, v);
      if (T < $e) {
        const E = e.slice(h + 1, h + 1 + T);
        if (T === 4)
          return Zs(E);
        if (T === 8)
          return fi(E);
        throw new Error(`Invalid real length: ${T}`);
      } else
        throw new Error("Too little heap space available! Wanted to read " + T + " bytes, but only " + $e + " are available.");
    }
    function k() {
      v != 3 && console.error("Unknown date type :" + v + ". Parsing anyway...");
      const T = e.slice(h + 1, h + 9);
      return new Date(Os + 1e3 * fi(T));
    }
    function N() {
      let T = 1, E = v;
      if (v == 15) {
        const I = Xo(e, h + 1), F = (I & 240) / 16;
        F != 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + F);
        const S = I & 15, z = Math.pow(2, S);
        T = 2 + z, E = Number(Je(e.slice(h + 2, h + 2 + z)));
      }
      if (E < $e)
        return e.slice(h + T, h + T + Number(E));
      throw new Error("Too little heap space available! Wanted to read " + E + " bytes, but only " + $e + " are available.");
    }
    function y(T = !1) {
      let E = v, I = 1;
      if (v == 15) {
        const F = pt(e, h + 1), S = (F & 240) / 16;
        S != 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + S);
        const z = F & 15, p = Math.pow(2, z);
        I = 2 + p, E = Number(Je(e.slice(h + 2, h + 2 + p)));
      }
      if (E *= T ? 2 : 1, E < $e) {
        let F = e.slice(h + I, h + I + E);
        return T ? (F = Ms(F), Ps.decode(F)) : ui.decode(F);
      }
      throw new Error("Too little heap space available! Wanted to read " + E + " bytes, but only " + $e + " are available.");
    }
    function w() {
      let T = v, E = 1;
      if (v == 15) {
        const F = pt(e, h + 1), S = (F & 240) / 16;
        S != 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + S);
        const z = F & 15, p = Math.pow(2, z);
        E = 2 + p, T = Number(Je(e.slice(h + 2, h + 2 + p)));
      }
      if (T * i > $e)
        throw new Error("Too little heap space available!");
      const I = [];
      for (let F = 0; F < T; F++) {
        const S = Number(Je(e.slice(h + E + F * i, h + E + (F + 1) * i)));
        I[F] = l(S);
      }
      return I;
    }
    function A() {
      let T = v, E = 1;
      if (v == 15) {
        const F = pt(e, h + 1), S = (F & 240) / 16;
        S != 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + S);
        const z = F & 15, p = Math.pow(2, z);
        E = 2 + p, T = Number(Je(e.slice(h + 2, h + 2 + p)));
      }
      if (T * 2 * i > $e)
        throw new Error("Too little heap space available!");
      const I = {};
      for (let F = 0; F < T; F++) {
        const S = Number(Je(e.slice(h + E + F * i, h + E + (F + 1) * i))), z = Number(Je(e.slice(h + E + T * i + F * i, h + E + T * i + (F + 1) * i))), p = l(S);
        if (typeof p != "string")
          throw new Error("Invalid key type.");
        if (p === "__proto__")
          throw new Error("Attempted prototype pollution");
        const P = l(z);
        I[p] = P;
      }
      return I;
    }
  }
  return l(s);
};
var Jr = {}, Qr = {}, di;
function Wn() {
  return di || (di = 1, (function(e) {
    const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", t = r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", n = "[" + r + "][" + t + "]*", i = new RegExp("^" + n + "$"), o = function(a, c) {
      const l = [];
      let u = c.exec(a);
      for (; u; ) {
        const h = [];
        h.startIndex = c.lastIndex - u[0].length;
        const _ = u.length;
        for (let f = 0; f < _; f++)
          h.push(u[f]);
        l.push(h), u = c.exec(a);
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
        const u = Object.keys(c), h = u.length;
        for (let _ = 0; _ < h; _++)
          l === "strict" ? a[u[_]] = [c[u[_]]] : a[u[_]] = c[u[_]];
      }
    }, e.getValue = function(a) {
      return e.isExist(a) ? a : "";
    }, e.isName = s, e.getAllMatches = o, e.nameRegexp = n;
  })(Qr)), Qr;
}
var hi;
function Yo() {
  if (hi) return Jr;
  hi = 1;
  const e = Wn(), r = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  Jr.validate = function(d, g) {
    g = Object.assign({}, r, g);
    const k = [];
    let N = !1, y = !1;
    d[0] === "\uFEFF" && (d = d.substr(1));
    for (let w = 0; w < d.length; w++)
      if (d[w] === "<" && d[w + 1] === "?") {
        if (w += 2, w = n(d, w), w.err) return w;
      } else if (d[w] === "<") {
        let A = w;
        if (w++, d[w] === "!") {
          w = i(d, w);
          continue;
        } else {
          let T = !1;
          d[w] === "/" && (T = !0, w++);
          let E = "";
          for (; w < d.length && d[w] !== ">" && d[w] !== " " && d[w] !== "	" && d[w] !== `
` && d[w] !== "\r"; w++)
            E += d[w];
          if (E = E.trim(), E[E.length - 1] === "/" && (E = E.substring(0, E.length - 1), w--), !v(E)) {
            let S;
            return E.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + E + "' is an invalid name.", _("InvalidTag", S, b(d, w));
          }
          const I = a(d, w);
          if (I === !1)
            return _("InvalidAttr", "Attributes for '" + E + "' have open quote.", b(d, w));
          let F = I.value;
          if (w = I.index, F[F.length - 1] === "/") {
            const S = w - F.length;
            F = F.substring(0, F.length - 1);
            const z = l(F, g);
            if (z === !0)
              N = !0;
            else
              return _(z.err.code, z.err.msg, b(d, S + z.err.line));
          } else if (T)
            if (I.tagClosed) {
              if (F.trim().length > 0)
                return _("InvalidTag", "Closing tag '" + E + "' can't have attributes or invalid starting.", b(d, A));
              if (k.length === 0)
                return _("InvalidTag", "Closing tag '" + E + "' has not been opened.", b(d, A));
              {
                const S = k.pop();
                if (E !== S.tagName) {
                  let z = b(d, S.tagStartPos);
                  return _(
                    "InvalidTag",
                    "Expected closing tag '" + S.tagName + "' (opened in line " + z.line + ", col " + z.col + ") instead of closing tag '" + E + "'.",
                    b(d, A)
                  );
                }
                k.length == 0 && (y = !0);
              }
            } else return _("InvalidTag", "Closing tag '" + E + "' doesn't have proper closing.", b(d, w));
          else {
            const S = l(F, g);
            if (S !== !0)
              return _(S.err.code, S.err.msg, b(d, w - F.length + S.err.line));
            if (y === !0)
              return _("InvalidXml", "Multiple possible root nodes found.", b(d, w));
            g.unpairedTags.indexOf(E) !== -1 || k.push({ tagName: E, tagStartPos: A }), N = !0;
          }
          for (w++; w < d.length; w++)
            if (d[w] === "<")
              if (d[w + 1] === "!") {
                w++, w = i(d, w);
                continue;
              } else if (d[w + 1] === "?") {
                if (w = n(d, ++w), w.err) return w;
              } else
                break;
            else if (d[w] === "&") {
              const S = h(d, w);
              if (S == -1)
                return _("InvalidChar", "char '&' is not expected.", b(d, w));
              w = S;
            } else if (y === !0 && !t(d[w]))
              return _("InvalidXml", "Extra text at the end", b(d, w));
          d[w] === "<" && w--;
        }
      } else {
        if (t(d[w]))
          continue;
        return _("InvalidChar", "char '" + d[w] + "' is not expected.", b(d, w));
      }
    if (N) {
      if (k.length == 1)
        return _("InvalidTag", "Unclosed tag '" + k[0].tagName + "'.", b(d, k[0].tagStartPos));
      if (k.length > 0)
        return _("InvalidXml", "Invalid '" + JSON.stringify(k.map((w) => w.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return _("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function t(d) {
    return d === " " || d === "	" || d === `
` || d === "\r";
  }
  function n(d, g) {
    const k = g;
    for (; g < d.length; g++)
      if (d[g] == "?" || d[g] == " ") {
        const N = d.substr(k, g - k);
        if (g > 5 && N === "xml")
          return _("InvalidXml", "XML declaration allowed only at the start of the document.", b(d, g));
        if (d[g] == "?" && d[g + 1] == ">") {
          g++;
          break;
        } else
          continue;
      }
    return g;
  }
  function i(d, g) {
    if (d.length > g + 5 && d[g + 1] === "-" && d[g + 2] === "-") {
      for (g += 3; g < d.length; g++)
        if (d[g] === "-" && d[g + 1] === "-" && d[g + 2] === ">") {
          g += 2;
          break;
        }
    } else if (d.length > g + 8 && d[g + 1] === "D" && d[g + 2] === "O" && d[g + 3] === "C" && d[g + 4] === "T" && d[g + 5] === "Y" && d[g + 6] === "P" && d[g + 7] === "E") {
      let k = 1;
      for (g += 8; g < d.length; g++)
        if (d[g] === "<")
          k++;
        else if (d[g] === ">" && (k--, k === 0))
          break;
    } else if (d.length > g + 9 && d[g + 1] === "[" && d[g + 2] === "C" && d[g + 3] === "D" && d[g + 4] === "A" && d[g + 5] === "T" && d[g + 6] === "A" && d[g + 7] === "[") {
      for (g += 8; g < d.length; g++)
        if (d[g] === "]" && d[g + 1] === "]" && d[g + 2] === ">") {
          g += 2;
          break;
        }
    }
    return g;
  }
  const o = '"', s = "'";
  function a(d, g) {
    let k = "", N = "", y = !1;
    for (; g < d.length; g++) {
      if (d[g] === o || d[g] === s)
        N === "" ? N = d[g] : N !== d[g] || (N = "");
      else if (d[g] === ">" && N === "") {
        y = !0;
        break;
      }
      k += d[g];
    }
    return N !== "" ? !1 : {
      value: k,
      index: g,
      tagClosed: y
    };
  }
  const c = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function l(d, g) {
    const k = e.getAllMatches(d, c), N = {};
    for (let y = 0; y < k.length; y++) {
      if (k[y][1].length === 0)
        return _("InvalidAttr", "Attribute '" + k[y][2] + "' has no space in starting.", x(k[y]));
      if (k[y][3] !== void 0 && k[y][4] === void 0)
        return _("InvalidAttr", "Attribute '" + k[y][2] + "' is without value.", x(k[y]));
      if (k[y][3] === void 0 && !g.allowBooleanAttributes)
        return _("InvalidAttr", "boolean attribute '" + k[y][2] + "' is not allowed.", x(k[y]));
      const w = k[y][2];
      if (!f(w))
        return _("InvalidAttr", "Attribute '" + w + "' is an invalid name.", x(k[y]));
      if (!N.hasOwnProperty(w))
        N[w] = 1;
      else
        return _("InvalidAttr", "Attribute '" + w + "' is repeated.", x(k[y]));
    }
    return !0;
  }
  function u(d, g) {
    let k = /\d/;
    for (d[g] === "x" && (g++, k = /[\da-fA-F]/); g < d.length; g++) {
      if (d[g] === ";")
        return g;
      if (!d[g].match(k))
        break;
    }
    return -1;
  }
  function h(d, g) {
    if (g++, d[g] === ";")
      return -1;
    if (d[g] === "#")
      return g++, u(d, g);
    let k = 0;
    for (; g < d.length; g++, k++)
      if (!(d[g].match(/\w/) && k < 20)) {
        if (d[g] === ";")
          break;
        return -1;
      }
    return g;
  }
  function _(d, g, k) {
    return {
      err: {
        code: d,
        msg: g,
        line: k.line || k,
        col: k.col
      }
    };
  }
  function f(d) {
    return e.isName(d);
  }
  function v(d) {
    return e.isName(d);
  }
  function b(d, g) {
    const k = d.substring(0, g).split(/\r?\n/);
    return {
      line: k.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: k[k.length - 1].length + 1
    };
  }
  function x(d) {
    return d.startIndex + d[1].length;
  }
  return Jr;
}
var yr = {}, pi;
function Ws() {
  if (pi) return yr;
  pi = 1;
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
  return yr.buildOptions = r, yr.defaultOptions = e, yr;
}
var en, _i;
function Hs() {
  if (_i) return en;
  _i = 1;
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
  return en = e, en;
}
var tn, gi;
function Gs() {
  if (gi) return tn;
  gi = 1;
  const e = Wn();
  function r(l, u) {
    const h = {};
    if (l[u + 3] === "O" && l[u + 4] === "C" && l[u + 5] === "T" && l[u + 6] === "Y" && l[u + 7] === "P" && l[u + 8] === "E") {
      u = u + 9;
      let _ = 1, f = !1, v = !1, b = "";
      for (; u < l.length; u++)
        if (l[u] === "<" && !v) {
          if (f && i(l, u)) {
            u += 7;
            let x, d;
            [x, d, u] = t(l, u + 1), d.indexOf("&") === -1 && (h[c(x)] = {
              regx: RegExp(`&${x};`, "g"),
              val: d
            });
          } else if (f && o(l, u)) u += 8;
          else if (f && s(l, u)) u += 8;
          else if (f && a(l, u)) u += 9;
          else if (n) v = !0;
          else throw new Error("Invalid DOCTYPE");
          _++, b = "";
        } else if (l[u] === ">") {
          if (v ? l[u - 1] === "-" && l[u - 2] === "-" && (v = !1, _--) : _--, _ === 0)
            break;
        } else l[u] === "[" ? f = !0 : b += l[u];
      if (_ !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: h, i: u };
  }
  function t(l, u) {
    let h = "";
    for (; u < l.length && l[u] !== "'" && l[u] !== '"'; u++)
      h += l[u];
    if (h = h.trim(), h.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const _ = l[u++];
    let f = "";
    for (; u < l.length && l[u] !== _; u++)
      f += l[u];
    return [h, f, u];
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
  return tn = r, tn;
}
var rn, mi;
function qs() {
  if (mi) return rn;
  mi = 1;
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
        const u = l[1], h = l[2];
        let _ = i(l[3]);
        if (!a.leadingZeros && h.length > 0 && u && c[2] !== ".") return s;
        if (!a.leadingZeros && h.length > 0 && !u && c[1] !== ".") return s;
        if (a.leadingZeros && h === s) return 0;
        {
          const f = Number(c), v = "" + f;
          return v.search(/[eE]/) !== -1 ? a.eNotation ? f : s : c.indexOf(".") !== -1 ? v === "0" && _ === "" || v === _ || u && v === "-" + _ ? f : s : h ? _ === v || u + _ === v ? f : s : c === v || c === u + v ? f : s;
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
  return rn = n, rn;
}
var nn, bi;
function Ko() {
  if (bi) return nn;
  bi = 1;
  function e(r) {
    return typeof r == "function" ? r : Array.isArray(r) ? (t) => {
      for (const n of r)
        if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t))
          return !0;
    } : () => !1;
  }
  return nn = e, nn;
}
var on, vi;
function Xs() {
  if (vi) return on;
  vi = 1;
  const e = Wn(), r = Hs(), t = Gs(), n = qs(), i = Ko();
  class o {
    constructor(w) {
      this.options = w, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
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
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (A, T) => String.fromCharCode(Number.parseInt(T, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (A, T) => String.fromCharCode(Number.parseInt(T, 16)) }
      }, this.addExternalEntities = s, this.parseXml = h, this.parseTextData = a, this.resolveNameSpace = c, this.buildAttributesMap = u, this.isItStopNode = b, this.replaceEntitiesValue = f, this.readStopNodeData = k, this.saveTextToParentTag = v, this.addChild = _, this.ignoreAttributesFn = i(this.options.ignoreAttributes);
    }
  }
  function s(y) {
    const w = Object.keys(y);
    for (let A = 0; A < w.length; A++) {
      const T = w[A];
      this.lastEntities[T] = {
        regex: new RegExp("&" + T + ";", "g"),
        val: y[T]
      };
    }
  }
  function a(y, w, A, T, E, I, F) {
    if (y !== void 0 && (this.options.trimValues && !T && (y = y.trim()), y.length > 0)) {
      F || (y = this.replaceEntitiesValue(y));
      const S = this.options.tagValueProcessor(w, y, A, E, I);
      return S == null ? y : typeof S != typeof y || S !== y ? S : this.options.trimValues ? N(y, this.options.parseTagValue, this.options.numberParseOptions) : y.trim() === y ? N(y, this.options.parseTagValue, this.options.numberParseOptions) : y;
    }
  }
  function c(y) {
    if (this.options.removeNSPrefix) {
      const w = y.split(":"), A = y.charAt(0) === "/" ? "/" : "";
      if (w[0] === "xmlns")
        return "";
      w.length === 2 && (y = A + w[1]);
    }
    return y;
  }
  const l = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function u(y, w, A) {
    if (this.options.ignoreAttributes !== !0 && typeof y == "string") {
      const T = e.getAllMatches(y, l), E = T.length, I = {};
      for (let F = 0; F < E; F++) {
        const S = this.resolveNameSpace(T[F][1]);
        if (this.ignoreAttributesFn(S, w))
          continue;
        let z = T[F][4], p = this.options.attributeNamePrefix + S;
        if (S.length)
          if (this.options.transformAttributeName && (p = this.options.transformAttributeName(p)), p === "__proto__" && (p = "#__proto__"), z !== void 0) {
            this.options.trimValues && (z = z.trim()), z = this.replaceEntitiesValue(z);
            const P = this.options.attributeValueProcessor(S, z, w);
            P == null ? I[p] = z : typeof P != typeof z || P !== z ? I[p] = P : I[p] = N(
              z,
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
  const h = function(y) {
    y = y.replace(/\r\n?/g, `
`);
    const w = new r("!xml");
    let A = w, T = "", E = "";
    for (let I = 0; I < y.length; I++)
      if (y[I] === "<")
        if (y[I + 1] === "/") {
          const S = d(y, ">", I, "Closing Tag is not closed.");
          let z = y.substring(I + 2, S).trim();
          if (this.options.removeNSPrefix) {
            const K = z.indexOf(":");
            K !== -1 && (z = z.substr(K + 1));
          }
          this.options.transformTagName && (z = this.options.transformTagName(z)), A && (T = this.saveTextToParentTag(T, A, E));
          const p = E.substring(E.lastIndexOf(".") + 1);
          if (z && this.options.unpairedTags.indexOf(z) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${z}>`);
          let P = 0;
          p && this.options.unpairedTags.indexOf(p) !== -1 ? (P = E.lastIndexOf(".", E.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : P = E.lastIndexOf("."), E = E.substring(0, P), A = this.tagsNodeStack.pop(), T = "", I = S;
        } else if (y[I + 1] === "?") {
          let S = g(y, I, !1, "?>");
          if (!S) throw new Error("Pi Tag is not closed.");
          if (T = this.saveTextToParentTag(T, A, E), !(this.options.ignoreDeclaration && S.tagName === "?xml" || this.options.ignorePiTags)) {
            const z = new r(S.tagName);
            z.add(this.options.textNodeName, ""), S.tagName !== S.tagExp && S.attrExpPresent && (z[":@"] = this.buildAttributesMap(S.tagExp, E, S.tagName)), this.addChild(A, z, E);
          }
          I = S.closeIndex + 1;
        } else if (y.substr(I + 1, 3) === "!--") {
          const S = d(y, "-->", I + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const z = y.substring(I + 4, S - 2);
            T = this.saveTextToParentTag(T, A, E), A.add(this.options.commentPropName, [{ [this.options.textNodeName]: z }]);
          }
          I = S;
        } else if (y.substr(I + 1, 2) === "!D") {
          const S = t(y, I);
          this.docTypeEntities = S.entities, I = S.i;
        } else if (y.substr(I + 1, 2) === "![") {
          const S = d(y, "]]>", I, "CDATA is not closed.") - 2, z = y.substring(I + 9, S);
          T = this.saveTextToParentTag(T, A, E);
          let p = this.parseTextData(z, A.tagname, E, !0, !1, !0, !0);
          p == null && (p = ""), this.options.cdataPropName ? A.add(this.options.cdataPropName, [{ [this.options.textNodeName]: z }]) : A.add(this.options.textNodeName, p), I = S + 2;
        } else {
          let S = g(y, I, this.options.removeNSPrefix), z = S.tagName;
          const p = S.rawTagName;
          let P = S.tagExp, K = S.attrExpPresent, j = S.closeIndex;
          this.options.transformTagName && (z = this.options.transformTagName(z)), A && T && A.tagname !== "!xml" && (T = this.saveTextToParentTag(T, A, E, !1));
          const ne = A;
          if (ne && this.options.unpairedTags.indexOf(ne.tagname) !== -1 && (A = this.tagsNodeStack.pop(), E = E.substring(0, E.lastIndexOf("."))), z !== w.tagname && (E += E ? "." + z : z), this.isItStopNode(this.options.stopNodes, E, z)) {
            let L = "";
            if (P.length > 0 && P.lastIndexOf("/") === P.length - 1)
              z[z.length - 1] === "/" ? (z = z.substr(0, z.length - 1), E = E.substr(0, E.length - 1), P = z) : P = P.substr(0, P.length - 1), I = S.closeIndex;
            else if (this.options.unpairedTags.indexOf(z) !== -1)
              I = S.closeIndex;
            else {
              const B = this.readStopNodeData(y, p, j + 1);
              if (!B) throw new Error(`Unexpected end of ${p}`);
              I = B.i, L = B.tagContent;
            }
            const ee = new r(z);
            z !== P && K && (ee[":@"] = this.buildAttributesMap(P, E, z)), L && (L = this.parseTextData(L, z, E, !0, K, !0, !0)), E = E.substr(0, E.lastIndexOf(".")), ee.add(this.options.textNodeName, L), this.addChild(A, ee, E);
          } else {
            if (P.length > 0 && P.lastIndexOf("/") === P.length - 1) {
              z[z.length - 1] === "/" ? (z = z.substr(0, z.length - 1), E = E.substr(0, E.length - 1), P = z) : P = P.substr(0, P.length - 1), this.options.transformTagName && (z = this.options.transformTagName(z));
              const L = new r(z);
              z !== P && K && (L[":@"] = this.buildAttributesMap(P, E, z)), this.addChild(A, L, E), E = E.substr(0, E.lastIndexOf("."));
            } else {
              const L = new r(z);
              this.tagsNodeStack.push(A), z !== P && K && (L[":@"] = this.buildAttributesMap(P, E, z)), this.addChild(A, L, E), A = L;
            }
            T = "", I = j;
          }
        }
      else
        T += y[I];
    return w.child;
  };
  function _(y, w, A) {
    const T = this.options.updateTag(w.tagname, A, w[":@"]);
    T === !1 || (typeof T == "string" && (w.tagname = T), y.addChild(w));
  }
  const f = function(y) {
    if (this.options.processEntities) {
      for (let w in this.docTypeEntities) {
        const A = this.docTypeEntities[w];
        y = y.replace(A.regx, A.val);
      }
      for (let w in this.lastEntities) {
        const A = this.lastEntities[w];
        y = y.replace(A.regex, A.val);
      }
      if (this.options.htmlEntities)
        for (let w in this.htmlEntities) {
          const A = this.htmlEntities[w];
          y = y.replace(A.regex, A.val);
        }
      y = y.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return y;
  };
  function v(y, w, A, T) {
    return y && (T === void 0 && (T = w.child.length === 0), y = this.parseTextData(
      y,
      w.tagname,
      A,
      !1,
      w[":@"] ? Object.keys(w[":@"]).length !== 0 : !1,
      T
    ), y !== void 0 && y !== "" && w.add(this.options.textNodeName, y), y = ""), y;
  }
  function b(y, w, A) {
    const T = "*." + A;
    for (const E in y) {
      const I = y[E];
      if (T === I || w === I) return !0;
    }
    return !1;
  }
  function x(y, w, A = ">") {
    let T, E = "";
    for (let I = w; I < y.length; I++) {
      let F = y[I];
      if (T)
        F === T && (T = "");
      else if (F === '"' || F === "'")
        T = F;
      else if (F === A[0])
        if (A[1]) {
          if (y[I + 1] === A[1])
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
  function d(y, w, A, T) {
    const E = y.indexOf(w, A);
    if (E === -1)
      throw new Error(T);
    return E + w.length - 1;
  }
  function g(y, w, A, T = ">") {
    const E = x(y, w + 1, T);
    if (!E) return;
    let I = E.data;
    const F = E.index, S = I.search(/\s/);
    let z = I, p = !0;
    S !== -1 && (z = I.substring(0, S), I = I.substring(S + 1).trimStart());
    const P = z;
    if (A) {
      const K = z.indexOf(":");
      K !== -1 && (z = z.substr(K + 1), p = z !== E.data.substr(K + 1));
    }
    return {
      tagName: z,
      tagExp: I,
      closeIndex: F,
      attrExpPresent: p,
      rawTagName: P
    };
  }
  function k(y, w, A) {
    const T = A;
    let E = 1;
    for (; A < y.length; A++)
      if (y[A] === "<")
        if (y[A + 1] === "/") {
          const I = d(y, ">", A, `${w} is not closed`);
          if (y.substring(A + 2, I).trim() === w && (E--, E === 0))
            return {
              tagContent: y.substring(T, A),
              i: I
            };
          A = I;
        } else if (y[A + 1] === "?")
          A = d(y, "?>", A + 1, "StopNode is not closed.");
        else if (y.substr(A + 1, 3) === "!--")
          A = d(y, "-->", A + 3, "StopNode is not closed.");
        else if (y.substr(A + 1, 2) === "![")
          A = d(y, "]]>", A, "StopNode is not closed.") - 2;
        else {
          const I = g(y, A, ">");
          I && ((I && I.tagName) === w && I.tagExp[I.tagExp.length - 1] !== "/" && E++, A = I.closeIndex);
        }
  }
  function N(y, w, A) {
    if (w && typeof y == "string") {
      const T = y.trim();
      return T === "true" ? !0 : T === "false" ? !1 : n(y, A);
    } else
      return e.isExist(y) ? y : "";
  }
  return on = o, on;
}
var an = {}, wi;
function Ys() {
  if (wi) return an;
  wi = 1;
  function e(o, s) {
    return r(o, s);
  }
  function r(o, s, a) {
    let c;
    const l = {};
    for (let u = 0; u < o.length; u++) {
      const h = o[u], _ = t(h);
      let f = "";
      if (a === void 0 ? f = _ : f = a + "." + _, _ === s.textNodeName)
        c === void 0 ? c = h[_] : c += "" + h[_];
      else {
        if (_ === void 0)
          continue;
        if (h[_]) {
          let v = r(h[_], s, f);
          const b = i(v, s);
          h[":@"] ? n(v, h[":@"], f, s) : Object.keys(v).length === 1 && v[s.textNodeName] !== void 0 && !s.alwaysCreateTextNode ? v = v[s.textNodeName] : Object.keys(v).length === 0 && (s.alwaysCreateTextNode ? v[s.textNodeName] = "" : v = ""), l[_] !== void 0 && l.hasOwnProperty(_) ? (Array.isArray(l[_]) || (l[_] = [l[_]]), l[_].push(v)) : s.isArray(_, f, b) ? l[_] = [v] : l[_] = v;
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
      for (let h = 0; h < u; h++) {
        const _ = l[h];
        c.isArray(_, a + "." + _, !0, !0) ? o[_] = [s[_]] : o[_] = s[_];
      }
    }
  }
  function i(o, s) {
    const { textNodeName: a } = s, c = Object.keys(o).length;
    return !!(c === 0 || c === 1 && (o[a] || typeof o[a] == "boolean" || o[a] === 0));
  }
  return an.prettify = e, an;
}
var sn, yi;
function Ks() {
  if (yi) return sn;
  yi = 1;
  const { buildOptions: e } = Ws(), r = Xs(), { prettify: t } = Ys(), n = Yo();
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
  return sn = i, sn;
}
var ln, xi;
function Js() {
  if (xi) return ln;
  xi = 1;
  const e = `
`;
  function r(a, c) {
    let l = "";
    return c.format && c.indentBy.length > 0 && (l = e), t(a, c, "", l);
  }
  function t(a, c, l, u) {
    let h = "", _ = !1;
    for (let f = 0; f < a.length; f++) {
      const v = a[f], b = n(v);
      if (b === void 0) continue;
      let x = "";
      if (l.length === 0 ? x = b : x = `${l}.${b}`, b === c.textNodeName) {
        let y = v[b];
        o(x, c) || (y = c.tagValueProcessor(b, y), y = s(y, c)), _ && (h += u), h += y, _ = !1;
        continue;
      } else if (b === c.cdataPropName) {
        _ && (h += u), h += `<![CDATA[${v[b][0][c.textNodeName]}]]>`, _ = !1;
        continue;
      } else if (b === c.commentPropName) {
        h += u + `<!--${v[b][0][c.textNodeName]}-->`, _ = !0;
        continue;
      } else if (b[0] === "?") {
        const y = i(v[":@"], c), w = b === "?xml" ? "" : u;
        let A = v[b][0][c.textNodeName];
        A = A.length !== 0 ? " " + A : "", h += w + `<${b}${A}${y}?>`, _ = !0;
        continue;
      }
      let d = u;
      d !== "" && (d += c.indentBy);
      const g = i(v[":@"], c), k = u + `<${b}${g}`, N = t(v[b], c, x, d);
      c.unpairedTags.indexOf(b) !== -1 ? c.suppressUnpairedNode ? h += k + ">" : h += k + "/>" : (!N || N.length === 0) && c.suppressEmptyNode ? h += k + "/>" : N && N.endsWith(">") ? h += k + `>${N}${u}</${b}>` : (h += k + ">", N && u !== "" && (N.includes("/>") || N.includes("</")) ? h += u + c.indentBy + N + u : h += N, h += `</${b}>`), _ = !0;
    }
    return h;
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
        let h = c.attributeValueProcessor(u, a[u]);
        h = s(h, c), h === !0 && c.suppressBooleanAttributes ? l += ` ${u.substr(c.attributeNamePrefix.length)}` : l += ` ${u.substr(c.attributeNamePrefix.length)}="${h}"`;
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
  return ln = r, ln;
}
var cn, ki;
function Qs() {
  if (ki) return cn;
  ki = 1;
  const e = Js(), r = Ko(), t = {
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
    let u = "", h = "";
    const _ = l.join(".");
    for (let f in a)
      if (Object.prototype.hasOwnProperty.call(a, f))
        if (typeof a[f] > "u")
          this.isAttribute(f) && (h += "");
        else if (a[f] === null)
          this.isAttribute(f) || f === this.options.cdataPropName ? h += "" : f[0] === "?" ? h += this.indentate(c) + "<" + f + "?" + this.tagEndChar : h += this.indentate(c) + "<" + f + "/" + this.tagEndChar;
        else if (a[f] instanceof Date)
          h += this.buildTextValNode(a[f], f, "", c);
        else if (typeof a[f] != "object") {
          const v = this.isAttribute(f);
          if (v && !this.ignoreAttributesFn(v, _))
            u += this.buildAttrPairStr(v, "" + a[f]);
          else if (!v)
            if (f === this.options.textNodeName) {
              let b = this.options.tagValueProcessor(f, "" + a[f]);
              h += this.replaceEntitiesValue(b);
            } else
              h += this.buildTextValNode(a[f], f, "", c);
        } else if (Array.isArray(a[f])) {
          const v = a[f].length;
          let b = "", x = "";
          for (let d = 0; d < v; d++) {
            const g = a[f][d];
            if (!(typeof g > "u")) if (g === null)
              f[0] === "?" ? h += this.indentate(c) + "<" + f + "?" + this.tagEndChar : h += this.indentate(c) + "<" + f + "/" + this.tagEndChar;
            else if (typeof g == "object")
              if (this.options.oneListGroup) {
                const k = this.j2x(g, c + 1, l.concat(f));
                b += k.val, this.options.attributesGroupName && g.hasOwnProperty(this.options.attributesGroupName) && (x += k.attrStr);
              } else
                b += this.processTextOrObjNode(g, f, c, l);
            else if (this.options.oneListGroup) {
              let k = this.options.tagValueProcessor(f, g);
              k = this.replaceEntitiesValue(k), b += k;
            } else
              b += this.buildTextValNode(g, f, "", c);
          }
          this.options.oneListGroup && (b = this.buildObjectNode(b, f, x, c)), h += b;
        } else if (this.options.attributesGroupName && f === this.options.attributesGroupName) {
          const v = Object.keys(a[f]), b = v.length;
          for (let x = 0; x < b; x++)
            u += this.buildAttrPairStr(v[x], "" + a[f][v[x]]);
        } else
          h += this.processTextOrObjNode(a[f], f, c, l);
    return { attrStr: u, val: h };
  }, n.prototype.buildAttrPairStr = function(a, c) {
    return c = this.options.attributeValueProcessor(a, "" + c), c = this.replaceEntitiesValue(c), this.options.suppressBooleanAttributes && c === "true" ? " " + a : " " + a + '="' + c + '"';
  };
  function i(a, c, l, u) {
    const h = this.j2x(a, l + 1, u.concat(c));
    return a[this.options.textNodeName] !== void 0 && Object.keys(a).length === 1 ? this.buildTextValNode(a[this.options.textNodeName], c, h.attrStr, l) : this.buildObjectNode(h.val, c, h.attrStr, l);
  }
  n.prototype.buildObjectNode = function(a, c, l, u) {
    if (a === "")
      return c[0] === "?" ? this.indentate(u) + "<" + c + l + "?" + this.tagEndChar : this.indentate(u) + "<" + c + l + this.closeTag(c) + this.tagEndChar;
    {
      let h = "</" + c + this.tagEndChar, _ = "";
      return c[0] === "?" && (_ = "?", h = ""), (l || l === "") && a.indexOf("<") === -1 ? this.indentate(u) + "<" + c + l + _ + ">" + a + h : this.options.commentPropName !== !1 && c === this.options.commentPropName && _.length === 0 ? this.indentate(u) + `<!--${a}-->` + this.newLine : this.indentate(u) + "<" + c + l + _ + this.tagEndChar + a + this.indentate(u) + h;
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
      let h = this.options.tagValueProcessor(c, a);
      return h = this.replaceEntitiesValue(h), h === "" ? this.indentate(u) + "<" + c + l + this.closeTag(c) + this.tagEndChar : this.indentate(u) + "<" + c + l + ">" + h + "</" + c + this.tagEndChar;
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
  return cn = n, cn;
}
var un, Ei;
function el() {
  if (Ei) return un;
  Ei = 1;
  const e = Yo(), r = Ks(), t = Qs();
  return un = {
    XMLParser: r,
    XMLValidator: e,
    XMLBuilder: t
  }, un;
}
var tl = el(), qt = {}, Ai;
function rl() {
  if (Ai) return qt;
  Ai = 1, qt.byteLength = a, qt.toByteArray = l, qt.fromByteArray = _;
  for (var e = [], r = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = n.length; i < o; ++i)
    e[i] = n[i], r[n.charCodeAt(i)] = i;
  r[45] = 62, r[95] = 63;
  function s(f) {
    var v = f.length;
    if (v % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var b = f.indexOf("=");
    b === -1 && (b = v);
    var x = b === v ? 0 : 4 - b % 4;
    return [b, x];
  }
  function a(f) {
    var v = s(f), b = v[0], x = v[1];
    return (b + x) * 3 / 4 - x;
  }
  function c(f, v, b) {
    return (v + b) * 3 / 4 - b;
  }
  function l(f) {
    var v, b = s(f), x = b[0], d = b[1], g = new t(c(f, x, d)), k = 0, N = d > 0 ? x - 4 : x, y;
    for (y = 0; y < N; y += 4)
      v = r[f.charCodeAt(y)] << 18 | r[f.charCodeAt(y + 1)] << 12 | r[f.charCodeAt(y + 2)] << 6 | r[f.charCodeAt(y + 3)], g[k++] = v >> 16 & 255, g[k++] = v >> 8 & 255, g[k++] = v & 255;
    return d === 2 && (v = r[f.charCodeAt(y)] << 2 | r[f.charCodeAt(y + 1)] >> 4, g[k++] = v & 255), d === 1 && (v = r[f.charCodeAt(y)] << 10 | r[f.charCodeAt(y + 1)] << 4 | r[f.charCodeAt(y + 2)] >> 2, g[k++] = v >> 8 & 255, g[k++] = v & 255), g;
  }
  function u(f) {
    return e[f >> 18 & 63] + e[f >> 12 & 63] + e[f >> 6 & 63] + e[f & 63];
  }
  function h(f, v, b) {
    for (var x, d = [], g = v; g < b; g += 3)
      x = (f[g] << 16 & 16711680) + (f[g + 1] << 8 & 65280) + (f[g + 2] & 255), d.push(u(x));
    return d.join("");
  }
  function _(f) {
    for (var v, b = f.length, x = b % 3, d = [], g = 16383, k = 0, N = b - x; k < N; k += g)
      d.push(h(f, k, k + g > N ? N : k + g));
    return x === 1 ? (v = f[b - 1], d.push(
      e[v >> 2] + e[v << 4 & 63] + "=="
    )) : x === 2 && (v = (f[b - 2] << 8) + f[b - 1], d.push(
      e[v >> 10] + e[v >> 4 & 63] + e[v << 2 & 63] + "="
    )), d.join("");
  }
  return qt;
}
var nl = rl();
const il = new tl.XMLParser({
  preserveOrder: !0,
  ignoreDeclaration: !0,
  ignorePiTags: !0,
  parseTagValue: !1,
  cdataPropName: "#cdata"
}), xr = (e) => typeof e > "u" || e === null || e === "", Tn = (e) => {
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
        o[u] = Tn(l);
      }
      return o;
    case "array":
      return e[t]?.map(Tn);
    case "string":
      const s = e[t];
      return s.length === 0 ? "" : s.reduce((a, c) => (c.hasOwnProperty("#cdata") && (a += c["#cdata"].reduce((l, u) => l + u["#text"], "")), c.hasOwnProperty("#text") && (a += c["#text"]), a), "");
    case "integer":
      if (xr(n))
        throw new Error("Encountered empty <integer>");
      return n > Number.MAX_SAFE_INTEGER ? BigInt(n) : parseInt(n);
    case "real":
      if (xr(n))
        throw new Error("Encountered empty <real>");
      return parseFloat(n);
    case "data":
      return xr(n) ? new Uint8Array([]).buffer : nl.toByteArray(n.replace(/[\s\r\n\t]*/g, "")).buffer;
    case "date":
      if (xr(n))
        throw new Error("Encountered empty <date>");
      return new Date(n);
    case "true":
      return !0;
    case "false":
      return !1;
  }
  throw new Error("Invalid type.");
}, Si = (e) => {
  const r = il.parse(e);
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
  return Tn(n[0]);
}, Ni = /[A-Za-z0-9_$+\/:.-]/, ol = /[A-Fa-f0-9]/, Jo = [" ", "	", `
`, "\r"], al = (e) => JSON.parse(`"${e}"`), Ve = (e, r, t = !1) => {
  if ([, e] = gt(e), !e.startsWith(r)) {
    if (t)
      return [null, e];
    throw new Error(`Expected '${r}'`);
  }
  return e = e.substring(r.length), [, e] = gt(e), [r, e];
}, gt = (e) => {
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
    if (e = e.substring(1), !Jo.includes(t))
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
}, Rr = (e) => {
  if ([, e] = gt(e), e.length === 0)
    return [null, ""];
  let r = null;
  const t = e.substring(0, 1);
  switch (e = e.substring(1), t) {
    case "{":
      if (r = {}, [, e] = gt(e), e.charAt(0) === "}") {
        [, e] = Ve(e, "}");
        break;
      }
      for (; e.charAt(0) !== "}"; ) {
        let i, o;
        if ([i, e] = Rr(e), typeof i != "string")
          throw new Error("Expected string key");
        if (i === "__proto__")
          throw new Error("Attempted prototype pollution");
        if ([, e] = Ve(e, "="), [o, e] = Rr(e), r[i] = o, [, e] = Ve(e, ";"), e.length === 0)
          throw new Error("No matching '}' found");
      }
      [, e] = Ve(e, "}");
      break;
    case "(":
      if (r = [], [, e] = gt(e), e.charAt(0) === ")") {
        [, e] = Ve(e, ")");
        break;
      }
      for (; e.charAt(0) !== ")"; ) {
        let i, o;
        if ([i, e] = Rr(e), r.push(i), [o, e] = Ve(e, ",", !0), !o)
          break;
        if (e.length === 0)
          throw new Error("No matching ')' found");
      }
      [, e] = Ve(e, ")");
      break;
    case "<":
      let n = "";
      if ([, e] = gt(e), e.charAt(0) === ">") {
        [, e] = Ve(e, ">");
        break;
      }
      for (; e.charAt(0) !== ">"; ) {
        const i = e.charAt(0);
        if (e = e.substring(1), ol.test(i))
          n += i;
        else {
          if (Jo.includes(i))
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
      r = al(r), [, e] = Ve(e, t);
      break;
    default:
      if (!Ni.test(t))
        throw new Error(`Unexpected '${t}'`);
      for (r = t; Ni.test(e.charAt(0)) && (r += e.charAt(0), e = e.substring(1), e.length !== 0); )
        ;
  }
  return [, e] = gt(e), [r, e];
}, zi = (e) => {
  const [r, t] = Rr(e);
  if (t.length > 0)
    throw new Error("Unexpected content at the end of file");
  if (typeof r > "u")
    throw new Error("Parsing failed");
  return r;
}, sl = /^[\u0000-\u007f]*$/, Zr = new TextDecoder("utf-8"), Qo = (e) => {
  if (typeof e == "string") {
    if (e.startsWith(Ct))
      return rt.BINARY;
    const r = e.substring(0, 16).replace(/[\s\t\n\r]+/g, "");
    if (r.startsWith("<?xml") || r.startsWith("<plist"))
      return rt.XML;
    if (e.trimStart().startsWith(Fs) || sl.test(r))
      return rt.OPENSTEP;
    throw new Error("Unknown format");
  } else {
    const r = e.slice(0, Ct.length);
    return Zr.decode(r) === Ct ? rt.BINARY : Qo(Zr.decode(e.slice(0, 16)));
  }
}, ll = (e) => {
  switch (Qo(e)) {
    case rt.BINARY:
      if (typeof e == "string")
        throw new Error("Binary plists must be passed as ArrayBuffer");
      return Vs(e);
    case rt.XML:
      return e instanceof ArrayBuffer ? Si(Zr.decode(e)) : Si(e);
    case rt.OPENSTEP:
      return e instanceof ArrayBuffer ? zi(Zr.decode(e)) : zi(e);
  }
  throw new Error("Unsupported format");
};
const cl = 4, Ii = 0, Ti = 1, ul = 2;
function Lt(e) {
  let r = e.length;
  for (; --r >= 0; )
    e[r] = 0;
}
const fl = 0, ea = 1, dl = 2, hl = 3, pl = 258, Hn = 29, hr = 256, ir = hr + 1 + Hn, Ft = 30, Gn = 19, ta = 2 * ir + 1, mt = 15, fn = 16, _l = 7, qn = 256, ra = 16, na = 17, ia = 18, Cn = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Pr = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), gl = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), oa = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ml = 512, et = new Array((ir + 2) * 2);
Lt(et);
const Qt = new Array(Ft * 2);
Lt(Qt);
const or = new Array(ml);
Lt(or);
const ar = new Array(pl - hl + 1);
Lt(ar);
const Xn = new Array(Hn);
Lt(Xn);
const $r = new Array(Ft);
Lt($r);
function dn(e, r, t, n, i) {
  this.static_tree = e, this.extra_bits = r, this.extra_base = t, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
}
let aa, sa, la;
function hn(e, r) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = r;
}
const ca = (e) => e < 256 ? or[e] : or[256 + (e >>> 7)], sr = (e, r) => {
  e.pending_buf[e.pending++] = r & 255, e.pending_buf[e.pending++] = r >>> 8 & 255;
}, Te = (e, r, t) => {
  e.bi_valid > fn - t ? (e.bi_buf |= r << e.bi_valid & 65535, sr(e, e.bi_buf), e.bi_buf = r >> fn - e.bi_valid, e.bi_valid += t - fn) : (e.bi_buf |= r << e.bi_valid & 65535, e.bi_valid += t);
}, Ge = (e, r, t) => {
  Te(
    e,
    t[r * 2],
    t[r * 2 + 1]
    /*.Len*/
  );
}, ua = (e, r) => {
  let t = 0;
  do
    t |= e & 1, e >>>= 1, t <<= 1;
  while (--r > 0);
  return t >>> 1;
}, bl = (e) => {
  e.bi_valid === 16 ? (sr(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, vl = (e, r) => {
  const t = r.dyn_tree, n = r.max_code, i = r.stat_desc.static_tree, o = r.stat_desc.has_stree, s = r.stat_desc.extra_bits, a = r.stat_desc.extra_base, c = r.stat_desc.max_length;
  let l, u, h, _, f, v, b = 0;
  for (_ = 0; _ <= mt; _++)
    e.bl_count[_] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, l = e.heap_max + 1; l < ta; l++)
    u = e.heap[l], _ = t[t[u * 2 + 1] * 2 + 1] + 1, _ > c && (_ = c, b++), t[u * 2 + 1] = _, !(u > n) && (e.bl_count[_]++, f = 0, u >= a && (f = s[u - a]), v = t[u * 2], e.opt_len += v * (_ + f), o && (e.static_len += v * (i[u * 2 + 1] + f)));
  if (b !== 0) {
    do {
      for (_ = c - 1; e.bl_count[_] === 0; )
        _--;
      e.bl_count[_]--, e.bl_count[_ + 1] += 2, e.bl_count[c]--, b -= 2;
    } while (b > 0);
    for (_ = c; _ !== 0; _--)
      for (u = e.bl_count[_]; u !== 0; )
        h = e.heap[--l], !(h > n) && (t[h * 2 + 1] !== _ && (e.opt_len += (_ - t[h * 2 + 1]) * t[h * 2], t[h * 2 + 1] = _), u--);
  }
}, fa = (e, r, t) => {
  const n = new Array(mt + 1);
  let i = 0, o, s;
  for (o = 1; o <= mt; o++)
    i = i + t[o - 1] << 1, n[o] = i;
  for (s = 0; s <= r; s++) {
    let a = e[s * 2 + 1];
    a !== 0 && (e[s * 2] = ua(n[a]++, a));
  }
}, wl = () => {
  let e, r, t, n, i;
  const o = new Array(mt + 1);
  for (t = 0, n = 0; n < Hn - 1; n++)
    for (Xn[n] = t, e = 0; e < 1 << Cn[n]; e++)
      ar[t++] = n;
  for (ar[t - 1] = n, i = 0, n = 0; n < 16; n++)
    for ($r[n] = i, e = 0; e < 1 << Pr[n]; e++)
      or[i++] = n;
  for (i >>= 7; n < Ft; n++)
    for ($r[n] = i << 7, e = 0; e < 1 << Pr[n] - 7; e++)
      or[256 + i++] = n;
  for (r = 0; r <= mt; r++)
    o[r] = 0;
  for (e = 0; e <= 143; )
    et[e * 2 + 1] = 8, e++, o[8]++;
  for (; e <= 255; )
    et[e * 2 + 1] = 9, e++, o[9]++;
  for (; e <= 279; )
    et[e * 2 + 1] = 7, e++, o[7]++;
  for (; e <= 287; )
    et[e * 2 + 1] = 8, e++, o[8]++;
  for (fa(et, ir + 1, o), e = 0; e < Ft; e++)
    Qt[e * 2 + 1] = 5, Qt[e * 2] = ua(e, 5);
  aa = new dn(et, Cn, hr + 1, ir, mt), sa = new dn(Qt, Pr, 0, Ft, mt), la = new dn(new Array(0), gl, 0, Gn, _l);
}, da = (e) => {
  let r;
  for (r = 0; r < ir; r++)
    e.dyn_ltree[r * 2] = 0;
  for (r = 0; r < Ft; r++)
    e.dyn_dtree[r * 2] = 0;
  for (r = 0; r < Gn; r++)
    e.bl_tree[r * 2] = 0;
  e.dyn_ltree[qn * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, ha = (e) => {
  e.bi_valid > 8 ? sr(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Ci = (e, r, t, n) => {
  const i = r * 2, o = t * 2;
  return e[i] < e[o] || e[i] === e[o] && n[r] <= n[t];
}, pn = (e, r, t) => {
  const n = e.heap[t];
  let i = t << 1;
  for (; i <= e.heap_len && (i < e.heap_len && Ci(r, e.heap[i + 1], e.heap[i], e.depth) && i++, !Ci(r, n, e.heap[i], e.depth)); )
    e.heap[t] = e.heap[i], t = i, i <<= 1;
  e.heap[t] = n;
}, Oi = (e, r, t) => {
  let n, i, o = 0, s, a;
  if (e.sym_next !== 0)
    do
      n = e.pending_buf[e.sym_buf + o++] & 255, n += (e.pending_buf[e.sym_buf + o++] & 255) << 8, i = e.pending_buf[e.sym_buf + o++], n === 0 ? Ge(e, i, r) : (s = ar[i], Ge(e, s + hr + 1, r), a = Cn[s], a !== 0 && (i -= Xn[s], Te(e, i, a)), n--, s = ca(n), Ge(e, s, t), a = Pr[s], a !== 0 && (n -= $r[s], Te(e, n, a)));
    while (o < e.sym_next);
  Ge(e, qn, r);
}, On = (e, r) => {
  const t = r.dyn_tree, n = r.stat_desc.static_tree, i = r.stat_desc.has_stree, o = r.stat_desc.elems;
  let s, a, c = -1, l;
  for (e.heap_len = 0, e.heap_max = ta, s = 0; s < o; s++)
    t[s * 2] !== 0 ? (e.heap[++e.heap_len] = c = s, e.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    l = e.heap[++e.heap_len] = c < 2 ? ++c : 0, t[l * 2] = 1, e.depth[l] = 0, e.opt_len--, i && (e.static_len -= n[l * 2 + 1]);
  for (r.max_code = c, s = e.heap_len >> 1; s >= 1; s--)
    pn(e, t, s);
  l = o;
  do
    s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], pn(
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
    ] = l++, pn(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], vl(e, r), fa(t, c, e.bl_count);
}, Fi = (e, r, t) => {
  let n, i = -1, o, s = r[1], a = 0, c = 7, l = 4;
  for (s === 0 && (c = 138, l = 3), r[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++)
    o = s, s = r[(n + 1) * 2 + 1], !(++a < c && o === s) && (a < l ? e.bl_tree[o * 2] += a : o !== 0 ? (o !== i && e.bl_tree[o * 2]++, e.bl_tree[ra * 2]++) : a <= 10 ? e.bl_tree[na * 2]++ : e.bl_tree[ia * 2]++, a = 0, i = o, s === 0 ? (c = 138, l = 3) : o === s ? (c = 6, l = 3) : (c = 7, l = 4));
}, Ri = (e, r, t) => {
  let n, i = -1, o, s = r[1], a = 0, c = 7, l = 4;
  for (s === 0 && (c = 138, l = 3), n = 0; n <= t; n++)
    if (o = s, s = r[(n + 1) * 2 + 1], !(++a < c && o === s)) {
      if (a < l)
        do
          Ge(e, o, e.bl_tree);
        while (--a !== 0);
      else o !== 0 ? (o !== i && (Ge(e, o, e.bl_tree), a--), Ge(e, ra, e.bl_tree), Te(e, a - 3, 2)) : a <= 10 ? (Ge(e, na, e.bl_tree), Te(e, a - 3, 3)) : (Ge(e, ia, e.bl_tree), Te(e, a - 11, 7));
      a = 0, i = o, s === 0 ? (c = 138, l = 3) : o === s ? (c = 6, l = 3) : (c = 7, l = 4);
    }
}, yl = (e) => {
  let r;
  for (Fi(e, e.dyn_ltree, e.l_desc.max_code), Fi(e, e.dyn_dtree, e.d_desc.max_code), On(e, e.bl_desc), r = Gn - 1; r >= 3 && e.bl_tree[oa[r] * 2 + 1] === 0; r--)
    ;
  return e.opt_len += 3 * (r + 1) + 5 + 5 + 4, r;
}, xl = (e, r, t, n) => {
  let i;
  for (Te(e, r - 257, 5), Te(e, t - 1, 5), Te(e, n - 4, 4), i = 0; i < n; i++)
    Te(e, e.bl_tree[oa[i] * 2 + 1], 3);
  Ri(e, e.dyn_ltree, r - 1), Ri(e, e.dyn_dtree, t - 1);
}, kl = (e) => {
  let r = 4093624447, t;
  for (t = 0; t <= 31; t++, r >>>= 1)
    if (r & 1 && e.dyn_ltree[t * 2] !== 0)
      return Ii;
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0)
    return Ti;
  for (t = 32; t < hr; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return Ti;
  return Ii;
};
let Pi = !1;
const El = (e) => {
  Pi || (wl(), Pi = !0), e.l_desc = new hn(e.dyn_ltree, aa), e.d_desc = new hn(e.dyn_dtree, sa), e.bl_desc = new hn(e.bl_tree, la), e.bi_buf = 0, e.bi_valid = 0, da(e);
}, pa = (e, r, t, n) => {
  Te(e, (fl << 1) + (n ? 1 : 0), 3), ha(e), sr(e, t), sr(e, ~t), t && e.pending_buf.set(e.window.subarray(r, r + t), e.pending), e.pending += t;
}, Al = (e) => {
  Te(e, ea << 1, 3), Ge(e, qn, et), bl(e);
}, Sl = (e, r, t, n) => {
  let i, o, s = 0;
  e.level > 0 ? (e.strm.data_type === ul && (e.strm.data_type = kl(e)), On(e, e.l_desc), On(e, e.d_desc), s = yl(e), i = e.opt_len + 3 + 7 >>> 3, o = e.static_len + 3 + 7 >>> 3, o <= i && (i = o)) : i = o = t + 5, t + 4 <= i && r !== -1 ? pa(e, r, t, n) : e.strategy === cl || o === i ? (Te(e, (ea << 1) + (n ? 1 : 0), 3), Oi(e, et, Qt)) : (Te(e, (dl << 1) + (n ? 1 : 0), 3), xl(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), Oi(e, e.dyn_ltree, e.dyn_dtree)), da(e), n && ha(e);
}, Nl = (e, r, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = r, e.pending_buf[e.sym_buf + e.sym_next++] = r >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, r === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, r--, e.dyn_ltree[(ar[t] + hr + 1) * 2]++, e.dyn_dtree[ca(r) * 2]++), e.sym_next === e.sym_end);
var zl = El, Il = pa, Tl = Sl, Cl = Nl, Ol = Al, Fl = {
  _tr_init: zl,
  _tr_stored_block: Il,
  _tr_flush_block: Tl,
  _tr_tally: Cl,
  _tr_align: Ol
};
const Rl = (e, r, t, n) => {
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
var lr = Rl;
const Pl = () => {
  let e, r = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var n = 0; n < 8; n++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    r[t] = e;
  }
  return r;
}, Zl = new Uint32Array(Pl()), $l = (e, r, t, n) => {
  const i = Zl, o = n + t;
  e ^= -1;
  for (let s = n; s < o; s++)
    e = e >>> 8 ^ i[(e ^ r[s]) & 255];
  return e ^ -1;
};
var Se = $l, wt = {
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
}, pr = {
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
const { _tr_init: Ul, _tr_stored_block: Fn, _tr_flush_block: Bl, _tr_tally: at, _tr_align: Ll } = Fl, {
  Z_NO_FLUSH: st,
  Z_PARTIAL_FLUSH: Dl,
  Z_FULL_FLUSH: jl,
  Z_FINISH: Ue,
  Z_BLOCK: Zi,
  Z_OK: Ne,
  Z_STREAM_END: $i,
  Z_STREAM_ERROR: qe,
  Z_DATA_ERROR: Ml,
  Z_BUF_ERROR: _n,
  Z_DEFAULT_COMPRESSION: Vl,
  Z_FILTERED: Wl,
  Z_HUFFMAN_ONLY: kr,
  Z_RLE: Hl,
  Z_FIXED: Gl,
  Z_DEFAULT_STRATEGY: ql,
  Z_UNKNOWN: Xl,
  Z_DEFLATED: Vr
} = pr, Yl = 9, Kl = 15, Jl = 8, Ql = 29, ec = 256, Rn = ec + 1 + Ql, tc = 30, rc = 19, nc = 2 * Rn + 1, ic = 15, le = 3, ot = 258, Xe = ot + le + 1, oc = 32, Zt = 42, Yn = 57, Pn = 69, Zn = 73, $n = 91, Un = 103, bt = 113, Kt = 666, Ie = 1, Dt = 2, yt = 3, jt = 4, ac = 3, vt = (e, r) => (e.msg = wt[r], r), Ui = (e) => e * 2 - (e > 4 ? 9 : 0), it = (e) => {
  let r = e.length;
  for (; --r >= 0; )
    e[r] = 0;
}, sc = (e) => {
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
let lc = (e, r, t) => (r << e.hash_shift ^ t) & e.hash_mask, lt = lc;
const Re = (e) => {
  const r = e.state;
  let t = r.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(r.pending_buf.subarray(r.pending_out, r.pending_out + t), e.next_out), e.next_out += t, r.pending_out += t, e.total_out += t, e.avail_out -= t, r.pending -= t, r.pending === 0 && (r.pending_out = 0));
}, Pe = (e, r) => {
  Bl(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r), e.block_start = e.strstart, Re(e.strm);
}, fe = (e, r) => {
  e.pending_buf[e.pending++] = r;
}, Xt = (e, r) => {
  e.pending_buf[e.pending++] = r >>> 8 & 255, e.pending_buf[e.pending++] = r & 255;
}, Bn = (e, r, t, n) => {
  let i = e.avail_in;
  return i > n && (i = n), i === 0 ? 0 : (e.avail_in -= i, r.set(e.input.subarray(e.next_in, e.next_in + i), t), e.state.wrap === 1 ? e.adler = lr(e.adler, r, i, t) : e.state.wrap === 2 && (e.adler = Se(e.adler, r, i, t)), e.next_in += i, e.total_in += i, i);
}, _a = (e, r) => {
  let t = e.max_chain_length, n = e.strstart, i, o, s = e.prev_length, a = e.nice_match;
  const c = e.strstart > e.w_size - Xe ? e.strstart - (e.w_size - Xe) : 0, l = e.window, u = e.w_mask, h = e.prev, _ = e.strstart + ot;
  let f = l[n + s - 1], v = l[n + s];
  e.prev_length >= e.good_match && (t >>= 2), a > e.lookahead && (a = e.lookahead);
  do
    if (i = r, !(l[i + s] !== v || l[i + s - 1] !== f || l[i] !== l[n] || l[++i] !== l[n + 1])) {
      n += 2, i++;
      do
        ;
      while (l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && n < _);
      if (o = ot - (_ - n), n = _ - ot, o > s) {
        if (e.match_start = r, s = o, o >= a)
          break;
        f = l[n + s - 1], v = l[n + s];
      }
    }
  while ((r = h[r & u]) > c && --t !== 0);
  return s <= e.lookahead ? s : e.lookahead;
}, $t = (e) => {
  const r = e.w_size;
  let t, n, i;
  do {
    if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= r + (r - Xe) && (e.window.set(e.window.subarray(r, r + r - n), 0), e.match_start -= r, e.strstart -= r, e.block_start -= r, e.insert > e.strstart && (e.insert = e.strstart), sc(e), n += r), e.strm.avail_in === 0)
      break;
    if (t = Bn(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= le)
      for (i = e.strstart - e.insert, e.ins_h = e.window[i], e.ins_h = lt(e, e.ins_h, e.window[i + 1]); e.insert && (e.ins_h = lt(e, e.ins_h, e.window[i + le - 1]), e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++, e.insert--, !(e.lookahead + e.insert < le)); )
        ;
  } while (e.lookahead < Xe && e.strm.avail_in !== 0);
}, ga = (e, r) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, n, i, o, s = 0, a = e.strm.avail_in;
  do {
    if (n = 65535, o = e.bi_valid + 42 >> 3, e.strm.avail_out < o || (o = e.strm.avail_out - o, i = e.strstart - e.block_start, n > i + e.strm.avail_in && (n = i + e.strm.avail_in), n > o && (n = o), n < t && (n === 0 && r !== Ue || r === st || n !== i + e.strm.avail_in)))
      break;
    s = r === Ue && n === i + e.strm.avail_in ? 1 : 0, Fn(e, 0, 0, s), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, Re(e.strm), i && (i > n && (i = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, n -= i), n && (Bn(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n);
  } while (s === 0);
  return a -= e.strm.avail_in, a && (a >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= a && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in), e.strstart), e.strstart += a, e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), s ? jt : r !== st && r !== Ue && e.strm.avail_in === 0 && e.strstart === e.block_start ? Dt : (o = e.window_size - e.strstart, e.strm.avail_in > o && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, o += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), o > e.strm.avail_in && (o = e.strm.avail_in), o && (Bn(e.strm, e.window, e.strstart, o), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.high_water < e.strstart && (e.high_water = e.strstart), o = e.bi_valid + 42 >> 3, o = e.pending_buf_size - o > 65535 ? 65535 : e.pending_buf_size - o, t = o > e.w_size ? e.w_size : o, i = e.strstart - e.block_start, (i >= t || (i || r === Ue) && r !== st && e.strm.avail_in === 0 && i <= o) && (n = i > o ? o : i, s = r === Ue && e.strm.avail_in === 0 && n === i ? 1 : 0, Fn(e, e.block_start, n, s), e.block_start += n, Re(e.strm)), s ? yt : Ie);
}, gn = (e, r) => {
  let t, n;
  for (; ; ) {
    if (e.lookahead < Xe) {
      if ($t(e), e.lookahead < Xe && r === st)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= le && (e.ins_h = lt(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), t !== 0 && e.strstart - t <= e.w_size - Xe && (e.match_length = _a(e, t)), e.match_length >= le)
      if (n = at(e, e.strstart - e.match_start, e.match_length - le), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= le) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = lt(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = lt(e, e.ins_h, e.window[e.strstart + 1]);
    else
      n = at(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (n && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = e.strstart < le - 1 ? e.strstart : le - 1, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? yt : jt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Dt;
}, St = (e, r) => {
  let t, n, i;
  for (; ; ) {
    if (e.lookahead < Xe) {
      if ($t(e), e.lookahead < Xe && r === st)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= le && (e.ins_h = lt(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = le - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Xe && (e.match_length = _a(e, t), e.match_length <= 5 && (e.strategy === Wl || e.match_length === le && e.strstart - e.match_start > 4096) && (e.match_length = le - 1)), e.prev_length >= le && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - le, n = at(e, e.strstart - 1 - e.prev_match, e.prev_length - le), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= i && (e.ins_h = lt(e, e.ins_h, e.window[e.strstart + le - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = le - 1, e.strstart++, n && (Pe(e, !1), e.strm.avail_out === 0))
        return Ie;
    } else if (e.match_available) {
      if (n = at(e, 0, e.window[e.strstart - 1]), n && Pe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Ie;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (n = at(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < le - 1 ? e.strstart : le - 1, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? yt : jt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Dt;
}, cc = (e, r) => {
  let t, n, i, o;
  const s = e.window;
  for (; ; ) {
    if (e.lookahead <= ot) {
      if ($t(e), e.lookahead <= ot && r === st)
        return Ie;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= le && e.strstart > 0 && (i = e.strstart - 1, n = s[i], n === s[++i] && n === s[++i] && n === s[++i])) {
      o = e.strstart + ot;
      do
        ;
      while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < o);
      e.match_length = ot - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= le ? (t = at(e, 1, e.match_length - le), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = at(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = 0, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? yt : jt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Dt;
}, uc = (e, r) => {
  let t;
  for (; ; ) {
    if (e.lookahead === 0 && ($t(e), e.lookahead === 0)) {
      if (r === st)
        return Ie;
      break;
    }
    if (e.match_length = 0, t = at(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (Pe(e, !1), e.strm.avail_out === 0))
      return Ie;
  }
  return e.insert = 0, r === Ue ? (Pe(e, !0), e.strm.avail_out === 0 ? yt : jt) : e.sym_next && (Pe(e, !1), e.strm.avail_out === 0) ? Ie : Dt;
};
function We(e, r, t, n, i) {
  this.good_length = e, this.max_lazy = r, this.nice_length = t, this.max_chain = n, this.func = i;
}
const Jt = [
  /*      good lazy nice chain */
  new We(0, 0, 0, 0, ga),
  /* 0 store only */
  new We(4, 4, 8, 4, gn),
  /* 1 max speed, no lazy matches */
  new We(4, 5, 16, 8, gn),
  /* 2 */
  new We(4, 6, 32, 32, gn),
  /* 3 */
  new We(4, 4, 16, 16, St),
  /* 4 lazy matches */
  new We(8, 16, 32, 32, St),
  /* 5 */
  new We(8, 16, 128, 128, St),
  /* 6 */
  new We(8, 32, 128, 256, St),
  /* 7 */
  new We(32, 128, 258, 1024, St),
  /* 8 */
  new We(32, 258, 258, 4096, St)
  /* 9 max compression */
], fc = (e) => {
  e.window_size = 2 * e.w_size, it(e.head), e.max_lazy_match = Jt[e.level].max_lazy, e.good_match = Jt[e.level].good_length, e.nice_match = Jt[e.level].nice_length, e.max_chain_length = Jt[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = le - 1, e.match_available = 0, e.ins_h = 0;
};
function dc() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Vr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(nc * 2), this.dyn_dtree = new Uint16Array((2 * tc + 1) * 2), this.bl_tree = new Uint16Array((2 * rc + 1) * 2), it(this.dyn_ltree), it(this.dyn_dtree), it(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(ic + 1), this.heap = new Uint16Array(2 * Rn + 1), it(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Rn + 1), it(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const _r = (e) => {
  if (!e)
    return 1;
  const r = e.state;
  return !r || r.strm !== e || r.status !== Zt && //#ifdef GZIP
  r.status !== Yn && //#endif
  r.status !== Pn && r.status !== Zn && r.status !== $n && r.status !== Un && r.status !== bt && r.status !== Kt ? 1 : 0;
}, ma = (e) => {
  if (_r(e))
    return vt(e, qe);
  e.total_in = e.total_out = 0, e.data_type = Xl;
  const r = e.state;
  return r.pending = 0, r.pending_out = 0, r.wrap < 0 && (r.wrap = -r.wrap), r.status = //#ifdef GZIP
  r.wrap === 2 ? Yn : (
    //#endif
    r.wrap ? Zt : bt
  ), e.adler = r.wrap === 2 ? 0 : 1, r.last_flush = -2, Ul(r), Ne;
}, ba = (e) => {
  const r = ma(e);
  return r === Ne && fc(e.state), r;
}, hc = (e, r) => _r(e) || e.state.wrap !== 2 ? qe : (e.state.gzhead = r, Ne), va = (e, r, t, n, i, o) => {
  if (!e)
    return qe;
  let s = 1;
  if (r === Vl && (r = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), i < 1 || i > Yl || t !== Vr || n < 8 || n > 15 || r < 0 || r > 9 || o < 0 || o > Gl || n === 8 && s !== 1)
    return vt(e, qe);
  n === 8 && (n = 9);
  const a = new dc();
  return e.state = a, a.strm = e, a.status = Zt, a.wrap = s, a.gzhead = null, a.w_bits = n, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = i + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + le - 1) / le), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << i + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = r, a.strategy = o, a.method = t, ba(e);
}, pc = (e, r) => va(e, r, Vr, Kl, Jl, ql), _c = (e, r) => {
  if (_r(e) || r > Zi || r < 0)
    return e ? vt(e, qe) : qe;
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === Kt && r !== Ue)
    return vt(e, e.avail_out === 0 ? _n : qe);
  const n = t.last_flush;
  if (t.last_flush = r, t.pending !== 0) {
    if (Re(e), e.avail_out === 0)
      return t.last_flush = -1, Ne;
  } else if (e.avail_in === 0 && Ui(r) <= Ui(n) && r !== Ue)
    return vt(e, _n);
  if (t.status === Kt && e.avail_in !== 0)
    return vt(e, _n);
  if (t.status === Zt && t.wrap === 0 && (t.status = bt), t.status === Zt) {
    let i = Vr + (t.w_bits - 8 << 4) << 8, o = -1;
    if (t.strategy >= kr || t.level < 2 ? o = 0 : t.level < 6 ? o = 1 : t.level === 6 ? o = 2 : o = 3, i |= o << 6, t.strstart !== 0 && (i |= oc), i += 31 - i % 31, Xt(t, i), t.strstart !== 0 && (Xt(t, e.adler >>> 16), Xt(t, e.adler & 65535)), e.adler = 1, t.status = bt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (t.status === Yn) {
    if (e.adler = 0, fe(t, 31), fe(t, 139), fe(t, 8), t.gzhead)
      fe(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), fe(t, t.gzhead.time & 255), fe(t, t.gzhead.time >> 8 & 255), fe(t, t.gzhead.time >> 16 & 255), fe(t, t.gzhead.time >> 24 & 255), fe(t, t.level === 9 ? 2 : t.strategy >= kr || t.level < 2 ? 4 : 0), fe(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (fe(t, t.gzhead.extra.length & 255), fe(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = Se(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = Pn;
    else if (fe(t, 0), fe(t, 0), fe(t, 0), fe(t, 0), fe(t, 0), fe(t, t.level === 9 ? 2 : t.strategy >= kr || t.level < 2 ? 4 : 0), fe(t, ac), t.status = bt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (t.status === Pn) {
    if (t.gzhead.extra) {
      let i = t.pending, o = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + o > t.pending_buf_size; ) {
        let a = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex += a, Re(e), t.pending !== 0)
          return t.last_flush = -1, Ne;
        i = 0, o -= a;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending += o, t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = Zn;
  }
  if (t.status === Zn) {
    if (t.gzhead.name) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i)), Re(e), t.pending !== 0)
            return t.last_flush = -1, Ne;
          i = 0;
        }
        t.gzindex < t.gzhead.name.length ? o = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : o = 0, fe(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = $n;
  }
  if (t.status === $n) {
    if (t.gzhead.comment) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i)), Re(e), t.pending !== 0)
            return t.last_flush = -1, Ne;
          i = 0;
        }
        t.gzindex < t.gzhead.comment.length ? o = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : o = 0, fe(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (e.adler = Se(e.adler, t.pending_buf, t.pending - i, i));
    }
    t.status = Un;
  }
  if (t.status === Un) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Re(e), t.pending !== 0))
        return t.last_flush = -1, Ne;
      fe(t, e.adler & 255), fe(t, e.adler >> 8 & 255), e.adler = 0;
    }
    if (t.status = bt, Re(e), t.pending !== 0)
      return t.last_flush = -1, Ne;
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || r !== st && t.status !== Kt) {
    let i = t.level === 0 ? ga(t, r) : t.strategy === kr ? uc(t, r) : t.strategy === Hl ? cc(t, r) : Jt[t.level].func(t, r);
    if ((i === yt || i === jt) && (t.status = Kt), i === Ie || i === yt)
      return e.avail_out === 0 && (t.last_flush = -1), Ne;
    if (i === Dt && (r === Dl ? Ll(t) : r !== Zi && (Fn(t, 0, 0, !1), r === jl && (it(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Re(e), e.avail_out === 0))
      return t.last_flush = -1, Ne;
  }
  return r !== Ue ? Ne : t.wrap <= 0 ? $i : (t.wrap === 2 ? (fe(t, e.adler & 255), fe(t, e.adler >> 8 & 255), fe(t, e.adler >> 16 & 255), fe(t, e.adler >> 24 & 255), fe(t, e.total_in & 255), fe(t, e.total_in >> 8 & 255), fe(t, e.total_in >> 16 & 255), fe(t, e.total_in >> 24 & 255)) : (Xt(t, e.adler >>> 16), Xt(t, e.adler & 65535)), Re(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? Ne : $i);
}, gc = (e) => {
  if (_r(e))
    return qe;
  const r = e.state.status;
  return e.state = null, r === bt ? vt(e, Ml) : Ne;
}, mc = (e, r) => {
  let t = r.length;
  if (_r(e))
    return qe;
  const n = e.state, i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Zt || n.lookahead)
    return qe;
  if (i === 1 && (e.adler = lr(e.adler, r, t, 0)), n.wrap = 0, t >= n.w_size) {
    i === 0 && (it(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let c = new Uint8Array(n.w_size);
    c.set(r.subarray(t - n.w_size, t), 0), r = c, t = n.w_size;
  }
  const o = e.avail_in, s = e.next_in, a = e.input;
  for (e.avail_in = t, e.next_in = 0, e.input = r, $t(n); n.lookahead >= le; ) {
    let c = n.strstart, l = n.lookahead - (le - 1);
    do
      n.ins_h = lt(n, n.ins_h, n.window[c + le - 1]), n.prev[c & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = c, c++;
    while (--l);
    n.strstart = c, n.lookahead = le - 1, $t(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = le - 1, n.match_available = 0, e.next_in = s, e.input = a, e.avail_in = o, n.wrap = i, Ne;
};
var bc = pc, vc = va, wc = ba, yc = ma, xc = hc, kc = _c, Ec = gc, Ac = mc, Sc = "pako deflate (from Nodeca project)", er = {
  deflateInit: bc,
  deflateInit2: vc,
  deflateReset: wc,
  deflateResetKeep: yc,
  deflateSetHeader: xc,
  deflate: kc,
  deflateEnd: Ec,
  deflateSetDictionary: Ac,
  deflateInfo: Sc
};
const Nc = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
var zc = function(e) {
  const r = Array.prototype.slice.call(arguments, 1);
  for (; r.length; ) {
    const t = r.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const n in t)
        Nc(t, n) && (e[n] = t[n]);
    }
  }
  return e;
}, Ic = (e) => {
  let r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r += e[n].length;
  const t = new Uint8Array(r);
  for (let n = 0, i = 0, o = e.length; n < o; n++) {
    let s = e[n];
    t.set(s, i), i += s.length;
  }
  return t;
}, Wr = {
  assign: zc,
  flattenChunks: Ic
};
let wa = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  wa = !1;
}
const cr = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  cr[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
cr[254] = cr[254] = 1;
var Tc = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let r, t, n, i, o, s = e.length, a = 0;
  for (i = 0; i < s; i++)
    t = e.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (r = new Uint8Array(a), o = 0, i = 0; o < a; i++)
    t = e.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), t < 128 ? r[o++] = t : t < 2048 ? (r[o++] = 192 | t >>> 6, r[o++] = 128 | t & 63) : t < 65536 ? (r[o++] = 224 | t >>> 12, r[o++] = 128 | t >>> 6 & 63, r[o++] = 128 | t & 63) : (r[o++] = 240 | t >>> 18, r[o++] = 128 | t >>> 12 & 63, r[o++] = 128 | t >>> 6 & 63, r[o++] = 128 | t & 63);
  return r;
};
const Cc = (e, r) => {
  if (r < 65534 && e.subarray && wa)
    return String.fromCharCode.apply(null, e.length === r ? e : e.subarray(0, r));
  let t = "";
  for (let n = 0; n < r; n++)
    t += String.fromCharCode(e[n]);
  return t;
};
var Oc = (e, r) => {
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
    let a = cr[s];
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
  return Cc(o, i);
}, Fc = (e, r) => {
  r = r || e.length, r > e.length && (r = e.length);
  let t = r - 1;
  for (; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? r : t + cr[e[t]] > r ? t : r;
}, ur = {
  string2buf: Tc,
  buf2string: Oc,
  utf8border: Fc
};
function Rc() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var ya = Rc;
const xa = Object.prototype.toString, {
  Z_NO_FLUSH: Pc,
  Z_SYNC_FLUSH: Zc,
  Z_FULL_FLUSH: $c,
  Z_FINISH: Uc,
  Z_OK: Ur,
  Z_STREAM_END: Bc,
  Z_DEFAULT_COMPRESSION: Lc,
  Z_DEFAULT_STRATEGY: Dc,
  Z_DEFLATED: jc
} = pr;
function gr(e) {
  this.options = Wr.assign({
    level: Lc,
    method: jc,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Dc
  }, e || {});
  let r = this.options;
  r.raw && r.windowBits > 0 ? r.windowBits = -r.windowBits : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ya(), this.strm.avail_out = 0;
  let t = er.deflateInit2(
    this.strm,
    r.level,
    r.method,
    r.windowBits,
    r.memLevel,
    r.strategy
  );
  if (t !== Ur)
    throw new Error(wt[t]);
  if (r.header && er.deflateSetHeader(this.strm, r.header), r.dictionary) {
    let n;
    if (typeof r.dictionary == "string" ? n = ur.string2buf(r.dictionary) : xa.call(r.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(r.dictionary) : n = r.dictionary, t = er.deflateSetDictionary(this.strm, n), t !== Ur)
      throw new Error(wt[t]);
    this._dict_set = !0;
  }
}
gr.prototype.push = function(e, r) {
  const t = this.strm, n = this.options.chunkSize;
  let i, o;
  if (this.ended)
    return !1;
  for (r === ~~r ? o = r : o = r === !0 ? Uc : Pc, typeof e == "string" ? t.input = ur.string2buf(e) : xa.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (o === Zc || o === $c) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (i = er.deflate(t, o), i === Bc)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), i = er.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === Ur;
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
gr.prototype.onData = function(e) {
  this.chunks.push(e);
};
gr.prototype.onEnd = function(e) {
  e === Ur && (this.result = Wr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Kn(e, r) {
  const t = new gr(r);
  if (t.push(e, !0), t.err)
    throw t.msg || wt[t.err];
  return t.result;
}
function Mc(e, r) {
  return r = r || {}, r.raw = !0, Kn(e, r);
}
function Vc(e, r) {
  return r = r || {}, r.gzip = !0, Kn(e, r);
}
var Wc = gr, Hc = Kn, Gc = Mc, qc = Vc, Xc = {
  Deflate: Wc,
  deflate: Hc,
  deflateRaw: Gc,
  gzip: qc
};
const Er = 16209, Yc = 16191;
var Kc = function(r, t) {
  let n, i, o, s, a, c, l, u, h, _, f, v, b, x, d, g, k, N, y, w, A, T, E, I;
  const F = r.state;
  n = r.next_in, E = r.input, i = n + (r.avail_in - 5), o = r.next_out, I = r.output, s = o - (t - r.avail_out), a = o + (r.avail_out - 257), c = F.dmax, l = F.wsize, u = F.whave, h = F.wnext, _ = F.window, f = F.hold, v = F.bits, b = F.lencode, x = F.distcode, d = (1 << F.lenbits) - 1, g = (1 << F.distbits) - 1;
  e:
    do {
      v < 15 && (f += E[n++] << v, v += 8, f += E[n++] << v, v += 8), k = b[f & d];
      t:
        for (; ; ) {
          if (N = k >>> 24, f >>>= N, v -= N, N = k >>> 16 & 255, N === 0)
            I[o++] = k & 65535;
          else if (N & 16) {
            y = k & 65535, N &= 15, N && (v < N && (f += E[n++] << v, v += 8), y += f & (1 << N) - 1, f >>>= N, v -= N), v < 15 && (f += E[n++] << v, v += 8, f += E[n++] << v, v += 8), k = x[f & g];
            r:
              for (; ; ) {
                if (N = k >>> 24, f >>>= N, v -= N, N = k >>> 16 & 255, N & 16) {
                  if (w = k & 65535, N &= 15, v < N && (f += E[n++] << v, v += 8, v < N && (f += E[n++] << v, v += 8)), w += f & (1 << N) - 1, w > c) {
                    r.msg = "invalid distance too far back", F.mode = Er;
                    break e;
                  }
                  if (f >>>= N, v -= N, N = o - s, w > N) {
                    if (N = w - N, N > u && F.sane) {
                      r.msg = "invalid distance too far back", F.mode = Er;
                      break e;
                    }
                    if (A = 0, T = _, h === 0) {
                      if (A += l - N, N < y) {
                        y -= N;
                        do
                          I[o++] = _[A++];
                        while (--N);
                        A = o - w, T = I;
                      }
                    } else if (h < N) {
                      if (A += l + h - N, N -= h, N < y) {
                        y -= N;
                        do
                          I[o++] = _[A++];
                        while (--N);
                        if (A = 0, h < y) {
                          N = h, y -= N;
                          do
                            I[o++] = _[A++];
                          while (--N);
                          A = o - w, T = I;
                        }
                      }
                    } else if (A += h - N, N < y) {
                      y -= N;
                      do
                        I[o++] = _[A++];
                      while (--N);
                      A = o - w, T = I;
                    }
                    for (; y > 2; )
                      I[o++] = T[A++], I[o++] = T[A++], I[o++] = T[A++], y -= 3;
                    y && (I[o++] = T[A++], y > 1 && (I[o++] = T[A++]));
                  } else {
                    A = o - w;
                    do
                      I[o++] = I[A++], I[o++] = I[A++], I[o++] = I[A++], y -= 3;
                    while (y > 2);
                    y && (I[o++] = I[A++], y > 1 && (I[o++] = I[A++]));
                  }
                } else if ((N & 64) === 0) {
                  k = x[(k & 65535) + (f & (1 << N) - 1)];
                  continue r;
                } else {
                  r.msg = "invalid distance code", F.mode = Er;
                  break e;
                }
                break;
              }
          } else if ((N & 64) === 0) {
            k = b[(k & 65535) + (f & (1 << N) - 1)];
            continue t;
          } else if (N & 32) {
            F.mode = Yc;
            break e;
          } else {
            r.msg = "invalid literal/length code", F.mode = Er;
            break e;
          }
          break;
        }
    } while (n < i && o < a);
  y = v >> 3, n -= y, v -= y << 3, f &= (1 << v) - 1, r.next_in = n, r.next_out = o, r.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), r.avail_out = o < a ? 257 + (a - o) : 257 - (o - a), F.hold = f, F.bits = v;
};
const Nt = 15, Bi = 852, Li = 592, Di = 0, mn = 1, ji = 2, Jc = new Uint16Array([
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
]), Qc = new Uint8Array([
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
]), eu = new Uint16Array([
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
]), tu = new Uint8Array([
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
]), ru = (e, r, t, n, i, o, s, a) => {
  const c = a.bits;
  let l = 0, u = 0, h = 0, _ = 0, f = 0, v = 0, b = 0, x = 0, d = 0, g = 0, k, N, y, w, A, T = null, E;
  const I = new Uint16Array(Nt + 1), F = new Uint16Array(Nt + 1);
  let S = null, z, p, P;
  for (l = 0; l <= Nt; l++)
    I[l] = 0;
  for (u = 0; u < n; u++)
    I[r[t + u]]++;
  for (f = c, _ = Nt; _ >= 1 && I[_] === 0; _--)
    ;
  if (f > _ && (f = _), _ === 0)
    return i[o++] = 1 << 24 | 64 << 16 | 0, i[o++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (h = 1; h < _ && I[h] === 0; h++)
    ;
  for (f < h && (f = h), x = 1, l = 1; l <= Nt; l++)
    if (x <<= 1, x -= I[l], x < 0)
      return -1;
  if (x > 0 && (e === Di || _ !== 1))
    return -1;
  for (F[1] = 0, l = 1; l < Nt; l++)
    F[l + 1] = F[l] + I[l];
  for (u = 0; u < n; u++)
    r[t + u] !== 0 && (s[F[r[t + u]]++] = u);
  if (e === Di ? (T = S = s, E = 20) : e === mn ? (T = Jc, S = Qc, E = 257) : (T = eu, S = tu, E = 0), g = 0, u = 0, l = h, A = o, v = f, b = 0, y = -1, d = 1 << f, w = d - 1, e === mn && d > Bi || e === ji && d > Li)
    return 1;
  for (; ; ) {
    z = l - b, s[u] + 1 < E ? (p = 0, P = s[u]) : s[u] >= E ? (p = S[s[u] - E], P = T[s[u] - E]) : (p = 96, P = 0), k = 1 << l - b, N = 1 << v, h = N;
    do
      N -= k, i[A + (g >> b) + N] = z << 24 | p << 16 | P | 0;
    while (N !== 0);
    for (k = 1 << l - 1; g & k; )
      k >>= 1;
    if (k !== 0 ? (g &= k - 1, g += k) : g = 0, u++, --I[l] === 0) {
      if (l === _)
        break;
      l = r[t + s[u]];
    }
    if (l > f && (g & w) !== y) {
      for (b === 0 && (b = f), A += h, v = l - b, x = 1 << v; v + b < _ && (x -= I[v + b], !(x <= 0)); )
        v++, x <<= 1;
      if (d += 1 << v, e === mn && d > Bi || e === ji && d > Li)
        return 1;
      y = g & w, i[y] = f << 24 | v << 16 | A - o | 0;
    }
  }
  return g !== 0 && (i[A + g] = l - b << 24 | 64 << 16 | 0), a.bits = f, 0;
};
var tr = ru;
const nu = 0, ka = 1, Ea = 2, {
  Z_FINISH: Mi,
  Z_BLOCK: iu,
  Z_TREES: Ar,
  Z_OK: xt,
  Z_STREAM_END: ou,
  Z_NEED_DICT: au,
  Z_STREAM_ERROR: Be,
  Z_DATA_ERROR: Aa,
  Z_MEM_ERROR: Sa,
  Z_BUF_ERROR: su,
  Z_DEFLATED: Vi
} = pr, Hr = 16180, Wi = 16181, Hi = 16182, Gi = 16183, qi = 16184, Xi = 16185, Yi = 16186, Ki = 16187, Ji = 16188, Qi = 16189, Br = 16190, Qe = 16191, bn = 16192, eo = 16193, vn = 16194, to = 16195, ro = 16196, no = 16197, io = 16198, Sr = 16199, Nr = 16200, oo = 16201, ao = 16202, so = 16203, lo = 16204, co = 16205, wn = 16206, uo = 16207, fo = 16208, _e = 16209, Na = 16210, za = 16211, lu = 852, cu = 592, uu = 15, fu = uu, ho = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function du() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const kt = (e) => {
  if (!e)
    return 1;
  const r = e.state;
  return !r || r.strm !== e || r.mode < Hr || r.mode > za ? 1 : 0;
}, Ia = (e) => {
  if (kt(e))
    return Be;
  const r = e.state;
  return e.total_in = e.total_out = r.total = 0, e.msg = "", r.wrap && (e.adler = r.wrap & 1), r.mode = Hr, r.last = 0, r.havedict = 0, r.flags = -1, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new Int32Array(lu), r.distcode = r.distdyn = new Int32Array(cu), r.sane = 1, r.back = -1, xt;
}, Ta = (e) => {
  if (kt(e))
    return Be;
  const r = e.state;
  return r.wsize = 0, r.whave = 0, r.wnext = 0, Ia(e);
}, Ca = (e, r) => {
  let t;
  if (kt(e))
    return Be;
  const n = e.state;
  return r < 0 ? (t = 0, r = -r) : (t = (r >> 4) + 5, r < 48 && (r &= 15)), r && (r < 8 || r > 15) ? Be : (n.window !== null && n.wbits !== r && (n.window = null), n.wrap = t, n.wbits = r, Ta(e));
}, Oa = (e, r) => {
  if (!e)
    return Be;
  const t = new du();
  e.state = t, t.strm = e, t.window = null, t.mode = Hr;
  const n = Ca(e, r);
  return n !== xt && (e.state = null), n;
}, hu = (e) => Oa(e, fu);
let po = !0, yn, xn;
const pu = (e) => {
  if (po) {
    yn = new Int32Array(512), xn = new Int32Array(32);
    let r = 0;
    for (; r < 144; )
      e.lens[r++] = 8;
    for (; r < 256; )
      e.lens[r++] = 9;
    for (; r < 280; )
      e.lens[r++] = 7;
    for (; r < 288; )
      e.lens[r++] = 8;
    for (tr(ka, e.lens, 0, 288, yn, 0, e.work, { bits: 9 }), r = 0; r < 32; )
      e.lens[r++] = 5;
    tr(Ea, e.lens, 0, 32, xn, 0, e.work, { bits: 5 }), po = !1;
  }
  e.lencode = yn, e.lenbits = 9, e.distcode = xn, e.distbits = 5;
}, Fa = (e, r, t, n) => {
  let i;
  const o = e.state;
  return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), n >= o.wsize ? (o.window.set(r.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > n && (i = n), o.window.set(r.subarray(t - n, t - n + i), o.wnext), n -= i, n ? (o.window.set(r.subarray(t - n, t), 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
}, _u = (e, r) => {
  let t, n, i, o, s, a, c, l, u, h, _, f, v, b, x = 0, d, g, k, N, y, w, A, T;
  const E = new Uint8Array(4);
  let I, F;
  const S = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (kt(e) || !e.output || !e.input && e.avail_in !== 0)
    return Be;
  t = e.state, t.mode === Qe && (t.mode = bn), s = e.next_out, i = e.output, c = e.avail_out, o = e.next_in, n = e.input, a = e.avail_in, l = t.hold, u = t.bits, h = a, _ = c, T = xt;
  e:
    for (; ; )
      switch (t.mode) {
        case Hr:
          if (t.wrap === 0) {
            t.mode = bn;
            break;
          }
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.wrap & 2 && l === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Se(t.check, E, 2, 0), l = 0, u = 0, t.mode = Wi;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((l & 255) << 8) + (l >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = _e;
            break;
          }
          if ((l & 15) !== Vi) {
            e.msg = "unknown compression method", t.mode = _e;
            break;
          }
          if (l >>>= 4, u -= 4, A = (l & 15) + 8, t.wbits === 0 && (t.wbits = A), A > 15 || A > t.wbits) {
            e.msg = "invalid window size", t.mode = _e;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = l & 512 ? Qi : Qe, l = 0, u = 0;
          break;
        case Wi:
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.flags = l, (t.flags & 255) !== Vi) {
            e.msg = "unknown compression method", t.mode = _e;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = _e;
            break;
          }
          t.head && (t.head.text = l >> 8 & 1), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Se(t.check, E, 2, 0)), l = 0, u = 0, t.mode = Hi;
        /* falls through */
        case Hi:
          for (; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          t.head && (t.head.time = l), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, E[2] = l >>> 16 & 255, E[3] = l >>> 24 & 255, t.check = Se(t.check, E, 4, 0)), l = 0, u = 0, t.mode = Gi;
        /* falls through */
        case Gi:
          for (; u < 16; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          t.head && (t.head.xflags = l & 255, t.head.os = l >> 8), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Se(t.check, E, 2, 0)), l = 0, u = 0, t.mode = qi;
        /* falls through */
        case qi:
          if (t.flags & 1024) {
            for (; u < 16; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.length = l, t.head && (t.head.extra_len = l), t.flags & 512 && t.wrap & 4 && (E[0] = l & 255, E[1] = l >>> 8 & 255, t.check = Se(t.check, E, 2, 0)), l = 0, u = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Xi;
        /* falls through */
        case Xi:
          if (t.flags & 1024 && (f = t.length, f > a && (f = a), f && (t.head && (A = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            n.subarray(
              o,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            A
          )), t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, n, f, o)), a -= f, o += f, t.length -= f), t.length))
            break e;
          t.length = 0, t.mode = Yi;
        /* falls through */
        case Yi:
          if (t.flags & 2048) {
            if (a === 0)
              break e;
            f = 0;
            do
              A = n[o + f++], t.head && A && t.length < 65536 && (t.head.name += String.fromCharCode(A));
            while (A && f < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, n, f, o)), a -= f, o += f, A)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = Ki;
        /* falls through */
        case Ki:
          if (t.flags & 4096) {
            if (a === 0)
              break e;
            f = 0;
            do
              A = n[o + f++], t.head && A && t.length < 65536 && (t.head.comment += String.fromCharCode(A));
            while (A && f < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, n, f, o)), a -= f, o += f, A)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Ji;
        /* falls through */
        case Ji:
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
        case Qi:
          for (; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          e.adler = t.check = ho(l), l = 0, u = 0, t.mode = Br;
        /* falls through */
        case Br:
          if (t.havedict === 0)
            return e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, au;
          e.adler = t.check = 1, t.mode = Qe;
        /* falls through */
        case Qe:
          if (r === iu || r === Ar)
            break e;
        /* falls through */
        case bn:
          if (t.last) {
            l >>>= u & 7, u -= u & 7, t.mode = wn;
            break;
          }
          for (; u < 3; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          switch (t.last = l & 1, l >>>= 1, u -= 1, l & 3) {
            case 0:
              t.mode = eo;
              break;
            case 1:
              if (pu(t), t.mode = Sr, r === Ar) {
                l >>>= 2, u -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = ro;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = _e;
          }
          l >>>= 2, u -= 2;
          break;
        case eo:
          for (l >>>= u & 7, u -= u & 7; u < 32; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if ((l & 65535) !== (l >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = _e;
            break;
          }
          if (t.length = l & 65535, l = 0, u = 0, t.mode = vn, r === Ar)
            break e;
        /* falls through */
        case vn:
          t.mode = to;
        /* falls through */
        case to:
          if (f = t.length, f) {
            if (f > a && (f = a), f > c && (f = c), f === 0)
              break e;
            i.set(n.subarray(o, o + f), s), a -= f, o += f, c -= f, s += f, t.length -= f;
            break;
          }
          t.mode = Qe;
          break;
        case ro:
          for (; u < 14; ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (t.nlen = (l & 31) + 257, l >>>= 5, u -= 5, t.ndist = (l & 31) + 1, l >>>= 5, u -= 5, t.ncode = (l & 15) + 4, l >>>= 4, u -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = _e;
            break;
          }
          t.have = 0, t.mode = no;
        /* falls through */
        case no:
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
          if (t.lencode = t.lendyn, t.lenbits = 7, I = { bits: t.lenbits }, T = tr(nu, t.lens, 0, 19, t.lencode, 0, t.work, I), t.lenbits = I.bits, T) {
            e.msg = "invalid code lengths set", t.mode = _e;
            break;
          }
          t.have = 0, t.mode = io;
        /* falls through */
        case io:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; x = t.lencode[l & (1 << t.lenbits) - 1], d = x >>> 24, g = x >>> 16 & 255, k = x & 65535, !(d <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            if (k < 16)
              l >>>= d, u -= d, t.lens[t.have++] = k;
            else {
              if (k === 16) {
                for (F = d + 2; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                if (l >>>= d, u -= d, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = _e;
                  break;
                }
                A = t.lens[t.have - 1], f = 3 + (l & 3), l >>>= 2, u -= 2;
              } else if (k === 17) {
                for (F = d + 3; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                l >>>= d, u -= d, A = 0, f = 3 + (l & 7), l >>>= 3, u -= 3;
              } else {
                for (F = d + 7; u < F; ) {
                  if (a === 0)
                    break e;
                  a--, l += n[o++] << u, u += 8;
                }
                l >>>= d, u -= d, A = 0, f = 11 + (l & 127), l >>>= 7, u -= 7;
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
          if (t.lenbits = 9, I = { bits: t.lenbits }, T = tr(ka, t.lens, 0, t.nlen, t.lencode, 0, t.work, I), t.lenbits = I.bits, T) {
            e.msg = "invalid literal/lengths set", t.mode = _e;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, I = { bits: t.distbits }, T = tr(Ea, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, I), t.distbits = I.bits, T) {
            e.msg = "invalid distances set", t.mode = _e;
            break;
          }
          if (t.mode = Sr, r === Ar)
            break e;
        /* falls through */
        case Sr:
          t.mode = Nr;
        /* falls through */
        case Nr:
          if (a >= 6 && c >= 258) {
            e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, Kc(e, _), s = e.next_out, i = e.output, c = e.avail_out, o = e.next_in, n = e.input, a = e.avail_in, l = t.hold, u = t.bits, t.mode === Qe && (t.back = -1);
            break;
          }
          for (t.back = 0; x = t.lencode[l & (1 << t.lenbits) - 1], d = x >>> 24, g = x >>> 16 & 255, k = x & 65535, !(d <= u); ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if (g && (g & 240) === 0) {
            for (N = d, y = g, w = k; x = t.lencode[w + ((l & (1 << N + y) - 1) >> N)], d = x >>> 24, g = x >>> 16 & 255, k = x & 65535, !(N + d <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            l >>>= N, u -= N, t.back += N;
          }
          if (l >>>= d, u -= d, t.back += d, t.length = k, g === 0) {
            t.mode = co;
            break;
          }
          if (g & 32) {
            t.back = -1, t.mode = Qe;
            break;
          }
          if (g & 64) {
            e.msg = "invalid literal/length code", t.mode = _e;
            break;
          }
          t.extra = g & 15, t.mode = oo;
        /* falls through */
        case oo:
          if (t.extra) {
            for (F = t.extra; u < F; ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            t.length += l & (1 << t.extra) - 1, l >>>= t.extra, u -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = ao;
        /* falls through */
        case ao:
          for (; x = t.distcode[l & (1 << t.distbits) - 1], d = x >>> 24, g = x >>> 16 & 255, k = x & 65535, !(d <= u); ) {
            if (a === 0)
              break e;
            a--, l += n[o++] << u, u += 8;
          }
          if ((g & 240) === 0) {
            for (N = d, y = g, w = k; x = t.distcode[w + ((l & (1 << N + y) - 1) >> N)], d = x >>> 24, g = x >>> 16 & 255, k = x & 65535, !(N + d <= u); ) {
              if (a === 0)
                break e;
              a--, l += n[o++] << u, u += 8;
            }
            l >>>= N, u -= N, t.back += N;
          }
          if (l >>>= d, u -= d, t.back += d, g & 64) {
            e.msg = "invalid distance code", t.mode = _e;
            break;
          }
          t.offset = k, t.extra = g & 15, t.mode = so;
        /* falls through */
        case so:
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
          t.mode = lo;
        /* falls through */
        case lo:
          if (c === 0)
            break e;
          if (f = _ - c, t.offset > f) {
            if (f = t.offset - f, f > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = _e;
              break;
            }
            f > t.wnext ? (f -= t.wnext, v = t.wsize - f) : v = t.wnext - f, f > t.length && (f = t.length), b = t.window;
          } else
            b = i, v = s - t.offset, f = t.length;
          f > c && (f = c), c -= f, t.length -= f;
          do
            i[s++] = b[v++];
          while (--f);
          t.length === 0 && (t.mode = Nr);
          break;
        case co:
          if (c === 0)
            break e;
          i[s++] = t.length, c--, t.mode = Nr;
          break;
        case wn:
          if (t.wrap) {
            for (; u < 32; ) {
              if (a === 0)
                break e;
              a--, l |= n[o++] << u, u += 8;
            }
            if (_ -= c, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? Se(t.check, i, _, s - _) : lr(t.check, i, _, s - _)), _ = c, t.wrap & 4 && (t.flags ? l : ho(l)) !== t.check) {
              e.msg = "incorrect data check", t.mode = _e;
              break;
            }
            l = 0, u = 0;
          }
          t.mode = uo;
        /* falls through */
        case uo:
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
          t.mode = fo;
        /* falls through */
        case fo:
          T = ou;
          break e;
        case _e:
          T = Aa;
          break e;
        case Na:
          return Sa;
        case za:
        /* falls through */
        default:
          return Be;
      }
  return e.next_out = s, e.avail_out = c, e.next_in = o, e.avail_in = a, t.hold = l, t.bits = u, (t.wsize || _ !== e.avail_out && t.mode < _e && (t.mode < wn || r !== Mi)) && Fa(e, e.output, e.next_out, _ - e.avail_out), h -= e.avail_in, _ -= e.avail_out, e.total_in += h, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? Se(t.check, i, _, e.next_out - _) : lr(t.check, i, _, e.next_out - _)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Qe ? 128 : 0) + (t.mode === Sr || t.mode === vn ? 256 : 0), (h === 0 && _ === 0 || r === Mi) && T === xt && (T = su), T;
}, gu = (e) => {
  if (kt(e))
    return Be;
  let r = e.state;
  return r.window && (r.window = null), e.state = null, xt;
}, mu = (e, r) => {
  if (kt(e))
    return Be;
  const t = e.state;
  return (t.wrap & 2) === 0 ? Be : (t.head = r, r.done = !1, xt);
}, bu = (e, r) => {
  const t = r.length;
  let n, i, o;
  return kt(e) || (n = e.state, n.wrap !== 0 && n.mode !== Br) ? Be : n.mode === Br && (i = 1, i = lr(i, r, t, 0), i !== n.check) ? Aa : (o = Fa(e, r, t, t), o ? (n.mode = Na, Sa) : (n.havedict = 1, xt));
};
var vu = Ta, wu = Ca, yu = Ia, xu = hu, ku = Oa, Eu = _u, Au = gu, Su = mu, Nu = bu, zu = "pako inflate (from Nodeca project)", tt = {
  inflateReset: vu,
  inflateReset2: wu,
  inflateResetKeep: yu,
  inflateInit: xu,
  inflateInit2: ku,
  inflate: Eu,
  inflateEnd: Au,
  inflateGetHeader: Su,
  inflateSetDictionary: Nu,
  inflateInfo: zu
};
function Iu() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Tu = Iu;
const Ra = Object.prototype.toString, {
  Z_NO_FLUSH: Cu,
  Z_FINISH: Ou,
  Z_OK: fr,
  Z_STREAM_END: kn,
  Z_NEED_DICT: En,
  Z_STREAM_ERROR: Fu,
  Z_DATA_ERROR: _o,
  Z_MEM_ERROR: Ru
} = pr;
function mr(e) {
  this.options = Wr.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const r = this.options;
  r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, r.windowBits === 0 && (r.windowBits = -15)), r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits) && (r.windowBits += 32), r.windowBits > 15 && r.windowBits < 48 && (r.windowBits & 15) === 0 && (r.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ya(), this.strm.avail_out = 0;
  let t = tt.inflateInit2(
    this.strm,
    r.windowBits
  );
  if (t !== fr)
    throw new Error(wt[t]);
  if (this.header = new Tu(), tt.inflateGetHeader(this.strm, this.header), r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = ur.string2buf(r.dictionary) : Ra.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (t = tt.inflateSetDictionary(this.strm, r.dictionary), t !== fr)))
    throw new Error(wt[t]);
}
mr.prototype.push = function(e, r) {
  const t = this.strm, n = this.options.chunkSize, i = this.options.dictionary;
  let o, s, a;
  if (this.ended) return !1;
  for (r === ~~r ? s = r : s = r === !0 ? Ou : Cu, Ra.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), o = tt.inflate(t, s), o === En && i && (o = tt.inflateSetDictionary(t, i), o === fr ? o = tt.inflate(t, s) : o === _o && (o = En)); t.avail_in > 0 && o === kn && t.state.wrap > 0 && e[t.next_in] !== 0; )
      tt.inflateReset(t), o = tt.inflate(t, s);
    switch (o) {
      case Fu:
      case _o:
      case En:
      case Ru:
        return this.onEnd(o), this.ended = !0, !1;
    }
    if (a = t.avail_out, t.next_out && (t.avail_out === 0 || o === kn))
      if (this.options.to === "string") {
        let c = ur.utf8border(t.output, t.next_out), l = t.next_out - c, u = ur.buf2string(t.output, c);
        t.next_out = l, t.avail_out = n - l, l && t.output.set(t.output.subarray(c, c + l), 0), this.onData(u);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(o === fr && a === 0)) {
      if (o === kn)
        return o = tt.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
mr.prototype.onData = function(e) {
  this.chunks.push(e);
};
mr.prototype.onEnd = function(e) {
  e === fr && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Wr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Jn(e, r) {
  const t = new mr(r);
  if (t.push(e), t.err) throw t.msg || wt[t.err];
  return t.result;
}
function Pu(e, r) {
  return r = r || {}, r.raw = !0, Jn(e, r);
}
var Zu = mr, $u = Jn, Uu = Pu, Bu = Jn, Lu = {
  Inflate: Zu,
  inflate: $u,
  inflateRaw: Uu,
  ungzip: Bu
};
const { Deflate: Du, deflate: ju, deflateRaw: Mu, gzip: Vu } = Xc, { Inflate: Wu, inflate: Hu, inflateRaw: Gu, ungzip: qu } = Lu;
var Xu = Du, Yu = ju, Ku = Mu, Ju = Vu, Qu = Wu, ef = Hu, tf = Gu, rf = qu, nf = pr, go = {
  Deflate: Xu,
  deflate: Yu,
  deflateRaw: Ku,
  gzip: Ju,
  Inflate: Qu,
  inflate: ef,
  inflateRaw: tf,
  ungzip: rf,
  constants: nf
};
function Lr(e) {
  let r = Lr.table || (Lr.table = (() => {
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
Lr.table = void 0;
var zr = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), An = (e, r) => e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], Ir = (e, r, t) => {
  r[t] = e >>> 24, r[t + 1] = e >>> 16, r[t + 2] = e >>> 8, r[t + 3] = e;
};
function of(e, r, t, n) {
  let i = r * n, o = new Uint8Array(t * i), s = 0, a = 0;
  for (let c = 0; c < t; ++c) {
    let l = e[s++];
    switch (l) {
      case 0:
        o.set(e.subarray(s, s + i), a);
        break;
      case 1:
        for (let u = 0; u < i; ++u) {
          let h = u >= n ? o[a + u - n] : 0;
          o[a + u] = e[s + u] + h & 255;
        }
        break;
      case 2:
        for (let u = 0; u < i; ++u) {
          let h = c ? o[a + u - i] : 0;
          o[a + u] = e[s + u] + h & 255;
        }
        break;
      case 3:
        for (let u = 0; u < i; ++u) {
          let h = u >= n ? o[a + u - n] : 0, _ = c ? o[a + u - i] : 0;
          o[a + u] = e[s + u] + (h + _ >> 1) & 255;
        }
        break;
      case 4: {
        let u = (h, _, f) => {
          let v = h + _ - f, b = Math.abs(v - h), x = Math.abs(v - _), d = Math.abs(v - f);
          return b <= x && b <= d ? h : x <= d ? _ : f;
        };
        for (let h = 0; h < i; ++h) {
          let _ = h >= n ? o[a + h - n] : 0, f = c ? o[a + h - i] : 0, v = h >= n && c ? o[a + h - i - n] : 0;
          o[a + h] = e[s + h] + u(_, f, v) & 255;
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
function af(e) {
  if (!zr.every((g, k) => g === e[k])) throw new Error("Not a PNG");
  let r = 8, t = 0, n = 0, i = [], o = !1;
  for (; r < e.length; ) {
    let g = An(e, r), k = String.fromCharCode(...e.subarray(r + 4, r + 8)), N = e.subarray(r + 8, r + 8 + g);
    k === "CgBI" ? o = !0 : k === "IHDR" ? (t = An(N, 0), n = An(N, 4)) : k === "IDAT" && i.push(N), r += 12 + g;
  }
  if (!o) return e;
  let s = go.inflateRaw(Uint8Array.from(i.flatMap((g) => Array.from(g)))), a = 4, c = of(s, t, n, a);
  for (let g = 0; g < c.length; g += 4) {
    let k = c[g], N = c[g + 2];
    c[g] = N, c[g + 2] = k;
  }
  let l = t * a, u = new Uint8Array((l + 1) * n);
  for (let g = 0; g < n; ++g) u[g * (l + 1)] = 0, u.set(c.subarray(g * l, g * l + l), g * (l + 1) + 1);
  let h = go.deflate(u), _ = [], f = (g, k) => {
    let N = new Uint8Array(4);
    Ir(k.length, N, 0);
    let y = new TextEncoder().encode(g), w = new Uint8Array(4);
    Ir(Lr(new Uint8Array([...y, ...k])), w, 0), _.push(N, y, k, w);
  }, v = new Uint8Array(13);
  Ir(t, v, 0), Ir(n, v, 4), v.set([8, 6, 0, 0, 0], 8), f("IHDR", v), f("IDAT", h), f("IEND", new Uint8Array());
  let b = zr.length + _.reduce((g, k) => g + k.length, 0), x = new Uint8Array(b), d = 0;
  x.set(zr, d), d += zr.length;
  for (let g of _) x.set(g, d), d += g.length;
  return x;
}
var Sn = { exports: {} };
const sf = {}, lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sf
}, Symbol.toStringTag, { value: "Module" })), mo = /* @__PURE__ */ zs(lf);
var bo;
function cf() {
  return bo || (bo = 1, (function(e) {
    (function() {
      var r = "input is invalid type", t = typeof window == "object", n = t ? window : {};
      n.JS_SHA256_NO_WINDOW && (t = !1);
      var i = !t && typeof self == "object", o = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
      o ? n = Yt : i && (n = self);
      var s = !n.JS_SHA256_NO_COMMON_JS && !0 && e.exports, a = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), l = [-2147483648, 8388608, 32768, 128], u = [24, 16, 8, 0], h = [
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
      (n.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      }), a && (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(w) {
        return typeof w == "object" && w.buffer && w.buffer.constructor === ArrayBuffer;
      });
      var v = function(w, A) {
        return function(T) {
          return new k(A, !0).update(T)[w]();
        };
      }, b = function(w) {
        var A = v("hex", w);
        o && (A = x(A, w)), A.create = function() {
          return new k(w);
        }, A.update = function(I) {
          return A.create().update(I);
        };
        for (var T = 0; T < _.length; ++T) {
          var E = _[T];
          A[E] = v(E, w);
        }
        return A;
      }, x = function(w, A) {
        var T = mo, E = mo.Buffer, I = A ? "sha224" : "sha256", F;
        E.from && !n.JS_SHA256_NO_BUFFER_FROM ? F = E.from : F = function(z) {
          return new E(z);
        };
        var S = function(z) {
          if (typeof z == "string")
            return T.createHash(I).update(z, "utf8").digest("hex");
          if (z == null)
            throw new Error(r);
          return z.constructor === ArrayBuffer && (z = new Uint8Array(z)), Array.isArray(z) || ArrayBuffer.isView(z) || z.constructor === E ? T.createHash(I).update(F(z)).digest("hex") : w(z);
        };
        return S;
      }, d = function(w, A) {
        return function(T, E) {
          return new N(T, A, !0).update(E)[w]();
        };
      }, g = function(w) {
        var A = d("hex", w);
        A.create = function(I) {
          return new N(I, w);
        }, A.update = function(I, F) {
          return A.create(I).update(F);
        };
        for (var T = 0; T < _.length; ++T) {
          var E = _[T];
          A[E] = d(E, w);
        }
        return A;
      };
      function k(w, A) {
        A ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], w ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = w;
      }
      k.prototype.update = function(w) {
        if (!this.finalized) {
          var A, T = typeof w;
          if (T !== "string") {
            if (T === "object") {
              if (w === null)
                throw new Error(r);
              if (a && w.constructor === ArrayBuffer)
                w = new Uint8Array(w);
              else if (!Array.isArray(w) && (!a || !ArrayBuffer.isView(w)))
                throw new Error(r);
            } else
              throw new Error(r);
            A = !0;
          }
          for (var E, I = 0, F, S = w.length, z = this.blocks; I < S; ) {
            if (this.hashed && (this.hashed = !1, z[0] = this.block, this.block = z[16] = z[1] = z[2] = z[3] = z[4] = z[5] = z[6] = z[7] = z[8] = z[9] = z[10] = z[11] = z[12] = z[13] = z[14] = z[15] = 0), A)
              for (F = this.start; I < S && F < 64; ++I)
                z[F >>> 2] |= w[I] << u[F++ & 3];
            else
              for (F = this.start; I < S && F < 64; ++I)
                E = w.charCodeAt(I), E < 128 ? z[F >>> 2] |= E << u[F++ & 3] : E < 2048 ? (z[F >>> 2] |= (192 | E >>> 6) << u[F++ & 3], z[F >>> 2] |= (128 | E & 63) << u[F++ & 3]) : E < 55296 || E >= 57344 ? (z[F >>> 2] |= (224 | E >>> 12) << u[F++ & 3], z[F >>> 2] |= (128 | E >>> 6 & 63) << u[F++ & 3], z[F >>> 2] |= (128 | E & 63) << u[F++ & 3]) : (E = 65536 + ((E & 1023) << 10 | w.charCodeAt(++I) & 1023), z[F >>> 2] |= (240 | E >>> 18) << u[F++ & 3], z[F >>> 2] |= (128 | E >>> 12 & 63) << u[F++ & 3], z[F >>> 2] |= (128 | E >>> 6 & 63) << u[F++ & 3], z[F >>> 2] |= (128 | E & 63) << u[F++ & 3]);
            this.lastByteIndex = F, this.bytes += F - this.start, F >= 64 ? (this.block = z[16], this.start = F - 64, this.hash(), this.hashed = !0) : this.start = F;
          }
          return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        }
      }, k.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var w = this.blocks, A = this.lastByteIndex;
          w[16] = this.block, w[A >>> 2] |= l[A & 3], this.block = w[16], A >= 56 && (this.hashed || this.hash(), w[0] = this.block, w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0), w[14] = this.hBytes << 3 | this.bytes >>> 29, w[15] = this.bytes << 3, this.hash();
        }
      }, k.prototype.hash = function() {
        var w = this.h0, A = this.h1, T = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, z = this.h7, p = this.blocks, P, K, j, ne, L, ee, B, U, re, J, Y;
        for (P = 16; P < 64; ++P)
          L = p[P - 15], K = (L >>> 7 | L << 25) ^ (L >>> 18 | L << 14) ^ L >>> 3, L = p[P - 2], j = (L >>> 17 | L << 15) ^ (L >>> 19 | L << 13) ^ L >>> 10, p[P] = p[P - 16] + K + p[P - 7] + j << 0;
        for (Y = A & T, P = 0; P < 64; P += 4)
          this.first ? (this.is224 ? (U = 300032, L = p[0] - 1413257819, z = L - 150054599 << 0, E = L + 24177077 << 0) : (U = 704751109, L = p[0] - 210244248, z = L - 1521486534 << 0, E = L + 143694565 << 0), this.first = !1) : (K = (w >>> 2 | w << 30) ^ (w >>> 13 | w << 19) ^ (w >>> 22 | w << 10), j = (I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7), U = w & A, ne = U ^ w & T ^ Y, B = I & F ^ ~I & S, L = z + j + B + h[P] + p[P], ee = K + ne, z = E + L << 0, E = L + ee << 0), K = (E >>> 2 | E << 30) ^ (E >>> 13 | E << 19) ^ (E >>> 22 | E << 10), j = (z >>> 6 | z << 26) ^ (z >>> 11 | z << 21) ^ (z >>> 25 | z << 7), re = E & w, ne = re ^ E & A ^ U, B = z & I ^ ~z & F, L = S + j + B + h[P + 1] + p[P + 1], ee = K + ne, S = T + L << 0, T = L + ee << 0, K = (T >>> 2 | T << 30) ^ (T >>> 13 | T << 19) ^ (T >>> 22 | T << 10), j = (S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7), J = T & E, ne = J ^ T & w ^ re, B = S & z ^ ~S & I, L = F + j + B + h[P + 2] + p[P + 2], ee = K + ne, F = A + L << 0, A = L + ee << 0, K = (A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10), j = (F >>> 6 | F << 26) ^ (F >>> 11 | F << 21) ^ (F >>> 25 | F << 7), Y = A & T, ne = Y ^ A & E ^ J, B = F & S ^ ~F & z, L = I + j + B + h[P + 3] + p[P + 3], ee = K + ne, I = w + L << 0, w = L + ee << 0, this.chromeBugWorkAround = !0;
        this.h0 = this.h0 + w << 0, this.h1 = this.h1 + A << 0, this.h2 = this.h2 + T << 0, this.h3 = this.h3 + E << 0, this.h4 = this.h4 + I << 0, this.h5 = this.h5 + F << 0, this.h6 = this.h6 + S << 0, this.h7 = this.h7 + z << 0;
      }, k.prototype.hex = function() {
        this.finalize();
        var w = this.h0, A = this.h1, T = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, z = this.h7, p = c[w >>> 28 & 15] + c[w >>> 24 & 15] + c[w >>> 20 & 15] + c[w >>> 16 & 15] + c[w >>> 12 & 15] + c[w >>> 8 & 15] + c[w >>> 4 & 15] + c[w & 15] + c[A >>> 28 & 15] + c[A >>> 24 & 15] + c[A >>> 20 & 15] + c[A >>> 16 & 15] + c[A >>> 12 & 15] + c[A >>> 8 & 15] + c[A >>> 4 & 15] + c[A & 15] + c[T >>> 28 & 15] + c[T >>> 24 & 15] + c[T >>> 20 & 15] + c[T >>> 16 & 15] + c[T >>> 12 & 15] + c[T >>> 8 & 15] + c[T >>> 4 & 15] + c[T & 15] + c[E >>> 28 & 15] + c[E >>> 24 & 15] + c[E >>> 20 & 15] + c[E >>> 16 & 15] + c[E >>> 12 & 15] + c[E >>> 8 & 15] + c[E >>> 4 & 15] + c[E & 15] + c[I >>> 28 & 15] + c[I >>> 24 & 15] + c[I >>> 20 & 15] + c[I >>> 16 & 15] + c[I >>> 12 & 15] + c[I >>> 8 & 15] + c[I >>> 4 & 15] + c[I & 15] + c[F >>> 28 & 15] + c[F >>> 24 & 15] + c[F >>> 20 & 15] + c[F >>> 16 & 15] + c[F >>> 12 & 15] + c[F >>> 8 & 15] + c[F >>> 4 & 15] + c[F & 15] + c[S >>> 28 & 15] + c[S >>> 24 & 15] + c[S >>> 20 & 15] + c[S >>> 16 & 15] + c[S >>> 12 & 15] + c[S >>> 8 & 15] + c[S >>> 4 & 15] + c[S & 15];
        return this.is224 || (p += c[z >>> 28 & 15] + c[z >>> 24 & 15] + c[z >>> 20 & 15] + c[z >>> 16 & 15] + c[z >>> 12 & 15] + c[z >>> 8 & 15] + c[z >>> 4 & 15] + c[z & 15]), p;
      }, k.prototype.toString = k.prototype.hex, k.prototype.digest = function() {
        this.finalize();
        var w = this.h0, A = this.h1, T = this.h2, E = this.h3, I = this.h4, F = this.h5, S = this.h6, z = this.h7, p = [
          w >>> 24 & 255,
          w >>> 16 & 255,
          w >>> 8 & 255,
          w & 255,
          A >>> 24 & 255,
          A >>> 16 & 255,
          A >>> 8 & 255,
          A & 255,
          T >>> 24 & 255,
          T >>> 16 & 255,
          T >>> 8 & 255,
          T & 255,
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
        return this.is224 || p.push(z >>> 24 & 255, z >>> 16 & 255, z >>> 8 & 255, z & 255), p;
      }, k.prototype.array = k.prototype.digest, k.prototype.arrayBuffer = function() {
        this.finalize();
        var w = new ArrayBuffer(this.is224 ? 28 : 32), A = new DataView(w);
        return A.setUint32(0, this.h0), A.setUint32(4, this.h1), A.setUint32(8, this.h2), A.setUint32(12, this.h3), A.setUint32(16, this.h4), A.setUint32(20, this.h5), A.setUint32(24, this.h6), this.is224 || A.setUint32(28, this.h7), w;
      };
      function N(w, A, T) {
        var E, I = typeof w;
        if (I === "string") {
          var F = [], S = w.length, z = 0, p;
          for (E = 0; E < S; ++E)
            p = w.charCodeAt(E), p < 128 ? F[z++] = p : p < 2048 ? (F[z++] = 192 | p >>> 6, F[z++] = 128 | p & 63) : p < 55296 || p >= 57344 ? (F[z++] = 224 | p >>> 12, F[z++] = 128 | p >>> 6 & 63, F[z++] = 128 | p & 63) : (p = 65536 + ((p & 1023) << 10 | w.charCodeAt(++E) & 1023), F[z++] = 240 | p >>> 18, F[z++] = 128 | p >>> 12 & 63, F[z++] = 128 | p >>> 6 & 63, F[z++] = 128 | p & 63);
          w = F;
        } else if (I === "object") {
          if (w === null)
            throw new Error(r);
          if (a && w.constructor === ArrayBuffer)
            w = new Uint8Array(w);
          else if (!Array.isArray(w) && (!a || !ArrayBuffer.isView(w)))
            throw new Error(r);
        } else
          throw new Error(r);
        w.length > 64 && (w = new k(A, !0).update(w).array());
        var P = [], K = [];
        for (E = 0; E < 64; ++E) {
          var j = w[E] || 0;
          P[E] = 92 ^ j, K[E] = 54 ^ j;
        }
        k.call(this, A, T), this.update(K), this.oKeyPad = P, this.inner = !0, this.sharedMemory = T;
      }
      N.prototype = new k(), N.prototype.finalize = function() {
        if (k.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var w = this.array();
          k.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(w), k.prototype.finalize.call(this);
        }
      };
      var y = b();
      y.sha256 = y, y.sha224 = b(!0), y.sha256.hmac = g(), y.sha224.hmac = g(!0), s ? e.exports = y : (n.sha256 = y.sha256, n.sha224 = y.sha224);
    })();
  })(Sn)), Sn.exports;
}
var Pa = cf();
async function uf(e) {
  const [r, t] = await Za(e), n = t.folder("Payload/"), i = r.CFBundleDisplayName || r.CFBundleName || null, o = r.CFBundleIdentifier || null;
  if (typeof i != "string" || typeof o != "string")
    throw "Invalid Info.plist: Missing required fields.";
  let s = [];
  const a = Object.keys(r).filter(
    (v) => v.startsWith("NS") && v.endsWith("UsageDescription")
  );
  for (const v of a) {
    const b = r[v];
    typeof b == "string" && s.push([v, b]);
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
  }, l = Pa.sha256(await e.arrayBuffer()), u = $a(r, l), h = r.CFBundleIcons, _ = h ? h.CFBundlePrimaryIcon : void 0;
  let f = [];
  if (_) {
    const v = _.CFBundleIconName;
    typeof v == "string" && f.push(v);
    const b = _.CFBundleIconFiles;
    if (Array.isArray(b))
      for (const x of b)
        typeof x == "string" && f.push(x);
  }
  if (f = Array.from(new Set(f)), f.length === 0) {
    const v = r.CFBundleIconFiles;
    if (Array.isArray(v))
      for (const b of v)
        typeof b == "string" && f.push(b);
  }
  if (f.length === 0)
    console.warn("Warning: no icon names found in Info.plist");
  else {
    const v = [], b = Object.keys(n.files).find(
      (d) => /^Payload\/.+\.app\/$/.test(d)
    );
    if (!b)
      throw new Error("Invalid IPA file: Missing .app folder in Payload.");
    const x = t.folder(b);
    if (await Promise.all(
      Object.entries(x.files).map(async ([d, g]) => {
        if (!g || g.dir)
          return;
        const N = (d.split("/").pop() ?? "").toLowerCase();
        for (const y of f) {
          const w = ["@3x", "@2x", ""];
          for (const A of w) {
            const T = `${y}${A}`;
            if (N === `${T.toLowerCase()}.png`) {
              const E = A === "@3x" ? 3 : A === "@2x" ? 2 : 1, I = await g.async("uint8array"), F = await af(I);
              v.push({
                path: d,
                scale: E,
                data: F
              });
            }
          }
        }
      })
    ), v.length > 0) {
      v.sort((g, k) => k.scale - g.scale);
      const d = v[0];
      return [c, u, d];
    }
  }
  return [c, u, null];
}
async function Za(e) {
  const r = await Cs.loadAsync(e);
  if (!r.files["Payload/"] || !r.files["Payload/"].dir)
    throw "Invalid IPA file: Missing Payload directory.";
  const n = r.folder("Payload/").file(/\.app\/Info\.plist$/)[0];
  if (!n)
    throw "Invalid IPA file: Missing Info.plist.";
  let i = await n.async("arraybuffer"), o = ll(i);
  if (typeof o != "object" || o === null)
    throw "Failed to parse Info.plist.";
  return [o, r];
}
function $a(e, r = null) {
  const t = e.CFBundleShortVersionString || "1.0.0", n = e.CFBundleVersion || "1";
  if (typeof t != "string" || typeof n != "string")
    throw "Invalid Info.plist: Missing required version fields.";
  return {
    version: t,
    build_version: n,
    download_url: "",
    changelog: null,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    checksum: r,
    status: "draft"
  };
}
async function ff(e, r) {
  const [t] = await Za(e), n = Pa.sha256(await e.arrayBuffer()), i = $a(t, n), o = await ae().from("versions").insert([
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
async function df(e, r, t, n, i) {
  const o = await uf(e);
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
    const { data: f, error: v } = await ae().storage.from("app-images").upload(`${t.user.id}/${u}/icon-${Date.now()}.png`, c.data, {
      contentType: "image/png"
    });
    if (v || !f)
      throw console.error(v), "Failed to upload app icon.";
    const { error: b } = await ae().from("apps").update({
      icon_path: f.path
    }).eq("id", u);
    if (i(), b)
      throw console.error(b), "Failed to update app with icon path.";
  }
  const h = {
    ...a,
    app_id: u,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  }, _ = await ae().from("versions").insert([h]).select().single();
  if (_.error)
    throw console.error(_.error), Ce(_.error, "version");
  n("/developers/app/" + u);
}
function hf(e) {
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
      checksum: null,
      status: "draft"
    });
  return [t, n];
}
async function pf(e, r, t, n) {
  if (!t)
    throw "You must be logged in to create an app.";
  const [i, o] = hf(e);
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
const _f = ({
  source: e,
  cancel: r
}) => {
  const [t, n] = Ee([]), { createApp: i, session: o, reloadApps: s } = Oe(), a = Ye();
  return /* @__PURE__ */ Z("div", { className: "prompt-modal", children: /* @__PURE__ */ q(ke, { className: "altstore-prompt", children: [
    /* @__PURE__ */ q("h2", { children: [
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
        children: /* @__PURE__ */ Z(gf, { app: c })
      },
      c.bundleIdentifier
    )) }),
    /* @__PURE__ */ q(
      "button",
      {
        disabled: t.length === 0,
        className: "import-altstore-button primary",
        onClick: async () => {
          let c = async () => {
            for (const l of t)
              await pf(
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
}, gf = ({ app: e }) => /* @__PURE__ */ q("div", { className: "app-title-container app-title-container-inline", children: [
  /* @__PURE__ */ Z(
    "img",
    {
      src: e.iconURL,
      className: "app-icon-img",
      onError: (r) => {
        r.currentTarget.src = "/default-icon.png";
      }
    }
  ),
  /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ Z("h1", { className: "app-title", children: e.name }),
    /* @__PURE__ */ Z("p", { className: "app-subtitle", children: e.subtitle || e.bundleIdentifier })
  ] })
] });
function M(e, r, t) {
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
    for (let h = 0; h < u.length; h++) {
      const _ = u[h];
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
class Rt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ua extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Ba = {};
function ut(e) {
  return Ba;
}
function mf(e) {
  const r = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, i]) => r.indexOf(+n) === -1).map(([n, i]) => i);
}
function Ln(e, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Qn(e) {
  return {
    get value() {
      {
        const r = e();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ei(e) {
  return e == null;
}
function ti(e) {
  const r = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(r, t);
}
function bf(e, r) {
  const t = (e.toString().split(".")[1] || "").length, n = r.toString();
  let i = (n.split(".")[1] || "").length;
  if (i === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c?.[1] && (i = Number.parseInt(c[1]));
  }
  const o = t > i ? t : i, s = Number.parseInt(e.toFixed(o).replace(".", "")), a = Number.parseInt(r.toFixed(o).replace(".", ""));
  return s % a / 10 ** o;
}
const vo = Symbol("evaluating");
function pe(e, r, t) {
  let n;
  Object.defineProperty(e, r, {
    get() {
      if (n !== vo)
        return n === void 0 && (n = vo, n = t()), n;
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
function Et(e, r, t) {
  Object.defineProperty(e, r, {
    value: t,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function At(...e) {
  const r = {};
  for (const t of e) {
    const n = Object.getOwnPropertyDescriptors(t);
    Object.assign(r, n);
  }
  return Object.defineProperties({}, r);
}
function wo(e) {
  return JSON.stringify(e);
}
function vf(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const La = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Dr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const wf = Qn(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Ut(e) {
  if (Dr(e) === !1)
    return !1;
  const r = e.constructor;
  if (r === void 0 || typeof r != "function")
    return !0;
  const t = r.prototype;
  return !(Dr(t) === !1 || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}
function Da(e) {
  return Ut(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const yf = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Bt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ht(e, r, t) {
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
function xf(e) {
  return Object.keys(e).filter((r) => e[r]._zod.optin === "optional" && e[r]._zod.optout === "optional");
}
const kf = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ef(e, r) {
  const t = e._zod.def, n = At(e._zod.def, {
    get shape() {
      const i = {};
      for (const o in r) {
        if (!(o in t.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        r[o] && (i[o] = t.shape[o]);
      }
      return Et(this, "shape", i), i;
    },
    checks: []
  });
  return ht(e, n);
}
function Af(e, r) {
  const t = e._zod.def, n = At(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const o in r) {
        if (!(o in t.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        r[o] && delete i[o];
      }
      return Et(this, "shape", i), i;
    },
    checks: []
  });
  return ht(e, n);
}
function Sf(e, r) {
  if (!Ut(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const t = e._zod.def.checks;
  if (t && t.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const i = At(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...r };
      return Et(this, "shape", o), o;
    },
    checks: []
  });
  return ht(e, i);
}
function Nf(e, r) {
  if (!Ut(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const t = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...r };
      return Et(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return ht(e, t);
}
function zf(e, r) {
  const t = At(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...r._zod.def.shape };
      return Et(this, "shape", n), n;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ht(e, t);
}
function If(e, r, t) {
  const n = At(r._zod.def, {
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
      return Et(this, "shape", o), o;
    },
    checks: []
  });
  return ht(r, n);
}
function Tf(e, r, t) {
  const n = At(r._zod.def, {
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
      return Et(this, "shape", o), o;
    },
    checks: []
  });
  return ht(r, n);
}
function It(e, r = 0) {
  if (e.aborted === !0)
    return !0;
  for (let t = r; t < e.issues.length; t++)
    if (e.issues[t]?.continue !== !0)
      return !0;
  return !1;
}
function Tt(e, r) {
  return r.map((t) => {
    var n;
    return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
  });
}
function Tr(e) {
  return typeof e == "string" ? e : e?.message;
}
function ft(e, r, t) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = Tr(e.inst?._zod.def?.error?.(e)) ?? Tr(r?.error?.(e)) ?? Tr(t.customError?.(e)) ?? Tr(t.localeError?.(e)) ?? "Invalid input";
    n.message = i;
  }
  return delete n.inst, delete n.continue, r?.reportInput || delete n.input, n;
}
function ri(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function dr(...e) {
  const [r, t, n] = e;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: t,
    inst: n
  } : { ...r };
}
const ja = (e, r) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: r,
    enumerable: !1
  }), e.message = JSON.stringify(r, Ln, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Ma = M("$ZodError", ja), Va = M("$ZodError", ja, { Parent: Error });
function Cf(e, r = (t) => t.message) {
  const t = {}, n = [];
  for (const i of e.issues)
    i.path.length > 0 ? (t[i.path[0]] = t[i.path[0]] || [], t[i.path[0]].push(r(i))) : n.push(r(i));
  return { formErrors: n, fieldErrors: t };
}
function Of(e, r = (t) => t.message) {
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
const ni = (e) => (r, t, n, i) => {
  const o = n ? Object.assign(n, { async: !1 }) : { async: !1 }, s = r._zod.run({ value: t, issues: [] }, o);
  if (s instanceof Promise)
    throw new Rt();
  if (s.issues.length) {
    const a = new (i?.Err ?? e)(s.issues.map((c) => ft(c, o, ut())));
    throw La(a, i?.callee), a;
  }
  return s.value;
}, ii = (e) => async (r, t, n, i) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = r._zod.run({ value: t, issues: [] }, o);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (i?.Err ?? e)(s.issues.map((c) => ft(c, o, ut())));
    throw La(a, i?.callee), a;
  }
  return s.value;
}, Gr = (e) => (r, t, n) => {
  const i = n ? { ...n, async: !1 } : { async: !1 }, o = r._zod.run({ value: t, issues: [] }, i);
  if (o instanceof Promise)
    throw new Rt();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? Ma)(o.issues.map((s) => ft(s, i, ut())))
  } : { success: !0, data: o.value };
}, Ff = /* @__PURE__ */ Gr(Va), qr = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let o = r._zod.run({ value: t, issues: [] }, i);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((s) => ft(s, i, ut())))
  } : { success: !0, data: o.value };
}, Rf = /* @__PURE__ */ qr(Va), Pf = (e) => (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ni(e)(r, t, i);
}, Zf = (e) => (r, t, n) => ni(e)(r, t, n), $f = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ii(e)(r, t, i);
}, Uf = (e) => async (r, t, n) => ii(e)(r, t, n), Bf = (e) => (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Gr(e)(r, t, i);
}, Lf = (e) => (r, t, n) => Gr(e)(r, t, n), Df = (e) => async (r, t, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return qr(e)(r, t, i);
}, jf = (e) => async (r, t, n) => qr(e)(r, t, n), Mf = /^[cC][^\s-]{8,}$/, Vf = /^[0-9a-z]+$/, Wf = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Hf = /^[0-9a-vA-V]{20}$/, Gf = /^[A-Za-z0-9]{27}$/, qf = /^[a-zA-Z0-9_-]{21}$/, Xf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, yo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Kf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Jf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Qf() {
  return new RegExp(Jf, "u");
}
const ed = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, td = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, rd = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, nd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, id = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Wa = /^[A-Za-z0-9_-]*$/, od = /^\+(?:[0-9]){6,14}[0-9]$/, Ha = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ad = /* @__PURE__ */ new RegExp(`^${Ha}$`);
function Ga(e) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${r}` : e.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${e.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function sd(e) {
  return new RegExp(`^${Ga(e)}$`);
}
function ld(e) {
  const r = Ga({ precision: e.precision }), t = ["Z"];
  e.local && t.push(""), e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${r}(?:${t.join("|")})`;
  return new RegExp(`^${Ha}T(?:${n})$`);
}
const cd = (e) => {
  const r = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, ud = /^-?\d+$/, fd = /^-?\d+(?:\.\d+)?/, dd = /^(?:true|false)$/i, hd = /^[^A-Z]*$/, pd = /^[^a-z]*$/, Fe = /* @__PURE__ */ M("$ZodCheck", (e, r) => {
  var t;
  e._zod ?? (e._zod = {}), e._zod.def = r, (t = e._zod).onattach ?? (t.onattach = []);
}), qa = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Xa = /* @__PURE__ */ M("$ZodCheckLessThan", (e, r) => {
  Fe.init(e, r);
  const t = qa[typeof r.value];
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
}), Ya = /* @__PURE__ */ M("$ZodCheckGreaterThan", (e, r) => {
  Fe.init(e, r);
  const t = qa[typeof r.value];
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
}), _d = /* @__PURE__ */ M("$ZodCheckMultipleOf", (e, r) => {
  Fe.init(e, r), e._zod.onattach.push((t) => {
    var n;
    (n = t._zod.bag).multipleOf ?? (n.multipleOf = r.value);
  }), e._zod.check = (t) => {
    if (typeof t.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof t.value == "bigint" ? t.value % r.value === BigInt(0) : bf(t.value, r.value) === 0) || t.issues.push({
      origin: typeof t.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), gd = /* @__PURE__ */ M("$ZodCheckNumberFormat", (e, r) => {
  Fe.init(e, r), r.format = r.format || "float64";
  const t = r.format?.includes("int"), n = t ? "int" : "number", [i, o] = kf[r.format];
  e._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = r.format, a.minimum = i, a.maximum = o, t && (a.pattern = ud);
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
}), md = /* @__PURE__ */ M("$ZodCheckMaxLength", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !ei(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (n._zod.bag.maximum = r.maximum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length <= r.maximum)
      return;
    const s = ri(i);
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
}), bd = /* @__PURE__ */ M("$ZodCheckMinLength", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !ei(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (n._zod.bag.minimum = r.minimum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length >= r.minimum)
      return;
    const s = ri(i);
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
}), vd = /* @__PURE__ */ M("$ZodCheckLengthEquals", (e, r) => {
  var t;
  Fe.init(e, r), (t = e._zod.def).when ?? (t.when = (n) => {
    const i = n.value;
    return !ei(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.minimum = r.length, i.maximum = r.length, i.length = r.length;
  }), e._zod.check = (n) => {
    const i = n.value, o = i.length;
    if (o === r.length)
      return;
    const s = ri(i), a = o > r.length;
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
}), Xr = /* @__PURE__ */ M("$ZodCheckStringFormat", (e, r) => {
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
}), wd = /* @__PURE__ */ M("$ZodCheckRegex", (e, r) => {
  Xr.init(e, r), e._zod.check = (t) => {
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
}), yd = /* @__PURE__ */ M("$ZodCheckLowerCase", (e, r) => {
  r.pattern ?? (r.pattern = hd), Xr.init(e, r);
}), xd = /* @__PURE__ */ M("$ZodCheckUpperCase", (e, r) => {
  r.pattern ?? (r.pattern = pd), Xr.init(e, r);
}), kd = /* @__PURE__ */ M("$ZodCheckIncludes", (e, r) => {
  Fe.init(e, r);
  const t = Bt(r.includes), n = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${t}` : t);
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
}), Ed = /* @__PURE__ */ M("$ZodCheckStartsWith", (e, r) => {
  Fe.init(e, r);
  const t = new RegExp(`^${Bt(r.prefix)}.*`);
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
}), Ad = /* @__PURE__ */ M("$ZodCheckEndsWith", (e, r) => {
  Fe.init(e, r);
  const t = new RegExp(`.*${Bt(r.suffix)}$`);
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
}), Sd = /* @__PURE__ */ M("$ZodCheckOverwrite", (e, r) => {
  Fe.init(e, r), e._zod.check = (t) => {
    t.value = r.tx(t.value);
  };
});
class Nd {
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
const zd = {
  major: 4,
  minor: 1,
  patch: 13
}, me = /* @__PURE__ */ M("$ZodType", (e, r) => {
  var t;
  e ?? (e = {}), e._zod.def = r, e._zod.bag = e._zod.bag || {}, e._zod.version = zd;
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
      let l = It(s), u;
      for (const h of a) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(s))
            continue;
        } else if (l)
          continue;
        const _ = s.issues.length, f = h._zod.check(s);
        if (f instanceof Promise && c?.async === !1)
          throw new Rt();
        if (u || f instanceof Promise)
          u = (u ?? Promise.resolve()).then(async () => {
            await f, s.issues.length !== _ && (l || (l = It(s, _)));
          });
        else {
          if (s.issues.length === _)
            continue;
          l || (l = It(s, _));
        }
      }
      return u ? u.then(() => s) : s;
    }, o = (s, a, c) => {
      if (It(s))
        return s.aborted = !0, s;
      const l = i(a, n, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new Rt();
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
          throw new Rt();
        return c.then((l) => i(l, n, a));
      }
      return i(c, n, a);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      try {
        const o = Ff(e, i);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return Rf(e, i).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), oi = /* @__PURE__ */ M("$ZodString", (e, r) => {
  me.init(e, r), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? cd(e._zod.bag), e._zod.parse = (t, n) => {
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
}), ge = /* @__PURE__ */ M("$ZodStringFormat", (e, r) => {
  Xr.init(e, r), oi.init(e, r);
}), Id = /* @__PURE__ */ M("$ZodGUID", (e, r) => {
  r.pattern ?? (r.pattern = Yf), ge.init(e, r);
}), Td = /* @__PURE__ */ M("$ZodUUID", (e, r) => {
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
    r.pattern ?? (r.pattern = yo(n));
  } else
    r.pattern ?? (r.pattern = yo());
  ge.init(e, r);
}), Cd = /* @__PURE__ */ M("$ZodEmail", (e, r) => {
  r.pattern ?? (r.pattern = Kf), ge.init(e, r);
}), Od = /* @__PURE__ */ M("$ZodURL", (e, r) => {
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
}), Fd = /* @__PURE__ */ M("$ZodEmoji", (e, r) => {
  r.pattern ?? (r.pattern = Qf()), ge.init(e, r);
}), Rd = /* @__PURE__ */ M("$ZodNanoID", (e, r) => {
  r.pattern ?? (r.pattern = qf), ge.init(e, r);
}), Pd = /* @__PURE__ */ M("$ZodCUID", (e, r) => {
  r.pattern ?? (r.pattern = Mf), ge.init(e, r);
}), Zd = /* @__PURE__ */ M("$ZodCUID2", (e, r) => {
  r.pattern ?? (r.pattern = Vf), ge.init(e, r);
}), $d = /* @__PURE__ */ M("$ZodULID", (e, r) => {
  r.pattern ?? (r.pattern = Wf), ge.init(e, r);
}), Ud = /* @__PURE__ */ M("$ZodXID", (e, r) => {
  r.pattern ?? (r.pattern = Hf), ge.init(e, r);
}), Bd = /* @__PURE__ */ M("$ZodKSUID", (e, r) => {
  r.pattern ?? (r.pattern = Gf), ge.init(e, r);
}), Ld = /* @__PURE__ */ M("$ZodISODateTime", (e, r) => {
  r.pattern ?? (r.pattern = ld(r)), ge.init(e, r);
}), Dd = /* @__PURE__ */ M("$ZodISODate", (e, r) => {
  r.pattern ?? (r.pattern = ad), ge.init(e, r);
}), jd = /* @__PURE__ */ M("$ZodISOTime", (e, r) => {
  r.pattern ?? (r.pattern = sd(r)), ge.init(e, r);
}), Md = /* @__PURE__ */ M("$ZodISODuration", (e, r) => {
  r.pattern ?? (r.pattern = Xf), ge.init(e, r);
}), Vd = /* @__PURE__ */ M("$ZodIPv4", (e, r) => {
  r.pattern ?? (r.pattern = ed), ge.init(e, r), e._zod.bag.format = "ipv4";
}), Wd = /* @__PURE__ */ M("$ZodIPv6", (e, r) => {
  r.pattern ?? (r.pattern = td), ge.init(e, r), e._zod.bag.format = "ipv6", e._zod.check = (t) => {
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
}), Hd = /* @__PURE__ */ M("$ZodCIDRv4", (e, r) => {
  r.pattern ?? (r.pattern = rd), ge.init(e, r);
}), Gd = /* @__PURE__ */ M("$ZodCIDRv6", (e, r) => {
  r.pattern ?? (r.pattern = nd), ge.init(e, r), e._zod.check = (t) => {
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
function Ka(e) {
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
const qd = /* @__PURE__ */ M("$ZodBase64", (e, r) => {
  r.pattern ?? (r.pattern = id), ge.init(e, r), e._zod.bag.contentEncoding = "base64", e._zod.check = (t) => {
    Ka(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
});
function Xd(e) {
  if (!Wa.test(e))
    return !1;
  const r = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), t = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Ka(t);
}
const Yd = /* @__PURE__ */ M("$ZodBase64URL", (e, r) => {
  r.pattern ?? (r.pattern = Wa), ge.init(e, r), e._zod.bag.contentEncoding = "base64url", e._zod.check = (t) => {
    Xd(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), Kd = /* @__PURE__ */ M("$ZodE164", (e, r) => {
  r.pattern ?? (r.pattern = od), ge.init(e, r);
});
function Jd(e, r = null) {
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
const Qd = /* @__PURE__ */ M("$ZodJWT", (e, r) => {
  ge.init(e, r), e._zod.check = (t) => {
    Jd(t.value, r.alg) || t.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: t.value,
      inst: e,
      continue: !r.abort
    });
  };
}), Ja = /* @__PURE__ */ M("$ZodNumber", (e, r) => {
  me.init(e, r), e._zod.pattern = e._zod.bag.pattern ?? fd, e._zod.parse = (t, n) => {
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
}), eh = /* @__PURE__ */ M("$ZodNumberFormat", (e, r) => {
  gd.init(e, r), Ja.init(e, r);
}), th = /* @__PURE__ */ M("$ZodBoolean", (e, r) => {
  me.init(e, r), e._zod.pattern = dd, e._zod.parse = (t, n) => {
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
}), rh = /* @__PURE__ */ M("$ZodUnknown", (e, r) => {
  me.init(e, r), e._zod.parse = (t) => t;
}), nh = /* @__PURE__ */ M("$ZodNever", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => (t.issues.push({
    expected: "never",
    code: "invalid_type",
    input: t.value,
    inst: e
  }), t);
});
function xo(e, r, t) {
  e.issues.length && r.issues.push(...Tt(t, e.issues)), r.value[t] = e.value;
}
const ih = /* @__PURE__ */ M("$ZodArray", (e, r) => {
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
      c instanceof Promise ? o.push(c.then((l) => xo(l, t, s))) : xo(c, t, s);
    }
    return o.length ? Promise.all(o).then(() => t) : t;
  };
});
function jr(e, r, t, n) {
  e.issues.length && r.issues.push(...Tt(t, e.issues)), e.value === void 0 ? t in n && (r.value[t] = void 0) : r.value[t] = e.value;
}
function Qa(e) {
  const r = Object.keys(e.shape);
  for (const n of r)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const t = xf(e.shape);
  return {
    ...e,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(t)
  };
}
function es(e, r, t, n, i, o) {
  const s = [], a = i.keySet, c = i.catchall._zod, l = c.def.type;
  for (const u in r) {
    if (a.has(u))
      continue;
    if (l === "never") {
      s.push(u);
      continue;
    }
    const h = c.run({ value: r[u], issues: [] }, n);
    h instanceof Promise ? e.push(h.then((_) => jr(_, t, u, r))) : jr(h, t, u, r);
  }
  return s.length && t.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: r,
    inst: o
  }), e.length ? Promise.all(e).then(() => t) : t;
}
const oh = /* @__PURE__ */ M("$ZodObject", (e, r) => {
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
  const n = Qn(() => Qa(r));
  pe(e._zod, "propValues", () => {
    const a = r.shape, c = {};
    for (const l in a) {
      const u = a[l]._zod;
      if (u.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const h of u.values)
          c[l].add(h);
      }
    }
    return c;
  });
  const i = Dr, o = r.catchall;
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
    const u = [], h = s.shape;
    for (const _ of s.keys) {
      const v = h[_]._zod.run({ value: l[_], issues: [] }, c);
      v instanceof Promise ? u.push(v.then((b) => jr(b, a, _, l))) : jr(v, a, _, l);
    }
    return o ? es(u, l, a, c, n.value, e) : u.length ? Promise.all(u).then(() => a) : a;
  };
}), ah = /* @__PURE__ */ M("$ZodObjectJIT", (e, r) => {
  oh.init(e, r);
  const t = e._zod.parse, n = Qn(() => Qa(r)), i = (_) => {
    const f = new Nd(["shape", "payload", "ctx"]), v = n.value, b = (k) => {
      const N = wo(k);
      return `shape[${N}]._zod.run({ value: input[${N}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let d = 0;
    for (const k of v.keys)
      x[k] = `key_${d++}`;
    f.write("const newResult = {};");
    for (const k of v.keys) {
      const N = x[k], y = wo(k);
      f.write(`const ${N} = ${b(k)};`), f.write(`
        if (${N}.issues.length) {
          payload.issues = payload.issues.concat(${N}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${y}, ...iss.path] : [${y}]
          })));
        }
        
        
        if (${N}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${N}.value;
        }
        
      `);
    }
    f.write("payload.value = newResult;"), f.write("return payload;");
    const g = f.compile();
    return (k, N) => g(_, k, N);
  };
  let o;
  const s = Dr, a = !Ba.jitless, l = a && wf.value, u = r.catchall;
  let h;
  e._zod.parse = (_, f) => {
    h ?? (h = n.value);
    const v = _.value;
    return s(v) ? a && l && f?.async === !1 && f.jitless !== !0 ? (o || (o = i(r.shape)), _ = o(_, f), u ? es([], v, _, f, h, e) : _) : t(_, f) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), _);
  };
});
function ko(e, r, t, n) {
  for (const o of e)
    if (o.issues.length === 0)
      return r.value = o.value, r;
  const i = e.filter((o) => !It(o));
  return i.length === 1 ? (r.value = i[0].value, i[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: t,
    errors: e.map((o) => o.issues.map((s) => ft(s, n, ut())))
  }), r);
}
const sh = /* @__PURE__ */ M("$ZodUnion", (e, r) => {
  me.init(e, r), pe(e._zod, "optin", () => r.options.some((i) => i._zod.optin === "optional") ? "optional" : void 0), pe(e._zod, "optout", () => r.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), pe(e._zod, "values", () => {
    if (r.options.every((i) => i._zod.values))
      return new Set(r.options.flatMap((i) => Array.from(i._zod.values)));
  }), pe(e._zod, "pattern", () => {
    if (r.options.every((i) => i._zod.pattern)) {
      const i = r.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${i.map((o) => ti(o.source)).join("|")})$`);
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
    return s ? Promise.all(a).then((c) => ko(c, i, e, o)) : ko(a, i, e, o);
  };
}), lh = /* @__PURE__ */ M("$ZodIntersection", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    const i = t.value, o = r.left._zod.run({ value: i, issues: [] }, n), s = r.right._zod.run({ value: i, issues: [] }, n);
    return o instanceof Promise || s instanceof Promise ? Promise.all([o, s]).then(([c, l]) => Eo(t, c, l)) : Eo(t, o, s);
  };
});
function Dn(e, r) {
  if (e === r)
    return { valid: !0, data: e };
  if (e instanceof Date && r instanceof Date && +e == +r)
    return { valid: !0, data: e };
  if (Ut(e) && Ut(r)) {
    const t = Object.keys(r), n = Object.keys(e).filter((o) => t.indexOf(o) !== -1), i = { ...e, ...r };
    for (const o of n) {
      const s = Dn(e[o], r[o]);
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
      const i = e[n], o = r[n], s = Dn(i, o);
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
function Eo(e, r, t) {
  if (r.issues.length && e.issues.push(...r.issues), t.issues.length && e.issues.push(...t.issues), It(e))
    return e;
  const n = Dn(r.value, t.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const ch = /* @__PURE__ */ M("$ZodRecord", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    const i = t.value;
    if (!Ut(i))
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
          u instanceof Promise ? o.push(u.then((h) => {
            h.issues.length && t.issues.push(...Tt(l, h.issues)), t.value[l] = h.value;
          })) : (u.issues.length && t.issues.push(...Tt(l, u.issues)), t.value[l] = u.value);
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
          u.issues.length && t.issues.push(...Tt(a, u.issues)), t.value[c.value] = u.value;
        })) : (l.issues.length && t.issues.push(...Tt(a, l.issues)), t.value[c.value] = l.value);
      }
    }
    return o.length ? Promise.all(o).then(() => t) : t;
  };
}), uh = /* @__PURE__ */ M("$ZodEnum", (e, r) => {
  me.init(e, r);
  const t = mf(r.entries), n = new Set(t);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.filter((i) => yf.has(typeof i)).map((i) => typeof i == "string" ? Bt(i) : i.toString()).join("|")})$`), e._zod.parse = (i, o) => {
    const s = i.value;
    return n.has(s) || i.issues.push({
      code: "invalid_value",
      values: t,
      input: s,
      inst: e
    }), i;
  };
}), fh = /* @__PURE__ */ M("$ZodLiteral", (e, r) => {
  if (me.init(e, r), r.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const t = new Set(r.values);
  e._zod.values = t, e._zod.pattern = new RegExp(`^(${r.values.map((n) => typeof n == "string" ? Bt(n) : n ? Bt(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, i) => {
    const o = n.value;
    return t.has(o) || n.issues.push({
      code: "invalid_value",
      values: r.values,
      input: o,
      inst: e
    }), n;
  };
}), dh = /* @__PURE__ */ M("$ZodTransform", (e, r) => {
  me.init(e, r), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      throw new Ua(e.constructor.name);
    const i = r.transform(t.value, t);
    if (n.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((s) => (t.value = s, t));
    if (i instanceof Promise)
      throw new Rt();
    return t.value = i, t;
  };
});
function Ao(e, r) {
  return e.issues.length && r === void 0 ? { issues: [], value: void 0 } : e;
}
const hh = /* @__PURE__ */ M("$ZodOptional", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", e._zod.optout = "optional", pe(e._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), pe(e._zod, "pattern", () => {
    const t = r.innerType._zod.pattern;
    return t ? new RegExp(`^(${ti(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, n) => {
    if (r.innerType._zod.optin === "optional") {
      const i = r.innerType._zod.run(t, n);
      return i instanceof Promise ? i.then((o) => Ao(o, t.value)) : Ao(i, t.value);
    }
    return t.value === void 0 ? t : r.innerType._zod.run(t, n);
  };
}), ph = /* @__PURE__ */ M("$ZodNullable", (e, r) => {
  me.init(e, r), pe(e._zod, "optin", () => r.innerType._zod.optin), pe(e._zod, "optout", () => r.innerType._zod.optout), pe(e._zod, "pattern", () => {
    const t = r.innerType._zod.pattern;
    return t ? new RegExp(`^(${ti(t.source)}|null)$`) : void 0;
  }), pe(e._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), e._zod.parse = (t, n) => t.value === null ? t : r.innerType._zod.run(t, n);
}), _h = /* @__PURE__ */ M("$ZodDefault", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", pe(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      return r.innerType._zod.run(t, n);
    if (t.value === void 0)
      return t.value = r.defaultValue, t;
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => So(o, r)) : So(i, r);
  };
});
function So(e, r) {
  return e.value === void 0 && (e.value = r.defaultValue), e;
}
const gh = /* @__PURE__ */ M("$ZodPrefault", (e, r) => {
  me.init(e, r), e._zod.optin = "optional", pe(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => (n.direction === "backward" || t.value === void 0 && (t.value = r.defaultValue), r.innerType._zod.run(t, n));
}), mh = /* @__PURE__ */ M("$ZodNonOptional", (e, r) => {
  me.init(e, r), pe(e._zod, "values", () => {
    const t = r.innerType._zod.values;
    return t ? new Set([...t].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (t, n) => {
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => No(o, e)) : No(i, e);
  };
});
function No(e, r) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: r
  }), e;
}
const bh = /* @__PURE__ */ M("$ZodCatch", (e, r) => {
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
}), vh = /* @__PURE__ */ M("$ZodPipe", (e, r) => {
  me.init(e, r), pe(e._zod, "values", () => r.in._zod.values), pe(e._zod, "optin", () => r.in._zod.optin), pe(e._zod, "optout", () => r.out._zod.optout), pe(e._zod, "propValues", () => r.in._zod.propValues), e._zod.parse = (t, n) => {
    if (n.direction === "backward") {
      const o = r.out._zod.run(t, n);
      return o instanceof Promise ? o.then((s) => Cr(s, r.in, n)) : Cr(o, r.in, n);
    }
    const i = r.in._zod.run(t, n);
    return i instanceof Promise ? i.then((o) => Cr(o, r.out, n)) : Cr(i, r.out, n);
  };
});
function Cr(e, r, t) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: e.value, issues: e.issues }, t);
}
const wh = /* @__PURE__ */ M("$ZodReadonly", (e, r) => {
  me.init(e, r), pe(e._zod, "propValues", () => r.innerType._zod.propValues), pe(e._zod, "values", () => r.innerType._zod.values), pe(e._zod, "optin", () => r.innerType?._zod?.optin), pe(e._zod, "optout", () => r.innerType?._zod?.optout), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      return r.innerType._zod.run(t, n);
    const i = r.innerType._zod.run(t, n);
    return i instanceof Promise ? i.then(zo) : zo(i);
  };
});
function zo(e) {
  return e.value = Object.freeze(e.value), e;
}
const yh = /* @__PURE__ */ M("$ZodCustom", (e, r) => {
  Fe.init(e, r), me.init(e, r), e._zod.parse = (t, n) => t, e._zod.check = (t) => {
    const n = t.value, i = r.fn(n);
    if (i instanceof Promise)
      return i.then((o) => Io(o, t, n, e));
    Io(i, t, n, e);
  };
});
function Io(e, r, t, n) {
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
    n._zod.def.params && (i.params = n._zod.def.params), r.issues.push(dr(i));
  }
}
var To;
class xh {
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
function kh() {
  return new xh();
}
(To = globalThis).__zod_globalRegistry ?? (To.__zod_globalRegistry = kh());
const Or = globalThis.__zod_globalRegistry;
function Eh(e, r) {
  return new e({
    type: "string",
    ...te(r)
  });
}
function Ah(e, r) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Co(e, r) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Sh(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Nh(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...te(r)
  });
}
function zh(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...te(r)
  });
}
function Ih(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...te(r)
  });
}
function Th(e, r) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Ch(e, r) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Oh(e, r) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Fh(e, r) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Rh(e, r) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Ph(e, r) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Zh(e, r) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function $h(e, r) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Uh(e, r) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Bh(e, r) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Lh(e, r) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Dh(e, r) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function jh(e, r) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Mh(e, r) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Vh(e, r) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Wh(e, r) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...te(r)
  });
}
function Hh(e, r) {
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
function Gh(e, r) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...te(r)
  });
}
function qh(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...te(r)
  });
}
function Xh(e, r) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...te(r)
  });
}
function Yh(e, r) {
  return new e({
    type: "number",
    checks: [],
    ...te(r)
  });
}
function Kh(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...te(r)
  });
}
function Jh(e, r) {
  return new e({
    type: "boolean",
    ...te(r)
  });
}
function Qh(e) {
  return new e({
    type: "unknown"
  });
}
function ep(e, r) {
  return new e({
    type: "never",
    ...te(r)
  });
}
function Oo(e, r) {
  return new Xa({
    check: "less_than",
    ...te(r),
    value: e,
    inclusive: !1
  });
}
function Nn(e, r) {
  return new Xa({
    check: "less_than",
    ...te(r),
    value: e,
    inclusive: !0
  });
}
function Fo(e, r) {
  return new Ya({
    check: "greater_than",
    ...te(r),
    value: e,
    inclusive: !1
  });
}
function zn(e, r) {
  return new Ya({
    check: "greater_than",
    ...te(r),
    value: e,
    inclusive: !0
  });
}
function Ro(e, r) {
  return new _d({
    check: "multiple_of",
    ...te(r),
    value: e
  });
}
function ts(e, r) {
  return new md({
    check: "max_length",
    ...te(r),
    maximum: e
  });
}
function Mr(e, r) {
  return new bd({
    check: "min_length",
    ...te(r),
    minimum: e
  });
}
function rs(e, r) {
  return new vd({
    check: "length_equals",
    ...te(r),
    length: e
  });
}
function tp(e, r) {
  return new wd({
    check: "string_format",
    format: "regex",
    ...te(r),
    pattern: e
  });
}
function rp(e) {
  return new yd({
    check: "string_format",
    format: "lowercase",
    ...te(e)
  });
}
function np(e) {
  return new xd({
    check: "string_format",
    format: "uppercase",
    ...te(e)
  });
}
function ip(e, r) {
  return new kd({
    check: "string_format",
    format: "includes",
    ...te(r),
    includes: e
  });
}
function op(e, r) {
  return new Ed({
    check: "string_format",
    format: "starts_with",
    ...te(r),
    prefix: e
  });
}
function ap(e, r) {
  return new Ad({
    check: "string_format",
    format: "ends_with",
    ...te(r),
    suffix: e
  });
}
function Mt(e) {
  return new Sd({
    check: "overwrite",
    tx: e
  });
}
function sp(e) {
  return Mt((r) => r.normalize(e));
}
function lp() {
  return Mt((e) => e.trim());
}
function cp() {
  return Mt((e) => e.toLowerCase());
}
function up() {
  return Mt((e) => e.toUpperCase());
}
function fp() {
  return Mt((e) => vf(e));
}
function dp(e, r, t) {
  return new e({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...te(t)
  });
}
function hp(e, r, t) {
  return new e({
    type: "custom",
    check: "custom",
    fn: r,
    ...te(t)
  });
}
function pp(e) {
  const r = _p((t) => (t.addIssue = (n) => {
    if (typeof n == "string")
      t.issues.push(dr(n, t.value, r._zod.def));
    else {
      const i = n;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), t.issues.push(dr(i));
    }
  }, e(t.value, t)));
  return r;
}
function _p(e, r) {
  const t = new Fe({
    check: "custom",
    ...te(r)
  });
  return t._zod.check = e, t;
}
const gp = /* @__PURE__ */ M("ZodISODateTime", (e, r) => {
  Ld.init(e, r), be.init(e, r);
});
function mp(e) {
  return Hh(gp, e);
}
const bp = /* @__PURE__ */ M("ZodISODate", (e, r) => {
  Dd.init(e, r), be.init(e, r);
});
function vp(e) {
  return Gh(bp, e);
}
const wp = /* @__PURE__ */ M("ZodISOTime", (e, r) => {
  jd.init(e, r), be.init(e, r);
});
function yp(e) {
  return qh(wp, e);
}
const xp = /* @__PURE__ */ M("ZodISODuration", (e, r) => {
  Md.init(e, r), be.init(e, r);
});
function kp(e) {
  return Xh(xp, e);
}
const Ep = (e, r) => {
  Ma.init(e, r), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (t) => Of(e, t)
      // enumerable: false,
    },
    flatten: {
      value: (t) => Cf(e, t)
      // enumerable: false,
    },
    addIssue: {
      value: (t) => {
        e.issues.push(t), e.message = JSON.stringify(e.issues, Ln, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (t) => {
        e.issues.push(...t), e.message = JSON.stringify(e.issues, Ln, 2);
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
}, Le = M("ZodError", Ep, {
  Parent: Error
}), Ap = /* @__PURE__ */ ni(Le), Sp = /* @__PURE__ */ ii(Le), Np = /* @__PURE__ */ Gr(Le), zp = /* @__PURE__ */ qr(Le), Ip = /* @__PURE__ */ Pf(Le), Tp = /* @__PURE__ */ Zf(Le), Cp = /* @__PURE__ */ $f(Le), Op = /* @__PURE__ */ Uf(Le), Fp = /* @__PURE__ */ Bf(Le), Rp = /* @__PURE__ */ Lf(Le), Pp = /* @__PURE__ */ Df(Le), Zp = /* @__PURE__ */ jf(Le), ve = /* @__PURE__ */ M("ZodType", (e, r) => (me.init(e, r), e.def = r, e.type = r.type, Object.defineProperty(e, "_def", { value: r }), e.check = (...t) => e.clone(At(r, {
  checks: [
    ...r.checks ?? [],
    ...t.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (t, n) => ht(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => Ap(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Np(e, t, n), e.parseAsync = async (t, n) => Sp(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => zp(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Ip(e, t, n), e.decode = (t, n) => Tp(e, t, n), e.encodeAsync = async (t, n) => Cp(e, t, n), e.decodeAsync = async (t, n) => Op(e, t, n), e.safeEncode = (t, n) => Fp(e, t, n), e.safeDecode = (t, n) => Rp(e, t, n), e.safeEncodeAsync = async (t, n) => Pp(e, t, n), e.safeDecodeAsync = async (t, n) => Zp(e, t, n), e.refine = (t, n) => e.check(I0(t, n)), e.superRefine = (t) => e.check(T0(t)), e.overwrite = (t) => e.check(Mt(t)), e.optional = () => Uo(e), e.nullable = () => Bo(e), e.nullish = () => Uo(Bo(e)), e.nonoptional = (t) => x0(e, t), e.array = () => ct(e), e.or = (t) => rr([e, t]), e.and = (t) => f0(e, t), e.transform = (t) => Lo(e, g0(t)), e.default = (t) => v0(e, t), e.prefault = (t) => y0(e, t), e.catch = (t) => E0(e, t), e.pipe = (t) => Lo(e, t), e.readonly = () => N0(e), e.describe = (t) => {
  const n = e.clone();
  return Or.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return Or.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...t) => {
  if (t.length === 0)
    return Or.get(e);
  const n = e.clone();
  return Or.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ns = /* @__PURE__ */ M("_ZodString", (e, r) => {
  oi.init(e, r), ve.init(e, r);
  const t = e._zod.bag;
  e.format = t.format ?? null, e.minLength = t.minimum ?? null, e.maxLength = t.maximum ?? null, e.regex = (...n) => e.check(tp(...n)), e.includes = (...n) => e.check(ip(...n)), e.startsWith = (...n) => e.check(op(...n)), e.endsWith = (...n) => e.check(ap(...n)), e.min = (...n) => e.check(Mr(...n)), e.max = (...n) => e.check(ts(...n)), e.length = (...n) => e.check(rs(...n)), e.nonempty = (...n) => e.check(Mr(1, ...n)), e.lowercase = (n) => e.check(rp(n)), e.uppercase = (n) => e.check(np(n)), e.trim = () => e.check(lp()), e.normalize = (...n) => e.check(sp(...n)), e.toLowerCase = () => e.check(cp()), e.toUpperCase = () => e.check(up()), e.slugify = () => e.check(fp());
}), $p = /* @__PURE__ */ M("ZodString", (e, r) => {
  oi.init(e, r), ns.init(e, r), e.email = (t) => e.check(Ah(Up, t)), e.url = (t) => e.check(Th(Bp, t)), e.jwt = (t) => e.check(Wh(e0, t)), e.emoji = (t) => e.check(Ch(Lp, t)), e.guid = (t) => e.check(Co(Po, t)), e.uuid = (t) => e.check(Sh(Fr, t)), e.uuidv4 = (t) => e.check(Nh(Fr, t)), e.uuidv6 = (t) => e.check(zh(Fr, t)), e.uuidv7 = (t) => e.check(Ih(Fr, t)), e.nanoid = (t) => e.check(Oh(Dp, t)), e.guid = (t) => e.check(Co(Po, t)), e.cuid = (t) => e.check(Fh(jp, t)), e.cuid2 = (t) => e.check(Rh(Mp, t)), e.ulid = (t) => e.check(Ph(Vp, t)), e.base64 = (t) => e.check(jh(Kp, t)), e.base64url = (t) => e.check(Mh(Jp, t)), e.xid = (t) => e.check(Zh(Wp, t)), e.ksuid = (t) => e.check($h(Hp, t)), e.ipv4 = (t) => e.check(Uh(Gp, t)), e.ipv6 = (t) => e.check(Bh(qp, t)), e.cidrv4 = (t) => e.check(Lh(Xp, t)), e.cidrv6 = (t) => e.check(Dh(Yp, t)), e.e164 = (t) => e.check(Vh(Qp, t)), e.datetime = (t) => e.check(mp(t)), e.date = (t) => e.check(vp(t)), e.time = (t) => e.check(yp(t)), e.duration = (t) => e.check(kp(t));
});
function se(e) {
  return Eh($p, e);
}
const be = /* @__PURE__ */ M("ZodStringFormat", (e, r) => {
  ge.init(e, r), ns.init(e, r);
}), Up = /* @__PURE__ */ M("ZodEmail", (e, r) => {
  Cd.init(e, r), be.init(e, r);
}), Po = /* @__PURE__ */ M("ZodGUID", (e, r) => {
  Id.init(e, r), be.init(e, r);
}), Fr = /* @__PURE__ */ M("ZodUUID", (e, r) => {
  Td.init(e, r), be.init(e, r);
}), Bp = /* @__PURE__ */ M("ZodURL", (e, r) => {
  Od.init(e, r), be.init(e, r);
}), Lp = /* @__PURE__ */ M("ZodEmoji", (e, r) => {
  Fd.init(e, r), be.init(e, r);
}), Dp = /* @__PURE__ */ M("ZodNanoID", (e, r) => {
  Rd.init(e, r), be.init(e, r);
}), jp = /* @__PURE__ */ M("ZodCUID", (e, r) => {
  Pd.init(e, r), be.init(e, r);
}), Mp = /* @__PURE__ */ M("ZodCUID2", (e, r) => {
  Zd.init(e, r), be.init(e, r);
}), Vp = /* @__PURE__ */ M("ZodULID", (e, r) => {
  $d.init(e, r), be.init(e, r);
}), Wp = /* @__PURE__ */ M("ZodXID", (e, r) => {
  Ud.init(e, r), be.init(e, r);
}), Hp = /* @__PURE__ */ M("ZodKSUID", (e, r) => {
  Bd.init(e, r), be.init(e, r);
}), Gp = /* @__PURE__ */ M("ZodIPv4", (e, r) => {
  Vd.init(e, r), be.init(e, r);
}), qp = /* @__PURE__ */ M("ZodIPv6", (e, r) => {
  Wd.init(e, r), be.init(e, r);
}), Xp = /* @__PURE__ */ M("ZodCIDRv4", (e, r) => {
  Hd.init(e, r), be.init(e, r);
}), Yp = /* @__PURE__ */ M("ZodCIDRv6", (e, r) => {
  Gd.init(e, r), be.init(e, r);
}), Kp = /* @__PURE__ */ M("ZodBase64", (e, r) => {
  qd.init(e, r), be.init(e, r);
}), Jp = /* @__PURE__ */ M("ZodBase64URL", (e, r) => {
  Yd.init(e, r), be.init(e, r);
}), Qp = /* @__PURE__ */ M("ZodE164", (e, r) => {
  Kd.init(e, r), be.init(e, r);
}), e0 = /* @__PURE__ */ M("ZodJWT", (e, r) => {
  Qd.init(e, r), be.init(e, r);
}), is = /* @__PURE__ */ M("ZodNumber", (e, r) => {
  Ja.init(e, r), ve.init(e, r), e.gt = (n, i) => e.check(Fo(n, i)), e.gte = (n, i) => e.check(zn(n, i)), e.min = (n, i) => e.check(zn(n, i)), e.lt = (n, i) => e.check(Oo(n, i)), e.lte = (n, i) => e.check(Nn(n, i)), e.max = (n, i) => e.check(Nn(n, i)), e.int = (n) => e.check(Zo(n)), e.safe = (n) => e.check(Zo(n)), e.positive = (n) => e.check(Fo(0, n)), e.nonnegative = (n) => e.check(zn(0, n)), e.negative = (n) => e.check(Oo(0, n)), e.nonpositive = (n) => e.check(Nn(0, n)), e.multipleOf = (n, i) => e.check(Ro(n, i)), e.step = (n, i) => e.check(Ro(n, i)), e.finite = () => e;
  const t = e._zod.bag;
  e.minValue = Math.max(t.minimum ?? Number.NEGATIVE_INFINITY, t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(t.maximum ?? Number.POSITIVE_INFINITY, t.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5), e.isFinite = !0, e.format = t.format ?? null;
});
function jn(e) {
  return Yh(is, e);
}
const t0 = /* @__PURE__ */ M("ZodNumberFormat", (e, r) => {
  eh.init(e, r), is.init(e, r);
});
function Zo(e) {
  return Kh(t0, e);
}
const r0 = /* @__PURE__ */ M("ZodBoolean", (e, r) => {
  th.init(e, r), ve.init(e, r);
});
function n0(e) {
  return Jh(r0, e);
}
const i0 = /* @__PURE__ */ M("ZodUnknown", (e, r) => {
  rh.init(e, r), ve.init(e, r);
});
function $o() {
  return Qh(i0);
}
const o0 = /* @__PURE__ */ M("ZodNever", (e, r) => {
  nh.init(e, r), ve.init(e, r);
});
function a0(e) {
  return ep(o0, e);
}
const s0 = /* @__PURE__ */ M("ZodArray", (e, r) => {
  ih.init(e, r), ve.init(e, r), e.element = r.element, e.min = (t, n) => e.check(Mr(t, n)), e.nonempty = (t) => e.check(Mr(1, t)), e.max = (t, n) => e.check(ts(t, n)), e.length = (t, n) => e.check(rs(t, n)), e.unwrap = () => e.element;
});
function ct(e, r) {
  return dp(s0, e, r);
}
const l0 = /* @__PURE__ */ M("ZodObject", (e, r) => {
  ah.init(e, r), ve.init(e, r), pe(e, "shape", () => r.shape), e.keyof = () => h0(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: $o() }), e.loose = () => e.clone({ ...e._zod.def, catchall: $o() }), e.strict = () => e.clone({ ...e._zod.def, catchall: a0() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (t) => Sf(e, t), e.safeExtend = (t) => Nf(e, t), e.merge = (t) => zf(e, t), e.pick = (t) => Ef(e, t), e.omit = (t) => Af(e, t), e.partial = (...t) => If(as, e, t[0]), e.required = (...t) => Tf(ss, e, t[0]);
});
function Vt(e, r) {
  const t = {
    type: "object",
    shape: e ?? {},
    ...te(r)
  };
  return new l0(t);
}
const c0 = /* @__PURE__ */ M("ZodUnion", (e, r) => {
  sh.init(e, r), ve.init(e, r), e.options = r.options;
});
function rr(e, r) {
  return new c0({
    type: "union",
    options: e,
    ...te(r)
  });
}
const u0 = /* @__PURE__ */ M("ZodIntersection", (e, r) => {
  lh.init(e, r), ve.init(e, r);
});
function f0(e, r) {
  return new u0({
    type: "intersection",
    left: e,
    right: r
  });
}
const d0 = /* @__PURE__ */ M("ZodRecord", (e, r) => {
  ch.init(e, r), ve.init(e, r), e.keyType = r.keyType, e.valueType = r.valueType;
});
function os(e, r, t) {
  return new d0({
    type: "record",
    keyType: e,
    valueType: r,
    ...te(t)
  });
}
const Mn = /* @__PURE__ */ M("ZodEnum", (e, r) => {
  uh.init(e, r), ve.init(e, r), e.enum = r.entries, e.options = Object.values(r.entries);
  const t = new Set(Object.keys(r.entries));
  e.extract = (n, i) => {
    const o = {};
    for (const s of n)
      if (t.has(s))
        o[s] = r.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Mn({
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
    return new Mn({
      ...r,
      checks: [],
      ...te(i),
      entries: o
    });
  };
});
function h0(e, r) {
  const t = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Mn({
    type: "enum",
    entries: t,
    ...te(r)
  });
}
const p0 = /* @__PURE__ */ M("ZodLiteral", (e, r) => {
  fh.init(e, r), ve.init(e, r), e.values = new Set(r.values), Object.defineProperty(e, "value", {
    get() {
      if (r.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return r.values[0];
    }
  });
});
function He(e, r) {
  return new p0({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...te(r)
  });
}
const _0 = /* @__PURE__ */ M("ZodTransform", (e, r) => {
  dh.init(e, r), ve.init(e, r), e._zod.parse = (t, n) => {
    if (n.direction === "backward")
      throw new Ua(e.constructor.name);
    t.addIssue = (o) => {
      if (typeof o == "string")
        t.issues.push(dr(o, t.value, r));
      else {
        const s = o;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = t.value), s.inst ?? (s.inst = e), t.issues.push(dr(s));
      }
    };
    const i = r.transform(t.value, t);
    return i instanceof Promise ? i.then((o) => (t.value = o, t)) : (t.value = i, t);
  };
});
function g0(e) {
  return new _0({
    type: "transform",
    transform: e
  });
}
const as = /* @__PURE__ */ M("ZodOptional", (e, r) => {
  hh.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function Uo(e) {
  return new as({
    type: "optional",
    innerType: e
  });
}
const m0 = /* @__PURE__ */ M("ZodNullable", (e, r) => {
  ph.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function Bo(e) {
  return new m0({
    type: "nullable",
    innerType: e
  });
}
const b0 = /* @__PURE__ */ M("ZodDefault", (e, r) => {
  _h.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function v0(e, r) {
  return new b0({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : Da(r);
    }
  });
}
const w0 = /* @__PURE__ */ M("ZodPrefault", (e, r) => {
  gh.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function y0(e, r) {
  return new w0({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : Da(r);
    }
  });
}
const ss = /* @__PURE__ */ M("ZodNonOptional", (e, r) => {
  mh.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function x0(e, r) {
  return new ss({
    type: "nonoptional",
    innerType: e,
    ...te(r)
  });
}
const k0 = /* @__PURE__ */ M("ZodCatch", (e, r) => {
  bh.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function E0(e, r) {
  return new k0({
    type: "catch",
    innerType: e,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const A0 = /* @__PURE__ */ M("ZodPipe", (e, r) => {
  vh.init(e, r), ve.init(e, r), e.in = r.in, e.out = r.out;
});
function Lo(e, r) {
  return new A0({
    type: "pipe",
    in: e,
    out: r
    // ...util.normalizeParams(params),
  });
}
const S0 = /* @__PURE__ */ M("ZodReadonly", (e, r) => {
  wh.init(e, r), ve.init(e, r), e.unwrap = () => e._zod.def.innerType;
});
function N0(e) {
  return new S0({
    type: "readonly",
    innerType: e
  });
}
const z0 = /* @__PURE__ */ M("ZodCustom", (e, r) => {
  yh.init(e, r), ve.init(e, r);
});
function I0(e, r = {}) {
  return hp(z0, e, r);
}
function T0(e) {
  return pp(e);
}
const Do = rr([se(), Vt({
  imageURL: se(),
  width: jn().optional(),
  height: jn().optional()
})]), C0 = Vt({
  version: se(),
  buildVersion: se().optional(),
  marketingVersion: se().optional(),
  date: se(),
  downloadURL: se(),
  localizedDescription: se().optional(),
  size: jn().optional(),
  minOSVersion: se().optional(),
  maxOSVersion: se().optional()
}), O0 = Vt({
  entitlements: ct(se()).optional(),
  privacy: os(se(), se()).optional()
}), F0 = Vt({
  name: se(),
  bundleIdentifier: se(),
  developerName: se(),
  subtitle: se().optional(),
  localizedDescription: se(),
  iconURL: se(),
  tintColor: se().optional(),
  screenshots: rr([ct(Do), os(rr([He("iphone"), He("ipad")]), ct(Do))]).optional(),
  versions: ct(C0),
  appPermissions: O0.optional(),
  category: rr([He("developer"), He("entertainment"), He("games"), He("lifestyle"), He("other"), He("photo-video"), He("social"), He("utilities")]).optional()
}), R0 = Vt({
  title: se(),
  identifier: se(),
  caption: se().optional(),
  date: se(),
  tintColor: se().optional(),
  imageURL: se().optional(),
  notify: n0().optional(),
  url: se().optional(),
  appID: se().optional()
}), P0 = Vt({
  name: se(),
  subtitle: se().optional(),
  description: se().optional(),
  iconURL: se().optional(),
  headerURL: se().optional(),
  website: se().optional(),
  tintColor: se().optional(),
  featuredApps: ct(se()).optional(),
  apps: ct(F0),
  news: ct(R0).optional()
}), Z0 = {
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
}, Y0 = () => {
  const { session: e, createApp: r, reloadApps: t } = Oe(), n = Ye(), i = Pt(null), o = Pt(null), [s, a] = Ee(null);
  return /* @__PURE__ */ q("div", { className: "developer-container", children: [
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
    /* @__PURE__ */ q("section", { className: "developer-page", children: [
      /* @__PURE__ */ q(ke, { className: "import-ipa", children: [
        /* @__PURE__ */ q("div", { children: [
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
              let u = df(
                l,
                r,
                e,
                n,
                t
              );
              oe.promise(u, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (h) => "Failed to import IPA: " + String(h)
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
                let h = await l.text(), _ = JSON.parse(h), f = P0.parse(_);
                a(f);
              };
              oe.promise(u(), {
                loading: "Loading AltStore Source...",
                success: "AltStore Source loaded successfully!",
                error: (h) => (console.error(h), "Failed to load AltStore Source: " + String(h))
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ Z(
        qo,
        {
          label: "Or, manually create",
          app: Z0,
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
        _f,
        {
          source: s,
          cancel: () => {
            a(null);
          }
        }
      )
    ] })
  ] });
}, jo = [
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
], ls = ({
  version: e,
  save: r,
  titleOverride: t
}) => {
  const [n, i] = Ee(e);
  return nt(() => {
    i(e);
  }, [e]), /* @__PURE__ */ Z(ke, { children: /* @__PURE__ */ q("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ q("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ Z("h2", { children: t ?? "Version Metadata" }),
      /* @__PURE__ */ q("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ Z("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    jo.map((o) => /* @__PURE__ */ Z(
      Go,
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
          for (const s of jo)
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
}, $0 = {
  build_version: "",
  changelog: null,
  created_at: (/* @__PURE__ */ new Date()).toISOString(),
  download_url: "",
  version: "",
  checksum: null,
  status: "draft"
}, K0 = () => {
  const { id: e } = dt(), { apps: r, session: t } = Oe(), n = Ye(), i = Pt(null), o = r.find((s) => s.id === Number(e));
  return o ? /* @__PURE__ */ q("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(
      nr,
      {
        app: o,
        showBackToApp: !0,
        backToAppPage: "versions",
        titleOverride: `New Version for ${o.name}`
      }
    ),
    /* @__PURE__ */ q("section", { className: "developer-page", children: [
      /* @__PURE__ */ q(ke, { className: "import-ipa", children: [
        /* @__PURE__ */ q("div", { children: [
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
              let c = ff(a, o);
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
        ls,
        {
          titleOverride: "Or, manually create",
          version: $0,
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
}, cs = Wo(void 0), J0 = ({
  children: e
}) => {
  const [r, t] = Ee(
    null
  ), n = (o) => {
    t(o);
  }, i = () => {
    t(null);
  };
  return /* @__PURE__ */ q(cs.Provider, { value: { showPrompt: n, hidePrompt: i }, children: [
    e,
    r && /* @__PURE__ */ Z("div", { className: "prompt-modal", children: /* @__PURE__ */ q(ke, { children: [
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
}, us = () => {
  const e = _s(cs);
  if (!e)
    throw new Error("usePrompt must be used within a PromptProvider");
  return e;
}, Q0 = () => {
  const { id: e, versionId: r } = dt(), { apps: t, reloadApps: n } = Oe(), i = t.find((h) => h.id === Number(e)), [o, s] = Ee(!0), [a, c] = Ee(null), { showPrompt: l } = us(), u = Ye();
  return nt(() => {
    (async () => {
      if (!i) return;
      const { data: _, error: f } = await ae().from("versions").select("*").eq("app_id", i.id).eq("id", Number(r)).single();
      s(!1), f ? (console.error(f), oe.error(Ce(f, "version"))) : c(_);
    })();
  }, [i]), i ? !a && !o ? /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "Version Not Found" }) }) : o || !a ? /* @__PURE__ */ Z("div", { className: "developer-container app-page-container", children: /* @__PURE__ */ Z(nr, { app: i, showBackToApp: !0 }) }) : /* @__PURE__ */ q("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(
      nr,
      {
        app: i,
        titleOverride: `Version ${a.version} (${a.build_version})`,
        subtitleOverride: i.name,
        showBackToApp: !0,
        backToAppPage: "versions"
      }
    ),
    /* @__PURE__ */ q("section", { className: "developer-page", children: [
      /* @__PURE__ */ Z(
        ls,
        {
          version: a,
          save: async (h) => {
            const _ = await ae().from("versions").update(h).eq("id", Number(a?.id)).single();
            _.error ? (console.error(_.error), oe.error(Ce(_.error, "version"))) : (oe.success("Version updated successfully"), n());
          }
        }
      ),
      /* @__PURE__ */ q(ke, { className: "app-subcard management-card delete-version-card", children: [
        /* @__PURE__ */ Z("div", { children: /* @__PURE__ */ Z("h2", { children: "Review Status" }) }),
        /* @__PURE__ */ q("p", { children: [
          "Current Status:",
          " ",
          /* @__PURE__ */ Z("strong", { style: { textTransform: "capitalize" }, children: a.status.charAt(0).toUpperCase() + a.status.slice(1) })
        ] })
      ] }),
      /* @__PURE__ */ q(ke, { className: "app-subcard management-card delete-version-card", children: [
        /* @__PURE__ */ q("div", { children: [
          /* @__PURE__ */ Z("h2", { style: { marginBottom: "0.5rem" }, children: "Delete Version" }),
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
                      const h = await ae().from("versions").delete().eq("id", a.id);
                      h.error ? (console.error(h.error), oe.error(
                        Ce(h.error, "version")
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
}, U0 = [
  "info",
  "permissions",
  "versions",
  "screenshots",
  "management"
], e_ = () => {
  const e = Ye(), r = ms(), { id: t } = dt(), { apps: n } = Oe(), i = n.find((s) => s.id === Number(t)), o = r.pathname.split("/")[4] || "info";
  return i ? /* @__PURE__ */ q("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ Z(nr, { app: i }),
    /* @__PURE__ */ Z(ke, { className: "tab-buttons", children: U0.map((s) => /* @__PURE__ */ Z(
      "h3",
      {
        className: "text-link" + (o === s ? " text-link-active" : ""),
        onClick: () => e(`/developers/app/${i.id}/${s}`),
        children: s.charAt(0).toUpperCase() + s.slice(1)
      },
      s
    )) }),
    /* @__PURE__ */ Z(bs, {})
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, t_ = () => {
  const { id: e } = dt(), { apps: r, reloadApps: t, uploadIcon: n } = Oe(), i = r.find((a) => a.id === Number(e)), o = Pt(null), s = Vn(
    () => i?.icon_path ? ae().storage.from("app-images").getPublicUrl(i.icon_path).data.publicUrl : "/default-icon.png",
    [i?.icon_path]
  );
  return i ? /* @__PURE__ */ q("section", { className: "developer-page", children: [
    /* @__PURE__ */ Z(
      qo,
      {
        style: { flexGrow: 2 },
        app: i,
        save: async (a) => {
          const c = await ae().from("apps").update(a).eq("id", Number(i.id)).single();
          c.error ? (console.error(c.error), oe.error(Ce(c.error, "app"))) : (oe.success("App updated successfully"), t());
        }
      }
    ),
    /* @__PURE__ */ q(ke, { className: "app-subcard icon-card", children: [
      /* @__PURE__ */ q("div", { children: [
        /* @__PURE__ */ Z("h2", { style: { margin: 0 }, children: "App Icon" }),
        /* @__PURE__ */ Z("p", { className: "app-subtext", children: "Icons will be masked to an iOS style shape." })
      ] }),
      /* @__PURE__ */ Z("img", { src: s, className: "app-icon-img" }),
      /* @__PURE__ */ q("div", { style: { width: "100%" }, children: [
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
}, r_ = () => {
  const { id: e } = dt(), { apps: r, reloadApps: t } = Oe(), n = r.find((c) => c.id === Number(e)), [i, o] = Ee(() => n ? n.entitlements || [] : []), [s, a] = Ee(() => n ? n.privacy || [] : []);
  return nt(() => {
    n && o(n.entitlements || []);
  }, [n?.entitlements]), nt(() => {
    n && a(n.privacy || []);
  }, [n?.privacy]), n ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ q("div", { className: "entitlements-container", children: [
    /* @__PURE__ */ q(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ q("div", { children: [
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
    /* @__PURE__ */ q(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ q("div", { children: [
        /* @__PURE__ */ Z("h2", { children: "Entitlements" }),
        /* @__PURE__ */ q("p", { className: "app-subtext", children: [
          "List all entitelements except",
          " ",
          /* @__PURE__ */ Z("span", { className: "entitlement-text", children: "com.app.developer.team-identifier" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ Z("span", { className: "entitlement-text", children: "application-identifier" })
        ] })
      ] }),
      /* @__PURE__ */ q("ul", { children: [
        i.length === 0 && /* @__PURE__ */ Z("p", { children: "No entitlements added yet." }),
        i.map((c, l) => /* @__PURE__ */ q("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ Z(
            "input",
            {
              type: "text",
              value: c,
              onChange: (u) => {
                const h = u.target.value;
                o((_) => {
                  const f = [..._];
                  return f[l] = h, f;
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
                o((u) => u.filter((h, _) => _ !== l));
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
    /* @__PURE__ */ q(ke, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ q("div", { children: [
        /* @__PURE__ */ Z("h2", { children: "Privacy Info" }),
        /* @__PURE__ */ Z("p", { className: "app-subtext", children: "List all usage descriptions from your Info.plist" })
      ] }),
      /* @__PURE__ */ q("ul", { children: [
        s.length === 0 && /* @__PURE__ */ Z("p", { children: "No privacy entries added yet." }),
        s.map((c, l) => /* @__PURE__ */ q("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ Z(
            "input",
            {
              type: "text",
              value: c[0],
              onChange: (u) => {
                const h = u.target.value;
                a((_) => {
                  const f = [..._];
                  return f[l][0] = h, f;
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
                const h = u.target.value;
                a((_) => {
                  const f = [..._];
                  return f[l][1] = h, f;
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
                a((u) => u.filter((h, _) => _ !== l));
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
}, n_ = () => {
  const { id: e } = dt(), { apps: r } = Oe(), t = Ye(), n = r.find((c) => c.id === Number(e)), [i, o] = Ee(!0), [s, a] = Ee([]);
  return nt(() => {
    (async () => {
      if (!n) return;
      const { data: l, error: u } = await ae().from("versions").select("*").eq("app_id", n.id).order("created_at", { ascending: !1 });
      u ? (console.error(u), oe.error(Ce(u, "version"))) : a(l), o(!1);
    })();
  }, [n]), n ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ q(ke, { className: "app-subcard versions-card", children: [
    /* @__PURE__ */ Z("h2", { children: "Versions" }),
    s.length === 0 && !i && /* @__PURE__ */ Z("p", { className: "app-subtext", children: "It seems you don't have any versions yet. Let's change that!" }),
    /* @__PURE__ */ Z("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: s.map((c) => /* @__PURE__ */ q(
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
}, Mo = ({
  isIpad: e,
  app: r
}) => {
  const { uploadScreenshot: t } = Oe(), n = Pt(null);
  return /* @__PURE__ */ q("div", { className: "screenshots-inner", children: [
    /* @__PURE__ */ Z("div", { className: "screenshots-grid", children: (e ? r.ipad_screenshots : r.iphone_screenshots).map(
      (i, o) => /* @__PURE__ */ Z(
        B0,
        {
          screenshot: i,
          app: r,
          isIpad: e
        },
        o
      )
    ) }),
    /* @__PURE__ */ q("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ Z(
        "button",
        {
          onClick: () => {
            n.current?.click();
          },
          children: "Upload New Screenshot"
        }
      ),
      /* @__PURE__ */ q(
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
}, B0 = ({
  screenshot: e,
  app: r,
  isIpad: t
}) => {
  const n = Vn(
    () => e ? ae().storage.from("app-images").getPublicUrl(e.path).data.publicUrl : "/default-icon.png",
    [e]
  ), { reloadApps: i } = Oe();
  let o = e.width, s = e.height, a = o / s, c = Math.min(400, 400 * a), l = c / a;
  return /* @__PURE__ */ q("div", { className: "screenshot-image-container", children: [
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
          const h = t ? "ipad_screenshots" : "iphone_screenshots", _ = r[h].filter((v) => v.path !== e.path), f = await ae().from("apps").update({
            [h]: _
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
}, i_ = () => {
  const { id: e } = dt(), { apps: r } = Oe(), t = r.find((n) => n.id === Number(e));
  return t ? /* @__PURE__ */ q("section", { className: "developer-page", children: [
    /* @__PURE__ */ q(ke, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ Z("h2", { children: "iPhone Screenshots" }),
      /* @__PURE__ */ Z("div", { className: "screenshots-container", children: /* @__PURE__ */ Z(Mo, { isIpad: !1, app: t }) })
    ] }),
    /* @__PURE__ */ q(ke, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ Z("h2", { children: "iPad Screenshots" }),
      /* @__PURE__ */ Z("div", { className: "screenshots-container", children: /* @__PURE__ */ Z(Mo, { isIpad: !0, app: t }) })
    ] })
  ] }) : /* @__PURE__ */ Z("div", { className: "developer-container", children: /* @__PURE__ */ Z("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
};
async function L0(e, r, t) {
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
const o_ = () => {
  const { id: e } = dt(), { apps: r, reloadApps: t } = Oe(), n = Ye(), i = r.find((s) => s.id === Number(e)), { showPrompt: o } = us();
  return i ? /* @__PURE__ */ Z("section", { className: "developer-page", children: /* @__PURE__ */ q(ke, { className: "app-subcard management-card", children: [
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
                  L0(i, n, t);
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
  q0 as AccountSettings,
  t_ as AppInfo,
  e_ as AppLayout,
  o_ as AppManagement,
  r_ as AppPermissions,
  i_ as AppScreenshots,
  n_ as AppVersions,
  X0 as Developer,
  G0 as DeveloperProvider,
  As as Dropdown,
  Ss as DropdownOption,
  ke as GlassCard,
  Y0 as NewApp,
  K0 as NewVersion,
  J0 as PromptProvider,
  Q0 as Version,
  ws as beautifyAuthError,
  Ce as beautifyPostgrestError,
  ae as getSupabase,
  H0 as initSupabase,
  us as usePrompt,
  Oe as useSession
};
//# sourceMappingURL=main.js.map
