import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Box,
    Link,
    Text,
    Image
} from "@chakra-ui/react";
export default function DrawerComp({
    placement = "left",
    width,
    isOpen,
    children,
    onClose,
    btnRef,
}) {
    const p = 15;
    return (
        <Flex w={width} display={{ lg: "none", sm: "yes" }} >
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
                backgroundColor="header" 
                
            >
                <DrawerOverlay />
                <DrawerContent alignItems="left" bg="header">
                    <DrawerCloseButton alignSelf="end" mx={p} my={p} />
                    <DrawerHeader my={p}>
                        <Box w="auto" alignItems="center">
                            <Link href="/">
                                <Image
                                    src="../images/logo_primary.png"
                                    width={166.6775}
                                    height={35.0798}
                                />
                            </Link>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody>{children}</DrawerBody>
                    <DrawerFooter>
                        <Box pt="1rem" style={{borderTop:"1px solid  gray"}}>
                            <Text fontSize="sm" color="gray.400" pb="2rem">
                                Copyright @ Squadly 2022. All Rights Reserved.
                            </Text>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
