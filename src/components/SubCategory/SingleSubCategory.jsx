import React from 'react';
import Link from "next/link";
import dateFormat from "dateformat";

const SingleSubCategory = ({ subcategory, skip, index, user, handleSubCategoryDelete }) => {
    return (
        <tr style={{ verticalAlign: "middle" }}>
            <td className="fw-bold" style={{ minWidth: "80px" }}>{skip + index + 1}</td>
            <td>{subcategory.name}</td>
            <td>{subcategory.parentCategory?.name}</td>
            <td>{subcategory.nasted_subcategories?.length}</td>
            <td>{dateFormat(subcategory.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</td>
            <td>
                <div className="btn-group" role="group">
                    <>
                        <Link href={`/admin/subcategory/${subcategory._id}`} className="btn btn-outline-success btn-sm">
                            View
                        </Link>
                        <Link href={`/admin/subcategory/${subcategory._id}/edit`} className="btn btn-outline-primary btn-sm">
                            Edit
                        </Link>
                    </>
                    {user?.role == "admin" && (
                        <>
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => handleSubCategoryDelete(e, subcategory._id)}>
                                Delete
                            </button>
                        </>
                    )}
             
                </div>
            </td>
        </tr>
    );
};

export default SingleSubCategory;