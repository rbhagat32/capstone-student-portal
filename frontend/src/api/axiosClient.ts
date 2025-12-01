import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // yeah likh dena baacho http://localhost:4000
  withCredentials: true,
});

export default axiosClient;
