import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Signin() {
      const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black py-40 pt-40">
        <div className="w-full max-w-[1200px] mb-5">
                <button onClick={() => navigate("/")} className="bg-transparent flex justify-center items-center gap-2 text-white border border-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary">
                  <IoChevronBack />Back to Home
                </button>
              </div>
      {/* Heading */}
      
      <h1 className="text-5xl font-bold text-white mb-10">Existing Customer Login</h1>

      {/* Blurred Form Box */}
      <div className="w-[650px] bg-[#1b2231]/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10">
        
        {/* Email */}
        <label className="font-semibold text-sm mb-1 block text-white">
          Email address
        </label>
        <div className="relative mb-5">
          <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full bg-black/20 text-white text-sm placeholder-gray-300 border border-white/30 rounded-md px-10 py-3 focus:outline-none"
          />
        </div>

        {/* Password */}
        <label className="font-semibold text-sm mb-1 block text-white">
          Enter Password
        </label>
        <div className="relative mb-5">
          <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
          <input
            type="password"
            placeholder="•••••••••"
            className="w-full bg-black/20 text-white text-sm placeholder-gray-300 border border-white/30 rounded-md px-10 py-3 focus:outline-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm text-gray-200">Remember me</p>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-primary text-white py-3 rounded-full text-sm font-semibold">
          Sign In
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="border-t border-white/20"></div>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-gray-300">
            Or
          </span>
        </div>

        {/* Google Login */}
        <button className="w-full border border-white/20 bg-white/10 backdrop-blur-md rounded-full py-3 flex items-center justify-center gap-3 text-sm font-medium text-white mb-4">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm mt-6 text-gray-300">
          Don’t have an account?
          <span className="font-medium ml-1 cursor-pointer">
            <a className="text-white underline">Create Account</a> here
          </span>
        </p>
      </div>
    </div>
  );
}
