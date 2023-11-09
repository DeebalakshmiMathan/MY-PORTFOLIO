/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-color": "#FFFFFF",
        "secondary-color": "#007bff",
        "primary-color": "#000000",
        "card-border-color": "rgba(102, 100, 103, 0.2)",
        "card-bg-color": "#191919",
        "subtext-color": "rgba(255, 255, 255, 0.60)",
        // Add any other custom colors here
      },
      fontFamily: {
        poppins: ["Poppins"],
        cinzel: ["Cinzel"],
      },
    },
  },
  plugins: [],
};
