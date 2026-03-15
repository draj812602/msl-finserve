import type { User, Account, Transaction, Report } from "@prisma/client";

export type { User, Account, Transaction, Report };

export type UserRole = "admin" | "customer";

export interface JWTPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}
