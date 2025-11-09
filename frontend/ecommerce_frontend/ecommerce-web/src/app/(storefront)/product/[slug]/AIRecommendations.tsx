'use client';
import { useEffect, useState } from 'react';
import ProductCard from "@/app/components/product/ProductCard";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    brand: string;
    category: string;
}

function AIRecommendations({ seed }: { seed: string }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecommendations() {
            try {
                const res = await fetch('/api/search/index?q=' + encodeURIComponent(seed));
                const json = await res.json();
                setProducts(json.items ?? []);
            } catch {
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }
        fetchRecommendations();
    }, [seed]);

    if (loading) return <p>Loading recommendations...</p>;
    if (products.length === 0) return <p>No recommendations available.</p>;

    return (
        <section>
            <h2>Similar Items</h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}

export default AIRecommendations;
