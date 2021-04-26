import { get, post } from "../../utils/httpService";

const SERVICE_URLS = {
  getFamilyStatus: () => `/family-status`,
  getNationality: () => `/nationality`,
  getFindUsPlatform: () => `/find-us`,
  jobseekerSignup: () => `/auth/jobseeker/signup`,
  employerSignup: () => `/auth/employer/signup`,
};

export const getFamilyStatus = () => get(SERVICE_URLS.getFamilyStatus());
export const getNationality = () => get(SERVICE_URLS.getNationality());
export const getFindUsPlatform = () => get(SERVICE_URLS.getFindUsPlatform());

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
export const employerSignup = (body) =>
  post(SERVICE_URLS.employerSignup(), body);
