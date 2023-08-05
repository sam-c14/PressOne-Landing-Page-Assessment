import axios from "axios";

const HTTP = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url) => {
  try {
    const response = await HTTP.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
