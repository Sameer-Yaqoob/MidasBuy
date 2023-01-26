import { Flex, Box, Heading, Container,Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import PromotionCard from "./ui/promotionCard";
import { Grid  } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotionsState } from "../../data/redux/selecters";
import { getPromotionsRequest } from "../../data/redux/actions";

const PromotionBlock = () => {
    const dispatch = useDispatch();
    const {promotions} = useSelector(getPromotionsState)
    
    useEffect(()=> {
        dispatch(getPromotionsRequest());
        },[])
        return (
        <Box w="100%" mt="24px" mb="24px">
            <Container maxW="container.xl">
                <Flex direction="row" justify="left" mb="24px">
                    <Heading as="h3" size="sm" color="headerText" fontSize="xl">
                        PROMOTIONS
                    </Heading>
                </Flex>
                <Grid  gap={3} w="100%" templateColumns={{ lg:"repeat(3, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }} position="relative">
                    {promotions?.map((promo)=> {
                        return <PromotionCard key={promo.id} promotion={promo}/>
                    })}
                    
                </Grid>   
            </Container>
        </Box>
    );
};
export default PromotionBlock;