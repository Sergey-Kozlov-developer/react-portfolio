import meImage from "./../../assets/img/home/home-me.webp";

export const Home = () => {
	return (
		<section className="w-full flex mt-40 justify-between">
			<div className="relative w-2/4 text-left mt-12">
				<h1 className="text-5xl text-white mb-5">Hello</h1>
				<h1 className="text-7xl text-white mb-5 whitespace-pre-line">
					{`I'm Sergei\n Kozlov`}
				</h1>
				<p className="text-white whitespace-pre-line mb-5">
					{`I've been doing web design, front-end and back-end\ndevelopment for a year now. Do you need a website design,
					site layout, or maybe a\nturnkey website? Then contact me`}
				</p>
				<button
					type="button"
					className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-400 rounded-lg  hover:bg-orange-500 hover:text-purple-600 focus:z-10 "
				>
					Contact me
				</button>
			</div>
			<div className="flex w-2/4">
				<img src={meImage} alt="Me" />
			</div>
		</section>
	);
};
