module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif']
		  },

		colors: {
			'blue': '#00AFF0',
			'yellow': '#FFF200',
			'black': {
				600: '#4B5563', //subtitle
				800: '#1F2937', //title
				900: '#000000', //countdown font
			},
			'white': '#FFFFFF',
			'pink': '#EB268F',
		},
		
		extend: {},
	},
	plugins: [require("daisyui"),require('@tailwindcss/typography')],
};
