/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },

  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
