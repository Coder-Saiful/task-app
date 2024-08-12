import {IncomingForm} from "formidable";
import { NextResponse } from "next/server";

export function GET(request) {
    
    return NextResponse.json("show all users")
}

export async function POST(request) {
    const form = new IncomingForm({
        keepExtensions: true
    });
    
    form.parse(await request.formData(), (err, fields, files) => {
        console.log({err, fields, files})
    })
    console.log(await request.formData())
    return NextResponse.json("submitted successfully", {status: 201})
}