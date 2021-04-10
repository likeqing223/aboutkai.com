module.exports = {
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, options) => {
    return {
      ...config,
      node: {
        fs: "empty",
      },
    };
  },
};
