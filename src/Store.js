import { configureStore } from '@reduxjs/toolkit';

import CartReducer from './features/CartReducer';
export const store = configureStore({
  reducer: {
    cartState: CartReducer,
  },
});