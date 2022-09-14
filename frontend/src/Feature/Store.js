import { configureStore } from '@reduxjs/toolkit'
import productReducer from './PrductSlice.js'
import {productsAPI}  from './ProductAPI.js';
import cartSlice from './CartSlice.js'
import AuthReducer from './AuthSlice.js';

export const store = configureStore({
    reducer: {
      Products : productReducer,
      cart: cartSlice,
      auth: AuthReducer,
      [productsAPI.reducerPath] : productsAPI.reducer,
    },
    middleware : (gDM)=>{ //gDM => getDefaultMiddleware
       return gDM().concat(productsAPI.middleware)
    }
  });