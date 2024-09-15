import { mongodbConnect } from "@/config/mongodbConnect";
import { authenticated } from "@/helper/authenticated";
import { SendResponse } from "@/helper/SendResponse";
import { NastedSubCategory } from "@/models/nastedsubcategory";
import { SubCategory } from "@/models/subcategory";

mongodbConnect();


// delete multiple nasted subcategory
export async function POST(request) {
    const { auth, response } = authenticated(["admin"]);
  
    if (!auth) {
      return response;
    }
  
    try {
      const {deletedIds} = await request.json();
      const result = await NastedSubCategory.deleteMany({_id: {
        $in: deletedIds
      }})

      await SubCategory.updateMany({
        nasted_subcategories: {
          $in: deletedIds
        }
      }, {
        $pull: {
          nasted_subcategories: {
            $in: deletedIds
          }
        }
      });
      
      return SendResponse(
        { message: `${result. deletedCount} nasted subcategory has been deleted successfully.` },
        200
      );
    } catch (error) {
      return SendResponse({ message: "Failed to create nasted subcategory." }, 500);
    }
  }
  