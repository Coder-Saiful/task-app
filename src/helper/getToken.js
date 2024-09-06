import { AUTH_COOKIE_NAME } from "@/utils/config";
import { cookies, headers } from "next/headers";

export const getToken = () => {
    return cookies().get(AUTH_COOKIE_NAME)?.value || headers().get("authorization")?.split(" ")[1].trim() || "";
}