import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getFamilyStatus as getFamilyStatusAPI,
  getNationality as getNationalityAPI,
  getFindUsPlatform as getFindUsPlatformAPI,
  jobseekerSignup as jobseekerSignupAPI,
  employerSignup as employerSignupAPI,
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

export const getFindUsPlatform = createAsyncThunk(
  "signup/find-us",
  async () => {
    const response = await getFindUsPlatformAPI();
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

export const employerSignup = createAsyncThunk(
  "signup/employer",
  async (payload) => {
    const response = await employerSignupAPI(payload);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  familyStatuses: [],
  nationalities: [],
  findUsPlatforms: [],
  jobseekerSignupSuccess: false,
  employerSignupSuccess: false,
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
          getFindUsPlatform.pending,
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
      .addCase(getFindUsPlatform.fulfilled, (state, action) => {
        state.status = "idle";
        state.findUsPlatforms = action.payload;
      })
      .addCase(jobseekerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobseekerSignupSuccess = true;
      })
      .addCase(employerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.employerSignupSuccess = true;
      })
      .addCase(jobseekerSignup.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectSignupStatus = (state) => state.signup.status;
export const selectFamilyStatus = (state) => state.signup.familyStatuses;
export const selectNationality = (state) => state.signup.nationalities;
export const selectFindUsPlatform = (state) => state.signup.findUsPlatforms;
export const selectJobseekerSignup = (state) =>
  state.signup.jobseekerSignupSuccess;
export const selectEmployerSignup = (state) =>
  state.signup.employerSignupSuccess;

// export const { getSignup } = slice.actions;

export default slice.reducer;
