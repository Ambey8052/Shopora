import React from "react";  
import { Link } from "react-router-dom";

const categories = [
  { name: "Men", path: "/mens", color: "from-cyan-500 to-blue-500" },
  { name: "Women", path: "/womens", color: "from-pink-500 to-rose-500" },
  { name: "Electronics", path: "/electronics", color: "from-yellow-400 to-orange-500" },
  { name: "Mobiles", path: "/mobiles", color: "from-green-400 to-lime-500" },
  { name: "Accessories", path: "/accessories", color: "from-purple-500 to-indigo-500" },
  { name: "Home Appliances", path: "/appliances", color: "from-teal-500 to-cyan-600" },
];

const Categories = () => {
  return (
    <section className="py-12 px-4"
      style={{ backgroundImage: 'url(https://png.pngtree.com/background/20210711/original/pngtree-hot-summer-travel-theme-banner-picture-image_1105588.jpg)', backgroundSize: 'cover' }}>
    
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link
            to={category.path}
            key={category.name}
            className={`bg-gradient-to-br ${category.color} text-white rounded-lg shadow-md p-6 text-center hover:scale-105 transform transition`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;


