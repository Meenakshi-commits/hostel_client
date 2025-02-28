import api from "./api";

// Send Email Notification
export const sendEmailNotification = async (emailData) => {
  try {
    const response = await api.post("/api/notifications/email", emailData);
    return response.data;
  } catch (error) {
    console.error("Error sending email notification:", error);
    throw error;
  }
};

// Send SMS Notification
export const sendSmsNotification = async (smsData) => {
  try {
    const response = await api.post("/api/notifications/sms", smsData);
    return response.data;
  } catch (error) {
    console.error("Error sending SMS notification:", error);
    throw error;
  }
};
