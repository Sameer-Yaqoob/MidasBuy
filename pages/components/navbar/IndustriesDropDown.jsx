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

function IndustriesDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const industries = [
    {
      name: "Health",
      link: "/industries/healthcare",
    },
    {
      name: "Cleaning",
      link: "/industries/cleaning",
    },
    {
      name: "Security",
      link: "/industries/security",
    },
  ];
  return (
    <>
      <Menu isOpen={isOpen}>
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
          Industries
        </MenuButton>
        <MenuList>
          {industries.map((industry) => {
            return (
              <MenuItem
                _hover={{ bg: "gray.50", color: "brand.blue" }}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Box w="auto" p="5px" alignItems="left">
                  <Link href={industry.link}>
                    <Text color="gray.500" _hover={{ color: "brand.blue" }}>
                      {industry.name}
                    </Text>
                  </Link>
                </Box>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
}

export default IndustriesDropDown;
