import { NextResponse } from "next/server";
import _ from 'lodash';
import { loginValidator } from "@/validators/loginValidator";
import { mongodbConnect } from "@/config/mongodbConnect";
import { User } from "@/models/user";
import bcrypt from 'bcrypt';
import { genJWT } from "@/helper/genJWT";

export async function POST(request) {
    await mongodbConnect();
    try {
        const requestBody = await request.json();
        const data = _.pick(requestBody, 'email', 'password');
        const errors = loginValidator(data);

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({errors}, {status: 400})
        }

        const user = await User.findOne({email: data.email});
        if (!user) {
            return NextResponse.json({invalid_credential: "Your email or password is invalid."}, {status: 400});
        }

        const validPass = await bcrypt.compare(data.password, user.password);
        if (!validPass) {
            return NextResponse.json({invalid_credential: "Your email or password is invalid."}, {status: 400});
        }

        const payload = _.pick(user, ["_id", "name", "email", "role"]);
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
        return NextResponse.json({message: "Login failed. Please try again later."}, {status: 500});
    }
}