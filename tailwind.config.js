/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xl: "1240px",
			md: "1024px",
		},
		extend: {
			colors: {
				"home-bg": "#2A2A2A",
				"skills-bg": "#2C2C2C",
				"orange-btn-home": "#E2A300",
				"orange-hover": "#E29500",
				"text-white": "#E4E4E4",
			},
		},
	},
	plugins: [],
};
