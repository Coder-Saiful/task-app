"use client"

import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext"; 
import { httpAxios } from "@/helper/httpAxios"; 
import Spinner from "@/components/LoadingAnimation/Spinner"; 
import dateFormat from "dateformat";
import { toast } from "react-toastify";

const CategoryList = () => {
    const {user} = useContext(AuthContext);
    const [categoryData, setCategoryData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const showCategories = () => {
      httpAxios.get("/api/categories")
      .then(response => {
        setLoading(false);
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError(null);
          setCategoryData(response.data);
        }
      })
      .catch(error => {
        setLoading(false);

        if (error.response)  {
            setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again later or refresh the web/app"); 
        }
      });
    }

    useEffect(() => {
      showCategories()
    }, []);

    const handleCategoryDelete = (e, id) => {
      e.target.innerHTML = "Deleting...";
      e.target.disabled = true;
      
      httpAxios.delete("/api/categories/"+id)
        .then(response => {
          showCategories();
          e.target.innerHTML = "Delete";
          e.target.disabled = false;
          toast.success(response.data.message);
        })
        .catch(error => {
          e.target.innerHTML = "Delete";
          e.target.disabled = false;

          if (error.response)  {
              toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong. Please try again later or refresh the web/app");
          }
        });
    }
 
    return (
        <section>
      <div className="container mt-5">
        <div className="text-end mb-3"><Link href="/admin/category/create" className="text-decoration-none btn btn-info">Create</Link></div>
        <div className="table-responsive card">
          <div className="card-header text-white" style={{background: "var(--primaryColor)"}}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage All Category
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Created Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryData?.categories && !error && categoryData.categories.map((category, index) => (
                <tr style={{ verticalAlign: "middle" }} key={category._id}>
                  <td className="fw-bold" style={{minWidth: "80px"}}>{categoryData.skip + index + 1}</td>
                  <td>{category.name}</td>
                  <td>{dateFormat(category.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</td>
                  <td>
                    <div className="btn-group" role="group">
                    <Link href={`/admin/category/${category._id}`} className="btn btn-outline-success btn-sm">
                        View
                      </Link>
                      {user?.role == "admin" && (
                          <>
                            <Link href={`/admin/category/edit/${category._id}`} className="btn btn-outline-primary btn-sm">
                          Edit
                          </Link>
                          <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => handleCategoryDelete(e, category._id)}>
                            Delete
                          </button>
                          </>
                      )}
                      {user?.role == "manager" && (
                          <>
                             <Link href={`/admin/category/edit/${category._id}`} className="btn btn-outline-primary btn-sm">
                          Edit
                          </Link>
                          </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
                
              {loading && (
                <tr><td colSpan={4}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {error && (
                <tr>
                  <td colSpan={4}><h5 className="text-center mb-0">{error}</h5></td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>
    </section>
    );
};

export default CategoryList;