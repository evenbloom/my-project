/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
   variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['active']
    }
  },
  theme: {
    variants: {
      animation: ['motion-safe', 'motion-reduce'],
    },
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1"],
      "7xl": ["4.8rem", "1"],
      "8xl": ["8rem", "1"],
      },
    colors: {
      lightteal: "#E8F8F8",
      mediumteal: "#63A7A4",
      teal: "#1A5A59",
      darkteal: "#051717",
      background: "#F9FFFF",
      transparent: "transparent",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      "navigation-height": "var(--navigation-height)",
    },

    backgroundImage: {
      "primary-gradient":
        "linear-gradient(90deg, rgba(26,90,89,1) 0%, rgba(99,167,164,1) 51%, rgba(49,100,110,1) 90%)",
      "Teal-gradient": "linear-gradient(180deg, #1A5A59 0%, #63A7A4 100%)",
      "hero-gradient": "linear-gradient(180deg, #63A7A4 0%, #051717 100%)",
      "box-gradient": "linear-gradient(180deg, #2B6C6A 0%, #E8F8F8 100%)",
      "rise-radial-gradient": "radial-gradient(70.96% 70.96% at 50% 70.96%, rgba(126, 209, 252, 0.4) 0%, rgba(170, 252, 253, 0) 100%)",
      "overlay-gradient":"linear-gradient(180deg, rgba(99, 167, 164, 0) 0%, #63A7A4 72.8%)",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
    },
  },
  plugins: [],
}
