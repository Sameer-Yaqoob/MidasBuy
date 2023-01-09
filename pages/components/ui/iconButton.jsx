import React from 'react';
import { Button, IconButton,Text,Box,Flex} from '@chakra-ui/react'


const Iconbutton = ({text,icon})=> {
    return(
        <Box display="flex" color="white"  p="1rem" h="80px" w="100%"  bg="var(--bg-color-8,#1d2657)" >
        <IconButton
        variant='outline'
        aria-label='Call Sage'
        _hover="none"
        fontSize='20px'
        mr="1rem"
        icon={icon}>
       
     </IconButton>
     <Text color="white" alignSelf="center">{text}</Text>
     </Box>
    )
}
export default Iconbutton;