import React from "react";
import {
	Flex,
	Image,
	Box,
	Container,
	Text,
	Link,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "./components/layout";
import HotEventCarousel from "./components/helpCenter/hotEventCarosel";
// import Image from "next/image";
// import PubgBg from '../public/image/pubg-bg.png'
export default function PubgDetail() {
	return (
		<Flex h="100vh">
			<Layout>
				<Flex
					// background="var(--bg-color-3,#141b3d)"
					h="200px"
					bgImage="url(/images/pubg-bg.png)"
					opacity={2}
				>
					<Flex
						h="200px"
						w="100%"
						background="linear-gradient(180deg,rgba(20,27,61,0),var(--bg-color-3,#141b3d))"
						bgPosition="center"
						bgRepeat="no-repeat"
					>
						<Container maxW="container.xl" textAlign="center">
							<Box
								w="100%"
								display="flex"
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
								h="200px"
								marginBottom="32px"
							>
								<Image
									src="/images/pubg-mobile.png"
									width={34}
									height={34}
									marginBottom="12px"
								/>
								<Text
									fontSize="32px"
									color="white"
									letterSpacing="0"
									lineHeight="24px"
									marginBottom="24px"
									fontWeight="bold"
								>
									PUBG MOBILE
								</Text>
								<Link
									href="https://www.pubgmobile.com/"
									fontWeight="bold"
									color="var(--btn-color-2,#3a7bfc)"
									target="_blank"
									id="homepage-website"
								>
									<Text fontSize="16px" >
										Official Website <ChevronRightIcon />
									</Text>{" "}
								</Link>
								<Box
									w="100%"
									display="flex"
									justifyContent="end"
									marginTop="-100px"
								>
									<Link
										href="https://www.pubgmobile.com/"
										fontWeight="bold"
										target="_blank"
										fontFamily="dinm"
									>
										<Image
											src="/images/game-download.png"
											width="58px"
											height="58px"
											position="absolute"
											marginTop="0"
										/>
									</Link>
								</Box>
							</Box>
						</Container>
					</Flex>

					{/* <Image src="/images/pubg-shades.png" width="100%"height={100}/> */}
				</Flex>
				<Container maxW="container.xl">
					<Box margin={0} minH="calc(100vh - 458px)"  w="100%">
						<Grid
							margin="24px auto 44px"
							color="transparent"
							templateColumns="repeat(4, 1fr)"
							alignItems="center"
							gap={6}
							bg="url(/images/bg-shades.png)"
							bgPosition="center"
							bgRepeat="no-repeat"
                            padding="24px 0 24px 0"
						>
							<GridItem
								border="2px solid #f9ca47"
								backgroundSize="cover"
								boxSizing="border-box"
								w="100%"
								h="70px"
                                backgroundImage="linear-gradient(-89deg,#a8762a 12%,#e3a83d 68%)"
								
								bgPosition="cover"
								bgRepeat="no-repeat"
							>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									width="100%"
									height="100%"
									bg="url(/images/paint-block.png)"
                                    border="none"
                                    outline="none"
								>
									{" "}
									<Text
										fontSize="16px"
										fontWeight="bold"
                                        color= "#fff"
                                        letterSpacing= "1px"
                                        lineHeight="70px"
                                        textShadow="0 2px 1px rgb(0 0 0 / 20%)"
                                        pl= "24px"
									>
										{" "}
										Purchase
									</Text>{" "}
									<Image
										src="/images/purchase.png"
										width="70px"
										height="70px"
										mt="-25px"
									/>
								</Box>
							</GridItem>
                            <GridItem
								border="2px solid #fc5761"
								backgroundSize="cover"
								boxSizing="border-box"
								w="100%"
								h="70px"
                                backgroundImage="linear-gradient(90deg,#b7524e 25%,#8a3330 78%)"
								bgPosition="cover"
								bgRepeat="no-repeat"
							>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									width="100%"
									height="100%"
									bg="url(/images/paint-block.png)"
                                    border="none"
                                    outline="none"
								>
									{" "}
									<Text
										fontSize="16px"
										fontWeight="bold"
                                        color= "#fff"
                                        letterSpacing= "1px"
                                        lineHeight="70px"
                                        textShadow="0 2px 1px rgb(0 0 0 / 20%)"
                                        pl= "24px"
									>
										{" "}
										Redeem
									</Text>{" "}
									<Image
										src="/images/redeam.png"
										width="70px"
										height="70px"
										mt="-25px"
									/>
								</Box>
							</GridItem>
                            <GridItem
								border="2px solid #48a3b6"
								backgroundSize="cover"
								boxSizing="border-box"
								w="100%"
								h="70px"
                                backgroundImage="linear-gradient(90deg,#438fb5 23%,#295881)"
								
								bgPosition="cover"
								bgRepeat="no-repeat"
							>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									width="100%"
									height="100%"
									bg="url(/images/paint-block.png)"
                                    border="none"
                                    outline="none"
								>
									{" "}
									<Text
										fontSize="16px"
										fontWeight="bold"
                                        color= "#fff"
                                        letterSpacing= "1px"
                                        lineHeight="70px"
                                        textShadow="0 2px 1px rgb(0 0 0 / 20%)"
                                        pl= "24px"
									>
										{" "}
										Shop
									</Text>{" "}
									<Image
										src="/images/shop.png"
										width="70px"
										height="70px"
										mt="-25px"
									/>
								</Box>
							</GridItem>
                            <GridItem
								border="2px solid #4cafc0"
								backgroundSize="cover"
								boxSizing="border-box"
								w="100%"
								h="70px"
                                backgroundImage="linear-gradient(-89deg,#134e6c 12%,#4782a0 68%)"
								
								bgPosition="cover"
								bgRepeat="no-repeat"
							>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									width="100%"
									height="100%"
									bg="url(/images/paint-block.png)"
                                    border="none"
                                    outline="none"
								>
									{" "}
									<Text
										fontSize="16px"
										fontWeight="bold"
                                        color= "#fff"
                                        letterSpacing= "1px"
                                        lineHeight="70px"
                                        textShadow="0 2px 1px rgb(0 0 0 / 20%)"
                                        pl= "24px"
									>
										{" "}
										Promotions
									</Text>{" "}
									<Image
										src="/images/promotion.png"
										width="70px"
										height="70px"
										mt="-25px"
									/>
								</Box>
							</GridItem>
						</Grid>
                        <HotEventCarousel/>
                        {/* <HotEventCarousel/> */}
					</Box>
				</Container>
			</Layout>
		</Flex>
	);
}
