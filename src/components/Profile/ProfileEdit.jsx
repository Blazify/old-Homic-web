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

import { BiEditAlt } from "react-icons/bi";
import UploadProfile from "./UploadProfile";
import { apiFetch } from "../../Function/fetch";

export default function ProfileEdit() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phone_number: "",
	});

	const editUserDataHandler = () => {
		apiFetch("user", "PATCH", userData)
			.then(async (response) => {
				const res = await response.json();
				console.log(response);
				alert(res.message);
				setUserData({
					name: "",
					email: "",
					phone_number: "",
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
				leftIcon={<BiEditAlt />}
				background="#ea5455"
				color="white"
				mr={10}
				border="none"
				borderRadius="2rem"
				_hover={{ background: "#ee8181" }}
			>
				Edit
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit your account</ModalHeader>
					<ModalCloseButton border="none" />

					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Full Name</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="First name"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setUserData((prev) => ({
										...prev,
										name: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="Email"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setUserData((prev) => ({
										...prev,
										email: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Contact Number</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
								placeholder="Contect Number"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setUserData((prev) => ({
										...prev,
										phone_number: event.target.value,
									}))
								}
							/>
						</FormControl>

						<UploadProfile />
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
							onClick={editUserDataHandler}
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
