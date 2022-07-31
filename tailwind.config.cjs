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
				'roboto': ['Roboto', 'sans-serif'],
				'work-sans': ['WorkSans', 'sans-serif']
			}
		},
	},
	plugins: [],
}
