import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { districtsData } from "../../Auth/districts";
import axios from "axios";
import { getBaseUrl } from "../../../utils/useGetUrl";
import { AuthContext } from "../../../contexts/AuthContext";

function BloodRequest() {
  const { user } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [upazillas, setUpazillas] = useState([]);

  const onSubmit = async function (data) {
    try {
      const res = await axios.post(`${getBaseUrl()}api/blood-request`, {
        ...data,
        requesterEmail: user?.email,
        requesterName: user?.displayName,
      });
      alert(" Blood request submitted successfully!");
      if (res.data.data.matchedDonors.length === 0) {
        alert(" No donors found in your area");
      } else {
        alert(`${res.data.data.matchedDonors.length} donors found!`);
      }

      reset();
      setUpazillas([]);
    } catch (error) {
      console.error("Blood request error:", error);

      alert(error.response?.data?.message || "Server error! Please try again.");
    }
  };

  const handleDistrictChange = function (e) {
    const selectedDistrict = e.target.value;

    const districtObj = districtsData.find(function (item) {
      return item.name === selectedDistrict;
    });

    setUpazillas(districtObj ? districtObj.upazilas : []);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]";

  const labelClass = "text-sm font-medium text-gray-700";
  const errorClass = "text-red-500 text-sm mt-1";

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-[#FF0019] mb-6">
           Blood Request Form
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Patient Name */}
          <div>
            <label className={labelClass}>Patient Name</label>
            <input
              type="text"
              className={inputClass}
              {...register("patientName", {
                required: "Patient name is required",
              })}
            />
            {errors.patientName && (
              <p className={errorClass}>{errors.patientName.message}</p>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <label className={labelClass}>Blood Group</label>
            <select
              className={inputClass}
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
            >
              <option value="">Select</option>
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
              <p className={errorClass}>{errors.bloodGroup.message}</p>
            )}
          </div>

          {/* Division */}
          <div>
            <label className={labelClass}>Division</label>
            <input
              type="text"
              className={inputClass}
              {...register("division", {
                required: "Division is required",
              })}
            />
            {errors.division && (
              <p className={errorClass}>{errors.division.message}</p>
            )}
          </div>

          {/* District */}
          <div>
            <label className={labelClass}>District</label>
            <select
              className={inputClass}
              {...register("district", {
                required: "District is required",
              })}
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
            {errors.district && (
              <p className={errorClass}>{errors.district.message}</p>
            )}
          </div>

          {/* Upazilla */}
          <div>
            <label className={labelClass}>Upazilla</label>
            <select
              className={inputClass}
              {...register("upazilla", {
                required: "Upazilla is required",
              })}
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
            {errors.upazilla && (
              <p className={errorClass}>{errors.upazilla.message}</p>
            )}
          </div>

          {/* Donate Center */}
          <div>
            <label className={labelClass}>Blood Donate Center</label>
            <input
              type="text"
              className={inputClass}
              {...register("donateCenter")}
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className={labelClass}>Contact Number</label>
            <input
              type="tel"
              className={inputClass}
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
            />
            {errors.contactNumber && (
              <p className={errorClass}>{errors.contactNumber.message}</p>
            )}
          </div>

          {/* Blood Quantity */}
          <div>
            <label className={labelClass}>Blood Quantity (Bag)</label>
            <input
              type="number"
              className={inputClass}
              {...register("bloodQuantity", {
                required: "Blood quantity is required",
                min: { value: 1, message: "Minimum 1 bag required" },
              })}
            />
            {errors.bloodQuantity && (
              <p className={errorClass}>{errors.bloodQuantity.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className={labelClass}>Date</label>
            <input
              type="date"
              className={inputClass}
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && <p className={errorClass}>{errors.date.message}</p>}
          </div>

          {/* Time */}
          <div>
            <label className={labelClass}>Time</label>
            <input
              type="time"
              className={inputClass}
              {...register("time", { required: "Time is required" })}
            />
            {errors.time && <p className={errorClass}>{errors.time.message}</p>}
          </div>

          {/* Patient Problem */}
          <div className="md:col-span-2">
            <label className={labelClass}>Patient Problem</label>
            <textarea
              rows="3"
              className={inputClass}
              {...register("patientProblem", {
                required: "Patient problem is required",
              })}
            ></textarea>
            {errors.patientProblem && (
              <p className={errorClass}>{errors.patientProblem.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 bg-[#FF0019] hover:bg-red-700 text-white font-semibold px-10 py-2 rounded-xl transition"
            >
              🚑 Submit Blood Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BloodRequest;
