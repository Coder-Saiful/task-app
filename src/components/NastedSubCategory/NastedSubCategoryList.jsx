"use client"

import React, { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { httpAxios } from "@/helper/httpAxios";
import Spinner from "@/components/LoadingAnimation/Spinner";
import { toast } from "react-toastify";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SingleNastedSubCategory from '@/components/NastedSubCategory/SingleNastedSubCategory';
import CustomPagination from '@/components/Includes/CustomPagination';

const NastedSubCategoryList = () => {
  const { user } = useContext(AuthContext);

  const [nastedSubcategoryData,setNastedSubcategoryData] = useState({});
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

  const showNastedSubcategories = () => {
    setLoading(true);
    httpAxios.get("/api/nasted-sub-categories", {
      params: {
        page,
        limit,
        'parent-category': true
      }
    })
      .then(response => { 
        setLoading(false);
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError(null);
          setNastedSubcategoryData(response.data);
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
          setError("Something went wrong. Please refresh the browser/app or try again later.");
        }
      });
  }

  useEffect(() => {
    showNastedSubcategories()
  }, [page, limit]);

  const handleNastedSubCategoryDelete = (e, id) => {
    e.target.innerHTML = "Deleting...";
    e.target.disabled = true;

    httpAxios.delete("/api/nasted-sub-categories/" + id)
      .then(response => {
        showNastedSubcategories();
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
          toast.error("Something went wrong. Please refresh the browser/app or try again later.");
        }
      });

  }

  const handleChangeLimit = e => {
    const newLimit = Number(e.target.value);
    setSelect({ limit: newLimit});
    
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("limit", e.target.value);
    router.replace('/admin/nasted-subcategory?' + queryParams.toString());
  }

  return (
    <section>
      <div className="container mt-5">
        <div className="text-end mb-3"><Link href="/admin/nasted-subcategory/create" className="text-decoration-none btn btn-info">Create</Link></div>
        <div className="table-responsive card">
          <div className="card-header text-white" style={{ background: "var(--primaryColor)" }}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage All Nasted Subategory
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col">Nasted Subcategory Name</th>
                <th scope="col">Parent Category</th>
                <th scope="col">Created Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {nastedSubcategoryData?.nasted_subcategories && !error && !loading && nastedSubcategoryData.nasted_subcategories.map((nasted_subcategory, index) => (
                <SingleNastedSubCategory key={nasted_subcategory._id} nasted_subcategory={nasted_subcategory} skip={nastedSubcategoryData.skip} index={index} user={user} handleNastedSubCategoryDelete={(e, id) => handleNastedSubCategoryDelete(e, id)} />
              ))}

              {loading && !error && (
                <tr><td colSpan={6}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {nastedSubcategoryData?.nasted_subcategories && !error && !loading && (
                <CustomPagination select={select} handleChangeLimit={(e) => handleChangeLimit(e)} rowLimit={rowLimit} page={page} limit={limit} totalPages={nastedSubcategoryData.totalPages} pathname={pathname} />
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

export default NastedSubCategoryList;