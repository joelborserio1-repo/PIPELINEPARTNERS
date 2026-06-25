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
        accent: "#1E40AF",
        accent2: "#1E3A8A",
        accentDeep: "#172554",
        cream: "#0a0a0b",
        muted: "#56575f",
        faint: "#8a8b93",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1200px" },
      boxShadow: {
        glow: "0 18px 50px -16px rgba(30,64,175,0.5)",
        card: "0 18px 50px -24px rgba(10,11,14,0.18)",
        soft: "0 2px 8px rgba(10,11,14,0.04), 0 16px 40px -22px rgba(10,11,14,0.18)",
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
