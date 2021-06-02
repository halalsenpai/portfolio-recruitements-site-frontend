import { configureStore } from "@reduxjs/toolkit";

import signup from "../features/signup/slice";
import login from "../features/login/slice";
import jobs from "../features/jobs/slice";
import pricing from "../features/pricing/slice";
import services from "../features/services/slice";
import forgotPassword from "../features/forgotPassword/slice";

export const store = configureStore({
  reducer: {
    signup,
    login,
    jobs,
    pricing,
    forgotPassword,
  },
});
