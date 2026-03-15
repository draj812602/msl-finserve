import type { ApiResponse } from "@/types";

export function success<T>(data: T, status = 200): Response {
  return Response.json({ data } satisfies ApiResponse<T>, { status });
}

export function error(message: string, status = 400): Response {
  return Response.json(
    { error: message } satisfies ApiResponse<never>,
    { status }
  );
}

export function unauthorized(message = "Unauthorized"): Response {
  return error(message, 401);
}

export function forbidden(message = "Forbidden"): Response {
  return error(message, 403);
}
