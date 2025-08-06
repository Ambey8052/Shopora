import React, { useState } from 'react';
import { useCart } from '../Components/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs mx-auto mb-10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 sm:h-72 md:h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">₹{product.price}</p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      {showPopup && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-10">
          {product.name} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
