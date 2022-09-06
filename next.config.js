/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n:{
    locales:["en","fr","es"],
    defaultLocale:"en",
  },
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}