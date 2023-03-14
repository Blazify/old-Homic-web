import React, { useState } from "react";

import { BsCheck2Circle } from "react-icons/bs";
import { apiFetch } from "../../Function/fetch";

import { Box, Button, Icon } from "@chakra-ui/react";

function ProposalMsg(props) {
	const { proposalData } = props;
	const currentUser = JSON.parse(localStorage.getItem("userData"));
	const [accepted, setAccepted] = useState(false);

	const acceptProposal = async () => {
		const res = await apiFetch(
			`service/${proposalData.service.id}/requests/${proposalData.id}/accept`,
			"POST"
		);
		if (res.status === 200) setAccepted(true);
	};

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
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				{proposalData.id}
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
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				{proposalData.price}
			</h2>

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
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				{proposalData.service.description}
			</h2>
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
			<h2
				style={{
					fontSize: "20px",
					fontWeight: "400",
					color: "rgb(83, 83, 83)",
					margin: "0",
				}}
			>
				{proposalData.service.name}
			</h2>
			<hr />
			<Box
				marginTop="20px"
				marginBottom="-10px"
				display="flex"
				justifyContent="space-around"
			>
				{proposalData.user.id === currentUser.id ||
				accepted ||
				proposalData.invoice_url ? null : (
					<Button
						backgroundColor="#ee8181"
						padding="10px"
						fontSize="17px"
						border="none"
						borderRadius="1rem"
						cursor="pointer"
						onClick={acceptProposal}
					>
						Accept
						<Icon as={BsCheck2Circle} />
					</Button>
				)}

				{proposalData.user.id === currentUser.id && proposalData.invoice_url ? (
					<Button
						backgroundColor="#ee8181"
						padding="10px"
						fontSize="17px"
						border="none"
						borderRadius="1rem"
						cursor="pointer"
						onClick={() => window.open(proposalData.invoice_url)}
					>
						Click to Pay
						<Icon as={BsCheck2Circle} />
					</Button>
				) : null}
			</Box>
		</Box>
	);
}

export default ProposalMsg;
