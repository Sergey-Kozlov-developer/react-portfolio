import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./../home";
import Skills from "./../skills";
import { AnimatePresence } from "framer-motion";

function AnimateRoutes(isVisible) {
	const location = useLocation();
	return (
		<AnimatePresence initial={false} mode="wait">
			{isVisible && (
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
				</Routes>
			)}
		</AnimatePresence>
	);
}

export default AnimateRoutes;
