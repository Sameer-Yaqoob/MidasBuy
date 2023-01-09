import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Input,
    Stack,
    Text,
    Box
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <Box w="100%" bg="footer">
             <Container as="footer" role="contentinfo" maxW="container.xl">
            <Stack
                spacing="8"
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                py={{ base: "12", md: "16" }}
            >
                <Stack spacing={{ base: "6", md: "8" }} align="start">
                <Image
                                    src="/images/logo.png"
                                    width={166.6775}
                                    height={35.0798}
                                />
                    <Text color="headerText">
                        Create beautiful websites remarkably fast.
                    </Text>
                </Stack>
                <Stack
                    direction={{
                        base: "column-reverse",
                        md: "column",
                        lg: "row",
                    }}
                    spacing={{ base: "12", md: "8" }}
                >
                    <Stack direction="row" spacing="8">
                        <Stack spacing="4" minW="36" flex="1">
                            <Text
                                fontSize="sm"
                                fontWeight="bold"
                                color="white"
                            >
                                Product
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <Button variant="link" color="headerText">How it works</Button>
                                <Button variant="link" color="headerText">Pricing</Button>
                                <Button variant="link" color="headerText">Use Cases</Button>
                            </Stack>
                        </Stack>
                        <Stack spacing="4" minW="36" flex="1">
                            <Text
                                fontSize="sm"
                                fontWeight="bold"
                                color="white"
                            >
                                Legal
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <Button variant="link" color="headerText">Privacy</Button>
                                <Button variant="link" color="headerText">Terms</Button>
                                <Button variant="link" color="headerText">License</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing="4">
                        <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color="white"
                        >
                            Stay up to date
                        </Text>
                        <Stack
                            spacing="4"
                            direction={{ base: "column", sm: "row" }}
                            maxW={{ lg: "360px" }}
                        >
                            <Input
                                placeholder="Enter your email"
                                type="email"
                                required
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                flexShrink={0}
                                color="headerText"
                            >
                                Subscribe
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Stack
                pt="8"
                pb="12"
                justify="space-between"
                direction={{ base: "column-reverse", md: "row" }}
                align="center"
            >
                <Text fontSize="sm" color="headerText">
                    &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All
                    rights reserved.
                </Text>
                <ButtonGroup variant="ghost">
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="LinkedIn"
                        color="headerText"
                        icon={<FaLinkedin fontSize="1.25rem" />}
                    />
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="GitHub"
                        color="headerText"
                        icon={<FaGithub fontSize="1.25rem" />}
                    />
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="Twitter"
                        color="headerText"
                        icon={<FaTwitter fontSize="1.25rem" />}
                    />
                </ButtonGroup>
            </Stack>
        </Container>
        </Box>
    );
};
export default Footer;
