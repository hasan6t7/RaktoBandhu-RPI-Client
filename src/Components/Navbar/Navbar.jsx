import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdown] = useState(false);
  const { user, loading , LogOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
 

  const handleDropdownToggle = () => setIsDropdown(!isDropdownOpen);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOutUser()
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Logged Out!",
              text: "Log Out Successfully Done",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };
   if (loading) return <div>loading...</div>;


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
                ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/become-donor"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Become a Donor</li>
          </NavLink>
          <NavLink
            to={"/blood-group"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Blood Group</li>
          </NavLink>
          <NavLink
            to={"/members"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Members</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                 ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Contact us</li>
          </NavLink>
        </ul>
      </div>

      {/* Navbar End — Hamburger moved here */}
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <div
              onClick={handleDropdownToggle}
              className="avatar cursor-pointer"
              title={user?.displayName || "User"}
            >
              <div className="h-[40px] w-[40px] ring-[#FF0019] ring-offset-base-100 rounded-full ring-2 ring-offset-2 overflow-hidden">
                <img
                  src={
                    user?.photoURL || "https://i.ibb.co.com/gLDzNv8G/avatar.png"
                  }
                  alt="User"
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full"
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute -right-6 mt-11 w-44 h-32 bg-white shadow-xl rounded-xl border border-gray-100 py-3 animate-fadeIn">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to={"/dashboard"}
                        onClick={() => setIsDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#d23141] transition-colors"
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn mx-4 text-left px-4 py-1 bg-[#ed3849] text-white transition-colors"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex gap-2 items-center">
              <Link
                to={"/signIn"}
                className="btn hidden bg-[#FF0019] hover:bg-white hover:text-[#FF0019] text-white lg:flex rounded-lg"
              >
                Sign In
              </Link>
              <button className="btn hidden text-white bg-[#263087] hover:bg-white hover:text-[#263087] lg:flex rounded-lg">
                Sign Up
              </button>
            </div>
          </>
        )}
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
            to={"/become-donor"}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0019] border-2 p-1 border-[#FF0019]"
                : "hover:text-[#FF0019]"
            }
          >
            <li>Become a Donor</li>
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
          {!user && (
            <div className="mt-3 space-y-1">
              <NavLink className={"text-[#FF0019]"}>
                <li>Sign In</li>
              </NavLink>
              <NavLink className={"text-[#FF0019]"}>
                <li>Sign Up</li>
              </NavLink>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
