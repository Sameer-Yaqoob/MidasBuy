import React from 'react';
import { Card, CardBody, CardFooter, Image,Button } from '@chakra-ui/react'




const ImageCard = ({image,linkText})=> {
    return(
<Card maxW='sm' w="100%" position="relative" >
  <CardBody p={0}>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      width="100%" heigth="450px"
    /> 
  </CardBody>
  <CardFooter display="flex" bg="var(--bg-color-8,#1d2657)"  _hover={{ bg: "var(--bg-color-15,#324499)", color: "brand.blue" }} justify="center" h="30px">
      <Button variant='link' color='headerText'>
        {linkText}
      </Button>
  </CardFooter>
</Card>
    )
}
export default ImageCard;