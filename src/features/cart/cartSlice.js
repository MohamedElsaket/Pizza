import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItem(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            
            item.quantity++;
            item.totalPrice = item.quantity * item.unitprice;
        },
        decreaseItem(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.unitprice;

            if(item.quantity < 1) return cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    }
})

export const {addItem, deleteItem, increaseItem, decreaseItem, clearCart} = cartSlice.actions;

export const getTotalQuantity = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalPrice = state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantity = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;