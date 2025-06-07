/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'instrument-serif': ['var(--font-instrument-serif)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      backgroundImage: {
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // We'll use our own custom theme
  },
};
