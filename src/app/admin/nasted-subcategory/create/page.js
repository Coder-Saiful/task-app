import React from "react";
import CreateNastedSubCategoryForm from "@/components/NastedSubCategory/CreateNastedSubCategoryForm";

export const metadata = {
  title: "Create New Nasted Subcategory",
};

const SubcategoryCreatePage = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div className="card-header text-white position-relative">
                <h3 className="mb-0 text-center">Create New Nasted Subcategory</h3>
              </div>
              <div className="card-body">
                <CreateNastedSubCategoryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubcategoryCreatePage;
