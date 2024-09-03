import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import _ from "lodash";

export async function POST(request) {
    const {auth, response, decoded} = authenticated(request);

    if (auth) {
        try {
            const requestBody = _.pick(await request.json(), ["current_password", "new_password", "confirm_password"]);
            // console.log(requestBody);
            
            return SendResponse("password changed successfully.")
        } catch (error) {
            return SendResponse({message: "Failed to change current password."});
        }
    } else {
        return response;
    }
}