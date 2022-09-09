/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'body-grad': "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
			},
			backgroundColor: {
				'html': '#E44D26',
				'css': '#1572B6',
				'javascript': '#F7DF1B',
				'php': '#6181B6',
				'docker': '#009BC6',
				'dockerfile': '#009BC6',
				'shell': '#2A3137',
				'typescript': '#007ACC',
				'sass': '#CB6599',
				'kotlin': '#7F6DB0',
				'makefile': '#FFF',
				'blade': '#FD4F30',
				'astro': '#FF5D01',
				'twig': '#BACF29'
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
