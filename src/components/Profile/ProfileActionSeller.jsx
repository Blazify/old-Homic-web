import React, { useEffect } from "react";
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Box,
	Select,
} from "@chakra-ui/react";
// import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { apiFetch } from "../../Function/fetch";

const ProfileActionSeller = () => {
	const [formIsShown, setFormIsShown] = useState(false);
	const [serviceReq, setServiceReq] = useState(false);
	const [addresses, setAddresses] = useState();
	const [values, setValues] = useState({
		date_of_birth: "",
		address_id: "",
		billing_id: "",
		pan_number: "",
		aadhar_number: "",
		gst_number: "",
		bank_name: "",
		bank_account_number: "",
		bank_account_ifsc: "",
		bank_account_holder: "",
		bank_account_type: "",
		bank_account_branch: "",
		category_id: "",
		description: "",
	});

	const NextformHandler = () => {
		setFormIsShown(true);
		setServiceReq(true);
	};
	const cancelButtonHandler = () => {
		setFormIsShown(false);
		setServiceReq(false);
	};

	// const handleChange = (event) => {
	// 	setValues((pre) => {
	// 		return {
	// 			...pre,

	// 			category_id: event.target.value,
	// 			address_id: event.target.value,
	// 		};
	// 	});
	// };

	useEffect(() => {
		apiFetch("user/addresses")
			.then(async (response) => {
				const res = await response.json();
				setAddresses(res);
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const handlerChangeAddress = (event) => {
		setValues((pre) => {
			return {
				...pre,

				address_id: event.target.value,
			};
		});
	};

	const postApplicationHandler = () => {
		console.log(values);
	};

	return (
		<>
			<Box
				display="flex"
				flex-direction="row"
				justifyContent="space-around"
				marginTop="2rem"
			>
				{!formIsShown && (
					<>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="40vh"
							marginTop="-22px"
						>
							<FormControl>
								<p style={{ fontSize: "40px", fontWeight: "700" }}>
									General Information
								</p>
								<FormLabel marginTop="25px" fontWeight="700">
									DATE OF BIRTH :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											date_of_birth: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Select Service :
								</FormLabel>
								{/* <Select
									placeholder="Select option"
									// value={values}
									onChange={handleChange}
								>
									{categories?.map((category, index) => {
										return (
											<option key={index} value={category.id}>
												{category.name}
											</option>
										);
									})}
								</Select> */}
								<FormLabel marginTop="15px" fontWeight="700">
									Offical Address :
								</FormLabel>
								<Select
									placeholder="Select option"
									// value={value}
									onChange={handlerChangeAddress}
								>
									{addresses?.map((address, index) => {
										return (
											<option key={index} value={address.id}>
												{address.address} , {address.city} ,{address.state} ,
												{address.country} ,{address.pincode}
											</option>
										);
									})}
								</Select>
							</FormControl>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="40vh"
						>
							<FormControl>
								<p style={{ fontSize: "40px", fontWeight: "700" }}>
									Bank Details
								</p>
								<FormLabel marginTop="25px" fontWeight="700">
									Bank Name :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_name: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Account Holder Name :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_account_holder: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Account Number :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_account_number: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Bank Account Branch Name:
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_account_branch: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Bank Account Type:
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_account_type: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									IFSC Code :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											bank_account_ifsc: event.target.value,
										}))
									}
								/>
							</FormControl>
						</Box>
					</>
				)}
				{formIsShown && (
					<>
						<Box>
							<FormControl>
								<p style={{ fontSize: "40px", fontWeight: "700" }}>
									Tax & Identify
								</p>
								<FormLabel marginTop="25px" fontWeight="700">
									Aadhar Number :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											aadhar_number: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Pan Number :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											pan_number: event.target.value,
										}))
									}
								/>
								<FormLabel marginTop="15px" fontWeight="700">
									Gst Number :
								</FormLabel>
								<Input
									type="email"
									border="5px solid black"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											gst_number: event.target.value,
										}))
									}
								/>
							</FormControl>
						</Box>
						<Box>
							{/* <FormControl>
								<p style={{ fontSize: "40px", fontWeight: "700" }}>Others</p>
								<FormLabel marginTop="25px" fontWeight="700">
									Aadhar Number :
								</FormLabel>
								<Input type="email" border="5px solid black" />
							</FormControl> */}
						</Box>
					</>
				)}
			</Box>

			<Box
				display="flex"
				justifyContent="flex-end"
				marginTop="3rem"
				marginRight="6rem"
			>
				{!serviceReq && (
					<Button
						height="3.3rem"
						width="8rem"
						backgroundColor="#ea5455"
						color="white"
						fontSize="20px"
						borderRadius="10px"
						fontWeight="bold"
						cursor="pointer"
						_hover={{
							backgroundColor: "#ee8181",
						}}
						onClick={NextformHandler}
					>
						Next
					</Button>
				)}
				{serviceReq && (
					<>
						<Button
							height="3.3rem"
							width="16rem"
							backgroundColor="#ffe2e2"
							color="#ea5455"
							borderRadius="10px"
							fontSize="20px"
							fontWeight="bold"
							cursor="pointer"
							marginRight="10px"
							border="none"
							onClick={cancelButtonHandler}
						>
							Cancel
						</Button>
						<Button
							height="3.3rem"
							width="16rem"
							borderRadius="10px"
							backgroundColor="#ea5455"
							color="white"
							fontSize="20px"
							fontWeight="bold"
							cursor="pointer"
							border="none"
							_hover={{ backgroundColor: "#ee8181" }}
							onClick={postApplicationHandler}
						>
							Create Service Request
						</Button>
					</>
				)}
			</Box>
		</>
	);
};

export default ProfileActionSeller;
