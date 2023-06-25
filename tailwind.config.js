/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "border-blue": "#97BEF4",
      "bg-gray": "#F2F2F2",
      "border-red": "#F00",
      "ok-green": "#219653",
      transparent: "transparent",
      white: "#fff",
    },
  },
  plugins: [],
};
