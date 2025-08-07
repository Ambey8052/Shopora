import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { Menu, X } from "lucide-react";

const mobileProducts = [
  { id: 1, name: "Samsung Galaxy Z Fold 6 5G", image: "https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/795330468202408120724.jpg", price: "129999", description: "No charger in the Box", category: "Samsung" },
  { id: 2, name: "Motorola Edge 40 Neo", image: "https://motorolain.vtexassets.com/arquivos/ids/158526-800-auto?width=800&height=auto&aspect=true", price: "21999", description: "No charger in the Box", category: "Motrola" },
  { id: 3, name: "Vivo V40", image: "https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/516082550202408141000.jpg", price: "39999", description: "No charger in the Box", category: "Vivo" },
  { id: 4, name: "Redmi Note 14 5G", image: "https://i03.appmifile.com/979_item_in/17/12/2024/d065316191be257a48fb7516d78e6662.png?thumb=1&q=85", price: "19999", description: "No charger in the Box", category: "Xiomi" },
  { id: 5, name: "OnePlus 13s", image: "https://image01-in.oneplus.net/media/202505/22/b87582171e356d38cde670bf7a09602f.png?x-amz-process=image/format,webp/quality,Q_80", price: "54999", description: "No charger in the Box", category: "OnePluse" },
  { id: 6, name: "Realme 12 5G", image: "https://manikmobile.com/wp-content/uploads/2024/06/realme-12-5G-Woodland-Green-494352708-i-1-1200Wx1200H.jpg", price: "17599", description: "No charger in the Box", category: "Realme" },
];

const categories = ["Samsung", "Motrola", "Vivo", "Xiomi", "OnePluse", "Realme"];

const Mobiles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? mobileProducts
      : mobileProducts.filter((product) => product.category === selectedCategory);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setMenuOpen(false); // Close menu after selection
  };

  return (
    <>
      <div className="px-4 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link to="/" className="text-3xl font-bold">Mobiles Collection</Link>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden self-end">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Category Buttons */}
        <div
          className={`w-full sm:w-auto flex flex-col sm:flex-row gap-4 text-indigo-600 font-medium ${
            menuOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <button onClick={() => handleCategoryClick("All")}>All</button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleCategoryClick(cat)}>
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

export default Mobiles;
