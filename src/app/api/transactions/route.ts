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
    const transactions = isAdmin
      ? await prisma.transaction.findMany({
          include: { account: { select: { userId: true, accountType: true } } },
          orderBy: { createdAt: "desc" },
          take: 100,
        })
      : await prisma.transaction.findMany({
          where: { account: { userId: payload.sub } },
          include: { account: { select: { accountType: true } } },
          orderBy: { createdAt: "desc" },
          take: 100,
        });
    return success(transactions);
  } catch (e) {
    console.error("Transactions list error:", e);
    return error("Internal server error", 500);
  }
}
