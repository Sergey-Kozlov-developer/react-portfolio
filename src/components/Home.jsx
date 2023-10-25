import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import homeImg from "./../assets/img/home/bg-home.png";

export function Home() {
	return (
		<Flex as="main" pt={80} flexDirection="row">
			<Flex flexDirection="column">
				<Heading
					as="h1"
					color={"gray.200"}
					fontSize="6xl"
					fontWeight={600}
					pb={10}
					letterSpacing={1}
					lineHeight={1}
				>
					Front-End Software
					<br /> Developer
				</Heading>
				<Text color={"gray.200"}>
					Resolving design problems, building smart user interfaces
					and useful interactions,
					<br /> developing rich web applications and seamless web
					experiences.
				</Text>
			</Flex>
			<Flex>
				<Image mt={-50} h="100%" src={homeImg}></Image>
			</Flex>
		</Flex>
	);
}
export default Home;
