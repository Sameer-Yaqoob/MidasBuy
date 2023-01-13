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
        <Box w="100%" mt="24px" mb="24px">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="24px">
                    <Heading as="h3" size="sm" color="headerText" fontSize="xl" w="100%">
                        Get in Touch with us
                    </Heading>
                </Flex>
                <ContactBox />
            </Container>
        </Box>
    );
};
export default ContactBlock;
