import React from "react";
import Link from "next/link";
import { Box,Flex,Container,Text,Heading,Input,InputGroup,InputLeftElement,Icon } from "@chakra-ui/react";
import Layout from "./components/layout";
BsFillArrowLeftCircleFill
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { MdOutlineSearch } from "react-icons/md";
import QuestionAnswersBlock from "./components/helpCenter/questionsAnswers";
 function QuestionsAnswers(props) {
    return(
        <Flex h="100vh">
        <Layout>
          <Container maxW="container.xl">
            <Link href="/help-center">
         <Box display="flex" alignItems="center" cursor="pointer" gap="2" ><BsFillArrowLeftCircleFill color="white"/><Text color="headerText">Help Center</Text> </Box>
         </Link>
         <Box w={{lg:"50%", sm:"100%"}} >
            <InputGroup borderRadius="none" alignSelf="center" mt="1rem">
                <InputLeftElement
                    pointerEvents="none"
                    children={
                        <Icon as={MdOutlineSearch} w={5} h={5} color="headerText" />
                    }
                />
                <Input
                    type="tel"
                    placeholder="Enter email"
                    textColor="headerText"
                    borderRadius="none"
                    h="38px"
                    w="100%"
                />
            </InputGroup>
        </Box>
        <QuestionAnswersBlock/>
         </Container>
        </Layout>
        </Flex>
      
    )
}
export default QuestionsAnswers;