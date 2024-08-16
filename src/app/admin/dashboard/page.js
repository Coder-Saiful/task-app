import Link from "next/link";
import React from "react";

const Dashboarod = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div
              className="dashboard_item mb-4 mb-lg-0"
              style={{ background: "#C3E1FF" }}
            >
              <h2>54</h2>
              <h4>Users</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="dashboard_item mb-4 mb-lg-0"
              style={{ background: "#FFF4DC" }}
            >
              <h2>54</h2>
              <h4>Employees</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="dashboard_item mb-4 mb-sm-0"
              style={{ background: "#EEE0FA" }}
            >
              <h2>54</h2>
              <h4>Categories</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="dashboard_item" style={{ background: "#03e39169" }}>
              <h2>54</h2>
              <h4>Tasks</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="table-responsive card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h2 className="fs-4 mb-0" style={{ fontWeight: "600" }}>
                  New Tasks
                </h2>
                <Link
                  href={`/admin/tasks`}
                  className="btn btn-sm btn-success border-0"
                  style={{ background: "var(--primaryColor" }}
                >
                  View All
                </Link>
              </div>
              <table className="table table-hover table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col" width={80}>
                      Image
                    </th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td className="border-0" width={80}>
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: "2",
                          textOverflow: "ellipsis",
                          marginBottom: "0",
                        }}
                      >
                        Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment.Build a Dockerized Django Application for
                        Deployment
                      </p>
                    </td>
                    <td className="border-0">DevOps</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="table-responsive card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h2 className="fs-4 mb-0" style={{ fontWeight: "600" }}>
                  New Users
                </h2>
                <Link
                  href={`/admin/users`}
                  className="btn btn-sm btn-success border-0"
                  style={{ background: "var(--primaryColor" }}
                >
                  View All
                </Link>
              </div>

              <table className="table mb-0 table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col" width={80}>
                      Image
                    </th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td width={80} className="border-0">
                      <img
                        src="/nophoto.webp"
                        alt="avatar"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td className="border-0">Md. Saiful Islam</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboarod;
