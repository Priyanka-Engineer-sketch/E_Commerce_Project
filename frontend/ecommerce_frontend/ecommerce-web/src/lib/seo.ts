export const productJsonLd = (p: any) => ({
    '@context':'https://schema.org', '@type':'Product',
    name: p.title, image: p.images, brand: p.brand, description: p.description,
    offers: { '@type':'Offer', priceCurrency:'INR', price: p.price, availability:'https://schema.org/InStock' }
});
