import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authenticated = true;

  if (request.nextUrl.pathname.startsWith("/posts") && !authenticated) {
    console.log("Blocked access!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
