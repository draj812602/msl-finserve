import { NextRequest, NextResponse } from "next/server";
import { success } from "@/lib/api/response";

export async function POST() {
  const response = success({ ok: true });
  response.headers.set(
    "Set-Cookie",
    "token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );
  return response;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/";
  const response = NextResponse.redirect(url);
  response.headers.set(
    "Set-Cookie",
    "token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );
  return response;
}
