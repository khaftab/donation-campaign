/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'hero-bg': "url('./assets/banner-bg.jpg')", // for hero section in home page
        },
        colors: {
          'banner-white': 'rgba(255, 255, 255, 0.9)', // hero image overlay color
          'btn-red': '#FF444A' 
        }
      }
    },
    plugins: [],
  }