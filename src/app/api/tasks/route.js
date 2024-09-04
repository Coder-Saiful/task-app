import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { taskValidator } from "@/validators/taskValidator";
import { v4 as uuidv4 } from 'uuid';


// mongodbConnect();

export async function POST(request) {
    const {auth, response, decoded} = authenticated(request);
    
    if (auth) {
        try {
            const formdata = await request.formData() || new FormData();
            const requestBody = {};
            const taskImages = [];
            for (let [key,value] of formdata.entries()) {
                if (value instanceof Blob && value.name) {
                    taskImages.push(value);
                }

                if (!(value instanceof Blob)) {
                    requestBody[key] = value;
                }
            }
            const errors = taskValidator(requestBody);
            if (Object.keys(errors).length > 0) {
                // return SendResponse({errors}, 400)
            }
            // console.log({...requestBody, images: taskImages});
            // console.log({requestBody, taskImages})
            console.log(formdata)
            return SendResponse({message: "Your task has been created successfully."}, 201);
        } catch (error) {
            console.log(error.message)
            return SendResponse({message: "Failed to create task."}, 500);
        }
    } else {
        return response;
    }
}