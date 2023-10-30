import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import homeMe from "./../assets/img/home/home-me.webp";

export function Home() {
	return (
		<Flex flexDirection={"row"} gap={"56"}>
			<Flex flexDirection={"column"}>
				<Heading as={"h2"} size={"2xl"}>
					Hello
				</Heading>
				<Heading as={"h1"} pt={"7"} pb={"7"} size={"3xl"}>
					I’m Sergei
					<br /> Kozlov
				</Heading>
				<Text as={"p"} pb={"7"}>
					Ive been doing web design, front-end and back-end
					development for a year now. <br /> Do you need a website
					design, site layout, or maybe a turnkey website? Then
					contact me
				</Text>
				<Button maxW={"36"} colorScheme="orange">
					Contact me
				</Button>
			</Flex>
			<Flex>
				<Image
					src={homeMe}
					objectFit={"contain"}
					width={"850px"}
					height={"500px"}
				></Image>
			</Flex>
		</Flex>
	);
}
export default Home;
