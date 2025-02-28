export const sendSmsNotification = async (data) => {
  try {
    const response = await fetch("/api/notifications/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("SMS Notification Error:", error);
    throw error;
  }
};
export const sendEmailNotification = async (data) => {
  try {
    const response = await fetch("/api/notifications/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("Email Notification Error:", error);
    throw error;
  }
};