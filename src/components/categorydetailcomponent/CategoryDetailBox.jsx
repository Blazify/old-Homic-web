import React, { useEffect } from "react";
import { Flex, Box, Image, Icon, Avatar } from "@chakra-ui/react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";

import { apiFetch } from "../../Function/fetch";

const CategoryDetailBox = (props) => {
	const serviceDetail = props.data;

	const [hasBookmark, setHasBookMark] = useState(false);
	// const [bookmarkChange, setBookmarkChange] = useState(1);
	// const [bookmarkData, setBookmarkData] = useState([]);

	const color = useColorModeValue("black", "white");
	const color1 = useColorModeValue("gray.500", "gray.300");

	const addBookMarkHandler = async () => {
		apiFetch(`service/${serviceDetail.id}/bookmark`, "POST").then(
			async (response) => {
				if (response.status === 200) {
					setHasBookMark(true);
				}
			}
		);
	};

	useEffect(() => {
		apiFetch("user/bookmarks").then(async (response) => {
			const res = await response.json();
			console.log("res", res);
			res.edges.map((bookmark) => {
				return bookmark.id === serviceDetail.id ? setHasBookMark(true) : null;
			});
		});
	}, [serviceDetail.id]);

	const removeBookMarkHandler = async () => {
		apiFetch(`service/${serviceDetail.id}/bookmark`, "DELETE").then(
			async (response) => {
				const res = await response.json();
				console.log("remove", res);
				setHasBookMark(false);
			}
		);
	};
	// useEffect(() => {
	//   const hasBookmarkHandler = async () => {
	//
	//

	//
	// }, [bookmarkChange, serviceDetail.id]);

	// useEffect(() => {
	//   const userDataHandler = async () => {
	//
	// }, []);

	if (props.data) {
		return (
			<Flex
				flexDirection="row"
				justifyContent="space-evenly"
				marginTop="30px"
				overflow="hidden"
			>
				{/* <Link
          to={`/detail/?${serviceDetail.id}`}
          style={{ textDecoration: "none", color: "black" }}
        > */}
				<Box
					// className={classes.mainbox}
					maxW={{ sm: "280px" }}
					borderWidth="1px"
					borderRadius="lg"
					overflow="hidden"
					margin="30px"
					boxShadow={{ sm: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
				>
					<Link
						to={`/detail/?${serviceDetail.id}`}
						style={{ textDecoration: "none", color: "black" }}
					>
						<Image
							boxSize="sm"
							src="/images/painter recomended.jpg"
							alt="test1"
							maxH={{ sm: "250px" }}
						/>
					</Link>

					<Box
						paddingLeft={{ lg: "1" }}
						paddingRight={{ lg: "2" }}
						paddingBottom={{ lg: "1" }}
					>
						<Box display="flex">
							<Avatar
								boxSize={{ md: "28px", lg: "35px", xl: "50px" }}
								src="/images/painter short.jpg"
							/>
							{/* <Avatar
                boxSize={{ md: "20px", lg: "35px", xl: "50px" }}
                src={serviceDetail.Icon}
              /> */}
							<Link
								to={`/detail/?${serviceDetail.id}`}
								style={{
									textDecoration: "none",
									color: "black",
									display: "flex",
								}}
							>
								<Box
									color={color}
									fontWeight="bold"
									letterSpacing="wide"
									fontSize={{ lg: "24px", xl: "25px" }}
									textTransform="uppercase"
									ml="2"
									width="90px"
									height="30px"
									overflow="hidden"
								>
									{serviceDetail.name}
								</Box>

								<Box
									color={color1}
									fontWeight="semibold"
									letterSpacing="wide"
									fontSize={{ lg: "xs", xl: "md" }}
									textTransform="uppercase"
									ml="1"
									width="80px"
									display="flex"
									justifyContent="flex-end"
								>
									{/* {serviceDetail.ServiceCategory.name} */}
								</Box>
							</Link>

							{!hasBookmark ? (
								<Box ml={{ md: "6", xl: "1" }} onClick={addBookMarkHandler}>
									<Icon
										boxSize={{ lg: "1.9rem", xl: "2.4rem" }}
										as={BsBookmark}
										color="#ea5455"
									/>
								</Box>
							) : (
								<Box ml={{ md: "5", xl: "1" }} onClick={removeBookMarkHandler}>
									<Icon
										boxSize={{ lg: "1.7rem", xl: "2.4rem" }}
										as={BsBookmarkFill}
										color="#ea5455"
									/>
								</Box>
							)}
						</Box>

						<Box
							mt="1"
							fontWeight={{ lg: "semibold", xl: "bold" }}
							fontSize={{ lg: "1.1rem", xl: "1.1rem" }}
							lineHeight="tight"
							noOfLines={1}
						>
							{serviceDetail.description}
						</Box>

						<Box>
							{serviceDetail.price}
							{/* <Box as="span" color="gray.600" fontSize={{ lg: "sm", xl: "lg" }}>
                / wk
              </Box> */}
						</Box>

						<Box display="flex" mt="2" alignItems="center">
							{Array(5)
								.fill("")
								.map((_, i) => (
									<StarIcon
										key={i}
										color={
											// i < serviceDetail.serviceReating ? "#ea5455" : "gray.300"
											i < 3 ? "#ea5455" : "gray.300"
										}
									/>
								))}
							<Box
								as="span"
								ml="2"
								color={color1}
								fontSize={{ lg: "sm", xl: "lg" }}
							>
								{/* {serviceDetail.reviewCount} reviews */}
								20 reviews
							</Box>
						</Box>
					</Box>
				</Box>
				{/* </Link> */}
			</Flex>
		);
	} else {
		<Box></Box>;
	}
};

export default CategoryDetailBox;
