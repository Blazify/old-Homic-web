import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import { Avatar, Button } from "@chakra-ui/react";

import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LabourProfileOverlay from "../LabourProfile/LabourProfileOverlay";

import { StarIcon } from "@chakra-ui/icons";
import ServiceQuestion from "./ServiceQuestion";
import { useColorModeValue } from "@chakra-ui/react";
import { apiFetch } from "../../Function/fetch";
import AddReview from './AddReview'

// import { getAuth } from "firebase/auth";

const Detail = (props) => {
	// const navigate = useNavigate();

	const [serviceData, setServiceData] = useState({});
	// const user = getAuth().currentUser.uid;

	const color = useColorModeValue("black", "white");
	const color1 = useColorModeValue("gray.500", "gray.300");

	const ServiceId = window.location.href.substring(
		window.location.href.lastIndexOf("?") + 1
	);

	useEffect(() => {
		const userDataHandler = async () => {
			apiFetch(`service/${ServiceId}`).then(async (response) => {
				const data = await response.json();
				console.log(data.provider);
				setServiceData({
					// postedBy: data.provide.name,
					serviceAbout: data.description,
					servicePrice: data.price,
					// serviceReating: data.service.serviceReating,
					serviceType: data.name,
					// serviceReview: data.service.serviceReview,
					serviceQuestion: data.serviceQuestion,
					serviceProviderName: data.provider.name,
					serviceProvider: data.provider,
					serviceProviderDescription: data.ServiceCategory.description,
				});
			});

			// await getCollectionData("service_posts", ServiceId).then((data) => {
			// 	setServiceData({
			// 		postedBy: data.posted_by,
			// 		serviceAbout: data.serviceAbout,
			// 		servicePrice: data.servicePrice,
			// 		serviceReating: data.serviceReating,
			// 		serviceType: data.serviceType,
			// 		serviceReview: data.serviceReview,
			// 		serviceQuestion: data.serviceQuestion,
			// 		serviceProviderName: data.name ? data.name : "John Doe",
			// 	});
			// });
		};
		userDataHandler();
	}, [ServiceId]);

	const [serviceReviews , setServiceReviews] = useState([]) 

	useEffect(() => {

		apiFetch(`service/${ServiceId}/reviews`)
		.then(async (response) => {
			const res = await response.json();
			
			setServiceReviews(res)


		})
		.catch((error) => {
			console.log(error);
		});

	},[ServiceId])

	

	// const ChatNowHandler = async (e) => {
	// 	e.preventDefault();
	// 	let userContact = [];
	// 	let providerContact = [];
	// 	let userHasContact = false;
	// 	let providerHasContact = false;
	// 	const userDoc = doc(db, "metadata", user);
	// 	const serventDoc = doc(db, "metadata", serviceData.postedBy);

	// 	await getCollectionData("metadata", user).then((data) => {
	// 		data.user_contacts.map((contact) => {
	// 			if (contact.id === serviceData.postedBy) {
	// 				return (userHasContact = true);
	// 			}
	// 			return false;
	// 		});
	// 		userContact = data.user_contacts;
	// 	});

	// 	await getCollectionData("metadata", serviceData.postedBy).then((data) => {
	// 		data.user_contacts.map((contact) => {
	// 			if (contact.id === user) {
	// 				return (providerHasContact = true);
	// 			}
	// 			return false;
	// 		});
	// 		providerContact = data.user_contacts;
	// 	});

	// 	// if both have contact
	// 	if (userHasContact && providerHasContact) {
	// 		navigate(`/chat/?${serviceData.postedBy}`, { replace: true });
	// 		return;
	// 	}

	// 	const newContactList = [];
	// 	const ServentContactList = [];

	// 	newContactList.push(
	// 		{
	// 			id: serviceData.postedBy,
	// 			jobName: serviceData.serviceType,
	// 			name: serviceData.serviceProviderName,
	// 			profilerUrl: "https://bit.ly/dan-abramov",
	// 		},
	// 		...userContact
	// 	);

	// 	ServentContactList.push(
	// 		{
	// 			id: user,
	// 			jobName: serviceData.serviceType,
	// 			name: user,
	// 			profilerUrl: "https://bit.ly/dan-abramov",
	// 		},
	// 		...providerContact
	// 	);

	// 	await updateDoc(userDoc, { user_contacts: newContactList });
	// 	await updateDoc(serventDoc, { user_contacts: ServentContactList });
	// 	navigate("/chat", { replace: true });
	// };

	return (
		<>
			<Navbar />

			<Box height="100%" overflow="hidden">
				<Box margin="20px 95px 0 95px" height="50vh">
					<img
						src="/images/painter recomended.jpg"
						alt=""
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					margin=" 20px 95px 0 95px"
				>
					<Box
						display="flex"
						width={{ md: "220px", lg: "280px" }}
						flexDirection="row"
						justifyContent="space-between"
						alignItems={{ lg: "center" }}
					>
						<Avatar
							boxSize={{ md: "40px", lg: "50px", xl: "55px" }}
							src="https://bit.ly/dan-abramov"
						/>

						<Text
							color={color}
							fontSize={{ md: "larger", lg: "x-large", xl: "x-large" }}
							fontWeight="bold"
							marginTop="-1px"
						>
							{serviceData.serviceProviderName}
						</Text>
						<Text
							color={color1}
							fontWeight="bold"
							fontSize={{ md: "small", lg: "medium", xl: "large" }}
							marginTop="-1px"
						>
							{serviceData.serviceType}
						</Text>
					</Box>
					<Box
						fontSize={{ md: "large", lg: "x-large", xl: "xx-large" }}
						fontWeight="bold"
						cursor="pointer"
					>
						<LabourProfileOverlay serviceData={serviceData.serviceProvider} />
					</Box>
				</Box>
				<Box margin="20px 95px 0 95px">
					<p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
						{serviceData.serviceProviderDescription}
					</p>
				</Box>
				<Box margin="20px 95px 0 95px">
					<Text
						fontSize={{ md: "large", lg: "larger", xl: "xx-large" }}
						width={{ md: "50vw", lg: "80vw" }}
						fontWeight={{ md: "500", lg: "700", xl: "500" }}
					>
						
						{serviceData.serviceAbout}
						{/* I create high quality painting design on your wall and makes your
						room out of hell and will make your walls look more beautiful and
						nicer than ever ...more */}
					</Text>
				</Box>
				<Box display="flex" margin="20px 95px 0 95px">
					<Link
						to={`/servicerequest/?${ServiceId}`}
						style={{ textDecoration: "none" }}
					>
						<Button
							cursor="pointer"
							background="#ea5455"
							color="white"
							_hover={{ background: "#ee8181" }}
							border="none"
							width={{ md: "20vw", lg: "23vw", xl: "26vw" }}
							marginRight={{ md: "20px" }}
							height={{ lg: "5vh", xl: "6vh" }}
							fontSize={{ lg: "large", xl: "x-large" }}
						>
							Create Service Requeest
						</Button>
					</Link>

					{/* <Button
						// onClick={ChatNowHandler}
						cursor="pointer"
						background="#ffe2e2"
						color="#ea5455"
						border="none"
						borderRadius="0.5rem"
						width={{ md: "20vw", lg: "23vw", xl: "26vw" }}
						fontSize={{ lg: "large", xl: "x-large" }}
						_hover={{ background: "#ffe8e8" }}
						
					>
						Chat now
					</Button> */}
				</Box>
				<Box margin="20px 95px 0 95px">
					<Tabs colorScheme="red">
						<TabList mb={{ lg: "1em", xl: "3em" }}>
							<Tab
								marginRight={{ lg: "30px", xl: "80px" }}
								fontSize={{ lg: "xl", xl: "xx-large" }}
								fontWeight="bold"
								cursor="pointer"
								border="none"
							>
								Reviews
							</Tab>
							<Tab
								marginRight={{ lg: "30px", xl: "80px" }}
								fontSize={{ lg: "xl", xl: "xx-large" }}
								fontWeight="bold"
								cursor="pointer"
								border="none"
							>
								Pricing
							</Tab>
							<Tab
								marginRight={{ lg: "30px", xl: "80px" }}
								fontSize={{ lg: "xl", xl: "xx-large" }}
								fontWeight="bold"
								cursor="pointer"
								border="none"
							>
								Deliverables
							</Tab>
							<Tab
								marginRight={{ lg: "30px", xl: "80px" }}
								fontSize={{ lg: "xl", xl: "xx-large" }}
								fontWeight="bold"
								cursor="pointer"
								border="none"
								onClick={{ color: "red" }}
							>
								Frequently Asked Questions
							</Tab>
						</TabList>

						<TabPanels>
							<TabPanel>
								<AddReview ServiceId={ServiceId}/>
								<Box height="100%" padding="25px">
									{/* <h1>Reviews</h1> */}
									{serviceReviews.length > 0  ? (
										serviceReviews.map((element) => {
											return (
												<Box p="25px">
													<Box display="flex" justifyContent="space-between">
														<Box display="flex">
															<Avatar
																size="lg"
																name="Dan Abrahmov"
																src="https://bit.ly/dan-abramov"
															/>
															<Box marginLeft="20px">
																<h2 style={{ margin: "0" }}>{element.user.name}</h2>
																<h1>xyz@gmail.com</h1>
															</Box>
														</Box>
														
														<Box>
															<Box display="flex" mt="2" alignItems="center">
																{Array(5)
																	.fill("")
																	.map((_, i) => (
																		<StarIcon
																			key={i}
																			color={
																				i < element.rating
																					? "teal.500"
																					: "gray.300"
																			}
																		/>
																	))}
															</Box>
															<h1>5 days ago</h1>
														</Box>
													</Box>
													<Box
														margin="15px 0 0"
														fontSize="22px"
														display="flex"
														justifyContent="center"
													>
														<p style={{ width: "95%" }}>
															{element.description}
														</p>
													</Box>
												</Box>
											);
										})
									) : (
										<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
											No Reviews yet
										</h1>
									)}
								</Box>
							</TabPanel>
							<TabPanel>
								<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
									Pricing
								</h1>
							</TabPanel>
							<TabPanel>
								<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
									Deliverables
								</h1>
							</TabPanel>
							<TabPanel>
								<h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
									Frequently Asked Questions
								</h1>
								{serviceData.serviceQuestion && (
									<ServiceQuestion serviceData={serviceData} />
								)}
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Box>
			{/* </div> */}
		</>
	);
};

export default Detail;
