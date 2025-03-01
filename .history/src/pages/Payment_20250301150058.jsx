import { useState } from "react";
import { processPayment } from "../services/PaymentService";

const Payment = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      await processPayment({ amount });
      alert("Payment successful!");
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Make a Payment</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mt-2"
      />
      <button onClick={handlePayment} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
