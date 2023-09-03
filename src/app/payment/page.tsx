"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../checkoutForm/page";

export default function Payment() {
  const [stripePromise, setStripePromise] = useState<Stripe | null>();
  const [clientSecret, setClientSecret] = useState("");
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    const loadStripePromise = async () => {
      const response = await fetch("/api/config");
      const { publishableKey } = await response.json();
      const stripe = await loadStripe(publishableKey);
      setStripePromise(stripe);
    };

    loadStripePromise();
  }, []);

  useEffect(() => {
    const payload = {
      total: cart.total,
    };
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
  return (
    <div className="h-screen w-screen bg-black">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        You will pay Rs. {cart.total}
      </h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
