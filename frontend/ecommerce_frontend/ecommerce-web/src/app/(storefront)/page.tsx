'use client';

import ProductGrid from "@/app/components/product/ProductGrid";
import { useEffect, useState } from 'react';
import apiClient from '@/lib/apiClient';

export default function Home() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await apiClient.get('/products?limit=12');
                const json = await res.json();
                setProducts(json.products);
            } catch (err) {
                console.error('Failed to load products', err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Welcome to E-Store</h1>
            <p>Shop the best products online.</p>
            {loading ? (
                <p>Loading products...</p>
            ) : products.length > 0 ? (
                <ProductGrid products={products} />
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}
