/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // warm dark theme, matching the growth proposal
        ink: "#f4f1ec",
        ink2: "#e7e2db",
        paper: "#161211",
        paper2: "#100d0c",
        surface: "#1e1815",
        surface2: "#251e19",
        line: "rgba(255,255,255,0.09)",
        line2: "rgba(255,255,255,0.16)",
        accent: "#FF6A1A",
        accent2: "#ff8347",
        accentDeep: "#17140f",
        cream: "#f4f1ec",
        muted: "#9a938c",
        faint: "#6f6862",
        onlight: "#141010",
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
