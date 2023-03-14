import React, { useState, useEffect } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import CategoryDetailBox from "../categorydetailcomponent/CategoryDetailBox";
import { apiFetch } from "../../Function/fetch";

const BookmarkDetail = () => {
	const [bookMarkData, setBookMarkData] = useState([]);

	useEffect(() => {
		const userDataHandler = async () => {
			apiFetch("user/bookmarks").then(async (response) => {
				const res = await response.json();
				console.log(res);
				setBookMarkData(res);
			});

			// setBookMarkData([]);
			// let bookmarkIds = [];
			// const user = localStorage.getItem("userId");

			// await getCollectionData("metadata", user).then((data) => {
			// 	bookmarkIds = data.user_bookmark;
			// });

			// bookmarkIds.map(async (id) => {
			// 	await getCollectionData("service_posts", id).then((data) => {
			// 		setBookMarkData((oldArr) => [
			// 			...oldArr,
			// 			{
			// 				postedBy: data.posted_by,
			// 				id: data.id,
			// 				serviceAbout: data.serviceAbout,
			// 				servicePrice: data.servicePrice,
			// 				serviceReating: data.serviceReating,
			// 				serviceType: data.serviceType,
			// 			},
			// 		]);
			// 	});
			// });
		};
		userDataHandler();
	}, []);

	return (
		<React.Fragment>
			<Box style={{ height: " 100%", width: "100%" }}>
				<Stack spacing="20px">
					<Flex flexDirection="row" marginLeft="30px" marginRight="20px">
						<p style={{ fontSize: "xx-large", fontWeight: "bolder" }}>
							Your Bookmark
						</p>
					</Flex>
					<Flex
						flexDirection="row"
						justifyContent="space-evenly"
						flexFlow="row wrap"
						alignItems="center"
						marginTop="30px"
						overflow="hidden"
					>
						{bookMarkData.edges?.length >= 0 &&
							bookMarkData.edges.map((data, index) => {
								return <CategoryDetailBox key={index} data={data} />;
							})}
					</Flex>
				</Stack>
			</Box>
		</React.Fragment>
	);
};

export default BookmarkDetail;
