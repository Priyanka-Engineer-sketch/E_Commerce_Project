'use client';


import withRole from "@/app/components/hoc/withRole";

function AdminShipmentsPage() {
    // Demo shipments
    const shipments = [
        { orderId: 201, status: 'Delivered', date: '2025-10-25' },
        { orderId: 202, status: 'In Transit', date: '2025-10-28' },
    ];

    return (
        <div>
            <h2>All Shipments</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Order ID</th><th>Status</th><th>Date</th>
                </tr>
                </thead>
                <tbody>
                {shipments.map(s => (
                    <tr key={s.orderId}>
                        <td>{s.orderId}</td>
                        <td>{s.status}</td>
                        <td>{s.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default withRole(AdminShipmentsPage, ['admin']);
