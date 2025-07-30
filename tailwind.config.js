/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.js",
    "./assets/*.css"
  ],
  theme: {
    extend: {
      colors: {
        // You can extend with your brand colors here
        // Example: 'brand-primary': '#your-color',
      },
      fontFamily: {
        // You can add custom fonts here
        // Example: 'brand': ['Your Font', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}