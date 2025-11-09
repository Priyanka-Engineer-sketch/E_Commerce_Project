'use client';
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        description: string;
        price: number;
        images: string[];
        brand: string;
        category: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card h-100">
            <Link href={`/product/${product.id}`}>
                <img src={product.images[0]} alt={product.title} className="card-img-top" style={{ objectFit: 'cover', height: 180 }} />
            </Link>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="mt-auto">
                    <p className="fw-bold">₹{product.price}</p>
                    <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
