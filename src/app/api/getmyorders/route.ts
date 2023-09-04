import { NextRequest, NextResponse } from "next/server";
import Order from "../../../models/orderModel";
import { getDataFromToken } from "@/utils/getDataFromToken";
export async function GET(request: NextRequest) {
  const userID = await getDataFromToken(request);
  const orders = await Order.find({ user: userID });

  return NextResponse.json({
    success: true,

    orders,
  });
}
