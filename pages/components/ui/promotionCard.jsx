import React from 'react';
import { Card, CardBody, CardFooter, Image,Button,Text,Link,Heading,Divider,Flex } from '@chakra-ui/react'
import moment from 'moment/moment';




const PromotionCard = ({promotion,badge})=> {
    return(
<Card w="100%" h="" position="relative" >
  <CardBody p={0} >
    <Image
      src={`http://172.20.17.206:3000/${promotion.image}`}
      alt='Green double couch with wooden legs'
      height= {badge?"181px":"98px"}
      botom={0}
      width="100%"
    /> 
    {badge && <Flex 
    position="absolute"
    right="-8px"
    top="11px"
    bg="var(--btn-color-2,#3a7bfc)"
    fontSize="12px"
    color="#fff"
    textAlign="center"
    alignItems="center"
    >
     <Text m="3px">$9.99 UC</Text> 
      <Image src="/images/promo-badge-left.png" position="absolute" left="-4px" top="0px" w="4px" h="24px"/>
      <Image src="/images/promo-badge-right.png" position="absolute" right="0px" bottom="-4px"  w="8px" h="4px"/>
      </Flex>}
    {promotion.ends_at &&<Text position="absolute"  left={0} top={0} color="white" bg="base.4" p="8px">{"Ends in " + " " + moment(promotion.ends_at).format('YYYY-MM-DD')}</Text>}
  </CardBody>
  <CardFooter display="flex" flexDirection="column"  bg="var(--bg-color-8,#1d2657)"   _hover={{ bg: "var(--bg-color-15,#324499)", color: "brand.blue" }} >
     <Text noOfLines={1}  fontSize="14px" lineHeight={badge && "64px"} fontWeight="bold" color="white" maxWidth="100%" >
      {promotion.title}     
      </Text>
      <Text fontSize="sm" color="gray">
      {'Midasbuy' + ' ' + moment(promotion.startDate).format('YYYY-MM-DD')}
      </Text>
  </CardFooter>
</Card>
    )
}
export default PromotionCard;