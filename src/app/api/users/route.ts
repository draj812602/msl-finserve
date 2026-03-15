import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getTokenFromRequest } from "@/lib/auth/jwt";
import { verifyToken } from "@/lib/auth/jwt";
import { success, error, unauthorized, forbidden } from "@/lib/api/response";

export async function GET(request: NextRequest) {
  const token = getTokenFromRequest(request) ?? request.cookies.get("token")?.value;
  if (!token) return unauthorized();
  const payload = await verifyToken(token);
  if (!payload) return unauthorized();
  if (payload.role !== "admin") return forbidden("Admin only");

  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    return success(users);
  } catch (e) {
    console.error("Users list error:", e);
    return error("Internal server error", 500);
  }
}
