/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        textPrimary: "#F8FAFC",
        textMuted: "#94A3B8",
        accentPurple: "#6366F1",
        accentCyan: "#22D3EE",
        card: "#020617",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
