/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        blue: '#3662e3',
        darkBlue: '#1d1b48',
        dark1: '#111729',
        dark2: '#20293a',
        gray: '#cdd5e0',
        darkGray: '#364153',
        mediumGray: '#4a5567',
      },
      backgroundImage: {
        'hero-image': "url('/hero-image-github-profile.png')",
        'box-gradient':
          'linear-gradient(90deg, rgba(17, 23, 41, 1) 19%, rgba(29, 27, 72, 1) 130%)',
      },
      boxShadow: {
        custom: '0 0 0 4px rgba(255, 255, 255, 0.4)',
      },
      fontSize: {
        'small-text': '0.75rem',
        'body-text': '1rem',
        'title-text': '1.25rem',
        'large-text': '2rem',
      },
    },
  },
  plugins: [],
};
