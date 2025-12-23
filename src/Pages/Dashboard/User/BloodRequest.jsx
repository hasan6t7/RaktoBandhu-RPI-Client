import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {districtsData} from "../../Auth/districts";

function BloodRequest() {
  const { register, handleSubmit, reset } = useForm();
  const [upazillas, setUpazillas] = useState([]);

  const onSubmit = function (data) {
    console.log("Blood Request Data ", data);
    reset();
    setUpazillas([]);
  };

  const handleDistrictChange = function (e) {
    const selectedDistrict = e.target.value;

    const districtObj = districtsData.find(function (item) {
      return item.name === selectedDistrict;
    });

    setUpazillas(districtObj ? districtObj.upazilas : []);
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF0019] focus:border-[#FF0019]";

  const labelClass = "text-sm font-medium text-gray-700";

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-[#FF0019] mb-6">
          🩸 Blood Request Form
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
              {...register("patientName", { required: true })}
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className={labelClass}>Blood Group</label>
            <select
              className={inputClass}
              {...register("bloodGroup", { required: true })}
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
          </div>

          {/* Division */}
          <div>
            <label className={labelClass}>Division</label>
            <input
              type="text"
              className={inputClass}
              {...register("division", { required: true })}
            />
          </div>

          {/* District */}
          <div>
            <label className={labelClass}>District</label>
            <select
              className={inputClass}
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
            <label className={labelClass}>Upazilla</label>
            <select
              className={inputClass}
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

          {/* Blood Donate Center */}
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
              {...register("contactNumber", { required: true })}
            />
          </div>

          {/* Blood Quantity */}
          <div>
            <label className={labelClass}>Blood Quantity (Bag)</label>
            <input
              type="number"
              className={inputClass}
              {...register("bloodQuantity", { required: true })}
            />
          </div>

          {/* Date */}
          <div>
            <label className={labelClass}>Date</label>
            <input
              type="date"
              className={inputClass}
              {...register("date", { required: true })}
            />
          </div>

          {/* Time */}
          <div>
            <label className={labelClass}>Time</label>
            <input
              type="time"
              className={inputClass}
              {...register("time", { required: true })}
            />
          </div>

          {/* Patient Problem */}
          <div className="md:col-span-2">
            <label className={labelClass}>Patient Problem</label>
            <textarea
              rows="3"
              className={inputClass}
              {...register("patientProblem", { required: true })}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 bg-[#FF0019] hover:bg-red-700 text-white font-semibold px-10 py-2 rounded-md transition"
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
