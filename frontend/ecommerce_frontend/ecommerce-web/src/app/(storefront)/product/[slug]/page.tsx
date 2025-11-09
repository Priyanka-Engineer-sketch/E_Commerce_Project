import { notFound } from 'next/navigation';
interface PageProps { params: { slug: string } }

export default async function ProductPage({ params }: PageProps) {
    const productId = Number(params.slug);
    if (isNaN(productId)) return notFound();

    const res = await fetch(`https://dummyjson.com/products/${productId}`, { cache: 'no-store' });
    if (!res.ok) return notFound();

    const product = await res.json();

    return (
        <main>
            <h1>{product.title}</h1>
            <div>
                {product.images.map((src: string, i: number) => (
                    <img key={i} src={src} alt={product.title} width={300} />
                ))}
            </div>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button>Add to Cart</button>
        </main>
    );
}
