// AboutUs.jsx
import React from "react";
import { FaHeartbeat, FaHandsHelping, FaUserFriends } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="mb-20 mt-10 relative bg-gradient-to-r from-red-50 to-white px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-5xl font-bold text-[#FF0019] mb-6">
            About RaktoBondhu
          </h1>

          <p className="text-gray-700 mb-6 text-lg">
            <span className="font-semibold text-[#FF0019]">RaktoBondhu</span> is
            a life-saving blood donation platform that connects donors and
            patients in urgent need. Our mission is to make blood donation fast,
            reliable, and accessible for everyone.
          </p>

          <p className="text-gray-600 mb-8">
            We believe that a single drop of blood can save a life. Through our
            trusted donor network and real-time blood requests, we help people
            find hope in critical moments.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaHeartbeat className="text-[#FF0019] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Save Lives</h3>
              <p className="text-gray-500 text-sm">
                One donation can save up to three lives.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaHandsHelping className="text-[#FF0019] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Trusted Community</h3>
              <p className="text-gray-500 text-sm">
                Verified donors and genuine blood requests.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaUserFriends className="text-[#FF0019] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Quick Connection</h3>
              <p className="text-gray-500 text-sm">
                Instantly connect donors with patients.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 z-10 flex justify-center">
          <img
            src="https://i.ibb.co.com/RGN4HqT0/Chat-GPT-Image-Dec-28-2025-05-06-52-PM.png"
            alt="Blood Donation"
            className="w-[70%] object-cover"
          />
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-1/3 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle cx="250" cy="250" r="250" fill="#FF0019" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
