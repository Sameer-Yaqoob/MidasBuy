import { Container, Divider, Heading,Box, Stack,Text  } from "@chakra-ui/react";
import React from "react";
import { BsSquareFill } from "react-icons/bs";
import {MdKeyboardArrowRight} from "react-icons/md"

const FrequentQuestion = () => {
    return (
        <Container maxW="container.xl">
            <Box mt="2rem" display="flex" flexDirection="column" gap="2">
                <Heading fontSize="xl" color="headerText" >YOU MAY WANT TO ASK</Heading>
                <Divider />
                <Stack flexDir="row" gap="3" alignItems="center" cursor="pointer" ><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "#09a0ce", marginTop:"5px"}}/>
                <Text fontSize="xl" color="headerText" _hover={{color:"white"} }  fontWeight="bold">What i can get from midasbuy?</Text>
                <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                </Stack>
                <Divider />
                <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "#09a0ce", marginTop:"5px"}}/>
                <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold">What i can get from midasbuy?</Text>
                <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                </Stack>
                <Divider />
                <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "#09a0ce", marginTop:"5px"}}/>
                <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold">What i can get from midasbuy?</Text>
                <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                </Stack>
            </Box>
        </Container>
    );
};
export default FrequentQuestion;
