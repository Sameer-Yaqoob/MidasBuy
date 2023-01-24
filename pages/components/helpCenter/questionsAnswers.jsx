import {
	Box,
	Flex,
	Heading,
	Divider,
	Stack,
	Button,
	Text,
} from "@chakra-ui/react";
import React,{useState,useRef, useEffect} from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// import HotEventCarousel from "./hotEventCarosel";
import {midasbuyQuestions, pubgQuestions} from "./utils/constants"
import { useSelector,useDispatch } from "react-redux";
import { getQuestionState } from "../../../data/redux/selecters";
import { onSetquestion } from "../../../data/redux/actions";
import parse from 'html-react-parser'

const QuestionAnswersBlock = () => {
    const {question} = useSelector(getQuestionState);
    const [category, setCategory]=useState(question.category);
    const [position, setPosition] = useState(question.id);
    const [questionState, setQuestionState]=useState({});
    const dispatch = useDispatch()
    console.log('sdfjkdjkdjkdjkddfdf', question)
    const handleClickQuestion = (q) => {
        setPosition(q.id);
        setQuestionState(q);    
        dispatch(onSetquestion(q));
    }
	const renderQuestions = ()=> {
        switch(category) {
            case 'midasbuy':
             return  midasbuyQuestions.map((question)=> {
               return (
                <React.Fragment>
                   <Box display="flex"
                   justifyContent="space-between"
                    border="none"
                    background="none"
                    _hover={{ background: "none", color: "white" }}
                    _focus={{ background: "none", color: "base.4" }}
                    _active={{ color: "base.4" }}
                    cursor="pointer"
                     color={position == question.id ? "base.4":"headerText"}
                     onClick={() => handleClickQuestion(question, "midasbuy")} 
                >
                    <Text w="100%"  >{question.question}</Text>
                    <ArrowForwardIcon alignSelf="center" />
                </Box>
                <Divider mt="1rem" mb="1rem" />
                </React.Fragment>
                )

                
        });
            case 'pubg':
                return pubgQuestions.map((question)=> {
                   return (
                    <React.Fragment>
                    <Box display="flex"
                    justifyContent="space-between"
                     border="none"
                     background="none"
                     _hover={{ background: "none", color: "white" }}
                     _focus={{ background: "none", color: "base.4" }}
                     _active={{ color: "base.4" }}
                     cursor="pointer"
                    
                     color={position == question.id ? "base.4":"headerText"}
                 >
                     <Text w="100%"  onClick={() =>handleClickQuestion(question)}>{question.question}</Text>
                     <ArrowForwardIcon alignSelf="center" />
                 </Box>
                 <Divider mt="1rem" mb="1rem" />
                 </React.Fragment>
                )       
            });
            default:
              return 'foo';
          }
    }
	return (
		<Flex mt="2rem" gap="10%" w="100%">
			<Box w="30%" display={{lg: "block", md:"none", sm:"none"}}>
				<Heading color="headerText" fontSize="xl">
					{category == 'midasbuy'?'About Midasbuy':'PUBG MOBILE'}
				</Heading>
				<Divider mt="1rem" mb="1rem" />
                    {renderQuestions()}
			</Box>
			<Box w={{lg:"70%", md:"100%", sm:"100%"}}>
            {parse(questionState.answer?questionState.answer:question.answer)}	
			</Box>
		</Flex>
	);
};
export default QuestionAnswersBlock;
