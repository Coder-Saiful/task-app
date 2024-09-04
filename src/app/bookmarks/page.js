import React from "react";
import dateFormat from "dateformat";
import Link from "next/link";

export const metadata = {
  title: "Task App | Bookmarks"
}

const TaskList = () => {
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
                      <i className="fa-solid fa-bookmark"></i>
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
