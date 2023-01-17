import React, {useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    MenuButton,
    Menu,
    VStack,
    useDisclosure,
    Container,
    IconButton,
    Text,
    Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerComp from "./drawer";
import { MdNotificationImportant } from "react-icons/md";
import NavbarProfile from "./navbarProfileBlock";
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Flex
            pt="1rem"
            pb="1rem"
            boxSize="full"
            bg="header"
            top={0}
            zIndex={1000}
            h="auto"
            boxShadow="dark-lg"
        >
            <Container maxW="container.xl">
                <Flex
                    direction={{ lg: "row", md: "row", sm: "row" }}
                    alignItems="center"
                    as="nav"
                    justify="space-between"
                    wrap="wrap"
                >
                    <Button
                        ref={btnRef}
                        onClick={onOpen}
                        display={{ lg: "none", sm: "yes" }}
                        bg="header"
                        color="headerText"
                        mr="3"
                        w="auto"
                    >
                        <HamburgerIcon />
                    </Button>

                    {/* drawer */}
                    <DrawerComp
                        isOpen={isOpen}
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <VStack alignItems="left">
                        <Link href="/">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        _focus={{
                                            bg: "none",
                                        }}
                                        textAlign="start"
                                    >
                                        Home
                                    </MenuButton>
                                </Menu>
                            </Link>
                             <Link href="/latest-news">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        _focus={{
                                            bg: "none",
                                        }}
                                        textAlign="start"
                                    >
                                        News
                                    </MenuButton>
                                </Menu>
                            </Link>
                            <Link href="/help-center">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        _focus={{
                                            bg: "none",
                                        }}
                                        textAlign="start"
                                    >
                                        Help Center
                                    </MenuButton>
                                </Menu>
                            </Link>
                        </VStack>
                    </DrawerComp>

                    <Box w="auto" alignItems="center" display="flex">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                width={166.6775}
                                height={35.0798}
                            />
                        </Link>
                    </Box>
                    <Box flex={2} alignItems="flex-start" ml="1rem">
                        <ButtonGroup display={{ lg: "yes", sm: "none" }}>
                        <Link href="/">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        _focus={{
                                            bg: "none",
                                        }}
                                        textAlign="start"
                                    >
                                        Home
                                    </MenuButton>
                                </Menu>
                            </Link>
                            <Link href="/latest-news">
                                <Button
                                    variant="ghost"
                                    fontWeight="normal"
                                    fontSize="lg"
                                    color="headerText"
                                    _hover={{
                                        bg: "none",
                                    }}
                                    _focus={{
                                        bg: "none",
                                    }}
                                >
                                    News
                                </Button>
                            </Link>
                            <Link href="/help-center">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        _focus={{
                                            bg: "none",
                                        }}
                                        textAlign="start"
                                    >
                                        Help Center
                                    </MenuButton>
                                </Menu>
                            </Link>
                        </ButtonGroup>
                    </Box>
                    <Flex direction="row" alignItems="center">
                        <Box display="flex" color="white" gap={2} alignItems="center">
                            <IconButton
                                variant="outline"
                                aria-label="Call Sage"
                                _hover="none"
                                fontSize="20px"
                                border="none"
                                icon={<MdNotificationImportant />}
                            ></IconButton>
                            <Text color="white" alignSelf="center"mr="1rem">
                                Notifications
                            </Text>
                            <Divider orientation="vertical" h="15px" />
                            <NavbarProfile/>
                           </Box>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
}

export default Navbar;
