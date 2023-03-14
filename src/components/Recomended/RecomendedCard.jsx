import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import CategoryDetailBox from "../categorydetailcomponent/CategoryDetailBox";

import { Link } from "react-router-dom";

const RecomendedCard = (props) => {
	const [data, setData] = useState([]);

	const serviceCollection = collection(db, "service_posts");
	useEffect(() => {
		const createService = async () => {
			const firedata = await getDocs(serviceCollection);
			setData(
				firedata.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		createService();
	});

	let counter = 0;

	return (
		<Box
			display={{ lg: "flex" }}
			flexDirection={{ lg: "column" }}
			justifyContent={{ lg: "center" }}
			alignItems={{ lg: "center" }}
		>
			<Stack spacing="-65px">
				<Flex
					flexDirection="row"
					marginLeft="1.8em"
					marginRight="2.2em"
					justifyContent="space-between"
					alignItems="center"
				>
					<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
						Recomended for you
					</h1>
					<Link
						to=""
						style={{
							cursor: "pointer",
							fontSize: "x-large",
							fontWeight: "bold",
							textDecoration: "none",
							color: "#ea5455",
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
					{data.map((doc, index) => {
						const hasLocation = localStorage.getItem("location") ? true : false;
						if (hasLocation && doc.city === localStorage.getItem("location")) {
							return <CategoryDetailBox key={index} data={doc} />;
						}
						if (!hasLocation && counter < 4) {
							counter = counter + 1;
							return <CategoryDetailBox key={index} data={doc} />;
						}
						return <></>;
					})}
				</Flex>
			</Stack>
		</Box>
	);
};

export default RecomendedCard;
