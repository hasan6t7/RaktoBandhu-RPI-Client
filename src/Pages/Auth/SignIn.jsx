import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../Firebase/firebase.config";
import axios from "axios";
import { getBaseUrl } from "../../utils/useGetUrl";

const SignIn = () => {
  const { logInUser, LogOutUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unverified, setUnverified] = useState(false);

  const navigate = useNavigate();
  const customRed = "#FF0019";

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setUnverified(false);

    logInUser(email, password)
      .then(async (result) => {
        const user = result.user;

        if (!user.emailVerified) {
          setUnverified(true);
          setError("Your email is not verified. Please verify first.");
          LogOutUser();
          return;
        }

        await axios.patch(`${getBaseUrl()}api/auth/update-email-verified`, {
          email: user?.email,
          status: true,
        });

        navigate("/");
      })
      .catch(() => {
        setError("Invalid email or password");
      });
  };

  const resendVerification = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      alert("Verification email sent!");
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
          Welcome Back , Hero
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>

        {error && (
          <p className="text-center text-red-600 font-semibold mb-3">{error}</p>
        )}

        <form onSubmit={handleSignIn} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white text-lg hover:scale-105 transition"
            style={{ backgroundColor: customRed }}
          >
            Sign In
          </button>
        </form>

        {unverified && (
          <button
            onClick={resendVerification}
            className="text-blue-600 mt-3 underline block mx-auto"
          >
            Resend Verification Email
          </button>
        )}

        <Link to="/signUp">
          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span className="font-bold text-red-600 hover:underline">
              Sign Up
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
