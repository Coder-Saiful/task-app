import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { SubCategory } from "@/models/subcategory";
import { categoryValidator } from "@/validators/categoryValidator";

mongodbConnect();
// show category details
export async function GET(request, { params: { id } }) {
  const { auth, response } = authenticated();

  if (auth) {
    try {
      const { searchParams } = new URL(request.url);

      const populateSubCat = searchParams.get("subcategory") || "";
      const populateNasSubCat = searchParams.get("nasted-subcategory") || "";
      const subCategoryId = searchParams.get("subcategory-id") || "";
      const nasSubCategoryId = searchParams.get("nasted-subcategory-id") || "";

      let category = await Category.findById(id).select("-subcategories");

      if (populateSubCat && populateSubCat == "true") {
        category = await Category.findById(id)
          .populate({ path: "subcategories", select: "-nasted_subcategories" });
      }

      if (subCategoryId && subCategoryId == "true") {
        category = await Category.findById(id);
      }

      if ((populateSubCat && populateSubCat == "true") && (populateNasSubCat && populateNasSubCat == "true")) {
        category = await Category.findById(id)
          .populate({
            path: "subcategories",
            populate: { path: "nasted_subcategories"},
          });
      }

      if ((populateSubCat && populateSubCat == "true") && (nasSubCategoryId && nasSubCategoryId == "true")) {
        category = await Category.findById(id)
          .populate({
            path: "subcategories"
          });
      }

      if (!category) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }

      return SendResponse(category);
    } catch (error) {
 
      if (error.name == "CastError") {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to load category details." }, 500);
    }
  } else {
    return response;
  }
}

// update category details
export async function PUT(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin", "manager"]);

  if (auth) {
    try {
      const category = await Category.findById(id).select("name");
      if (!category) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }

      const requestData = await request.json();
      const errors = categoryValidator(requestData);

      if (Object.keys(errors).length > 0) {
        return SendResponse({ errors }, 400);
      }

      const exitCategory = await Category.findOne({name: requestData.name})
      if (exitCategory && (category.name != requestData.name)) { 
        return SendResponse(
          { errors: { name: "This category has already been exist." } },
          400
        );
      }

      category.name = requestData.name;
      await category.save();

      return SendResponse({message: "Category has been updated successfully."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to update category." }, 500);
    }
  } else {
    return response;
  }
}

// delete category details
export async function DELETE(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin"]);

  if (auth) {
    try {
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      
      await SubCategory.updateMany({parentCategory: category._id}, {
        $set: {
          parentCategory: null
        }
      });

      return SendResponse({message: "Category has been deleted successfully."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ notFoundError: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to delete category." }, 500);
    }
  } else {
    return response;
  }
}
