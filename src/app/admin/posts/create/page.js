import React from "react";
import CreatePostForm from "@/components/Post/CreatePostForm";

export const metadata = {
  title: "Create New Post",
};

const CreateCategoryPage = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div className="card-header text-white position-relative">
                <h3 className="mb-0 text-center">Create New Post</h3>
              </div>
              <div className="card-body">
                <CreatePostForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCategoryPage;
