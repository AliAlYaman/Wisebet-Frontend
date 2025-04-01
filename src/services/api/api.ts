import axios, { AxiosInstance } from "axios";

// Get the backend URL from environment variables
const BASE_URL = 'http://localhost:8000/api/v1';

if (!BASE_URL) {
  throw new Error("BACKEND_URL is not defined in environment variables");
}

// Create Axios instance with base URL
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default api;
