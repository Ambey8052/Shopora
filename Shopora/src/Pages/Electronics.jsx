import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Menu, X } from "lucide-react";

const electronicProducts = [
  { id: 1, name: "Charger 18A", image: "https://ambraneindia.com/cdn/shop/files/Listing-01_png_033df220-adc6-4adf-8018-cfed171a9554.webp?v=1739452641&width=300", price: "320", description: "original Brand", Category: "Charger" },
  { id: 2, name: "Dell inspiration 1300", image: "https://m.media-amazon.com/images/I/71gFkTZ1YmL.jpg", price: "44,500", description: "original Brand", Category: "Laptop" },
  { id: 3, name: "USA Fan", image: "https://m.media-amazon.com/images/I/51wSHaW1tPL._UF894,1000_QL80_.jpg", price: "1,320", description: "original Brand", Category: "Fan" },
  { id: 4, name: "PANASONIC", image: "https://store.in.panasonic.com/media/catalog/product/cache/40b589206cef99ab7dca1586fe425968/t/h/th-32ms550dx_info_1_new.webp", price: "18,20", description: "original Brand", Category: "TV" },
  { id: 5, name: "Everyday 20W Bulb", image: "https://www.bbassets.com/media/uploads/p/l/40128548_6-eveready-led-bulb-14-watt-cool-day-light-base-b22d.jpg", price: "120", description: "original Brand", Category: "Bulb" },
  { id: 6, name: "Anchore 13mm wire", image: "https://services.ibo.com/media/v1/products/images/218e1024-e51c-4ce8-9c65-3f8a6286e097/anchor-advance-fr-15-sq-mm-red-90-m-fr-pvc-insulated-wire-1.jpeg", price: "1,320", description: "original Brand", Category: "Wire" },
];

const categories = ["Charger", "Laptop", "Fan", "Bulb", "TV", "Wire"];

const Electronics = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? electronicProducts
      : electronicProducts.filter((product) => product.Category === selectedCategory);

  return (
    <>
      <div className="px-4 py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Link to="/" className="text-3xl font-bold text-indigo-700">Electronics Collection</Link>

        {/* Desktop Categories */}
        <div className="hidden md:flex gap-4 text-indigo-600">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-3 py-1 rounded-full font-semibold ${selectedCategory === "All" ? "bg-white border border-indigo-600" : "hover:underline"}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full font-semibold ${selectedCategory === cat ? "bg-white border border-indigo-600" : "hover:underline"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Category Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 animate-slide-down">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setMenuOpen(false);
            }}
            className={`px-3 py-2 rounded font-semibold text-left ${selectedCategory === "All" ? "bg-white text-indigo-600 border" : "bg-indigo-600 text-white"}`}
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
              className={`px-3 py-2 rounded font-semibold text-left ${selectedCategory === cat ? "bg-white text-indigo-600 border" : "bg-indigo-600 text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Banner */}
      <Banner />

      {/* Products Grid */}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No products found in this category.</p>
        )}
      </div>
    </>
  );
};

export default Electronics;
