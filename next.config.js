const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  images: {
    domains: ["i0.hdslb.com", "i1.hdslb.com", "i2.hdslb.com"]
  }
});
