import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  shortcuts: {
    // 'btn': 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
  },
  darkMode: 'class',
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  plugins: [
    transform('daisyui'),
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s ease-out infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        }
      }
    }
  },
  daisyui: {
    base: false,
    themes: ['cupcake', 'dracula'],
    darkTheme: 'dracula'
  }
})
