"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const activeLink = (currentPath, pathname) => {
  return currentPath === pathname ? "active" : "";
};

const AdminNavbar = () => {
  const currentPath = usePathname();
  return (
    <aside className="admin_nav">
      <div
        className="profile_container d-flex align-items-center bg-dark"
        style={{ padding: "20px 15px" }}
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
      <ul className="bg-dark h-100">
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
            href={`/admin/tasks`}
            className={activeLink(currentPath, "/admin/tasks")}
          >
            Tasks
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
          <Link
            href={`/accounts/logout`}
            className={activeLink(currentPath, "/")}
          >
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminNavbar;
