import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import {
  FaHeartbeat,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaUserInjured,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { AuthContext } from "../../../contexts/AuthContext";

function BloodRequestDetails() {
  const { user } = useContext(AuthContext);
  const { requestId } = useParams();
  const [request, setRequest] = useState(null);
  console.log(request);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch request details
  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        `${getBaseUrl()}api/blood-request/${requestId}`
      );
      setRequest(res.data.data.request);
    } catch (error) {
      console.error(error);
      alert("Failed to load request details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [requestId]);

  // Donor Accept
  const handleAccept = async (donorId, donorEmail) => {
    try {
      const res = await axios.post(
        `${getBaseUrl()}api/blood-request/${requestId}/accept`,
        { donorId, donorEmail }
      );
      alert("✅ You accepted the request!");
      setRequest(res.data.data);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to accept request");
    }
  };

  const isMatchedDonor = request?.matchedDonors?.some(
    (d) => d.email === user?.email
  );

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading request details...
      </p>
    );
  }

  if (!request) {
    return <p className="text-center mt-10 text-red-500">Request not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-[#FF0019] font-semibold underline"
      >
        ← Back
      </button>

      {/* Request Info */}
      <div className="border rounded-2xl p-6 shadow-lg bg-white mb-6">
        <h2 className="text-2xl font-bold text-[#FF0019] mb-4">
          {request.patientName}
        </h2>

        {/* Requester Info */}
        <div className="mb-4 p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
          <h4 className="font-semibold text-blue-700 flex items-center gap-2">
            <FaUser /> Request By:
          </h4>
          <p>Name: {request.requesterName}</p>
          <p>Email: {request.requesterEmail}</p>
        </div>

        <p className="flex items-center gap-2 mb-2">
          <FaHeartbeat className="text-red-500" /> Blood Group:{" "}
          {request.bloodGroup}
        </p>
        <p className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-red-500" /> {request.district},{" "}
          {request.upazilla}
        </p>
        <p className="flex items-center gap-2 mb-2">
          <FaCalendarAlt className="text-red-500" />{" "}
          {new Date(request.date).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2 mb-2">
          <FaClock className="text-red-500" /> {request.time}
        </p>
        <p className="flex items-center gap-2 mb-2">
          <FaUserInjured className="text-red-500" /> Problem:{" "}
          {request.patientProblem}
        </p>

        <p className="mb-2">
          Status:
          <span
            className={`font-semibold ml-1 ${
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
      </div>

      {/* Accepted Donor Info */}
      {request.acceptedDonor && (
        <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded mb-6">
          <h4 className="font-semibold text-green-700">Accepted Donor:</h4>
          <p>Name: {request.acceptedDonor.name}</p>
          <p>Email: {request.acceptedDonor.email || "N/A"}</p>
          <p>Blood Group: {request.acceptedDonor.bloodGroup}</p>
          <p>Phone: {request.acceptedDonor.phone}</p>
        </div>
      )}

      {/* Matched Donors */}
      <h3 className="text-xl font-bold text-[#FF0019] mb-4">
        Matched Donors ({request.matchedDonors.length})
      </h3>

      {request.matchedDonors.length === 0 ? (
        <p className="text-gray-500"> No matched donors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {request.matchedDonors.map((donor) => (
            <div
              key={donor._id}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
            >
              <h4 className="font-semibold text-lg">{donor.name}</h4>
              <p className="flex items-center gap-2">
                <FaHeartbeat className="text-red-500" /> {donor.bloodGroup}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> {donor.district},{" "}
                {donor.upazilla}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-red-500" /> {donor.phone}
              </p>

              <button
                disabled={
                  request.acceptedDonor || !isMatchedDonor || !donor.available
                }
                onClick={() => handleAccept(donor._id, donor.email)}
                className={`mt-3 w-full px-3 py-1 rounded-md font-semibold text-white transition ${
                  request.acceptedDonor || !isMatchedDonor || !donor.available
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#FF0019] hover:bg-red-700"
                }`}
              >
                {request.acceptedDonor
                  ? "Already Accepted"
                  : isMatchedDonor
                  ? "I will donate"
                  : "You can’t donate"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BloodRequestDetails;
