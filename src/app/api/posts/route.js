import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { fileDelete } from "@/helper/fileDelete";
import { fileUpload } from "@/helper/fileUpload";
import { SendResponse } from "@/helper/SendResponse";
import { Post } from "@/models/post";
import { postValidator } from "@/validators/postValidator";


// mongodbConnect();

export async function POST(request) {
    const { auth, response, decoded } = authenticated();

    if (auth) {
        // const formdata = await request.formData() || new FormData();
        // const requestBody = {};
        // const files = formdata.getAll("images");
        // const { imageError, fileUrls, filePaths } = await fileUpload(files, "images", "posts" + "/" + decoded.username, 1, true) || {};

        // try {

        //     for (let [key, value] of formdata.entries()) {
        //         if (!(value instanceof Blob)) {
        //             requestBody[key] = value;
        //         }
        //     }


        //     const err = postValidator(requestBody);

        //     const errors = { ...err, ...imageError };
        //     if (Object.keys(errors).length > 0) {
        //         if (fileUrls) {
        //             await fileDelete(filePaths, true);
        //         }
        //         return SendResponse({ errors }, 400);
        //     }

        //     const slug = requestBody.title.split(/[\s_]+/).join("-").toLowerCase() + "-" + Date.now();
        //     const postObj = { ...requestBody, images: fileUrls, author: decoded._id, slug };
        //     const post = new Post(postObj);

        //     await post.save();

        //     return SendResponse({ message: "Your task has been created successfully." }, 201);
        // } catch (error) {
        //     console.log((error))
        //     await fileDelete(filePaths, true);
        //     return SendResponse({ message: "Failed to create task." }, 500);
        // }

        const formdata = await request.formData() || new FormData();
        const requestBody = {};
        const files = formdata.getAll("images");
        Array(10).fill(1).map(async n => {
            const { imageError, fileUrls, filePaths } = await fileUpload(files, "images", "posts" + "/" + decoded.username, 1, true) || {};

            try {

                for (let [key, value] of formdata.entries()) {
                    if (!(value instanceof Blob)) {
                        requestBody[key] = value;
                    }
                }


                const err = postValidator(requestBody);

                const errors = { ...err, ...imageError };
                if (Object.keys(errors).length > 0) {
                    if (fileUrls) {
                        await fileDelete(filePaths, true);
                    }
                    return SendResponse({ errors }, 400);
                }

                const slug = requestBody.title.split(/[\s_]+/).join("-").toLowerCase() + "-" + Date.now();
                const postObj = { ...requestBody, images: fileUrls, author: decoded._id, slug };
                const post = new Post(postObj);

                await post.save();

                // return SendResponse({ message: "Your task has been created successfully." }, 201);
            } catch (error) {
                console.log((error))
                await fileDelete(filePaths, true);
                return SendResponse({ message: "Failed to create task." }, 500);
            }
        })
        return SendResponse("SUCCESSFULLY ADDED")
    } else {
        return response;
    }
}

// get all post

export async function GET(request) {
    const { auth, response, decoded } = authenticated();

    if (auth) {
        try {
            const posts = await Post.find().populate({ path: "author", select: "name" });
            if (posts.length == 0) {
                return SendResponse({ message: "No posts available." });
            }
            return SendResponse({ posts });
        } catch (error) {
            return SendResponse({ message: "Failed to load posts." }, 500);
        }
    } else {
        return response;
    }
}