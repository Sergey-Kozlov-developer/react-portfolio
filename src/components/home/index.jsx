import meImage from "./../../assets/img/home/home-me.webp";
import { Typography } from "@material-tailwind/react";

import { motion } from "framer-motion";
import AnimatePage from "../animatePage";

export const Home = () => {
	return (
		<AnimatePage>
			<motion.section className="mt-40 flex w-full justify-between">
				<div className="relative mt-12 w-2/4 text-left">
					<motion.h1
						animate={{ x: [0, -150, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className="mb-5 text-5xl text-white"
					>
						Hello
					</motion.h1>
					<motion.h1
						animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className="mb-5 whitespace-pre-line text-7xl text-white"
					>
						{`I'm Sergei\n Kozlov`}
					</motion.h1>
					<motion.p
						animate={{ x: [100, 150, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className="mb-5 whitespace-pre-line text-white"
					>
						{`I've been doing web design, front-end and back-end\ndevelopment for a year now. Do you need a website design,
					site layout, or maybe a\nturnkey website? Then contact me`}
					</motion.p>
					<motion.button
						type="button"
						animate={{ x: [0, -150, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						// whileHover={{ scale: 1.2 }}
						className="mb-2 mr-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500  hover:text-purple-600 focus:z-10 focus:outline-none "
					>
						<Typography
							as="a"
							href="https://github.com/Sergey-Kozlov-developer"
							variant="lead"
							color="blue-gray"
							textGradient
							target="_blank"
						>
							<i className="fab fa-github" />
						</Typography>
					</motion.button>
				</div>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 2 }}
					transition={{ duration: 3 }}
					className="flex w-2/4"
				>
					<img src={meImage} alt="Me" />
				</motion.div>
			</motion.section>
		</AnimatePage>
	);
};
