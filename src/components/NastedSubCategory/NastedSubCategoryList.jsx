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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [nastedSubcategoryData, setNastedSubcategoryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowLimit, setRowLimit] = useState([10, 2, 4, 6, 25, 50, 75, 100]);
  const [deletedIds, setDeletedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [select, setSelect] = useState({
    limit: ""
  });
  const [isFilter, setIsFilter] = useState(false);


  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const order = searchParams.get("order") || "";
  const minDateRange = searchParams.get("minDateRange") || "";
  const maxDateRange = searchParams.get("maxDateRange") || "";

  const [filters, setFilters] = useState({
    sort,
    order,
    minDateRange,
    maxDateRange
  });

  const showNastedSubcategories = () => {
    setLoading(true);
    httpAxios.get("/api/nasted-sub-categories", {
      params: {
        page,
        limit,
        search,
        sort,
        order,
        minDateRange,
        maxDateRange,
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
    if (!search) {
      setSearchQuery("");
    }
    showNastedSubcategories();
  }, [page, limit, search, sort, order, minDateRange, maxDateRange]);

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


  const handleDeletedIds = (e) => {

    if (!nastedSubcategoryData?.nasted_subcategories?.length) return;

    const ids = nastedSubcategoryData.nasted_subcategories.map(sc => sc._id);

    if (e.target.name == "deletedItem" && deletedIds.includes(e.target.value)) {
      const copyDeltedIds = deletedIds.map(item => item);
      const indexOfId = copyDeltedIds.indexOf(e.target.value);
      copyDeltedIds.splice(indexOfId, 1);
      setDeletedIds(copyDeltedIds);
    }
    if (e.target.name == "deletedItem" && !deletedIds.includes(e.target.value)) {
      setDeletedIds(preValue => ([
        ...preValue,
        e.target.value
      ]));
    }
    if (e.target.name == "deletedAllItems" && JSON.stringify(ids) == JSON.stringify(deletedIds)) {
      ;
      setDeletedIds([]);
    }
    if (e.target.name == "deletedAllItems" && JSON.stringify(ids) != JSON.stringify(deletedIds)) {
      setDeletedIds(ids);
    }
  }

  const handleMultipleDelete = (e) => {
    e.target.innerHTML = `Deleting...`;
    e.target.disabled = true;

    httpAxios.post("/api/nasted-sub-categories/delete-multiple", { deletedIds })
      .then(response => {
        setDeletedIds([]);
        showNastedSubcategories();
        e.target.innerHTML = "Delete";
        e.target.disabled = false;
        toast.success(response.data.message);
      })
      .catch(error => {
        e.target.innerHTML = `Delete ${deletedIds?.length} ${deletedIds.length == 1 ? "Item" : 'Items'}`;
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
    setSelect({ limit: newLimit });

    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("page", 1);
    queryParams.set("limit", e.target.value);

    router.replace('/admin/nasted-subcategory?' + queryParams.toString());

    // const queryParams = `page=1&limit=${newLimit}${search && '&search='+search}`;
    // router.replace("/admin/nasted-subcategory?"+queryParams);
    // console.log(queryParams)
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim();
    setSearchQuery(searchValue);

    setDeletedIds([]);

    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("page", 1);
    queryParams.set("limit", limit);
    queryParams.set("search", searchValue);

    if (!searchValue) {
      queryParams.delete("search");
    }

    router.replace('/admin/nasted-subcategory?' + queryParams.toString());
  }

  const handleFilter = e => {
    const { name, value } = e.target;
    setFilters((preValue) => ({
      ...preValue,
      [name]: value
    }));

    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("page", 1);
    queryParams.set("limit", limit);

    if (search) {
      queryParams.set("search", search);
    } else {
      queryParams.delete("search");
    }
    if (value) {
      queryParams.set(name, value);
    } else {
      queryParams.delete(name);
    }

    router.replace('/admin/nasted-subcategory?' + queryParams.toString());
  }

  return (
    <section>
      <div className="container mt-5">
        {/* filtering */}
        <form>
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
              <label>Sort:</label>
              <select className="form-select" name="sort" value={sort} onChange={handleFilter}>
                <option value="">Default</option>
                <option value="name">Nasted Subcategory</option>
                <option value="createdAt">Created Time</option>
                <option value="updatedAt">Updated Time</option>
              </select>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
              <label>Order:</label>
              <select className="form-select" name="order" value={order} onChange={handleFilter}>
                <option value="">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3 mb-sm-0">
              <label>Starting Date:</label>
              <input type="date" className="form-control" name="minDateRange" value={minDateRange} onChange={handleFilter} />
            </div>
            <div className="col-lg-3 col-sm-6">
              <label>Ending Date:</label>
              <input type="date" className="form-control" name="maxDateRange" value={maxDateRange} onChange={handleFilter} />
            </div>
          </div>
        </form>
        {/* add, delete, search */}
        <div className='row mb-2'>
          <div className="col-lg-6 d-flex align-items-center">
            {deletedIds.length > 0 && user?.role == "admin" && (
              <button className="text-decoration-none btn btn-sm btn-danger me-2" onClick={handleMultipleDelete}><i className="fa-solid fa-trash" style={{ border: "1px solid white", borderRadius: "50%", width: "20px", height: "20px", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "4px", fontSize: "11px", marginTop: "2px" }}></i>Delete {deletedIds.length} {deletedIds.length == 1 ? "Item" : 'Items'}</button>
            )}

            <Link href="/admin/nasted-subcategory/create" className="text-decoration-none btn btn-info btn-sm me-2"><i className="fa-solid fa-plus" style={{ border: "1px solid black", borderRadius: "50%", width: "20px", height: "20px", display: "inline-flex", justifyContent: "center", alignItems: "center", color: "black", marginRight: "4px" }}></i>Create</Link>

            <button className="btn btn-sm btn-warning me-2"><i className="fa-solid fa-filter" style={{ marginRight: "4px" }}></i>Show Filter</button>

            <button className='btn btn-sm btn-secondary d-flex align-items-center'><i className="fa-regular fa-circle-xmark" style={{ marginRight: "4px", fontSize: "16px" }}></i>Reset Filter</button>

          </div>
          <div className="col-lg-6 mt-3 mt-lg-0">
            <div className="row justify-content-end">

              <div className="col-xl-8 col-lg-12">
                <input type='search' placeholder='Search' name='search' className="form-control" value={searchQuery} onChange={handleSearch} />
              </div>
            </div>
          </div>
        </div>

        <div className="table-responsive card">
          <div className="card-header text-white" style={{ background: "var(--primaryColor)" }}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage All Nasted Subategory {nastedSubcategoryData?.totalData && '(' + nastedSubcategoryData?.totalData + ')'}
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                {user?.role == "admin" && (
                  <th scope="col">
                    <input type="checkbox" style={{ cursor: "pointer", minWidth: "25px" }} name="deletedAllItems" onChange={handleDeletedIds} disabled={!nastedSubcategoryData?.nasted_subcategories?.length} checked={nastedSubcategoryData?.nasted_subcategories?.length == deletedIds.length} />
                  </th>
                )}
                <th scope="col">#S/N</th>
                <th scope="col">Nasted Subcategory Name</th>
                <th scope="col">Parent Category</th>
                <th scope="col">Created Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {nastedSubcategoryData?.nasted_subcategories && !error && !loading && nastedSubcategoryData.nasted_subcategories.map((nasted_subcategory, index) => (
                <SingleNastedSubCategory key={nasted_subcategory._id} nasted_subcategory={nasted_subcategory} skip={nastedSubcategoryData.skip} index={index} user={user} handleNastedSubCategoryDelete={(e, id) => handleNastedSubCategoryDelete(e, id)} handleDeletedIds={(e) => handleDeletedIds(e)} deletedIds={deletedIds} />
              ))}

              {loading && !error && (
                <tr><td colSpan={6}><Spinner /></td></tr>
              )}
            </tbody>
            <tfoot>
              {nastedSubcategoryData?.nasted_subcategories && !error && !loading && (
                <CustomPagination select={select} handleChangeLimit={(e) => handleChangeLimit(e)} rowLimit={rowLimit} page={page} limit={limit} totalPages={nastedSubcategoryData.totalPages} pathname={pathname} search={search} />
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