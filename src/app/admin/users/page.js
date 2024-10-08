import Link from "next/link";

export const metadata = {
  title: "Manage all users",
};

const UsersPage = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="table-responsive card">
          <div className="card-header position-relative">
            <h2 className="fs-4 mb-0 text-center text-white" style={{ fontWeight: "600" }}>
              Manage Users
            </h2>
          </div>
          <table className="table admin_table mb-0">
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
                  <div className="btn-group" role="group">
                    <Link href={`/admin/users/4344`} className="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/66c5229cdced002984ceea87`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
                  <div className="btn-group" role="group">
                    <Link href={`/admin/users/4344`} className="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/66c5229cdced002984ceea87`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
                  <div className="btn-group" role="group">
                    <Link href={`/admin/users/4344`} className="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/66c5229cdced002984ceea87`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
                  <div className="btn-group" role="group">
                    <Link href={`/admin/users/4344`} className="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/66c5229cdced002984ceea87`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
                  <div className="btn-group" role="group">
                    <Link href={`/admin/users/4344`} className="btn btn-outline-success btn-sm">
                      View
                    </Link>
                    <Link href={`/admin/users/edit/66c5229cdced002984ceea87`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan={7}>
                  <div className="pagination_part">
                  <div className="rowLimit">
                    <span className="me-1">Show</span>
                    <select className="form-select">
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                      <option>50</option>
                    </select>
                    <span className="ms-1">Entries</span>
                  </div>
                  <nav>
                    <ul class="pagination mb-">
                      <li class="page-item disabled">
                        <a class="page-link">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
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
