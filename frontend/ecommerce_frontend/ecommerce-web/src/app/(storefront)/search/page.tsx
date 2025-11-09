'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import apiClient from '@/lib/apiClient';
import ProductGrid from "@/app/components/product/ProductGrid";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') ?? '';
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!q) {
            setProducts([]);
            return;
        }
        setLoading(true);
        async function fetchSearchResults() {
            try {
                const res = await apiClient.get(`/api/search/index?q=${encodeURIComponent(q)}`);
                const json = await res.json();
                setProducts(json.items ?? []);
            } catch (err) {
                console.error('Search failed', err);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }
        fetchSearchResults();
    }, [q]);

    return (
        <div>
            <h1>Search results for "{q}"</h1>
            {loading ? (
                <p>Searching...</p>
            ) : products.length > 0 ? (
                <ProductGrid products={products} />
            ) : (
                <p>No products found matching your search.</p>
            )}
        </div>
    );
}
