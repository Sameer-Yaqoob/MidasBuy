import { Flex, Box, Heading, IconButton, Container,Text } from "@chakra-ui/react";
import React from "react";
import PromotionCard from "./ui/promotionCard";
import { Grid, GridItem } from "@chakra-ui/react";

const PromotionBlock = () => {
    return (
        <Box w="100%" mt="24px" mb="24px">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="24px">
                    <Heading as="h3" size="sm" color="headerText" fontSize="xl">
                        PROMOTIONS
                    </Heading>
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(3, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"><PromotionCard image="/images/promotion-1.png"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="/images/promotion-2.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="/images/promotion-3.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="/images/promotion-4.jpg"/></GridItem>
                    <GridItem w="100%"><PromotionCard image="/images/promotion-5.jpg"/></GridItem>
                </Grid>   
            </Container>
        </Box>
    );
};
export default PromotionBlock;