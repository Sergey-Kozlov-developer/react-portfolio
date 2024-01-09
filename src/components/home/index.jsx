import meImage from "./../../assets/img/home/comp.svg";
import { Typography } from "@material-tailwind/react";

import { motion } from "framer-motion";
import AnimatePage from "../animatePage";
import Skills from "../skills/index";

export const Home = () => {
	return (
		<AnimatePage>
			<motion.section className="flex justify-between sm:mt-10 sm:flex-col-reverse md:mt-40 md:flex-row lg:mt-20 lg:w-full">
				<div className="relative text-left sm:mt-2 md:mt-12 md:w-2/4">
					<h1 className="text-white sm:mb-2 sm:text-xl md:mb-5 md:text-5xl lg:mb-8 ">
						Привет!
					</h1>
					<h1 className=" text-white sm:mb-1 sm:text-2xl md:mb-5 md:text-7xl lg:mb-8">
						Я Сергей
					</h1>
					<p className=" whitespace-pre-line text-white sm:mb-2 sm:whitespace-normal md:mb-5 md:whitespace-pre-line">
						{`Занимаюсь мобильной разработкой, фронтендом.\nВам нужно мобильное приложение или, может быть, сайт под ключ?\nТогда свяжитесь со мной`}
					</p>
					<button
						type="button"
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
					</button>
					<h1 className='text-white mt-7 text-2xl'>Мои навыки:</h1>
					<Skills />
				</div>
				<div className="flex sm:w-full md:h-96 md:w-96 lg:h-auto lg:w-2/4">
					<img src={meImage} alt="Me" />
				</div>
				
			</motion.section>
		</AnimatePage>
	);
};
