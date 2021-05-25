import { configureStore } from "@reduxjs/toolkit";

import signup from "../features/signup/slice";
import login from "../features/login/slice";

export const store = configureStore({
  reducer: {
    signup,
    login,
  },
});
