import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<>
			<Flex
				flexDirection="row"
				justifyContent="space-between"
				pt="96"
				mb="96"
			>
				<Box>
					<Heading as="h1" pb="4" fontSize="6xl">
						Hi, Im Todor WebDeveloper
					</Heading>
					<Text>
						Front End Developer / JavaScript Fan / Wordpress Expert
					</Text>
				</Box>
				<Box textAlign={"justify"}>
					<Text>
						Professionally connected with the web development
						industry.
					</Text>
					<br />
					<Text>
						Problem solver, well-organised person, loyal employee
						with high attention to detail. Fan of Boxing, outdoor
						activities, video games, and coding of course.
					</Text>
					<br />
					<Text>
						Interested in the entire frontend spectrum and working
						on ambitious projects with interesting people.
					</Text>
				</Box>
			</Flex>
		</>
	);
};
export { About };
