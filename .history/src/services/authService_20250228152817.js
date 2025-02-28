import axios from "axios";

const API = axios.create({
  baseURL: "https://hostel-server-d0td.onrender.com/api",
});

// User Signup
export const registerUser = (userData) => API.post("/users/register", userData);

// User Login
export const loginUser = async (loginData) => {
  const { data } = await API.post("/users/login", loginData);
  return data;
};
