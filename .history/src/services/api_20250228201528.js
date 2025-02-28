import axios from "axios";

const api = axios.create({
  baseURL: "https://hostel-server-d0td.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Logs outgoing requests)
api.interceptors.request.use(
  (config) => {
    console.log("🚀 Request Sent:", config.method.toUpperCase(), config.url);
    console.log("📤 Request Data:", config.data);
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor (Logs responses or errors)
api.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("❌ Response Error:", error.response.status, error.response.data);
    } else {
      console.error("❌ Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
