import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const userData = {
  id: "USR123456",
  name: "Karan Kumar",
  email: "karan@example.com",
  phone: "+91 9876543210",
  address: "Ghaziabad, Uttar Pradesh, India",
  referral: "KARAN50",
  orders: 18,
  credits: 240,
  photo: "https://i.pravatar.cc/150?img=3",
};

const Card = ({ title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full md:w-1/2 lg:w-1/3 transition-all duration-300"
  >
    <h4 className="text-gray-500 dark:text-gray-300 text-sm">{title}</h4>
    <p className="text-xl font-semibold text-gray-800 dark:text-white">{value}</p>
  </motion.div>
);

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={userData.photo}
            alt={userData.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{userData.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">User ID: {userData.id}</p>
            <p className="text-gray-600 dark:text-gray-300">Email: {userData.email}</p>
            <p className="text-gray-600 dark:text-gray-300">Phone: {userData.phone}</p>
            <p className="text-gray-600 dark:text-gray-300">Address: {userData.address}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-6 mt-10">
          <Card title="Total Orders" value={userData.orders} />
          <Card title="Referral Code" value={userData.referral} />
          <Card title="Credit Points" value={userData.credits + " pts"} />
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <Link to="/" className="px-6 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition">
            Delete Account
          </Link>
          <Link to="/login" className="px-6 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 transition">
            Logout
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
