import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	Input,
	MenuItemOption,
	MenuOptionGroup,
	MenuDivider,
	InputLeftElement,
	InputGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ImLocation } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
const DropDown = (props) => {
	const [setValue] = useState("Select City");

	const color = useColorModeValue("black", "#ea5455");

	return (
		<Menu>
			<MenuButton
				color={color}
				px={4}
				py={2}
				transition="all 0.2s"
				borderRadius="md"
				fontSize="x-large"
				borderWidth="0px"
				cursor="pointer"
				background="transparent"
			>
				<ImLocation />{" "}
				{localStorage.getItem("location")
					? localStorage.getItem("location")
					: "Select City"}{" "}
				<ChevronDownIcon />
			</MenuButton>
			<MenuList>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<BsSearch color="gray.300" />}
					/>
					<Input placeholder="Enter City" />
				</InputGroup>

				<MenuDivider />
				<MenuOptionGroup defaultValue="none" type="radio">
					<MenuItemOption
						border="none"
						_hover={{ bg: "gray.400" }}
						width="100%"
						value="Delhi"
						fontSize="20"
						color="black"
						onClick={() => {
							setValue("Delhi");
							props.setCity("Delhi");
							localStorage.setItem("location", "Delhi");
						}}
					>
						Delhi
					</MenuItemOption>
					<MenuItemOption
						border="none"
						_hover={{ bg: "gray.400" }}
						width="100%"
						value="Hyderabad"
						fontSize="20"
						color="black"
						onClick={() => {
							setValue("Hyderabad");
							props.setCity("Hyderabad");
							localStorage.setItem("location", "Hyderabad");
						}}
					>
						Hyderabad (Andhra Pradesh)
					</MenuItemOption>
					<MenuItemOption
						border="none"
						_hover={{ bg: "gray.400" }}
						width="100%"
						value="Bangalore"
						fontSize="20"
						color="black"
						onClick={() => {
							setValue("Banglore");
							props.setCity("Banglore");
							localStorage.setItem("location", "Banglore");
						}}
					>
						Bangalore (Karnataka)
					</MenuItemOption>
					<MenuItemOption
						border="none"
						_hover={{ bg: "gray.400" }}
						width="100%"
						value="Mumbai"
						fontSize="20"
						color="black"
						onClick={() => {
							setValue("Mumbai");
							props.setCity("Mumbai");
							localStorage.setItem("location", "Mumbai");
						}}
					>
						Mumbai (Maharashtra)
					</MenuItemOption>
				</MenuOptionGroup>
			</MenuList>
		</Menu>
	);
};

export default DropDown;
