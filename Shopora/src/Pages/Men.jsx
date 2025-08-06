import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const mensProducts = [
  { id: 1, name: "Casual T-Shirt", image: "https://fastcolors.in/cdn/shop/files/40031-CP_GREEN-FRONT_739dba06-5ac5-49a6-be2f-2efe1613357e.jpg?v=1751898023&width=480", price: 699, description: "Comfortable cotton t-shirt perfect for daily wear.", category: "T-Shirts" },
  { id: 2, name: "Denim Jeans", image: "https://m.media-amazon.com/images/I/91E69wClQ4L._UY1100_.jpg", price: 1499, description: "Stylish slim-fit jeans for a smart casual look.", category: "Jeans" },
  { id: 3, name: "Formal Shirt", image: "https://rukminim2.flixcart.com/image/514/616/xif0q/shirt/d/u/d/xl-jypt-dhaduk-original-imah7u6axefqg5xt.jpeg?q=90&crop=false", price: 999, description: "Cotton formal shirt suitable for office and events.", category: "Shirts" },
  { id: 4, name: "Sneakers", image: "https://redtape.com/cdn/shop/files/RSL0536_1_3114676c-7f12-48b1-afc5-393e31e84777.jpg?v=1751016821", price: 1999, description: "Trendy sneakers with maximum comfort and durability.", category: "Shoes" },
  { id: 5, name: "Cotton Trousers", image: "https://image.hm.com/assets/hm/ef/0c/ef0c12ec5bb9d385be2e5fc72e605dcc1e3f2d26.jpg?imwidth=2160", price: 1199, description: "Soft and breathable trousers ideal for all-day wear.", category: "Accessories" },
  {id: 6, name: "Leather Wallet", image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390", price: 899, description: "Genuine leather wallet with multiple card slots.", category: "Accessories" }
];

const categories = ["T-Shirts", "Jeans", "Shirts", "Shoes", "Accessories"];

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? mensProducts
      : mensProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="px-4 py-6 flex justify-between ">
        <Link to="/" className="text-3xl font-bold mb-2 ">Men's Collection</Link>
        <div className="flex flex-row gap-8 text-indigo-600 hover:underline cursor-pointer">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          {categories.map((cat) => (
            <button key={cat} className="mx-2" onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <Banner />

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Men;