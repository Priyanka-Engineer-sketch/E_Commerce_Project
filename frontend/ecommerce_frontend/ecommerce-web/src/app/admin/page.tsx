// src/app/admin/page.tsx
'use client';
import Link from 'next/link';
import withRole from "@/app/components/hoc/withRole";

function Admin() {
    return (
        <div className="row">
            <div className="col-3">
                <div className="list-group">
                    <Link className="list-group-item" href="/admin/users">Users</Link>
                    <Link className="list-group-item" href="/admin/products">Products</Link>
                    <Link className="list-group-item" href="/admin/shipments">Shipments</Link>
                    <Link className="list-group-item" href="/admin/analytics">Analytics</Link>
                    <Link className="list-group-item" href="/admin/settings">Settings</Link>
                </div>
            </div>
            <div className="col-9">
                <h3>Admin Overview</h3>
                {/* KPI cards + charts here */}
            </div>
        </div>
    );
}
export default withRole(Admin, ['admin']);
