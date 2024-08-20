import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const token =
      request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || "";
    if (!token) {
      return NextResponse.json(
        { message: "Access denied. No token provided." },
        { status: 401 }
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({ token, ...decoded });
  } catch (error) {
    console.log(error.name)
    return NextResponse.json({message: error.name == "JsonWebTokenError" ? "Invalid token." : "This token doesn't decode."}, {status: 400});
  }
}
