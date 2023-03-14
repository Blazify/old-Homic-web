import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const ServiceQuestion = (props) => {
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("rgb(230, 226, 226)", "none")
  const serviceQue = props.serviceData.serviceQuestion;
  
  return (
    <Box height='100%' padding='25px'>
      {serviceQue.map((element, index) => {
        return (
          <Box p='25px' key={index}>
            <Box >
              <Box display='flex' flexDirection='column'>
                <h2 style={{color:{color}, bg:{bg}}}>Question: {element.Question}</h2>
                <h4 style={{marginTop:'-10px',fontSize:'23px',fontWeight:'400'}}>Answer: {element.Answer}</h4>

              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ServiceQuestion;
