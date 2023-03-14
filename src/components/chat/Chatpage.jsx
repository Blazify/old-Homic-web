import React, { useState } from "react";
import Contect from "./Contect";
import Chat from "./Chat";

export default function Chatpage(props) {
	const [serviceProvider, setServiceProvider] = useState({});

	const openChatHandler = async (userData) => {
		setServiceProvider(userData);
	};

	const chatId =
		window.location.href.lastIndexOf("?") > 0
			? window.location.href.substring(
					window.location.href.lastIndexOf("?") + 1
			  )
			: null;

	return (
		<section
			style={{
				display: "flex",
			}}
		>
			<Contect openChatHandler={openChatHandler}></Contect>
			{chatId && <Chat props={serviceProvider}></Chat>}
		</section>
	);
}
