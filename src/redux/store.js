import { configureStore } from "@reduxjs/toolkit";
import predictSlice from "./slices/predict";

export const store = configureStore({
  reducer: { predict: predictSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
