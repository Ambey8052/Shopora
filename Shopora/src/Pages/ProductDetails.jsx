import React from "react";
import { useParams } from "react-router-dom";

const mockProducts = [
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
   
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Product not found.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-md text-gray-500">{product.category}</p>
          <p className="text-2xl font-semibold text-indigo-600">
            ₹{product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
