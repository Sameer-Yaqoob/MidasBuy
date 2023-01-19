import { Flex, Heading, Box, Text, Image, Icon } from "@chakra-ui/react";
import React from "react";
import { MdInfoOutline } from "react-icons/md";
import {InfoOutlineIcon} from '@chakra-ui/icons'
const ProductPriceTooltip = () => {
	return (
		<Flex flexDirection="column">
			<Box
				w="100%"
				h="30px"
				display="flex"
				alignItems="center"
				borderBottom="1px solid hsla(0,0%,100%,.1)"
			>
				<Heading as="h3" size="sm" letterSpacing={1}>
					PRICE SUMMARY
				</Heading>
			</Box>
			<Flex
				justifyContent="space-between"
				w="100%"
				h="30px"
				alignItems="center"
			>
				<Text color="text.gray" fontSize="14px">
					{" "}
					Item Price
				</Text>
				<Text color="white" fontSize="14px" fontWeight="bold">
					150 PKR
				</Text>
			</Flex>
			<Flex
				justifyContent="space-between"
				w="100%"
				h="30px"
				borderBottom="1px solid hsla(0,0%,100%,.1)"
				alignItems="center"
			>
				<Text color="#fff" fontSize="16px" fontWeight="bold">
					{" "}
					Total:
				</Text>
				<Text color="#fff" fontSize="16px" fontWeight="bold">
					150 PKR
				</Text>
			</Flex>
			<Flex
				justifyContent="space-between"
				w="100%"
				h="30px"
				alignItems="center"
			>
				<Text color="text.gray" fontSize="16px" fontWeight="bold">
					{" "}
					Earn Values:
				</Text>
				<Flex alignItems="center" h="20px" mt="5px" color="#fff" justifyContent="flex-end">
					<Image
						src="/images/loyality-icon.png"
						w="12px"
						h="12px"
						mr="8px"
					/>
					<Text fontSize="14px" color="#fff" mr="8px">
						3679
					</Text>
					<Text fontSize="14px" color="#fff">
						Loyality Points
					</Text>
				</Flex>
			</Flex>
			<Box
				w="100%"
				p="5px"
				border="1px solid hsla(0,0%,100%,.1)"
				color="text.gray"
                fontSize="12px"
			>
				<Text>
					<InfoOutlineIcon mr="5px"/>Loyalty Points are only open to Midasbuy VIP users. Value
					can help VIP users upgrade levels. High-level VIP users can
					have more privileges such as getting extra VIP points.
				</Text>
			</Box>
		</Flex>
	);
};
export default ProductPriceTooltip;
