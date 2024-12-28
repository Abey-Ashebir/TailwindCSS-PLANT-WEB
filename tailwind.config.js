/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
    },
    extend: {
      keyframes: {
        move: {
          "50%": { transform: 'translateY(-1rem)' },
        },
        rotate: {
          "0%": { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(360deg)' },
        },
        scaleup: {
          "0%": { transform: 'scale(0.8)' },
          "50%": { transform: 'scale(1.2)' },
          "100%": { transform: 'scale(0.8)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        movingY: 'move 3s linear infinite',
        rotating: 'rotate 15s linear infinite',
        scalingup: 'scaleup 3s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      fontFamily: {
        Jost: ["Jost", "serif"],
        Lobster: ["Lobster", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          md: '32px',
        },
      },
      colors: {
        'about-bg': '#22543D', // A darker green for the "About Us" section background.
        'highlight': '#D69E2E', // A yellowish highlight color.
        'text-light': '#F1F5F9', // Light text color for better readability.
      },
    },
  },
  plugins: [],
};
