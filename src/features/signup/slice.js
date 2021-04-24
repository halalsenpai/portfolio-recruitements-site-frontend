import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  jobseekerSignup as jobseekerSignupAPI,
  getFamilyStatus as getFamilyStatusAPI,
  getNationality as getNationalityAPI,
} from "./service";

export const getFamilyStatus = createAsyncThunk(
  "signup/family-status",
  async () => {
    const response = await getFamilyStatusAPI();
    return response.data;
  }
);

export const getNationality = createAsyncThunk(
  "signup/nationality",
  async () => {
    const response = await getNationalityAPI();
    return response.data;
  }
);

export const jobseekerSignup = createAsyncThunk(
  "signup/jobseeker",
  async (payload) => {
    const response = await jobseekerSignupAPI(payload);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  familyStatuses: [],
  nationalities: [],
  jobseekerSignupSuccess: false,
};

export const slice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        [
          jobseekerSignup.pending,
          getFamilyStatus.pending,
          getNationality.pending,
          jobseekerSignup.pending,
        ],
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(getFamilyStatus.fulfilled, (state, action) => {
        state.status = "idle";
        state.familyStatuses = action.payload;
      })
      .addCase(getNationality.fulfilled, (state, action) => {
        state.status = "idle";
        state.nationalities = action.payload;
      })
      .addCase(jobseekerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobseekerSignupSuccess = true;
      })
      .addCase(jobseekerSignup.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectSignupStatus = (state) => state.signup.status;
export const selectFamilyStatus = (state) => state.signup.familyStatuses;
export const selectNationality = (state) => state.signup.nationalities;
export const selectJobseekerSignup = (state) =>
  state.signup.jobseekerSignupSuccess;

// export const { getSignup } = slice.actions;

export default slice.reducer;
