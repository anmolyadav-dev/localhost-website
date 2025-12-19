import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";

/**
 * Returns the authenticated user/team id from the incoming request.
 *
 * Supports:
 * - NextAuth JWT cookie (preferred)
 * - Legacy "token" cookie / Authorization: Bearer token (fallback)
 */
export async function getDataFromToken(
  request: NextRequest
): Promise<string | null> {
  // 1) NextAuth JWT (default for NextAuth when no adapter is configured)
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const id =
      (typeof token?.sub === "string" && token.sub) ||
      (typeof (token as any)?.id === "string" && (token as any).id) ||
      (typeof (token as any)?._id === "string" && (token as any)._id);

    if (id) return id;
  } catch {
    // Ignore and try fallback mechanisms
  }

  // 2) Fallback JWT (cookie or Bearer token)
  const bearer = request.headers.get("authorization");
  const bearerToken = bearer?.startsWith("Bearer ")
    ? bearer.slice("Bearer ".length)
    : undefined;

  const cookieToken = request.cookies.get("token")?.value;
  const rawToken = bearerToken || cookieToken;
  if (!rawToken) return null;

  const secret =
    process.env.TOKEN_SECRET ||
    process.env.JWT_SECRET ||
    process.env.NEXTAUTH_SECRET;
  if (!secret) return null;

  try {
    const decoded = jwt.verify(rawToken, secret) as any;

    const id =
      (typeof decoded?.id === "string" && decoded.id) ||
      (typeof decoded?.userId === "string" && decoded.userId) ||
      (typeof decoded?._id === "string" && decoded._id) ||
      (typeof decoded?.teamId === "string" && decoded.teamId);

    return id || null;
  } catch {
    return null;
  }
}
