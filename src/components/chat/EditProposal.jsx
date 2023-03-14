import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Box, Button, Icon, Input } from "@chakra-ui/react";

function EditProposal(props) {
	// const { proposalData } = props;

	return (
		<Box
			margin="10px"
			padding="30px"
			borderRadius="0.9rem"
			backgroundColor="rgb(255, 238, 238)"
			alignSelf="flex-end"
		>
			<h1
				style={{
					fontSize: "20px",
					fontWeight: "600",
					color: "rgb(42, 42, 42)",
				}}
			>
				Service request Id
			</h1>
			{/* <h2>{proposalData.serviceId}</h2> */}
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				125-125-0125
			</h2>
			<hr />
			<h1
				style={{
					fontSize: "20px",
					fontWeight: "600",
					color: "rgb(42, 42, 42)",
				}}
			>
				Price
			</h1>
			{/* <h2>{proposalData.price}</h2> */}
			<Input
				isInvalid
				width="88%"
				errorBorderColor="red.300"
				placeholder="Here is a sample placeholder"
			/>
			{/* <h2>1254</h2> */}

			<hr />
			<h1
				style={{
					fontSize: "20px",
					fontWeight: "600",
					color: "rgb(42, 42, 42)",
				}}
			>
				Notes
			</h1>
			{/* <h2>{proposalData.note}</h2> */}
			<Input
				isInvalid
				width="88%"
				errorBorderColor="red.300"
				placeholder="Here is a "
			/>
			{/* <h2> jfsdhfsdf</h2> */}
			<hr />
			<h1
				style={{
					fontSize: "20px",
					fontWeight: "600",
					color: "rgb(42, 42, 42)",
				}}
			>
				Service require{" "}
			</h1>
			{/* <h2>{proposalData.serviceType}</h2> */}
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				painter
			</h2>
			<hr />
			<Box
				marginTop="20px"
				marginBottom="-10px"
				display="flex"
				justifyContent="space-around"
			>
				<Button
					backgroundColor="#ee8181"
					padding="10px"
					fontSize="17px"
					border="none"
					borderRadius="1rem"
					cursor="pointer"
				>
					Send Proposal
					<Icon as={BsCheck2Circle} />
				</Button>
				<Button
					onClick={props.cancleProposal}
					backgroundColor="#ea5455"
					padding="10px"
					fontSize="17px"
					border="none"
					borderRadius="1rem"
					cursor="pointer"
				>
					Cancle Proposal
					<Icon as={BiEditAlt} />
				</Button>
			</Box>
		</Box>
	);
}

export default EditProposal;
