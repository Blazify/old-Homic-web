import React, { useEffect, useState } from "react";

import {
	Avatar,
	Icon,
	Input,
	CloseButton,
	Box,
	Button,
} from "@chakra-ui/react";
import {
	AiOutlineSmile,
	AiOutlinePaperClip,
	AiOutlineSend,
	AiFillEdit,
} from "react-icons/ai";

import { useRef } from "react";
import ProposalMsg from "./ProposalMsg";
import { apiFetch } from "../../Function/fetch";
import { listen } from "../../Function/websocket";

export default function Chat({ props }) {
	const sendMessage = useRef();
	let editMessage = useRef("");
	const userData = props;

	const [messages, setMessages] = useState({});
	const [sorted, setSorted] = useState([]);
	const currentUser = JSON.parse(localStorage.getItem("userData"));
	const [hoverData, setHoverData] = useState({});

	const chatId = window.location.href.substring(
		window.location.href.lastIndexOf("?") + 1
	);

	useEffect(() => {
		apiFetch(`user/chats/${chatId}/messages`).then(async (response) => {
			const res = await response.json();
			console.log(res);
			setMessages(); //for removing previous messages

			res.forEach((val) => {
				setMessages((prev) => ({
					...prev,
					[val.id]: val,
				}));
			});
		});

		apiFetch(`user/chats/${chatId}/service_requests`).then(async (res) => {
			const body = await res.json();
			body.forEach((val) => {
				setMessages((prev) => ({
					...prev,
					[val.id]: val,
				}));
			});
		});
	}, [chatId]);

	useEffect(() => {
		if (!messages) return;
		const sortedMessages = Object.values(messages)?.sort(
			(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
		);
		setSorted(sortedMessages);
	}, [messages]);

	listen(props.id, (msg) =>
		setMessages((prev) => ({ ...prev, [msg.id]: msg }))
	);

	const handelSubmit = async (e) => {
		e.preventDefault();
		if (sendMessage.current.value.trim() === "") return e.target.reset();

		await apiFetch(`user/chats/${props.id}/messages`, "POST", {
			message: sendMessage.current.value,
		});
		e.target.reset();
	};

	const editMessageHandler = async (id) => {
		await apiFetch(`user/chats/${props.id}/messages/${id}`, "PATCH", {
			message: editMessage.current.value,
		});
	};

	return (
		<Box
			height="85vh"
			width="820px"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
		>
			<Box display="flex" justifyContent="space-between" textAlign="center">
				<Avatar size="lg" name="Dan Abrahmov" src={userData.profilerUrl} />
				<Box>
					{/* <h1 margin="0px">{userData.provider.name }</h1> */}
					<h1 margin="0px">name</h1>
					<p> Carpenter</p>
				</Box>
				<CloseButton style={{ border: "none" }} />
			</Box>

			<Box
				height="100%"
				flexDirection="column"
				display="flex"
				overflow="scroll"
				overflowX="hidden"
			>
				{sorted?.map((data) => {
					const { message, sender, service, user } = data;
					const isMessage = !!sender;
					return (
						<Box
							key={data.id}
							margin="10px"
							maxWidth="50%"
							width="fit-content"
							padding="10px"
							borderRadius="0.9rem"
							fontSize="20px"
							onMouseEnter={() => {
								setHoverData((prev) => ({
									...prev,
									[data.id]: { ...prev[data.id], hover: true },
								}));
							}}
							onMouseLeave={() => {
								setHoverData((prev) => ({
									...prev,
									[data.id]: {
										...prev[data.id],
										hover: false,
									},
								}));
							}}
							// onClick={isMessage ? () => editMessageHandler(data.id) : null}
							style={
								(isMessage ? sender.id : user.id) === currentUser.id
									? {
											backgroundColor: "rgb(255, 238, 238)",
											alignSelf: "flex-end",
									  }
									: { backgroundColor: "rgb(255, 169, 169)" }
							}
						>
							{message}
							{hoverData[data.id]?.hover ? (
								<Icon
									margin="0 10px"
									boxSize={6}
									as={AiFillEdit}
									onClick={() => {
										setHoverData((prev) => ({
											...prev,
											[data.id]: { ...prev[data.id], clicked: true },
										}));
									}}
								/>
							) : null}
							{hoverData[data.id]?.clicked ? (
								<Input
									box-shadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
									display="flex"
									variant="filled"
									ref={editMessage}
									onKeyUp={(e) => {
										if (e.key === "Enter") {
											editMessageHandler(data.id);
											setHoverData((prev) => ({
												...prev,
												[data.id]: { ...prev[data.id], clicked: false },
											}));
										}
									}}
								/>
							) : null}

							{service && <ProposalMsg proposalData={data} />}
						</Box>
					);
				})}
				{/* {showEditForm && <EditProposal cancleProposal={cancelProposal} />} */}
			</Box>

			<form
				onSubmit={handelSubmit}
				style={{
					display: "flex",
					alignItems: "center",
					margin: "10px 0",
				}}
			>
				<Icon margin="0 10px" boxSize={10} as={AiOutlineSmile} />
				<Icon margin="0 10px" boxSize={10} as={AiOutlinePaperClip} />
				<Input
					box-shadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
					display="flex"
					variant="filled"
					placeholder="Message"
					ref={sendMessage}
				/>
				<Button border="none" backgroundColor="transparent" type="submit">
					<Icon margin="0 10px" boxSize={10} as={AiOutlineSend} />
				</Button>
			</form>
		</Box>
	);
}
