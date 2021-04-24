import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { jobseekerSignup as jobseekerSignupAPI } from "./service";

export const jobseekerSignup = createAsyncThunk(
  "signup/update",
  async ({ id, payload }) => {
    const response = await jobseekerSignupAPI(id, payload);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  signupDetail: {},
};

export const slice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(jobseekerSignup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(jobseekerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.signupDetail = action.payload;
      })
      .addCase(jobseekerSignup.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectSignup = (state) => state.signup;

// export const { getSignup } = slice.actions;

export default slice.reducer;
