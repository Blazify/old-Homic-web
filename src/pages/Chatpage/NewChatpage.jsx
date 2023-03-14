import { Box } from "@chakra-ui/react";
import React from "react";
import Chatpage from "../../components/chat/Chatpage";
import Navbar from "../../components/Navbar/Navbar";
function NewChatpage() {
  return (
    <>
      <Navbar />
      <Box
        backgroundColor="rgb(255, 222, 222)"
        height="100vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          borderRadius="2rem"
          backgroundColor="white"
          width="fit-content"
          height="fit-content"
          marginTop="5vh"
        >
          <Chatpage />
        </Box>
      </Box>
    </>
  );
}

export default NewChatpage;
