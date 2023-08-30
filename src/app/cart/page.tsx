"use client";
import { add, remove } from "@/redux/slices/cartSlice";
import { useEffect, useState } from "react";
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
  quantity: number;
}
export default function Cart() {
  const { cartItems } = useSelector((state: any) => state.cart); // Assuming your cart slice is named 'cart'
  const dispatch = useDispatch();
  //   const [quantity, setquantity] = useState(1);
  const deleteItem = (id: number) => {
    dispatch(remove(id));
  };
  const increaseQuantity = (id: number, quantity: number, stock: number) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      alert("Not Enough Stock available");
      return;
    }
    const updatedProduct = {
      ...cartItems.find((item: Product) => item._id === id),
      quantity: newQty,
    };
    dispatch(add(updatedProduct));
  };

  const decreaseQuantity = (id: number, quantity: number) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    const updatedProduct = {
      ...cartItems.find((item: Product) => item._id === id),
      quantity: newQty,
    };
    dispatch(add(updatedProduct));
  };
  useEffect(() => {
    console.log(cartItems, "helo");
  }, []);

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-3xl font-semibold mb-8 text-center">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item: Product) => (
            <div
              key={item._id}
              className="flex items-center flex-wrap justify-between border h-[150px] p-2 rounded"
            >
              <img
                src={item.images[0].url}
                alt=""
                className="h-[60px] w-[100px] object-cover"
              />
              <div className="flex-1 mx-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price * item.quantity}</p>
              </div>
              <div className="flex items-center">
                <p
                  className="cursor-pointer mr-5 font-semibold text-red-700 text-lg"
                  onClick={() => deleteItem(item._id)}
                >
                  Remove
                </p>
                <button
                  className="bg-black px-2 text-white cursor-pointer rounded-lg"
                  onClick={() => {
                    decreaseQuantity(item._id, item.quantity);
                  }}
                >
                  -
                </button>
                <p className="px-2">{item.quantity}</p>
                <button
                  className="bg-black px-2 text-white cursor-pointer rounded-lg"
                  onClick={() =>
                    increaseQuantity(item._id, item.quantity, item.stock)
                  }
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
