import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/password";
import { signToken } from "@/lib/auth/jwt";
import { success, error } from "@/lib/api/response";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  admin: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return error(parsed.error.issues[0]?.message ?? "Invalid input", 400);
    }
    const { email, password, admin } = parsed.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return error("Invalid email or password", 401);
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      return error("Invalid email or password", 401);
    }

    if (admin && user.role !== "admin") {
      return error("Admin access required", 403);
    }

    const token = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role as "admin" | "customer",
    });

    const isProd = process.env.NODE_ENV === "production";
    const response = success({ token, user: { id: user.id, email: user.email, role: user.role } });
    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${isProd ? "; Secure" : ""}`
    );
    return response;
  } catch (e) {
    console.error("Login error:", e);
    return error("Internal server error", 500);
  }
}
