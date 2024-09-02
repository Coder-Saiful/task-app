import { User } from "@/models/user";
import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";

mongodbConnect();

export async function GET(request) {
  const { auth, response } = authenticated(request, ["manager", "admin"]);

  if (auth) {
    try {


        const {searchParams} = new URL(request.url);
        const filter = {};

        const limit = Number(searchParams.get("limit")) || 10;
        let page = Number(searchParams.get("page")) || 1;
        page = page < 1 ? 1 : page;

        const totalData = await User.countDocuments(filter);
        const totalPages = Math.ceil(totalData/limit);
        const skip = (page - 1) * limit;
       
        const users = await User.find({
 
        })
          .sort({ createdAt: -1 })
          .select({ password: 0 })
          .limit(limit)
          .skip(skip)
          .populate('profile');
        if (users.length == 0) {
          return SendResponse({ message: "No data available." });
        }
        return SendResponse({showData: users.length, totalData, totalPages, currentPage: page, skip, users});
    
    } catch (error) {
      return SendResponse({ message: "Failed to load users data." }, 500);
    }
  } else {
    return response;
  }
}
