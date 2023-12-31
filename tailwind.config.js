/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      md: "768px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      xl: "1375px",
      laptop: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {},
  },
  plugins: [],
}

