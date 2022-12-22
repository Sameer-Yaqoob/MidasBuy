import React from 'react';
import HelpCenterSearch from './components/helpCenter/helpCenterSearch';
import { Flex } from '@chakra-ui/react';
import Layout from './components/layout';
import FrequentQuestion from './components/helpCenter/frequentQuestions';

export default function HelpCenter() {
    return(
        <Flex h="100vh">
        <Layout>
        <HelpCenterSearch/>
        <FrequentQuestion/>
        </Layout>
        </Flex>
    )

}