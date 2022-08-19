/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'body-grad': "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
			},
			colors: {
				main: '#FFC300',
				secondary: '#FF5733',
				third: '#C72738',
				fourth: '#901A3D',
				five: '#571845',
				gray: 'rgb(24, 24, 24)'
			},
			fontFamily: {
				'sans': ['Helvetica', 'Arial', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'work-sans': ['WorkSans', 'sans-serif']
			}
		},
		screens: {
			'xs': '536px',
			'sm': '640px',
			'md': '768px',
			'mid-md': '848px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		}
	},
	plugins: [],
}
