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
export default function PubgShop() {
const products = [
    {id:1,type:"oneday"},
    {id:2,type:"oneday"},
    {id:3,type:"weekly"},
    {id:4,type:"weekly"},
    {id:5,type:"oneday"},
    {id:6,type:"weekly"},
    {id:7,type:"weekly"}
]
  return (
    <Layout>
      <DetailPageHeader />
      <Container maxW="container.xl" pt="48px">
        <Flex gap="10px" mb="24px">
          <Box
            fontSize="12px"
            p="6px 16px"
            borderRadius="14px"
            lineHeight="16px"
            color="#fff"
            bg="var(--btn-color-3,#3a7bfc)"
            boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
          >
            <Text>All</Text>
          </Box>
          <Box
            fontSize="12px"
            p="6px 16px"
            borderRadius="14px"
            lineHeight="16px"
            color="#fff"
            bg="hsla(0,0%,100%,.25)"
            // boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
          >
            <Text>Weekly</Text>
          </Box>
          <Box
            fontSize="12px"
            p="6px 16px"
            borderRadius="14px"
            lineHeight="16px"
            color="#fff"
            bg="hsla(0,0%,100%,.25)"
            // boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
          >
            <Text>Roya-Pass</Text>
          </Box>
          <Box
            fontSize="12px"
            p="6px 16px"
            borderRadius="14px"
            lineHeight="16px"
            color="#fff"
            bg="hsla(0,0%,100%,.25)"
            // boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
          >
            <Text>UC</Text>
          </Box>
        </Flex>
        <Grid
          gap={3}
          w="100%"
          mb="24px"
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          position="relative"
        >
            {products.map((product)=> {
                return <ShopProductCard key={product.id} type={product.type}/>
            })}
          
        </Grid>
      </Container>
    </Layout>
  );
}
