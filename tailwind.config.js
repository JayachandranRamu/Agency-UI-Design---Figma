/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#263238',
        D_Grey: "#4d4d4d",
        Grey: "#717171",
        L_Grey: "#89939E",
        Grey_Blue: "#abbed1",
        Silver: "#f5f7fa",
        White: "#FFFFFF",
        Primary: "#28CBBB",
        Secondary: "#263238",
        Info: "#2194f3",
        Shade_1: "#43a046",
        Shade_2: "#388e3b",
        Shade_3: "#237d31",
        Shade_4: "#1b5e1f",
        Shade_5: "#1b5e1f",
        Shade_6: "#103e13",
        Tint_1: "#66bb69",
        Tint_2: "#81c784",
        Tint_3: "#a5d6a7",
        Tint_4: "#c8e6c9",
        Tint_5: "#e8f5e9",
        Warning: "#fbc02d",
        Error: "#e53835",
        Success: "2e7d31",
      },
    },
  },
  plugins: [],
};
