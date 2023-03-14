import React, { useEffect, useState } from "react";

import { Avatar, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { apiFetch } from "../../Function/fetch";

export default function ProfileActionReviews(props) {
  const [userReview, setUserReview] = useState([])
  useEffect(()=>{


		apiFetch("user/reviews")
			.then(async (response) => {
				const res = await response.json();
				console.log(res)
        setUserReview(res)
			})
			.catch((e) => {
				console.log(e);
			});
  },[])
		
	
  // const userReviews = props.userReview;

  return (
    <Box height="100%" padding="25px">
      {/* <h1>Reviews</h1> */}
      {userReview.length > 0 ? userReview.map((element) => {
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
                  <h2 style={{ margin: "0" }}>{element.user.name}</h2>
                  <h1>xyz@gmail.com</h1>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < element.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
                <h1>5 days ago</h1>
              </Box>
            </Box>
            <Box
              margin="15px 0 0"
              fontSize="22px"
              display="flex"
              justifyContent="center"
            >
              <p style={{ width: "95%" }}>{element.description}</p>
            </Box>
          </Box>
        );
      }): <h1>No Reviews Yet</h1>}
    </Box>
  );
}
