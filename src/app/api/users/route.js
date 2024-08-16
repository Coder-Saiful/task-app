import { singleImageDelete } from "@/helper/singleImageDelete";
import { singleImageUpload } from "@/helper/singleImageUpload";
import { userValidators } from "@/validators/userValidators";
import { NextResponse } from "next/server";


export function GET(request) {
  return NextResponse.json("show all users");
}

