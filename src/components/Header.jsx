import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/img/logo/logo-dev.png";
const Header = () => {
	return (
		<Box as="header" pt={5}>
			<Flex justifyContent={"space-between"}>
				<Box display="flex" alignItems="center">
					<Image boxSize="38px" src={logo} alt="Logo" />
					<Link
						color="blue.100"
						href="#!"
						textDecoration="none"
						pl={5}
						as="b"
						fontSize="lg"
						_hover={{ textDecoration: "none" }}
					>
						DVLPR
					</Link>
				</Box>

				<Button>Contacts</Button>
			</Flex>
		</Box>
	);
};
export default Header;
