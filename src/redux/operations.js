import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://date.nager.at/api/v3";

export const fetchCountries = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/AvailableCountries");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const showHolidays = createAsyncThunk(
  "holidays/fetchAll",
  async ( countryCode, thunkAPI) => {
    try {
      const response = await axios.get(`NextPublicHolidays/${countryCode}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

