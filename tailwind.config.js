/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
        padding: {
            DEFAULT: '16px',
            center: true
        }
    },
    extend: {
        fontFamily: {
            primary: "Roboto, sans-serif",
            secondary: "Permanent Marker, cursive;"
        },
        colors: {
            primary: {
                DEFAULT: '#b3252d',
                '200': '#9c2a30'
            },
            'primary-light': {
                DEFAULT: '#E9E9E9',
                '200': '#dfdfdf',
                '300': '#b7b7b7',
            },
            'primary-dark': {
                DEFAULT: '#000000',
                '200': '#565656'
            }
        },
        screens: {
            '2xl': '1320px'
        }
    },
  },
  plugins: [],
}


// --primary-100:#8B0000;
// --primary-200:#c2402a;
// --primary-300:#feded3;
// --accent-100:#FF6347;
// --accent-200:#8d0000;
// --text-100:#000000;
// --text-200:#565656;
// --bg-100:#E9E9E9;
// --bg-200:#dfdfdf;
// --bg-300:#b7b7b7;
  