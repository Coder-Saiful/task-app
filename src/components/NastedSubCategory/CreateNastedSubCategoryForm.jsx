"use client";

import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CreateNastedSubCategoryForm = () => {
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formdata, setFormdata] = useState({
    name: "",
    parentCategory: ""
  });
  const [subcategoryData, setSubcategoryData] = useState({});
  const [subcategoriesLoadErr, setSubcategoriesLoadErr] = useState(null);

  const handleChange = (e) => {
    setFormdata((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    httpAxios.post("/api/nasted-sub-categories", formdata, {
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
          toast.error("Something went wrong. Please refresh the browser/app or try again later.");
          setError({});
        }
      });
  };

  // get all subcategory for adding as a parent category
  useEffect(() => {
    setLoading(true);
    httpAxios.get("/api/sub-categories")
      .then(response => {
        setLoading(false);
        if (response.data.message) {
          setSubcategoriesLoadErr("No data available for adding parent category.");
        } else {
          setSubcategoriesLoadErr(null);
          setSubcategoryData(response.data);
        }
      })
      .catch(error => {
        setLoading(false);

        if (error.response) {
          if (error.response.status == 401) {
            router.push('/accounts/login')
          } else {
            setSubcategoriesLoadErr(`Failed to load parent category. Please refresh the browser/app or try again later.`);
          }
        } else {
          setSubcategoriesLoadErr("Something went wrong. Please refresh the browser/app or try again later.");
        }
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Parent Category:</label>
        <select className={`form-select ${error.parentCategory ? "is-invalid" : ""}`} name="parentCategory" value={formdata.parentCategory} onChange={handleChange}>
          <option value="">--Select Parent Category--</option>
          {subcategoryData.subcategories?.length > 0 && subcategoryData.subcategories.map(subcategory => (
            <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
          ))}
        </select>
        {error.parentCategory && (
          <div className="invalid-feedback d-block">
            {error.parentCategory}
          </div>
        )}
        {subcategoriesLoadErr && (
          <div className="invalid-feedback d-block">
            {subcategoriesLoadErr}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Nasted Subcategory Name:</label>
        <input type="text" className={`form-control ${error.name ? "is-invalid" : ""}`} name="name" value={formdata.name} onChange={handleChange} />
        {error.name && (
          <div className="invalid-feedback d-block">
            {error.name}
          </div>
        )}
      </div>
      <button type="submit" className="submit_btn w-100" disabled={isSubmit || subcategoriesLoadErr}>
        {isSubmit ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateNastedSubCategoryForm;
