import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  //the product is passed as payload
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.uniqueId !== action.payload.uniqueId
      );
      state.quantity = state.quantity -= 1;
      state.total =
        state.total - action.payload.quantity * action.payload.price;
    },
  },
});

export const { addProduct, reset, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
