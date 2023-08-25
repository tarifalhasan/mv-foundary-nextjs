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
        "pricing-card-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(134deg, #F7138F 0%, #FBA45A 100%)",
        "text-gradient1": "linear-gradient(136deg, #F7138F 0%, #FBA45A 100%)",
      },
      backgroundColor: {},
      colors: {
        skin: {
          bg: "#080716",
          "gray-500": "#A09FB0",
          secondary: "#110F23",
          "footer-bg": "#201F31",
          "pricging-card-primary": "#1B1833",
          "pricging-card-secondary": "#312F53",
          "pricing-card-p": "rgba(48, 44, 88, 0.51)",
          "royal-blue": "#6271FF",
          "tangerine-orange": "#FBA45A",
          "start-up-card": "rgba(17, 17, 32, 0.29)",
          "start-up-card-hover": "#231F43",
          borderDarken: "#333247",
          "gray-300": "#D1D1D1",
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
        "t-22": "22px",
        "t-24": "24px",
        "t-36px": "36px",
        "t-48": "48px",
      },
      boxShadow: {
        "btn-shadow": "0px 0px 28px 0px rgba(247, 19, 143, 0.7)",
        pricing_card: "10px 20px 120px -2px rgba(7, 51, 118, 0.06)",
        "btn-shadow1": "0px 4px 28px -7px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        "radius-20": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
