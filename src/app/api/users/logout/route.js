import { SendResponse } from "@/helper/SendResponse";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const response = NextResponse.json({message: "Logout successfully."})
        response.cookies.set(process.env.AUTH_COOKIE_NAME, "", {
            httpOnly: true,
            expires: new Date(0)
        });
        return response;
    } catch (error) {
        return SendResponse({message: `Logout failed (${error.message})`}, 500);
    }
}