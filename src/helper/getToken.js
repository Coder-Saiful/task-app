export const getToken = (request) => {
    return request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || request.headers.get("authorization")?.split(" ")[1].trim() || "";
}