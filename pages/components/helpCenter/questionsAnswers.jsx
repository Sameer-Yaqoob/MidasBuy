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
import HotEventCarousel from "./hotEventCarosel";
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
			<Box w="30%">
				<Heading color="headerText" fontSize="xl">
					{category == 'midasbuy'?'About Midasbuy':'PUBG MOBILE'}
				</Heading>
				<Divider mt="1rem" mb="1rem" />
                    {renderQuestions()}
			</Box>
			<Box w="70%">
            {parse(questionState.answer?questionState.answer:question.answer)}
				{/* <Heading color="headerText" fontSize="xl">
					What is Midasbuy
				</Heading>
				<Text color="headerText" mt="1rem">
					Midasbuy is a global top-up center for games, videos and
					more. It offers safe and competitive top-up services, and
					currently supports more than 100 localized payment methods
					in 58 countries/ regions.
				</Text>
				<Text color="headerText" mt="1rem">
					Midasbuy is now collaborating with many popular games and
					entertainments such as PUBG Mobile, Arena of Valor and WeTV
					to provide better payment options for users around the
					world.
				</Text>
				<Divider mt="1rem" mb="1rem" />
				<Heading color="headerText" fontSize="xl" mb="1rem">
					Hot Events
				</Heading>
				<HotEventCarousel /> */}
			</Box>
		</Flex>
	);
};
export default QuestionAnswersBlock;
