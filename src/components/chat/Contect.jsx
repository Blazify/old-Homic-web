import React, { useState, useEffect } from "react";
import {
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Icon,
	InputGroup,
	InputLeftElement,
	Input,
	Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";

import { apiFetch } from "../../Function/fetch";
import { listen } from "../../Function/websocket";
import { useNavigate } from "react-router-dom";

export default function Contect(props) {
	const [contectData, setContectData] = useState([]);
	const userData = JSON.parse(localStorage.getItem("userData"));
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const chats = await (await apiFetch("user/chats")).json();
			setContectData(chats);
			chats.forEach((chat) =>
				listen(chat.id, () => {
					// notification or number of unread chat
				})
			);
		})();
	}, []);

	const openChatHandler = (data) => {
		console.log("och ", data);
		navigate(`/chat/?${data.id}`);
	};

	return (
		<Box
			backgroundColor="rgb(255, 255, 255)"
			height="81vh"
			borderRadius="2rem 0 0 2rem"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			padding="20px"
			width="400px"
		>
			<Box display="flex" justifyContent="space-between">
				<Avatar
					size="lg"
					name="Dan Abrahmov"
					src="https://bit.ly/dan-abramov"
				/>

				<Menu>
					<MenuButton
						as={IconButton}
						color="#000000"
						size=""
						aria-label="Options"
						icon={<Icon boxSize={6} as={BsThreeDotsVertical} />}
						variant="outline"
						border="none"
						background="white"
					/>
					<MenuList>
						<MenuItem>New Tab</MenuItem>
						<MenuItem>New Window</MenuItem>
						<MenuItem>Open Closed Tab</MenuItem>
						<MenuItem>Open File...</MenuItem>
					</MenuList>
				</Menu>
			</Box>
			<Box
				margin-top="10px"
				box-shadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
			   rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
			>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="#242424" />}
					/>
					<Input type="tel" placeholder="Phone number" />
				</InputGroup>
			</Box>

			<Box
				height="100%"
				display="flex"
				flexDirection="column"
				overflow="scroll"
				overflowX="hidden"
				marginTop="10px"
			>
				{contectData.map((data, key) => {
					return (
						<Box
							boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
						rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
							display="flex"
							borderRadius="0.5rem"
							margin="10px 0"
							_hover={{
								backgroundColor: "#ffe4e4",
							}}
							key={key}
							onClick={() => {
								props.openChatHandler(data);
								openChatHandler(data);
							}}
						>
							<Avatar
								size="lg"
								name="Dan Abrahmov"
								src={
									userData.id !== data.user.id
										? data.user.profile_picture
										: data.provider.profile_picture
								}
							/>
							<Box
								width="100%"
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
							>
								<Box
									width="200px"
									height="35px"
									overflow="hidden"
									textAlign="center"
								>
									<h1 style={{ margin: "0" }}>
										{data.user.id !== userData.id
											? data.user.name
											: data.provider.name}
									</h1>
								</Box>
								<p style={{ margin: "0" }}> {}</p>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
