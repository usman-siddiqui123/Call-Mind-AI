/** @type {import('tailwindcss').Config} */
export default {
  // Yahan path zaroor check karen:
  content: [
    "./index.html",
    // Agar aapki components 'src' folder mein hain toh yeh line honi chahiye:
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}