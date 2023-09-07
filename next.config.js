/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'plus.unsplash.com', 'images.unsplash.com', 'unsplash.com', 'source.unsplash.com'],
    }
}

module.exports = nextConfig
