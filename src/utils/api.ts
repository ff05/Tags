import axios, { AxiosResponse } from "axios";

export const fetch = async <T>(url: string) => {
  try {
    return axios.get(url).then((response: AxiosResponse): T => response.data);
  } catch (error) {
    return error;
  }
};

export const add = async (url: string, data: {}) => {
  try {
    return axios.post(url, data).then((response: AxiosResponse) => response);
  } catch (error) {
    return error;
  }
};

export const change = async (url: string, data: {}) => {
  try {
    return axios.put(url, data).then((response: AxiosResponse) => response);
  } catch (error) {
    return error;
  }
};

export const remove = async (url: string) => {
  try {
    return axios.delete(url).then((response: AxiosResponse) => response);
  } catch (error) {
    return error;
  }
};
