
import React from 'react';
const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 rounded-lg">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" required />
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Register</button>
      </form>
    </div>
  );
};

export default Register;
