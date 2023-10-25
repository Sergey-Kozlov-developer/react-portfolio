import {
	Box,
	Text,
	Button,
	Heading,
	SimpleGrid,
	Container,
	Stack,
} from "@chakra-ui/react";

const CardList = (props) => {
	const { cards = [] } = props;
	return (
		<>
			<Container maxW={1200}>
				<SimpleGrid columns={[1, 2, 3]}>
					{cards.map((card) => (
						<Stack
							key={card.title}
							spacing={2}
							_hover={{ shadow: "md" }}
							p={2}
						>
							<Heading as="h3" isTruncated>
								{card.title}
							</Heading>
							<Text>{card.body}</Text>
							<Button as="a" variant="outline">
								Reade more
							</Button>
						</Stack>
					))}
					;
				</SimpleGrid>
			</Container>
		</>
	);
};
export { CardList };
