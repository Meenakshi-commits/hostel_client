import { sendEmail, sendSMS } from "../services/notificationService";

const Notifications = () => {
  const notifyUser = async () => {
    await sendEmail({ to: "user@example.com", subject: "Billing Reminder", message: "Your bill is due soon." });
    await sendSMS({ to: "+1234567890", message: "Your bill is due soon." });
    alert("Notifications sent!");
  };

  return (
    <button onClick={notifyUser} className="bg-green-500 text-white p-2">Send Notifications</button>
  );
};

export default Notifications;
