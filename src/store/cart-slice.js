import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItemCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemCart(state, action) {
      console.log(state);
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        // state.items.filter((item) => item.id !== id);
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;