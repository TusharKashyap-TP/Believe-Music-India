export default {
  darkMode: "class", // 👈 REQUIRED
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  require("tw-animate-css"),
};
