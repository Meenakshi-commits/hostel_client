import api from "./api";

// Fetch all users whose role is not admin
export const fetchAllUsers = async () => {
  try {
    const response = await api.get("/api/users?role=user");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
