import React from "react";
import {
	Box,
	Container,
	Flex,
	Text,
	Link
} from "@chakra-ui/react";
import CustomiseCarousel from "../customizeCarousel";
import { useRouter } from "next/router";
const images = [
    "/images/pubg-banner-1.jpg",
    "/images/pubg-banner2.png",
    "/images/pubg-banner3.png",
    "/images/pubg-skin.jpg",
    "/images/pubg-pack.png",
    "/images/pubg-fb-banner.jpg",
    "/images/pubg-tiktok.jpg",
    "/images/pubg-uc.png",
];
const DetailPageHeader = ()=>{

    const {pathname} = useRouter();
    console.log('dfdfd', pathname)
    return(
        <Box>
        <CustomiseCarousel images={images} />
			<Box
				w="100%"
				backgroundImage="linear-gradient(180deg,rgba(17,23,51,0),var(--bg-color-2,#111733))"
				position="absolute"
				mt="-80px"
				height="80px"
				zIndex="100"
			>
				<Container maxW="container.xl">
					<Flex gap="40px">
						<Box>
							{" "}
							<Link
								height="80px"
								background={pathname.includes('buy')&&"url(/images/bg-yellow.png) no-repeat 50%"}
								backgroundSize="100px 80px"
								bottom={0}
								display="flex"
								alignItems="center"
								_hover={{
									textDecoration: "none",
								}}
								href="/pubg-buy"
							>
								<Text
									fontSize="20px"
									fontWeight="bold"
									color={pathname.includes('buy') ? "#ffe500": "text.gray"}
									letterSpacing="1px"
									textShadow="0 2px 4px rgb(0 0 0 / 20%)"
									lineHeight="68px"
								>
									Purchase
								</Text>
							</Link>
						</Box>

						<Link
							height="80px"
							bottom={0}
							display="flex"
                            background={pathname.includes('redeem')&&"url(/images/bg-yellow.png) no-repeat 50%"}
							backgroundSize="100px 80px"
							alignItems="center"
							_hover={{
								textDecoration: "none",
							}}
							href="/pubg-redeem"
						>
							<Text
								fontSize="20px"
								fontWeight="bold"
								color={pathname.includes('redeem') ? "#ffe500": "text.gray"}
								letterSpacing="1px"
								textShadow="0 2px 4px rgb(0 0 0 / 20%)"
								lineHeight="68px"
							>
								Redeem
							</Text>
						</Link>
						<Link
							height="80px"
							bottom={0}
							display="flex"
                            background={pathname.includes('shop')&&"url(/images/bg-yellow.png) no-repeat 50%"}
							backgroundSize="100px 80px"
							alignItems="center"
							_hover={{
								textDecoration: "none",
							}}
                            href="/pubg-shop"
						>
							<Text
							fontSize="20px"
                            fontWeight="bold"
                            color={pathname.includes('shop') ? "#ffe500": "text.gray"}
                            letterSpacing="1px"
                            textShadow="0 2px 4px rgb(0 0 0 / 20%)"
                            lineHeight="68px"
							>
								Shop
							</Text>
						</Link>
						<Link
							height="80px"
							bottom={0}
							display="flex"
							alignItems="center"
							_hover={{
								textDecoration: "none",
							}}
						>
							<Text
								fontSize="20px"
								fontWeight="bold"
								color="text.gray"
								letterSpacing="1px"
								textShadow="0 2px 4px rgb(0 0 0 / 20%)"
								lineHeight="68px"
							>
								Promotions
							</Text>
						</Link>
					</Flex>
				</Container>
                </Box>
			</Box>
    )
}
export default DetailPageHeader;