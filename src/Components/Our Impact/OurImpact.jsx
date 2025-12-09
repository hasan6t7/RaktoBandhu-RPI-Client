import React from "react";
import { FaTint, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";
import { LuTestTubeDiagonal } from "react-icons/lu";


const OurImpact = () => {
  const impacts = [
    {
      icon: <FaTint className="text-red-500 text-4xl mb-3" />,
      text: "800,000+ Units Needed Annually across Bangladesh",
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-4xl mb-3" />,
      text: "Save 3 precious lives with just a single, selfless donation ",
    },
    {
      icon: <LuTestTubeDiagonal  className="text-red-500 text-4xl mb-3" />, 
      text: "B+/O+ Most Demanded Blood type in Bangladesh",
    },
    {
      icon: <FaHandHoldingHeart className="text-red-500 text-4xl mb-3" />,
      text: "31% Voluntary Donors — We’re working to increase this",
    },
  ];

  return (
    <div className="w-full py-10">
      <h2 className="text-center text-3xl font-bold mb-10">Our Impact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="bg-red-50 text-center p-6 rounded-xl shadow-xl hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <p className="font-semibold text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpact;
