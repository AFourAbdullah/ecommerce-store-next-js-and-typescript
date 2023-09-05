import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export const getDataFromToken = (request: NextRequest) => {
  try {
    // const token = request.cookies.get("token")?.value || "";
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value || "";
    console.log("tokennssss: ", token);
    const decodedToken: any = jwt.verify(token, "abcdefgh91");
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
