/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore React Native async-storage on web
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      '@react-native-async-storage/async-storage': false,
    };
    return config;
  },
  images: {
    domains: ['crimson-odd-woodpecker-368.mypinata.cloud',"via.placeholder.com"],
  },
  reactStrictMode: true,

};

module.exports = nextConfig;
