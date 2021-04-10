module.exports = {
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, options) => {
    console.log("config", config);

    return {
      ...config,
      node: {
        fs: "empty",
      },
    };
  },
};
