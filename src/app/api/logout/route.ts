import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";

export async function GET() {
  try {
    const response = await NextResponse.json({
      message: "Logout successfully..",
      success: true,
    });
    Cookies.remove("token");
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
