import api from "./api";

// Razorpay Payment
export const processRazorpayPayment = async (paymentData) => {
  try {
    const response = await api.post("/api/payments/razorpay", paymentData);
    return response.data;
  } catch (error) {
    console.error("Error processing Razorpay payment:", error);
    throw error;
  }
};

// Stripe Payment
export const processStripePayment = async (paymentData) => {
  try {
    const response = await api.post("/api/payments/stripe", paymentData);
    return response.data;
  } catch (error) {
    console.error("Error processing Stripe payment:", error);
    throw error;
  }
};

// PayPal Payment
export const processPayPalPayment = async (paymentData) => {
  try {
    const response = await api.post("/api/payments/paypal", paymentData);
    return response.data;
  } catch (error) {
    console.error("Error processing PayPal payment:", error);
    throw error;
  }
};
