import React from "react";

import { Avatar, Box, WrapItem } from "@chakra-ui/react";

import ProfileEdit from "./ProfileEdit";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfileActionReviews from "./ProfileActionReviews";
import PostService from "./PostService";
import ProfileActionSeller from "./ProfileActionSeller";
import ProfileActionAddress from "./ProfileActionAddress";
import { useColorModeValue } from "@chakra-ui/react";

import userSignOut from "../../Function/userSignOut";
import { apiFetch } from "../../Function/fetch";

export default function Profile() {
	const [userData, setUserData] = useState({});
	const [showAction, setShowAction] = useState("");
	// const [userReviews, setUserReviews] = useState({})
	const color = useColorModeValue("black", "white");

	useEffect(() => {
		apiFetch("auth/me")
			.then(async (response) => {
				const data = await response.json();
				console.log(data);
				setUserData({
					userName: data.name,
					userEmail: data.email,
					userType: data.user_type,
					// userReview: data.user_review,
					// userAddress: data.user_address,
					userPhoto: data.profile_picture,
				});
				localStorage.setItem("userData", JSON.stringify(data));
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	console.log(userData.userType && userData.userType.find(type => type === "USER"))



	const logOutHandler = () => {
		userSignOut();
	};

	return (
		<Box>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="flex-end"
				height="19vh"
				paddingBottom="3vh"
			>
				<Box display="flex">
					<WrapItem>
						<Avatar size="xl" name="Ryan Florence" src={userData.userPhoto} />
					</WrapItem>
					<Box margin="10px 0 0 25px">
						<h1 style={{ margin: "0" }}>{userData.userName}</h1>
						<p>{userData.userEmail}</p>
					</Box>
				</Box>

				<ProfileEdit />
			</Box>
			<Box display="flex" height="73vh">
				<Box borderTop="1px solid " width="30vw" color={color}>
					<ul
						style={{
							listStyle: "none",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<li
							style={{ cursor: "pointer" }}
							onClick={() => setShowAction("reviews")}
						>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								Reviews
							</h1>
						</li>
						<li style={{ cursor: "pointer" }}>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								History
							</h1>
						</li>
						<li
							style={{ cursor: "pointer" }}
							onClick={() => setShowAction("address")}
						>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								Address
							</h1>
						</li>
						<li style={{ cursor: "pointer" }}>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								Saved items
							</h1>
						</li>
						<li style={{ cursor: "pointer" }}>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								Help and Support
							</h1>
						</li>
						<li style={{ cursor: "pointer" }}>
							<h1 style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}>
								About
							</h1>
						</li>
						{userData.userType && userData.userType.find(type => type === "PROVIDER") ? (
							<li
								style={{ cursor: "pointer" }}
								onClick={() => setShowAction("service")}
							>
								<h1
									style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}
								>
									Post Service
								</h1>
							</li>
						) : (
							<li
								style={{ cursor: "pointer" }}
								onClick={() => setShowAction("seller")}
							>
								<h1
									style={{ margin: "0", fontSize: "30px", fontWeight: "bold" }}
								>
									Become a Seller
								</h1>
							</li>
						)}

						<li style={{ cursor: "pointer" }} onClick={logOutHandler}>
							<Link
								to="/"
								style={{
									textDecoration: "none",
									color: "inherit",
									fontSize: "30px",
									fontWeight: "bold",
								}}
							>
								Sign Out
							</Link>
						</li>
					</ul>
				</Box>
				<Box
					borderTop="1px solid "
					color={color}
					borderLeft="1px solid "
					width="70vw"
					height="100%"
				>
					{showAction === "reviews" && (
						<ProfileActionReviews  />
					)}
					{showAction === "seller" && <ProfileActionSeller />}
					{showAction === "address" && (
						<ProfileActionAddress address={userData.userAddress} />
					)}
					{showAction === "service" && <PostService />}
				</Box>
			</Box>
		</Box>
	);
}
