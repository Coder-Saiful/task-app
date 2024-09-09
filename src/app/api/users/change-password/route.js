import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { changePasswordValidator } from "@/validators/changePasswordValidator";
import _ from "lodash";
import bcrypt from 'bcrypt';
import { User } from "@/models/user";

mongodbConnect();

export async function POST(request) {
    const {auth, response, decoded} = authenticated();

    if (auth) {
        try {
            const requestBody = _.pick(await request.json(), ["current_password", "new_password", "confirm_password"]);
            const errors = changePasswordValidator(requestBody);

            if (Object.keys(errors).length > 0) {
                return SendResponse({errors}, 400);
            }
            const hashedPass = await bcrypt.hash(requestBody.new_password, 10);

            await User.findByIdAndUpdate(decoded._id, {
                password: hashedPass
            });
            return SendResponse({message: "Your current password has been changed."})
        } catch (error) {
            return SendResponse({message: "Failed to change current password."});
        }
    } else {
        return response;
    }
}