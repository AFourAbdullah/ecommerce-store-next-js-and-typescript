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
  const [name, setName] = useState(user.name);
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
    <div className="w-screen ">
      <form
        id="payment-form"
        className="mx-auto md:w-2/5 w-full p-4 border-2 border-black mt-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-pink-700 to-violet-700 mb-4">
          Shipping Details
        </h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Karachi"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-pink-700 to-violet-700 mb-4">
          Billing Details
        </h2>
        <PaymentElement id="payment-element" />
        <button
          disabled={isProcessing || !stripe || !elements}
          className="bg-blue-500 mx-auto my-6 w-[200px] text-white px-4 py-2 rounded-lg"
        >
          <span id="button-text">
            {isProcessing ? "Processing..." : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div className="text-red-500 text-center">{message}</div>}
      </form>
    </div>
  );
}
