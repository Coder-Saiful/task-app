import React from 'react';
import Link from "next/link";
import dateFormat from "dateformat";

const SingleCategory = ({ category, skip, index, user, handleCategoryDelete }) => {
    return (
        <tr style={{ verticalAlign: "middle" }}>
            <td className="fw-bold" style={{ minWidth: "80px" }}>{skip + index + 1}</td>
            <td>{category.name}</td>
            <td>{category?.subcategories.length}</td>
            <td>{dateFormat(category.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</td>
            <td>
                <div className="btn-group" role="group">
                    <>
                        <Link href={`/admin/category/${category._id}`} className="btn btn-outline-success btn-sm">
                            View
                        </Link>
                        <Link href={`/admin/category/edit/${category._id}`} className="btn btn-outline-primary btn-sm">
                            Edit
                        </Link>
                    </>
                    {user?.role == "admin" && (
                        <>
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => handleCategoryDelete(e, category._id)}>
                                Delete
                            </button>
                        </>
                    )}
             
                </div>
            </td>
        </tr>
    );
};

export default SingleCategory;