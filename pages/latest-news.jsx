import React from "react";
import {Flex,Box } from "@chakra-ui/react";
import Layout from "./components/layout";
import NewsFilterBlock from "./components/newsFilterBlock";
import PromotionBlock from "./components/promotionsBlock";
export default function LatestNews() {
    return(
        <Flex h="100vh">
        <Layout>
        <Box  mt="80px">
        <NewsFilterBlock/>
        <PromotionBlock/>
        </Box>
        </Layout>
        </Flex>
      
    )
}