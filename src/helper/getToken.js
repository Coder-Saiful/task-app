import { AUTH_COOKIE_NAME } from "@/utils/config";
import { cookies, headers } from "next/headers";

export const getToken = () => {
    const tokenFromHeaders = headers().get('authorization')?.split(" ").length > 1 ? headers().get("authorization")?.split(" ")[1].trim() : "";
    const tokenFromCookies = cookies().get(AUTH_COOKIE_NAME)?.value;
    return tokenFromCookies || tokenFromHeaders || "";
}