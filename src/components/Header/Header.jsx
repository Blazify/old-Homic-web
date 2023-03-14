import { Box } from "@chakra-ui/react";
import React from "react";

const Header = (props) => {
	return (
		<Box height="342px" width="100%" textAlign="center">
			<img
				style={{
					width: "100%",
					height: "80%",
					objectFit: "cover",
					borderRadius:"0 0 40px 40px",
					opacity: "0.5",
				}}
				src="/images/navbar_Bg.jpg"
				alt=""
				loading="lazy"
			/>
		</Box>
	);
};
export default Header;
