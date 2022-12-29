import {
    Box,
    Flex,
    Heading,
    Divider,
    Stack,
    Button,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HotEventCarousel from './hotEventCarosel'
const QuestionAnswersBlock = () => {
    return (
        <Flex mt="2rem" gap="10%">
            <Box w="20%">
                <Heading color="headerText" fontSize="xl">
                    About Midasbuy
                </Heading>
                <Divider mt="1rem" mb="1rem" />
                <Stack direction="column">
                    <Button
                        justifyContent="space-between"
                        rightIcon={<ArrowForwardIcon />}
                        border="none"
                        background="none"
                        _hover={{ background: "none", color:"white" }}
                        _focus={{ background: "none", color: "blue" }}
                        _active={{ color: "blue" }}
                        color="headerText"
                        p="0px"
                    >
                        what is midasbuy
                    </Button>
                    <Divider mt="1rem" mb="1rem" />
                    <Button
                     justifyContent="space-between"
                        rightIcon={<ArrowForwardIcon />}
                        border="none"
                        background="none"
                        _hover={{ background: "none", color:"white" }}
                        _focus={{ background: "none", color: "blue" }}
                        _active={{ color: "blue" }}
                        color="headerText"
                        p="0px"
                    >
                        what is midasbuy
                    </Button>
                    <Divider mt="1rem" mb="1rem" />
                    <Button
                     justifyContent="space-between"
                        rightIcon={<ArrowForwardIcon />}
                        border="none"
                        background="none"
                        _hover={{ background: "none", color:"white" }}
                        _focus={{ background: "none", color: "blue" }}
                        _active={{ color: "blue" }}
                        color="headerText"
                        p="0px"
                    >
                        what is midasbuy
                    </Button>
                    <Divider mt="1rem" mb="1rem" />
                    <Button
                     justifyContent="space-between"
                        rightIcon={<ArrowForwardIcon />}
                        border="none"
                        background="none"
                        _hover={{ background: "none", color:"white" }}
                        _focus={{ background: "none", color: "blue" }}
                        _active={{ color: "blue" }}
                        color="headerText"
                        p="0px"
                    >
                        what is midasbuy
                    </Button>
                    <Divider mt="1rem" mb="1rem" />
                    <Button
                     justifyContent="space-between"
                        rightIcon={<ArrowForwardIcon />}
                        border="none"
                        background="none"
                        _hover={{ background: "none", color:"white" }}
                        _focus={{ background: "none", color: "blue" }}
                        _active={{ color: "blue" }}
                        color="headerText"
                        p="0px"
                    >
                        what is midasbuy
                    </Button>
                </Stack>
            </Box>
            <Box w="70%" >
                <Heading color="headerText" fontSize="xl">
                    What is Midasbuy
                </Heading>
                <Text color="headerText" mt="1rem">
                Midasbuy is a global top-up center for games, videos and more. It offers safe and competitive top-up services, and currently supports more than 100 localized payment methods in 58 countries/ regions.
                </Text>
                <Text color="headerText" mt="1rem">
                Midasbuy is now collaborating with many popular games and entertainments such as PUBG Mobile, Arena of Valor and WeTV to provide better payment options for users around the world.
                </Text>
                <Divider mt="1rem" mb="1rem" />
                <Heading color="headerText" fontSize="xl" mb="1rem">
                    Hot Events
                </Heading>
                <HotEventCarousel/>
            </Box>
        </Flex>
    );
};
export default QuestionAnswersBlock;
