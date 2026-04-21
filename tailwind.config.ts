import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'secondary-container': '#91f2cd',
        'on-error': '#ffffff',
        'surface-bright': '#faf9fd',
        'on-primary': '#ffffff',
        'on-surface': '#1a1c1f',
        'inverse-surface': '#2f3034',
        'on-tertiary': '#ffffff',
        'error-container': '#ffdad6',
        'surface-container-high': '#e8e7ec',
        'secondary': '#006c51',
        'on-surface-variant': '#43474f',
        'on-secondary-container': '#007055',
        'surface': '#faf9fd',
        'on-background': '#1a1c1f',
        'primary-fixed': '#d6e3ff',
        'surface-container-highest': '#e3e2e6',
        'outline-variant': '#c3c6d0',
        'on-secondary': '#ffffff',
        'primary-container': '#1d3f6e',
        'surface-container-lowest': '#ffffff',
        'inverse-on-surface': '#f1f0f5',
        'primary-fixed-dim': '#a9c8ff',
        'background': '#faf9fd',
        'inverse-primary': '#a9c8ff',
        'primary': '#002955',
        'surface-container': '#eeedf2',
        'surface-variant': '#e3e2e6',
        'surface-dim': '#dad9de',
        'outline': '#747780',
        'surface-container-low': '#f4f3f8',
        'on-secondary-fixed': '#002116',
        'secondary-fixed': '#94f5d0',
        'tertiary': '#232a2c',
        'tertiary-container': '#394042',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.7s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #002955 0%, #1d3f6e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #006c51 0%, #91f2cd 100%)',
      },
      boxShadow: {
        'elevation-1': '0 20px 40px rgba(0, 41, 85, 0.06)',
        'elevation-2': '0 30px 60px rgba(0, 41, 85, 0.10)',
        'glass': '0 8px 32px rgba(0, 41, 85, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
