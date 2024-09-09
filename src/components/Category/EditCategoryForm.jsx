"use client";

import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/LoadingAnimation/Spinner"; 
import { toast } from "react-toastify";

const EditCategoryForm = ({id}) => {
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState({});
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [formdata, setFormdata] = useState({
    name: ""
  });
 
  const handleChange = (e) => {
    setFormdata((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      setIsSubmit(true);

      httpAxios.put("/api/categories/"+id, {name: formdata.name}, {
        headers: {
          'Content-Type': "application/json"
        }
      })
      .then(response => {
        toast.success(response.data.message);
        setIsSubmit(false);
        setSubmitError({});
      })
      .catch(error => {
        setIsSubmit(false);

        if (error.response)  {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else if (error.response.data.errors) {
            setSubmitError(error.response.data.errors)
          }
        } else {
          toast.error("Something went wrong. Please try again later or refresh the web/app");
          setSubmitError({}); 
        }
      });
  };

  useEffect(() => {
    httpAxios.get("/api/categories/"+id)
    .then(response => {
        setLoading(false);
        setError(null);
        setCategoryData(response.data);
        setFormdata({name: response.data.name})
    })
    .catch(error => {
        setLoading(false);

        if (error.response)  {
            setError(error.response.data);
        } else {
        setError({message: "Something went wrong. Please try again later or refresh the web/app"}); 
        }
    });    
}, [id]);

  return (
    <>
        {categoryData?.name && (
            <div className="card">
                <div className="card-header text-white position-relative">
                    <h3 className="mb-0 text-center">Edit Existing Category</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Category Name:</label>
                            <input type="text" className={`form-control ${submitError.name ? "is-invalid" : ""}`} name="name" value={formdata.name} onChange={handleChange} />
                            {submitError.name && (
                            <div className="invalid-feedback d-block">
                            {submitError.name}
                            </div>
                            )}
                        </div>
                        <button type="submit" className="submit_btn w-100" disabled={isSubmit}>
                            {isSubmit ? "Editing..." : "Edit"}
                        </button>
                    </form>
                </div>
            </div>
        )}
        {loading && <Spinner />}
        {error?.message && (
            <h4 className='text-center'>{error.message}</h4>
        )}
        {error?.notFoundError && (
            <h4 className='text-center'>{error.notFoundError}</h4>
        )}
    </>
  );
};

export default EditCategoryForm;
