import React from "react";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const ToggleColormode = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const color = useColorModeValue("black", "white");

	return (
		<header>
			<Button onClick={toggleColorMode} variant="outline" color={color} cursor="pointer">
				Toggle{colorMode === "light"}
			</Button>
		</header>
	);
};

export default ToggleColormode;
