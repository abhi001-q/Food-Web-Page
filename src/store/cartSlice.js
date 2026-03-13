import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [], // Keep it as a simple array
    reducers: {
        addItem: (state, action) => {
            // Check if item already exists in cart
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({ ...action.payload, qty: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        incrementQty: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.qty += 1;
            }
        },
        decrementQty: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.qty > 1) {
                item.qty -= 1;
            }
        }
    }
});

export const { addItem, removeItem, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;