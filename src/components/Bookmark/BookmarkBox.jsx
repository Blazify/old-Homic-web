import React from "react";
import { Flex, Box, Image, Avatar } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const BookmarkBox = (props) => {
  const Ddata = props.data;
  if (props.data) {
    return (
      <Flex
        flexDirection="row"
        justifyContent="space-evenly"
        marginTop="30px"
        overflow="hidden"
      >
        <Box
          maxW={{ sm: "350px" }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image boxSize="sm" src={`${Ddata.imageUrl}`} alt={Ddata.imageAlt} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Avatar boxSize="35px" src={Ddata.Icon} />
              <Box
                color="black"
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="xl"
                textTransform="uppercase"
                ml="2"
              >
                {Ddata.name}
              </Box>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {Ddata.profession}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {Ddata.title}
            </Box>

            <Box>
              {Ddata.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Ddata.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {Ddata.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  } else {
    <div></div>;
  }
};

export default BookmarkBox;
