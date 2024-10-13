/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61ECBC",
        "primary-dark": "#0CB387",
        secondary: "#182339",
        light: "#ECEBEB"
      },
      lineHeight: {
        'custom-height': '0.8'
      },
      boxShadow: {
        'custom-primary': 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        'custom-secondary': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
      },
    },
  },
  plugins: [],
}

