/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  extend: {
      colors: {
        'primary': 'var(--primary-brand)',
        'secondary': 'var(--secondary-brand)',
        gray: {
          100: 'var(--light-gray)',
          200: 'var(--gray)',
          300: 'var(--gray-checkbox)'
        }
      }
    }
  },
  plugins: [],
}
