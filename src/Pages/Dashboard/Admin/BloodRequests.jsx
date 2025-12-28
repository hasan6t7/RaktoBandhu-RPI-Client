import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { FaHeartbeat, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUserInjured } from "react-icons/fa";

function BloodRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch all blood requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${getBaseUrl()}api/blood-request/all`);
      setRequests(res.data.data.requests);
    } catch (error) {
      console.error(error);
      alert("Failed to load blood requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading requests...</p>;
  }

  return (
    <div className=" p-6">
      <h2 className="text-3xl font-bold text-[#FF0019] mb-8 text-center">
         Blood Requests
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No blood requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-red-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 "
            >
              <h3 className="font-bold text-2xl text-[#FF0019] mb-3">
                {request.patientName}
              </h3>

              <p className="flex items-center gap-2 mb-2 text-gray-700">
                <FaHeartbeat className="text-red-500" /> Blood Group: {request.bloodGroup}
              </p>

              <p className="flex items-center gap-2 mb-2 text-gray-700">
                <FaMapMarkerAlt className="text-red-500" /> {request.district}, {request.upazilla}
              </p>

              <p className="flex items-center gap-2 mb-2 text-gray-700">
                <FaCalendarAlt className="text-red-500" /> {new Date(request.date).toLocaleDateString()}
              </p>

              <p className="flex items-center gap-2 mb-2 text-gray-700">
                <FaClock className="text-red-500" /> {request.time}
              </p>

              <p className="flex items-center gap-2 mb-2 text-gray-700">
                <FaUserInjured className="text-red-500" /> Problem: {request.patientProblem}
              </p>

              <p className="mb-3">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    request.status === "pending"
                      ? "text-yellow-500"
                      : request.status === "accepted"
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {request.status}
                </span>
              </p>

              <button
                onClick={() => navigate(`dashboard/blood-request/${request._id}`)}
                className="mt-3 w-full bg-[#FF0019] text-white font-semibold px-4 py-2 rounded-xl hover:bg-red-700 transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BloodRequestsPage;
