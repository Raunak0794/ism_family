/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ism: {
          blue: "#002147",
          ink: "#071A2B",
          gold: "#D6A84F",
          cream: "#F8F5EF",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 33, 71, 0.12)",
      },
    },
  },
  plugins: [],
};
