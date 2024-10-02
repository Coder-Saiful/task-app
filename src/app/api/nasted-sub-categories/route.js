import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { NastedSubCategory } from "@/models/nastedsubcategory";
import { SubCategory } from "@/models/subcategory";
import { nastedSubCategoryValidator } from "@/validators/nastedSubCategoryValidator";

mongodbConnect();

// get all nasted subcategory
export async function GET(request) {
  const { auth, response } = authenticated();

  if (auth) {
    try {
      const { searchParams } = new URL(request.url);

      const parentCategory = searchParams.get("parent-category") || "";
      const search = searchParams.get("search") || "";
      const sort = searchParams.get("sort") || "";
      const order = searchParams.get("order") || "";
      const minDateRange = searchParams.get("min-date-range") || "";
      const maxDateRange = searchParams.get("max-date-range") || "";

      const limit = Number(searchParams.get("limit")) || 10;
      let page = Number(searchParams.get("page")) || 1;
      page = page < 1 ? 1 : page;

      let isLimit = Boolean(Number(searchParams.get("limit")));


      const totalData = await NastedSubCategory.countDocuments();
      const totalPages = Math.ceil(totalData / limit);
      const skip = (page - 1) * limit;

      const regex = new RegExp(search, 'i');
      let filterObj = {};
 
      if (minDateRange && maxDateRange) {
        filterObj.createdAt = {
          $gte: new Date(minDateRange),
          $lte: new Date(maxDateRange)
        }
      } else if (minDateRange) {
        filterObj.createdAt = {
          $gte: new Date(minDateRange)
        }
      } else if (maxDateRange) {
        filterObj.createdAt = {
          $lte: new Date(maxDateRange)
        }
      }

      filterObj = {...filterObj, name: {$regex: regex}};

      let query = NastedSubCategory.find(filterObj)
        .limit(isLimit ? limit : false)
        .skip(skip);

      if (parentCategory && parentCategory == "true") {
        query = query.populate({ path: "parentCategory", select: "name" });
      }

      if (sort && order) {
        query = query.sort({ [sort]: order == "asc" ? 1 : -1 });
      }

      const nasted_subcategories = await query;

      if (nasted_subcategories.length == 0 && !search) {
        return SendResponse({ message: "No data available." }, 200);
      } else if (nasted_subcategories.length == 0 && search) {
        return SendResponse({ message: "No search result." }, 200);
      }
      return SendResponse({
        totalData,
        totalPages,
        currentPage: page,
        skip,
        nasted_subcategories,
      });
    } catch (error) {
      return SendResponse({ message: "Failed to load nasted subcategories." }, 500);
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
    const errors = nastedSubCategoryValidator(requestData);

    if (Object.keys(errors).length > 0) {
      return SendResponse({ errors }, 400);
    }

    const existNastedSubCategory = await NastedSubCategory.findOne({
      name: requestData.name,
    });
    if (existNastedSubCategory) {
      return SendResponse(
        {
          errors: {
            name: "This nasted subcategory has already been exist."
          }
        },
        400
      );
    }

    const result = await NastedSubCategory.create(requestData);
    await SubCategory.findByIdAndUpdate(result.parentCategory, {
      $push: {
        nasted_subcategories: result._id,
      },
    });

    return SendResponse(
      { message: "Nasted subcategory has been created successfully." },
      201
    );
  } catch (error) {
    return SendResponse({ message: "Failed to create nasted subcategory." }, 500);
  }
}
