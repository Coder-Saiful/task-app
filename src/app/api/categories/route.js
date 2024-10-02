import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";
import { SubCategory } from "@/models/subcategory";
import { NastedSubCategory } from "@/models/nastedsubcategory";
import { categoryValidator } from "@/validators/categoryValidator";

mongodbConnect();

// get all category
export async function GET(request) {
  const { auth, response } = authenticated();

  if (auth) {
    try {
      const { searchParams } = new URL(request.url);

      const populateSubCat = searchParams.get("subcategory") || "";
      const populateNasSubCat = searchParams.get("nasted-subcategory") || "";
      const subCategoryId = searchParams.get("subcategory-id") || "";
      const nasSubCategoryId = searchParams.get("nasted-subcategory-id") || "";

      const limit = Number(searchParams.get("limit")) || 10;
      let page = Number(searchParams.get("page")) || 1;
      page = page < 1 ? 1 : page;

      let isLimit = Boolean(Number(searchParams.get("limit")));

      const totalData = await Category.countDocuments();
      const totalPages = Math.ceil(totalData / limit);
      const skip = (page - 1) * limit;
      
      let query = Category.find()
        .limit(isLimit ? limit : false)
        .skip(skip)

      

      if (!populateSubCat && !populateNasSubCat && !subCategoryId && !nasSubCategoryId) {
        query = query.select("-subcategories");
      }

      if (populateSubCat && populateSubCat == "true") {
        query = query.populate({ path: "subcategories", select: "-nasted_subcategories" });
      }

      if (subCategoryId && subCategoryId == "true") {
        query = query.select();
      }

      if ((populateSubCat && populateSubCat == "true") && (populateNasSubCat && populateNasSubCat == "true")) {
        query = query.populate({
          path: "subcategories",
          populate: { path: "nasted_subcategories" },
        });
      }

      if ((populateSubCat && populateSubCat == "true") && (nasSubCategoryId && nasSubCategoryId == "true")) {
        query = query.populate({
          path: "subcategories"
        });
      }

      const categories = await query;

      if (categories.length == 0) {
        return SendResponse({ message: "No data available." }, 200);
      }

      return SendResponse({
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
  const { auth, response } = authenticated(["manager", "admin"]);

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
        { errors: { name: "This category has already been exist." } },
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
