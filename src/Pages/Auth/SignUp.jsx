import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const customRed = "#FF0019";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-red-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Card Container */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full overflow-hidden">
        {/* Header */}
        <h1
          className="text-2xl font-extrabold text-center mb-4"
          style={{ color: customRed }}
        >
          Become a Life Saver Today
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign Up to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full rounded-xl border-gray-300 
             focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019] transition duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full rounded-xl border-gray-300 
             focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019] transition duration-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full rounded-xl border-gray-300 
             focus:outline-none focus:border-[#FF0019] focus:ring-1 focus:ring-[#FF0019] transition duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white text-lg transition transform hover:scale-105"
            style={{ backgroundColor: customRed }}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="grow border-gray-300" />
          <span className="mx-3 text-gray-500 font-semibold">OR</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* Social Sign In */}
        <button className="w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-3 border border-red-600 text-red-600 transition transform hover:bg-red-50 hover:scale-105 duration-300">
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <Link to={"/signIn"}>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <span className="font-bold text-red-600 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
