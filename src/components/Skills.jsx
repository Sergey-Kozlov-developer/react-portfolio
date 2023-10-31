import { Grid, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

import jsImage from "./../assets/img/skills/javascript.svg";
import reactImage from "./../assets/img/skills/react.svg";
import reduxImage from "./../assets/img/skills/redux.svg";
import flutterImage from "./../assets/img/skills/flutter.svg";
import dartImage from "./../assets/img/skills/dart.svg";
import bobxImage from "./../assets/img/skills/mobx.svg";

const Skills = () => {
	const items = [
		{ id: 1, image: `${jsImage}`, title: "JavaScript" },
		{ id: 2, image: `${reactImage}`, title: "React" },
		{ id: 3, image: `${reduxImage}`, title: "Redux&Toolkit" },
		{ id: 4, image: `${flutterImage}`, title: "Flutter" },
		{ id: 5, image: `${dartImage}`, title: "Dart" },
		{ id: 6, image: `${bobxImage}`, title: "BobX" },
	];
	const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.5) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.5) rotate(360deg); border-radius: 25%; }
  75% { transform: scale(1) rotate(360deg); border-radius: 25%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;
	const animation = `${animationKeyframes} 3s ease-in-out infinite`;

	return (
		<Grid templateColumns="repeat( 3,2fr)" gridGap={"20"} margin={"0 auto"}>
			{items.map((item) => (
				<Flex
					key={item.id}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					backgroundColor={"blackAlpha.300"}
					borderRadius={"20"}
				>
					<Image
						as={motion.img}
						animation={animation}
						boxSize={"80px"}
						justifyContent={"center"}
						mt={"12"}
						mb={"4"}
						src={item.image}
						alt="Logo"
					/>
					<Text as={"span"} mb={"12"} fontSize={"xl"}>
						{item.title}
					</Text>
				</Flex>
			))}
		</Grid>
	);
};

export default Skills;
