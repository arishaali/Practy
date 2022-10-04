module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFC43D",
        primary: "#27ABBC",
        "primary-rgba": "rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
