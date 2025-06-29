import type { APIContext } from "astro";

export async function GET({ session, url }: APIContext) {
  const user = url.searchParams.get("user");
  if (!user && user !== "undefined" && user !== "") {
    session?.destroy();
  } else {
    session?.set("user", user);
  }
  console.log(session);
  return new Response(
    JSON.stringify({
      user,
    })
  );
}
