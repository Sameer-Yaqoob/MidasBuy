import Reaact from "react";
import Iconbutton from "./ui/iconButton";
import { MdApps } from "react-icons/md";
import { Box,Container,Flex,Heading,Grid,GridItem, Image,Text } from "@chakra-ui/react";


const NewsFilterBlock = ()=> {
    return(
        <Box w="100%" >
        <Container maxW="container.xl">
            <Flex direction="row" justify="left" mb="24px">
                <Heading as="h3" size="sm" color="headerText" fontSize="xl">
                    LATEST NEWS
                </Heading> 
            </Flex>
            <Grid  gap={3} w={{lg:"50%",sm:"100%"}} templateColumns={{ lg:"repeat(2, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(2, 1fr)" }} position="relative">
                    <GridItem w="100%"
                        h= "72px"
                        bg= "var(--bg-color-7,#1b234d)"
                        borderRadius="4px"
                        padding= "12px 24px"
                        boxSizing="border-box"
                        display="inline-block"
                        cursor="pointer"
                        position="relative"
                    >
                        <Box display="flex" alignItems="center">
                           <Image src="/images/all-apps-icon.png" borderRadius="6px" mr="10px" width="48px" height="48px"/>
                           <Text fontSize="14px" color="var(--font-color-6,hsla(0,0%,100%,.6))"
                               letterSpacing= "0"
                               fontWeight="bold"
                               lineHeight= "16px"
                               pl="16px"
                               boxSizing="border-box"
                               whiteSpace= "nowrap"
                               overflow= "hidden"
                               textOverflow= "ellipsis"
                           >All</Text>
                
                        </Box>
                    </GridItem>
                    <GridItem w="100%"
                        h= "72px"
                        bg= "var(--bg-color-7,#1b234d)"
                        borderRadius="4px"
                        padding= "12px 24px"
                        fontWeight="bold"
                        boxSizing="border-box"
                        display="inline-block"
                        cursor="pointer"
                        position="relative"
                    >
                        <Box display="flex" alignItems="center">
                           <Image src="/images/bubgmobil-icon.png" borderRadius="6px" mr="10px" width="48px" height="48px"/>
                           <Text fontSize="14px" color="var(--font-color-6,hsla(0,0%,100%,.6))"
                               letterSpacing= "0"
                               lineHeight= "16px"
                               pl="16px"
                               boxSizing="border-box"
                               whiteSpace= "nowrap"
                               overflow= "hidden"
                               textOverflow= "ellipsis"
                           >PUBG MOBILE</Text>
                
                        </Box>
                    </GridItem>
            </Grid>
        </Container>
    </Box>    
    )
}
export default NewsFilterBlock;