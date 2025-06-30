import type { APIContext } from "astro";

export async function POST({ request, session, redirect }: APIContext) {
  session?.destroy();

  const contentType = request.headers.get("accept") ?? "";

  if (contentType.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Logged out" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  return redirect("/");
}
