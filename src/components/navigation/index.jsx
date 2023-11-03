import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const navLinks = [
		{ page: "Home", to: "/" },
		{ page: "About", to: "/about" },
		{ page: "Skills", to: "/skills" },

		{ page: "Portfolio", to: "/portfolio" },
		{ page: "Contact", to: "/contact" },
	];
	return (
		<div className="flex gap-36">
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
