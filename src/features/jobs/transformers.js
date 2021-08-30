import { getTitleById, findCurrencyCodeById } from "../../utils/helper";

export const transformJobData = (
  data,
  jobTitles,
  employmentTypes,
  countries,
  salaryTypes = null,
  currencyType = null
) => {
  const title = getTitleById(jobTitles, data.jobTitleId);
  const employmentType = getTitleById(employmentTypes, data.employmentTypeId);
  const country = getTitleById(countries, data.countryId);
  const salaryType = getTitleById(salaryTypes, data?.salaryTypeId);
  const currency = findCurrencyCodeById(currencyType, data?.currencyId);
  console.log("TRANSFORM DATA", {
    ...data,
    title,
    employmentType,
    country,
    salaryType,
    currency,
  });
  return {
    ...data,
    title,
    employmentType,
    country,
    salaryType,
    currency,
  };
};
