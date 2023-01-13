import { Flex, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
const HotEventCard = ({ image, text, heading }) => {
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
				<Heading
					as="h3"
					size="sm"
					color="headerText"
					mt="1rem"
					ml="1rem"
				>
					{heading}
				</Heading>
				<Text color="headerText" mt="1rem" ml="1rem" fontSize="14px">
					{text}
				</Text>
				<Box display="flex" justifyContent="right" w="100%">
					<Button colorScheme="facebook" borderRadius="none" leftIcon={<FaFacebook />}>
						Join our Facebook Group
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};
export default HotEventCard;
