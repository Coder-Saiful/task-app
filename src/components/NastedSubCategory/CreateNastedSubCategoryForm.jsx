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
    category: "",
    subcategory: ""
  });
  const [categoryData, setCategoryData] = useState({});
  const [subcategories, setSubcategories] = useState([]);
  const [categoriesLoadErr, setCategoriesLoadErr] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name == "category") {
      setSubcategories([]);
      const sub_categories = categoryData?.categories.find(c => c._id == value)?.subcategories;
      setSubcategories(sub_categories);
  }

    setFormdata((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  }

  // save nasted subcategory in database after submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    httpAxios.post("/api/nasted-sub-categories", {name: formdata.name, parentCategory: formdata.subcategory}, {
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(response => {
        toast.success(response.data.message);
        setIsSubmit(false);
        setError({});
        // setFormdata({
        //   name: "",
        //   parentCategory: ""
        // });
        setFormdata((preVal) => ({
          ...preVal,
          name: "",
        }));
      })
      .catch(error => {
        setIsSubmit(false);

        if (error.response) {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else if (error.response.data.errors) {
            const errMsg = {};
              if (!formdata.category) {
                errMsg["category"] = "Parent category field is a required field.";
              } else {
                delete errMsg["category"];
              }
            setError({...errMsg, ...error.response.data.errors});
          }
        } else {
          toast.error("Something went wrong. Please refresh the browser/app or try again later.");
          setError({});
        }
      });
  };

  // get all categories for adding as a parent category
  useEffect(() => {
    setLoading(true);
    httpAxios.get("/api/categories?subcategory=true")
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
            setCategoriesLoadErr(`Failed to load parent category. Please refresh the browser/app or try again later.`);
          }
        } else {
          setCategoriesLoadErr("Something went wrong. Please refresh the browser/app or try again later.");
        }
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>

      {/* Parent category field */}
      <div className="mb-3">
        <label className="form-label">Parent Category:</label>
        <select className={`form-select ${error.category ? "is-invalid" : ""}`} name="category" value={formdata.category} onChange={handleChange} disabled={categoriesLoadErr||!categoryData.categories?.length}>
          <option value="">--Select Parent Category--</option>
          {categoryData.categories?.length > 0 && categoryData.categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        {categoriesLoadErr && (
          <div className="invalid-feedback d-block">
            {categoriesLoadErr}
          </div>
        )}
        {error.category && (
          <div className="invalid-feedback d-block">
            {error.category}
          </div>
        )}
      </div>

      {/* Parent subcategory field */}
      <div className="mb-3">
        <label className="form-label">Parent Subcategory Name:</label>
        <select className={`form-select ${error.parentCategory ? "is-invalid" : ""}`} name="subcategory" value={formdata.subcategory} onChange={handleChange} disabled={!subcategories?.length}>
          <option value="">--Select Parent Subcategory--</option>
          {subcategories?.length > 0 && subcategories.map(subcategory => (
            <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
          ))}
        </select>
        {error.parentCategory && (
          <div className="invalid-feedback d-block">
            {error.parentCategory}
          </div>
        )}
      </div>

      {/* Nasted subcategory field */}
      <div className="mb-3">
        <label className="form-label">Nasted Subcategory Name:</label>
        <input type="text" className={`form-control ${error.name ? "is-invalid" : ""}`} name="name" value={formdata.name} onChange={handleChange} />
        {error.name && (
          <div className="invalid-feedback d-block">
            {error.name}
          </div>
        )}
      </div>
      <button type="submit" className="submit_btn w-100" disabled={isSubmit || categoriesLoadErr }>
        {isSubmit ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateNastedSubCategoryForm;
