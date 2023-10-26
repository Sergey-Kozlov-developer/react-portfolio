import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ParallaxProvider>
			<ChakraProvider theme={theme}>
				<CSSReset />
				<App />
			</ChakraProvider>
		</ParallaxProvider>
	</React.StrictMode>
);
