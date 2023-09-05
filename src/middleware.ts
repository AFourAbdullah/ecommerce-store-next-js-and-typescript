import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { cookies } from 'next/headers'

import { getDataFromToken } from "./utils/getDataFromToken";
import Cookies from "js-cookie";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/login" || path == "/signup";
  const token = request.cookies.get("token")?.value || "";
  // const token = Cookies.get("token");

  if (isPublicPath && token != "") {
    return NextResponse.redirect(new URL(`/profile`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/profile",
    "/login",
    "/signup",
    "/profile/:id*",
    "/orders",
    "/payment",
  ],
};
