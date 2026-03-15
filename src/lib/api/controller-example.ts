/**
 * Example API controller pattern for MSL Financial Services.
 * Use this as a reference for consistent request/response handling.
 */

import { NextRequest } from "next/server";
import { getTokenFromRequest } from "@/lib/auth/jwt";
import { verifyToken } from "@/lib/auth/jwt";
import { success, error, unauthorized } from "@/lib/api/response";

export async function exampleGetHandler(request: NextRequest) {
  const token = getTokenFromRequest(request) ?? request.cookies.get("token")?.value;
  if (!token) return unauthorized();
  const payload = await verifyToken(token);
  if (!payload) return unauthorized();

  try {
    // Your business logic here (e.g. prisma.user.findMany(...))
    const data = { message: "Example response", userId: payload.sub };
    return success(data);
  } catch (e) {
    console.error("Example error:", e);
    return error("Internal server error", 500);
  }
}
