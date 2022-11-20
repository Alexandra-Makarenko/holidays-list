import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: false,
    error: null,
    sortBy: null,
  },
  reducers: {
    sortCountriesinAlphabetOrder(state) {
    state.countries.sort((firstCountry, secondCountry) =>
      firstCountry.name.localeCompare(secondCountry.name));
      state.sortBy = false;
    },
    sortCountriesinReversedOrder (state) {
    state.countries.sort((firstCountry, secondCountry) =>
      secondCountry.name.localeCompare(firstCountry.name));
      state.sortBy = true;
        }
  },
  extraReducers: {
    [fetchCountries.pending]: handlePending,
    [fetchCountries.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.countries = action.payload.sort((firstCountry, secondCountry) =>
      secondCountry.name.localeCompare(firstCountry.name));
      state.sortBy = true;
    },
    [fetchCountries.rejected]: handleRejected,
  }
});
export const { sortCountriesinAlphabetOrder,sortCountriesinReversedOrder } = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;


