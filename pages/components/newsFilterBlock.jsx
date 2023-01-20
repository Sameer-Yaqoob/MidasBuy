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
            <Flex  gap={10} w={{lg:"70%",sm:"100%", md:'100%'}} justifyContent={{lg:'flex-start', md:'flex-start', sm:'center'}} position="relative" flexWrap="wrap">
                    <Box w="280px"
                        h= "120px"
                        // bg= "var(--bg-color-7,#1b234d)"
                        borderRadius="4px"
                        bg="url(/images/bg-active.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        padding= "12px 24px"
                        // boxSizing="border-box"
                        display="flex"
                        cursor="pointer"
                        position="relative"
                    >
                        <Box display="flex" alignItems="center" ml="16px">
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
                    </Box>
                    <Box w="280px"
                        h= "120px"
                        bg= "var(--bg-color-7,#1b234d)"
                        borderRadius="4px"
                        padding= "12px 24px"
                        fontWeight="bold"
                        boxSizing="border-box"
                        display="flex"
                        cursor="pointer"
                        position="relative"
                    >
                        <Box display="flex" alignItems="center" ml="16px">
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
                    </Box>
            </Flex>
        </Container>
    </Box>    
    )
}
export default NewsFilterBlock;