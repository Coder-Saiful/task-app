import { NextResponse } from "next/server";

export async function GET(request) {
    const token = request.cookies.get("task-app-token")?.value || "";
    return NextResponse.json({token});
}