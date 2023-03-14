import React from "react";

import { Box, Flex, Stack } from "@chakra-ui/react";

import { useState, useEffect } from "react";
// import { db } from "../../firebase";
// import { getDoc, doc } from "firebase/firestore";

import { Link } from "react-router-dom";
import CategoryDetailBox from "../categorydetailcomponent/CategoryDetailBox";
import { apiFetch } from "../../Function/fetch";
// import getCollectionData from "../../Function/getCollectionData";

const RecentlyViewedCard = () => {
	// const [recentlyViewedData, setRecentlyViewedData] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		apiFetch("user/recentlyViewed").then(async (response) => {
			const res = await response.json();
			console.log(res);
			setData(res);
		});
	}, []);

	return (
		<Box
			display={{ lg: "flex" }}
			flexDirection={{ lg: "column" }}
			justifyContent={{ lg: "center" }}
			alignItems={{ lg: "center" }}
			marginTop={{ lg: "20px" }}
		>
			<Stack spacing="20px">
				<Flex flexDirection="row" marginLeft="1em">
					<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
						Recently Viewed
					</h1>

					<Link
						to=""
						style={{
							color: "#ea5455",
							cursor: "pointer",
							fontSize: "x-large",
							textDecoration: "none",
							fontWeight: "bold",
						}}
					>
						more...
					</Link>
				</Flex>
				<Flex
					flexDirection="row"
					justifyContent="space-evenly"
					alignItems="center"
					marginTop="30px"
					overflow="hidden"
				>
					{data.edges?.length >= 0 &&
						data.edges?.map((data2, index) => {
							if (index > 3) return null;
							return <CategoryDetailBox key={index} data={data2} />;
						})}
				</Flex>
			</Stack>
		</Box>
	);
};

export default RecentlyViewedCard;
