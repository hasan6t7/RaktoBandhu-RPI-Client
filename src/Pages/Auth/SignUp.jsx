import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import axios from "axios";
import { getBaseUrl } from "../../utils/useGetUrl";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const customRed = "#FF0019";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;

      await updateUser({ displayName: data.name });

      await sendEmailVerification(user);

      const userInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      role: "user",
      };

      await axios.post(`${getBaseUrl()}api/auth/create-user`, userInfo);

      alert(
        "Signup successful! Verification email sent. Please check your inbox."
      );

      navigate("/signIn");
    } catch (err) {
      console.error(err);
      alert("Signup failed: " + err.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-red-500 rounded-full opacity-20 animate-pulse"></div>

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full">
        <h1
          className="text-2xl font-extrabold text-center mb-4"
          style={{ color: customRed }}
        >
          Become a Life Saver Today
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign Up to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <input
            type="text"
            placeholder="Mobile Number"
            {...register("phone", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Enter 11 digit number",
              },
            })}
            className="input input-bordered rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="input input-bordered rounded-xl focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl font-bold text-white text-lg transition transform hover:scale-105"
            style={{ backgroundColor: customRed }}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>

        <Link to="/signIn">
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <span className="font-bold text-red-600 hover:underline">
              Sign In
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
