import React from "react";
import { FaHeartbeat, FaHandHoldingMedical } from "react-icons/fa";

const bloodGroupsInfo = [
  { group: "A+", donateTo: "A+, AB+", receiveFrom: "A+, A-, O+, O-" },
  { group: "A-", donateTo: "A+, A-, AB+, AB-", receiveFrom: "A-, O-" },
  { group: "B+", donateTo: "B+, AB+", receiveFrom: "B+, B-, O+, O-" },
  { group: "B-", donateTo: "B+, B-, AB+, AB-", receiveFrom: "B-, O-" },
  { group: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O+, O-" },
  { group: "O-", donateTo: "Everyone (Universal Donor)", receiveFrom: "O-" },
  {
    group: "AB+",
    donateTo: "AB+",
    receiveFrom: "Everyone (Universal Receiver)",
  },
  { group: "AB-", donateTo: "AB+, AB-", receiveFrom: "AB-, A-, B-, O-" },
];

const groupColors = {
  "A+": "bg-red-100 border-red-400",
  "A-": "bg-red-200 border-red-500",
  "B+": "bg-blue-100 border-blue-400",
  "B-": "bg-blue-200 border-blue-500",
  "O+": "bg-green-100 border-green-400",
  "O-": "bg-green-200 border-green-500",
  "AB+": "bg-purple-100 border-purple-400",
  "AB-": "bg-purple-200 border-purple-500",
};

const BloodGroupInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-5xl font-bold text-center text-[#FF0019] mb-12">
         Blood Group Guide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bloodGroupsInfo.map((bg) => (
          <div
            key={bg.group}
            className={`border-2 ${
              groupColors[bg.group]
            } rounded-xl shadow-lg p-6 hover:scale-105 transition-transform`}
          >
            <h2 className="text-3xl font-bold text-[#FF0019] mb-4 text-center">
              {bg.group}
            </h2>

            <div className="flex items-center mb-3">
              <FaHandHoldingMedical className="text-[#FF0019] text-xl mr-2" />
              <p className="font-semibold text-gray-700">Can Donate To:</p>
            </div>
            <p className="text-gray-600 mb-4">{bg.donateTo}</p>

            <div className="flex items-center mb-2">
              <FaHeartbeat className="text-[#FF0019] text-xl mr-2" />
              <p className="font-semibold text-gray-700">Can Receive From:</p>
            </div>
            <p className="text-gray-600">{bg.receiveFrom}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BloodGroupInfo;
