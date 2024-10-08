import { createSlice } from '@reduxjs/toolkit';
import productsData from './products.json';

const initialState = {
  products: productsData.products,
  quantities: productsData.products.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {}),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      delete state.quantities[id]; // Optionally set quantity to 0 instead
    },
  },
});

export const { updateQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
