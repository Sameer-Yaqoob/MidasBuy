import React from "react";
import {
    Box,
    Heading,
    InputGroup,
    InputLeftElement,
    Icon,
    Input,
    Container,
    Grid,
    GridItem,
    Flex,
    Text
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import ImageCard from '../ui/gamesCard'
const HelpCenterSearch = () => {
    return (
        <Container maxW="container.xl">
        <Box w={{lg:"50%", sm:"100%"}} >
            <Heading color="headerText" fontSize="xl" w="100%">WELCOME TO MIDASBUY HELP CENTER</Heading>
            <InputGroup borderRadius="none" alignSelf="center" mt="1rem">
                <InputLeftElement
                    pointerEvents="none"
                    children={
                        <Icon as={MdOutlineSearch} w={5} h={5} color="headerText" />
                    }
                />
                <Input
                    type="tel"
                    placeholder="Enter email"
                    textColor="headerText"
                    borderRadius="none"
                    h="38px"
                    w="50%"
                />
            </InputGroup>
        </Box>
        <Box w="100%" mt="2rem">
                <Flex direction="row" justify="space-between" mb="1rem">
                    <Heading color="headerText" fontSize="xl">
                       What we can help you with
                    </Heading>   
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg" linkText="About Midasbuy"/></GridItem>
                    <GridItem w="100%" ><ImageCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2M99osv60ur94dCGbZp6CtLK4rd__1Slot0wiLRnAw&s" linkText="Arena of valor"  /></GridItem>
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg"linkText="PUBG Mobile"/></GridItem>
                    
                </Grid> 
        </Box>
        </Container>
    );
};
export default HelpCenterSearch;
