import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
