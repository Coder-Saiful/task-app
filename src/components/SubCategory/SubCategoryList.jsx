"use client"

import React, { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { httpAxios } from "@/helper/httpAxios";
import Spinner from "@/components/LoadingAnimation/Spinner";
import { toast } from "react-toastify";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SingleSubCategory from '@/components/SubCategory/SingleSubCategory';
import CustomPagination from '@/components/Includes/CustomPagination';

const SubCategoryList = () => {
  const { user } = useContext(AuthContext);

  const [subcategoryData, setSubcategoryData] = useState({});
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

  const pathname = usePathname();

  const showSubcategories = () => {
    setLoading(true);
    httpAxios.get("/api/sub-categories", {
      params: {
        page,
        limit,
        'parent-category': true,
        'nasted-subcategory-id': true
      }
    })
      .then(response => {

        setLoading(false);
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError(null);
          setSubcategoryData(response.data);
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
    showSubcategories()
  }, [page, limit]);

  const handleSubCategoryDelete = (e, id) => {
    e.target.innerHTML = "Deleting...";
    e.target.disabled = true;

    httpAxios.delete("/api/sub-categories/" + id)
      .then(response => {
        showSubcategories();
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
    const newLimit = Number(e.target.value);
    setSelect({ limit: newLimit});
    
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("limit", e.target.value);
    router.replace('/admin/subcategory?' + queryParams.toString());
  }

  return (
    <section>
      <div className="container mt-5">
        <div className="text-end mb-3"><Link href="/admin/subcategory/create" className="text-decoration-none btn btn-info">Create</Link></div>
        <div className="table-responsive card">
          <div className="card-header text-white" style={{ background: "var(--primaryColor)" }}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage All Subategory
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col">Subcategory Name</th>
                <th scope="col">Parent Category</th>
                <th scope="col">Total Nasted Subcategory</th>
                <th scope="col">Created Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {subcategoryData?.subcategories && !error && !loading && subcategoryData.subcategories.map((subcategory, index) => (
                <SingleSubCategory key={subcategory._id} subcategory={subcategory} skip={subcategoryData.skip} index={index} user={user} handleSubCategoryDelete={(e, id) => handleSubCategoryDelete(e, id)} />
              ))}

              {loading && !error && (
                <tr><td colSpan={6}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {subcategoryData?.subcategories && !error && !loading && (
                <CustomPagination select={select} handleChangeLimit={(e) => handleChangeLimit(e)} rowLimit={rowLimit} page={page} limit={limit} totalPages={subcategoryData.totalPages} pathname={pathname} />
              )}

              {error && (
                <tr>
                  <td colSpan={6}><h5 className="text-center mb-0">{error}</h5></td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SubCategoryList;