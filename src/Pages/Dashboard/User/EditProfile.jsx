import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "axios";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { useNavigate } from "react-router";
import {districtsData} from "../../Auth/districts"

const PRIMARY = "#FF0019";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const EditProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [userData , setUserData] = useState(null)
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    photo: "",
    available: true,
    lastDonation: "",
  });
  const [upazilas, setUpazilas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${getBaseUrl()}api/donor/${user.email}`)
        .then((res) => {
          const data = res.data.data;
          setUserData(data)
          setFormData({
            name: data.name || "",
            phone: data.phone || "",
            email: data.email || "",
            bloodGroup: data.bloodGroup || "",
            district: data.district || "",
            upazilla: data.upazilla || "",           
            available: data.available ?? true,
            lastDonation: data.lastDonation
              ? new Date(data.lastDonation).toISOString().split("T")[0]
              : "",
          });
        
          setUpazilas(data.district ? getUpazilas(data.district) : []);
        })
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "district") {
      setUpazilas(getUpazilas(value));
      setFormData((prev) => ({ ...prev, upazila: "" }));
    }
  };

  const getUpazilas = (district) => {
  
   
    return districtsData?.find((d) => d.name === district)?.upazilas || [];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userData._id;
      console.log(userId)
      await axios.put(`${getBaseUrl()}api/donor/update-profile/${userId}`, formData);
      alert("Profile updated successfully!");
      navigate("/dashboard/profile");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-[#FF0019] text-center">Edit Profile</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Photo */}
          

          {/* Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              readOnly
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              readOnly
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              readOnly
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="font-semibold">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            >
              <option value="">Select Blood Group</option>
              {bloodGroups.map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="font-semibold">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            >
              <option value="">Select District</option>
              {districtsData?.map((d, index) => (
                <option key={index} value={d?.name}>
                  {d?.name}
                </option>
              ))}
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="font-semibold">Upazila</label>
            <select
              name="upazilla"
              value={formData.upazilla}
              onChange={handleChange}
              disabled={!formData.district}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            >
              <option value="">Select Upazila</option>
              {upazilas.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          {/* Availability */}
          {/* <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
            <label className="font-semibold">Available for donation</label>
          </div> */}

          {/* Last Donation */}
          <div>
            <label className="font-semibold">Last Donation Date</label>
            <input
              type="date"
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl border-gray-300 focus:border-[#FF0019] focus:ring-[#FF0019]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white mt-4"
            style={{ backgroundColor: PRIMARY }}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
