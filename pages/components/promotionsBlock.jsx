import { Flex, Box, Heading, IconButton, Container,Text } from "@chakra-ui/react";
import React from "react";
import PromotionCard from "./ui/promotionCard";
import { Grid, GridItem } from "@chakra-ui/react";

const PromotionBlock = () => {
    return (
        <Box w="100%" mt="2rem" mb="2rem">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="1rem">
                    <Heading color="headerText" fontSize="xl">
                        PROMOTIONS
                    </Heading>
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="https://wallpaperaccess.com/full/825334.jpg"/></GridItem>

                </Grid>   
            </Container>
        </Box>
    );
};
export default PromotionBlock;