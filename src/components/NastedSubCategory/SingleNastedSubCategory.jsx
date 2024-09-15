import React from 'react';
import Link from "next/link";
import dateFormat from "dateformat";

const SingleNastedSubCategory = ({ nasted_subcategory, skip, index, user, handleNastedSubCategoryDelete, handleDeletedIds, deletedIds }) => {
    return (
        <tr style={{ verticalAlign: "middle" }}>
            {user?.role == "admin" && (
                <td scope="col">
                    <input type="checkbox" style={{ cursor: "pointer", minWidth: "25px" }} value={nasted_subcategory._id} onChange={(e) => handleDeletedIds(e)} name="deletedItem" checked={deletedIds?.includes(nasted_subcategory._id)} />
                </td>
            )}
            <td className="fw-bold sn" style={{ minWidth: "60px", textAlign: "center" }}>{skip + index + 1}</td>
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