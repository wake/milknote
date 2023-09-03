/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.vue', '**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

