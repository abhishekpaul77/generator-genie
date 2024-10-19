'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51OoLZRSC9ZQVZGeQV1u68hDvFANKZqXQ5pHR6p8OR2Xw7rO1NUIVV3yT7F32sFMPdTl7YnfYESIxaI6hdVZMXPUs00RrzK6gbd'); // Replace with your actual Stripe publishable key

const BillingPage = () => {

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch('http://localhost:3000/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: 'price_1QBJLmSBzkezMzRitIL9uYaC', // Replace with your Stripe price ID
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url; // Redirect to Stripe checkout
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Free Plan */}
          <div className="border rounded-lg p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Free</h2>
            <p className="text-gray-500 mt-2 mb-6">Perfect for individuals starting out.</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔️ 10,000 words/month</li>
              <li>✔️ 20+ content templates</li>
              <li>✔️ Unlimited download & copy</li>
              <li>✔️ 1 month of history</li>
            </ul>
            <div className="mt-8">
              <Button variant="secondary" className="w-full" disabled>
                Current Plan
              </Button>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="border rounded-lg p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Monthly</h2>
            <p className="text-gray-500 mt-2 mb-6">Ideal for professionals and teams.</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔️ 100,000 words/month</li>
              <li>✔️ 50+ content templates</li>
              <li>✔️ Unlimited download & copy</li>
              <li>✔️ 1 year of history</li>
            </ul>
            <div className="mt-8">
              <Button variant="default" className="w-full" onClick={handleCheckout}>
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BillingPage;
