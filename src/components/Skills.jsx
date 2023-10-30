import { Grid, Flex, Image, Text } from "@chakra-ui/react";
import jsImage from "./../assets/img/skills/javascript.svg";
import reactImage from "./../assets/img/skills/react.svg";
import reduxImage from "./../assets/img/skills/redux.svg";
import flutterImage from "./../assets/img/skills/flutter.svg";
import dartImage from "./../assets/img/skills/dart.svg";
import bobxImage from "./../assets/img/skills/mobx.png";

const Skills = () => {
	const items = [
		{ id: 1, image: { jsImage }, title: "JavaScript" },
		{ id: 2, image: { reactImage }, title: "Reacr" },
		{ id: 3, image: { reduxImage }, title: "Redux&Toolkit" },
		{ id: 4, image: { flutterImage }, title: "Flutter" },
		{ id: 5, image: { dartImage }, title: "Dart" },
		{ id: 6, image: { bobxImage }, title: "BobX" },
	];
	return (
		<Grid
			templateColumns="repeat( 3,2fr)"
			gap={"20"}
			alignItems={"center"}
			// justifySelf={"center"}
			margin={"0 auto"}
		>
			{items.map((item) => (
				<Flex
					key={item.id}
					flexDirection={"column"}
					width={"270px"}
					height={"270px"}
					alignItems={"center"}
				>
					<Image boxSize={"80px"} src={item.image} alt="Logo" />
					<Text as={"span"}>{item.title}</Text>
				</Flex>
			))}
		</Grid>
	);
};

export default Skills;
