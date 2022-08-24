import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';

export default configureStore({
    reducer: {
        cart: cartSlice,
    }
})