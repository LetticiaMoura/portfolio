/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'gfs-didot': ['GFS Didot', 'serif'],
    },
    colors: {
      'pessego': '#ffdab9',
      'orange': '#FFBB33',
      'slate-blue': '#020617',
      'slate-gray': '#0f172a',
      'slate-white': '#f1f5f9',
      
      },
  },
  plugins: [],
}

