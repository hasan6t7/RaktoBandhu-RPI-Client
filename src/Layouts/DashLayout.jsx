import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet} from "react-router";

import { AiFillHome } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaHeartbeat, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { TbProgress } from "react-icons/tb";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { getBaseUrl } from "../utils/useGetUrl";

const DashLayout = () => {
  const { loading, user } = useContext(AuthContext);
 
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${getBaseUrl()}api/auth/users/${user.email}`)
        .then((res) => {
          const data = res.data.data;
          const role = data.role;
          setRole(role);
        })
        .catch((err) => {
          console.error("Error fetching role:", err);
        });
    }
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold">Dashboard</div>
        </div>

        {/* Routed Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-1">
          {/* Logo */}
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

          {/* Universal Dashboard Home */}
          <li className="font-bold">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#FF0019] " : "")}
              to="/dashboard"
              end
            >
              <AiFillHome size={20} /> Dashboard Home
            </NavLink>
          </li>

          {role === "user" && (
            <>
              <li className="font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF0019] " : ""
                  }
                  to="/dashboard/profile"
                >
                  <FaUsers size={20} /> Profile
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF0019] " : ""
                  }
                  to="/dashboard/blood-request"
                >
                  <FaHeartbeat size={20} />Blood Request 
                </NavLink>
              </li>
             
              
            </>
          )}

          {role === "admin" && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF0019] " : ""
                  }
                  to="/dashboard/all-employee-list"
                >
                  All Employee List
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FF0019] " : ""
                  }
                  to="/dashboard/payroll"
                >
                  Payroll
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
