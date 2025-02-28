import axios from "axios";

export const sendEmail = async (emailData) => {
  return await axios.post("/api/notifications/email", emailData);
};

export const sendSMS = async (smsData) => {
  return await axios.post("/api/notifications/sms", smsData);
};
