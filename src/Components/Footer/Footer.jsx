import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-red-50 text-gray-800 pt-14 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <NavLink to={"/"} className="flex items-center gap-3">
            <img
              className="size-14"
              src="https://i.ibb.co.com/NnSPQd66/2.png"
              alt="RaktoBondhu Logo"
            />
            <p className="text-2xl font-bold text-[#FF0019]">
              Rakto<span className="text-[#263087]">Bondhu</span>
            </p>
          </NavLink>
          <p className="mt-4 text-sm text-gray-600">
            A trusted community of voluntary blood donors across Bangladesh.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-[#FF0019] cursor-pointer">Find Donor </li>
            <li className="hover:text-[#FF0019] cursor-pointer">Donate Blood</li>
            <li className="hover:text-[#FF0019] cursor-pointer">Request Blood</li>
            <li className="hover:text-[#FF0019] cursor-pointer">
              Blood Group
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Who We Are</h6>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-[#FF0019] cursor-pointer">About Us</li>
            <li className="hover:text-[#FF0019] cursor-pointer">Contact</li>
            <li className="hover:text-[#FF0019] cursor-pointer">Blogs</li>
            <li className="hover:text-[#FF0019] cursor-pointer">
              Image & Video
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-[#FF0019] cursor-pointer">
              Terms of Use
            </li>
            <li className="hover:text-[#FF0019] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#FF0019] cursor-pointer">
              Cookie Policy
            </li>
            <li className="hover:text-[#FF0019] cursor-pointer">
              Team Members
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 mb-6">
        <hr className="border-gray-300" />
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center gap-4 pb-6">
        <p className="text-xl font-semibold">Follow Us</p>

        <div className="flex items-center gap-6">
          <FaFacebookSquare
            size={35}
            className="text-[#1877F2] hover:scale-110 transition-transform cursor-pointer"
          />

          {/* Instagram Gradient */}
          <FaInstagramSquare
            size={35}
            className="cursor-pointer hover:scale-110 transition-transform text-[#E4405F]"
          />

          <BsTwitterX
            size={30}
            className="text-black hover:scale-110 transition-transform cursor-pointer"
          />

          <FaLinkedin
            size={35}
            className="text-[#0A66C2] hover:scale-110 transition-transform cursor-pointer"
          />

          <FaYoutube
            size={40}
            className="text-[#FF0000] hover:scale-110 transition-transform cursor-pointer"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Text */}
      <div className="text-center pt-6 text-sm text-gray-600">
        Copyright © {new Date().getFullYear()} —
        <span className="font-semibold"> RaktoBondhu</span>. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
