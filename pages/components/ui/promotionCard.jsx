import React from 'react';
import { Card, CardBody, CardFooter, Image,Button,Text,Link,Heading,Divider } from '@chakra-ui/react'




const PromotionCard = ({image})=> {
    return(
<Card maxW='sm' w="100%" h="" position="relative" >
  <CardBody p={0}>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      height= "98px"
      width="100%"
    /> 
    <Text position="absolute" top={0} left={0} color="white" bg="base.4" p="5px">Ends in 12-01-2023</Text>
  </CardBody>
  <CardFooter display="flex" flexDirection="column"  bg="var(--bg-color-8,#1d2657)"   _hover={{ bg: "var(--bg-color-15,#324499)", color: "brand.blue" }} >
     <Text noOfLines={1}  fontSize="14px" fontWeight="bold" color="white" maxWidth="100%" >
      Register on Midasbuy to get a free PUBG MOBILE skin!     
      </Text>
      <Divider/>
      <Text fontSize="sm" color="gray">
      Midasbuy 2022-09-28  
      </Text>
  </CardFooter>
</Card>
    )
}
export default PromotionCard;