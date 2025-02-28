import { useState } from "react";
import paymentService from "../services/paymentService";

const Payment = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    await paymentService.processPayment({ amount });
    alert("Payment successful!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Make a Payment</h1>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 border rounded"/>
      <button onClick={handlePayment} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Pay Now</button>
    </div>
  );
};

export default Payment;
