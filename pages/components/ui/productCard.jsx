import React,{useState} from "react";
import {
    Box,
    Container,
    Flex,
    Text,
    Link,
    Image,
    Heading,
    Stack,
    InputGroup,
    Input,
    Button,
    Tooltip,
    Grid,
    GridItem,
  } from "@chakra-ui/react";
const ProductCard = ({product, active, handleActive})=> {
   
    return(
        <Flex
        direction="column"
        position="relative"
        p="44px 16px 14px"
        h="326px"
        boxSizing="border-box"
        bg="var(--bg-color-6,#19214b)"
        border={active == product.id && "1px solid #1986fe"}
        onClick = {()=> handleActive(product.id,product.price)}
      >
        <Image
          position="absolute"
          left={0}
          top={0}
          src='/images/corner-tick.svg'
          display={active == product.id ? 'block': 'none'}
        />
        <Flex h="24px" justifyContent="center" alignItems="center">
          <Image src="/images/uc-icon.png" w="24px" h="24px" />
          <Text
            fontSize="24px"
            color="#fff"
            display="inline-block"
            position="relative"
            pl="5px"
            fontWeight="bold"
          >
            {product.price}
          </Text>
          <Text
            fontSize="24px"
            color="#ebbe4a"
            display="inline-block"
            position="relative"
            pl="5px"
            fontWeight="bold"
          >
           { '+' + product.bonus}
          </Text>
        </Flex>

        <Flex
          p="16px"
          h="180px"
          w="100%"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Image
            position="absolute"
            src={`http://172.20.17.206:3000/${product.image}`}
            w="70%"
            maxW="100%"
            zIndex="100"
          />
          <Image
            position="absolute"
            src="/images/bg-highlight.png"
            w="100%"
            maxW="100%"
            display={active == product.id ? 'block': 'none'}
          />
        </Flex>
        { product.product_type == 'One time' && <Flex h="24px" justifyContent="center" alignItems="center">
          <Image src="/images/yellow-star.png" w="12px" h="12px" />
        
          <Text
            fontSize="12px"
            color="#ebbe4a"
            display="inline-block"
            pl="5px"
            fontWeight="bold"
          >
            One Purchase Only
          </Text>
        </Flex>}
        <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
            <Text
            ontSize="20px"
            color= "#fff"
            fontWeight="bold"
            letterSpacing= "-.67px"
            >
            { product.price + ' ' + 'USD' }
            </Text>
        </Flex>
      </Flex>
    )
}
export default ProductCard;