import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { SubCategory } from "@/models/subcategory";
import { subCategoryValidator } from "@/validators/subCategoryValidator";

mongodbConnect();

// get all category
export async function GET(request) {
  const { auth, response } = authenticated(["manager", "admin"]);

  if (auth) {
    try {
      const { searchParams } = new URL(request.url);

      const limit = Number(searchParams.get("limit")) || 10;
      let page = Number(searchParams.get("page")) || 1;
      page = page < 1 ? 1 : page;

      const totalData = await SubCategory.countDocuments();
      const totalPages = Math.ceil(totalData / limit);
      const skip = (page - 1) * limit;

      const subcategories = await SubCategory.find().limit(limit).skip(skip).populate({path: "nasted_subcategories", select: "-parentCategory -__v"}).select("-__v");

      if (subcategories.length == 0) {
        return SendResponse({ message: "No data available." }, 200);
      }
      return SendResponse({
        showData: subcategories.length,
        totalData,
        totalPages,
        currentPage: page,
        skip,
        subcategories,
      });
    } catch (error) {
      return SendResponse({ message: "Failed to load subcategories." }, 500);
    }
  } else {
    return response;
  }
}

// create category
export async function POST(request) {
  const { auth, response } = authenticated(["manager", "admin"]);

  if (!auth) {
    return response;
  }

  try {
    const requestData = await request.json();
    const errors = subCategoryValidator(requestData);

    if (Object.keys(errors).length > 0) {
      return SendResponse({ errors }, 400);
    }

    const existSubCategory = await SubCategory.findOne({
      name: requestData.name,
    });
    if (existSubCategory) {
      return SendResponse(
        { message: "This subcategory has already been exist." },
        400
      );
    }

    const result = await SubCategory.create(requestData);
    await Category.findByIdAndUpdate(result.parentCategory, {
      $push: {
        subcategories: result._id,
      },
    });

    return SendResponse(
      { message: "Subcategory has been created successfully." },
      201
    );
  } catch (error) {
    // console.log(error)
    return SendResponse({ message: "Failed to create subcategory." }, 500);
  }
}
