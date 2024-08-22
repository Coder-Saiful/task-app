import { mongodbConnect } from "@/config/mongodbConnect";
import { userValidator } from "@/validators/userValidator";
import _ from "lodash";
import { User } from "@/models/user";
import { Profile } from "@/models/profile";
import bcrypt from "bcrypt";
import { SendResponse } from "@/helper/SendResponse";

mongodbConnect();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const data = _.pick(
      requestBody,
      "name",
      "email",
      "password",
      "confirm_password",
      "agreed"
    );
    const errors = userValidator(data);
    if (Object.keys(errors).length > 0) {
      return SendResponse({ errors }, 400);
    }

    const exitUser = await User.findOne({ email: data.email });
    if (exitUser) {
      return SendResponse(
        { errors: { email: "This email has already been exist." } },
        400
      );
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    let profile = new Profile();
    const user = new User({
      ...data,
      password: hashedPass,
      profile: profile._id,
    });
    profile.user = user._id;

    const result = await user.save();
    await profile.save();

    return SendResponse({message: "Your registration has been successful.", user: _.pick(result, "_id", "name", "email")}, 201);
  } catch (error) {
    return SendResponse({ message: "Your registration has been failed." }, 500);
  }
}
