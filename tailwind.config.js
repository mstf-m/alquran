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
        "cream-gradient":'linear-gradient(to right, #FFF0C1, #FFFCF1)'
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
        }, 
        // container: {
        //   padding: {
        //     lg: '168px',
        //   },
        // },       
      },
      dark: {
        colors: {},
      },
      // ... custom themes
    },
  })],
};
