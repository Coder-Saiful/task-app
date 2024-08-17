import React from "react";

export const metadata = {
  title: "Manage all tasks"
}

const Tasks = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="table-responsive card">
          <div className="card-header">
            <h2 className="fs-4 mb-0 text-center" style={{ fontWeight: "600" }}>
              New Tasks
            </h2>
          </div>
          <table className="table table-hover table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#S/N</th>
                <th scope="col" width={80}>
                  Image
                </th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Author</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>
            <tbody>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <td className="border-0">4</td>
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
                    Build a Dockerized Django Application for Deployment.
                  </p>
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
                    Build a Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.Build a
                    Dockerized Django Application for Deployment.
                  </p>
                </td>
                <td className="border-0">DevOps</td>
                <td className="border-0">Maianuddin Hossain</td>
                <td className="border-0">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-success btn-sm">
                      View
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
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

export default Tasks;
