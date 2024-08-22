import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { categoryValidator } from "@/validators/categoryValidator";

mongodbConnect();

// get all category
export async function GET(request) {
    const {auth, response} = authenticated(request, ["manager", "admin"]);

    if (auth) {
        try {
            const categories = await Category.find();
            console.log(categories)
            return SendResponse(categories)
        } catch (error) {
            return SendResponse({message: "Failed to load categories."}, 500);
        }
    } else {
        return response;
    }
}

// create category
export async function POST(request) {
    const {auth, response} = authenticated(request, ["manager", "admin"]);

    if (!auth) return response;

    try {
        const requestData = await request.json();
        const error = categoryValidator(requestData);

        if (Object.keys(error).length > 0) {
            return SendResponse({error}, 400);
        }
        
        const existCategory = await Category.findOne({name: requestData.name});
        if (existCategory) {
            return SendResponse({message: "This category has already been exist."}, 400);
        }

        await Category.create({name: requestData.name});

        return SendResponse({message: "Category has been created successfully."}, 201);
    } catch (error) {
        return SendResponse({message: "Failed to create category."}, 500);
    }
}