import withPWA from 'next-pwa';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const config = {
    reactStrictMode: true,
    experimental: {
        typedRoutes: true,
        outputFileTracingRoot: path.join(__dirname, 'src')
    },
    headers: async () => ([
        {
            source: '/(.*)',
            headers: [
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
                { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' }
            ]
        }
    ])
};


export default withPWA({
    dest: 'public',
    disable: !isProd,
    register: true,
    skipWaiting: true,
    runtimeCaching: [
        { urlPattern: /^https:\/\/dummyjson\.com\/products/i, handler: 'NetworkFirst', options: { cacheName: 'api-products' } }
    ]
})(config);
