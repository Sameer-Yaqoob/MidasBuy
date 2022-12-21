import React from "react";
import { Button, Link } from "@chakra-ui/react";

function SecondaryButton({ text }) {
  return (
    <Link style={{ textDecoration: "none" }} href={text === 'Sign up now' ? "https://app.squadly.io/auth/signup" : "https://app.squadly.io"}  >
      <Button
        variant="ghost"
        fontWeight="normal"
        color="headerText"
        _hover={{ bg: "gray.50", color: "brand.blue" }}
      >
        {text || "Button"}
      </Button>
    </Link >
  );
}

export default SecondaryButton;
