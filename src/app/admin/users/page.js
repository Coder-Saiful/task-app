import Link from "next/link";

export const metadata = {
  title: "Manage all users",
};

const UsersPage = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="table-responsive card">
          <div className="card-header" style={{background: "var(--primaryColor)"}}>
            <h2 className="fs-4 mb-0 text-center text-white" style={{ fontWeight: "600" }}>
              Manage Users
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
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Join Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="fw-bold">44</td>
                <td width={80}>
                  <img
                    src="/nophoto.webp"
                    alt="avatar"
                    style={{ width: "60px" }}
                  />
                </td>
                <td>
                  Md. Saiful Islam
                </td>
                <td>
                  saiful@gmaii.com
                </td>
                <td>0185738734</td>
                <td>12-02-2020</td>
                <td>
                  <div class="btn-group" role="group">
                    <Link href={`/admin/users/4344`} class="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/34334`} class="btn btn-outline-primary btn-sm">
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

export default UsersPage;
