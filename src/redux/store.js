import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Make sure this path matches your file structure

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;