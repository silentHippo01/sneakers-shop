import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


// if (typeof window !== 'undefined') {
//     const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [];
// }

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload.itemCart;
            const existItem = state.cartItems.find((elem) => elem._id === item._id && elem.chooseSize === item.chooseSize);

            if (existItem) {
                state.cartItems.map((elem) => {
                    if ((elem._id === item._id) && (elem.chooseSize === item.chooseSize)) {
                        elem.qty += item.qty;
                        state.totalPrice += item.price * item.qty;
                    } else if ((elem._id != item._id) && (elem.chooseSize != item.chooseSize)) {
                        state.cartItems.push(item);
                        state.totalPrice += item.price * item.qty;
                    }
                })
            } else {
                state.cartItems.push(item);
                state.totalPrice += item.price * item.qty;
            }
            
            //    localStorage.removeItem('cart');
            //    localStorage.setItem("cart", JSON.stringify(state.cartItems));
            
        },
        removeItem: (state, action) => {
            state.totalPrice -= Number(state.cartItems[action.payload].price) * state.cartItems[action.payload].qty;
            state.cartItems.splice(action.payload, 1);
        },

        decQuantity: (state, action) => {
            if (state.cartItems[action.payload].qty - 1 < 1) {
                state.totalPrice -= Number(state.cartItems[action.payload].price);
                state.cartItems.splice(action.payload, 1);
            } else {
                state.cartItems[action.payload].qty -= 1;
                state.totalPrice -= Number(state.cartItems[action.payload].price);
            }
        },

        incQuantity: (state, action) => {
            if (state.cartItems[action.payload].qty < 10) {
                state.cartItems[action.payload].qty += 1;
                state.totalPrice += Number(state.cartItems[action.payload].price);
            }

        }
    }
})

export const { addItem, removeItem, decQuantity, incQuantity } = cartSlice.actions;

export default cartSlice.reducer;