/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./*.html", // 根目錄的 HTML
    "./pages/**/*.html", // pages 資料夾（如 products.html）
    "./**/*.html", // ✅ 加這行最保險，掃描所有子資料夾
    "./js/**/*.js", // JS 裡若有動態 class
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F5D45",
        "light-bg": "#EAF0ED",
        accent: "#EAF0ED",
        action: "#FFE180",
        text: "#8DA291",
        divider: "#EAF0ED",
        graygreen: "#8DA291",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Noto Sans TC", "PingFang TC", "sans-serif"],
        serif: ["Noto Serif TC", "Songti TC", "serif"],
      },
      spacing: {
        "page-gap": "42px",
        "section-gap": "60px",
      },
    },
  },
  plugins: [],
};
