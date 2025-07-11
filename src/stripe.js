// // src/stripe.js
// import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

import { loadStripe } from "@stripe/stripe-js";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

if (!stripeKey) {
  console.error("❌ Stripe public key is missing in .env");
}

export const stripePromise = loadStripe(stripeKey);
