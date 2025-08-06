// pages/Home.jsx

import React from "react";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import ProductList from "../Components/ProductList";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filters";
import { useState } from "react";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
   {
    id: 1,
    name: "Men's Jacket",
    image:
      "https://images-cdn.ubuy.co.in/6576bb0c6296ca1de558a4db-kefitevd-mens-winter-coats-fleece-lined.jpg",
    price: 2499,
    category: "Men",
    description:
      "High-quality winter jacket with a modern fit and stylish look.",
  },
  {
    id: 2,
    name: "Oppo Reno 14 Pro 5G",
    image:
      "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/o/p/oppo_reno_14_pro_5g_titanium_grey__1.png",
    price: 15999,
    category: "Mobiles",
    description:
      "Powerful smartphone with long battery life and sharp camera.",
  },
  {
    id: 3,
    name: "SAMSUNG 40N5000 40 Inch LED TV",
    image:
      "https://abmgroup.in/cdn/shop/products/40N5000_1.jpg?v=1571751602",
    price: 32999,
    category: "Electronics",
    description: "Crisp and clear 4K LED TV for immersive entertainment.",
  },
  {
    id: 4,
    name: "Women Bangle Gold Plated",
    image:
      "https://www.luckyjewellery.co.in/cdn/shop/files/311-J1BG-JG24-4-24_6_--PhotoRoom.jpg?v=1726983424",
    price: 1299,
    category: "Women",
    description: "Elegant bangle perfect for every occasion.",
  },
  {
    id: 5,
    name: "Sony 30W speaker",
    image:
      "https://shopatsc.com/cdn/shop/files/Image5_152d12ea-8fb9-4e04-8d71-8b682eec93c5.jpg?v=1725960661",
    price: 3299,
    category: "Electronics",
    description: "Elegant bangle perfect for every occasion.",
  },
   {
    id: 6,
    name: "Samung 810L Refrigerator",
    image:
      "https://static.wixstatic.com/media/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png/v1/fill/w_490,h_490,al_c,lg_1,q_85,enc_avif,quality_auto/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png",
    price: 53299,
    category: "Electronics",
    description: "Elegant bangle perfect for every occasion.",
  },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <>
        <NavHeader />
        <Categories />
      <Hero />
      <SearchBar onSearch={setSearchQuery} />
      
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 my-10 ">
        <ProductList products={filteredProducts} />
        {/* <Filters /> */}
      </div>
      
        <Footer /> 
        
    </>
  );
};

export default Home;
