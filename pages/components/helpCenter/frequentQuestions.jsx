import { Container, Divider, Heading,Box, Stack,Text  } from "@chakra-ui/react";
import React from "react";
import { BsSquareFill } from "react-icons/bs";
import {MdKeyboardArrowRight} from "react-icons/md"
import Link from "next/link"
import Router from "next/router";
import { useDispatch } from "react-redux";
import { onSetquestion } from "../../../data/redux/actions";
import {midasbuyQuestions,pubgQuestions} from './utils/constants'
const FrequentQuestion = () => { 
    const dispatch = useDispatch();
    function handleClickQuestion(q) {
        Router.push({
            pathname: '/questions-answers'
        })
    dispatch(onSetquestion(q))
    }
    return (
        <Container maxW="container.xl">
            <Box mt="2rem" display="flex" flexDirection="column" gap="2">
                <Heading fontSize="xl" color="headerText" >YOU MAY WANT TO ASK</Heading>
                <Divider />
                {
                    midasbuyQuestions.map((q)=> {
                        return(
                            <React.Fragment key={q.id}>
                            <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "var(--btn-color-2,#3a7bfc)", marginTop:"5px"}} />
                            <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold" onClick={()=>handleClickQuestion(q)}>{q.question}</Text>
                            <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                            </Stack>
                            <Divider />
                            </React.Fragment> 
                        )
                    })
                    
                }
                    {
                    pubgQuestions.map((q)=> {
                        return(
                            <React.Fragment key={q.id}>
                            <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "var(--btn-color-2,#3a7bfc)", marginTop:"5px"}} />
                            <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold" onClick={()=>handleClickQuestion(q)}>{q.question}</Text>
                            <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                            </Stack>
                            <Divider />
                            </React.Fragment> 
                        )
                    })
                    
                }
               
                {/* <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "#09a0ce", marginTop:"5px"}} />
                <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold" onClick={()=>handleClickQuestion("What i can get from midasbuy?","midasbuy")}>What i can get from midasbuy?</Text>
                <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                </Stack>
                <Divider />
                <Stack flexDir="row" gap="3" alignItems="center"  cursor="pointer" _hover={{color:"white"}}><BsSquareFill size={12} style = {{transform: 'rotate(45deg)', color: "#09a0ce", marginTop:"5px"}} />
                <Text fontSize="xl" color="headerText"  _hover={{color:"white"} }    fontWeight="bold" onClick={()=>handleClickQuestion("Q: Where can I get PUBG MOBILE UC/ items?","pubg")}>Q: Where can I get PUBG MOBILE UC/ items?</Text>
                <MdKeyboardArrowRight size={30} style = {{color: "white", marginTop:"10px"}}/>
                </Stack> */}
            </Box>
        </Container>
    );
};
export default FrequentQuestion;
