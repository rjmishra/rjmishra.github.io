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
        'bg-card': '#111827',
        'bg-card-hover': '#161f2e',
        // Accent colors — 3-tier system
        // Primary (Teal #0EB3A2): CTAs, hero, main interactions, primary section titles
        'accent-primary': '#0EB3A2',
        // Secondary (Violet #7C6FE8): research, alternative emphasis, secondary sections
        'accent-secondary': '#7C6FE8',
        // Tertiary (Gold #C9A84C): special highlights, research artifacts, premium badges
        'accent-gold': '#C9A84C',
        // Text colors
        'text-primary': '#F1F5F9',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
        // Border colors
        'border-subtle': '#1E293B',
        'border-medium': '#253348',
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
