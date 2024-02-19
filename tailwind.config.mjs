/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02045B",
          secondary: "#0032A0",
          tertiary: "#FFD100",
          accent: "#CC0000",
          background: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
