import { CardFooter, Typography, Tooltip } from "@material-tailwind/react";

import portfolioJson from "./../../utils/portfolio.json";
import AnimatePage from "../animatePage";

export function CarouselTransition() {
	return (
		<AnimatePage>
			<section className=" mx-auto mt-16 grid w-full grid-cols-3 gap-20 ">
				{portfolioJson.map((portfolio) => (
					<div
						key={portfolio.id}
						className="w-96 justify-items-center rounded-lg bg-blue-gray-100"
					>
						<img
							className="rounded-t-lg"
							src={portfolio.image}
							alt=""
						/>
						<div className="p-6 text-center">
							<h5 className="text-neutral-800 dark:text-neutral-50 mb-2 text-xl font-medium leading-tight">
								{portfolio.title}
							</h5>
							<p className="text-neutral-600 dark:text-neutral-200 mb-4 text-base">
								{portfolio.body}
							</p>
						</div>
						<CardFooter className="flex justify-center gap-7 pt-2">
							<Tooltip content="AppStore">
								<Typography
									as="a"
									href={portfolio.hrefApple}
									variant="lead"
									color="blue"
									textGradient
									target="_blank"
								>
									<i className="fab fa-apple" />
								</Typography>
							</Tooltip>
							<Tooltip content="Play Маркет">
								<Typography
									as="a"
									href={portfolio.hrefGoogle}
									variant="lead"
									color="light-blue"
									textGradient
									target="_blank"
								>
									<i className="fab fa-google" />
								</Typography>
							</Tooltip>
							<Tooltip content="GitHub">
								<Typography
									as="a"
									href={portfolio.hrefGit}
									variant="lead"
									color="purple"
									textGradient
									target="_blank"
								>
									<i className="fab fa-github" />
								</Typography>
							</Tooltip>
						</CardFooter>
					</div>
				))}
			</section>
		</AnimatePage>
	);
}

export default CarouselTransition;
