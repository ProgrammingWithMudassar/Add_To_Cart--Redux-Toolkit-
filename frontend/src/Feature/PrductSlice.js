import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Items: [],
  status: null,
  error : null
};

export const productsFetch = createAsyncThunk(
  "product/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:4030/posts/products");
      return response?.data;
    } catch (error) {
        return rejectWithValue("An Error Occured.!!!")
    }
  }
);

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducer: {},
  extraReducers: {
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "Data fetch Successfully.";
      state.Items = action.payload;
    },
    [productsFetch.pending]: (state) => {
      state.status = "Data is loading... please wait!!!";
    },
    [productsFetch.rejected]: (state,action) => {
      state.status = "Somthing went wrong...Please Try After someTime.";
      state.Items = action.payload;
    },
  },
});

export default ProductSlice.reducer;
