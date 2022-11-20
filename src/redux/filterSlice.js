import { createSlice } from "@reduxjs/toolkit";


const filterInitialState =[];

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.splice(0,1,action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;