import { createSlice } from "@reduxjs/toolkit";
import { predictDataThunk } from "../action/predictAction";
// file nay hinh nhu khong su dung, code k co
const predictSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data :{}
  },
  extraReducers: (builder) => {
    builder.addCase(predictDataThunk.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(predictDataThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
    });
    builder.addCase(predictDataThunk.rejected, (state, { payload})=>{
        state.loading = false;
    })
  },
});

export default predictSlice;
