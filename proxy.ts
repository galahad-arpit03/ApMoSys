import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /administrator routes except the login page itself
  if (
    pathname.startsWith("/administrator") &&
    pathname !== "/administrator/login"
  ) {
    const isAuthenticated = request.cookies.get("admin-authenticated")?.value;

    if (!isAuthenticated || isAuthenticated !== "true") {
      const loginUrl = new URL("/administrator/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Skip files and API routes, and administrator paths
  if (
    pathname.includes(".") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/administrator") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
