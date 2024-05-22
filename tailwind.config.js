const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "AE-Text-Display": ["4.75rem", "120%"],
        "AE-Text-H1": ["3.875rem", "120%"],
        "AE-Text-H2": ["3rem", "120%"],
        "AE-Text-H3": ["2.5rem", "120%"],
        "AE-Text-H4": ["2rem", "120%"],
        "AE-Text-H5": ["1.625rem", "120%"],
        "AE-Text-H6": ["1.25rem", "120%"],

        "AE-Text-3xl": ["1.875rem", "2.25rem"],
        "AE-Text-2xl": ["1.5rem", "2rem"],
        "AE-Text-xl": ["1.25rem", "1.75rem"],
        "AE-Text-lg": ["1.125rem", "1.75rem"],
        "AE-Text-base": ["1", "1.5rem"],
        "AE-Text-sm": ["0.875rem", "1.25rem"],
        "AE-Text-xs": ["0.75rem", "1rem"],
      },
      colors: {
        "AEGold-50": "#f9f7ed",
        "AEGold-100": "#f2eccf",
        "AEGold-200": "#e6d7a2",
        "AEGold-300": "#d7bc6d",
        "AEGold-400": "#cba344",
        "AEGold-500": "#b68a35",
        "AEGold-600": "#92722a",
        "AEGold-700": "#7c5e24",
        "AEGold-800": "#6c4527",
        "AEGold-900": "#5d3b26",
        "AEGold-950": "#361e12",

        "AEBlack-50": "#f7f7f7",
        "AEBlack-100": "#e1e3e5",
        "AEBlack-200": "#c3c6cb",
        "AEBlack-300": "#9ea2a9",
        "AEBlack-400": "#797e86",
        "AEBlack-500": "#5f646d",
        "AEBlack-600": "#4b4f58",
        "AEBlack-700": "#3e4046",
        "AEBlack-800": "#232528",
        "AEBlack-900": "#1b1d21",
        "AEBlack-950": "#0e0f12",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
