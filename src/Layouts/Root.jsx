import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <nav className="sticky top-0 right-0 left-0 z-50 transition-all duration-500 backdrop-blur-sm">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-[1500px] mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Root;
