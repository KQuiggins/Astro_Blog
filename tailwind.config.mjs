const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		aspectRatio: {
			thumbnail: '1.5',
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},

	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
