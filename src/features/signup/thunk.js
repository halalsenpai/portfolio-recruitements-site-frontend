import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getRole as getRoleAPI,
  getFamilyStatus as getFamilyStatusAPI,
  getNationality as getNationalityAPI,
  getFindUsPlatform as getFindUsPlatformAPI,
  getCompany as getCompanyAPI,
  getCountry as getCountryAPI,
  getCity as getCityAPI,
  getJobTitle as getJobTitleAPI,
  jobseekerSignup as jobseekerSignupAPI,
  employerSignup as employerSignupAPI,
} from "./service";

// GET APIs
export const getRole = createAsyncThunk("signup/role", async () => {
  const response = await getRoleAPI();
  return response.data;
});

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

export const getCompany = createAsyncThunk("signup/company", async () => {
  const response = await getCompanyAPI();
  return response.data;
});

export const getCountry = createAsyncThunk("signup/country", async () => {
  const response = await getCountryAPI();
  return response.data;
});

export const getCity = createAsyncThunk("signup/city", async () => {
  const response = await getCityAPI();
  return response.data;
});

export const getJobTitle = createAsyncThunk("signup/job-title", async () => {
  const response = await getJobTitleAPI();
  return response.data;
});

// POST APIs
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
