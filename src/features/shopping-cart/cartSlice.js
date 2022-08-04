import { createSlice } from '@reduxjs/toolkit';
import { SHOPPING_CART } from '../../TESTDATA';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    entities: SHOPPING_CART
  },
  reducers: {
    addToShoppingCart: (state, action) => {
        state.entities.push(action.payload)
    },
    removeFromShoppingCart: (state, action) => {
        const indexToDelete = state.entities.findIndex(cartItem => cartItem.id === action.payload)
        state.entities.splice(indexToDelete, 1)
    },
  },
});

export const { addToShoppingCart, removeFromShoppingCart } = cartSlice.actions;

export default cartSlice.reducer;
