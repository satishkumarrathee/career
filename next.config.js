/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const nextConfig = {
      // output:"export",
      eslint: {
          ignoreDuringBuilds: true,
        },
        typescript: {
          ignoreBuildErrors: true,
        },
  }
  
  module.exports = nextConfig,
  module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}