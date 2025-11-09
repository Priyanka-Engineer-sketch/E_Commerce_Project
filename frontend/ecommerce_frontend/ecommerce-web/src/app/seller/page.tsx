'use client';

import Link from 'next/link';
import withRole from "@/app/components/hoc/withRole";

function Seller() {
    return (
        <div>
            <h2>Seller Dashboard</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link href="/seller/products">Manage My Products</Link>
                </li>
                {/* Add more seller actions here */}
            </ul>
        </div>
    );
}

export default withRole(Seller, ['seller', 'admin']);
