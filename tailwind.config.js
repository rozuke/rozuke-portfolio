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
        primary: "#FB1372",
        secondary: "#00A7FF",
        "accent-100": "#F5E3F0",
        "tertiary-100": "#9176D6",
      },
      borderColor: {
        "accent-100": "#F5E3F0",
        accent: "#B5309B",
        tertiary: "#472EB5",
      },
      backgroundImage: {
        "bg-image": "url(/public/images/bg.png)",
      },
      textColor: {
        "secondary-200": "#B7DEFE",
        "accent-400": "#C359AC",
        "accent-200": "#E6B9DB",
      },
    },
  },
  plugins: [],
};
