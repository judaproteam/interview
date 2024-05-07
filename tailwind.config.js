/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.2rem",
        sm: "2rem",
        md: "3rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [],
}
