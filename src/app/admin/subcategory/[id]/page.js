import SubCategoryDetails from "@/components/SubCategory/SubCategoryDetails";
import { getToken } from "@/helper/getToken";
import { fetchSubcategoryDetails } from "@/services/categoryService";

export const generateMetadata = async ({ params: { id } }) => {
    const { data } = await fetchSubcategoryDetails(id, getToken());
    return {
      title: data ? data?.name + " | Subcategory | Details" : "Category Details",
    };
  };

export default function SubcategoryDetailsPage({params: {id}}) {
    return (
        <section>
            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-4 col-lg-5 m-auto">
                        <SubCategoryDetails id={id} />
                    </div>
                </div>
            </div>
        </section>
    )
}