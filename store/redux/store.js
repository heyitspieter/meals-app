import favoritesReducer from "./slices/favorite";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
