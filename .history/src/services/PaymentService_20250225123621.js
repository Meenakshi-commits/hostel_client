import axios from "axios";

const API_URL = "http://localhost:5000/api/payments"; // Backend payment route

const paymentService = {
  processPayment: async (paymentData) => {
    const response = await axios.post(`${API_URL}/pay`, paymentData);
    return response.data;
  },

  getTransactions: async () => {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  },
};

export default paymentService;
