import { motion } from "framer-motion";

const transition = () => {
	return (
		<>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
			></motion.div>
		</>
	);
};

export default transition;