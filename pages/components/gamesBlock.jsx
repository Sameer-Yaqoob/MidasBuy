import { Flex, Box, Heading, IconButton, Container,Text } from "@chakra-ui/react";
import React from "react";
import ImageCard from "./ui/gamesCard";
import { Grid, GridItem } from "@chakra-ui/react";

const GameBlock = () => {
    return (
        <Box w="100%" mt="2rem" mb="2rem">
            <Container maxW="container.xl">
                <Flex direction="row" justify="space-between" mb="1rem">
                    <Heading color="headerText" fontSize="xl">
                        Popular Games
                    </Heading>
                    <Box display="flex"><Text fontSize="sm" color="headerText"   >Follow Midasbuy on Facebook for mor detail</Text></Box>
                    
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg"linkText="Go"/></GridItem>
                    <GridItem w="100%" ><ImageCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2M99osv60ur94dCGbZp6CtLK4rd__1Slot0wiLRnAw&s" linkText="Go" /></GridItem>
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%" ><ImageCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2M99osv60ur94dCGbZp6CtLK4rd__1Slot0wiLRnAw&s" linkText="Go" /></GridItem>
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%" ><ImageCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2M99osv60ur94dCGbZp6CtLK4rd__1Slot0wiLRnAw&s" linkText="Go" /></GridItem>
                    <GridItem w="100%"><ImageCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%" ><ImageCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2M99osv60ur94dCGbZp6CtLK4rd__1Slot0wiLRnAw&s" linkText="Go" /></GridItem>
                </Grid>   
            </Container>
        </Box>
    );
};
export default GameBlock;
