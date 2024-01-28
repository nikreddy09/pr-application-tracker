/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable key-spacing */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-color': '#121927',
        // eslint-disable-next-line object-curly-newline, comma-dangle
        primary: {"50":"#eff6ff","100":"#dbeafe","200": "#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
    },
  },
  plugins: [],
};
