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
  const { auth, response } = authenticated(request);

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id)
        .populate({
          path: "nasted_sub_categories",
          select: "-parent_category",
        })
        .populate({ path: "parent_category", select: "name" });

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
  const { auth, response } = authenticated(request, ["admin"]);

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id).select(
        "-nasted_sub_categories"
      );
      if (!subcategory) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      const requestData = await request.json();
      const errors = subCategoryValidator(requestData);

      if (Object.keys(errors).length > 0) {
        return SendResponse({ errors }, 400);
      }

      subcategory.parent_category = requestData.parent_category;
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
  const { auth, response } = authenticated(request, ["admin"]);

  if (auth) {
    try {
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      await Category.findByIdAndUpdate(subcategory.parent_category,  {
        $pull: {
          sub_categories: subcategory._id
        }
      });

      await NastedSubCategory.updateMany({parent_category: subcategory._id}, {
        $set: {
          parent_category: null
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
