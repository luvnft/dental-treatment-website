/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({ primary: "#FFFFFF", secondary: "#89DB7B", red: "#FF7D61", bisque: "#75B8EE" }),
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
