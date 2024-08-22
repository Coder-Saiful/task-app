import jwt from 'jsonwebtoken';
import { SendResponse } from "./SendResponse";

export const authenticated = (request, role=[]) => {
    const token = request.cookies.get(process.env.AUTH_COOKIE_NAME)?.value || request.headers.get("authorization")?.split(" ")[1].trim() || "";
    
    if (!token) {

        return {auth: false, response: SendResponse({message: "Access denied. No token provided."}, 401)}; 
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (role.length == 0) {
            return {auth: true, decoded};
        }
        if (role.length > 0 && role.includes(decoded.role)) {
            return {auth: true, decoded};
        } 
        if (role.length > 0 && !role.includes(decoded.role)) {
            return {auth: false, response: SendResponse({message: "403 Forbidden. Permission not granted."}, 403)};
        } 
    } catch (error) {
        let msg;
        if (error.name == "JsonWebTokenError") {
            msg = "Invalid token.";
        } else if (error.name == "TokenExpiredError") {
            msg = "Token has expired.";
        } else {
            msg = "Authentication JSON Web Token doesn't decode.";
        }
        return {auth: false, response: SendResponse({message: msg}, 400)};
    }
}