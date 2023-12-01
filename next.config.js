/** @type {import('next').NextConfig} */
var BrotliPlugin = require('brotli-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  plugins: [
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

module.exports = nextConfig

