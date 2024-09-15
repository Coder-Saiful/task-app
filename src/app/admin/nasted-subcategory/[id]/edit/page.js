import React from 'react';
import { getToken } from "@/helper/getToken";
import { fetchNastedSubcategoryDetails } from "@/services/categoryService";
import EditNastedSubCategoryForm from '@/components/NastedSubCategory/EditNastedSubCategoryForm';

export const generateMetadata = async ({ params: { id } }) => {
    const { data } = await fetchNastedSubcategoryDetails(id, getToken());
    return {
        title: data ? data?.name + " | Nasted Subcategory | Edit" : "Category Details",
    };
};
const NastedSubCategoryEditPage = ({ params: { id } }) => {
    return (
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
                <EditNastedSubCategoryForm id={id} />
              </div>
            </div>
          </div>
        </section>
    );
};

export default NastedSubCategoryEditPage;