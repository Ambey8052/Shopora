
import React from "react";
const SearchBar = ({ onSearch }) => {
  return (
    <div className=" my-6 text-center ">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full max-w-xl p-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
