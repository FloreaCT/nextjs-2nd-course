import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname != "/login")
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.json({ data: "Hello World" });
}

export const config = {
  matcher: ["/userlist/:path*"],
};
