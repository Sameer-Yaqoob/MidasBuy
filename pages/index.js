import Head from 'next/head'
import { Flex,Box } from "@chakra-ui/react";
import Layout from './components/layout';
import Carousel from './components/carousel';
import GameBlock from './components/gamesBlock';
import ContactBlock from './components/contactBlock';
import NewsFilterBlock from './components/newsFilterBlock';
import PromotionBlock from './components/promotionsBlock';
export default function Home() {
    
  return (
    <Box bg="header">
    <Head>
      <title>Midasbuy</title>
      <meta
        name="Squadly"
        content="Field Service & Workdforce Management System"
      />
      <link rel="icon" href="/squadly-icon.png" />
    </Head>
        <Flex h="100vh">
          <Layout>
            <Box>
            <Carousel/>
            <GameBlock/>
            <ContactBlock/>
            <NewsFilterBlock/>
            <PromotionBlock/>
            </Box>
          </Layout>
        </Flex>
  </Box>
  )
}
