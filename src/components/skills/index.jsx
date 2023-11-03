import jsImage from "./../../assets/img/skills/javascript.svg";
import reactImage from "./../../assets/img/skills/react.svg";
import reduxImage from "./../../assets/img/skills/redux.svg";
import flutterImage from "./../../assets/img/skills/flutter.svg";
import dartImage from "./../../assets/img/skills/dart.svg";
import bobxImage from "./../../assets/img/skills/mobx.svg";
import sassImage from "./../../assets/img/skills/sass.svg";
import tailwImage from "./../../assets/img/skills/tailwind.svg";
import gitImage from "./../../assets/img/skills/github.svg";

import { motion } from "framer-motion";

const Skills = () => {
	const items = [
		{ id: 1, image: `${jsImage}`, title: "JavaScript" },
		{ id: 2, image: `${reactImage}`, title: "React" },
		{ id: 3, image: `${reduxImage}`, title: "Redux&Toolkit" },
		{ id: 4, image: `${flutterImage}`, title: "Flutter" },
		{ id: 5, image: `${dartImage}`, title: "Dart" },
		{ id: 6, image: `${bobxImage}`, title: "BobX" },
		{ id: 7, image: `${sassImage}`, title: "Sass" },
		{ id: 8, image: `${tailwImage}`, title: "Tailwind" },
		{ id: 9, image: `${gitImage}`, title: "GitHub" },
	];

	return (
		<motion.section
			className="mx-auto mt-16 grid w-full grid-cols-3 items-center justify-items-center gap-20"
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
		>
			{items.map((item) => (
				<div
					key={item.id}
					className="flex h-52 w-52 flex-col items-center justify-center rounded-2xl bg-stone-800"
				>
					<img
						src={item.image}
						alt="Skills"
						className="w-20 animate-skills"
					/>
					<span className="mt-6 text-center text-xl text-white">
						{item.title}
					</span>
				</div>
			))}
		</motion.section>
	);
};

export default Skills;
