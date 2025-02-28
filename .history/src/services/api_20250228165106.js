import axios from "axios";

const api = axios.create({
  baseURL: "https://hostel-server-d0td.onrender.com", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
