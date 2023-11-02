import jsImage from "./../../assets/img/skills/javascript.svg";
import reactImage from "./../../assets/img/skills/react.svg";
import reduxImage from "./../../assets/img/skills/redux.svg";
import flutterImage from "./../../assets/img/skills/flutter.svg";
import dartImage from "./../../assets/img/skills/dart.svg";
import bobxImage from "./../../assets/img/skills/mobx.svg";

const Skills = () => {
	const items = [
		{ id: 1, image: `${jsImage}`, title: "JavaScript" },
		{ id: 2, image: `${reactImage}`, title: "React" },
		{ id: 3, image: `${reduxImage}`, title: "Redux&Toolkit" },
		{ id: 4, image: `${flutterImage}`, title: "Flutter" },
		{ id: 5, image: `${dartImage}`, title: "Dart" },
		{ id: 6, image: `${bobxImage}`, title: "BobX" },
	];

	return (
		<section className="mx-auto mb-56 mt-60 grid w-full grid-cols-3 items-center justify-items-center gap-20">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex h-64 w-64 flex-col items-center justify-center rounded-2xl bg-stone-800"
				>
					<img
						src={item.image}
						alt="Skills"
						className="animate-skills w-20"
					/>
					<span className="mt-6 text-center text-xl text-white">
						{item.title}
					</span>
				</div>
			))}
		</section>
	);
};

export default Skills;
