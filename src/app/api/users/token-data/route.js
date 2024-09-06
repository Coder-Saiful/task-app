import { authenticated } from "@/helper/authenticated"
import { getToken } from "@/helper/getToken";
import { SendResponse } from "@/helper/SendResponse"

export function GET(request) {
    const {auth, decoded, response} = authenticated();
    if (auth) {
        return SendResponse({...decoded, tokenn: getToken()});
    } else {
        return response;
    }
}