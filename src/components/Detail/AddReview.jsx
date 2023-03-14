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

export default function AddReview(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [reviewValue, setReviewValue] = useState({
		rating: 0,
		review: "",
		
	});

	const addReviewHandler = () => {
    console.log(reviewValue )
		apiFetch(`service/${props.ServiceId}/reviews` , 'POST' , reviewValue )
		.then(async (response) => {
			const res = await response.json();
            
            alert(res.message)
			onClose()
			


		})
		.catch((error) => {
			alert(error);
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
					<ModalHeader>Add New Review</ModalHeader>
					<ModalCloseButton border="none" />

					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Review</FormLabel>
							<Input
								htmlSize={40}
                                
								width="auto"
								placeholder="Review"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setReviewValue((prev) => ({
										...prev,
										review: event.target.value,
									}))
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Rating</FormLabel>
							<Input
								htmlSize={40}
								width="auto"
                                type="number"
								placeholder="1-5 out of 5"
								borderColor="#d9d9d9"
								onChange={(event) =>
									setReviewValue((prev) => ({
										...prev,
										rating: parseInt(event.target.value),
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
							onClick={addReviewHandler}
						>
							Post
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
