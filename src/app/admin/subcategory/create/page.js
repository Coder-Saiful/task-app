import React from "react";
import CreateSubCategoryForm from "@/components/SubCategory/CreateSubCategoryForm";

export const metadata = {
  title: "Create New Subcategory",
};

const SubcategoryCreatePage = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div className="card-header text-white position-relative">
                <h3 className="mb-0 text-center">Create New Subcategory</h3>
              </div>
              <div className="card-body">
                <CreateSubCategoryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubcategoryCreatePage;
