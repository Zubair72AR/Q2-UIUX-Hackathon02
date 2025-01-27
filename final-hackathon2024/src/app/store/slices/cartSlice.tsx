import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../../types/products";

interface CartItem extends Product {
  orderQty: number; // Added property for ordered quantity
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      console.log("Payload received:", payload);
      const { prod } = payload;
      console.log("Product to add:", prod);

      const existingItem = state.find((item) => item._id === prod._id);
      if (existingItem) {
        // If the product already exists, increment its orderQty
        existingItem.orderQty += 1;
      } else {
        // Add new product to the cart with default orderQty of 1
        state.push({ ...prod, orderQty: 1 });
      }
    },

    removeFromCart(state, { payload }) {
      const { prodId } = payload;
      const existingItemIndex = state.findIndex((item) => item._id === prodId);

      if (existingItemIndex !== -1) {
        // If there's more than 1 quantity, decrement orderQty
        if (state[existingItemIndex].orderQty > 1) {
          state[existingItemIndex].orderQty -= 1;
        } else {
          // Otherwise, remove the item from the cart
          state.splice(existingItemIndex, 1);
        }
      }
    },

    clearCart() {
      // Reset the cart to an empty array
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
