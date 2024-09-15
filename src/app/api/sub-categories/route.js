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

      const populateNasSubCat = searchParams.get("nasted-subcategory") || "";
      const nasSubCategoryId = searchParams.get("nasted-subcategory-id") || "";
      const parentCategory = searchParams.get("parent-category") || "";

      const limit = Number(searchParams.get("limit")) || 10;
      let page = Number(searchParams.get("page")) || 1;
      page = page < 1 ? 1 : page;

      let isLimit = Boolean(Number(searchParams.get("limit")));

      const totalData = await SubCategory.countDocuments();
      const totalPages = Math.ceil(totalData / limit);
      const skip = (page - 1) * limit;

      let subcategories = await SubCategory.find()
        .limit(isLimit ? limit : false)
        .skip(skip)
        .select("-nasted_subcategories");

      if (populateNasSubCat && populateNasSubCat == "true") {
        subcategories = await SubCategory.find()
          .limit(isLimit ? limit : false)
          .skip(skip)
          .populate({ path: "nasted_subcategories" });
      }

      if (nasSubCategoryId && nasSubCategoryId == "true") {
        subcategories = await SubCategory.find()
          .limit(isLimit ? limit : false)
          .skip(skip);
      }

      if (parentCategory && parentCategory == "true") {
        subcategories = await SubCategory.find()
          .limit(isLimit ? limit : false)
          .skip(skip)
          .select("-nasted_subcategories")
          .populate({ path: "parentCategory", select: "name" });
      }

      if ((populateNasSubCat && populateNasSubCat == "true") && (parentCategory && parentCategory == "true")) {
        subcategories = await SubCategory.find()
          .limit(isLimit ? limit : false)
          .skip(skip)
          .populate({ path: "parentCategory", select: "name" })
          .populate({ path: "nasted_subcategories" });
      }

      if ((nasSubCategoryId && nasSubCategoryId == "true") && (parentCategory && parentCategory == "true")) {
        subcategories = await SubCategory.find()
          .limit(isLimit ? limit : false)
          .skip(skip)
          .populate({ path: "parentCategory", select: "name" });
      }


      if (subcategories.length == 0) {
        return SendResponse({ message: "No data available." }, 200);
      }
      return SendResponse({
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
        { errors: { name: "This subcategory has already been exist." } },
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
    return SendResponse({ message: "Failed to create subcategory." }, 500);
  }
}


