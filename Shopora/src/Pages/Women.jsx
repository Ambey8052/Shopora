import React from "react";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";


const womenProducts = [
    { id:1, name: "Top", image:"https://www.alamodelabel.in/cdn/shop/files/WhatsAppImage2025-04-14at16.17.04_600x.jpg?v=1749204921", price: 1200, description: "durable with good quality", category: "Tops"},
    { id:2, name: "Dress", image:"https://5.imimg.com/data5/SELLER/Default/2024/7/436731238/JM/WI/BD/223002845/photo-3-2024-07-22-14-37-07-500x500.jpg", price: 1500, description: "stylish and comfortable", category: "Dresses"},
    { id:3, name: "Skirt", image:"https://assets.ajio.com/medias/sys_master/root/20240723/Wqxg/669f961f1d763220fa1151bd/-473Wx593H-467127406-multi-MODEL.jpg", price: 800, description: "elegant and trendy", category: "Skirts"},
    { id:4, name: "Shoes", image:"https://5.imimg.com/data5/SELLER/Default/2022/8/DL/DF/NA/47973403/1-2--500x500.JPG", price: 2000, description: "fashionable and durable", category: "Shoes"},
    { id:5, name: "Earing", image:"https://cdn.eternz.com/thumbnails/products/1445.1_325a4235_thumbnail_1024.JPG", price: 500, description: "variety of accessories", category: "Accessories"},
    {id:6, name: "Handbag", image:"https://5.imimg.com/data5/SELLER/Default/2024/4/408139763/CF/IK/ME/89537354/whatsapp-image-2024-04-06-at-4-55-11-pm-500x500.jpeg", price: 2500, description: "stylish and spacious", category: "Accessories"}
];

const categories = ["Tops", "Dresses", "Skirts", "Shoes", "Accessories"];
const Women = () => {
const [selectedCategory, setSelectedCategory] = useState("All");

const filteredProducts =
    selectedCategory === "All"
      ? womenProducts
      : womenProducts.filter((product) => product.category === selectedCategory);
    return(  
    <>
    <div className="px-4 py-6 flex justify-between">
        <Link to="/" className="text-3xl font-bold mb-2 ">Women's Collection</Link>
        <div className="flex flex-row gap-8">
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
}

export default Women;