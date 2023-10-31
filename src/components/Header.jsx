// import logo from "../assets/img/logo/logo-dev.png";

import { Flex, Heading, Image, Link } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
import logo from "./../assets/img/logo/logo.svg";
import { motion } from "framer-motion";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import { useRef } from "react";

const Header = () => {
	const navLinks = [
		{ page: "Home", to: "/" },
		{ page: "About", to: "/about" },
		{ page: "Portfolio", to: "/portfolio" },
		{ page: "Contact", to: "/contact" },
	];
	gsap.registerPlugin(ScrollToPlugin);
	// const artRef1 = useRef(null);
	// const artRef2 = useRef(null);
	// const artRef3 = useRef(null);
	// const scrollTo = (target) =>
	// 	gsap.to(window, { duration: 1, scrollTo: target });
	return (
		<>
			<Flex
				justifyContent="space-between"
				pt={4}
				alignItems={"center"}
				mb={"48"}
				// ref={artRef1}
			>
				<Flex gap="4">
					<Image src={logo} width={10} />
					<Heading as={"h1"}>DVLPR</Heading>
				</Flex>
				<Flex gap={"36"}>
					{navLinks.map((navLink, index) => (
						<Link
							key={index}
							as={motion.a}
							whileHover={{ scale: 1.2 }}
							to={navLink.to}
							// onClick={() => scrollTo(artRef1.current)}
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
