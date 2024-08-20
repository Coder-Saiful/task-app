import { jwtDecode } from "jwt-decode"

export const tokenDecoded = (token) => {
    if (!token) {
        return false;
    }
    try {
        return jwtDecode(token);
    } catch (error) {
        console.log(error.name=="InvalidTokenError" ? "Invalid token." : "Token has not decoded inside middleware.js")
        return false;
    }
}