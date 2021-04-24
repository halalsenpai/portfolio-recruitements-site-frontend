import { configureStore } from "@reduxjs/toolkit";

import signup from "../features/signup/slice";

export const store = configureStore({
  reducer: {
    signup,
  },
});
