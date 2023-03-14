import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Box
      width="100%"
      backgroundImage="linear-gradient(135deg, #f29567 10%, #ea5455 100%)"
      height="30vh"
      overflow="hidden"
      marginTop="10px"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Flex gap={4} marginTop="60px">
          <Image boxSize="50px" src="/images/facebook.png" />
          <Image boxSize="50px" src="/images/instagram.png" />
          <Image boxSize="50px" src="/images/twitter.png" />
        </Flex>

        <Flex
          style={{ color: "white" }}
          gap={6}
          marginTop="10px"
          marginRight="-30px"
          cursor="pointer"
        >
          <h3> Info</h3>
          <h3>Support</h3>
          <h3>Marketing</h3>
        </Flex>
        <Flex
          style={{ color: "white" }}
          gap={6}
          marginTop="-20px"
          marginLeft="-5px"
          cursor="pointer"
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/terms">
            <h3>Terms of use</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/disclamer"
          >
            <h3>Disclamer</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/privacy"
          >
            <h3 color="white">Privacy Policy</h3>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
