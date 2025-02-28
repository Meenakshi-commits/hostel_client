import axios from "axios";

export const processPayment = async (paymentData) => {
  return await axios.post("/api/payment", paymentData);
};
