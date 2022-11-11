module.exports = {
  experimental: {
    appDir: true,
  },

  webpack5: true,
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    config.resolve.fallback = { fs: false }
    return config;
  },
};
