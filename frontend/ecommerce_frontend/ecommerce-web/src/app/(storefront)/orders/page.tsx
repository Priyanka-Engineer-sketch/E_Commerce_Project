'use client';

import { useEffect, useState } from 'react';

interface Order {
    id: number;
    date: string;
    total: number;
}

interface ShipmentStatus {
    orderId: number;
    status: string;
    history: string[];
}

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [statuses, setStatuses] = useState<Record<number, ShipmentStatus>>({});

    useEffect(() => {
        // For demo, create fake orders
        const fakeOrders: Order[] = [
            { id: 1, date: '2025-10-01', total: 2999 },
            { id: 2, date: '2025-10-15', total: 4999 }
        ];
        setOrders(fakeOrders);

        // Fetch shipment status for each order
        fakeOrders.forEach(async (order) => {
            const res = await fetch(`/api/shipments/${order.id}`);
            const json = await res.json();
            setStatuses((prev) => ({ ...prev, [order.id]: json }));
        });
    }, []);

    return (
        <div>
            <h1>Your Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul className="list-group">
                    {orders.map((order) => (
                        <li key={order.id} className="list-group-item">
                            <div>
                                <strong>Order #{order.id}</strong> - {order.date} - Total: ₹{order.total}
                            </div>
                            <div>
                                Shipment Status: {statuses[order.id]?.status ?? 'Loading...'}
                            </div>
                            <div>
                                <small>History: {statuses[order.id]?.history.join(' → ')}</small>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
