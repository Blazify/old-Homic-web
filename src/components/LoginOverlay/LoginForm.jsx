import React, { useState } from "react";
import { BsFlag } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import EmailPasswordForm from "./EmailPasswordForm.jsx";
import { Input, FormControl, FormLabel, Box, Button } from "@chakra-ui/react";
import { apiFetch } from "../../Function/fetch.js";
import { useColorModeValue } from "@chakra-ui/react";

export default function LoginForm(props) {
	const [showInput, setShowInput] = useState(false);
	const [ShowEmailPasswordForm, setShowEmailPasswordForm] = useState(false);
	const [requireInfo, setRequireInfo] = useState(false);
	const color = useColorModeValue("black", "black");

	const [values, setValues] = useState({
		phone_number: "",
		otp: "",
		name: "",
		email: "",
	});

	const checkUser = () => {
		apiFetch("auth/checkIfUserExists", "POST", values).then(
			async (response) => {
				const res = await response.json();
				if (res.exists) {
					console.log("user exists");
					sendOtp();
				} else {
					setRequireInfo(true);
					sendOtp();
				}
			}
		);
	};
	const sendOtp = () => {
		apiFetch("auth/sendOTP", "POST", values).then((response) => {
			if (response.status === 401) {
				alert("Invalid Number");
			} else if (response.status === 400) {
				alert("ERROR:Fill the required fields");
			} else {
				console.log(values);
				setShowInput(true);
				console.log(response);
			}
		});
	};
	const registerPhoneNumber = () => {
		apiFetch("auth/register", "POST", values)
			.then(async (response) => {
				const res = await response.json();
				if (response.status === 200) {
					localStorage.setItem("accessToken", res.access_token);
					localStorage.setItem("refreshToken", res.refreshToken);
					props.onClose();
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const confirmOtp = () => {
		apiFetch("auth/login", "POST", values)
			.then(async (response) => {
				const res = await response.json();
				if (response.status === 500 && res.message === "User does not exist") {
					registerPhoneNumber();
				} else if (response.status === 200) {
					localStorage.setItem("accessToken", res.access_token);
					localStorage.setItem("refreshToken", res.refresh_token);
					localStorage.setItem("isLogIn", true);
					window.location.reload();
					props.onClose();
				}
			})
			.catch((e) => {
				console.log(e);
				
			});
	};
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				style={
					!showInput
						? {
								flexDirection: "column",
								justifyContent: "space-around",
								height: "40vh",
						  }
						: { height: "40vh" }
				}
			>
				{!showInput && !ShowEmailPasswordForm && (
					<>
						<Box
							display="flex"
							justifyContent="start"
							width="80%"
							cursor="pointer"
						>
							<Box
								paddingRight="15px"
								borderRight="1px solid rgba(0, 0, 0, 0.277)"
								color={color}
							>
								<BsFlag size={30} />
							</Box>
							<div id="recaptcha-container"></div>
							<Input
								marginLeft="20px"
								fontSize="20px"
								fontWeight="bold"
								type="tel"
								placeholder="Phone"
								htmlSize={20}
								width="auto"
								boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
								color={color}
								onChange={(event) =>
									setValues((prev) => ({
										...prev,
										phone_number: event.target.value,
									}))
								}
							/>
						</Box>

						<Button
							backgroundColor="#ea5455"
							color="#fff"
							cursor="pointer"
							height="45px"
							width="80%"
							borderRadius="2rem"
							border="none"
							fontSize="20px"
							_hover={{ backgroundColor: "#ee8181" }}
							onClick={checkUser}
						>
							Continue
						</Button>
					</>
				)}

				{showInput && !ShowEmailPasswordForm && (
					<FormControl
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="-45px"
					>
						{requireInfo && (
							<>
								<FormLabel>Enter Email</FormLabel>
								<Input
									htmlSize={20}
									width="auto"
									placeholder="Email"
									type="input"
									borderColor="#d9d9d9"
									// marginTop="10px"
									marginBottom="10px"
									onChange={(event) =>
										setValues((prev) => ({
											...prev,
											email: event.target.value,
										}))
									}
								/>
								<FormLabel>Enter Your Name</FormLabel>
								<Input
									htmlSize={20}
									width="auto"
									placeholder="Name"
									type="input"
									borderColor="#d9d9d9"
									// marginTop="10px"
									marginBottom="10px"
									onChange={(event) =>
										setValues((prev) => ({ ...prev, name: event.target.value }))
									}
								/>
							</>
						)}
						<FormLabel>Enter Your OTP</FormLabel>
						<Input
							htmlSize={40}
							width="auto"
							placeholder="number"
							type="number"
							borderColor="#d9d9d9"
							// marginTop="5px"
							marginBottom="10px"
							onChange={(event) =>
								setValues((prev) => ({ ...prev, otp: event.target.value }))
							}
						/>
						<Button
							backgroundColor="#ea5455"
							color="#fff"
							cursor="pointer"
							height="45px"
							width="80%"
							borderRadius="2rem"
							border="none"
							fontSize="20px"
							_hover={{ backgroundColor: "#ee8181" }}
							// onClick={onSubmitOtp}
							onClick={confirmOtp}
						>
							Continue
						</Button>
					</FormControl>
				)}

				{!showInput && !ShowEmailPasswordForm && (
					<>
						<h2  style={{ margin: "0",color:"black" }}>OR</h2>
						<Box
							display="flex"
							justifyContent="start"
							width="80%"
							cursor="pointer"
							onClick={() => {
								setShowEmailPasswordForm(true);
							}}
						>
							<Box
								paddingRight="15px"
								borderRight="1px solid rgba(0, 0, 0, 0.277)"
								color={color}
							>
								<SiGmail size={30} />
							</Box>

							<h1
								style={{
									margin: "0 0 0 20px",
									fontSize: "25px",
									fontWeight: "bold",
									color:'black'
								}}
							>
								Sign in with Email
							</h1>
						</Box>
					</>
				)}

				{ShowEmailPasswordForm && (
					<EmailPasswordForm
						onClose={props.onClose}
						logInHandler={props.logInHandler}
					/>
				)}
			</Box>

			<div></div>
		</>
	);
}
