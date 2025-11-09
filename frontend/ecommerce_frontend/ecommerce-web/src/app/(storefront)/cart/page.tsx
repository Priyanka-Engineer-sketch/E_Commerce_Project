'use client';

import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import {clearCart, removeFromCart, RootState, updateQuantity} from "@/app/store";

export default function CartPage() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.items.length === 0 ? (
                <p>Your cart is empty. <Link href="/">Shop now</Link></p>
            ) : (
                <>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price (₹)</th>
                            <th>Quantity</th>
                            <th>Subtotal (₹)</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) =>
                                            dispatch(updateQuantity({ productId: item.id, quantity: Number(e.target.value) }))
                                        }
                                        style={{ width: '60px' }}
                                    />
                                </td>
                                <td>{item.price * item.quantity}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">
                                Total:
                            </td>
                            <td colSpan={2} className="fw-bold">
                                ₹{totalPrice.toFixed(2)}
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <button className="btn btn-secondary me-2" onClick={() => dispatch(clearCart())}>
                        Clear Cart
                    </button>
                    <Link href="/checkout">
                        <button className="btn btn-primary">Proceed to Checkout</button>
                    </Link>
                </>
            )}
        </div>
    );
}
