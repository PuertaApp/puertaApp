const withOffline = require('next-offline');
const withImages = require('next-images')

const nextConfig = {
  // next-offline options:
  dontAutoRegisterSw: true, // since we want runtime registration
};

module.exports = withImages(withOffline(nextConfig));