import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-cart";
import cartActions from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartActions },
});

export default store;
