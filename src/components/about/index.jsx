import AnimatePage from "../animatePage";
import educationJson from "./../../utils/education.json";

const educationImage = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="h-6 w-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
		/>
	</svg>
);

const About = () => {
	return (
		<AnimatePage>
			<section className="mt-32 flex w-full flex-col items-center text-white">
				<div className="w-3/4">
					<h1 className="mb-8 text-4xl">About</h1>
					<p>
						The Generator App is an online tool that helps you to
						export ready-made templates ready to work as your future
						website. It helps you to combine slides, panels and
						other components and export it as a set of static files:
						HTML/CSS/JS.
					</p>
					<h1 className="mb-8 mt-8 text-4xl"> Education</h1>
					{/* 1 */}
					{educationJson.map((edu) => (
						<div
							key={edu.id}
							className="flex items-center justify-between"
						>
							<div>
								{edu.title}
								<div className="flex gap-1">
									{educationImage}
									{edu.body}
								</div>
							</div>

							<div>
								<button className="mb-2 mr-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500  hover:text-purple-600 focus:z-10 focus:outline-none ">
									Skill-Branch
								</button>
								<div>Aug 2015 - Dec 2020</div>
							</div>
						</div>
					))}
					{/* <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /> */}
					{/* 2 */}
					{/* <div className="flex items-center justify-between">
						<div>
							Flutter в мобильной разработке под iOS & Android
							<div className="flex gap-1">
								{educationImage}
								Skill-Branch - образовательная платформа
							</div>
						</div>

						<div>
							<button className="mb-2 mr-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500  hover:text-purple-600 focus:z-10 focus:outline-none ">
								Skill-Branch
							</button>
							<div>Aug 2015 - Dec 2020</div>
						</div>
					</div>
					<hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /> */}
					{/* 3 */}
					{/* <div className="flex items-center justify-between">
						<div>
							Flutter в мобильной разработке под iOS & Android
							<div className="flex gap-1">
								{educationImage}
								Skill-Branch - образовательная платформа
							</div>
						</div>

						<div>
							<button className="mb-2 mr-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500  hover:text-purple-600 focus:z-10 focus:outline-none ">
								Skill-Branch
							</button>
							<div>Aug 2015 - Dec 2020</div>
						</div>
					</div>
					<hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /> */}
				</div>
			</section>
		</AnimatePage>
	);
};

export default About;
