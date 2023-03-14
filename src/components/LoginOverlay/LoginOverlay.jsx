import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	Avatar,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import LoginForm from "./LoginForm.jsx";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../Function/fetch.js";

const LoginOverlay = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLogedIn, setIsLogedIn] = useState(false);
	const [, setShowForm] = useState(false);
	const color = useColorModeValue("black", "white");

	if (!isLogedIn && localStorage.getItem("accessToken")) {
		apiFetch("auth/me")
			.then(async (user) => {
				const u = await user.json();
				if (u.id) {
					localStorage.setItem("userId", u.id);
					localStorage.setItem("userData", JSON.stringify(u));
					setIsLogedIn(true);
				}
			})
			.catch((e) => console.log(e));
	}

	const logInHandler = () => {
		setIsLogedIn(true);
	};
	const showOtpFormHandler = () => {
		setShowForm(true);
	};

	return (
		<>
			{isLogedIn && localStorage.getItem("userId") ? (
				<Link to="/profile">
					<Avatar boxSize="40px" src={localStorage.getItem("userPhoto")} />
				</Link>
			) : (
				<Button
					color={color}
					cursor="pointer"
					mr={3}
					border="none"
					bg='#ee8181'
					_hover={{ background: " #ee8181" }}
					onClick={onOpen}
				>
					Log In
				</Button>
			)}

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="#ffecec">
					<ModalHeader color=" #ea5455" fontSize="2xl">
						Log In
					</ModalHeader>
					<ModalCloseButton border="none" color='black' />
					<ModalBody>
						<LoginForm
							onClose={onClose}
							showOtpFormHandler={showOtpFormHandler}
							logInHandler={logInHandler}
						/>

						{/* {showForm && <OtpForm onClose={onClose} />} */}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginOverlay;
