"use client";

import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CreateSubCategoryForm = () => {
  const [error, setError] = useState({});
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

    httpAxios.post("/api/sub-categories", formdata, {
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(response => {
        toast.success(response.data.message);
        setIsSubmit(false);
        setError({});
        setFormdata({
          name: "",
          parentCategory: ""
        });
        // setFormdata((preVal) => ({
        //   ...preVal,
        //   name: "",
        // }));
      })
      .catch(error => {
        setIsSubmit(false);

        if (error.response) {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else if (error.response.data.errors) {
            setError(error.response.data.errors)
          }
        } else {
          toast.error("Something went wrong. Please refresh the web/app or try again later.");
          setError({});
        }
      });
  };

  useEffect(() =>  {
    
    httpAxios.get("/api/categories")
      .then(response => {
        if (response.data.message) {
          setCategoriesLoadErr("No data available for adding parent category.");
        } else {
          setCategoriesLoadErr(null);
          setCategoryData(response.data);
        }
      })
      .catch(error => {

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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Parent Category:</label>
        <select className={`form-select ${error.parentCategory ? "is-invalid" : ""}`} name="parentCategory" value={formdata.parentCategory} onChange={handleChange} disabled={categoriesLoadErr||!categoryData.categories?.length}>
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
        {isSubmit ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateSubCategoryForm;
