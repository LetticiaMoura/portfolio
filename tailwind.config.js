/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
    fontFamily: {
      'gfs-didot': ['GFS Didot', 'serif'],
    },
    colors: {
      'pessego': '#ffdab9',
      'orange': '#FFBB33',
      'orange-light': '#fef3c7',
      'orange-dark': '#ff9233',
      'slate-blue': '#020617',
      'slate-gray': '#0f172a',
      'slate-white': '#f1f5f9',
      'gray': '#232323',
      'gray-white': '#e5e7eb',
      },
    screens: {
      'pq': '500px',
      // => @media (min-width: 500px) { ... }
      'sm': '640px',
    },
    },
  },
  plugins: [],
}
