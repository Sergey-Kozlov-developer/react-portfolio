import Header from "./components/header";
import { Home } from "./components/home";
import Skills from "./components/skills";
import { Wrapper } from "./components/wrapper";

function App() {
	return (
		<Wrapper>
			<Header />
			<main>
				<Home />
				<Skills />
			</main>
		</Wrapper>
	);
}

export default App;
