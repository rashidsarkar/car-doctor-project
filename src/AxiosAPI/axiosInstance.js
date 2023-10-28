import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  withCredentials: true,
  timeout: 5000, // Adjust the timeout as needed
});

export default axiosInstance;
