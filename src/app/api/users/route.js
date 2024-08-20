import { NextResponse } from "next/server";
import { User } from '@/models/user';
import { mongodbConnect } from "@/config/mongodbConnect";
import { auth } from "@/helper/auth";

export async function GET(request) {
    try {
        await mongodbConnect();

        auth(request);

        const users = await User.find().sort({createdAt: -1}).select({password: 0});
        if (users.length == 0) {
            return NextResponse.json({message: "No data available."});
        }
        return NextResponse.json({users});
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message: "Failed to load users data."}, {status: 500});
    }
}