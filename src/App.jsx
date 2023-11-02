import Header from "./components/header";
// import { Home } from "./components/home";
// import Skills from "./components/skills";
import { Wrapper } from "./components/wrapper";
import AnimateRoutes from "./components/animateRoutes";

function App() {
	return (
		<Wrapper>
			<Header />
			<main>
				<AnimateRoutes />
			</main>
		</Wrapper>
	);
}

export default App;
