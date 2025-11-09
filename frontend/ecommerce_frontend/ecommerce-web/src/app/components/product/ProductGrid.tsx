import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: Array<{
        id: number;
        title: string;
        description: string;
        price: number;
        images: string[];
        brand: string;
        category: string;
    }>;
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
