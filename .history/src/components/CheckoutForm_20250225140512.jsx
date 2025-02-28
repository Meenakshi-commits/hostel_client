import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { processPayment } from "../services/paymentService";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      await processPayment({ paymentMethodId: paymentMethod.id });
      alert("Payment successful!");
    } catch (error) {
      setError("Payment failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Pay</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
