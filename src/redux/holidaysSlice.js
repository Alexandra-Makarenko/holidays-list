import { createSlice } from "@reduxjs/toolkit";
import { showHolidays} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const holidaysSlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: [],
    isLoading: false,
    error: null,
    },
    reducers: {
    resetHolidays(holidays) {
      holidays.holidays = [];
        }
  },
  extraReducers: {
    [showHolidays.pending]: handlePending,
    [showHolidays.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.holidays = action.payload;
      },
    [showHolidays.rejected]: handleRejected
    },
    
});

export const { resetHolidays } = holidaysSlice.actions;

export const holidaysReducer = holidaysSlice.reducer;


