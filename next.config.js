const nextConfig = {
  productionBrowserSourceMaps: false, // Отключает source maps в продакшене
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.devtool = false; // Полностью отключает source maps
    }
    return config;
  },
}

module.exports = nextConfig;