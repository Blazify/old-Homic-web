import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginOverlay from "../LoginOverlay/LoginOverlay";

import { Box, Button, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import DropDown from "../Dropdown/DropDown";
import ToggleColormode from "../Header/ToggleColormode";
import { useColorModeValue } from "@chakra-ui/react";

const Navbar = (props) => {
	const [colore, setColor] = useState(!props.transparent);
	const changeColor = () => {
		if (window.scrollY >= 350) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	props.transparent && window.addEventListener("scroll", changeColor);
	const color = useColorModeValue("black", "#ea5455");

	return (
		<Box
			style={
				colore
					? {
							height: "6vh",
							minHeight: "60px",
							width: "100vw",
							display: "flex",
							position: "fixed",
							top: "0",
							justifyContent: "space-between",
							alignItems: "center",
							zIndex: "1",
							backgroundColor: "#ffdede",
					  }
					: {
							height: "6vh",
							minHeight: "60px",
							width: "100vw",
							display: "flex",
							position: "fixed",
							top: "0",
							justifyContent: "space-between",
							alignItems: "center",
							zIndex: "1",
					  }
			}
		>
			<Box display="flex" justifyContent="space-around" width="35vw">
				<Link
					to="/"
					style={{
						fontWeight: "bold",
						fontSize: "40px",
						margin: "15px",

						textDecoration: "none",
					}}
				>
					<img
						src="/images/HOMIC_logo_only.png"
						alt="logo"
						style={{
							marginTop: "14px",
							height: "68px",
						}}
					/>
				</Link>
				<DropDown setCity={props.setCity} />
			</Box>

			<Box
				width="30%"
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
			>
				<Box width="100%" position="relative" display="flex">
					<input
						type="text"
						style={{
							width: "100%",
							border: "3px solid #ea5455",
							borderRight: "none",
							padding: "5px",
							height: "25px",
							fontSize: "17px",
							borderRadius: "5px 0 0 5px",
							outline: "none",
							color: "#ea5455",
						}}
						placeholder="What are you looking for?"
					/>
					<Button
						type="submit"
						width="40px"
						height="41px"
						border="1px solid #ea5455"
						background="#ea5455"
						textAlign="center"
						color="#fff"
						borderRadius="0 5px 5px 0"
						cursor="pointer"
						fontSize="20px"
					>
						<Icon as={BsSearch} />
					</Button>
				</Box>
			</Box>
			<Box display="flex" alignItems="center">
				<Link
					to="/bookmark"
					style={{
						fontSize: "25px",
						textDecoration: "none",
						margin: "25px",
						position: "relative",
					}}
				>
					<BsBookmark size="2rem" color={color} />
				</Link>

				<Link
					to="/chat"
					style={{
						fontSize: "25px",
						textDecoration: "none",
						margin: "25px",
						position: "relative",
					}}
				>
					<BsChatLeftText size="2rem" cursor="pointer" color={color} />
				</Link>
				<Box>
					<ToggleColormode />
				</Box>
				<Box
					style={{
						fontSize: "25px",
						textDecoration: "none",
						margin: "25px",
						position: "relative",
					}}
				>
					<LoginOverlay />
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
