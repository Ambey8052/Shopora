import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const assesoriesProducts = [
  {
    id: 1,
    name: "Charger 18A",
    image: "https://ambraneindia.com/cdn/shop/files/Listing-01_png_033df220-adc6-4adf-8018-cfed171a9554.webp?v=1739452641&width=300",
    price: "320",
    description: "original Brand",
    Category: "Charger",
  },
  {
    id: 2,
    name: "Earing",
    image: "https://cdn.eternz.com/thumbnails/products/1445.1_325a4235_thumbnail_1024.JPG",
    price: 500,
    description: "variety of accessories",
    Category: "Accessories",
  },
  {
    id: 3,
    name: "Leather Wallet",
    image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390",
    price: 899,
    description: "Genuine leather wallet with multiple card slots.",
    Category: "Accessories",
  },
];

const categories = ["Charger", "Laptop", "Fan", "Bulb", "TV", "Wire"];

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? assesoriesProducts
      : assesoriesProducts.filter(
          (product) => product.Category === selectedCategory
        );

  return (
    <>
      <div className="px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="text-3xl font-bold mb-2 text-indigo-700">
          Accessories Collection
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full font-semibold transition duration-200 ${
              selectedCategory === "All"
                ? "bg-white text-indigo-600 border border-indigo-600"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            All
          </button>

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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 animate-slide-down">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2 rounded-md font-semibold transition ${
              selectedCategory === "All"
                ? "bg-white text-indigo-600 border border-indigo-600"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            All
          </button>
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

      <Banner />

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Accessories;
