/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Ensure compatibility with Next.js 14
    // Remove any deprecated properties like 'target'
}

module.exports = nextConfig;