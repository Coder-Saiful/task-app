"use client"

import React, { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { httpAxios } from "@/helper/httpAxios";
import Spinner from "@/components/LoadingAnimation/Spinner";
import { toast } from "react-toastify";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SingleCategory from './SingleCategory';
import CustomPagination from '../Includes/CustomPagination';

const CategoryList = () => {
  const { user } = useContext(AuthContext);

  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [rowLimit, setRowLimit] = useState([10, 2, 4, 6, 25, 50, 75, 100]);

  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const [select, setSelect] = useState({
    limit: limit
  });

  const pathname = usePathname();

  const showCategories = () => {
    setLoading(true);
    httpAxios.get("/api/categories", {
      params: {
        page,
        limit,
        'subcategory-id': true
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

        if (error.response) {
          if (error.response.status == 401) {
            router.push('/accounts/login')
          } else {
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

    httpAxios.delete("/api/categories/" + id)
      .then(response => {
        showCategories();
        e.target.innerHTML = "Delete";
        e.target.disabled = false;
        toast.success(response.data.message);
      })
      .catch(error => {
        e.target.innerHTML = "Delete";
        e.target.disabled = false;

        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later or refresh the web/app");
        }
      });
  }

  const handleChangeLimit = e => {
    setSelect({ limit: Number(e.target.value) });

    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("limit", e.target.value);

    router.replace('/admin/category?' + queryParams.toString());
  }

  return (
    <section>
      <div className="container mt-5">
        <div className="text-end mb-3"><Link href="/admin/category/create" className="text-decoration-none btn btn-info">Create</Link></div>
        <div className="table-responsive card">
          <div className="card-header text-white" style={{ background: "var(--primaryColor)" }}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage All Category
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col">Category Name</th>
                <th scope="col">Total Subcategory</th>
                <th scope="col">Created Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryData?.categories?.length > 0 && !error && !loading && categoryData.categories.map((category, index) => (
                <SingleCategory key={category._id} category={category} skip={categoryData.skip} index={index} user={user} handleCategoryDelete={(e, id) => handleCategoryDelete(e, id)} />
              ))}

              {loading && !error && (
                <tr><td colSpan={5}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {categoryData?.categories && !error && !loading && (
                <CustomPagination select={select} handleChangeLimit={(e) => handleChangeLimit(e)} rowLimit={rowLimit} page={page} limit={limit} totalPages={categoryData.totalPages} pathname={pathname} />
              )}

              {error && (
                <tr>
                  <td colSpan={5}><h5 className="text-center mb-0">{error}</h5></td>
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