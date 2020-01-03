const withOffline = require('next-offline');
const withImages = require('next-images')

require("dotenv").config();

const nextConfig = {
  // next-offline options:
  dontAutoRegisterSw: true, // since we want runtime registration
  env: {
    GOOGLE_MAPS: process.env.GOOGLE_MAPS
  }
};

module.exports = withImages(withOffline(nextConfig));