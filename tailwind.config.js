/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				satoshi: "MyFont, sans-serif",
				satoshi2: "MyFont2, sans-serif",
			},
		},
	},
	plugins: [],
};
