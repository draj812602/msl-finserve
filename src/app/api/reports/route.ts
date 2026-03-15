import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getTokenFromRequest } from "@/lib/auth/jwt";
import { verifyToken } from "@/lib/auth/jwt";
import { success, error, unauthorized } from "@/lib/api/response";

export async function GET(request: NextRequest) {
  const token = getTokenFromRequest(request) ?? request.cookies.get("token")?.value;
  if (!token) return unauthorized();
  const payload = await verifyToken(token);
  if (!payload) return unauthorized();

  try {
    const isAdmin = payload.role === "admin";
    const reports = isAdmin
      ? await prisma.report.findMany({
          include: { user: { select: { name: true, email: true } } },
          orderBy: { createdAt: "desc" },
        })
      : await prisma.report.findMany({
          where: { userId: payload.sub },
          orderBy: { createdAt: "desc" },
        });
    return success(reports);
  } catch (e) {
    console.error("Reports list error:", e);
    return error("Internal server error", 500);
  }
}
