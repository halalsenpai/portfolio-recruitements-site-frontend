import { get, post } from "../../utils/httpService";
import { jsonToQueryString } from "../../utils/helper";

const SERVICE_URLS = {
  getRole: () => `/role`,
  getFamilyStatus: () => `/family-status`,
  getNationality: () => `/nationality`,
  getFindUsPlatform: () => `/find-us`,
  getCompany: (qs) => `/company-profile/name/list${qs}`,
  getCountry: (qs) => `/country${qs}`,
  getCity: () => `/city?page=1&limit=100`,
  getCitiesByCountry: (qs, categoryId) =>
    `/city/by-country-id/${categoryId}${qs}`,
  getJobTitle: (qs) => `/jobtitle${qs}`,
  jobseekerSignup: () => `/auth/jobseeker/signup`,
  employerSignup: () => `/auth/employer/signup`,
  confirmEmail: () => `/auth/verify`,
  getCountryByIp: () => `http://ip-api.com/json'`,
  getSector: (qs) => `/categories${qs}`,
  uploadProfileImage: () => `/file-handle/avatar`,
};

export const getRole = () => get(SERVICE_URLS.getRole());
export const getFamilyStatus = () => get(SERVICE_URLS.getFamilyStatus());
export const getNationality = () => get(SERVICE_URLS.getNationality());
export const getFindUsPlatform = () => get(SERVICE_URLS.getFindUsPlatform());
export const getCompany = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCompany(qs));
};
export const getCountry = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCountry(qs));
};
export const getCity = () => get(SERVICE_URLS.getCity());
export const getCitiesByCountry = (params, categoryId) => {
  console.log("id from service", categoryId);
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCitiesByCountry(qs, categoryId));
};
export const getJobTitle = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getJobTitle(qs));
};

export const getSector = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getSector(qs));
};
export const confirmEmail = () => get(SERVICE_URLS.confirmEmail());

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
export const employerSignup = (body) =>
  post(SERVICE_URLS.employerSignup(), body);

export const getCountryByIp = () => fetch("http://ip-api.com/json");

export const uploadProfileImage = (body, params) =>
  post(SERVICE_URLS.uploadProfileImage(), body, params);
