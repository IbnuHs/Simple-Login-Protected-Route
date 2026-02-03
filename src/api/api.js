import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VITE_BASE_URL || "http://localhost:3100/",
  withCredentials: true,
});
