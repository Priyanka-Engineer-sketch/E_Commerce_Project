'use client';


import withRole from "@/app/components/hoc/withRole";

function SellerProductsPage() {
    // Demo seller products
    const sellerProducts = [
        { id: 301, title: 'My Product 1', price: 150 },
        { id: 302, title: 'My Product 2', price: 250 },
    ];

    return (
        <div>
            <h2>My Products</h2>
            <table className="table">
                <thead>
                <tr><th>ID</th><th>Title</th><th>Price (₹)</th></tr>
                </thead>
                <tbody>
                {sellerProducts.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="btn btn-success">Add New Product</button>
        </div>
    );
}

export default withRole(SellerProductsPage, ['seller', 'admin']);
