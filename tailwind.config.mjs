import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        ddhq: {
          primary: '#4F46E5',
          'primary-content': '#FFFFFF',
          secondary: '#64748B',
          'secondary-content': '#FFFFFF',
          accent: '#06B6D4',
          'accent-content': '#FFFFFF',
          neutral: '#1E293B',
          'neutral-content': '#F8FAFC',
          'base-100': '#FFFFFF',
          'base-200': '#F8FAFC',
          'base-300': '#E2E8F0',
          'base-content': '#1E293B',
          info: '#3B82F6',
          'info-content': '#FFFFFF',
          success: '#10B981',
          'success-content': '#FFFFFF',
          warning: '#F59E0B',
          'warning-content': '#FFFFFF',
          error: '#EF4444',
          'error-content': '#FFFFFF',
        },
      },
    ],
  },
  plugins: [daisyui],
};
