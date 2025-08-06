import React, { useState } from "react";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";



const allProducts = [
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
  { id: 5, name: "Casual T-Shirt", image: "https://fastcolors.in/cdn/shop/files/40031-CP_GREEN-FRONT_739dba06-5ac5-49a6-be2f-2efe1613357e.jpg?v=1751898023&width=480", price: 699, description: "Comfortable cotton t-shirt perfect for daily wear.", category: "T-Shirts" },
  { id: 6, name: "Denim Jeans", image: "https://m.media-amazon.com/images/I/91E69wClQ4L._UY1100_.jpg", price: 1499, description: "Stylish slim-fit jeans for a smart casual look.", category: "Jeans" },
  { id: 7, name: "Formal Shirt", image: "https://rukminim2.flixcart.com/image/514/616/xif0q/shirt/d/u/d/xl-jypt-dhaduk-original-imah7u6axefqg5xt.jpeg?q=90&crop=false", price: 999, description: "Cotton formal shirt suitable for office and events.", category: "Shirts" },
  { id: 8, name: "Sneakers", image: "https://redtape.com/cdn/shop/files/RSL0536_1_3114676c-7f12-48b1-afc5-393e31e84777.jpg?v=1751016821", price: 1999, description: "Trendy sneakers with maximum comfort and durability.", category: "Shoes" },
  { id: 9, name: "Cotton Trousers", image: "https://image.hm.com/assets/hm/ef/0c/ef0c12ec5bb9d385be2e5fc72e605dcc1e3f2d26.jpg?imwidth=2160", price: 1199, description: "Soft and breathable trousers ideal for all-day wear.", category: "Accessories" },
  {id: 10, name: "Leather Wallet", image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390", price: 899, description: "Genuine leather wallet with multiple card slots.", category: "Accessories" },
  {id:11, name:"Samsung glaxy Z fold 6 5g",image:"https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/795330468202408120724.jpg" ,price:"19,999", description:"No charger in the Box", category:"Samsung"},
    {id:12, name:"Motrola edge 40 neo",image:"https://motorolain.vtexassets.com/arquivos/ids/158526-800-auto?width=800&height=auto&aspect=true" ,price:"19,999", description:"No charger in the Box", category:"Motrola"},
    {id:13, name:"Vivo V40", image:"https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/516082550202408141000.jpg" ,price:"19,999", description:"No charger in the Box", category:"Vivo"},
    {id:14, name:"Redmi note 14 5g",image:"https://i03.appmifile.com/979_item_in/17/12/2024/d065316191be257a48fb7516d78e6662.png?thumb=1&q=85" ,price:"19,999", description:"No charger in the Box", category:"Xiomi"},
    {id:15, name:"OnePluse 13s",image:"https://image01-in.oneplus.net/media/202505/22/b87582171e356d38cde670bf7a09602f.png?x-amz-process=image/format,webp/quality,Q_80" ,price:"19,999", description:"No charger in the Box", category:"OnePluse"},
    {id:16, name:"Realme 12 5g",image:"https://manikmobile.com/wp-content/uploads/2024/06/realme-12-5G-Woodland-Green-494352708-i-1-1200Wx1200H.jpg" ,price:"19,999", description:"No charger in the Box", category:"Realme"},
{ id:17, name: "Top", image:"https://www.alamodelabel.in/cdn/shop/files/WhatsAppImage2025-04-14at16.17.04_600x.jpg?v=1749204921", price: 1200, description: "durable with good quality", category: "Tops"},
    { id:18, name: "Dress", image:"https://5.imimg.com/data5/SELLER/Default/2024/7/436731238/JM/WI/BD/223002845/photo-3-2024-07-22-14-37-07-500x500.jpg", price: 1500, description: "stylish and comfortable", category: "Dresses"},
    { id:19, name: "Skirt", image:"https://assets.ajio.com/medias/sys_master/root/20240723/Wqxg/669f961f1d763220fa1151bd/-473Wx593H-467127406-multi-MODEL.jpg", price: 800, description: "elegant and trendy", category: "Skirts"},
    { id:20, name: "Shoes", image:"https://5.imimg.com/data5/SELLER/Default/2022/8/DL/DF/NA/47973403/1-2--500x500.JPG", price: 2000, description: "fashionable and durable", category: "Shoes"},
    { id:21, name: "Earing", image:"https://cdn.eternz.com/thumbnails/products/1445.1_325a4235_thumbnail_1024.JPG", price: 500, description: "variety of accessories", category: "Accessories"},
    {id:22, name: "Handbag", image:"https://5.imimg.com/data5/SELLER/Default/2024/4/408139763/CF/IK/ME/89537354/whatsapp-image-2024-04-06-at-4-55-11-pm-500x500.jpeg", price: 2500, description: "stylish and spacious", category: "Accessories"},
    { id: 23, name: "Wirpool 180L Single Door", image: "https://www.zebrs.com/uploads/zebrs/products/whirlpool-207-l-5-star-icemagic-pro-inverter-direct-cool-single-door-refrigerator-230-impro-roy-5s-i-579011170433266_l.jpg", price: 30000, description: "Energy-efficient refrigerator with smart features." ,category: "Refrigerator" },
    { id: 24, name: "LG Washing Machine", image: "https://dynamicdistributors.in/wp-content/uploads/2024/09/4c2b81a0-5a4e-4960-b7d3-b095ddaf0f53.__CR601464600_PT0_SX1464_V1___.jpg", price: 20000, description: "Front-load washing machine with multiple wash programs.", category: "Washing Machine" },


];

const AllProducts = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <SearchBar onSearch={setSearchQuery} />
            <Banner />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};
export default AllProducts;