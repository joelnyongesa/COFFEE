/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(../src/images/home-coffee.png)"
      }
    },
    colors: {
      "primary": "#2f1f14",
      "secondary": "#dbbca1",
      "tertiary": "#655546",
      'white': "#ffffff"
    },
  },
  plugins: [],
}

