"use client";
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
interface Image {
  url: string;
  // Add any other properties related to the image here if needed
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// const initialState: any =  ;
const initialCartItems = window.localStorage.getItem("cartItems");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialCartItems ? JSON.parse(initialCartItems) : [],
  },
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item: Product) => item._id === newItem._id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update its properties
        state.cartItems[existingItemIndex] = newItem;
      } else {
        // If item doesn't exist, add it to the cart
        state.cartItems.push(newItem);
      }
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(
        (item: any) => item._id !== action.payload
      );
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
