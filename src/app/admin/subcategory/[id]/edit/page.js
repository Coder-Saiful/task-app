import EditSubCategoryForm from "@/components/SubCategory/EditSubCategoryForm";
import { getToken } from "@/helper/getToken";
import { fetchSubcategoryDetails } from "@/services/categoryService";

export const generateMetadata = async ({ params: { id } }) => {
    const { data } = await fetchSubcategoryDetails(id, getToken());
    return {
      title: data ? data?.name + " | Subcategory | Edit" : "Subcategory Edit",
    };
  };

const SubCategoryEditPage = ({ params: { id } }) => {
    return (
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
                <EditSubCategoryForm id={id} />
              </div>
            </div>
          </div>
        </section>
    );
};

export default SubCategoryEditPage;