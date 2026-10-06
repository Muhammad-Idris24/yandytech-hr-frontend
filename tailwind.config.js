export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f4ff',
          100: '#efeaff',
          200: '#ddd4fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#4c1d95',
          900: '#2e1065'
        },
        yandy: {
          ink: '#1f2430',
          paper: '#f2efe7',
          panel: '#f7f5f0',
          slate: '#d7d3ca',
          accent: '#c7b8ff',
          purple: '#2a2547'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(31, 36, 48, 0.08)'
      }
    }
  },
  plugins: []
}
