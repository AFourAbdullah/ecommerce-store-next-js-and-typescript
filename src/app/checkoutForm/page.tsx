"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state: any) => state.cart);
  const user = useSelector((state: any) => state.user);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState(user.currentUser.user.name);
  const [address, setAddress] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage("error occured");
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="checkoutContainer">
      <form id="payment-form" onSubmit={handleSubmit}>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          Shipping Details
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "450px",
            margin: "auto",
          }}
        >
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Address</label>
          <input
            placeholder="Karachi"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          Billing Details
        </h2>
        <PaymentElement id="payment-element" />
        <button
          disabled={isProcessing || !stripe || !elements}
          className="payNow"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div className="payment-message">{message}</div>}
      </form>
    </div>
  );
}
