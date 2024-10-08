import { NextResponse } from "next/server";
import _ from 'lodash';
import { loginValidator } from "@/validators/loginValidator";
import { mongodbConnect } from "@/config/mongodbConnect";
import { User } from "@/models/user";
import bcrypt from 'bcrypt';
import { genJWT } from "@/helper/genJWT";
import { SendResponse } from "@/helper/SendResponse";

mongodbConnect();

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const data = _.pick(requestBody, 'email', 'password');
        const errors = loginValidator(data);

        if (Object.keys(errors).length > 0) {
            return SendResponse({errors}, 400);
        }

        const user = await User.findOne({email: data.email}).populate({path: "profile", select: "username"});
        if (!user) {
            return SendResponse({invalid_credential: "Your email or password is invalid."}, 400);
        }

        const validPass = await bcrypt.compare(data.password, user.password);
        if (!validPass) {
            return SendResponse({invalid_credential: "Your email or password is invalid."}, 400);
        }
        
        if (user.isBanned) {
            return SendResponse({deactive_account: "Your account has been disabled."});
        }
        
        const username = user.profile.username;
        let payload = _.pick(user, ["_id", "name", "email", "role"]);
        payload = {...payload, username};
        const token = genJWT(payload);

        const response = NextResponse.json({message: "Login successfully.", token, user: payload});
        response.cookies.set(process.env.AUTH_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            path: "/",
            expires: new Date(Date.now() + Number(process.env.AUTH_COOKIE_EXPIRY) * 1000)
        })
        return response;
    } catch (error) {  
        return SendResponse({message: "Login failed. Please try again later."}, 500);
    }
}