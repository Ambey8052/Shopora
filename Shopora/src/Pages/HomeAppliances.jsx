import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";

const homeProducts = [
  {
    id: 1,
    name: "Wirpool 180L Single Door",
    image: "https://www.zebrs.com/uploads/zebrs/products/whirlpool-207-l-5-star-icemagic-pro-inverter-direct-cool-single-door-refrigerator-230-impro-roy-5s-i-579011170433266_l.jpg",
    price: 30000,
    description: "Energy-efficient refrigerator with smart features.",
    category: "Refrigerator",
  },
  {
    id: 2,
    name: "LG Washing Machine",
    image: "https://dynamicdistributors.in/wp-content/uploads/2024/09/4c2b81a0-5a4e-4960-b7d3-b095ddaf0f53.__CR601464600_PT0_SX1464_V1___.jpg",
    price: 20000,
    description: "Front-load washing machine with multiple wash programs.",
    category: "Washing Machine",
  },
  {
    id: 3,
    name: "Kenstar 25-L",
    image: "https://kenstar.in/cdn/shop/files/Micro-Convection-25L_1.jpg?v=1707816277",
    price: 15000,
    description: "Compact microwave oven with grill function.",
    category: "Microwave Oven",
  },
  {
    id: 4,
    name: "Wirpool MagicCool 1.5 T",
    image: "https://whirlpoolindia.vtexassets.com/arquivos/ids/171123-800-auto?v=638841928456070000&width=800&height=auto&aspect=true",
    price: 40000,
    description: "Inverter AC with fast cooling technology.",
    category: "Air Conditioner",
  },
  {
    id: 5,
    name: "American 2200W",
    image: "https://americanmicronic.in/cdn/shop/files/American-Micronic-2200-watts-imported-vacuum-cleaner-1.jpg?v=1695637646",
    price: 8000,
    description: "Powerful vacuum cleaner for deep cleaning.",
    category: "Vacuum Cleaner", // ✅ Fixed typo
  },
  {
    id: 6,
    name: "Prestige 1.5L",
    image: "https://velanstore.com/wp-content/uploads/2023/11/Screenshot-2023-11-14-at-12.12.43%E2%80%AFPM.png",
    price: 2000,
    description: "Stainless steel electric kettle with auto shut-off.",
    category: "Electric Kettle", // ✅ Capitalized
  },
];

const categories = [
  "Refrigerator",
  "Washing Machine",
  "Microwave Oven",
  "Air Conditioner",
  "Vacuum Cleaner",
  "Electric Kettle",
];

const HomeAppliances = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? homeProducts
      : homeProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <>
      <div className="px-4 py-6 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <Link to="/" className="text-3xl font-bold text-gray-800">
          Home Appliances Collection
        </Link>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === "All"
                ? "bg-indigo-600 text-white"
                : "text-indigo-600 hover:underline"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-600 hover:underline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <Banner title="Top Home Appliances for Your Comfort" />

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeAppliances;
