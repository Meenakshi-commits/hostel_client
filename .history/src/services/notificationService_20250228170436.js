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
