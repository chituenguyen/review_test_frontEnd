import { configureStore } from "@reduxjs/toolkit";
import storySlice from "./slices/story";

export const store = configureStore({
  reducer: { story: storySlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
