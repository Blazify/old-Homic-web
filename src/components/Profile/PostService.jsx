import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { apiFetch } from "../../Function/fetch";

const PostService = () => {
	const [categories, setCategories] = useState();
	const [values, setValues] = useState({
		name: "",
		category_id: "",
		description: "",
		price: 0,
	});

	const ServicePost = () => {
		console.log(values);
		apiFetch("service", "POST", values)
			.then(async (response) => {
				const res = await response.json();
				console.log("service posted", res);
			})
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		apiFetch("service/categories")
			.then(async (response) => {
				const res = await response.json();
				setCategories(res);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleChange = (event) => {
		setValues((pre) => {
			return {
				...pre,

				category_id: event.target.value,
			};
		});
	};

	return (
		<>
			<Box marginLeft="22vw">
				<FormControl>
					<p style={{ fontSize: "40px", fontWeight: "700" }}>Post a Service</p>
					<FormLabel marginTop="25px" fontWeight="700">
						Category
					</FormLabel>

					<Select
						placeholder="Select option"
						// value={values}
						onChange={handleChange}
					>
						{categories?.map((category, index) => {
							return (
								<option key={index} value={category.id}>
									{category.name}
								</option>
							);
						})}
					</Select>

					<FormLabel marginTop="25px" fontWeight="700">
						Full Name :
					</FormLabel>
					<Input
						width="20vw"
						type="name"
						border="5px solid black"
						onChange={(event) =>
							setValues((prev) => ({
								...prev,
								name: event.target.value,
							}))
						}
					/>
					<FormLabel marginTop="25px" fontWeight="700">
						Description
					</FormLabel>
					<Input
						type="Description"
						width="20vw"
						border="5px solid black"
						onChange={(event) =>
							setValues((prev) => ({
								...prev,
								description: event.target.value,
							}))
						}
					/>
					<FormLabel marginTop="25px" fontWeight="700">
						Price
					</FormLabel>
					<Input
						type="Number"
						width="20vw"
						border="5px solid black"
						onChange={(event) =>
							setValues((prev) => ({
								...prev,
								price: parseInt(event.target.value),
							}))
						}
					/>
				</FormControl>
			</Box>
			<Button
				height="3.3rem"
				marginLeft="24vw"
				mt="25px"
				width="16rem"
				borderRadius="10px"
				backgroundColor="#ea5455"
				color="white"
				fontSize="20px"
				fontWeight="bold"
				cursor="pointer"
				border="none"
				_hover={{ backgroundColor: "#ee8181" }}
				onClick={ServicePost}
			>
				Create Service Request
			</Button>
		</>
	);
};
export default PostService;
