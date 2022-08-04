import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/shopping-cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
});
