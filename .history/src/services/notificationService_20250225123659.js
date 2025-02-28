import axios from "axios";

const API_URL = "http://localhost:5000/api/notifications"; // Backend notifications route

const notificationService = {
  sendEmail: async (emailData) => {
    const response = await axios.post(`${API_URL}/email`, emailData);
    return response.data;
  },

  sendSMS: async (smsData) => {
    const response = await axios.post(`${API_URL}/sms`, smsData);
    return response.data;
  },

  getNotifications: async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  },
};

export default notificationService;
