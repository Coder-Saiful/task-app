"use client";
import { httpAxios } from "@/helper/httpAxios"; 
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useContext } from "react";
import { toast } from "react-toastify";              
import { AuthContext } from "@/context/AuthContext";

const Header = () => {
  const {user, setUser} = useContext(AuthContext);
  const currentPath = usePathname();
  const router = useRouter();

  if (currentPath.startsWith("/admin")) {
    return null;
  }

  const activeLink = (currentPath, pathname) => {
    return currentPath === pathname ? "active" : "";
  };

  useEffect(() => {
    document
      .querySelector(".navbar-collapse.main_navbar_collapse")
      .classList.remove("show");
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
    <nav className="navbar navbar-expand-lg main_nav py-2 py-lg-0 px-lg-4" style={{borderBottom: ".1px solid rgb(175 175 175 / 60%)", background: "var(--darkPrimary)"}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-4 py-0" href={"/"}>
          Task Manager
        </Link>
        <button
          className="navbar-toggler px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="collapse navbar-collapse main_navbar_collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${activeLink(
                  currentPath,
                  "/"
                )}`}
                href={"/"}
              >
                Home
              </Link>
            </li>

            {user ? (
              <>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/tasks"
                  )}`}
                  href={"/tasks"}
                >
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/accounts/profile"
                  )}`}
                  href={"/accounts/profile"}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/accounts/change-password"
                  )}`}
                  href={"/accounts/change-password"}
                >
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/bookmarks"
                  )}`}
                  href={"/bookmarks"}
                >
                  Bookmarks[4]
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-white logout_button`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
            ) : (
              <>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/accounts/login"
                  )}`}
                  href={"/accounts/login"}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${activeLink(
                    currentPath,
                    "/accounts/register"
                  )}`}
                  href={"/accounts/register"}
                >
                  Register
                </Link>
              </li>
            </>
            )}

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
