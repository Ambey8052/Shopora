import React from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { useState } from "react";


const assesoriesProducts = [
    {id:1, name:"Charger 18A", image:"https://ambraneindia.com/cdn/shop/files/Listing-01_png_033df220-adc6-4adf-8018-cfed171a9554.webp?v=1739452641&width=300", price:"320", description:"original Brand", Category:"Charger"},
    { id:2, name: "Earing", image:"https://cdn.eternz.com/thumbnails/products/1445.1_325a4235_thumbnail_1024.JPG", price: 500, description: "variety of accessories", category: "Accessories"},
  {id: 3, name: "Leather Wallet", image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390", price: 899, description: "Genuine leather wallet with multiple card slots.", category: "Accessories" }

];
const categories = ["Charger", "Laptop", "Fan", "Bulb", "TV","Wire"];
const Accessories = () => {
    const [selectedCategory, setSelectedCategory]  = useState("All");
    const filteredProducts = selectedCategory === "All"
    ? assesoriesProducts
    : electronicProducts.filter((product) => product.Category === selectedCategory);

    return(  
    <>
    <div className="px-4 py-6 flex justify-between">
        <Link to="/" className="text-3xl font-bold mb-2 ">Accessories Collection</Link>
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

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
    );
};
export default Accessories;