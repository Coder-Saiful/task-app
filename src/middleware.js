import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || "";

  const publicUrl = ["/accounts/login", "/accounts/register"];
  const currentPathname = request.nextUrl.pathname;

  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      // if (publicUrl.includes(currentPathname)) {
      //   if (payload.role == "user") {
      //     return NextResponse.redirect(
      //       new URL("/accounts/profile", request.url)
      //     );
      //   }

      //   if (payload.role == "manager" || payload.role == "admin") {
      //     return NextResponse.redirect(
      //       new URL("/admin/dashboard", request.url)
      //     );
      //   }
      // }

      return NextResponse.json(payload)

      // if (currentPathname.startsWith('/admin') && payload.role == "user" ) {
      //   return NextResponse.redirect(
      //     new URL("/accounts/profile", request.url)
      //   );
      // }

    } catch (error) {
      console.log(
        error.name == "JWSInvalid" ? "Invalid token" : "Token decoding error."
      );
      return NextResponse.redirect(new URL(`/accounts/login`, request.url));
    }
  } else {
    if (publicUrl.includes(currentPathname)) {
      return NextResponse.next();
    }
    if (
      currentPathname.startsWith("/admin") ||
      currentPathname.startsWith("/accounts") ||
      currentPathname.startsWith("/tasks")
    ) {
      return NextResponse.redirect(new URL(`/accounts/login`, request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/accounts/:path*", "/admin/:path*", "/tasks/:path*"],
};
