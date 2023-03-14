import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Box,
  Avatar,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const LabourTab = (props) => {
  const serviceData = props.serviceData;

  return (
    <Tabs colorScheme="red">
      <TabList>
        <Tab
          marginRight="40px"
          marginLeft="40px"
          cursor="pointer"
          border="none"
          fontSize="lg"
          color='black'
        >
          About
        </Tab>
        <Tab marginRight="40px" cursor="pointer" border="none" fontSize="lg" color='black'>
          Services
        </Tab>
        <Tab marginRight="40px" cursor="pointer" border="none" fontSize="lg" color='black'>
          Reviews
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box display="flex" flexDirection="column">
            <Box>
              <p style={{ fontSize: "15px", fontWeight: "600",color:'black' }}>From</p>
              <p style={{ fontWeight: "600", fontSize: "18px" ,color:'black'}}>New Delhi</p>
            </Box>
            <Divider orientation="horizontal" border="3px solid black" />
            <Box>
              <p style={{ fontSize: "15px", fontWeight: "600" ,color:'black'}}>
                Active Status
              </p>
              <p style={{ fontWeight: "600", fontSize: "18px" ,color:'black'}}>1 hour ago</p>
            </Box>
            <Divider orientation="horizontal" border="3px solid black" />
            <Box>
              <p style={{ fontSize: "15px", fontWeight: "600" ,color:'black'}}>
                Member Since
              </p>
              <p style={{ fontWeight: "600", fontSize: "18px",color:'black' }}>1 Dec 2025</p>
            </Box>
            <Divider orientation="horizontal" border="3px solid black" color='black' />
            <Box>
              <p style={{ fontSize: "15px", fontWeight: "600",color:'black' }}>
                Language Known
              </p>
              <p style={{ fontWeight: "600", fontSize: "18px" ,color:'black'}}>
                English,Hindi,Punjabi
              </p>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>Services</p>
        </TabPanel>
        <TabPanel>
          <h1 style={{color:'black'}}>Reviews</h1>

          {serviceData.serviceReview ? (
            serviceData.serviceReview.map((element) => {
              return (
                <Box padding="25px">
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Avatar
                        size="lg"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Box marginLeft="20px">
                        <h2 style={{ margin: "0", fontSize: "22px",color:'black' }}>
                          {element.Name}
                        </h2>
                        <h1 style={{ margin: "0", fontSize: "18px" ,color:'black'}}>
                          {element.Email}
                        </h1>
                      </Box>
                    </Box>
                    <Box width="4vw">
                      <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i < element.reating ? "teal.500" : "gray.300"
                              }
                            />
                          ))}
                      </Box>
                      <h1 style={{fontSize:"15px", marginLeft:"14px", width:"100%",color:'black'}} >
                        5 days ago
                      </h1>
                    </Box>
                  </Box>
                  <Box
                    margin="15px 0 0"
                    fontSize="19px"
                    display="flex"
                    justifyContent="center"
                  >
                    <p style={{ width: "95%" ,color:'black'}}>{element.review}</p>
                  </Box>
                </Box>
              );
            })
          ) : (
            <h1 style={{color:'black'}}>No Reviews yet</h1>
          )}
          {/* </div> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default LabourTab;
