import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import User from "./models/userModel";
import { getDataFromToken } from "./utils/getDataFromToken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/login" || path == "/signup";
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token != "") {
    const id = getDataFromToken(request);
    return NextResponse.redirect(new URL(`/profile/${id}`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/profile/:id*"],
};
