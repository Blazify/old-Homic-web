import React from "react";
import { GiNotebook } from "react-icons/gi";
import { Box, Icon } from "@chakra-ui/react";

export default function ProfileAction() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      textAlign="center"
    >
      <h1>Reviews</h1>
      <Box>
        <p>Nothing here yet</p>
        <Icon as={GiNotebook} boxSize={6} />
      </Box>
    </Box>
  );
}
