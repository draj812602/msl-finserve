import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/auth/password";
import { signToken } from "@/lib/auth/jwt";
import { success, error } from "@/lib/api/response";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return error(parsed.error.issues[0]?.message ?? "Invalid input", 400);
    }
    const { name, email, password } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return error("Email already registered", 409);
    }

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role: "customer",
      },
    });

    const token = await signToken({
      sub: user.id,
      email: user.email,
      role: "customer",
    });

    const isProd = process.env.NODE_ENV === "production";
    const response = success({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${isProd ? "; Secure" : ""}`
    );
    return response;
  } catch (e) {
    console.error("Register error:", e);
    return error("Internal server error", 500);
  }
}
