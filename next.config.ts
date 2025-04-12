/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // ✅ Ignore TS errors during `next build`
    },
    eslint: {
        ignoreDuringBuilds: true, // ✅ Ignore ESLint during build
    },
};

module.exports = nextConfig;