import { get, post } from "../../utils/httpService";

const SERVICE_URLS = {
  getFamilyStatus: () => `/family-status`,
  getNationality: () => `/nationality`,
  getFindUsPlatform: () => `/find-us`,
  getCompany: () => `/company-profile?page=1&limit=100`,
  getCountry: () => `/country`,
  getCity: () => `/city`,
  getJobTitle: (id) => `/job-title/${id}`,
  jobseekerSignup: () => `/auth/jobseeker/signup`,
  employerSignup: () => `/auth/employer/signup`,
};

export const getFamilyStatus = () => get(SERVICE_URLS.getFamilyStatus());
export const getNationality = () => get(SERVICE_URLS.getNationality());
export const getFindUsPlatform = () => get(SERVICE_URLS.getFindUsPlatform());
export const getCompany = () => get(SERVICE_URLS.getCompany());
export const getCountry = () => get(SERVICE_URLS.getCountry());
export const getCity = () => get(SERVICE_URLS.getCity());
export const getJobTitle = (id) => get(SERVICE_URLS.getJobTitle(id));

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
export const employerSignup = (body) =>
  post(SERVICE_URLS.employerSignup(), body);
