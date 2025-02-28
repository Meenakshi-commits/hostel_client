import axios from "axios";

export const sendEmailNotification = async (email, message) => {
  await axios.post("/api/notifications/email", { email, message });
};

export const sendSMSNotification = async (phone, message) => {
  await axios.post("/api/notifications/sms", { phone, message });
};
