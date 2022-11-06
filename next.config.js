/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
        nextScriptWorkers: false,
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });

        return config;
    },
}