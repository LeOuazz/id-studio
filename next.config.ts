import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        eslint: {
            ignoreDuringBuilds: true,
        },
        typescript: {
            ignoreBuildErrors: true,
        },
};

export default nextConfig;

module.exports = {
    // ...
    rules: {
        "prefer-const": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-var": "off",
        "react-hooks/exhaustive-deps": "off",
    },
};
