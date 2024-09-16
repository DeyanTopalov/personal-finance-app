import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-beige-500": "hsla(var(--beige-500))",
        "clr-beige-100": "hsla(var(--beige-100))",
        "clr-grey-900": "hsla(var(--grey-900))",
        "clr-grey-500": "hsla(var(--grey-500))",
        "clr-grey-300": "hsla(var(--grey-300))",
        "clr-grey-100": "hsla(var(--grey-100))",
        "clr-green": "hsla(var(--green))",
        "clr-yellow": "hsla(var(--yellow))",
        "clr-cyan": "hsla(var(--cyan))",
        "clr-navy": "hsla(var(--navy))",
        "clr-red": "hsla(var(--red))",
        "clr-purple": "hsla(var(--purple))",
        "clr-pink": "hsla(var(--pink))",
        "clr-turquoise": "hsla(var(--turquoise))",
        "clr-brown": "hsla(var(--brown))",
        "clr-magenta": "hsla(var(--magenta))",
        "clr-blue": "hsla(var(--blue))",
        "clr-navy-grey": "hsla(var(--navy-grey))",
        "clr-army-green": "hsla(var(--army-green))",
        "clr-gold": "hsla(var(--cyan))",
        "clr-orange": "hsla(var(--cyan))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
