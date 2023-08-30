"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
interface Image {
  url: string;
  // Add any other properties related to the image here if needed
}
interface Product {
  _id: number;
  images: Image[];
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings: number;
}
export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart); // Assuming your cart slice is named 'cart'
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold mb-4">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item: Product) => (
            <div
              key={item._id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <img
                src={item.images[0].url}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 mx-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-black px-2 text-white cursor-pointer rounded-lg"
                  onClick={() => {
                    quantity > 1 && setquantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p className="px-2">{quantity}</p>
                <button
                  className="bg-black px-2 text-white cursor-pointer rounded-lg"
                  onClick={() => setquantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
