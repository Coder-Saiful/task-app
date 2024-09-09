"use client"

import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext"; 
import { httpAxios } from "@/helper/httpAxios"; 
import Spinner from "@/components/LoadingAnimation/Spinner"; 
import dateFormat from "dateformat";
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from 'next/navigation';

const CategoryList = () => {
    const {user} = useContext(AuthContext);

    const [categoryData, setCategoryData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const [rowLimit, setRowLimit] = useState(["2", "4", "6", "8", "10", "20", "30", "40", "50"]);

    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const [select, setSelect] = useState({
      limit: limit
    });

    const showCategories = () => {
      setLoading(true);
      httpAxios.get("/api/categories", {
        params: {
          page,
          limit
        }
      })
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
            if (error.response.status == 401) {
              router.push('/accounts/login')
            }else {
              setError(error.response.data.message);
            }
        } else {
          setError("Something went wrong. Please try again later or refresh the web/app"); 
        }
      });
    }

    useEffect(() => {
      showCategories()
    }, [page, limit]);

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

    const handleChangeLimit = e => {
      setSelect({limit: Number(e.target.value)});

      const queryParams = new URLSearchParams(searchParams);
      queryParams.set("limit", e.target.value);

      router.push('/admin/category?'+queryParams);
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
              {categoryData?.categories && !error && !loading && categoryData.categories.map((category, index) => (
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
                
              {loading && !error && (
                <tr><td colSpan={4}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {categoryData?.categories && !error && !loading && (
                <tr className='pagination_row'>
                <td colSpan={7}>
                  <div className="pagination_part">
                  <div className="rowLimit">
                    <span className="me-1">Show</span>
                    <select className="form-select" value={select.limit} onChange={handleChangeLimit}> 
                      {rowLimit?.map((countValue, index) => (
                        <option key={index} value={countValue}>{countValue}</option>
                      ))}
                    </select>
                    <span className="ms-1">Entries</span>
                  </div>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className={`page-item ${page == 1 ? 'disabled' : ''}`}>
                        <Link className="page-link" href={`/admin/category?page=${page-1}${limit ? '&limit='+limit : ""}`}>
                          <span aria-hidden="true">&laquo;</span>
                        </Link>
                      </li>

                      {Array(categoryData.totalPages).fill(1).map((pn, index) => (
                        <li className={`page-item ${page == (index+1) ? 'active' : ''}`} key={index}><Link className="page-link" href={`/admin/category?page=${index+1}${limit ? '&limit='+limit : ""}`}>{index+1}</Link></li>
                      ))}
                          
                      <li className={`page-item ${page < categoryData.totalPages ? '' : 'disabled'}`}>
                        <Link className="page-link" href={`/admin/category?page=${page+1}${limit ? '&limit='+limit : ""}`}>
                          <span aria-hidden="true">&raquo;</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  </div>
                </td>
              </tr>
              )}
            
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