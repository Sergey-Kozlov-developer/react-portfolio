import { extendTheme } from "@chakra-ui/react";
// import bgImg from "../assets/img/bg/back1.jpg";

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#2c2c2c",
				color: "white",
				// backgroundImage: `url(${bgImg})`,
			},
			// styles for the `a`
			a: {
				color: "teal.500",
				_hover: {
					textDecoration: "none",
				},
			},
		},
	},

	fonts: {
		heading: `'Montserrat', sans-serif`,
		body: `'Montserrat', sans-serif`,
	},
});

export default theme;
