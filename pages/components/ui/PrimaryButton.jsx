import { Button, Link } from "@chakra-ui/react";
import React from "react";

function PrimaryButton({ text }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href="https://app.squadly.io/auth/signup"
    >
      <Button
        fontWeight="normal"
        backgroundColor="brand.blue"
        color="headerText"
        _hover={{
          bg: "gray.50",
          color: "brand.blue",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {text || "Get Started"}
      </Button>
    </Link>
  );
}

export default PrimaryButton;
