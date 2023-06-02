import { createSlice } from "@reduxjs/toolkit";
import { getStoryThunk } from "../action/storyAction";

const storySlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data :{}
  },
  extraReducers: (builder) => {
    builder.addCase(getStoryThunk.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getStoryThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
    });
    builder.addCase(getStoryThunk.rejected, (state, { payload})=>{
        state.loading = false;
    })
  },
});

export default storySlice;
