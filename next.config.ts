/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
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
                hostname: 'techsoftwebsolutions.com/techsoft/demo/Dr_srm/public/',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
