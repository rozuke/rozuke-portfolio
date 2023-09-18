/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#1D162C",
        secondary: "#00A7FF",
      },
      backgroundImage: {
        "bg-image": "url(/public/images/bg.png)",
      },
      textColor: {
        "secondary-200": "#B7DEFE",
      },
    },
  },
  plugins: [],
};
