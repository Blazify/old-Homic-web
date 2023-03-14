import { Flex, Spacer, Stack, Image, Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useColorModeValue } from "@chakra-ui/react";
import { apiFetch } from "../../Function/fetch";

const Category = () => {
	const color = useColorModeValue("black", "white");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		apiFetch("service/categories")
			.then(async (response) => {
				const res = await response.json();
				setCategories(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Box
			marginTop="-80px"
			display={{ lg: "flex" }}
			flexDirection={{ lg: "column" }}
			justifyContent={{ lg: "center" }}
			alignItems={{ lg: "center" }}
		>
			<Stack spacing="-10px">
				<Flex
					flexDirection="row"
					alignItems="center"
					marginLeft="1em"
					marginRight="1.5em"
				>
					<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
						Find By Category
					</h1>
					<Spacer />
					<Link
						to="/categorypage"
						style={{
							color: "#ea5455",
							cursor: "pointer",
							fontSize: "x-large",
							fontWeight: "bold",
							textDecoration: "none",
						}}
					>
						more...
					</Link>
				</Flex>
				<Flex justifyContent="space-around" marginLeft="2rem">
					{categories.edges?.map((category, index) => {
						if (index >= 4) return null;
						return (
							<Box
								key={index}
								display="flex"
								flexDirection="column"
								alignItems="center"
								margin="1em"
							>
								<Link to={`/categorypage/?${category.id}`}>
									<Image
										boxSize="305px"
										src="/images/painter short.jpg"
										alt=""
										_hover={{ transform: "scale(1.1)" }}
										cursor="pointer"
										borderRadius="lg"
										style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
									/>
								</Link>
								<Button
									to={`/categorypage/?${category.id}`}
									style={{
										textDecoration: "none",

										fontSize: "x-large",
										fontWeight: "bold",

										marginTop: "12px",

										border: "none",
										boxShadow: "none",
										background: "none",
									}}
									color={color}
								>
									{category.name}
								</Button>
							</Box>
						);
					})}
				</Flex>
			</Stack>
		</Box>
	);
};

export default Category;
