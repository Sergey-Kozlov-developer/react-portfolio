// import meImage from "../assets/img/home/home-me.webp";
import { Typography } from "@material-tailwind/react";

import { motion } from "framer-motion";
import AnimatePage from "../animatePage";

export const Home = () => {
	return (
		<AnimatePage>
			<motion.section className="flex justify-between sm:mt-10 sm:flex-col-reverse md:mt-40 md:flex-row lg:mt-40 lg:w-full">
				<div className="relative text-left sm:mt-2 md:mt-12 md:w-2/4">
					<motion.h1
						animate={{ x: [0, -70, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className="text-white sm:mb-2 sm:text-xl md:mb-5 md:text-5xl lg:mb-8"
					>
						Привет!
					</motion.h1>
					<motion.h1
						animate={{ x: [0, 70, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className=" text-white sm:mb-1 sm:text-2xl md:mb-5 md:text-7xl lg:mb-8"
					>
						Я Сергей
					</motion.h1>
					<motion.p
						animate={{ x: [100, 70, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.2 }}
						className=" whitespace-pre-line text-white sm:mb-2 sm:whitespace-normal md:mb-5 md:whitespace-pre-line"
					>
						{`Занимаюсь мобильной разработкой, фронтендом.\nВам нужно мобильное приложение или, может быть, сайт под ключ?\nТогда свяжитесь со мной`}
					</motion.p>
					<motion.button
						type="button"
						animate={{ x: [0, -70, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.3,
							ease: [0.5, 0.71, 1, 1.15],
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						// whileHover={{ scale: 1.2 }}
						className="mb-2 mr-2 rounded-lg bg-white px-5 py-2.5 hover:bg-orange-500 focus:z-10 focus:outline-none lg:mt-8"
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
					className="flex sm:w-full md:h-96 md:w-96 lg:h-auto lg:w-2/4"
				>
					<img src="./assets/img/home/home-me.webp" alt="Me" />
				</motion.div>
			</motion.section>
		</AnimatePage>
	);
};
