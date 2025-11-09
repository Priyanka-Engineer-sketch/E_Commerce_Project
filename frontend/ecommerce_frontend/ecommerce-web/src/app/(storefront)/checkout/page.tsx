'use client';

import { useSelector } from 'react-redux';
import { RootState } from "@/app/store";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
    const cart = useSelector((state: RootState) => state.cart);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    if (cart.items.length === 0) return <p>Your cart is empty. Add items before checkout.</p>;

    const lines = cart.items.map((item) => ({
        price_data: {
            currency: 'inr',
            product_data: { name: item.title },
            unit_amount: item.price * 100, // Stripe expects amount in paise
        },
        quantity: item.quantity,
    }));

    async function handleCheckout() {
        setLoading(true);
        try {
            const res = await fetch('/api/checkout/stripe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    lines,
                    successUrl: `${window.location.origin}/orders`,
                    cancelUrl: `${window.location.origin}/cart`,
                }),
            });
            const json = await res.json();
            if (json.url) window.location.href = json.url;
        } catch (err) {
            console.error('Stripe checkout failed', err);
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total: ₹{cart.items.reduce((t, item) => t + item.price * item.quantity, 0).toFixed(2)}</p>
            <button className="btn btn-primary" onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </div>
    );
}
