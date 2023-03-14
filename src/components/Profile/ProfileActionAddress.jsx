import React, { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Box } from "@chakra-ui/react";
import AddAddress from "./AddAddress";
import { apiFetch } from "../../Function/fetch";
import EditAddress from "./EditAddress";

export default function ProfileActionAddress(props) {
	const [userAddresses, setUserAddresses] = useState([]);

	useEffect(() => {
		apiFetch("user/addresses")
			.then(async (response) => {
				const res = await response.json();
				setUserAddresses(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<Box padding="25px">
			<Box display="flex" justifyContent="space-between">
				<h1>Your Address</h1>
				<AddAddress />
			</Box>
			{userAddresses.map((address, index) => {
				return (
					<Box
						key={index}
						padding="25px"
						display="flex"
						backgroundColor="red.100"
						justifyContent="space-around"
						margin="10px 0"
					>
						<Box display="flex">
							<IoPersonOutline size={60} />
							<Box marginLeft="20px">
								<h1>Home</h1>
								<p>
									{address.address} , {address.city} ,{address.state} ,
									{address.country} ,{address.pincode}.
								</p>
							</Box>
						</Box>
						<EditAddress address={address} />
					</Box>
				);
			})}
		</Box>
	);
}
