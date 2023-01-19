import {
	Button,
	ButtonGroup,
	Container,
	Divider,
	IconButton,
	Input,
	Stack,
    Heading,
	Text,
	Box,
	Link,
	Image,
	Flex
} from "@chakra-ui/react";
import * as React from "react";
import { MdMail } from "react-icons/md";


const Footer = () => {
	return (
		// <Box w="100%" bg="footer">
		//      <Container as="footer" role="contentinfo" maxW="container.xl">
		//     <Stack
		//         spacing="8"
		//         direction={{ base: "column", md: "row" }}
		//         justify="space-between"
		//         py={{ base: "12", md: "16" }}
		//     >
		//         <Stack spacing={{ base: "6", md: "8" }} align="start">
		//         <Image
		//                             src="/images/logo.png"
		//                             width={166.6775}
		//                             height={35.0798}
		//                         />
		//             <Text color="headerText">
		//                 Create beautiful websites remarkably fast.
		//             </Text>
		//         </Stack>
		//         <Stack
		//             direction={{
		//                 base: "column-reverse",
		//                 md: "column",
		//                 lg: "row",
		//             }}
		//             spacing={{ base: "12", md: "8" }}
		//         >
		//             <Stack direction="row" spacing="8">
		//                 <Stack spacing="4" minW="36" flex="1">
		//                     <Text
		//                         fontSize="sm"
		//                         fontWeight="bold"
		//                         color="white"
		//                     >
		//                         Product
		//                     </Text>
		//                     <Stack spacing="3" shouldWrapChildren>
		//                         <Button variant="link" color="headerText">How it works</Button>
		//                         <Button variant="link" color="headerText">Pricing</Button>
		//                         <Button variant="link" color="headerText">Use Cases</Button>
		//                     </Stack>
		//                 </Stack>
		//                 <Stack spacing="4" minW="36" flex="1">
		//                     <Text
		//                         fontSize="sm"
		//                         fontWeight="bold"
		//                         color="white"
		//                     >
		//                         Legal
		//                     </Text>
		//                     <Stack spacing="3" shouldWrapChildren>
		//                         <Button variant="link" color="headerText">Privacy</Button>
		//                         <Button variant="link" color="headerText">Terms</Button>
		//                         <Button variant="link" color="headerText">License</Button>
		//                     </Stack>
		//                 </Stack>
		//             </Stack>
		//             <Stack spacing="4">
		//                 <Text
		//                     fontSize="sm"
		//                     fontWeight="bold"
		//                     color="white"
		//                 >
		//                     Stay up to date
		//                 </Text>
		//                 <Stack
		//                     spacing="4"
		//                     direction={{ base: "column", sm: "row" }}
		//                     maxW={{ lg: "360px" }}
		//                 >
		//                     <Input
		//                         placeholder="Enter your email"
		//                         type="email"
		//                         required
		//                     />
		//                     <Button
		//                         variant="primary"
		//                         type="submit"
		//                         flexShrink={0}
		//                         color="headerText"
		//                     >
		//                         Subscribe
		//                     </Button>
		//                 </Stack>
		//             </Stack>
		//         </Stack>
		//     </Stack>
		//     <Divider />
		//     <Stack
		//         pt="8"
		//         pb="12"
		//         justify="space-between"
		//         direction={{ base: "column-reverse", md: "row" }}
		//         align="center"
		//     >
		//         <Text fontSize="sm" color="headerText">
		//             &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All
		//             rights reserved.
		//         </Text>
		//         <ButtonGroup variant="ghost">
		//             <IconButton
		//                 as="a"
		//                 href="#"
		//                 aria-label="LinkedIn"
		//                 color="headerText"
		//                 icon={<FaLinkedin fontSize="1.25rem" />}
		//             />
		//             <IconButton
		//                 as="a"
		//                 href="#"
		//                 aria-label="GitHub"
		//                 color="headerText"
		//                 icon={<FaGithub fontSize="1.25rem" />}
		//             />
		//             <IconButton
		//                 as="a"
		//                 href="#"
		//                 aria-label="Twitter"
		//                 color="headerText"
		//                 icon={<FaTwitter fontSize="1.25rem" />}
		//             />
		//         </ButtonGroup>
		//     </Stack>
		// </Container>
		// </Box>
		<Box
        background= "var(--bg-color-2,#111733)"
        width="100%"
        overflow="hidden"
        zIndex= "502"
        min-height= "120px"
        padding= "32px 0"
        box-sizing= "border-box"
        >
            <Container maxW="container.xl">
			<Box>
				<Box
                    w="100%"
                    display="flex"
                    alignItems="center"
                    borderBottom= "1px solid hsla(0,0%,100%,.1)"
                    paddingBottom= "23px"
                    marginBottom="23px"
					
                >
						<Box w="40%">
                        <Heading as="h3" size="sm" color="white" mb="24px">Follow us on</Heading>{" "}
							<Box display="flex" gap="16px">
								<Image
									src="/images/footer-fb.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                <Image
									src="/images/footer-insta.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                <Image
									src="/images/footer-twitter.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                  <Image
									src="/images/footer-youtube.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                    <Image
									src="/images/footer-discard.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                   <Image
									src="/images/footer-tiktok.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
                                    <Image
									src="/images/footer-reddit.png"
									alt="Image"
                                    w="36px"
                                    h="36px"
								/>
							</Box>
						</Box>
                        <Box w="60%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        >
							<Text fontSize="12px" color="var(--font-color-5,hsla(0,0%,100%,.4))">
								{" "}
								For customer service, please contact us via email<br/> help@midasbuy.com or Facebook inbox.
							</Text>
                    <Box mr="15px">
                     <Link 
                     _hover={{textDecoration:"none"}}
                        p="15px"
                        borderRadius="2px"
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        fontSize="12px"
                        background= "hsla(0,0%,100%,.1)"
                        color="var(--font-color-6,hsla(0,0%,100%,.6))"
                        w="116px"
                        h="36px"
                        >
						<MdMail size="17"/><span> Feedback</span>
						</Link>{" "}
					</Box>
						</Box>
                        
                      
					</Box>
				<Box>
					
				</Box>
			</Box>{" "}
			<Flex gap="10px" alignItems="center">
					
						<Link ><Text color="var(--font-color-5,hsla(0,0%,100%,.4))" fontSize="12px" lineHeight="1" borderRight="1px solid var(--font-color-5,hsla(0,0%,100%,.4))"  pr="10px">Cookies Preference</Text></Link>
						<Link ><Text color="var(--font-color-5,hsla(0,0%,100%,.4))" fontSize="12px" lineHeight="1" borderRight="1px solid var(--font-color-5,hsla(0,0%,100%,.4))"  pr="10px">Terms of Service</Text></Link>
						<Link ><Text color="var(--font-color-5,hsla(0,0%,100%,.4))" fontSize="12px" lineHeight="1" borderRight="1px solid var(--font-color-5,hsla(0,0%,100%,.4))"  pr="10px">Privacy Policy</Text></Link>
						<Link ><Text color="var(--font-color-5,hsla(0,0%,100%,.4))" fontSize="12px" lineHeight="1"   pr="10px">Cookie Policy</Text></Link>
						<Text ml="50px" fontSize="12px" color="var(--font-color-5,hsla(0,0%,100%,.4))" lineHeight="24px">COPYRIGHT © HIGH MORALE DEVELOPMENTS LTD. ALL RIGHTSRESERVED.</Text>
			</Flex>
            </Container>
		</Box>
	);
};
export default Footer;
