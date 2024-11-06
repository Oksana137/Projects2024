/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "entry-blue": "#eff6ff",
        "accent-green": "#02a96d",
      },
    },
  },
  plugins: [require("daisyui")],
};
