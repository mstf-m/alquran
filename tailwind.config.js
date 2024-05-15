import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "yellow-gradient":'linear-gradient(to right, #EBAE38, #EBD938)',
        "cream-gradient":'linear-gradient(to right, #FFF0C1, #FFFCF1)',
        // linear-gradient(to right, #50FfC1, #FFFCF1)
        "card-gradient":'linear-gradient(450deg, rgba(200, 200, 200, 0.20) 0%, rgba(80, 80, 80, 0.00) 50%)',
        "yellow-radial": 'radial-gradient(75.81% 66.34% at 50% 50%, #FFE3AA 0%, #FFFFFF 43.14%);',
        "blue-gradient":'linear-gradient(to right, #5AA3F7 22%, #FFFFFF 100%)'
      },
      container: {
        padding: {
          // lg: '86px',
        },
      },       
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          "yellow-primary":'#EBBF38',
          "blue-primary":'#00C1E8',
          "blue-text":'#1544B0',
          "neutral-color-800": '#19213D'
        }, 
      },
      dark: {
        colors: {},
      },
      // ... custom themes
    },
  })],
};
