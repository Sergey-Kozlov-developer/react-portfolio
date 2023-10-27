import { Container } from "@chakra-ui/react";
// import "./App.css";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";

function App() {
	return (
		<Container maxW="container.xl">
			<Header />

			<HomePage />
			<About />
		</Container>
	);
}

export default App;
