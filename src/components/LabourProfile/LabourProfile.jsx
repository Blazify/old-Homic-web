import React from "react";

import { Avatar, Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import LabourTab from "./LabourTab";

const LabourProfile = (props) => {
	const data = props.serviceData;
	console.log(data);
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center
    "
		>
			<Box>
				<Avatar
					boxSize="150px"
					name="Dan Abrahmov"
					src="https://bit.ly/dan-abramov"
				/>
			</Box>
			<Box marginTop="-15px" color="black">
				<h2>{data.name}</h2>
			</Box>
			<Box marginTop="-27px" color="black">
				<p>{data.email}</p>
			</Box>
			<Box marginTop="10px" color="black">
				<Text>
					My name is Rolando, I love to watch Messi while playing football...
					more
				</Text>
			</Box>
			<Button
				backgroundColor="#ea5455"
				color="white"
				borderRadius="0.5rem"
				cursor="pointer"
				height="45px"
				width="100%"
				marginTop="2rem"
				border="none"
				fontSize="20px"
				fontWeight="700"
			>
				Message
			</Button>
			<Box marginTop="2rem">
				<LabourTab serviceData={props.serviceData} />
			</Box>
		</Box>
	);
};

export default LabourProfile;
