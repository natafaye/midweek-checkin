import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../TESTDATA';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    entities: PRODUCTS
  },
  reducers: {
  },
});

//export const {  } = cartSlice.actions;

export const selectAllProducts = (state) => state.products.entities;

export default productSlice.reducer;