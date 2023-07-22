/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightGrey: '#DFDFDF',
			},
			backgroundImage: {
				'accent-gradient':
					'linear-gradient(27deg, #FFC593 0.08%, #BC7198 51.95%, #5A77FF 100%)',
			},
			padding: {
				18: '72px',
			},
		},
	},
	plugins: [],
}
