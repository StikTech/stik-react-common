import type { AuthError, PostgrestError } from "@supabase/supabase-js";

export function beautifyAuthError(error: AuthError): string {
  switch (error.message.toLowerCase()) {
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
  return error.message;
}

export function beautifyPostgrestError(
  error: PostgrestError,
  noun: string
): string {
  if (
    error.message
      .toLowerCase()
      .includes("duplicate key value violates unique constraint")
  ) {
    let value = error.message.split('"')[1].split("_"); // table_value_name_key
    value.shift();
    value.pop();
    if (value.join(" ") === "app id build version") value = ["build version"];

    let useAn =
      noun.toLowerCase().startsWith("a") ||
      noun.toLowerCase().startsWith("e") ||
      noun.toLowerCase().startsWith("i") ||
      noun.toLowerCase().startsWith("o") ||
      noun.toLowerCase().startsWith("u");

    return `A${useAn ? "n" : ""} ${noun} with the same ${value.join(
      " "
    )} already exists.`;
  }

  if (
    error.message
      .toLowerCase()
      .includes("cannot coerce the result to a single json object")
  ) {
    return `The specified ${noun} does not exist.`;
  }

  return error.message;
}
