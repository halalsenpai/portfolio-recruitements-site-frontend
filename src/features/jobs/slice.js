import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import {
  getJob,
  getJobTitle,
  getEmploymentType,
  getCountry,
  getCity,
  getQualification,
  getFieldOfStudy,
  getGrade,
  getCompany,
  getAccommodation,
} from "./thunk";

const thunks = [
  getJob,
  getJobTitle,
  getEmploymentType,
  getCountry,
  getCity,
  getQualification,
  getFieldOfStudy,
  getGrade,
  getCompany,
  getAccommodation,
];

const initialState = {
  status: "idle",
  errorMessage: "",
  jobs: [],
  jobTitles: [],
  employmentTypes: [],
  countries: [],
  cities: [],
  qualifications: [],
  fieldsOfStudy: [],
  grades: [],
  companies: [],
  accommodations: [],
};

export const slice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJob.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobs = action.payload;
      })
      .addCase(getJobTitle.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobTitles = action.payload;
      })
      .addCase(getEmploymentType.fulfilled, (state, action) => {
        state.status = "idle";
        state.employmentTypes = action.payload;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.countries = action.payload;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.status = "idle";
        state.cities = action.payload;
      })
      .addCase(getQualification.fulfilled, (state, action) => {
        state.status = "idle";
        state.qualifications = action.payload;
      })
      .addCase(getFieldOfStudy.fulfilled, (state, action) => {
        state.status = "idle";
        state.fieldsOfStudy = action.payload;
      })
      .addCase(getGrade.fulfilled, (state, action) => {
        state.status = "idle";
        state.grades = action.payload;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(getAccommodation.fulfilled, (state, action) => {
        state.status = "idle";
        state.accommodations = action.payload;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
        state.errorMessage = null;
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const selectStatus = (state) => state.jobs.status === "loading";
export const selectError = (state) => state.jobs.errorMessage;
export const selectJobs = (state) => state.jobs.jobs;
export const selectJobTitles = (state) => state.jobs.jobTitles;
export const selectEmploymentTypes = (state) => state.jobs.employmentTypes;
export const selectCountries = (state) => state.jobs.countries;
export const selectCities = (state) => state.jobs.cities;
export const selectQualifications = (state) => state.jobs.qualifications;
export const selectFieldsOfStudy = (state) => state.jobs.fieldsOfStudy;
export const selectGrades = (state) => state.jobs.grades;
export const selectCompanies = (state) => state.jobs.companies;
export const selectAccommodations = (state) => state.jobs.accommodations;

// export const { getProfile } = slice.actions;

export default slice.reducer;
