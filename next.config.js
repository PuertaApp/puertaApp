const withOffline = require('next-offline');
const withImages = require('next-images')

require("dotenv").config();

const nextConfig = {
  // next-offline options:
  dontAutoRegisterSw: true, // since we want runtime registration
};

module.exports = withImages(withOffline(nextConfig));