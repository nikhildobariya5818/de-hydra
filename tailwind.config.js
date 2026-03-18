/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#F0FAFA",
          100: "#D0EEEE",
          200: "#A8DBDB",
          300: "#6BBFBF",
          400: "#2AA8A8",
          500: "#1A8A8A",
          600: "#157070",
          700: "#0D5F5F",
          800: "#084A4A",
          900: "#053535",
        },
        brand: {
          green:  "#4CAF50",
          yellow: "#8BC34A",
          orange: "#FF9800",
          dark:   "#1A2E2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card:       "0 4px 24px rgba(26,138,138,0.08)",
        "card-hover":"0 8px 40px rgba(26,138,138,0.18)",
        soft:       "0 2px 16px rgba(0,0,0,0.07)",
      },
      borderRadius: {
        card: "16px",
        xl2: "20px",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "slide-in":  "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity:0, transform:"translateY(24px)" }, "100%": { opacity:1, transform:"translateY(0)" } },
        fadeIn:  { "0%": { opacity:0 }, "100%": { opacity:1 } },
        slideIn: { "0%": { opacity:0, transform:"translateX(-24px)" }, "100%": { opacity:1, transform:"translateX(0)" } },
      },
    },
  },
  plugins: [],
}
