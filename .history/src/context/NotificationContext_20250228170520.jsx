import { createContext, useState } from "react";
import { sendSmsNotification } from "../services/notificationService";
import { sendEmailNotification } from "../services/notificationService";
import { sendEmailNotification, sendSmsNotification } from "../services/notificationService";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const sendEmail = async (emailData) => {
    try {
      const response = await sendEmailNotification(emailData);
      setMessage(response.message);
    } catch (error) {
      console.error("Email notification failed:", error);
    }
  };

  const sendSms = async (smsData) => {
    try {
      const response = await sendSmsNotification(smsData);
      setMessage(response.message);
    } catch (error) {
      console.error("SMS notification failed:", error);
    }
  };

  return (
    <NotificationContext.Provider value={{ sendEmail, sendSms, message }}>
      {children}
    </NotificationContext.Provider>
  );
};
