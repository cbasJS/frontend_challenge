import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'icon-dark-color': 'rgb(230, 237, 243)',
      'border-color': 'rgb(208, 215, 222)',
      'border-color-dark': 'rgb(48, 54, 61)'
    },
    backgroundColor: {
      'header-color': 'rgb(246, 248, 250)',
      'header-color-dark': 'rgb(1, 4, 9)',
      'dialog-color': {
        DEFAULT: 'rgba(140, 149, 159, 0.2)',
        'dark': 'rgb(22, 27, 34)',
        'semi-transparent': 'rgba(22, 27, 34, 0.4)'
      },

      'dialog-color-dark': 'rgb(22, 27, 34)',
      'white': 'rgb(255, 255, 255)',
      'dialog-element-selected': 'rgba(208, 215, 222, 0.2)'
    }
  },
  plugins: [],
};
export default config;
