/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F6F1EB',
        'light-green': '#8BC49B',
        'green': '#1E5639',
        'dark-green': '#102E1E',
        'darker-green': '#0D2619',
        'light-blue': '#117199',
        'blue': '#004E75',
        'dark-blue': '#003C59'
      },
      fontFamily: {
        'roboto': ["Roboto", 'sans-serif'],
        'roboto-slab-bold': ["Roboto Slab", 'serif'],
      },
    },
  },
  plugins: [],
}
