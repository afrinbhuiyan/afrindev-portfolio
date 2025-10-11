import React from "react";
import { Outlet } from "react-router";
import BackToTop from "../copmonents/BackToTop";
import Navbar from "../copmonents/Navbar";

const Main = () => {
  return (
    <div className="sunflower min-h-screen bg-gray-950 text-white">
      <BackToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
