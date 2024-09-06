"use client";
import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { httpAxios } from "@/helper/httpAxios";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

const activeLink = (currentPath, pathname) => {
  return currentPath === pathname ? "active" : "";
};

const AdminNavbar3 = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const {user, setUser} = useContext(AuthContext);

  useEffect(() => {
    document.querySelector(".navbar-collapse.admin_navbar_collapse").classList.remove("show");
  }, [currentPath]);

  const handleLogout = () => {
    httpAxios
      .post("/api/users/logout")
      .then((response) => {
        toast.success(response.data.message);
        router.push("/accounts/login");
        setUser(null);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error(
            "Something went wrong. Please refresh the browser then try again."
          );
        }
      });
  };
  return (
    <nav className="navbar navbar-expand-md bg-dark admin_nav3 py-1 py-md-0 h-100 flex-column">
      <div className="container-fluid px-md-0">
        <div className="profile_container d-flex align-items-center" style={{ padding: "20px 15px" }}>
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
            <h5 className="text-white mb-0" style={{ fontSize: "16px" }}>
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
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse admin_navbar_collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li>
              <Link href={`/`} target="_blank">
                Visit Website
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/dashboard`}
                className={activeLink(currentPath, "/admin/dashboard")}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/users`}
                className={activeLink(currentPath, "/admin/users")}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/employee`}
                className={activeLink(currentPath, "/admin/employee")}
              >
                Employees
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/tasks`}
                className={activeLink(currentPath, "/admin/tasks")}
              >
                Tasks
              </Link>
            </li><li>
              <Link
                href={`/admin/category`}
                className={activeLink(currentPath, "/admin/category")}
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/profile`}
                className={activeLink(currentPath, "/admin/profile")}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href={`/admin/change-password`}
                className={activeLink(currentPath, "/admin/change-password")}
              >
                Change Password
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout_btn">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="empty_div w-100 h-100 bg-dark d-none d-md-block">

        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar3;
