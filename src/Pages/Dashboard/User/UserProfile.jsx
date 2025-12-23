import React, { useContext, useEffect, useState } from "react";
import {
  FaTint,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUserCheck,
} from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { Link } from "react-router";

const PRIMARY = "#FF0019";

const UserProfile = () => {
  const { loading, user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${getBaseUrl()}api/auth/users/${user.email}`)
        .then((res) => setUserData(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  if (loading || !userData) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg font-bold text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 ">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <div
          className="relative rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden"
          style={{ backgroundColor: PRIMARY }}
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-white text-[#FF0019] flex items-center justify-center text-4xl font-extrabold shadow-xl">
              {userData?.name?.charAt(0)}
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-extrabold">{userData?.name}</h1>
              <p className="opacity-90 flex items-center gap-2 justify-center md:justify-start">
                Blood Donor
                {userData?.emailVerified && (
                  <FaUserCheck className="text-green-300" />
                )}
              </p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <Badge text={`🩸 ${userData?.bloodGroup}`} />
                <Badge
                  text={userData?.available ? "Available" : "Unavailable"}
                  color={userData?.available ? "bg-green-500" : "bg-gray-400"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Info */}
          <Card title="Personal Information">
            <Info icon={<FaEnvelope />} label="Email" value={userData?.email} />
            <Info icon={<FaPhoneAlt />} label="Phone" value={userData?.phone} />
          </Card>

          {/* Location */}
          <Card title="Location">
            <Info
              icon={<FaMapMarkerAlt />}
              label="District"
              value={userData?.district}
            />
            <Info
              icon={<FaMapMarkerAlt />}
              label="Upazila"
              value={userData?.upazila}
            />
          </Card>

          {/* Donation Stats */}
          <Card title="Donation Stats">
            <Stat label="Total Donations" value={userData?.totalDonations} />
            <Stat
              label="Last Donation"
              value={
                userData?.lastDonation
                  ? new Date(userData.lastDonation).toLocaleDateString()
                  : "N/A"
              }
            />
          </Card>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex justify-end gap-4">
          <Link to={`/dashboard/edit-profile/${userData?._id}`}>
            <button className="px-6 py-3 rounded-xl border border-[#FF0019] text-[#FF0019] font-bold hover:bg-red-50 transition">
              Edit Profile
            </button>
          </Link>
          {/* <button
            className="px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:opacity-90 transition"
            style={{ backgroundColor: PRIMARY }}
          >
            Update Availability
          </button> */}
        </div>
      </div>
    </div>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <h2 className="text-lg font-extrabold text-[#FF0019] mb-5 border-b pb-2">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const Info = ({ icon, label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!value) return;

    navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="flex items-start justify-between gap-4 relative">
      {/* Left */}
      <div className="flex items-center gap-2 text-gray-500 min-w-[90px]">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      {/* Right */}
      <div
        onClick={handleCopy}
        className="text-right max-w-[220px] md:max-w-[260px] break-all
                   font-semibold text-gray-800 cursor-pointer
                   hover:text-[#FF0019] transition"
      >
        {value || "—"}
      </div>

      {/* Copied indicator */}
      {copied && (
        <span
          className="absolute -bottom-5 right-0 text-xs font-bold
                     bg-[#FF0019] text-white px-2 py-0.5 rounded-full
                     animate-pulse shadow-lg"
        >
          Copied!
        </span>
      )}
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-gray-100 rounded-xl p-4 text-center">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-extrabold text-[#FF0019]">{value}</p>
  </div>
);

const Badge = ({ text, color = "bg-white text-[#FF0019]" }) => (
  <span className={`px-4 py-1 rounded-full font-bold ${color}`}>{text}</span>
);

export default UserProfile;
