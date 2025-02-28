import axios from "axios";

const API_URL = "/api/users";

export const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);
  return data;
};

export const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data;
};
