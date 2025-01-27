import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../../types/products";

interface CartItem extends Product {
  orderQty: number; // Ordered quantity
}

// Load initial state lazily to avoid issues with SSR
const getInitialState = (): CartItem[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  return [];
};

const initialState: CartItem[] = getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { prod, orderQty = 1 } = payload;

      const existingItem = state.find((item) => item._id === prod._id);
      if (existingItem) {
        // Increment the quantity of the existing item
        existingItem.orderQty += orderQty;
      } else {
        // Add new product to the cart with specified or default orderQty
        state.push({ ...prod, orderQty });
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
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

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart() {
      // Clear cart and remove it from localStorage
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
