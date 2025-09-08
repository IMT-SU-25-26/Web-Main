import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

const ROUTE_PERMISSIONS: Record<string, Role[]> = {
  "/dashboard/sa": [Role.SA, Role.LECTURER, Role.TECH],
  "/dashboard/pr": [Role.PR, Role.TECH],
  "/dashboard/tech": [Role.TECH],
  "/dashboard/pulse": [Role.PULSE, Role.TECH],
};

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    if (!token?.role) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    for (const [route, allowedRoles] of Object.entries(ROUTE_PERMISSIONS)) {
      if (pathname.startsWith(route)) {
        if (!allowedRoles.includes(token.role as Role)) {
          return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
