import React, { useState } from "react";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";
import { Menu, X } from "lucide-react";

// All products list
const allProducts = [/*... (your entire products array remains unchanged) ...*/];

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Category Buttons */}
      <div className="px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold text-indigo-700">All Products</h2>

        {/* Desktop View Buttons */}
        <div className="hidden md:flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition duration-200 ${
                selectedCategory === cat
                  ? "bg-white text-indigo-600 border border-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 animate-slide-down">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-md font-semibold transition ${
                selectedCategory === cat
                  ? "bg-white text-indigo-600 border border-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Banner */}
      <Banner />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No products found.</p>
        )}
      </div>
    </>
  );
};

export default AllProducts;
