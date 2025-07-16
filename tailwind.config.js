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
    themes: [
      {
        light: {
          "primary": "#40531B",
          "secondary": "#6D3D14",
          "accent": "#FE9920",
          "neutral": "#1A1A1A",
          "base-100": "#FFFFFF",
          "info": "#C0EFFF",
          "success": "#BACC76",
          "warning": "#FFE0AE",
          "error": "#FF0000",
        },
      },
    ],
  },
};
