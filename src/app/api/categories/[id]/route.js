import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { SubCategory } from "@/models/subcategory";
import { categoryValidator } from "@/validators/categoryValidator";

// show category details
export async function GET(request, { params: { id } }) {
  const { auth, response } = authenticated(request);

  if (auth) {
    try {
      const category = await Category.findById(id).populate({
        path: "sub_categories",
        select: "-parent_category",
        populate: { path: "nasted_sub_categories", select: "-parent_category" },
      });
      if (!category) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse(category);
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to load category details." }, 500);
    }
  } else {
    return response;
  }
}

// update category details
export async function PUT(request, { params: { id } }) {
  const { auth, response } = authenticated(request, ["admin"]);

  if (auth) {
    try {
      const category = await Category.findById(id).select("name");
      if (!category) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }

      const requestData = await request.json();
      const errors = categoryValidator(requestData);

      if (Object.keys(errors).length > 0) {
        return SendResponse({ errors }, 400);
      }

      category.name = requestData.name;
      await category.save();

      return SendResponse({message: "Category has been updated successfully."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to update category." }, 500);
    }
  } else {
    return response;
  }
}

// delete category details
export async function DELETE(request, { params: { id } }) {
  const { auth, response } = authenticated(request);

  if (auth) {
    try {
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      
      await SubCategory.updateMany({parent_category: category._id}, {
        $set: {
            parent_category: null
        }
      });

      return SendResponse({message: "Category has been deleted successfully."});
    } catch (error) {
      if (error.name == "CastError") {
        return SendResponse({ message: "404 Not Found." }, 404);
      }
      return SendResponse({ message: "Failed to delete category." }, 500);
    }
  } else {
    return response;
  }
}
