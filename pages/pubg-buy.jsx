import React, { useState, useEffect } from "react";
import CustomiseCarousel from "./components/customizeCarousel";
import Layout from "./components/layout";
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
import { MdHelpOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import ProductCard from "./components/ui/productCard";
import ProductPriceTooltip from "./components/ui/productPriceTooltip";
import DetailPageHeader from "./components/ui/detailPageHeader";

const products = [
    { id: "1", image: "/images/uc-main.png", price: 0.99 },
    { id: "2", image: "/images/uc-main.png", price: 2.99 },
    { id: "3", image: "/images/uc-main.png", price: 3.99 },
    { id: "4", image: "/images/uc-main.png", price: 4.99 },
    { id: "5", image: "/images/uc-main.png", price: 5.99 },
];

export default function PubgBuy() {
	const [paymentHover, setPaymentHover] = useState(false);
	const [clientWindowHeight, setClientWindowHeight] = useState();
	const [active, setActive] = useState("1");
    const [activePrice, setActivePrice] = useState(products[0].price);
    const [activePaymentMethod, setActivePaymentMethod] = useState("credit")
	const handleActive = (id,price) => {
		setActive(id);
        setActivePrice(price)
	};
	const listenScrollEvent = e => {
      
        setClientWindowHeight(window.scrollY);
      }
	useEffect(() => {
        window.addEventListener('scroll',listenScrollEvent)
        return ()=> removeEventListener('scroll',listenScrollEvent)
	}, [window.scrollY]);

	
	const onMouseEnterHandler = () => {
		setPaymentHover(true);
	};
	const onMouseLeaveHandler = () => {
		setPaymentHover(false);
	};
	return (
		<Layout>
		<DetailPageHeader/>
			<Box mt="48px" mb="48px" w="100%" h="auto">
				<Container maxW="container.xl">
					<Flex
						bgImage="url(/images/bg-purchase-header.webp)"
						cursor="pointer"
						minH="60px"
						bgColor="var(--bg-color-3,#141b3d)"
						bgRepeat="no-repeat"
						// boxSize="border-box"
						bgSize="100% 100%"
						mb="50px"
						borderRadius="4px"
						alignItems="center"
						flexWrap="wrap"
						position="relative"
					>
						<Image
							position="absolute"
							mt="-10px"
							ml="27px"
							backgroundSize="contain"
							overflow="clip"
							aspectRatio="auto 78 / 78"
							src="/images/pubg-girl.webp"
							w="78px"
							h="78px"
						/>
						<Flex ml="100px" flexWrap="wrap">
						<Text
							
							mr="16px"
							fontSize="14px"
							fontWeight="bold"
							lineHeight="22px"
							letterSpacing={2}
							color="hsla(0,0%,100%,.7490196078431373)"
						>
							Season Purchase bonus
						</Text>
						<Text
							mr="16px"
							fontSize="14px"
							fontWeight="bold"
							lineHeight="22px"
							letterSpacing={2}
							color="white"
						>
							Season Purchase bonus
						</Text>
						<Box
							p="3px 8px"
							display="inline-block"
							borderRadius="100px"
							opacity={1}
							color="white"
							fontSize="12px"
							lineHeight="16px"
							background="linear-gradient(135deg, rgb(240, 170, 99) 0%, rgb(235, 124, 84) 100%)"
						>
							<Text lineHeight="16px">Go</Text>
						</Box>
						</Flex>

					
					</Flex>
					<Flex alignItems="center" mb="20px">
						<Heading as="h3" size="sm" color="white" mr="14px">
							Player ID Verification
						</Heading>
						<Box color="text.gray">
							{" "}
							<MdHelpOutline size="25" />
						</Box>
					</Flex>
					`{" "}
					<Stack direction="row" spacing={0} w={{lg:"50%", md:"100%", sm:"100%"}} mb="70px">
						<InputGroup borderRadius="none" alignSelf="center">
							<Input
								type="tel"
								placeholder="Please enter Player ID"
								fontSize="14px"
								borderRight="none"
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
						<Button
							color="white"
							h="50px"
							bg="var(--btn-color-2,#3a7bfc)"
							borderRadius="none"
                            _hover = {{bg:"var(--btn-color-2,#3a7bfc)"}}
                            _focus = {{bg:"var(--btn-color-2,#3a7bfc)"}}
						>
							Submit
						</Button>
					</Stack>
					`
					<Heading as="h3" size="sm" color="white" mb="20px">
						Payment Method
					</Heading>
					<Flex gap="16px" mb="70px" flexDirection={{lg:"row", md:"column", sm:"column"}}>
						<Box w={{lg:"50%", md:"100%", sm:"100%"}} cursor="pointer" position="relative">
							<Box
								w="100%"
								h="80px"
								bg="var(--bg-color-5,#192045)"
								position="relative"
								display="flex"
								alignItems="center"
								onMouseEnter={onMouseEnterHandler}
								onMouseLeave={onMouseLeaveHandler}
                                border={activePaymentMethod == "credit" && "1px solid #1986fe"}
                                onClick={()=> setActivePaymentMethod('credit')}
							>
								<Box
									display="flex"
									alignItems="center"
									opacity="1"
									color="#fff"
									fontSize="12px"
									position="absolute"
									gap="5px"
									h="18px"
									borderRadius="0 0 0 4px"
									bg="linear-gradient(135deg,#f2b818,#f26c3d)"
									p="7px"
									lineHeight="18px"
									right={0}
									top={0}
								>
									<AiFillLike size="10" />{" "}
									<Text>Recommend</Text>
								</Box>
								<Image
									position="absolute"
									left={0}
									top={0}
									src="/images/corner-tick.svg"
                                    display={activePaymentMethod == "credit" ? "block": "none"}
								/>
								<Image
									src="/images/credit-card.png"
									h="40px"
									ml="35px"
									mr="35px"
								/>
								<Box>
									<Text
										lineHeight="16px"
										fontSize="14px"
										color="#fff"
										opacity="1"
									>
										Credit / Debit / Prepaid Card
									</Text>
									<Text
										mt="8px"
										lineHeight="16px"
										fontSize="12px"
										color="#fad457"
										opacity="1"
										display="flex"
									>
										<Image
											src="/images/fire-icon.png"
											w="9px"
											h="12px"
											mr="7px"
										/>
										Credit / Debit / Prepaid Card
									</Text>
								</Box>
							</Box>
							{paymentHover && (
								<Box
									display="flex"
									gap="16px"
									alignItems="center"
									bg="var(--bg-color-5,#192045)"
									h="80px"
									pl="35px"
									cursor="pointer"
									// position="absolute"
									w="100%"
								>
									<Image
										src="/images/visa-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/master-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/amex-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/union-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/diner-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/discover-icon.png"
										w="50px"
										h="30px"
									/>
									<Image
										src="/images/jcb-icon.png"
										w="50px"
										h="30px"
									/>
								</Box>
							)}
						</Box>
						<Box
							w={{lg:"50%", md:"100%", sm:"100%"}}
							h="80px"
							bg="var(--bg-color-5,#192045)"
							position="relative"
							display="flex"
							alignItems="center"
                            border={activePaymentMethod == "razer" && "1px solid #1986fe"}
                            onClick={()=> setActivePaymentMethod('razer')}
						>
							<Image
								position="absolute"
								left={0}
								top={0}
								src="/images/corner-tick.svg"
                                display={activePaymentMethod == "razer" ? "block": "none"}
							/>
							<Image
								src="/images/razer-gold-icon.png"
								h="40px"
								ml="35px"
								mr="35px"
							/>
							<Box>
								<Text
									lineHeight="16px"
									fontSize="14px"
									color="#fff"
									opacity="1"
								>
									Razer Gold
								</Text>
							</Box>
						</Box>
					</Flex>
					<Heading
						as="h3"
						size="sm"
						color="white"
						mb="20px"
						mt="20px"
					>
						Select Product
					</Heading>
					<Flex
						minH="38px"
						gap="16px"
						lineHeight="38px"
						backgroundImage="linear-gradient(180deg,rgba(201,140,101,.15),rgba(176,103,69,.15))"
						font-size="12px"
						color="#f3b583"
						letterSpacing="0"
						overflow="hidden"
						alignItems="center"
						mb="20px"
					>
						<Image
							src="images/vip-icon.png"
							w="47px"
							ml="16px"
							h="19px"
						/>
						<Flex flexWrap="wrap">
						<Text noOfLines={1}>
							You can become VIP immediatly after finishing this payment.
						</Text>
						<Text textDecoration="underline">
							Win VIP Lucky Draw Prizes
						</Text>
						</Flex>
						
					</Flex>
					<Grid
						gap={3}
						w="100%"
						templateColumns={{
							lg: "repeat(4, 1fr)",
							md: "repeat(3, 1fr)",
							sm: "repeat(1, 1fr)",
						}}
						position="relative"
						mb="30px"
					>
						{products.map((product, index) => {
							return (
								<GridItem w="100%" key={index}>
									<ProductCard
										product={product}
										active={active}
										handleActive={handleActive}
									/>
								</GridItem>
							);
						})}
					</Grid>
					<Flex
						border="1px solid hsla(0,0%,100%,.1)"
						bottom="0!important"
						background="var(--bg-color-3,#141b3d)"
						padding="16px"
						boxSizing="border-box"
						gap="48px"
						justifyContent="flex-end"
                        w="100%"
                        display={clientWindowHeight > 1015 ? "inline-flex": 'none'}
					>
						<Box>
							<Flex alignItems="center" h="20px">
								<Text fontSize="14px" color="#fff" mr="8px">
									{" "}
									Total :
								</Text>
								<Text
									fontSize="16px"
									fontWeight="bold"
									color="white"
								>
										{activePrice + ' ' + 'USD'} 
								</Text>
							</Flex>
                            <Tooltip hasArrow placement="top" label={<ProductPriceTooltip />} bg='var(--bg-color-4,#171f45)' w="436px" p="32px 24px 24px">
							<Flex
								alignItems="center"
								h="20px"
								mt="5px"
								color="#fff"
							>
								<Text fontSize="14px" color="#fff" mr="8px">
									Loyality Points
								</Text>
								<Image
									src="/images/loyality-icon.png"
									w="12px"
									h="12px"
									mr="8px"
								/>
								<Text fontSize="14px" color="#fff" mr="8px">
									3679
								</Text>
								<MdInfoOutline />
							</Flex>
                            </Tooltip>
						</Box>
						<Box
							h="46px"
							w="152px"
							background="var(--bg-color-9,#293052)"
							color="var(--font-color-5,hsla(0,0%,100%,.4))"
							letterSpacing="1px"
							fontSize="14px"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Text>Pay now</Text>
						</Box>
					</Flex>
					<Flex
						width="100%"
						background="var(--bg-color-1,#0b1339)"
						padding="17px 0"
						position={"fixed"}
						left={0}
						bottom={0}
						zIndex="500"
						h="100px"
                        alignItems="center"
                        display={clientWindowHeight < 1015 ? "inline-flex": 'none'}
					>
						<Container maxW="container.xl">
						<Flex
						// bottom="0!important"
						padding="16px"
						boxSizing="border-box"
						gap="48px"
						justifyContent="flex-end"
					>
						<Box>
							<Flex alignItems="center" h="20px">
								<Text fontSize="14px" color="#fff" mr="8px">
									{" "}
									Total :
								</Text>
								<Text
									fontSize="16px"
									fontWeight="bold"
									color="white"
								>
									{activePrice + ' ' + 'USD'} 
								</Text>
							</Flex>
                            <Tooltip hasArrow placement="top" label={<ProductPriceTooltip/>} bg='var(--bg-color-4,#171f45)' w="436px" p="32px 24px 24px">
							<Flex
								alignItems="center"
								h="20px"
								mt="5px"
								color="#fff"
							>
								<Text fontSize="14px" color="#fff" mr="8px">
									Loyality Points
								</Text>
								<Image
									src="/images/loyality-icon.png"
									w="12px"
									h="12px"
									mr="8px"
								/>
								<Text fontSize="14px" color="#fff" mr="8px">
									3679
								</Text>
								<MdInfoOutline />
							</Flex>
                            </Tooltip>
						</Box>
						<Box
							h="46px"
							w="152px"
							background="var(--bg-color-9,#293052)"
							color="var(--font-color-5,hsla(0,0%,100%,.4))"
							letterSpacing="1px"
							fontSize="14px"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Text>Pay now</Text>
						</Box>
					</Flex>						</Container>
					</Flex>
				</Container>
			</Box>
		</Layout>
	);
}
