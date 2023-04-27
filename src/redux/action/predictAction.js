import { createAsyncThunk } from "@reduxjs/toolkit";
import predict from "../api/predict";

const { predictData } = predict;

export const predictDataThunk = createAsyncThunk(
  "predict/predictData",
  async (data) => {
    const res = await predictData(data);
    return res;
  }
);
