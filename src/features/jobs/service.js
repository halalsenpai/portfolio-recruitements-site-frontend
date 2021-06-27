import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getJob: (qs) => `/jobs/public${qs}`,
  getFilteredJob: (params) => `/jobs/public?page=1&limit=100${params}`,
  verifyToken: () => `/auth/verify`,
  getJobTitle: () => `/jobtitle?page=1&limit=100&title=`,
  getEmploymentType: () => `/employment-type`,
  getCountry: () => `/country`,
  getCity: () => `/city?page=1&limit=100`,
  getQualification: () => `/qualification`,
  getFieldOfStudy: () => `/field-of-study`,
  getGrade: () => `/grade`,
  getCompany: () => `/company-profile?page=1&limit=100`,
  getAccommodation: () => `/accommodation-list`,
  getCategory: () => `/categories`,
  getJobTitles: (id) => `/jobtitle/${id}`,
  getSalaryType: () => `/salary-type`,
  getJobByCategory: (id) => `/jobs/public?page=1&limit=4${id}`,
  getJobsByCompany: (id) => `/jobs/public?page=1&limit=4${id}`,
  getSuitableFor: (id) => `/suitable-job-list`,
  getCitiesByCountry: (id) => `/city/by-country-id/${id}?page=1&limit=500`,
};

export const getJob = (qs) => get(SERVICE_URLS.getJob(qs));
export const getJobTitle = () => get(SERVICE_URLS.getJobTitle());
export const getEmploymentType = () => get(SERVICE_URLS.getEmploymentType());
export const getCountry = () => get(SERVICE_URLS.getCountry());
export const getCity = () => get(SERVICE_URLS.getCity());
export const getQualification = () => get(SERVICE_URLS.getQualification());
export const getFieldOfStudy = () => get(SERVICE_URLS.getFieldOfStudy());
export const getGrade = () => get(SERVICE_URLS.getGrade());
export const getCompany = () => get(SERVICE_URLS.getCompany());
export const getAccommodation = () => get(SERVICE_URLS.getAccommodation());
export const getCategories = () => get(SERVICE_URLS.getCategory());
export const getJobTitles = () => get(SERVICE_URLS.getJobTitle());
export const getJobTitlesById = (id) => get(SERVICE_URLS.getJobTitles(id));
export const getSalaryType = () => get(SERVICE_URLS.getSalaryType());
export const getJobByCategory = (id) => get(SERVICE_URLS.getJobByCategory(id));
export const getJobsByCompany = (id) => get(SERVICE_URLS.getJobsByCompany(id));
export const getSuitableFor = () => get(SERVICE_URLS.getSuitableFor());
export const getFilteredJob = (params) =>
  get(SERVICE_URLS.getFilteredJob(params));
export const getCitiesByCountry = (id) =>
  get(SERVICE_URLS.getCitiesByCountry(id));
