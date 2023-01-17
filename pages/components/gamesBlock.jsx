import { Flex, Box, Heading, IconButton, Container,Text,Link as Zlink } from "@chakra-ui/react";
import React from "react";
import ImageCard from "./ui/gamesCard";
import { Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { FacebookBanner } from "./ui/facebookBanner";
const GameBlock = () => {
    return (
        <Box w="100%" mt="2rem" mb="2rem">
            <Container maxW="container.xl">
                <Flex direction="row" justify="space-between" mb="24px">
                    <Heading as="h3" size="sm" color="headerText" fontSize="xl">
                        Popular Games
                    </Heading>
                    <Box display="flex" alignItems="center"><Text fontSize="12px" mr="5px" color="headerText"   >Follow Midasbuy on <Zlink as="a" color="#3A7BFC;" href="https://www.facebook.com/midasbuy">Facebook</Zlink> for mor detail</Text><FacebookBanner/></Box>
                    
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <Link href="/pubg-detail"><GridItem w="100%"><ImageCard image="/images/popular-pubg.png"linkText="Go"/></GridItem></Link>
                    <Link href="/arena-of-valor-detail"><GridItem w="100%"><ImageCard image="/images/popular-arena.jpg"linkText="Go"/></GridItem></Link>
                    <Link href="/chimeraland-detail"><GridItem w="100%"><ImageCard image="/images/popular-chimeraland.jpg"linkText="Go"/></GridItem></Link>
                </Grid>   
                
            </Container>
        </Box>
    );
};
export default GameBlock;
