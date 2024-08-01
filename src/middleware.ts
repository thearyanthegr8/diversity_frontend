import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (req.nextUrl.pathname.includes("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/auth", req.url));
  } else if (
    (req.nextUrl.pathname === "/auth" || req.nextUrl.pathname === "/") &&
    session
  ) {
    return NextResponse.redirect(new URL("/dashboard/learn", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/", "/auth", "/dashboard/:path*"],
};
