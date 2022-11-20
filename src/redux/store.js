import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./countriesSlice";
import { filterReducer } from "./filterSlice";
import { holidaysReducer } from "./holidaysSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    holidays: holidaysReducer,
  },
});
