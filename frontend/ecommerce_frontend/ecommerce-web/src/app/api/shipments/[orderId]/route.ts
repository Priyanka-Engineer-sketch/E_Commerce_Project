import { NextResponse } from 'next/server';

const STATES = ['Order Placed', 'Packed', 'Shipped', 'In Transit', 'Out for Delivery', 'Delivered'];

export async function GET(_: Request, context: { params: { orderId: string } | Promise<{ orderId: string }> }) {
    // Await params if it's a Promise
    const params = await Promise.resolve(context.params);
    const idx = Math.min(parseInt(params.orderId, 10) % STATES.length, STATES.length - 1);
    return NextResponse.json({ orderId: params.orderId, status: STATES[idx], history: STATES.slice(0, idx + 1) });
}
