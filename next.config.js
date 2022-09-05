/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
module.exports = {
  reactStrictMode: true,
  ...nextTranslate,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}