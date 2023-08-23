import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Src/slices/userSlice";

export const store = configureStore({
  reducer: { userSlice },
});
