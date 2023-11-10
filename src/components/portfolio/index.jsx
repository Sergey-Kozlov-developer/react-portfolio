/* eslint-disable react/prop-types */
import { CardFooter, Typography, Tooltip } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function CardPorfolio({
	title,
	body,
	image,
	hrefApple,
	hrefGoogle,
	hrefGit,
	id,
	// technologies,
}) {
	return (
		<>
			<img className="rounded-t-lg" src={image} alt="" />
			<div className="p-6 text-center">
				<h5 className="text-neutral-800 dark:text-neutral-50 mb-2 text-xl font-medium leading-tight">
					{title}
				</h5>
				<p className="text-neutral-600 dark:text-neutral-200 mb-4 text-base">
					{body}
				</p>
				{id == 1 || id == 6 ? (
					<div className="text-left">
						<p>Приложение написано на FLutter.</p>
						<p>Используеммый стэк:</p>
						<p>{`Flutter\nMobX\nProvider\nFirebase\nGoRouter\nGetIt`}</p>
						{id == 1 ? (
							<span className="font-medium">
								Больше 1000 пользователей
							</span>
						) : (
							""
						)}
					</div>
				) : (
					""
				)}
			</div>
			{id == 1 || id == 6 ? (
				<CardFooter className="flex justify-center gap-7 pt-2">
					<Tooltip content="AppStore">
						<Typography
							as="a"
							href={hrefApple}
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
							href={hrefGoogle}
							variant="lead"
							color="red"
							textGradient
							target="_blank"
						>
							<i className="fab fa-google-play" />
						</Typography>
					</Tooltip>
					<Tooltip content="GitHub">
						<Typography
							as="a"
							href={hrefGit}
							variant="lead"
							color="purple"
							textGradient
							target="_blank"
						>
							<i className="fab fa-github" />
						</Typography>
					</Tooltip>
				</CardFooter>
			) : (
				<CardFooter className="flex justify-center gap-7 pt-2">
					<Tooltip content="GitHub">
						<Typography
							as="a"
							href={hrefGit}
							variant="lead"
							color="purple"
							textGradient
							target="_blank"
						>
							<i className="fab fa-github" />
						</Typography>
					</Tooltip>
				</CardFooter>
			)}
		</>
	);
}

export default CardPorfolio;
