'use client';

import Link from 'next/link';
import withRole from "@/app/components/hoc/withRole";

function AdminProductsPage() {
    // Demo data; replace with actual fetch when API is ready
    const products = [
        { id: 101, title: 'Demo Product A', price: 299, brand: 'BrandA', category: 'Category1' },
        { id: 102, title: 'Demo Product B', price: 399, brand: 'BrandB', category: 'Category2' },
    ];

    return (
        <div>
            <h2>All Products</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th><th>Title</th><th>Brand</th><th>Category</th><th>Price (₹)</th><th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.brand}</td>
                        <td>{p.category}</td>
                        <td>{p.price}</td>
                        <td>
                            <Link href={`/admin/products/${p.id}`}>Edit</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="btn btn-success">Add New Product</button>
        </div>
    );
}

export default withRole(AdminProductsPage, ['admin']);
