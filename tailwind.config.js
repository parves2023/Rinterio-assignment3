/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        width: {
        'fill-available': '-webkit-fill-available',
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
      },
    },
    plugins: [],
  }