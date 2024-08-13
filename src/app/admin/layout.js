import AdminNavbar from "@/components/Includes/AdminNavbar";
import React from "react";
import AdminNavbar3 from './../../components/Includes/AdminNavbar3';

export const metadata = {
  title: "Admin Panel",
};

const DashboardLayout = ({ children }) => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-4 px-0">
          {/* <AdminNavbar /> */}
          {/* <AdminNavbar2 /> */}
          <AdminNavbar3 />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-8 mb-5">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
