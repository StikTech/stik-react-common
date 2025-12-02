import { toast } from "sonner";
import { getSupabase } from "./supabase";
import { beautifyPostgrestError, type DBApp } from "../main";

export default async function deleteApp(
  app: DBApp,
  navigate: (path: string) => void,
  reloadApps: () => void
) {
  const user = await getSupabase().auth.getUser();
  if (user.error || !user.data.user) {
    toast.error("You must be logged in to delete an app.");
    return;
  }
  const res = await getSupabase().from("apps").delete().eq("id", app.id);

  if (res.error) {
    console.error(res.error);
    toast.error(beautifyPostgrestError(res.error, "app"));
    return;
  }

  const { data: list, error: listError } = await getSupabase()
    .storage.from("app-images")
    .list(`${user.data.user.id}/${app.id}`);

  if (listError) {
    console.error(listError);
    toast.error(
      "Successfully deleted app, but failed to list images to delete: " +
        listError.message
    );
    navigate("/developers");
    reloadApps();
    return;
  }
  const filesToRemove = list.map(
    (x) => `${user.data.user.id}/${app.id}/${x.name}`
  );

  if (filesToRemove.length === 0) {
    toast.success("App deleted successfully.");
    navigate("/developers");
    reloadApps();
    return;
  }
  const { error: removeError } = await getSupabase()
    .storage.from("app-images")
    .remove(filesToRemove);

  if (removeError) {
    console.error(removeError);
    toast.error(
      "Successfully deleted app, but failed to delete images: " +
        removeError.message
    );
    navigate("/developers");
    reloadApps();
    return;
  }

  toast.success("App deleted successfully.");
  navigate("/developers");
  reloadApps();
}
