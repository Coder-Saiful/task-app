import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { NastedSubCategory } from "@/models/nastedsubcategory";
import { Post } from "@/models/post";
import { SubCategory } from "@/models/subcategory";
import { nastedSubCategoryValidator } from "@/validators/nastedSubCategoryValidator";

mongodbConnect();

// get nasted subcategory details
export async function GET(request, { params: { id } }) {
  const { auth, response } = authenticated();

  if (auth) {
    try {
      const {searchParams} = new URL(request.url);
      const parentCategory = searchParams.get("parent-category") || "";
      const parentParentCategory = searchParams.get("parent-parent-category") || "";

      let query = NastedSubCategory.findById(id);

      if (parentCategory == "true") {
        query = query.populate({path: "parentCategory", select: "name"});
      }
      
      if (parentParentCategory == "true") {
        query = query.populate({path: "parentCategory", select: "name", populate: {path: "parentCategory", select: "name"}});
      }

      const nasted_subcategory = await query;

      if (!nasted_subcategory) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse(nasted_subcategory);
    } catch (error) {
      if (error.name == "CastError") { 
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to load nasted subcategory details." },
        500
      );
    }
  } else {
    return response;
  }
}

// updatet nasted subcategory
export async function PUT(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin", "manager"]);

  if (auth) {
    try {
      const nasted_subcategory = await NastedSubCategory.findById(id);
      if (!nasted_subcategory) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }

      const requestData = await request.json();
      const errors = nastedSubCategoryValidator(requestData);

      if (Object.keys(errors).length > 0) {
        return SendResponse({ errors }, 400);
      }

      const exitNastedSubategory = await NastedSubCategory.findOne({name: requestData.name})
      if (exitNastedSubategory && (nasted_subcategory.name != requestData.name)) { 
        return SendResponse(
          { errors: { name: "This subcategory has already been exist." } },
          400
        );
      }

      nasted_subcategory.parentCategory = requestData.parentCategory;
      nasted_subcategory.name = requestData.name;
      
      await nasted_subcategory.save();

      return SendResponse({message: "Nasted category has been updated successfully."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to update nasted subcategory." },
        500
      );
    }
  } else {
    return response;
  }
}

// delete nasted subcategory
export async function DELETE(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin"]);

  if (auth) {
    try {
      const nasted_subcategory = await NastedSubCategory.findByIdAndDelete(id);
      if (!nasted_subcategory) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      await SubCategory.findByIdAndUpdate(nasted_subcategory.parentCategory, {
        $pull: { nasted_subcategories: nasted_subcategory._id },
      });
      await Post.updateMany({category: nasted_subcategory._id}, {
        $set: {
          category: null
        }
      })
      return SendResponse({
        message: "Nasted category has been deleted successfully.",
      });
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to delete nasted subcategory." },
        500
      );
    }
  } else {
    return response;
  }
}
