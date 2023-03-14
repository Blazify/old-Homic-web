import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { MdOutlineAdd } from "react-icons/md";
import { apiFetch } from "../../Function/fetch";

export default function AddAddress() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [addressValue, setAddressValue] = useState({
		address: "",
		city: "",
		state: "",
		country: "",
		pincode: "",
	});

	const addAddressHandler = () => {
		apiFetch("user/address", "POST", addressValue)
			.then(async (response) => {
				const res = await response.json();
				alert(res.message);
				setAddressValue({
					address: "",
					city: "",
					state: "",
					country: "",
					pincode: "",
				});
				onClose();
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<>
			<Button
				onClick={onOpen}
				border="none"
				backgroundColor="transparent"
				_hover={{ color: "#ee8181" }}
			>
				<MdOutlineAdd size={35} style={{ marginTop: "22px" }} />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New Address</ModalHeader>
					<ModalCloseButton border="none" />

					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Address</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="Address"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setAddressValue((prev) => ({
										...prev,
										address: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>City</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="City"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setAddressValue((prev) => ({
										...prev,
										city: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>State</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="State"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setAddressValue((prev) => ({
										...prev,
										state: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Country</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="Country"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setAddressValue((prev) => ({
										...prev,
										country: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Pincode</FormLabel>
							<Input
								type="number"
								width="auto"
								placeholder="Pincode"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setAddressValue((prev) => ({
										...prev,
										pincode: event.target.value,
									}))
								}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							background="#ea5455"
							color="white"
							cursor="pointer"
							mr={3}
							border="none"
							borderRadius="2rem"
							_hover={{ background: "#ee8181" }}
							onClick={addAddressHandler}
						>
							Save
						</Button>
						<Button
							onClick={onClose}
							borderRadius="2rem"
							borderColor="#ee8181"
							color="#ee8181"
							variant="outline"
							cursor="pointer"
						>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
