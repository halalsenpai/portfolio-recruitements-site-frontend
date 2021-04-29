import { createSlice } from "@reduxjs/toolkit";

import {
  getFamilyStatus,
  getFindUsPlatform,
  getNationality,
  getCompany,
  getCountry,
  getCity,
  getJobTitle,
  jobseekerSignup,
  employerSignup,
} from "./thunk";

const initialState = {
  status: "idle",
  familyStatuses: [],
  nationalities: [],
  findUsPlatforms: [],
  companies: [],
  countries: [],
  cities: [],
  jobTitles: [],
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
          getFamilyStatus.pending,
          getNationality.pending,
          getFindUsPlatform.pending,
          getCompany.pending,
          getCountry.pending,
          getCity.pending,
          jobseekerSignup.pending,
          employerSignup.pending,
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
      .addCase(getCompany.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload.items;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.countries = action.payload;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.status = "idle";
        state.cities = action.payload;
      })
      .addCase(getJobTitle.fulfilled, (state, action) => {
        state.status = "idle";
        state.cities = action.payload;
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
export const selectCompany = (state) => state.signup.companies;
export const selectCountry = (state) => state.signup.countries;
export const selectCity = (state) => state.signup.cities;
export const selectJobTitles = (state) => state.signup.jobTitles;
export const selectJobseekerSignup = (state) =>
  state.signup.jobseekerSignupSuccess;
export const selectEmployerSignup = (state) =>
  state.signup.employerSignupSuccess;

// export const { getSignup } = slice.actions;

export default slice.reducer;
