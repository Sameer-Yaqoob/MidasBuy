import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

function FeaturesDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const features = [
    {
      name: "Squadly Platform",
      link: "/platform",
    },
    {
      name: "Squadly Features",
      link: "/jobs",
    },
  ];
  return (
    <Menu isOpen={isOpen} closeOnSelect={true}>
      <MenuButton
        as={Button}
        variant="ghost"
        fontSize="lg"
        fontWeight="normal"
        color="headerText"
        _hover={{ bg: "gray.50", color: "brand.blue" }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        textAlign="start"
      >
        Overview
      </MenuButton>
      <MenuList>
        {features.map((feature) => {
          return (
            <MenuItem
              _hover={{ bg: "gray.50", color: "brand.blue" }}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <Box w="auto" p="5px">
                <Link href={feature.link}>
                  <Text color="gray.500" _hover={{ color: "brand.blue" }}>
                    {feature.name}
                  </Text>
                </Link>
              </Box>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default FeaturesDropDown;
