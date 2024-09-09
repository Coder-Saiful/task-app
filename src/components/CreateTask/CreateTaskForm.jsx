"use client";
import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect } from "react";

const CreateTaskForm = () => {
  const [files, setFiles] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [error, setError] = useState(null);

  const handleImage = (e) => {
    setFiles(e.target.files);
  };
  // console.log({files})
  const handleSubmit = (formdata) => {
    formdata.append('images', files)
    httpAxios
      .post("api/tasks", formdata)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    httpAxios.get("/api/categories")
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
  // console.log(categoriesData)
  return (
    <form action={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" name="title" />
      </div>
      <div className="mb-3">
        <label className="form-label">Choose Task Category</label>

      <select className="form-select mb-3" name="categories">
          <option selected value="">--SELECT OPTION--</option>
          {categoriesData && categoriesData.categories && (
            categoriesData.categories.map(category => {
              return <option key={category._id} value={category._id}>{category.name}</option>
            })
          )}
          
        </select>
        <select className="form-select mb-3" name="subcategories">
          <option selected value="">--SELECT OPTION--</option>
          <option value="1">Politics</option>
          <option value="2">Sports</option>
          <option value="3">Entertainment</option>
          <option value="4">Other</option>
        </select>
        <select className="form-select" name="nasted_subcategories">
          <option selected value="">--SELECT OPTION--</option>
          <option value="1">Politics</option>
          <option value="2">Sports</option>
          <option value="3">Entertainment</option>
          <option value="4">Other</option>
        </select> 
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="4"
          style={{ resize: "none" }}
          name="description"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Task Images</label>
        <input
          type="file"
          className="form-control"
          multiple
          name="images"
          onChange={handleImage}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="publish"
          name="publish"
        />
        <label className="form-check-label" htmlFor="publish">
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
