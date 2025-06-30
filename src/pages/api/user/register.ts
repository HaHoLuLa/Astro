import type { APIContext } from "astro";
import { db, eq, User } from "astro:db";

export async function POST({ request, session, redirect }: APIContext) {
  let username: string | null = null;
  let password: string | null = null;

  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    username = body.username;
    password = body.password;
  } else if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    username = form.get("username") as string;
    password = form.get("password") as string;
  }

  // 유효성 검사
  if (!username || !password) {
    return new Response("Missing credentials", { status: 400 });
  }

  // 이미 존재하는 유저인지 확인
  const exists = await db.select().from(User).where(eq(User.name, username));
  if (exists.length) {
    return new Response("이미 존재하는 사용자입니다.", { status: 409 });
  }

  // 유저 생성
  await db.insert(User).values({ name: username, password });
  session?.set("user", username);

  if (contentType.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Register successful" }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return redirect("/");
  }
}
