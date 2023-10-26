import { Box, Container } from "@chakra-ui/react";
// import "./App.css";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";

function App() {
	return (
		<Container maxW="container.xl">
			<Box position="fixed" left="4%" right="4%" zIndex={9} pt={10}>
				<Header />
			</Box>
			<HomePage />
			<About />
		</Container>
	);
}

export default App;
