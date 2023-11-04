import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../Config/AxiosInstance";

const initialState = {
  status: "default",
  data: {},
};

export const fetchData = createAsyncThunk("data/fetchdata", async () => {
  try {
    const response = await axiosInstance.get();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const MovieSlice = createSlice({
  name: "Movietheatre",
  initialState,
  reducers: {},
  extraReducers: () => {
    // builder.addCase(fetchData.fulfilled(state, action)=> {
    // state.status = "Success";
    // })
    // .addCase(fetchData.pending, (state) => {
    // state.status = "Loading";
    // })
    //     .addCase(fetchData.rejected, (state) => {
    //     state.status = "Canceal"
    // })
  },
});

export default MovieSlice.reducer;
