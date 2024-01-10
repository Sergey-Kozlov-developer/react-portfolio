import { Navigation } from "../navigation";
import logo from "./../../assets/img/logo/logo.png";

const Header = () => {
	return (
		<header className="flex flex-row items-center justify-between sm:flex-col md:flex-row">
			<div className="flex items-center">
				<img className="h-12 w-16 pr-3" src={logo} alt="Logo" />
				<h1 className="text-3xl font-black tracking-wide text-white">
					DVLPR
				</h1>
			</div>

			<nav className="text-white">
				<Navigation />
			</nav>
		</header>
	);
};
export default Header;
