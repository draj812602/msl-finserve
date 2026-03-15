import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "change-me-in-production-min-32-chars"
);

const publicPaths = ["/", "/about", "/services", "/contact"];
const authPaths = ["/login", "/register"];
const dashboardPrefix = "/dashboard";
const adminAuthPath = "/admin/login";
const adminPrefix = "/admin";

function isPublic(pathname: string): boolean {
  return publicPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

function isAuthPath(pathname: string): boolean {
  return authPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

function isDashboard(pathname: string): boolean {
  return pathname.startsWith(dashboardPrefix);
}

function isAdmin(pathname: string): boolean {
  return pathname.startsWith(adminPrefix);
}

function isAdminLogin(pathname: string): boolean {
  return pathname === adminAuthPath;
}

async function verifyJWT(token: string): Promise<{ sub: string; role: string } | null> {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    return {
      sub: payload.sub as string,
      role: (payload.role as string) ?? "customer",
    };
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Public pages - allow
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Customer auth pages (login, register)
  if (isAuthPath(pathname)) {
    if (token) {
      const payload = await verifyJWT(token);
      if (payload) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
      }
    }
    return NextResponse.next();
  }

  // Admin login
  if (isAdminLogin(pathname)) {
    if (token) {
      const payload = await verifyJWT(token);
      if (payload?.role === "admin") {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/dashboard";
        return NextResponse.redirect(url);
      }
    }
    return NextResponse.next();
  }

  // Dashboard (customer) - require auth
  if (isDashboard(pathname)) {
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
    const payload = await verifyJWT(token);
    if (!payload) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (payload.role !== "admin") {
      return NextResponse.next();
    }
  }

  // Admin area (except login) - require admin
  if (isAdmin(pathname) && !isAdminLogin(pathname)) {
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
    const payload = await verifyJWT(token);
    if (!payload) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    if (payload.role !== "admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
