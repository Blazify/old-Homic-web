import React, { useState } from "react";

import {
	Input,
	FormControl,
	FormLabel,
	InputGroup,
	InputRightElement,
	Button,
	Box,
} from "@chakra-ui/react";

export default function EmailPasswordForm(props) {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const [registerForm, setRegisterForm] = useState(false);
	// const [loginForm,setLoginForm] = useState(false);
	const formHandler = () => {
		setRegisterForm(true);
	};
	const loginForm = () => {
		setRegisterForm(false);
	};
	console.log(registerForm);

	const [values, setValues] = useState({
		email: "",
		pass: "",
	});

	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	const [, setErrorMsg] = useState("");

	const handleSubmission = () => {
		if (!values.email || !values.pass) {
			setErrorMsg("Fill all fields");
			return;
		}
		setErrorMsg("");

		setSubmitButtonDisabled(true);
		// signInWithEmailAndPassword(auth, values.email, values.pass)
		// 	.then(async (data) => {
		// 		setSubmitButtonDisabled(false);
		// 		localStorage.setItem("isLogIn", true);
		// 		localStorage.setItem("userId", data._tokenResponse.localId);
		// 		props.logInHandler();
		// 		props.onClose();
		// 	})
		// 	.catch((err) => {
		// 		setSubmitButtonDisabled(false);
		// 		alert(err.message);
		// 	});
	};

	return (
		<>
			{!registerForm && (
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input
						htmlSize={40}
						width="auto"
						placeholder="Email"
						borderColor="#d9d9d9"
						onChange={(event) =>
							setValues((prev) => ({ ...prev, email: event.target.value }))
						}
					/>
					<FormLabel>Password</FormLabel>
					<InputGroup size="md">
						<Input
							htmlSize={40}
							width="auto"
							type={show ? "text" : "password"}
							placeholder="Enter password"
							borderColor="#d9d9d9"
							onChange={(event) =>
								setValues((prev) => ({ ...prev, pass: event.target.value }))
							}
						/>
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Box style={{ display: "flex" }}>
						<p>Doesn't have an account ?</p>
						<Button
							border="none"
							background="none"
							marginTop="-2px"
							marginLeft="-4px"
							color="blue"
							boxShadow="none"
							onClick={formHandler}
							_hover={{ background: "none", cursor: "pointer" }}
							size="sm"
						>
							register
						</Button>
					</Box>

					<Box
						color="blue"
						marginTop="20px"
						display="flex"
						justifyContent="center"
					>
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
							disabled={submitButtonDisabled}
							onClick={handleSubmission}
						>
							Continue
						</Button>
					</Box>
				</FormControl>
			)}
			{registerForm && (
				<FormControl>
					<FormLabel>Enter Your Email</FormLabel>
					<Input
						htmlSize={40}
						width="auto"
						placeholder="Email"
						borderColor="#d9d9d9"
						onChange={(event) =>
							setValues((prev) => ({ ...prev, email: event.target.value }))
						}
					/>
					<FormLabel>Enter your Password</FormLabel>
					<InputGroup size="md">
						<Input
							htmlSize={40}
							width="auto"
							type={show ? "text" : "password"}
							placeholder="Enter password"
							borderColor="#d9d9d9"
							onChange={(event) =>
								setValues((prev) => ({ ...prev, pass: event.target.value }))
							}
						/>
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<div style={{ display: "flex" }}>
						<p>Doesn't have an account ?</p>
						<Button
							border="none"
							background="none"
							marginTop="-2px"
							marginLeft="-4px"
							color="blue"
							boxShadow="none"
							onClick={loginForm}
							_hover={{ background: "none", cursor: "pointer" }}
							size="sm"
						>
							Log In
						</Button>
					</div>
					<div
						style={{
							color: "blue",
							marginTop: "20px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<button
							// className={classes.ConBtn}
							disabled={submitButtonDisabled}
							// onClick={handleSubmission}
						>
							Continue
						</button>
					</div>
				</FormControl>
			)}
		</>
	);
}
