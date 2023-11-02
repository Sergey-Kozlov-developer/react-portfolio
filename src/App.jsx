import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { Home } from "./components/home";
import Skills from "./components/skills";
import { Wrapper } from "./components/wrapper";

function App() {
	return (
		<Wrapper>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
				</Routes>
			</main>
		</Wrapper>
	);
}

export default App;
