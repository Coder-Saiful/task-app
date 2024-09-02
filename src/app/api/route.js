import { SendResponse } from "@/helper/SendResponse";
import { Category } from "@/models/category";

export async function GET() {
//   const result = await Category.create();
  console.log(result);
  return SendResponse("the query successfully run");
}
