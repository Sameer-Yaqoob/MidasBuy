import React,{useState} from "react";
import {
	Flex,
	Image,
	Box,
	Container,
	Text,
	Link,
	Grid,
	GridItem,
	Heading,
    Button
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "./components/layout";
import HotEventCarousel from "./components/hotEventCarosel";
// import Image from "next/image";
// import PubgBg from '../public/image/pubg-bg.png'
import {
	pubgHotEvents,
	arenaLatest,
} from "./components/helpCenter/utils/constants";
import HotEventCard from "./components/ui/hotEventCard";
import Navbar from "./components/navbar/navbar";
import Cards from 'react-credit-cards';
export default function CreditCard() {
    
    const [state, setState] = useState()
	return (
		<Flex h="100vh" flexDirection="column">
			<Navbar />
			<Box
				width="100%"
				bgColor="var(--bg-color-6,#19214b)"
				height="176px"
				position="relative"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Image
					src="/images/payment-method-heading.png"
					w="780px"
					h="40px"
				/>
			</Box>
			<Container maxW="container.xl">
				<Box
					bgColor="#fcfcfa"
					position="absolute"
					mt="-40px"
					h="500px"
					w="65%"
				>
					<Flex bgColor="#e3e3e3" h="56px" alignItems="center" pl="3%" pr="3%" gap="10%">
						<Box display="flex" gap="10px" alignItems="center">
							<Box display="flex" alignItems="center" justifyContent="center" fontSize="10px" borderRadius="50%" bgColor="#3A7BFC"  h="16px" w="16px" color="#FFFFFF">1</Box><Text color="black" fontSize="12px">Shopping</Text> <ArrowForwardIcon/>
						</Box>
                        <Box display="flex" gap="10px" alignItems="center">
							<Box display="flex" alignItems="center" justifyContent="center" fontSize="10px" borderRadius="50%" bgColor="#3A7BFC"  h="16px" w="16px" color="#FFFFFF">2</Box><Text color="black" fontSize="12px">Review pay</Text> <ArrowForwardIcon/>
						</Box>
                        <Box display="flex" gap="10px" alignItems="center">
							<Box display="flex" alignItems="center" justifyContent="center" fontSize="10px" borderRadius="50%" bgColor="#3A7BFC"  h="16px" w="16px" color="#FFFFFF">3</Box><Text color="black" fontSize="12px">Verification</Text> <ArrowForwardIcon/>
						</Box>
                        <Box display="flex" gap="10px" alignItems="center">
							<Box display="flex" alignItems="center" justifyContent="center" fontSize="10px" borderRadius="50%" bgColor="#3A7BFC"  h="16px" w="16px" color="#FFFFFF">4</Box><Text color="black" fontSize="12px">Complete</Text> 
						</Box>
					</Flex>
                    <Flex mt="10px">
                      <Box w="60%" bgColor="white" >
                       <Flex  bgColor="#e3e3e3" h="56px" p="1%" alignItems="center"  >
                        <Text fontSize="15px" color="black" fontWeight="bold"> CARD INFO</Text>
                       </Flex>
                       <Flex borderBottom="1px solid #e3e3e3" h="56px" p="1%" alignItems="center" justifyContent="space-between"  >
                       <Text fontSize="15px" color="rgba(0,0,0,0.4)" fontWeight="bold"> Supported Cards</Text>
                       <Box
									display="flex"
									gap="16px"
									alignItems="center"
									pl="35px"
									cursor="pointer"
									// position="absolute"
									
								>
									<Image
										src="/images/visa-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/master-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/amex-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/union-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/diner-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/discover-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
									<Image
										src="/images/jcb-icon.png"
										w={{lg:"50px", md:"30px", sm:"30px"}}
										h={{lg:"30px", md:"20px", sm:"20px"}}
									/>
								</Box>
                       </Flex>
                      </Box>
                    </Flex>
				</Box>
			</Container>
		</Flex>
	);
}
