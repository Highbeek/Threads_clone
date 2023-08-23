import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Src/slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice, // Use 'user' as the key, not 'userSlice'
  },
});

export default store;
