import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import homeImg from "./../assets/img/home/bg-home.png";
import { Parallax } from "react-scroll-parallax";

export function Home() {
	return (
		<>
			<Flex as="main" pt={80} flexDirection="row">
				<Parallax speed={-5} translateY={[-20, 10]}>
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
							Resolving design problems, building smart user
							interfaces and useful interactions,
							<br /> developing rich web applications and seamless
							web experiences.
						</Text>
					</Flex>
				</Parallax>
				<Parallax speed={10}>
					<Flex>
						<Image mt={-50} h="100%" src={homeImg}></Image>
					</Flex>
				</Parallax>
			</Flex>
		</>
	);
}
export default Home;
