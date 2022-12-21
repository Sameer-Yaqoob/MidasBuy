import Reaact from "react";
import Iconbutton from "./ui/iconButton";
import { MdApps } from "react-icons/md";
import { Box,Container,Flex,Heading,Grid,GridItem } from "@chakra-ui/react";


const NewsFilterBlock = ()=> {
    return(
        <Box w="100%" mt="2rem" mb="2rem">
        <Container maxW="container.xl">
            <Flex direction="row" justify="left" mb="1rem">
                <Heading color="headerText" fontSize="xl">
                    LATEST NEWS
                </Heading> 
            </Flex>
            <Grid  gap={3} w={{lg:"50%",sm:"100%"}} templateColumns={{ lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"><Iconbutton text="All" icon={<MdApps/>} /></GridItem>
                    <GridItem w="100%"><Iconbutton text="Games" icon={<MdApps/>} /></GridItem>
                    <GridItem w="100%"><Iconbutton text="Chanels" icon={<MdApps/>} /></GridItem>
            </Grid>
        </Container>
    </Box>    
    )
}
export default NewsFilterBlock;