"use client";

import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/LoadingAnimation/Spinner";
import { toast } from "react-toastify";

const EditSubCategoryForm = ({ id }) => {
  const [error, setError] = useState({});
  const [subcategoryData, setSubategoryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const [formdata, setFormdata] = useState({
    name: "",
    parentCategory: ""
  });

  const [categoryData, setCategoryData] = useState({});
  const [categoriesLoadErr, setCategoriesLoadErr] = useState(null);

  const handleChange = (e) => {
    setFormdata((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    httpAxios.put("/api/sub-categories/"+id, formdata, {
      headers: {
        'Content-Type': "application/json"
      }
    })
    .then(response => {
      toast.success(response.data.message);
      setIsSubmit(false);
      setError({});
    })
    .catch(error => {
      setIsSubmit(false);

      if (error.response)  {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else if (error.response.data.errors) {
          setError(error.response.data.errors)
        }
      } else {
        toast.error("Something went wrong. Please refresh the browser/app or try again later.");
        setError({}); 
      }
    });
  };

  // get existing subcategory data
  useEffect(() => {
    httpAxios.get("/api/sub-categories/" + id)
      .then(response => {
        setLoading(false);
        setError({});
        setSubategoryData(response.data);
        setFormdata({ name: response.data.name, parentCategory: response.data.parentCategory })
      })
      .catch(error => {
        setLoading(false);

        if (error.response) {
          setError(error.response.data);
        } else {
          setError({ message: "Something went wrong. Please refresh the browser/app or try again later." });
        }
      });
  }, [id]);

  // get all category data for adding parent category
  useEffect(() => {
    setLoading(true);
    httpAxios.get("/api/categories")
      .then(response => {
        setLoading(false);
        if (response.data.message) {
          setCategoriesLoadErr("No data available for adding parent category.");
        } else {
          setCategoriesLoadErr(null);
          setCategoryData(response.data);
        }
      })
      .catch(error => {
        setLoading(false);

        if (error.response) {
          if (error.response.status == 401) {
            router.push('/accounts/login')
          } else {
            setCategoriesLoadErr("Failed to load parent categories. Please refresh the browser/app or try again later.");
          }
        } else {
          setCategoriesLoadErr("Something went wrong. Please refresh the browser/app or try again later.");
        }
      });
  }, []);

  return (
    <>
      {subcategoryData?.name && (
        <div className="card">
          <div className="card-header text-white position-relative">
            <h3 className="mb-0 text-center">Edit Existing Subcategory</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Parent Category:</label>
                <select className={`form-select ${error.parentCategory ? "is-invalid" : ""}`} name="parentCategory" value={formdata.parentCategory} onChange={handleChange}>
                  <option value="">--Select Parent Category--</option>
                  {categoryData.categories?.length > 0 && categoryData.categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  ))}
                </select>
                {error.parentCategory && (
                  <div className="invalid-feedback d-block">
                    {error.parentCategory}
                  </div>
                )}
                {categoriesLoadErr && (
                  <div className="invalid-feedback d-block">
                    {categoriesLoadErr}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Subcategory Name:</label>
                <input type="text" className={`form-control ${error.name ? "is-invalid" : ""}`} name="name" value={formdata.name} onChange={handleChange} />
                {error.name && (
                  <div className="invalid-feedback d-block">
                    {error.name}
                  </div>
                )}
              </div>
              <button type="submit" className="submit_btn w-100" disabled={isSubmit || categoriesLoadErr}>
                {isSubmit ? "Editing..." : "Edit"}
              </button>
            </form>
          </div>
        </div>
      )}
      {loading && <Spinner />}
      {error.message && (
        <h4 className='text-center'>{error.message}</h4>
      )}
      {error.notFoundError && (
        <h4 className='text-center'>{error.notFoundError}</h4>
      )}
    </>
  );
};

export default EditSubCategoryForm;
