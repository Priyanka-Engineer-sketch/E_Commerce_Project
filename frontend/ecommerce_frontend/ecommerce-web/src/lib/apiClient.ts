const BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'https://dummyjson.com';
export default {
    get: (p: string, init?: RequestInit) => fetch(`${BASE}${p}`, { ...init, cache: 'no-store' }),
    post: (p: string, body?: any, init?: RequestInit) => fetch(`${BASE}${p}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }, cache: 'no-store', ...init
    })
};
