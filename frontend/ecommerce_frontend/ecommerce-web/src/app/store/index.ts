import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define CartItem type (example)
interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

// Cart slice with actions for example
const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] as CartItem[] },
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        updateQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
            const item = state.items.find(i => i.id === action.payload.productId);
            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

// Configure store with cart slice
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

// Infer RootState and AppDispatch types from store itself for TS safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
