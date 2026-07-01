/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        ink2: "#141417",
        paper: "#f1eee7",
        paper2: "#faf9f5",
        surface: "#ffffff",
        surface2: "#faf9f7",
        line: "rgba(10,11,14,0.10)",
        line2: "rgba(10,11,14,0.15)",
        accent: "#FF6A1A",
        accent2: "#d2480a",
        accentDeep: "#17140f",
        cream: "#0a0a0b",
        muted: "#56575f",
        faint: "#8a8b93",
      },
      fontFamily: {
        display: ['"Anton"', '"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        alt: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1200px" },
      boxShadow: {
        glow: "0 10px 26px -12px rgba(255,106,26,0.35)",
        card: "0 8px 24px -18px rgba(10,11,14,0.12)",
        soft: "0 1px 2px rgba(10,11,14,0.04)",
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
