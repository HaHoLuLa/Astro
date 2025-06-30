import type { APIContext } from "astro";

export async function GET({  }: APIContext) {
  return new Response(
    JSON.stringify({
      message: "Hello, AI!",
      description: "This is a simple AI response from Astro.",
    }))
}