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

// import UploadProfile from "./UploadProfile";
import { MdEdit } from "react-icons/md";
import { apiFetch } from "../../Function/fetch";

export default function EditAddress(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [addressValue, setAddressValue] = useState({
		address: props.address.address,
		city: props.address.city,
		state: props.address.state,
		country: props.address.country,
		pincode: props.address.pincode,
	});

	const editAddressHandler = () => {
		apiFetch(`user/address/${props.address.id}`, "PATCH", addressValue)
			.then(async (response) => {
				const res = await response.json();
				alert(res.message);
				setAddressValue({
					address: props.address.address,
					city: props.address.city,
					state: props.address.state,
					country: props.address.country,
					pincode: props.address.pincode,
				});
				onClose();
				window.location.reload();
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
				<MdEdit size={40} style={{ paddingTop: "15px" }} />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Address</ModalHeader>
					<ModalCloseButton border="none" />

					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Address</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="Address"
								value={addressValue.address}
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
								value={addressValue.city}
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
								value={addressValue.state}
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
								value={addressValue.country}
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
								value={addressValue.pincode}
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
							onClick={editAddressHandler}
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
