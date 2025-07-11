// src/pages/PaymentPage.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { stripePromise } from "../stripe.js"; // adjust path if needed

const PaymentPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        const stripe = await stripePromise;

        const { data: session } = await axios.post(
          "/payments/checkout-session",
          { bookingId },
          { withCredentials: true }
        );

        if (session?.id) {
          await stripe.redirectToCheckout({ sessionId: session.id });
        } else {
          throw new Error("No session ID returned");
        }
      } catch (err) {
        console.error("Stripe payment error:", err);
        alert("Payment failed. Please try again.");
        navigate("/account/bookings");
      }
    };

    if (bookingId) {
      initiatePayment();
    }
  }, [bookingId, navigate]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-semibold">Redirecting to payment...</h1>
    </div>
  );
};

export default PaymentPage;
