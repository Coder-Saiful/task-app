import { NextResponse } from "next/server";

export const auth = (request, role=[]) => {
    const token = request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || "";
    if (!token) {
        console.log("unauthorized")
        return NextResponse.json("unauthorized", {status: 401})
    }
}