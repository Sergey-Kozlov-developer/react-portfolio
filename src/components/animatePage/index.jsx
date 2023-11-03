import { motion } from "framer-motion";

const animations = {
	initial: { width: 0 },
	animate: { width: "100%" },
	exit: { x: window.innerWidth, transition: { duration: 0.4 } },
};

// eslint-disable-next-line react/prop-types
const AnimatePage = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default AnimatePage;
