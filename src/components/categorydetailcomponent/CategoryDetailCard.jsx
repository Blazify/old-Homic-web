import React from "react";
import { Flex, Stack, Box, Text } from "@chakra-ui/react";
import CategoryDetailBox from "./CategoryDetailBox";

import { useEffect } from "react";
import { useState } from "react";
import { apiFetch } from "../../Function/fetch";
const CategoryDetailCard = (props) => {
	const [data, setData] = useState([]);
	const categoryType = window.location.href.substring(
		window.location.href.lastIndexOf("?") + 1
	);
	// const serviceCollection = collection(db, "service_posts");

	useEffect(() => {
		const createService = () => {
			apiFetch(`service/category/${categoryType}`).then(async (response) => {
				const res = await response.json();
				console.log(res);
				setData(res);
			});
		};

		createService();
	}, [categoryType]);

	return (
		<React.Fragment>
			<Box height="100%" weight="100%">
				<Stack spacing="-40px">
					<Flex
						flexDirection="row"
						justifyContent="flex-start"
						marginLeft="118px"
						marginRight="20px"
					>
						<Text fontSize="xx-large" fontWeight="700">
							{categoryType.toUpperCase()}
						</Text>
					</Flex>

					<Flex
						flexDirection="row"
						flexFlow="row wrap"
						justifyContent="center"
						alignItems="center"
						marginTop="30px"
						overflow="hidden"
					>
						{data.edges?.map((service, index) => {
							return <CategoryDetailBox key={index} data={service} />;
						})}
					</Flex>
				</Stack>
			</Box>
		</React.Fragment>
	);
};

export default CategoryDetailCard;
