
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";

const mobileProducts = [
    {id:1, name:"Samsung glaxy Z fold 6 5g",image:"https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/795330468202408120724.jpg" ,price:"129999", description:"No charger in the Box", category:"Samsung"},
    {id:2, name:"Motrola edge 40 neo",image:"https://motorolain.vtexassets.com/arquivos/ids/158526-800-auto?width=800&height=auto&aspect=true" ,price:"21999", description:"No charger in the Box", category:"Motrola"},
    {id:3, name:"Vivo V40", image:"https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/516082550202408141000.jpg" ,price:"39999", description:"No charger in the Box", category:"Vivo"},
    {id:4, name:"Redmi note 14 5g",image:"https://i03.appmifile.com/979_item_in/17/12/2024/d065316191be257a48fb7516d78e6662.png?thumb=1&q=85" ,price:"19999", description:"No charger in the Box", category:"Xiomi"},
    {id:5, name:"OnePluse 13s",image:"https://image01-in.oneplus.net/media/202505/22/b87582171e356d38cde670bf7a09602f.png?x-amz-process=image/format,webp/quality,Q_80" ,price:"54999", description:"No charger in the Box", category:"OnePluse"},
    {id:6, name:"Realme 12 5g",image:"https://manikmobile.com/wp-content/uploads/2024/06/realme-12-5G-Woodland-Green-494352708-i-1-1200Wx1200H.jpg" ,price:"17599", description:"No charger in the Box", category:"Realme"},

];
 
const categories = ["Samsung", "Motrola", "Vivo", "Xiomi", "OnePluse", "Realme"];

const Mobiles = () => {
 
    const [selectedCategory ,setSelectedCategory] = useState("All");
    const filteredProducts = selectedCategory === "All"
    ? mobileProducts
    : mobileProducts.filter((product) => product.category === selectedCategory);
    return(
        <>
            <div className="px-4 py-6 flex justify-between">
        <Link to="/" className="text-3xl font-bold mb-2 ">Mobiles Collection</Link>
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
export default Mobiles;