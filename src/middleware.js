import { NextResponse } from "next/server";
import { tokenDecoded } from "./helper/tokenDecoded";
import { mongodbConnect } from "./config/mongodbConnect";

export async function middleware(request) {
  const token = request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || "";
  const tokenData = tokenDecoded(token);

  const publicUrl = ["/accounts/login", "/accounts/register", "/accounts/forgot-password"];
  const currentPathname = request.nextUrl.pathname;

  if (token && !tokenData) {
    return NextResponse.redirect(new URL(`/accounts/login`, request.url));
  }

  if (token && publicUrl.includes(currentPathname) && tokenData.role == "user") {
    return NextResponse.redirect(new URL("/accounts/profile", request.url));
  }

  if (token && publicUrl.includes(currentPathname) && (tokenData.role == "admin" || tokenData.role == "manager")) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
  
  if (token && currentPathname.startsWith("/admin") && tokenData.role == "user") {
        return NextResponse.redirect(new URL("/accounts/profile", request.url));
  }
    
  if (!token && publicUrl.includes(currentPathname)) {
    return NextResponse.next();
  }

  if (!token && (currentPathname.startsWith("/admin") || currentPathname.startsWith("/accounts") || currentPathname.startsWith("/tasks") || currentPathname.startsWith("/bookmarks"))) {
    return NextResponse.redirect(new URL(`/accounts/login`, request.url));
  }

}
export const config = {
  matcher: ["/accounts/:path*", "/admin/:path*", "/tasks/:path*", "/bookmarks", "/api/:path*"],
};
