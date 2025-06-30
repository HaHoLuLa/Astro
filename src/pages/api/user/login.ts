import type { APIContext } from "astro";
import { db, eq, and, User } from "astro:db";

export async function POST({ request, session, redirect }: APIContext) {
  let username: string | null = null;
  let password: string | null = null;

  // Content-Type 에 따라 분기
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    username = body.username;
    password = body.password;
  } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    username = form.get("username") as string;
    password = form.get("password") as string;
  }

  // 유효성 검사
  if (!username || !password) {
    return new Response("Missing credentials", { status: 400 });
  }

  // DB에서 유저 검증
  const user = await db.select()
    .from(User)
    .where(and(eq(User.name, username), eq(User.password, password)));

  if (!user.length) {
    return new Response("Invalid credentials", { status: 401 });
  }

  // 세션에 저장
  session?.set("user", user[0].name);

  // 요청이 JSON인지 Form인지에 따라 응답
  if (contentType.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return redirect("/"); // Form submit이면 redirect
  }
}
