import React from "react";
import NavBar from "./navbar/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import theme from "./theme";
function Layout({ children }) {
    return (
            <Box w="100%">
                <NavBar />
                <Box mt="73px" mb="2rem">
                {children}
                </Box>
                <Footer />
            </Box>
            
    );
}

export default Layout;
