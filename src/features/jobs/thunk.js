import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getJob as getJobAPI,
  getJobTitle as getJobTitleAPI,
  getEmploymentType as getEmploymentTypeAPI,
  getCountry as getCountryAPI,
  getCity as getCityAPI,
  getQualification as getQualificationAPI,
  getFieldOfStudy as getFieldOfStudyAPI,
  getGrade as getGradeAPI,
  getCompany as getCompanyAPI,
  getAccommodation as getAccommodationAPI,
} from "./service";

export const getJob = createAsyncThunk("jobs/get-job", async () => {
  const response = await getJobAPI();
  return response.data;
});

export const getJobTitle = createAsyncThunk("jobs/get-jobtitle", async () => {
  const response = await getJobTitleAPI();
  return response.data;
});

export const getEmploymentType = createAsyncThunk("jobs/get-employment-type", async () => {
  const response = await getEmploymentTypeAPI();
  return response.data;
});

export const getCountry = createAsyncThunk("jobs/get-country", async () => {
  const response = await getCountryAPI();
  return response.data;
});

export const getCity = createAsyncThunk("jobs/get-city", async () => {
  const response = await getCityAPI();
  return response.data;
});

export const getQualification = createAsyncThunk("jobs/get-qualification", async () => {
  const response = await getQualificationAPI();
  return response.data;
});

export const getFieldOfStudy = createAsyncThunk("jobs/get-field-of-study", async () => {
  const response = await getFieldOfStudyAPI();
  return response.data;
});

export const getGrade = createAsyncThunk("jobs/get-grade", async () => {
  const response = await getGradeAPI();
  return response.data;
});

export const getCompany = createAsyncThunk("jobs/get-company", async () => {
  const response = await getCompanyAPI();
  return response.data;
});

export const getAccommodation = createAsyncThunk("jobs/get-accommodation", async () => {
  const response = await getAccommodationAPI();
  return response.data;
});
