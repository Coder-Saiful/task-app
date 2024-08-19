import jwt from "jsonwebtoken"

export const genJWT = payload => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: Number(process.env.AUTH_JWT_EXPIRY)});
}