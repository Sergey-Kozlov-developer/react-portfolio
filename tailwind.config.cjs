/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-undef
module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xl: "1240px",
			md: "1024px",
		},
		extend: {
			colors: {
				"home-bg": "#2A2A2A",
				"bg-skills": "#2C2C2C",
				"orange-btn-home": "#E2A300",
				"orange-hover": "#E29500",
				"text-white": "#E4E4E4",
			},
			animation: {
				skills: "skills 3s ease-in infinite",
			},
			keyframes: {
				skills: {
					"0%": {
						transform: "rotate(0)",
						scale: "1",
						borderRadius: "20%",
					},
					"25%": {
						transform: "rotate(0)",
						scale: "1.5",
						borderRadius: "20%",
					},
					"50%": {
						transform: "rotate(360deg)",
						scale: "1.5",
						borderRadius: "25%",
					},
					"75%": {
						transform: "rotate(360deg)",
						scale: "1",
						borderRadius: "25%",
					},
					"100%": {
						transform: "rotate(0)",
						scale: "1",
						borderRadius: "20%",
					},
				},
			},

			//   0% { transform: scale(1) rotate(0); border-radius: 20%; }
			//   25% { transform: scale(1.5) rotate(0); border-radius: 20%; }
			//   50% { transform: scale(1.5) rotate(360deg); border-radius: 25%; }
			//   75% { transform: scale(1) rotate(360deg); border-radius: 25%; }
			//   100% { transform: scale(1) rotate(0); border-radius: 20%; }
		},
	},
	plugins: [],
});
