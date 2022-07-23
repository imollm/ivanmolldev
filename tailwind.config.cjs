/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#FFC300',
				secondary: '#FF5733',
				third: '#C72738',
				fourth: '#901A3D',
				five: '#571845'
			},
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'work-sans': ['WorkSans', 'sans-serif']
			}
		},
	},
	plugins: [],
}
