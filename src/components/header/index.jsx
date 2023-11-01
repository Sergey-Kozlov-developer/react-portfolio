import { Navigation } from "../navigation";
import logo from "./../../assets/img/logo/logo.svg";

const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center">
			<div className="flex items-center">
				<img className="w-16 h-12 pr-3" src={logo} alt="Logo" />
				<h1 className="text-3xl text-white tracking-wide">DVLPR</h1>
			</div>

			<nav className="text-white">
				<Navigation />
			</nav>
		</header>
	);
};
export default Header;
