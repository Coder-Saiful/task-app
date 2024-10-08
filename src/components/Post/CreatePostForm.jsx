"use client";
import { httpAxios } from "@/helper/httpAxios";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const CreateTaskForm = () => {
  const [postImages, setPostImages] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [nastedSubcategories, setNastedSubcategories] = useState([]);
  const [error, setError] = useState(null);
  const [categoryLoadErr, setCategoryLoadErr] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [postFormdata, setPostFormdata] = useState({
    title: "",
    category: "",
    subcategory: "",
    nasted_subcategory: "",
    description: "",
    images: [],
    isPublished: false
  });

  const formRef = useRef(null);

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

  // console.log({files})
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formdata = new FormData ();
    formdata.append("title", postFormdata.title);
    formdata.append("category", postFormdata.nasted_subcategory);
    formdata.append("description", postFormdata.description);
    formdata.append("isPublished", postFormdata.isPublished); 
    
    for (let file of [...postFormdata.images]) {
      formdata.append("images", file);
    }
    
    httpAxios.post("/api/posts", formdata, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then(response => {
        toast.success(response.data.message);
        setIsSubmit(false);
        setError({});
        setPostFormdata({
          title: "",
          category: "",
          subcategory: "",
          nasted_subcategory: "",
          description: "",
          images: [],
          isPublished: false
        });
        formRef.current.reset(); 
      })
      .catch(error => {
        setIsSubmit(false);

        if (error.response) {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else if (error.response.data.errors) { 
            setError({ ...error.response.data.errors});
          }
        } else {
          toast.error("Something went wrong. Please refresh the browser/app or try again later.");
          setError({});
        }
      });

  };

  useEffect(() => {
    httpAxios.get("/api/categories?subcategory=true&nasted-subcategory=true")
      .then(response => {
        if (response.data.message) {
          setCategoryLoadErr("No data available for adding parent category.");
        }
        setCategoriesData(response.data);
      })
      .catch(error => {
        if (error.response) {
          setCategoryLoadErr(error.response.data.message);
        }
        setCategoryLoadErr("Something went wrong. Please refresh the browser/app or try again later.");
      });
  }, []);
// console.log({images: [...postFormdata.images]})
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      {/* post title */}
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input type="text" className="form-control" name="title" value={postFormdata.title} onChange={handleChange} />
        {error?.title && (
          <div className="invalid-feedback d-block">
          {error.title}
        </div>
        )}
      </div>

      {/* post category */}
      <div className="mb-3">
        <label className="form-label">Choose Post Category</label>

        <select className="form-select mb-3" name="category" value={postFormdata.category} onChange={handleChange} disabled={!categoriesData?.categories?.length}>
          <option value="">--SELECT OPTION--</option>
          {categoriesData?.categories?.length > 0 && (
            categoriesData.categories.map(category => {
              return <option key={category._id} value={category._id}>{category.name}</option>
            })
          )}
        </select>
        {error?.category && !postFormdata.category && (
          <div className="invalid-feedback d-block" style={{ marginTop: "-13px", marginBottom: "12px" }}>
          {error.category}
        </div>
        )}

        <select className="form-select mb-3" name="subcategory" value={postFormdata.subcategory} onChange={handleChange} disabled={!postFormdata.category || !subcategories?.length}>
          <option value="">--SELECT OPTION--</option>
          {subcategories?.length > 0 && subcategories.map(subcategory => (
            <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
          ))}
        </select>
        {error?.category && !postFormdata.subcategory && (
          <div className="invalid-feedback d-block" style={{ marginTop: "-13px", marginBottom: "12px" }}>
          {error.category}
        </div>
        )}

        <select className="form-select" name="nasted_subcategory" value={postFormdata.nasted_subcategory} onChange={handleChange} disabled={!postFormdata.subcategory || !nastedSubcategories?.length}>
          <option value="">--SELECT OPTION--</option>
          {nastedSubcategories?.length > 0 && nastedSubcategories.map(nastedSubcategory => (
            <option key={nastedSubcategory._id} value={nastedSubcategory._id}>{nastedSubcategory.name}</option>
          ))}
        </select> 
        {error?.category && !postFormdata.nasted_subcategory && (
          <div className="invalid-feedback d-block" style={{ marginTop: "3px", marginBottom: "12px" }}>
          {error.category}
        </div>
        )}
      </div>

      {/* post description */}
      <div className="mb-3">
        <label className="form-label">Post Description</label>
        <textarea
          className="form-control"
          rows="4"
          name="description"
          value={postFormdata.description} onChange={handleChange}
        ></textarea>
        {error?.description && (
          <div className="invalid-feedback d-block">
          {error.description}
        </div>
        )}
      </div>

      {/* post images */}
      <div className="mb-3">
        <label className="form-label">Post Images</label>
        <input
          type="file"
          className="form-control"
          multiple
          name="images" 
          onChange={handleChange}
        />
        {error?.images && (
          <div className="invalid-feedback d-block">
          {error.images}
        </div>
        )}
        {/* preview post images */}
        <div className="postImagePreview" style={{marginTop: [...postFormdata.images].length ? "10px" : 0}}>
        {[...postFormdata.images].length > 0 && [...postFormdata.images].map((file, index) => {
          return (
            <img key={index} src={URL.createObjectURL(file)} alt="preview post images" />
          )
        })}
        </div>
      </div>

      {/* isPublished */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isPublished"
          name="isPublished"
          checked={postFormdata.isPublished} onChange={handleChange} 
          style={{cursor: "pointer"}}
        />
        <label className="form-check-label" htmlFor="isPublished" style={{cursor: "pointer"}}>
          Publish
        </label>
      </div> 
      <button type="submit" className="submit_btn w-100" disabled={isSubmit}>
        {isSubmit ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateTaskForm;
