import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { NastedSubCategory } from "@/models/nastedsubcategory";
import { SubCategory } from "@/models/subcategory";
import { subCategoryValidator } from "@/validators/subCategoryValidator";

mongodbConnect();

// show subcategory details
export async function GET(request, { params: { id } }) {
  const { auth, response } = authenticated();

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id)
        .populate({
          path: "nasted_subcategories",
          select: "-parentCategory",
        })
        .populate({ path: "parentCategory", select: "name" });

      if (!subcategory) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      return SendResponse(subcategory);
    } catch (error) {
      console.log(error)
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to load subcategory details." },
        500
      );
    }
  } else {
    return response;
  }
}


// update subcategory details
export async function PUT(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin", "manager"]);

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id).select(
        "-nasted_subcategories"
      );
      if (!subcategory) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      const requestData = await request.json();
      const errors = subCategoryValidator(requestData);

      if (Object.keys(errors).length > 0) {
        return SendResponse({ errors }, 400);
      }

      subcategory.parentCategory = requestData.parentCategory;
      subcategory.name = requestData.name;

      await subcategory.save();

      return SendResponse(subcategory);
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to update subcategory." },
        500
      );
    }
  } else {
    return response;
  }
}

// delete subcategory
export async function DELETE(request, { params: { id } }) {
  const { auth, response } = authenticated(["admin"]);

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      await Category.findByIdAndUpdate(subcategory.parentCategory,  {
        $pull: {
          subcategories: subcategory._id
        }
      });

      await NastedSubCategory.updateMany({parentCategory: subcategory._id}, {
        $set: {
          parentCategory: null
        }
      });

      return SendResponse({message: "Subcategory has been deleted successfullly."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse(
        { message: "Failed to delete subcategory." },
        500
      );
    }
  } else {
    return response;
  }
}
