import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import {
	Box,
	Container,
	Flex,
	Text,
	Image,
	Heading,
	Button,
	InputGroup,
	Input,
	OrderedList,
	ListItem,
    Icon,
} from "@chakra-ui/react";
import {GiSpeaker} from 'react-icons/gi'
import DetailPageHeader from "./components/ui/detailPageHeader";

export default function PubgRedeem() {

	return (
		<Layout>
			<DetailPageHeader/>
			<Container maxW="container.md">
				<Flex mt="70px">
					<Box w="50%">
						<Text
							color="text.gray"
							fontSize="12px"
							lineHeight="22px"
						>
							Sign in or sign up a Midasbuy account to view
							redemption rewards.
						</Text>
					</Box>
					<Box w="50%">
						<Button colorScheme="messenger" w="100%">
							Sign in/Sign up
						</Button>
					</Box>
				</Flex>
				<Box mt="70px" dispalay="flex" flexDirection="column">
					<Heading as="h3" size="sm" color="#fff" mb="24px">
						Redeem gifts
					</Heading>
					<InputGroup
						borderRadius="none"
						alignSelf="center"
						mb="40px"
					>
						<Input
							type="tel"
							placeholder="Please enter a redeem code"
							fontSize="14px"
							textColor="headerText"
							bg="var(--bg-color-5,#192045)"
							borderRadius="none"
							boxSizing="border-box"
							_hover={{
								border: "1px solid hsla(0,0%,100%,.1)",
							}}
							_focus={{
								border: "1px solid hsla(0,0%,100%,.1)",
							}}
							h="50px"
							variant="filled"
							outline="1px solid hsla(0,0%,100%,.1)"
						/>
					</InputGroup>
					<Flex justifyContent="center">
						<Button colorScheme="messenger" w="50%">
							Ok
						</Button>
					</Flex>
				</Box>
				<Flex
					mt="40px"
					color="text.gray"
					fontSize="12px"
					lineHeight="20px"
                    mb="20px"
				>
					<Text mr="10px">Reminder:</Text>
					<OrderedList>
						<ListItem>Get corresponding items immediately after redemption.</ListItem>
						<ListItem> Redemption code can only be used once.</ListItem>
					</OrderedList>
				</Flex>
                <Flex
                bgImage="linear-gradient(141deg,#ff9009,#ffb200 94%)"
                border="1px solid #ffb200"
                position="fixed"
                top="422px"
                right="0px"
                height="36px"
                lineHeight="36px"
                pr="12px"
                w="344px"
                borderTopLeftRadius="4px"
                borderBottomLeftRadius="4px"
                color="white"
                >
              <Image src="/images/uc-announce-icon.png" h="49px" position="absolute" right="0px" bottom="0px"/>
               <Icon h="25px" w="25px" position="absolute" zIndex={100} color="white" left="12px" top="15%"  as={GiSpeaker}/>
           
               <Box overflow="hidden" w="100%" h="36px"pr="70px" fontSize="12px" fontWeight="bold" pl="30px" display="flex" alignItems="center" whiteSpace="no-wrap">
               <marquee behavior="scroll" direction="left">Check to buy the redeem code!</marquee>
               </Box>
               
                </Flex>
			</Container>
		</Layout>
	);
}
