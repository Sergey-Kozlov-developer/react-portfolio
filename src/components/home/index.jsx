import meImage from "./../../assets/img/home/home-me.webp";

export const Home = () => {
	return (
		<section className="mt-40 flex w-full justify-between">
			<div className="relative mt-12 w-2/4 text-left">
				<h1 className="mb-5 text-5xl text-white">Hello</h1>
				<h1 className="mb-5 whitespace-pre-line text-7xl text-white">
					{`I'm Sergei\n Kozlov`}
				</h1>
				<p className="mb-5 whitespace-pre-line text-white">
					{`I've been doing web design, front-end and back-end\ndevelopment for a year now. Do you need a website design,
					site layout, or maybe a\nturnkey website? Then contact me`}
				</p>
				<button
					type="button"
					className="mb-2 mr-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500  hover:text-purple-600 focus:z-10 focus:outline-none "
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
