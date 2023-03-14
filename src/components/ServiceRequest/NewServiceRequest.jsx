import React, { useRef } from "react";
import CategoryDetailBox from "../categorydetailcomponent/CategoryDetailBox";
import {
	Box,
	Button,
	Divider,
	Heading,
	Input,
	InputGroup,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { apiFetch } from "../../Function/fetch";

export default function NewServiceRequest() {
	const serviceNote = useRef();
	const servicePrice = useRef();

	const [serviceData, setServiceData] = useState({});
	const [userAddress, setUserAddress] = useState({});

	const ServiceId = window.location.href.substring(
		window.location.href.lastIndexOf("?") + 1
	);
	const color = useColorModeValue("black", "black");

	useEffect(() => {
		apiFetch(`service/${ServiceId}`).then(async (response) => {
			const data = await response.json();
			setServiceData({
				name: data.name,
				id: data.id,
				description: data.description,
				price: data.price,
				serviceType: data.ServiceCategory.name,
			});
		});

		apiFetch("user/addresses").then(async (response) => {
			const res = await response.json();
			console.log("adddata", res);
			setUserAddress(res[0]);
		});
	}, [ServiceId]);

	const handelSubmit = async (e) => {
		e.preventDefault();
		console.log("hyyy", {
			description: serviceNote.current.value,
			price: parseInt(servicePrice.current.value),
			address_id: userAddress.id,
		});
		apiFetch(`service/${ServiceId}/requests`, "POST", {
			description: serviceNote.current.value,
			price: parseInt(servicePrice.current.value),
			address_id: userAddress.id,
		})
			.then(async (response) => {
				const res = await response.json();
				console.log("res", res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Box marginTop="10vh" display="flex" justifyContent="space-around">
				<Box>{<CategoryDetailBox data={serviceData} />}</Box>
				<Box
					backgroundColor="#dfdde3"
					padding="10px 30px"
					border="0.5px solid rgb(111, 111, 111)"
					borderRadius="1rem"
					width="30vw"
					lineHeight="1.2"
				>
					<Box marginTop="20px" marginBottom="20px">
						<Heading as="h1" color={color}>
							Service name
						</Heading>
						<h1 style={{ color: "rgba(0, 0, 0, 0.48)", fontSize: "17px" }}>
							service-Id: {serviceData.id}
						</h1>
					</Box>
					<Divider />

					<Box color={color}>
						<h1>Service request Id</h1>
						<h1 style={{ fontSize: "17px" }}>1234-566-7464</h1>
					</Box>
					<Divider />
					<Box>
						<Heading color={color}>Pricing</Heading>
						<InputGroup>
							<Input
								variant="Filled"
								placeholder={serviceData.price}
								_placeholder={{ color: "black" }}
								border="none"
								ref={servicePrice}
								htmlSize={10}
								width="auto"
								background="none"
								marginTop="10px"
							/>
						</InputGroup>
					</Box>
					<Divider />
					<Box color={color}>
						<h1>Notes</h1>
						<Input
							variant="Filled"
							placeholder={"This shoud be done early ...."}
							_placeholder={{ color: "black" }}
							border="none"
							htmlSize={40}
							width="auto"
							background="none"
							marginTop="10px"
							ref={serviceNote}
						/>

						<h5>Share anything valuable</h5>
					</Box>
					<Box display="flex" justifyContent="center">
						<Button
							backgroundColor="#6750a4"
							color="#fff"
							cursor="pointer"
							height="45px"
							width="70%"
							borderRadius="2rem"
							border="none"
							fontSize="20px"
							onClick={handelSubmit}
						>
							Submit Proposal
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
