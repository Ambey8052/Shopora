import React from "react";
import { useCart } from "../Components/CartContext";

const Cart = () => {
  const { cartItems, updateQty, removeItem } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    
    <div className="p-6 max-w-3xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                  className="w-16 border rounded p-1 text-center"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold">
            Total: ₹{total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
