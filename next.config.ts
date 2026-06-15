/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Set to false to enable Next.js image optimization
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'drsoumyaranjanmalla.com',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
