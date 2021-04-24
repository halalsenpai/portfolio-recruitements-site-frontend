import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev-api.jobsmideast.com",
  timeout: 60000,
});

const request = async ({ method, url, data, headers, skipAuth }) => {
  const promise = instance[method](url, data);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return payload;
  } catch (err) {
    let msg = err.response.data.message;
    if (err.response.data.details) {
      msg = err.response.data.details.message;
    }
    throw new Error(msg);
  }
};

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url) => request({ method: "delete", url });
