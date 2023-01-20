import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Link,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import ShopProductCard from "./components/ui/shopProductCard";

import DetailPageHeader from "./components/ui/detailPageHeader";
import PromotionCard from "./components/ui/promotionCard";
export default function PubgPromotions() {
  const homePromotions = [
    {id:1,startDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Twitter to win $4.99 UC!',image:'/images/promotion-2.jpg'},
    {id:2,startDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Pubg Mobile to win $4.99 UC!',image:'/images/promotion-1.png'},
    {id:3,startDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Instagram to win $4.99 UC!',image:'/images/promotion-3.jpg'},
    {id:4,startDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Facebook to win $4.99 UC!',image:'/images/promotion-4.jpg'},
    {id:5,startDate:'2014-11-14T14:05:09Z',title:'Follow Midasbuy on Tiktok to win $4.99 UC!',image:'/images/promotion-5.jpg'}
]
  return (
    <Layout>
      <DetailPageHeader />
      <Container maxW="container.xl" pt="48px">
     <Heading as="h3" color="#fff" size="sm" mb="24px" >Promotions</Heading>
        <Grid
          gap={5}
          w="100%"
          mb="24px"
          templateColumns={{
            lg: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          position="relative"
        >
            {homePromotions.map((promotion)=> {
                return <PromotionCard key ={promotion.id} promotion={promotion} badge={true}/>
            })}
          
        </Grid>
      </Container>
    </Layout>
  );
}
