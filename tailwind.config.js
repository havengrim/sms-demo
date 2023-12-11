/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '3rem',
				lg: '4rem',
				xl: '7rem',
				'2xl': '7rem',
			},
    },
    
    
  },
  plugins: [],
  
}

