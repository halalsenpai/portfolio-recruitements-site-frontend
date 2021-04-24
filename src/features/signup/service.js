import { get, post } from "../../utils/httpService";

const SERVICE_URLS = {
  getFamilyStatus: () => `/family-status`,
  getNationality: () => `/nationality`,
  jobseekerSignup: () => `/auth/jobseeker/signup`,
};

export const getFamilyStatus = () => get(SERVICE_URLS.getFamilyStatus());
export const getNationality = () => get(SERVICE_URLS.getNationality());

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
