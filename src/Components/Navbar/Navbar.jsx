import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="max-w-[1500px] px-2 md:px-6 mx-auto navbar">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Navbar Start */}
      <NavLink className="navbar-start" to={"/"}>
        <img
          className="size-14"
          src="https://i.ibb.co.com/NnSPQd66/2.png"
          alt=""
        />
        <p className="text-2xl font-bold text-[#FF0019]">
          Rakto<span className="text-[#263087]">Bondhu</span>
        </p>
      </NavLink>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10 font-semibold text-[16px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/blood-request"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Blood Request</li>
          </NavLink>
          <NavLink
            to={"/blood-group"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Blood Group</li>
          </NavLink>
          <NavLink
            to={"/members"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Members</li>
          </NavLink>
          <NavLink
            to={"/groups"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Groups</li>
          </NavLink>
        </ul>
      </div>

      {/* Navbar End — Hamburger moved here */}
      <div className="navbar-end">
        {/* Hamburger Button */}
        <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <div className="flex gap-2 items-center">
          <button className="btn hidden bg-[#FF0019] hover:bg-white hover:text-[#FF0019] text-white lg:flex rounded-lg">
            Sign In
          </button>
          <button className="btn hidden text-white bg-[#263087] hover:bg-white hover:text-[#263087] lg:flex rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 min-h-full w-72 p-4 space-y-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019] w-max"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/blood-request"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019] w-max"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Blood Request</li>
          </NavLink>
          <NavLink
            to={"/blood-group"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019] w-max"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Blood Group</li>
          </NavLink>
          <NavLink
            to={"/members"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019] w-max"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Members</li>
          </NavLink>
          <NavLink
            to={"/groups"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-b-2 border-[#FF0019] w-max"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Groups</li>
          </NavLink>
          <div className="mt-3 space-y-1">
            <NavLink className={"text-[#FF0019]"}>
              <li>Sign In</li>
            </NavLink>
            <NavLink className={"text-[#FF0019]"}>
              <li>Sign Up</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
