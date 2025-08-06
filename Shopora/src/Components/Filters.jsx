
import React from 'react';
const Filters = () => {
  return (
    <aside className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
      <h3 className="text-xl font-bold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Price Range</label>
        <input type="range" min="500" max="50000" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Category</label>
        <select className="w-full p-2 border rounded">
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Electronics</option>
          <option>Mobiles</option>
        </select>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Apply Filters</button>
    </aside>
  );
};

export default Filters;