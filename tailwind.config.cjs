/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/vld-ui-components/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        blue: "var(--blue)",
        darkgray: "var(--darkgray)",
        softgrey: "var(--softgray)",
        "variable-collection-white": "var(--variable-collection-white)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
