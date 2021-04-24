import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  jobseekerSignup: () => `/auth/jobseeker/signup`,
};

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
