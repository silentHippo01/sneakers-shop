import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0,
    }, 
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
            state.totalPrice += Number(action.payload.product.price);
        }
    }
})

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;