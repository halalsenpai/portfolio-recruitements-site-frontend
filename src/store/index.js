import { configureStore } from "@reduxjs/toolkit";

import signup from "../features/signup/slice";
import login from "../features/login/slice";
import jobs from "../features/jobs/slice";

export const store = configureStore({
  reducer: {
    signup,
    login,
    jobs,
  },
});
