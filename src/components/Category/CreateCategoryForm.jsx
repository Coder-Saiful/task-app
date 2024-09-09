"use client";

import { httpAxios } from "@/helper/httpAxios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateCategoryForm = () => {
  const [error, setError] = useState({});
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

      httpAxios.post("/api/categories", {name: formdata.name}, {
        headers: {
          'Content-Type': "application/json"
        }
      })
      .then(response => {
        toast.success(response.data.message);
        setIsSubmit(false);
        setError({});
        setFormdata({
          name: ""
        });
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
          toast.error("Something went wrong. Please try again later or refresh the web/app");
          setError({}); 
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Category Name:</label>
        <input type="text" className={`form-control ${error.name ? "is-invalid" : ""}`} name="name" value={formdata.name} onChange={handleChange} />
        {error.name && (
          <div className="invalid-feedback d-block">
          {error.name}
        </div>
        )}
      </div>
      <button type="submit" className="submit_btn w-100" disabled={isSubmit}>
        {isSubmit ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateCategoryForm;
