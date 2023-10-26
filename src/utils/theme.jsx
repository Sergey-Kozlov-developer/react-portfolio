import { extendTheme } from "@chakra-ui/react";
// import bgImg from "../assets/img/bg/BG.png";

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#141416",
				color: "white",
				// backgroundImage: `url(${bgImg})`,
			},
			// styles for the `a`
			a: {
				color: "teal.500",
				_hover: {
					textDecoration: "underline",
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
