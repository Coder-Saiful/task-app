import React from 'react';
import { fetchCategoryDetails } from "@/services/categoryService";
import EditCategoryForm from "@/components/Category/EditCategoryForm";
import { getToken } from "@/helper/getToken";

export const generateMetadata = async ({ params: { id } }) => {
    const { data } = await fetchCategoryDetails(id, getToken());
    return {
      title: data ? data?.name + " | Category | Edit" : "Category Edit",
    };
  };

const CategoryEditPage = ({params: {id}}) => {
    return (
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
                <EditCategoryForm id={id} />
              </div>
            </div>
          </div>
        </section>
    );
};

export default CategoryEditPage;