import { getTitleById } from "../../utils/helper";

export const transformJobData = (
  data,
  jobTitles,
  employmentTypes,
  countries
) => {
  const title = getTitleById(jobTitles, data.jobTitleId);
  const employmentType = getTitleById(employmentTypes, data.employmentTypeId);
  const country = getTitleById(countries, data.countryId);

  return {
    ...data,
    title,
    employmentType,
    country,
  };
};
