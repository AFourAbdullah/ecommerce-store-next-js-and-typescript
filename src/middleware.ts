import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getDataFromToken } from "./utils/getDataFromToken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/login" || path == "/signup";
  const token = request.cookies.get("user-token")?.value || "";
  if (isPublicPath && token != "") {
    return NextResponse.redirect(new URL(`/profile`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/profile/:id*"],
};
