import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import {
	Box,
	Container,
	Flex,
	Text,
	Image,
	Button,
	Card,
	CardBody,
	CardFooter,
	Grid,
	GridItem,
	Link,
    Heading
} from "@chakra-ui/react";
import DetailPageHeader from "./components/ui/detailPageHeader";
export default function BubgBuy() {
	return (
		<Layout>
			<DetailPageHeader />
			<Container maxW="container.xl" pt="48px">
				<Flex gap="10px" mb="24px">
					<Box
						fontSize="12px"
						p="6px 16px"
						borderRadius="14px"
						lineHeight="16px"
						color="#fff"
						bg="var(--btn-color-3,#3a7bfc)"
						boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
					>
						<Text>All</Text>
					</Box>
					<Box
						fontSize="12px"
						p="6px 16px"
						borderRadius="14px"
						lineHeight="16px"
						color="#fff"
						bg="hsla(0,0%,100%,.25)"
						// boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
					>
						<Text>Weekly</Text>
					</Box>
					<Box
						fontSize="12px"
						p="6px 16px"
						borderRadius="14px"
						lineHeight="16px"
						color="#fff"
						bg="hsla(0,0%,100%,.25)"
						// boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
					>
						<Text>Roya-Pass</Text>
					</Box>
					<Box
						fontSize="12px"
						p="6px 16px"
						borderRadius="14px"
						lineHeight="16px"
						color="#fff"
						bg="hsla(0,0%,100%,.25)"
						// boxShadow="inset 0 0 4px hsl(0deg 0% 100% / 15%), 0 0 8px rgb(58 123 252 / 60%)"
					>
						<Text>UC</Text>
					</Box>
				</Flex>
				<Grid
					gap={3}
					w="100%"
					templateColumns={{
						lg: "repeat(4, 1fr)",
						md: "repeat(3, 1fr)",
						sm: "repeat(2, 1fr)",
					}}
					position="relative"
				>
					<Link href="/" _hover={{ textDecoration: "none" }}>
						<GridItem w="100%">
							<Card maxW="sm" w="100%" >
								<CardBody p={0} position="relative" overflow="hidden">
									<Image
										src="/images/pubg-royapass-banner.png"
										alt="Green double couch with wooden legs"
										// width="100%"
										// heigth="100%"
                                        transition= "width 1s, height 1s"
                                        _hover={{
                                            w:"300px",
                                            h:"300px"
                                        }}
									/>
									<Flex
										top={0}
										right={0}
										h="24px"
										fontSize="16px"
										fontWeight="bold"
										color="#514008"
                                        position="absolute"
									>
										<Image src="/images/arrow-border.png" w="12px" />
										<Box
											p="0 10px 0 5px"
											w="100%"
											// bgImage="linear-gradient(270deg,#ffd547,#eed47d 98%)"
                                            bg="#e9c035"
											textAlign="center"
										>
											<Text>1 Purchase Only</Text>
										</Box>
									</Flex>
                                    <Image src="/images/eyes-corner.png" w="32px" h="32px" position="absolute" top={0} left={0}/>
                                    <Flex w="100%"
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    bgImage="linear-gradient(-3deg,#35536f,#5d88aa)"
                                    boxShadow="inset 0 1px #a1c0d7, inset 0 0 7px rgb(110 217 255 / 41%)"
                                    h="27px"
                                    lineHeight="27px"
                                    gap="10px"
                                    
                                    >
                                     <Image src="/images/royapass-footer-image.png" w="48px" h="36px" position="absolute" bottom="0px" left="12px"/>
                                     <Text fontSize="14px"  color="#e7f8ff" pl="80px" fontWeight="bold" letterSpacing={1}
                                         overflow= "hidden"
                                         whiteSpace= "nowrap"
                                         textOverflow= "ellipsis"
                                     >UP TO 140UC BONUS</Text>
                                    </Flex>
								</CardBody>
								<CardFooter
									display="flex"
									bg="var(--bg-color-8,#1d2657)"
									_hover={{
										bg: "var(--bg-color-15,#324499)",
										color: "brand.blue",
									}}
								>
									<Box>
                                        <Heading as="h3" size="sm" color="#fff">RP Upgrade Pack (M19)</Heading>
                                        <Heading as="h3" size="sm" color="#ffe55b" mt="50px">900 PKR</Heading>
                                    </Box>
								</CardFooter>
							</Card>
						</GridItem>
					</Link>
					<Link href="/">
						<GridItem w="100%">k</GridItem>
					</Link>
					<Link href="/">
						<GridItem w="100%">k</GridItem>
					</Link>
				</Grid>
			</Container>
		</Layout>
	);
}