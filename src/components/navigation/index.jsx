import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const navLinks = [
		{ page: "Главная", to: "/" },
		{ page: "Обо мне", to: "/about" },
		// { page: "Навыки", to: "/skills" },

		{ page: "Портфолио", to: "/portfolio" },
		// { page: "Contact", to: "/contact" },
	];
	return (
		<div className="flex font-bold sm:mt-4 sm:gap-4 md:mt-0 md:gap-10 lg:gap-20 xl:gap-36">
			{navLinks.map((navLink) => (
				<NavLink
					key={navLink.page}
					to={navLink.to}
					className={({ isActive }) =>
						isActive
							? "text-orange-400"
							: "transition duration-300 ease-in-out hover:scale-110 hover:text-orange-500"
					}
				>
					{navLink.page}
				</NavLink>
			))}
		</div>
	);
};
