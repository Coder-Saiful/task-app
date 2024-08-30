import { authenticated } from "@/helper/authenticated"
import { SendResponse } from "@/helper/SendResponse"

export function GET(request) {
    const {auth, decoded, response} = authenticated(request);
    if (auth) {
        return SendResponse(decoded);
    } else {
        return response;
    }
}