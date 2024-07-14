/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			dropShadow: {
				'3xl': '0 10px 15px rgba(145, 144, 144, 0.25)',
				box: ' 0 0 10px rgba(0, 0, 0, 0.1)',
				dark: '6px 6px 8px #e0e0e0',
			},
		},
	},
	plugins: [],
};
