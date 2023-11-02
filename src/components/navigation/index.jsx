import { Link } from "react-router-dom";

export const Navigation = () => {
	const navLinks = [
		{ page: "Home", to: "/" },
		{ page: "About", to: "/about" },
		{ page: "Portfolio", to: "/portfolio" },
		{ page: "Contact", to: "/contact" },
	];
	return (
		<div className="flex gap-36">
			{navLinks.map((navLink) => (
				<Link
					key={navLink.page}
					className="transition duration-300 ease-in-out hover:scale-110 hover:text-purple-600"
				>
					{navLink.page}
				</Link>
			))}
		</div>
	);
};
