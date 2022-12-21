import React, {useState} from "react";
import Link from "next/link";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    MenuButton,
    Menu,
    VStack,
    useDisclosure,
    Image,
    Container,
    IconButton,
    Text,
    Divider,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { Logo } from "../logo";
import IndustriesDropDown from "./IndustriesDropDown";
import FeaturesDropDown from "./FeaturesDropDown";
import PrimaryButton from "../ui/SecondaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerComp from "./drawer";
import { MdNotificationImportant } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
            position="fixed"
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
                            <FeaturesDropDown />
                            <IndustriesDropDown />
                            <Link href="/pricing">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="normal"
                                        color="headerText"
                                        _hover={{
                                            bg: "gray.50",
                                            color: "brand.blue",
                                        }}
                                        textAlign="start"
                                    >
                                        Pricing
                                    </MenuButton>
                                </Menu>
                            </Link>
                        </VStack>
                    </DrawerComp>

                    <Box w="auto" alignItems="center" display="flex">
                        <Link href="/">
                            {/* <Image
                                src="../images/logo_primary.png"
                                width={166.6775}
                                height={35.0798}
                            /> */}
                            <Logo />
                        </Link>
                    </Box>
                    <Box flex={2} alignItems="flex-start" ml="1rem">
                        <ButtonGroup display={{ lg: "yes", sm: "none" }}>
                            <FeaturesDropDown />
                            <IndustriesDropDown />
                            <Link href="/pricing">
                                <Button
                                    variant="ghost"
                                    fontWeight="normal"
                                    fontSize="lg"
                                    color="headerText"
                                    _hover={{
                                        bg: "gray.50",
                                        color: "brand.blue",
                                    }}
                                >
                                    Pricing
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </Box>
                    <Flex direction="row">
                        <Box display="flex" color="white" gap={2} >
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
                            <Divider orientation="vertical" />
                            <NavbarProfile/>
                           </Box>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
}

export default Navbar;
