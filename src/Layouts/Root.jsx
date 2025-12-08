import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Root;
