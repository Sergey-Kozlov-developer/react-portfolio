// import logo from "../assets/img/logo/logo-dev.png";

import { Flex, Heading, Image, Link } from "@chakra-ui/react";
import logo from "./../assets/img/logo/logo.svg";

const Header = () => {
	return (
		<>
			<Flex justifyContent="space-between" pt={4} alignItems={"center"}>
				<Flex gap="4">
					<Image src={logo} width={10} />
					<Heading as={"h1"}>DVLPR</Heading>
				</Flex>
				<Flex gap={"36"}>
					<Link href="#!" _hover={{ textDecoration: "none" }}>
						Home
					</Link>
					<Link href="#!" _hover={{ textDecoration: "none" }}>
						About
					</Link>
					<Link href="#!" _hover={{ textDecoration: "none" }}>
						Portfolio
					</Link>
					<Link href="#!" _hover={{ textDecoration: "none" }}>
						Contact
					</Link>
				</Flex>
			</Flex>
		</>
	);
};
export default Header;
