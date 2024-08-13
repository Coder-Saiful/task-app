"use client"

import React from 'react';
import Image from "next/image";

const AdminNavbar2 = () => {
    return (
        <div className="admin_nav">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              Open Menu
            </button>

            <div
              className="offcanvas offcanvas-start bg-dark admin_nav_offcanvas"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <div
                  className="profile_container d-flex align-items-center"
                >
                  <div className="image" style={{ marginRight: "5px" }}>
                    <Image
                      src={`/nophoto.webp`}
                      alt="Picture of the author"
                      style={{ borderRadius: "50%" }}
                      width={50}
                      height={50}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="info">
                    <h5
                      className="text-white mb-0"
                      style={{ fontSize: "16px" }}
                    >
                      Md. Saiful Islam
                    </h5>
                    <p
                      className="text-white mb-0 text-secondary"
                      style={{ fontSize: "12px", fontWeight: "300" }}
                    >
                      Admin
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="adminNavClose"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                    <span></span>
                    <span></span>
                </button>
              </div>
            </div>
          </div>
    );
};

export default AdminNavbar2;