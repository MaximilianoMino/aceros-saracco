/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A3A52',
        accent: '#FFA500',
        'accent-light': '#FFA504',
        dark: '#00243B',
        light: '#FBF9F8',
        gray: {
          100: '#F6F3F2',
          200: '#E4E2E1',
          300: '#E5E3DF',
          400: '#CBD5E1',
          500: '#6B7280',
          600: '#64748B',
          700: '#42474D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};