import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { categoryValidator } from "@/validators/categoryValidator";

mongodbConnect();

// get all category
export async function GET(request) {
  const { auth, response } = authenticated(request, ["manager", "admin"]);

  if (auth) {
    try {
      const { searchParams } = new URL(request.url);

      const limit = Number(searchParams.get("limit")) || 10;
      let page = Number(searchParams.get("page")) || 1;
      page = page < 1 ? 1 : page;

      const totalData = await Category.countDocuments();
      const totalPages = Math.ceil(totalData / limit);
      const skip = (page - 1) * limit;

      const categories = await Category.find()
        .limit(limit)
        .skip(skip)
        .populate({ path: "sub_categories", select: "-parent_category -__v", populate: {path: "nasted_sub_categories", select: "-parent_category -__v"} }).select("-__v");

      if (categories.length == 0) {
        return SendResponse({ message: "No data available." }, 200);
      }
      return SendResponse({
        showData: categories.length,
        totalData,
        totalPages,
        currentPage: page,
        skip,
        categories,
      });
    } catch (error) {
      return SendResponse({ message: "Failed to load categories." }, 500);
    }
  } else {
    return response;
  }
}

// create category
export async function POST(request) {
  const { auth, response } = authenticated(request, ["manager", "admin"]);

  if (!auth) {
    return response;
  }

  try {
    const requestData = await request.json();
    const errors = categoryValidator(requestData);

    if (Object.keys(errors).length > 0) {
      return SendResponse({ errors }, 400);
    }

    const existCategory = await Category.findOne({ name: requestData.name });
    if (existCategory) {
      return SendResponse(
        { message: "This category has already been exist." },
        400
      );
    }

    await Category.create({ name: requestData.name });

    return SendResponse(
      { message: "Category has been created successfully." },
      201
    );
  } catch (error) {
    return SendResponse({ message: "Failed to create category." }, 500);
  }
}
