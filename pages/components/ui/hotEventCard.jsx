import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
const Slide = ({ image, text }) => {
	return (
		<Flex h="150px">
			<Box w="50%">
				<Image src={image} alt="Dan Abramov" w="100%" h="100%" />
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				w="50%"
				bg="var(--bg-color-8,#1d2657)"
				h="100%"
			>
				<Text color="headerText" mt="1rem" ml="1rem">
					{text}
				</Text>
				<Box display="flex" justifyContent="right" w="100%">
					<Button colorScheme="blue" borderRadius="none" right="0">
						JOIN NOW
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};
export default Slide;
