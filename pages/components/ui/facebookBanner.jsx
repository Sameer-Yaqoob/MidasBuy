import React from "react";
import { Box, Image, Text,Link, textDecoration } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
// import Image from "next/image"
export const FacebookBanner = () => {
	return (
        <Link textDecoration="none" _hover={{textDecoration: "none"} }href="https://www.facebook.com/midasbuy">
		<Box display="flex">
			<Box
				display="flex"
				bgImage="linear-gradient(180deg,var(--btn-color-4,#19aeff),var(--btn-color-5,#0062e0));"
				color="white"
				alignItems="center"
				h="30px"
                pr="5px"
			>
				<Image
					borderRight="1px solid white"
					src="/images/fb-logo.png"
					width="30px"
					height="20px"
				/>{" "}
				<Text ml="5px" mr="5px" color="white" fontSize="14px">
					Follow
				</Text>{" "}
				<AiFillLike />{" "}
			</Box>
		</Box>
        </Link>
	);
};
