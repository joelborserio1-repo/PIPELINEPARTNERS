/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        ink2: "#101012",
        surface: "#161619",
        surface2: "#1c1c21",
        line: "rgba(255,255,255,0.09)",
        line2: "rgba(255,255,255,0.16)",
        accent: "#FF6A1A",
        accent2: "#ff8c4d",
        accentDeep: "#e2540a",
        cream: "#f4f2ed",
        muted: "#9a9ba3",
        faint: "#63646d",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1200px" },
      boxShadow: {
        glow: "0 18px 60px -20px rgba(255,106,26,0.45)",
        card: "0 30px 70px -40px rgba(0,0,0,0.8)",
      },
      keyframes: {
        floatglow: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-24px,26px)" },
        },
      },
      animation: { floatglow: "floatglow 16s ease-in-out infinite" },
    },
  },
  plugins: [],
};
