"use client"

import React, {useContext} from "react";
import dateFormat from "dateformat";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

const TaskList = () => {
    const {user} = useContext(AuthContext);

    if (!user) {
        return (
            <section className="hero text-center mb-4">
    <div className="hero-content">
      <h2 className="mb-4">Stay Organized &amp; Productive</h2>
      <p className="m-auto">Manage your tasks effortlessly and never miss a deadline. Start using TaskApp today to boost your productivity!</p>
      <div className="cta-buttons">
        <Link href="/accounts/register" className="primary-btn">Sign Up Now</Link>
      </div>
    </div>
  </section>
        )
    }
  return (
    <section className="my-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
            <div className="task_card">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-white">
                  <div className="author d-flex align-items-center">
                    <div className="image me-2">
                      <img src="/nophoto.webp" alt="avatar" />
                    </div>
                    <div className="name_and_date">
                      <h4>Md. Saiful Islam</h4>
                      <h6>
                        {dateFormat(
                          "2024-09-03T00:25:16.594+00:00",
                          "mmmm dd 'at' h:MM TT"
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="bookmark_or_menu_icon">
                    <div className="bookmark">
                      {/* <i className="fa-regular fa-bookmark"></i> */}
                      {/* <i className="fa-solid fa-bookmark"></i> */}

                      <div className="dropdown">
                        <div
                          className="dotted_menu_icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="text-decoration-none edit" href="#">
                              <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <button className="delete" href="#">
                              <i className="fa-solid fa-trash text-danger"></i>{" "}
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/tasks/75438434" className={`text-decoration-none`}>
                  <div className="card-body p-0">
                    <div className="blog_image">
                      <img
                        src="/responsive-web-design.webp"
                        alt="post image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog_text">
                      <h2>The Ultimate Guide to Responsive Web Design</h2>
                      <p>
                        Description**: This blog post will provide a
                        comprehensive guide to responsive web design, covering
                        the essential techniques and tools that developers can
                        use to create websites that look great on any device,
                        regardless of screen size or resolution.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
