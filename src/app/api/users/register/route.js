import { mongodbConnect } from "@/config/mongodbConnect";
import { userValidator } from "@/validators/userValidator";
import { NextResponse } from "next/server";
import _ from "lodash";
import { User } from "@/models/user";
import { Profile } from "@/models/profile";
import bcrypt from 'bcrypt';

export async function POST(request) {
  await mongodbConnect();

  try {
    const requestBody = await request.json();
    const data = _.pick(requestBody, "name", "email", "password", "confirm_password", "agreed");
    const errors = userValidator(data);
    if (Object.keys(errors).length > 0) {
        return NextResponse.json({errors}, {status: 400});
    }

    const exitUser = await User.findOne({email: data.email});
    if (exitUser) {
      return NextResponse.json({errors: {email: 'This email has already been exist.'}}, { status: 400 });
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    const user = new User({...data, password: hashedPass});
    const result = await user.save();

    const profile = new Profile({user: user._id});
    await profile.save();

    return NextResponse.json({
 
    message: "Your registration has been successful.", data: _.pick(result, "_id", "name", "email")}, {status: 201});
  } catch (error) {
    return NextResponse.json({message: "Your registration has been failed." }, { status: 500 });
  }
}
 