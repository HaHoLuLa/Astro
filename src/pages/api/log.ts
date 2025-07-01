import type { APIContext } from "astro";
import { db, Log } from "astro:db";

export async function POST({ request, session }: APIContext) {
  
  let logs: string | null = null;

  // Content-Type에 따라 분기
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    logs = body.logs;
  } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    logs = form.get("logs") as string;
  }

  // 유효성 검사
  if (!logs) {
    return new Response("Missing logs", { status: 400 });
  }

  // 로그 저장
  await db.insert(Log).values({ logs, timestamp: new Date() });

  return new Response(JSON.stringify({ message: "Logs saved successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}