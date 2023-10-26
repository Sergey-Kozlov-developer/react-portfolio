import {
	Flex,
	Heading,
	Link,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// import logo from "../assets/img/logo/logo-dev.png";

const Header = () => {
	return (
		<Flex justifyContent="space-between">
			<Flex alignItems="center">
				{/* <Image width="48px" src={logo} alt="Logo" /> */}
				<ChevronLeftIcon boxSize={10} />
				<Text fontSize="20">/</Text>
				<ChevronRightIcon boxSize={10} />

				<Link
					href="#!"
					textDecoration="none"
					pl={5}
					as="b"
					_hover={{ textDecoration: "none" }}
				>
					<Heading>DVLPR</Heading>
				</Link>
			</Flex>
			<Flex>
				<Breadcrumb
					flexDirection="column"
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink
							href="#"
							_hover={{
								textDecoration: "none",
								color: "purple.400",
								cursor: "pointer",
							}}
						>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink
							href="#"
							_hover={{
								textDecoration: "none",
								color: "purple.400",
								cursor: "pointer",
							}}
						>
							About
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink
							href="#"
							_hover={{
								textDecoration: "none",
								color: "purple.400",
								cursor: "pointer",
							}}
						>
							Contact
						</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Flex>
		</Flex>
	);
};
export default Header;
