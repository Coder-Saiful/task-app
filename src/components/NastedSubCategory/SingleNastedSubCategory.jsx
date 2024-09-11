import React from 'react';
import Link from "next/link";
import dateFormat from "dateformat";

const SingleNastedSubCategory = ({ nasted_subcategory, skip, index, user, handleNastedSubCategoryDelete }) => {
    return (
        <tr style={{ verticalAlign: "middle" }}>
            <td className="fw-bold" style={{ minWidth: "80px" }}>{skip + index + 1}</td>
            <td>{nasted_subcategory.name}</td>
            <td>{nasted_subcategory.parentCategory?.name}</td>
            <td>{dateFormat(nasted_subcategory.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</td>
            <td>
                <div className="btn-group" role="group">
                    <>
                        <Link href={`/admin/nasted-subcategory/${nasted_subcategory._id}`} className="btn btn-outline-success btn-sm">
                            View
                        </Link>
                        <Link href={`/admin/nasted-subcategory/${nasted_subcategory._id}/edit`} className="btn btn-outline-primary btn-sm">
                            Edit
                        </Link>
                    </>
                    {user?.role == "admin" && (
                        <>
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => handleNastedSubCategoryDelete(e, nasted_subcategory._id)}>
                                Delete
                            </button>
                        </>
                    )}
             
                </div>
            </td>
        </tr>
    );
};

export default SingleNastedSubCategory;