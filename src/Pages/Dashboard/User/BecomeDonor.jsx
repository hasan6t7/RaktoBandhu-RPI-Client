import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { districtsData } from "../../Auth/districts";
import axios from "axios";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { useNavigate } from "react-router";

const BecomeDonor = () => {
  const { user } = useContext(AuthContext);
  const [upazillas, setUpazillas] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDistrictChange = function (e) {
    const selectedDistrict = e.target.value;

    const districtObj = districtsData.find(function (item) {
      return item.name === selectedDistrict;
    });

    setUpazillas(districtObj ? districtObj.upazilas : []);
  };

  const onSubmit = (data) => {
    console.log("Donor Data:", data);
    axios
      .post(`${getBaseUrl()}api/donor`, data)
      .then(() => {
        alert("You are donor now");
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-[#FF0019] mb-6">
          Become a Blood Donor
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={user?.displayName}
              readOnly
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <input
            type="email"
            placeholder="Email"
            value={user?.email}
            readOnly
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Phone */}
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 11,
                  message: "Phone number must be 11 digits",
                },
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <select
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
              className="select select-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>

          {/* District */}
          <div>
            <select
              className={
                "input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
              }
              {...register("district", { required: true })}
              onChange={handleDistrictChange}
            >
              <option value="">Select District</option>
              {districtsData.map(function (item, index) {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Upazilla */}
          <div>
            <select
              className={
                "input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
              }
              {...register("upazilla", { required: true })}
              disabled={upazillas.length === 0}
            >
              <option value="">Select Upazilla</option>
              {upazillas.map(function (upazilla, index) {
                return (
                  <option key={index} value={upazilla}>
                    {upazilla}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Last Donation Date */}
          <div>
            <label className="text-sm text-gray-600">Last Donation Date</label>
            <input
              type="date"
              {...register("lastDonation")}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FF0019] hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Become a Donor
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeDonor;
