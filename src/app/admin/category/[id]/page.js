import React from "react";
import { fetchCategoryDetails } from "@/services/categoryService";
import { cookies } from "next/headers";
import CategoryDetails from "@/components/Category/CategoryDetails";

export const generateMetadata = async ({ params: { id } }) => {
  const { data } = await fetchCategoryDetails(id, cookies().get(AUTH_COOKIE_NAME)?.value);
  return {
    title: data ? data?.name + " | Category | Details" : "Category Details",
  };
};

const CategoryDeTailsPage = ({ params: { id } }) => {
  return (
    <section>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-4 col-lg-5 m-auto">
            <CategoryDetails id={id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDeTailsPage;
