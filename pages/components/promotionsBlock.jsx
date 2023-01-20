import { Flex, Box, Heading, IconButton, Container,Text } from "@chakra-ui/react";
import React from "react";
import PromotionCard from "./ui/promotionCard";
import { Grid, GridItem } from "@chakra-ui/react";
const homePromotions = [
    {id:1,startDate:'2014-11-14T14:05:09Z',endDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Twitter to win $4.99 UC!',image:'/images/promotion-2.jpg'},
    {id:2,startDate:'2014-11-14T14:05:09Z',endDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Pubg Mobile to win $4.99 UC!',image:'/images/promotion-1.png'},
    {id:3,startDate:'2014-11-14T14:05:09Z',endDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Instagram to win $4.99 UC!',image:'/images/promotion-3.jpg'},
    {id:4,startDate:'2014-11-14T14:05:09Z',endDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Facebook to win $4.99 UC!',image:'/images/promotion-4.jpg'},
    {id:5,startDate:'2014-11-14T14:05:09Z',endDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Tiktok to win $4.99 UC!',image:'/images/promotion-5.jpg'}
]
const PromotionBlock = () => {
    return (
        <Box w="100%" mt="24px" mb="24px">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="24px">
                    <Heading as="h3" size="sm" color="headerText" fontSize="xl">
                        PROMOTIONS
                    </Heading>
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(3, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }} position="relative">
                    {homePromotions.map((promo)=> {
                        return <PromotionCard key={promo.id} promotion={promo}/>
                    })}
                    
                </Grid>   
            </Container>
        </Box>
    );
};
export default PromotionBlock;