"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// const initialState: any =  ;
const initialCartItems = localStorage.getItem("cartItems");

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loadUser() {},
  },
});
export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
