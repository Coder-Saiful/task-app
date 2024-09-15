"use client";
import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";

const CreateTaskForm = () => {
  const [files, setFiles] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [nastedSubcategories, setNastedSubcategories] = useState([]);
  const [error, setError] = useState(null);

  const [postFormdata, setPostFormdata] = useState({
    title: "",
    category: "",
    subcategory: "",
    nasted_subcategory: "",
    description: "",
    images: "",
    isPublished: false
  });



  const handleChange = (e) => {
    const {name, value, checked, files, type} = e.target;

    if (name == "category") {
        setSubcategories([]);
        setNastedSubcategories([]); 
        const sub_categories = categoriesData?.categories.find(c => c._id == value)?.subcategories;
        setSubcategories(sub_categories);
    }

    if (name == "subcategory") {
      setNastedSubcategories([]); 
      const nasted_sub_categories = subcategories.find(sc => sc._id == value)?.nasted_subcategories;
      setNastedSubcategories(nasted_sub_categories);
  }
    setPostFormdata((preVal) => ({
        ...preVal,
        [name]: type == "checkbox" ? checked : type == "file" ? files :  value
    }));
    
  }

  const handleImage = (e) => {
    // console.log(taskFormdata)
  };
  // console.log({files})
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(postFormdata)

  };

  useEffect(() => {
    httpAxios.get("/api/categories?subcategory=true&nasted-subcategory=true")
      .then(response => {
        if (response.data.message) {
          setError(response.data.message);
        }
        setCategoriesData(response.data);
      })
      .catch(error => {
        if (error.response) {
          setError(error.response.data.message);
        }
        setError("Something went wrong. Please try again later or refresh the web/app.");
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input type="text" className="form-control" name="title" value={postFormdata.title} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Choose Post Category</label>

      <select className="form-select mb-3" name="category" value={postFormdata.category} onChange={handleChange} disabled={!categoriesData?.categories}>
          <option value="">--SELECT OPTION--</option>
          {categoriesData?.categories && (
            categoriesData.categories.map(category => {
              return <option key={category._id} value={category._id}>{category.name}</option>
            })
          )}
          
        </select>
        <select className="form-select mb-3" name="subcategory" value={postFormdata.subcategory} onChange={handleChange} disabled={!postFormdata.category || !subcategories?.length}>
          <option value="">--SELECT OPTION--</option>
          {subcategories?.length > 0 && subcategories.map(subcategory => (
            <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
          ))}
        </select>
        <select className="form-select" name="nasted_subcategory" value={postFormdata.nasted_subcategory} onChange={handleChange} disabled={!postFormdata.subcategory || !nastedSubcategories?.length}>
          <option value="">--SELECT OPTION--</option>
          {nastedSubcategories?.length > 0 && nastedSubcategories.map(nastedSubcategory => (
            <option key={nastedSubcategory._id} value={nastedSubcategory._id}>{nastedSubcategory.name}</option>
          ))}
        </select> 
      </div>
      <div className="mb-3">
        <label className="form-label">Post Description</label>
        <textarea
          className="form-control"
          rows="4"
          name="description"
          value={postFormdata.description} onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Post Images</label>
        <input
          type="file"
          className="form-control"
          multiple
          name="images"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isPublished"
          name="isPublished"
          checked={postFormdata.isPublished} onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="isPublished">
          Publish
        </label>
      </div>
      <button type="submit" className="submit_btn w-100">
        Create
      </button>
    </form>
  );
};

export default CreateTaskForm;
