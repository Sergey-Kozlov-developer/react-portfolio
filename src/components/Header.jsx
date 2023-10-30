// import logo from "../assets/img/logo/logo-dev.png";

import { Flex, Heading, Image, Link } from "@chakra-ui/react";
import logo from "./../assets/img/logo/logo.svg";

const Header = () => {
	const navLinks = [
		{ page: "Home" },
		{ page: "About" },
		{ page: "Portfolio" },
		{ page: "Contact" },
	];
	return (
		<>
			<Flex
				justifyContent="space-between"
				pt={4}
				alignItems={"center"}
				mb={"48"}
			>
				<Flex gap="4">
					<Image src={logo} width={10} />
					<Heading as={"h1"}>DVLPR</Heading>
				</Flex>
				<Flex gap={"36"}>
					{navLinks.map((navLink, index) => (
						<Link
							key={index}
							href="#!"
							_hover={{
								textDecoration: "none",
								color: "purple.400",
							}}
						>
							{navLink.page}
						</Link>
					))}
				</Flex>
			</Flex>
		</>
	);
};
export default Header;
