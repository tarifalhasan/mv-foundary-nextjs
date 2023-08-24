import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-gradient-bg": "linear-gradient(136deg, #f7138f 0%, #fba45a 100%)",
      },
      colors: {
        skin: {
          bg: "#080716",
          "gray-500": "#A09FB0",
          secondary: "#110F23",
          "footer-bg": "#201F31",
        },
      },
      fontFamily: {
        montesrrat: "var(--font-montserrat)",
        poppins: "var(--font-poppins)",
      },
      fontSize: {
        "t-15": "15px",
        "t-16": "16px",
        "t-17": "17px",
        "t-18": "18px",
        "t-21": "21px",
        "t-24": "24px",
        "t-36px": "36px",
      },
      boxShadow: {
        "btn-shadow": "0px 0px 28px 0px rgba(247, 19, 143, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
