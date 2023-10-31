import { Container } from "@chakra-ui/react";
// import "./App.css";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import Skills from "./components/Skills";

function App() {
	return (
		<Container maxW="container.xl">
			<Header />

			<HomePage />
			<Container maxW="container.md" mb={"48"}>
				<Skills />
			</Container>

			<About />
		</Container>
	);
}

export default App;
