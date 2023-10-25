import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "black",
				color: "white",
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
