import { authenticated } from "@/helper/authenticated"
import { getToken } from "@/helper/getToken";
import { SendResponse } from "@/helper/SendResponse"

export function GET(request) {
    const {auth, decoded, response} = authenticated(request);
    if (auth) {
        return SendResponse({...decoded, token: request.token});
    } else {
        return response;
    }
}