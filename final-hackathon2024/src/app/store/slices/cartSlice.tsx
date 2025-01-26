import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../../types/products";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      console.log("Payload received:", payload);
      const { prod } = payload;
      console.log("Product to add:", prod);
      if (!state.find((item) => item._id === prod._id)) {
        state.push(prod);
      }
    },

    removeFromCart(state, actions) {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
