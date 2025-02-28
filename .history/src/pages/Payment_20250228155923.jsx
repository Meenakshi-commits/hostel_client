import { useState } from "react";
import axios from "axios";

const Payments = ({ bookingId, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(`/api/payments/${paymentMethod}`, { bookingId, amount }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Payment Successful: " + data.message);
    } catch (err) {
      alert("Payment Failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      <select className="p-2 border rounded w-full mb-2" onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="stripe">Stripe</option>
        <option value="paypal">PayPal</option>
        <option value="razorpay">Razorpay</option>
      </select>
      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded">
        Pay ₹{amount}
      </button>
    </div>
  );
};

export default Payments;
