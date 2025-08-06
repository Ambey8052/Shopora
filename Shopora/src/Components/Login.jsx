// components/StyledLogin.jsx
import React from "react";
import { User, Lock } from "lucide-react";

const Login = ({ onSubmit }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 p-6">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative overflow-hidden">
      {/* Optional: decorative circles */}
      <span className="absolute bg-white rounded-full opacity-10 w-64 h-64 top-[-100px] right-[-100px]"></span>
      <span className="absolute bg-white rounded-full opacity-10 w-40 h-40 bottom-[-60px] left-[-60px]"></span>

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">User Login</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit && onSubmit();
        }}
        className="space-y-6"
      >
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            required
            placeholder="Email or Username"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <div className="text-center text-gray-500 text-sm mt-4">
        <a href="" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <span className="h-px bg-gray-300 flex-grow mt-3"></span>
        <span className="text-gray-500 text-sm">or login with</span>
        <span className="h-px bg-gray-300 flex-grow mt-3"></span>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition">
          <span className="text-blue-600">F</span>
          Facebook
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition">
          <span className="text-blue-400">T</span>
          Twitter
        </button>
      </div>
    </div>
  </div>
);

export default Login;
