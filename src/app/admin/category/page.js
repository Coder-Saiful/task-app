import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Manage all tasks"
}

const CategoriesPage = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="table-responsive card">
          <div className="card-header text-white" style={{background: "var(--primaryColor)"}}>
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              Manage Categories
            </h2>
          </div>
          <table className="table admin_table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col" width={80}>
                  Image
                </th>
                <th scope="col">Name</th>
                <th scope="col">Created Time</th>
                <th scope="col">Created by</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>
            <tbody>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="fw-bold">4</td>
                <td width={80}>
                  <img
                    src="/nophoto.webp"
                    alt="avatar"
                    style={{ width: "60px" }}
                  />
                </td>
                <td>
                    Sports
                </td>
                <td>
                  0-10-0333
                </td>
                <td>Mainuddin Hossain(admin)</td>
                <td>
                  <div class="btn-group" role="group">
                  <Link href={`/admin/category/4344`} class="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/category/edit/34334`} class="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
