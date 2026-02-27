import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export { auth as proxy } from "@/auth";

// 1. Specify protected and public routes
const protectedRoutes = ["/admin"];

export default async function proxy(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookieStore = await cookies();
  const session = cookieStore.get("sessionId")?.value;

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Proxy should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
