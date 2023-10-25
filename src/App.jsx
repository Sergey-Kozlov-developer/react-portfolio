import { Container } from "@chakra-ui/react";
// import "./App.css";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";

function App() {
	return (
		<Container maxW="container.xl">
			<Header />
			<HomePage />
		</Container>
	);
}

export default App;
