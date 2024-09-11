import React from 'react';
import Link from "next/link";

const CustomPagination = ({select, handleChangeLimit, rowLimit, page, limit, totalPages, pathname}) => {
    return (
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
                                <Link className="page-link" href={`${pathname}?page=${page - 1}${limit ? '&limit=' + limit : ""}`}>
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>

                            {Array(totalPages).fill(1).map((pn, index) => (
                                <li className={`page-item ${page == (index + 1) ? 'active' : ''}`} key={index}><Link className="page-link" href={`${pathname}?page=${index + 1}${limit ? '&limit=' + limit : ""}`}>{index + 1}</Link></li>
                            ))}

                            <li className={`page-item ${page < totalPages ? '' : 'disabled'}`}>
                                <Link className="page-link" href={`${pathname}?page=${page + 1}${limit ? '&limit=' + limit : ""}`}>
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </td>
        </tr>
    );
};

export default CustomPagination;