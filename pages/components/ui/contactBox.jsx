import React from "react";
import {
    Box,
    Flex,
    Text,
    Input,
    Button,
    InputGroup,
    InputLeftElement,
    Icon,
    Stack,
    Wrap,
    WrapItem,
    Center
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const ContactBox = () => {
    return (
        <Box pl="2rem" pr="2rem" pt="1rem" pb="1rem" bg="base.2" w={{lg:"50%", sm:"100%"}}>
            <Flex direction="row" w="100%" gap={2}>
                <Box w={{lg:"70%", sm:"100%"}}>
                    <Text fontSize="sm" color="headerText">
                        I’d like to receive news and special offers from
                        Midasbuy
                    </Text>
                    <Stack direction="row" spacing={0} mt="1rem">
                        <InputGroup borderRadius="none" alignSelf="center">
                            <InputLeftElement
                                pointerEvents="none"
                                children={
                                    <Icon
                                        as={MdEmail}
                                        w={5}
                                        h={5}
                                        color="headerText"
                                    />
                                }
                            />
                            <Input
                                type="tel"
                                placeholder="Enter email"
                                borderRight="none"
                                textColor="headerText"
                                borderRadius="none"
                                h="38px"
                            />
                        </InputGroup>
                        <Button colorScheme="blue" borderRadius="none">
                            Submit
                        </Button>
                    </Stack>
                </Box>
                <Wrap w={{lg:"30%", sm:"100%"}} display={{lg:"block",sm:"none"}}>
                    <WrapItem>
                        <Center w="200px" h="100px">
                        <Icon as={FaPaperPlane} w="50px" h="50px" color="headerText" />
                        </Center>
                    </WrapItem>
                </Wrap>
               
            </Flex>
        </Box>
    );
};
export default ContactBox;
