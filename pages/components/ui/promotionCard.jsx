import React from 'react';
import { Card, CardBody, CardFooter, Image,Button,Text,Link,Heading,Divider } from '@chakra-ui/react'




const PromotionCard = ({image})=> {
    return(
<Card maxW='sm' w="100%" position="relative" >
  <CardBody p={0}>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      width="100%" heigth="450px"
    /> 
    <Text position="absolute" top={0} left={0} color="white" bg="base.4" p="5px">Ends in 12-01-2023</Text>
  </CardBody>
  <CardFooter display="flex" flexDirection="column" bg="base.2"  _hover={{ bg: "base.3", color: "brand.blue" }} >
     <Text noOfLines={1}  fontSize="sm" color="white" maxWidth="100%" >
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