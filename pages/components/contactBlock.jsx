import {
    Flex,
    Box,
    Heading,
    IconButton,
    Container,
    Text,
} from "@chakra-ui/react";
import React from "react";
import ContactBox from "./ui/contactBox";

const ContactBlock = () => {
    return (
        <Box w="100%" mt="2rem" mb="2rem">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="1rem">
                    <Heading color="headerText" fontSize="xl" w="100%">
                        Get in Touch with us
                    </Heading>
                </Flex>
                <ContactBox />
            </Container>
        </Box>
    );
};
export default ContactBlock;
