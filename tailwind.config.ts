import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bg-base': '#0B0F1A',
        'bg-surface': '#111827',
        'bg-card': '#1A2235',
        // Accent colors
        'accent-primary': '#14B8A6',
        'accent-secondary': '#6366F1',
        // Text colors
        'text-primary': '#F1F5F9',
        'text-muted': '#94A3B8',
        // Border colors
        'border-subtle': '#1E293B',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease',
      },
    },
  },
  plugins: [],
} satisfies Config;
