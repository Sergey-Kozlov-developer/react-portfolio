import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./../home";
import Skills from "./../skills";
import { AnimatePresence } from "framer-motion";

function AnimateRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/skills" element={<Skills />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimateRoutes;
