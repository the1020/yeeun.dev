/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(252, 139, 147, 0.3)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, #fc8b93 20%, transparent 20%), radial-gradient(circle, #fc8b93 20%, transparent 20%)",
      },
      backgroundPosition: {
        "position-ex": "0 0, 5px 5px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
